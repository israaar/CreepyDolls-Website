<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:template match="/">
<html lang="en">
<head>
<title>Creepies - Sitemap</title>
<meta name="keywords" content="doll, dolls, collection, collectors,creepies, community, tips" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="description" content="Online community for doll lovers and collectors."/>
<meta name="robots" content="noindex,nofollow"/>
<style>
/*SITEMAP.XML*/
#sitemapContent{
width:700px;
min-height:560px;
margin:10px auto;
}
#sitemapContent h2{
font-size:30px !important;
margin:5px;
margin-bottom:0px;
}
#sitemapContent table {
border-collapse: collapse;
width:700px;
}
#sitemapContent table, #sitemapContent th, #sitemapContent td {
border: 1px solid silver;
}
#sitemapContent th,
#sitemapContent td{
padding:5px;
height:35px;
}
#sitemapContent th{
	color:#7cb;
}
#sitemapContent hr{
margin-bottom:15px;
color:white;
}
.zebra{
background-color:#333;
}
.zebraHover{
background-color:gray;

}
</style>
 <link rel="icon" href="img/icons/map.png"/>
 <link rel="stylesheet" type = "text/css" href="stil.css"/>
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<!-- Add mousewheel plugin (this is optional) -->
<script type="text/javascript" src="fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>

<!-- Add fancyBox -->
<link rel="stylesheet" href="fancybox/source/jquery.fancybox.css" type="text/css" media="screen" />
<script type="text/javascript" src="fancybox/source/jquery.fancybox.pack.js"></script>

<script type="text/javascript" src="provera.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="poll.js"></script>
<script type="text/javascript" src="search.js"></script>
		<!-- Website Font style -->
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"/>
		
		<!-- Google Fonts -->
		
		<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'/>
		<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'/>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300|Noto+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>
		<link href="https://fonts.googleapis.com/css?family=Fjalla+One|Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>

 
    <meta charset="UTF-8"/>
    </head>
    <body id="myPage">
    <div id="wrapper container-fluid">
        
       
<div class="navbar navbar-fixed-top">

  <div class="container-fluid">
  
    <div class="navbarnavbar-fixed-top">
  <div class="container-fluid">
	   <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="index.html#home"><img src='img/logo.png' width='150'/></a> 
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
   <ul class="nav navbar-nav ">
   
   <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">DOLLS</a>
   <ul class="dropdown-content dropdown-menu"> 
   <li><a href="index.html#two">COLLECTING</a> </li>
   <li><a href="index.html#three">POLL</a> </li>
   <li><a href="index.html#gallery">GALLERY</a> </li>
  
    </ul> </li> 
   <li class="dropdown"><a href="#">ABOUT</a>
    <ul class="dropdown-content dropdown-menu"> 
   <li><a href="index.html#one">WEBSITE</a> </li>
   <li><a href="index.html#author">AUTHOR</a> </li>
   <li> <a href="documentation.pdf" target="_blank">DOCUMENTATION</a></li>
   
  
    </ul>
   </li> 
   <li><a href="index.html#four">CONTACT</a></li> 
   
   </ul> 
   
   <ul class="nav navbar-nav navbar-right">
    
   <li><a href="index.html#register"><span class="glyphicon glyphicon-user"></span></a></li> 
   <li><a href="index.html#login"><span class="glyphicon glyphicon-log-in"></span></a></li> </ul>
  
  
   <div class="col-sm-3 col-md-3 pull-right">
        <form class="navbar-form" role="search">
        <div class="input-group">
            <input type="search" class="form-control" placeholder="Search" id="tbPretraga" name="pretraga"/>
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit" onClick="pretrazi();"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
        </div></div>
</div>



 
  </div>

  </div>
  
	

       
        <div id="content">
		 <div class="text-center row container-fluid">


						<div id="sitemapContent">
				<h2 class="orangeText">Site map</h2>
				<hr/>
				<table border="1" style="border-color:orange;color:white;font-family:Lato">
			<thead><tr><th>Priority</th><th>URL</th><th>Updated on</th><th>Update rate</th></tr></thead>
			<tbody>
			<xsl:for-each select="sm:urlset/sm:url">
			<tr>
						<td><xsl:value-of select="sm:priority"/></td>
						<td><xsl:value-of select="sm:loc"/></td>
			<td><xsl:value-of select="sm:lastmod"/></td>
			<td><xsl:value-of select="sm:changefreq"/></td>
			</tr>
			</xsl:for-each>
			</tbody>
			</table>
			</div>

		 </div>  </div>
	   <footer class="text-center">
  <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <span class="icons left">
  <a href="sitemap.xml" target="_blank"><img src="img/icons/map.png"/></a>
   <a href="rss.xml" target="_blank"><img src="img/icons/rss.png"/></a>
   <a href="documentation.pdf" target="_blank"><img src="img/icons/doc.gif"/></a>
  </span>
 <span class="icons right">
 <a href="www.deviantart.com"><img src="img/icons/Deviantart.png"/></a>
 <a href="https://www.instagram.com/popovysisters"><img src="img/icons/Instagram.png"/></a>
 <a href="www.pinterest.com"><img src="img/icons/Pinterest.png"/></a>
 <a href="www.snapchat.com"><img src="img/icons/Snapchat.png"/></a>
 <a href="www.tumblr.com"><img src="img/icons/Tumblr.png"/></a>

 </span>
</footer>
	  </div></div>
        
        
     
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
