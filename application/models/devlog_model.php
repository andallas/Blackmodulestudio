<?php
	if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Devlog_model extends CI_Model
	{
		public function __construct()
		{
			$this->load->helper('date');
			$this->load->database();
		}

		public function get_devlog($project, $slug = FALSE)
		{
			if($slug === FALSE)
			{
				$query = $this->db->order_by('date', 'desc')->get_where('articles', array('project' => $project));
				return $query->result_array();
			}

			$query = $this->db->order_by('date', 'desc')->get_where('articles', array('project' => $project, 'slug' => $slug));
			return $query->row_array();
		}

		public function set_devlog($project)
		{
			$this->load->helper('url');

			$slug = url_title($this->input->post('title'), 'dash', TRUE);
			date_default_timezone_set("America/Los_Angeles");
			$data = array(
				'title' => $this->input->post('title'),
				'project' => $project,
				'date' => date('Y-m-d H:i:s'),
				'slug' => $slug,
				'text' => $this->input->post('text')
			);

			return $this->db->insert('articles', $data);
		}

		public function remove_devlog($id)
		{
			$this->db->delete('articles', array('id' => $id));
		}
	}
?>