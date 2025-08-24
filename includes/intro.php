<section class="intro-section section-container intro-padding-t">
  <div class="container">
    <div class="intro-contents d-flex flex-row justify-content-between align-items-center">
      <span class="intro-text">
        <h1 class="fw-bold ">Navigating the digital landscape for success</h1>
        <h5>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </h5>
        <button class="btn intro-btn btn-lg me-3">Book a consultation</button>
      </span>
      <span class="text-center intro-logo">
        <img src="images/megaphoner.svg" alt="Company Logo" class="img-fluid">
      </span>
    </div>
    <div class="align-items-center logos-margin logos-row">
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
            echo '<div class=" text-center logo-svg"><svg class="img-fluid logo-svg"><use xlink:href="' . $img . '"></use></svg></div>';
        }
      ?>
    </div>
  </div>
</section>