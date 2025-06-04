let count = 0;

todoCountTxt.innerHTML = count;

function handleAddBtn() {
  // alert(inputTodo.value);
  // todoList.innerHTML += `<li>${inputTodo.value}</li>`;

  if (inputTodo.value.trim() !== '') {
    todoList.innerHTML += `<li>${inputTodo.value}</li>`;
    inputTodo.value = '';
    inputTodo.focus(); 
    // todo da ekleme yaptıktan sonra imleç hala todo içinde yazılmayı bekliyor
    increaseCounter();
    // eğer if dışında olsaydı boş eklense bile artardı
  } else {
    alert('Boş todo eklenemez');
  }
}

addTodoBtn.addEventListener('click', handleAddBtn);

function handleClearBtn() {
  count = 0;
  todoList.innerHTML = '';
  todoCountTxt.innerHTML = `${count}`;
}

clearBtn.addEventListener('click', handleClearBtn);

// yapılacak işlerin yanına count eklemek istiyorum

function increaseCounter() {
  count++;
  todoCountTxt.innerHTML = `${count}`;
}

