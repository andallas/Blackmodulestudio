<?php
	if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Devlog extends CI_Controller
	{
		public function __construct()
		{
			parent::__construct();
			$this->load->helper('url');
			$this->load->model('devlog_model');
		}

		public function view($project, $slug)
		{
			$data['devlog'] = $this->devlog_model->get_devlog($project, $slug);

			if (empty($data['devlog']))
			{
				show_404();
			}

			$data['title'] = $data['devlog']['title'];
			$data['project'] = $project;

			$this->load->view('templates/header', $data);
			$this->load->view('templates/nav', $data);
			$this->load->view('devlog/view', $data);
			$this->load->view('templates/footer');
		}

		public function create($project)
		{
			$this->load->helper('form');
			$this->load->library('form_validation');

			$data['title'] = 'Create a devlog article';
			$data['project'] = $project;

			$this->form_validation->set_rules('title', 'Title', 'required');
			$this->form_validation->set_rules('text', 'Text', 'required');

			if ($this->form_validation->run() === FALSE)
			{
				$this->load->view('templates/header', $data);
				$this->load->view('templates/nav', $data);
				$this->load->view('devlog/create', $data);
				$this->load->view('templates/footer');
			}
			else
			{
				$this->devlog_model->set_devlog($project);
				redirect('devlog/'.$project, $data);
			}
		}

		public function remove($project, $id)
		{
			$this->devlog_model->remove_devlog($id);
			redirect('devlog/'.$project, $data);
		}

		public function project($project)
		{
			$data['devlog'] = $this->devlog_model->get_devlog($project);

			$titleArray = explode("-", $project);
			$title = "";
			foreach($titleArray as $value)
			{
				$title = $title." ".ucfirst($value);
			}

			$data['title'] = $title.' Devlog Archives';
			$data['project'] = $project;

			$this->load->view('templates/header', $data);
			$this->load->view('templates/nav', $data);
			$this->load->view('devlog/index', $data);
			$this->load->view('templates/footer');
		}
	}
?>