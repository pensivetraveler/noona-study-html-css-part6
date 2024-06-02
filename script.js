window.onload = function() {
    var modalButton = document.getElementById("modal");
    var dialog = document.getElementById("homework");
    
    // “modal button opens the <dialog> modally
    modalButton.addEventListener("click", function onOpen() {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    });
    // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    dialog.addEventListener("close", function onClose() {
    
    });
}
