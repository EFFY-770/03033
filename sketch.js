let slider;
let textSizeValue = 28;
let inputText = '淡江教'; // 預設文字

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 建立容器 div，讓文字框和滑桿在同一行
  let container = createDiv();
  container.style('display', 'flex');
  container.style('align-items', 'center');
  container.style('gap', '20px'); // 元素之間的間距
  container.position(20, 20);

  // 建立文字框
  let input = createInput(inputText);
  input.parent(container);
  input.input(() => {
    inputText = input.value(); // 更新輸入的文字
  });

  // 建立滑桿
  slider = createSlider(28, 50, 28);
  slider.parent(container);
  slider.input(() => {
    textSizeValue = slider.value();
  });

  // 建立下拉式選單
  let dropdown = createSelect();
  dropdown.parent(container);
  dropdown.option('第一周');
  dropdown.option('第二周');
  dropdown.option('第三周');
  dropdown.changed(() => handleDropdownChange(dropdown.value()));
}

function draw() {
  background(0); // 黑色背景

  // 設定文字大小
  textSize(textSizeValue);
  fill(255); // 白色文字
  noStroke();

  // 計算文字的水平和垂直間距
  let xSpacing = textSizeValue * 3; // 水平間距
  let ySpacing = textSizeValue + 10; // 垂直間距

  // 重複顯示文字填滿畫布
  for (let y = 0; y < height; y += ySpacing) {
    for (let x = 0; x < width; x += xSpacing) {
      text(inputText, x, y);
    }
  }
}

function handleDropdownChange(selected) {
  if (selected === '第一周') {
    window.open('https://www.tku.edu.tw', '_blank');
  } else if (selected === '第二周') {
    window.open('https://www.et.tku.edu.tw', '_blank');
  } else if (selected === '第三周') {
    window.open('https://hackmd.io/@Effy2288/Byqui9sRJl', '_blank'); // 第三周的實際網址
  }
}
