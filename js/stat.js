'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 18;
var COLOR_YOU = 'rgba(255, 0, 0, 1)';
var WIN = 'Ура вы победили!';
var RESULT = 'Список результатов:';
var BAR_WIDTH = 40;
var COLUMN_GAP = 50;
var COLUMN_MAX_HEIGHT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(WIN, CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText(RESULT, CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP * 2 + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var COL_HEIGHT = COLUMN_MAX_HEIGHT * times[i] / maxTime;
    if (players[i] === 'Вы') {
      ctx.fillStyle = COLOR_YOU;
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.random() * 255 + ',' + (Math.random() + 0.4).toFixed(1) + ')';
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - COL_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, COL_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(Math.random() + times[i]), CLOUD_X + COLUMN_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - GAP * 2 - FONT_GAP - COL_HEIGHT);
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - GAP);
  }
};
