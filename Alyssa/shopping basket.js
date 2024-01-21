

var promoCode;
var promoPrice;
var fadeTime = 300;




/* Assign actions */
var quantityInputs = document.querySelectorAll('.quantity input');
for (var i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('change', function() {
    updateQuantity(this);
  });
}

var removeButtons = document.querySelectorAll('.remove button');
for (var i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', function() {
    removeItem(this);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateSumItems();
});

var promoCodeButton = document.querySelector('.promo-code-cta');
promoCodeButton.addEventListener('click', function() {
  promoCode = document.getElementById('promo-code').value;

  if (promoCode === '9DJF21') { // Adjusted the promo code check to '9DJF21'
    // Apply a 30% discount (70% of the total price)
    promoPrice = recalculateCart() * 0.3;
  } else if (promoCode !== '') {
    alert("Invalid Promo Code");
    promoPrice = 0;
  }

  if (promoPrice) {
    var summaryPromo = document.querySelector('.summary-promo');
    summaryPromo.classList.remove('hide');
    var promoValue = document.querySelector('.promo-value');
    promoValue.textContent = promoPrice.toFixed(2);
    recalculateCart(true);
  }
});

function recalculateCart(onlyTotal) {
  var subtotal = 0;

  /* Sum up row totals */
  var basketProducts = document.querySelectorAll('.basket-product');
  for (var i = 0; i < basketProducts.length; i++) {
    subtotal += parseFloat(basketProducts[i].querySelector('.subtotal').textContent);
  }

  /* Calculate totals */
  var total = subtotal;

  var promoPriceElement = document.querySelector('.promo-value');
  var promoPrice = parseFloat(promoPriceElement.textContent);
  if (promoPrice) {
    if (subtotal >= 10) {
      total -= promoPrice;
    } else {
      alert('Order must be more than SGD $10 for Promo code to apply.');
      var summaryPromo = document.querySelector('.summary-promo');
      summaryPromo.classList.add('hide');
    }
  }

  if (onlyTotal) {
    var totalValueElements = document.querySelectorAll('.total-value');
    for (var i = 0; i < totalValueElements.length; i++) {
      totalValueElements[i].style.display = 'none';
    }

    var basketTotal = document.getElementById('basket-total');
    basketTotal.textContent = total.toFixed(2);

    for (var i = 0; i < totalValueElements.length; i++) {
      totalValueElements[i].style.display = 'block';
    }
  } else {
    var subtotalValue = document.getElementById('basket-subtotal');
    subtotalValue.textContent = subtotal.toFixed(2);

    var basketTotal = document.getElementById('basket-total');
    basketTotal.textContent = total.toFixed(2);


    document.addEventListener('DOMContentLoaded', function() {
      var checkoutButton = document.querySelector('.checkout-cta');
      if (total === 0) {
        checkoutButton.style.display = 'none';
      } else {
        checkoutButton.style.display = 'block';
      }
    });

    var finalValueElements = document.querySelectorAll('.final-value');
    for (var i = 0; i < finalValueElements.length; i++) {
      finalValueElements[i].style.display = 'none';
    }

    for (var i = 0; i < finalValueElements.length; i++) {
      finalValueElements[i].style.display = 'block';
    }
  }
  return total; // Return the calculated total for use in the promoCodeButton click event
}

/* Update quantity */
function updateQuantity(quantityInput) {
  var productRow = quantityInput.parentElement.parentElement;
  var price = parseFloat(productRow.querySelector('.price').textContent);
  var quantity = parseInt(quantityInput.value);
  var linePrice = price * quantity;

  var subtotalElements = productRow.querySelectorAll('.subtotal');
  for (var i = 0; i < subtotalElements.length; i++) {
    subtotalElements[i].style.display = 'none';
  }

  for (var i = 0; i < subtotalElements.length; i++) {
    subtotalElements[i].textContent = linePrice.toFixed(2);
    recalculateCart();
    subtotalElements[i].style.display = 'block';
  }

  var itemQuantityElements = productRow.querySelectorAll('.item-quantity');
  for (var i = 0; i < itemQuantityElements.length; i++) {
    itemQuantityElements[i].textContent = quantity;
  }

  updateSumItems();
}

function updateSumItems() {
  var sumItems = 0;
  var quantityInputs = document.querySelectorAll('.quantity input');
  for (var i = 0; i < quantityInputs.length; i++) {
    sumItems += parseInt(quantityInputs[i].value);
  }

  var totalItemsElement = document.querySelector('.total-items');
  totalItemsElement.textContent = sumItems;
}

/* Remove item from cart */
function removeItem(removeButton) {
  var productRow = removeButton.parentElement.parentElement;
  productRow.style.animation = 'fadeOut ' + fadeTime + 'ms';
  setTimeout(function() {
    productRow.remove();
    recalculateCart();
    updateSumItems();
  }, fadeTime);
}




function submitForm() {
  // Get the form element
  const form = document.getElementById("shoppingBasketForm");

  // Get the form values
  const promo = document.getElementById("promo-code").value;
  const subtotal = document.getElementById("basket-subtotal").textContent;
  const total = document.getElementById("basket-total").textContent;

  // Log the form data
  console.log("Promo: " + promo);
  console.log("Subtotal: " + subtotal);
  console.log("Total: " + total);

  // Construct the URL with form data
  const url = `trial1.html?Promo=${promo}&Subtotal=${subtotal}&Total=${total}`;

  // Redirect to the trial1.html page with the form data in the URL
  window.location.href = url;
}






