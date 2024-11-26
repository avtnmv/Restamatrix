document.getElementById('phone').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^0-9+()-\s]/g, '');
  });

  document.getElementById('name').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЇїЄєІіҐґ'’ ]+/g, '');
  });

  document.getElementById('surname').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЇїЄєІіҐґ'’ ]+/g, '');
  });