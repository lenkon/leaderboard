const points = [
  { name: 'Jack', point: 45 },
  { name: 'Richard', point: 90 },
  { name: 'Jim', point: 85 },
  { name: 'Mick', point: 100 },
  { name: 'James', point: 80 },
  { name: 'George', point: 70 },
  { name: 'Stephen', point: 65 },
];

let scoresHtml = '';
scoresHtml += '<table class="table table-hover table-sm table-striped"><tbody>';
scoresHtml += points.reduce((total, current) => {
  total += `<tr><td>${current.name}: ${current.point}</td></tr>`;
  return total;
}, '');
scoresHtml += '</tbody></table>';

const scores = scoresHtml;

export default scores;