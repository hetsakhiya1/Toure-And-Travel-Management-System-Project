<?php
session_start();
error_reporting(0);
include('includes/config.php');
?>
<!DOCTYPE HTML>
<html>
<head>
<title>Luxora Trails | Experience Travel Beyond Expectations</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Discover luxury travel experiences with our premium tourism management system">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Core CSS -->
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<link href="css/style.css" rel='stylesheet' type='text/css' />
<link href="assets/css/animations.css" rel='stylesheet' type='text/css' />
<link href="assets/css/responsive.css" rel='stylesheet' type='text/css' />
<link href="css/font-awesome.css" rel="stylesheet">

<!-- AOS Animation Library -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- jQuery and Bootstrap JS -->
<script src="js/jquery-1.12.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<!-- AOS Library -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
  });
</script>
</head>
<body>
<?php include('includes/header.php');?>
<div class="banner">
	<div class="container">
		<!-- <h1 class="wow zoomIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;" style="color:#000 !important"> TMS - Management System</h1> -->
	</div>
</div>






<!---holiday---->
<div class="container">
	<div class="holiday">
	

	<h3 data-aos="fade-up">Signature Travel Experiences</h3>
	<p style="text-align: center; color: #6B7280; font-size: 1.125rem; margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">At Luxora Trails, we craft bespoke journeys designed for those who seek elegance, comfort, and unforgettable experiences</p>


					
<?php $sql = "SELECT * from tbltourpackages order by rand() limit 4";
$query = $dbh->prepare($sql);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $result)
{	?>
			<div class="rom-btm" data-aos="fade-up" data-aos-delay="100">
				<div class="col-md-3 room-left">
					<img src="admin/pacakgeimages/<?php echo htmlentities($result->PackageImage);?>" class="img-responsive" alt="<?php echo htmlentities($result->PackageName);?>">
				</div>
				<div class="col-md-6 room-midle">
					<h4><?php echo htmlentities($result->PackageName);?></h4>
					<h6><?php echo htmlentities($result->PackageType);?></h6>
					<p><b>Destination:</b> <?php echo htmlentities($result->PackageLocation);?></p>
					<p><b>Featured Amenities:</b> <?php echo htmlentities($result->PackageFetures);?></p>
				</div>
				<div class="col-md-3 room-right">
					<h5>₹<?php echo htmlentities($result->PackagePrice);?></h5>
					<a href="package-details.php?pkgid=<?php echo htmlentities($result->PackageId);?>" class="view">Explore Details</a>
				</div>
				<div class="clearfix"></div>
			</div>

<?php }} ?>
			
		
<div style="text-align: center; margin-top: 2rem;"><a href="package-list.php" class="view">View All Signature Experiences</a></div>
</div>
			<div class="clearfix"></div>
	</div>



<!--- routes ---->
<div class="routes">
	<div class="container">
		<div class="col-md-4 routes-left" data-aos="fade-up" data-aos-delay="100">
			<div class="rou-left">
				<a href="#"><i class="glyphicon glyphicon-list-alt"></i></a>
			</div>
			<div class="rou-rgt">
				<h3>80000</h3>
				<p>Enquiries</p>
			</div>
				<div class="clearfix"></div>
		</div>
		<div class="col-md-4 routes-left" data-aos="fade-up" data-aos-delay="200">
			<div class="rou-left">
				<a href="#"><i class="fa fa-user"></i></a>
			</div>
			<div class="rou-rgt">
				<h3>1900</h3>
				<p>Registered Users</p>
			</div>
				<div class="clearfix"></div>
		</div>
		<div class="col-md-4 routes-left" data-aos="fade-up" data-aos-delay="300">
			<div class="rou-left">
				<a href="#"><i class="fa fa-ticket"></i></a>
			</div>
			<div class="rou-rgt">
				<h3>7,00,00,000+</h3>
				<p>Bookings</p>
			</div>
				<div class="clearfix"></div>
		</div>
		<div class="clearfix"></div>
	</div>
</div>

<?php include('includes/footer.php');?>
<!-- signup -->
<?php include('includes/signup.php');?>			
<!-- //signu -->
<!-- signin -->
<?php include('includes/signin.php');?>			
<!-- //signin -->
<!-- write us -->
<?php include('includes/write-us.php');?>			
<!-- //write us -->

<!-- Custom JS -->
<script src="assets/js/main.js"></script>
<script src="assets/js/animations.js"></script>
</body>
</html>