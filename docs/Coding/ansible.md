---
nav:
  title: Ansible
  order: -1
group:
  title: Basics
  order: 1
---

# Getting Started with Ansible

Ansible is an automation tool used for configuration management, application deployment, and task automation. It helps simplify system administration, automate repetitive tasks, and improve efficiency. This article introduces the fundamental concepts and usage of Ansible.

## What is Ansible?

Ansible is an open-source automation tool widely used for automation tasks in IT environments. It uses the SSH protocol for remote management of servers without the need to install client agents on managed servers. This makes Ansible easy to set up and use, especially in large-scale environments.

## Features of Ansible

Ansible comes with many useful features, including:

1. **Simplicity**: Ansible uses YAML language to define tasks and playbooks, making it easy to understand and write.

2. **Agentless**: Ansible doesn't require the installation of agents on target hosts, reducing configuration and maintenance complexity.

3. **Modularity**: Ansible uses modules to perform tasks, with a large number of built-in modules and the ability to write custom ones.

4. **Extensibility**: You can easily extend Ansible's functionality to meet your specific needs.

## Installing Ansible

To get started with Ansible, you need to install it on your control node. You can use package managers like apt, yum, or brew to install Ansible or use pip to install the latest version.

Here's an example of installing Ansible on Ubuntu using apt:

```bash
sudo apt update
sudo apt install ansible
```

## Creating an Ansible Host Inventory

Ansible uses a host inventory file to specify the target hosts to manage. You can create a text file listing the IP addresses or hostnames of your target hosts. For example, create a file named `hosts`:

```plaintext
[web_servers]
web1.example.com
web2.example.com

[db_servers]
db1.example.com
db2.example.com
```

## Creating an Ansible Playbook

Ansible playbooks are collections of tasks written in YAML format. They define the operations you want to perform on target hosts. Here's a simple Ansible playbook example for updating software packages on target hosts:

```yaml
---
- name: Update packages
  hosts: web_servers
  tasks:
    - name: Update apt packages
      apt:
        name: "*"
        state: latest
```

## Running an Ansible Playbook

To run an Ansible playbook, use the `ansible-playbook` command and specify the path to the playbook file. For example:

```bash
ansible-playbook my-playbook.yml
```

This is just an introductory overview of Ansible. You can delve deeper into advanced Ansible features like roles, variables, and templates. Ansible offers powerful automation capabilities that simplify and accelerate your IT tasks.

We hope this getting started guide proves helpful to you!
