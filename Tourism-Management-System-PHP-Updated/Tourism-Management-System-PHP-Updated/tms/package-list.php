<?php
session_start();
error_reporting(0);
include('includes/config.php');
?>
<!DOCTYPE HTML>
<html>
<head>
<title>Luxora Trails | Signature Travel Experiences</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Browse our curated collection of luxury travel packages">

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
  AOS.init({ duration: 800, easing: 'ease-out', once: true });
</script>
</head>
<body>
<?php include('includes/header.php');?>
<!--- banner ---->
<div class="banner-3">
	<div class="container">
		<h1 data-aos="fade-up">Curate Your Luxury Escape</h1>
	</div>
</div>
<!--- /banner ---->
<!--- rooms ---->
<div class="rooms">
	<div class="container">
		
		<div class="room-bottom">
			<h3 data-aos="fade-up">Signature Travel Experiences</h3>
			<p style="text-align: center; color: #6B7280; font-size: 1.125rem; margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">Bespoke journeys crafted for discerning travelers who demand excellence</p>

					
<?php $sql = "SELECT * from tbltourpackages";
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
			
		
		
		</div>
	</div>
</div>
<!--- /rooms ---->

<!--- /footer-top ---->
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