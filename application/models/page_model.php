<?php
	if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Page_model extends CI_Model
	{
		public function __construct()
		{
			$this->load->helper('date');
			$this->load->database();
		}

		public function get_post($slug = FALSE)
		{
			if($slug === FALSE)
			{
				$query = $this->db->order_by('date', 'desc')->get_where('post');
				return $query->result_array();
			}

			$query = $this->db->order_by('date', 'desc')->get_where('post', array('slug' => $slug));
			return $query->row_array();
		}

		public function set_post()
		{
			$this->load->helper('url');

			$slug = url_title($this->input->post('title'), 'dash', TRUE);
			date_default_timezone_set("America/Los_Angeles");
			$data = array(
				'title' => $this->input->post('title'),
				'date' => date('Y-m-d H:i:s'),
				'slug' => $slug,
				'text' => $this->input->post('text')
			);

			return $this->db->insert('post', $data);
		}

		public function remove_post($id)
		{
			$this->db->delete('post', array('id' => $id));
		}
	}
?>