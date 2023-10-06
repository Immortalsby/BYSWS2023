---
nav:
  title: Centos SSH port change
  order: -1
group:
  title: 工具-Linux
  order: 1
---

# Centos7修改ssh端口

## 第一步：修改sshd配置文件

我这里用到的是Centos7的系统：

vi /etc/ssh/sshd_config

在#Port 22下面添加：
Port 22
Port 2245

也可以使用命令行

```bash
sudo sed -i '/^#Port 22/a Port 22\nPort 2245' /etc/ssh/sshd_config
```

## 第二步：添加防火墙白名单

还是在Centos7之下：

```bash
firewall-cmd --zone=public --add-port=2245/tcp --permanent #永久添加2245端口
firewall-cmd --reload #重新加载防火墙配置以生效
```

## 第三步：修改SElinux当中对于ssh_port_t的生效端口

```bash
semanage port -l | grep ssh #查看ssh_port_t目前的生效端口
/usr/sbin/sestatus -v #查看seLinux的状态，需要是enable
semanage port -a -t ssh_port_t -p tcp 2245 #添加2245到ssh_port_t目前的生效端口
semanage port -l | grep ssh #再次查看ssh_port_t目前的生效端口是否有2245
```

## 第四步：测试2245是否可以连接
```bash
ssh -p2245 root@ip #测试连接性
```

## 第五步：禁用22端口(确保上一步可以成功之后在进行这步)

vi /etc/ssh/sshd_config

在Port 22前面添加#

或者使用命令行：
```bash
sudo sed -i '/^Port 22$/s/^/#/' /etc/ssh/sshd_config
```

## 第六步：重启sshd

```bash
service sshd restart
```

## 以下是一键修改工具：
```bash
sudo sed -i '/^Port 22$/s/^/#/' /etc/ssh/sshd_config
firewall-cmd --zone=public --add-port=2245/tcp --permanent
semanage port -a -t ssh_port_t -p tcp 2245
sudo sed -i '/^Port 22$/s/^/#/' /etc/ssh/sshd_config
service sshd restart
```