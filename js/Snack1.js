console.log('JS OK');

const vips = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];

const tavoloVip = vips.map((vip, i) => {
  return (vip = {
    table: 'Tavolo Vip',
    name: vip,
    number: 'Posto occupato N.' + (i + 1),
  });
});
console.table(tavoloVip);
