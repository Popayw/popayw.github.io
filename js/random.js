var posts=["2023/08/07/AdFind/","2023/08/05/CSRF/","2023/07/26/CTFHUB-RCE/","2023/08/03/CTFSHOW-Nodejs/","2023/08/30/CTFSHOW-SQL注入/","2023/07/26/CTFSHOW-PHP特性/","2023/07/28/CTFSHOW-SSTI/","2023/08/02/CTFSHOW-XXE/","2023/08/09/CTFSHOW-信息搜集/","2023/07/26/CTFSHOW-反序列化/","2023/08/15/CTFSHOW-文件上传/","2023/08/13/CTFSHOW-文件包含/","2023/07/26/CTFSHOW-命令执行/","2023/08/09/CTFSHOW-爆破/","2023/07/26/Docker/","2023/08/03/GO/","2023/08/17/Java-RMI/","2023/08/15/Java反射/","2023/08/06/Java反序列化/","2023/07/29/MISC/","2023/08/17/NepCTF-2023/","2023/08/03/Nodejs原型链污染/","2023/08/03/PHP反序列化-wp/","2023/07/26/PHP反序列化/","2023/07/26/PHP特性/","2023/08/06/Python原型链污染/","2023/08/05/Python反序列化-wp/","2023/07/30/Python反序列化/","2023/07/28/Python沙箱逃逸/","2023/07/26/RCE/","2023/07/26/RCE补充/","2023/08/05/SSRF/","2023/07/26/SSTI-模板注入/","2023/08/23/URLDNS/","2023/07/26/XSS/","2023/07/31/XXE-XML外部实体注入/","2023/08/03/XXE-wp/","2023/07/26/sqlmap/","2023/07/26/sql注入/","2023/07/26/信息搜集/","2023/07/26/文件上传/","2023/08/05/文件包含/"];
                    function toRandomPost() {
                        window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");
                        new Vue({
                            data: function () {
                                this.$notify({
                                    title: "跳转中",
                                    message: "前往随机文章",
                                    position: 'top-left',
                                    offset: 50,
                                    showClose: true,
                                    type: "success",
                                    duration: 4000
                                });
                            }
                        });
                    };