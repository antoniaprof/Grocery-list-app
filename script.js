"use strict";

(() => {
  let data = [
    { name: "apples", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "apples", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "apples", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "apples", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "carrots", type: "vegetable" },
    { name: "mango", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
    { name: "granola", type: "other" },
    { name: "spaghetti", type: "other" },
    { name: "apples", type: "fruit" },
    { name: "apples", type: "fruit" },
    { name: "brocoli", type: "vegetable" },
    { name: "onions", type: "vegetable" },
  ];

  data.map((item) => ({ ...(item.quantity = 1) }));
  const initialData = [...data];
  let mainDiv, checkDiv;

  // ///////////////////////////CONTAINER//////////////////////
  //   container
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.className = "container";
  body.appendChild(container);

  // /////////////////////////////LOGO//////////////////////
  //   logo
  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "./resources/icon-white-grocery1.png";
  container.appendChild(logo);

  // actions div
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "action-div";
  container.appendChild(actionsDiv);

  // ////////////////////////SORT ACTIONS////////////////////
  // sort div
  const sortDiv = document.createElement("div");
  sortDiv.className = "sort-div";
  actionsDiv.appendChild(sortDiv);

  // sort buttons
  const displaySortButtons = () => {
    const sortButtons = [
      { type: "ascendent", name: "&#8613;" },
      { type: "descendent", name: "&#8615;" },
    ];

    sortButtons.forEach((item) => {
      const button = document.createElement("button");
      button.innerHTML = item.name;
      button.className = "button";
      sortDiv.appendChild(button);

      button.addEventListener("click", () => {
        removeSection(mainDiv);
        sortItems(item.type, data);
      });
    });
  };
  displaySortButtons();

  // ///////////////////////FILTER ACTIONS/////////////////////
  // filter buttons
  const displayFilterButtons = () => {
    const filterButtons = [
      {
        name: "fruits",
        type: "fruit",
      },
      {
        name: "veggies",
        type: "vegetable",
      },
      {
        name: "others",
        type: "other",
      },
    ];

    filterButtons.forEach((item) => {
      const button = document.createElement("button");
      button.className = "button";
      button.innerHTML = item.name;
      sortDiv.appendChild(button);

      button.addEventListener("click", () => {
        removeSection(mainDiv);
        data = filterItems(item.type, initialData);
        removeSection(document.querySelector(".pages-div"));
        removeSection(mainDiv);
        setPagesLength(data);
        createPage(data);
      });
    });
  };
  displayFilterButtons();

  const displayResetButton = () => {
    // reset all filters button
    const resetButton = document.createElement("button");
    resetButton.className = "button";
    resetButton.innerHTML = "&#x21ba;";
    sortDiv.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      removeSection(mainDiv);
      data = initialData;
      reset(data);
    });
  };
  displayResetButton();

  ////////////////////////////ADD ITEMS///////////////////
  //   add div
  const addDiv = document.createElement("div");
  addDiv.className = "add-div";
  actionsDiv.appendChild(addDiv);

  //   add input
  const addInput = document.createElement("input");
  addInput.placeholder = "Add item";
  addInput.className = "add-input";
  addDiv.appendChild(addInput);

  //   add button
  const addButton = document.createElement("button");
  addButton.className = "button";
  addButton.innerHTML = "ADD";

  addButton.addEventListener("click", () => {
    if (!addInput.value) {
      return;
    }

    if (!document.querySelectorAll('input[name="type"]:checked').length > 0) {
      document.querySelector(".item-type-div").style.backgroundColor = "brown";
      return;
    }

    removeSection(mainDiv);
    addItem(data);
    removeSection(checkDiv);
    checkItemType();

    addInput.value = "";

    removeSection(document.querySelector(".pages-div"));
    removeSection(mainDiv);
    setPagesLength(data);
    createPage(data);
  });

  addDiv.appendChild(addButton);

  // check added item type div
  const checkItemType = () => {
    checkDiv = document.createElement("div");
    checkDiv.className = "item-type-div";
    const checkText = document.createElement("p");
    checkText.innerHTML = "Choose item type:";
    checkDiv.appendChild(checkText);
    actionsDiv.appendChild(checkDiv);

    // radio buttons
    const options = ["fruit", "vegetable", "other"];
    options.forEach((option) => {
      const radios = document.createElement("input");
      radios.setAttribute("type", "radio");
      radios.setAttribute("id", option);
      radios.setAttribute("name", "type");
      radios.setAttribute("value", option);
      checkDiv.appendChild(radios);

      const labels = document.createElement("label");
      labels.setAttribute("for", option);
      labels.innerHTML = option;
      checkDiv.appendChild(labels);
    });
  };

  checkItemType();

  ////////////////////////PAGINATION///////////////////////
  // page number buttons
  const itemsPerPage = 5;
  let pageNumbers, lastPage;
  const setPagesLength = (array) => {
    pageNumbers = [];
    for (let i = 1; i <= Math.ceil(array.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    lastPage = pageNumbers[pageNumbers.length - 1];

    return pageNumbers;
  };

  pageNumbers = setPagesLength(data);
  const firstPage = pageNumbers[0];
  let activePage = firstPage;

  // page number div
  const pageNumberDiv = document.createElement("div");
  pageNumberDiv.className = "page-number-div";

  // previous page buttons
  const previousPageButton = document.createElement("button");
  previousPageButton.innerHTML = "&#60;";
  previousPageButton.className = "button arrow-button arrow-button-left";
  previousPageButton.addEventListener("click", () => {
    leftArrow();
  });

  // next page button
  const nextPageButton = document.createElement("button");
  nextPageButton.innerHTML = "&#62;";
  nextPageButton.className = "button arrow-button arrow-button-right";
  nextPageButton.addEventListener("click", () => {
    rightArrow();
  });

  pageNumberDiv.appendChild(previousPageButton);
  pageNumberDiv.appendChild(nextPageButton);

  container.appendChild(pageNumberDiv);

  // show page number buttons
  const createButtonsFromArray = (array) => {
    const pagesDiv = document.createElement("div");
    pagesDiv.className = "pages-div";

    array.forEach((item, index) => {
      const button = document.createElement("button");
      button.innerHTML = item;
      button.className = "button";

      if (item === activePage) {
        button.id = "active";
      }

      button.addEventListener("click", () => {
        if (button.innerHTML === "...") {
          return;
        }

        activePage = item;

        removeSection(document.querySelector(".pages-div"));
        removeSection(mainDiv);
        createPage(data);
      });

      pagesDiv.appendChild(button);
    });

    return pagesDiv;
  };

  const setPagesArray = () => {
    if (pageNumbers.length < 6) {
      return createButtonsFromArray(pageNumbers);
    }

    if (activePage <= firstPage + 2) {
      return createButtonsFromArray([
        firstPage,
        firstPage + 1,
        firstPage + 2,
        firstPage + 3,
        "...",
        lastPage,
      ]);
    }

    if (activePage > 3 && activePage < lastPage - 2) {
      return createButtonsFromArray([
        firstPage,
        "...",
        activePage - 1,
        activePage,
        activePage + 1,
        "...",
        lastPage,
      ]);
    }

    if (activePage >= lastPage - 2) {
      return createButtonsFromArray([
        firstPage,
        "...",
        lastPage - 3,
        lastPage - 2,
        lastPage - 1,
        lastPage,
      ]);
    }
  };

  /////////////////////////ITEMS LIST///////////////////////////
  //   item list
  const displayItems = (array) => {
    mainDiv = document.createElement("div");
    mainDiv.className = "main";

    array
      .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
      .forEach((item, index) => {
        // item div
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        // quantity  div
        const quantityDiv = document.createElement("div");

        // add quantity button
        const addQuantityButton = document.createElement("button");
        addQuantityButton.className = "item-button";
        addQuantityButton.innerHTML = "&#43;";

        addQuantityButton.addEventListener("click", () => {
          removeSection(mainDiv);
          addQuantity(item);
          displayItems(data);
        });

        // quantity number div
        const quantityNrDiv = document.createElement("div");
        quantityDiv.className = "quantity-div";
        quantityNrDiv.innerHTML = item.quantity;

        // reduce quantity button
        const reduceQuantityButton = document.createElement("button");
        reduceQuantityButton.className = "item-button";
        reduceQuantityButton.innerHTML = "&#8722;";

        reduceQuantityButton.addEventListener("click", () => {
          removeSection(mainDiv);
          reduceQuantity(item);
          displayItems(data);
        });

        // item name div
        const nameDiv = document.createElement("div");
        nameDiv.className = "name-div";
        nameDiv.innerHTML = item.name;

        // buttons div
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons-div";

        // edit button
        const editButton = document.createElement("button");
        editButton.innerHTML = "&#128393;";
        editButton.className = "item-button";

        editButton.addEventListener("click", () => {
          nameDiv.contentEditable = true;
          nameDiv.style.border = "1px solid black";

          nameDiv.addEventListener("keydown", () => {
            if (event.key === "Enter") {
              nameDiv.contentEditable = false;
              nameDiv.style.border = "none";
              item.name = nameDiv.innerHTML;
            }
          });
        });

        //   delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#10007;";
        deleteButton.className = "item-button";

        deleteButton.addEventListener("click", () => {
          removeSection(mainDiv);
          data = filteredArray(index, data);

          setPagesLength(data);
          removeSection(document.querySelector(".pages-div"));
          removeSection(mainDiv);
          createPage(data);
        });

        quantityDiv.appendChild(addQuantityButton);
        quantityDiv.appendChild(quantityNrDiv);
        quantityDiv.appendChild(reduceQuantityButton);
        itemDiv.appendChild(quantityDiv);

        itemDiv.appendChild(nameDiv);

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);
        itemDiv.appendChild(buttonsDiv);

        mainDiv.appendChild(itemDiv);
        container.appendChild(mainDiv);
      });
  };

  const createPage = (array) => {
    const page = setPagesArray();
    previousPageButton.insertAdjacentElement("afterend", page);
    displayItems(array);
  };
  createPage(data);

  //////////////////////////////FUNCTIONS//////////////////////////////////////
  const filteredArray = (param, array) => {
    array = array.filter((item, index) => index !== param);

    displayItems(array);

    return array;
  };

  const addItem = (array) => {
    array.unshift({
      name: addInput.value,
      type: document.querySelector('input[name="type"]:checked').value,
      quantity: 1,
    });

    displayItems(array);
  };

  const removeSection = (section) => {
    if (section) {
      section.remove();
    }
  };

  const sortItems = (option, array) => {
    option === "ascendent"
      ? (array = array.sort((a, b) => (a.name < b.name ? 1 : -1)))
      : (array = array.sort((a, b) => (a.name > b.name ? 1 : -1)));

    displayItems(array);
  };

  const filterItems = (option, array) => {
    array = array.filter((item) => item.type === option);

    displayItems(array);
    return array;
  };

  const reset = (array) => {
    removeSection(document.querySelector(".pages-div"));
    removeSection(mainDiv);
    setPagesLength(array);
    createPage(array);
  };

  const addQuantity = (param) => (param.quantity += 1);

  const reduceQuantity = (param) => {
    return param.quantity > 1 ? (param.quantity -= 1) : (param.quantity = 1);
  };

  const leftArrow = () => {
    if (activePage > 1) {
      setActivePage(--activePage);
    }
  };

  const rightArrow = () => {
    if (activePage < lastPage) {
      setActivePage(++activePage);
    }
  };

  const setActivePage = (activePage) => {
    removeSection(document.querySelector(".pages-div"));
    removeSection(mainDiv);
    createPage(data);

    return activePage;
  };
})();
