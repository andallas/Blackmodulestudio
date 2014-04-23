<?php
	if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Projects extends CI_Controller
	{
		public function __construct()
		{
			parent::__construct();
			$this->load->helper('url');
		}

		public function view($page)
		{
			if(!file_exists('application/views/projects/'.$page.'.php'))
			{
				show_404();
			}

			$data['title'] = ucfirst($page);

			$this->load->view('templates/header', $data);
			$this->load->view('templates/nav', $data);
			$this->load->view('projects/'.$page, $data);
			$this->load->view('templates/footer');
		}
	}