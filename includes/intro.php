<section class="intro-section pt-5">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-lg-4">
        <h1 class="display-4 fw-bold mb-3">Navigating the digital landscape for success</h1>
        <p class="mb-4">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button class="btn intro-btn btn-lg me-3">Book a consultation</button>
      </div>
      <div class="col-lg-8 text-center">
        <img src="images/megaphoner.svg" alt="Company Logo" class="img-fluid">
      </div>
    </div>
    <div class="row align-items-center logos-margin">
        <?php
            $images = [
            "images/Company-logo1.svg",
            "images/Company-logo2.svg",
            "images/Company-logo3.svg",
            "images/Company-logo4.svg",
            "images/Company-logo5.svg",
            "images/Company-logo6.svg"
            ];
            foreach ($images as $img) {
            echo '<div class="col-2 text-center"><svg class="img-fluid logo-svg"><use xlink:href="' . $img . '"></use></svg></div>';
        }
      ?>
    </div>
  </div>
</section>