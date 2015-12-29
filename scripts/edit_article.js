<!DOCTYPE html>
<html>
<head>
	<title>Eidt article</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- bootstrap css -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<!-- font-awesom -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<!-- common css -->
	<link rel="stylesheet" type="text/css" href="css/common.css">
	<!-- custom css -->
	<link rel="stylesheet" type="text/css" href="css/edit_article.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- bootstrap javascript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<!-- common javascript -->
	<script type="text/javascript" src="scripts/common.js"></script>
	<!-- custom javascript -->
	<script type="text/javascript" src="scripts/edit_article.js"></script>
</head>
<body>
	<!-- navigation bar -->
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#homeNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>                        
				</button>
				<a class="navbar-brand" href="#"><i class="fa fa-heart"></i> 一起來晚餐吧!</a>
			</div>
			<div class="collapse navbar-collapse" id="homeNavbar">
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a href="home.html"><span class="glyphicon glyphicon-home"></span> 首頁</a></li>
					<li><a href="#"><span class="glyphicon glyphicon-info-sign"></span> 關於</a></li>
					<li><a href="profile.html"><span class="glyphicon glyphicon-user"></span>申請帳號</a></li>
					<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登入</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- main container -->
	<div class="container">
		<div class="jumbotron" >
			<h1 class="text-center text-bold">寫下你想說的吧 <i class="fa fa-heart"></i></h1>
		</div>
		<div class="row">
			<div class="panel panel-default">
				<div class="panel-body inner">
					<form class="form-horizontal">
						<!-- article title -->
						<div class="form-group">
							<label class="control-label col-sm-1" for="title">標題:</label>
							<div class="col-sm-11">
								<input type="text" class="form-control" id="title" placeholder="">
							</div>
						</div>
						<!-- insert img modal button -->
						<div class="form-group">
							<div class="col-sm-offset-1 col-sm-11">
								<button type="button" class="btn btn-info" data-toggle="modal" data-target="#insertImgModal"><i class="fa fa-picture-o"></i> 插入圖片</button>
							</div>
						</div>
						<!-- profileImg modal -->
						<div id="insertImgModal" class="modal fade">
							<div class="modal-dialog modal-lg">
								<!-- content -->
								<div class="modal-content">
									<!-- header -->
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h4 class="modal-title">Modal Header</h4>
									</div>
									<!-- body -->
									<div class="modal-body">
										<!-- drop area -->
										<div class="form-group">
											<div class="col-sm-offset-2 col-sm-8">
												<div class="drop-area">
													<input class="hidden" type='file' name="uploadImg" id="uploadImg"/>
													<p>
														將本機圖片拖曳至此<br>
														或<br>
														點擊這裡
													</p>
												</div>
											</div>
										</div>
										<!-- hint text -->
										<div class="form-group">
											<div class="col-sm-offset-2 col-sm-8" style="text-align:center">
												<p>或是貼上圖片連結↓</p>
											</div>
										</div>
										<!-- link input -->
										<div class="form-group">
											<label class="control-label col-sm-2" for="title">圖片連結:</label>
											<div class="col-sm-8">
												<input id="uploadImgLink" name="uploadImgLink" type="text" class="form-control" id="title" placeholder="http://example.com/img.jpg">
											</div>
										</div>
									</div>
									<!-- footer -->
									<div class="modal-footer">
										<button type="button" id="cancel" class="btn btn-default" data-dismiss="modal">取消</button>
										<button type="button" id="uploadImgConfirm" class="btn btn-default pull-left" data-dismiss="modal">確定</button>
									</div>
								</div>
							</div>
						</div>
						<!-- article content -->
						<div class="form-group">
							<label class="control-label col-sm-1" for="content">內文:</label>
							<div class="col-sm-11">
								<div class="form-control editable" id="editableContent" contenteditable="true" style="width:100%;height:500px;overflow:auto" id="content"></div>
							</div>
						</div>
						<!-- article type -->
						<div class="form-group">
							<label class="control-label col-sm-1" for="articleType">文章分類:</label>
							<div class="col-sm-11">
								<select class="form-control" id="articleType">
									<option>未分類</option>
									<option>餐後心情</option>
									<option>美食分享</option>
									<option>美妙旋律</option>
									<option>我想抒發</option>
									<option>時尚潮流</option>
								</select>
							</div>
						</div>
						<!-- subimt button -->
						<div class="form-group">
							<div class="col-sm-11 col-sm-offset-1">
								<input type="submit" class="btn btn-default" value="發表">
								<input type="submit" class="btn btn-default" value="取消">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- footer -->
	<footer class="container-fluid text-center">
		<p>&copy 2015 Dating</p>
	</footer>
</body>
</html>
