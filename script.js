function createCard(title, cName, views, monthOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000000) {
    viewStr = views / 1000 + "K";
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }

  let html = `<div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
          />
          <p>${duration}</p>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewStr} views . ${monthOld} month ago</p>
        </div>
      </div>`;
  document.querySelector(".container").innerHTML += html;
}

createCard(
  "Introduction to javaScript 01",
  "Code With Rickie",
  1200000,
  2,
  "2:30",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A&usqp=CCc",
);

createCard(
  "Introduction to javaScript 02",
  "Code With Rickie",
  12000,
  5,
  "34:23",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A&usqp=CCc",
);

createCard(
  "Introduction to javaScript 03",
  "Code With Rickie",
  12000,
  8,
  "34:53",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A&usqp=CCc",
);
