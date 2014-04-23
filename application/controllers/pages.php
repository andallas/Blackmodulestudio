<?php
	if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Pages extends CI_Controller
	{
		public function __construct()
		{
			parent::__construct();
			$this->load->helper('url');
			$this->load->model('page_model');
		}

		public function view($page = 'home')
		{
			if(!file_exists('application/views/pages/'.$page.'.php'))
			{
				redirect('home');
				//show_404();
			}

			$data['title'] = ucfirst($page);

			$this->load->view('templates/header', $data);
			$this->load->view('templates/nav', $data);
			$this->load->view('pages/'.$page, $data);

			if($page == 'home')
			{
				$data['post'] = $this->page_model->get_post();

				if(!empty($data['post']))
				{
					$this->load->view('post/index', $data);
				}
			}

			$this->load->view('templates/footer');
		}

		public function create()
		{
			$this->load->helper('form');
			$this->load->library('form_validation');

			$data['title'] = 'Create a news post';

			$this->form_validation->set_rules('title', 'Title', 'required');
			$this->form_validation->set_rules('text', 'Text', 'required');

			if ($this->form_validation->run() === FALSE)
			{
				$this->load->view('templates/header', $data);
				$this->load->view('templates/nav', $data);
				$this->load->view('post/create', $data);
				$this->load->view('templates/footer');
			}
			else
			{
				$this->page_model->set_post();
				redirect('home');
			}
		}

		public function remove($id)
		{
			$this->page_model->remove_post($id);
			redirect('home');
		}
	}