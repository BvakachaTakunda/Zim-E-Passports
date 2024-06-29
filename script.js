
  function toggleOption(optionId) {
    var optionParagraph = document.getElementById(optionId);
    optionParagraph.parentElement.classList.toggle('active');
  }
  




    function toggleContent() {
        var content = document.getElementById("myContent");
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      }


        function toggleOption(optionId) {
    var optionParagraph = document.getElementById(optionId);
    optionParagraph.parentElement.classList.toggle('active');
  }
  


    




function countApprovedPhotos() {
  let count = 0;
  const interval = setInterval(() => {
      document.getElementById('approvedCount').textContent = count;
      count++;
      if (count > 2000) {
          clearInterval(interval);
      }
  }, 1); 
}

function countAcceptanceRate() {
  let percentage = 0;
  const interval = setInterval(() => {
      document.getElementById('acceptanceRate').textContent = percentage + '%';
      percentage++;
      if (percentage > 200) {
          clearInterval(interval);
      }
  }, 10); 
}

window.onload = function() {
  countApprovedPhotos();
  countAcceptanceRate();
};