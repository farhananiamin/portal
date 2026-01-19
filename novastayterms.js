/**
 * FAQ Search & Highlight Script
 * Logic: Filters items based on input and wraps matching text in <mark> tags.
 */
function filterFAQs() {
    // 1. Get the search term from the input box
    const input = document.getElementById('faqSearch').value.toLowerCase();
    const items = document.querySelectorAll('.faq-item');
    const noResults = document.getElementById('noResults');
    let hasMatches = false;

    items.forEach(item => {
        const summary = item.querySelector('summary');
        const content = item.querySelector('.content p');
        
        // 2. Store original text in 'data' attributes so we don't lose the clean 
        // version when we start adding <mark> tags.
        if (!item.dataset.origSum) item.dataset.origSum = summary.innerHTML;
        if (!item.dataset.origCon) item.dataset.origCon = content.innerHTML;

        let sText = item.dataset.origSum;
        let cText = item.dataset.origCon;

        // 3. Check if search term exists in summary OR content
        if (input && (sText.toLowerCase().includes(input) || cText.toLowerCase().includes(input))) {
            item.style.display = "block";
            hasMatches = true;

            // 4. Create a regular expression to find all instances of the search word
            const regex = new RegExp(`(${input})`, 'gi');
            
            // 5. Replace plain text with text wrapped in <mark> for highlighting
            summary.innerHTML = sText.replace(regex, '<mark>$1</mark>');
            content.innerHTML = cText.replace(regex, '<mark>$1</mark>');
            
            // 6. Auto-expand the question so the user sees the answer immediately
            item.open = true; 
        } else {
            // 7. If no match, reset to original clean text
            summary.innerHTML = sText;
            content.innerHTML = cText;
            
            if (!input) {
                // If search box is empty, show everything and close all boxes
                item.style.display = "block";
                item.open = false; 
            } else {
                // If search has text but no match, hide this item
                item.style.display = "none";
            }
        }
    });

    // 8. Show the "No matching questions found" message if nothing matches
    if (noResults) {
        noResults.style.display = hasMatches || !input ? "none" : "block";
    }
}






const modal = document.getElementById("formModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn");

// When user clicks YOUR purple button, show the form
btn.onclick = function() {
  modal.style.display = "block";
}

// When user clicks (X), hide the form
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When user clicks anywhere OUTSIDE the white box, hide it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}