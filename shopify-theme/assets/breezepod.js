(() => {
  const forms = document.querySelectorAll("[data-product-form]");

  forms.forEach((form) => {
    const variantIdInput = form.querySelector("[data-bp-variant-id]");
    const priceNode = document.querySelector("[data-bp-price]");
    const compareNode = document.querySelector("[data-bp-compare-price]");
    const choices = form.querySelectorAll(".bp-variant-choice");

    form.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement) || target.name !== "bp_variant_choice") {
        return;
      }

      if (variantIdInput) {
        variantIdInput.value = target.value;
      }

      choices.forEach((choice) => choice.classList.remove("is-selected"));
      target.closest(".bp-variant-choice")?.classList.add("is-selected");

      if (priceNode && target.dataset.price) {
        priceNode.textContent = target.dataset.price;
      }

      if (compareNode) {
        compareNode.textContent = target.dataset.comparePrice || "";
        compareNode.hidden = !target.dataset.comparePrice;
      }
    });
  });
})();
