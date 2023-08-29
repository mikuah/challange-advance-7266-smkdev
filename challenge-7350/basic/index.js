function hitungTip(tagihan) {
  let tip;
  tagihan >= 50 && tagihan <= 300
    ? (tip = tagihan * 0.2)
    : (tip = tagihan * 0.15);

  console.log(
    `Tagihannya ${tagihan}, tipnya ${tip}, dan total nilainya ${tagihan + tip}`
  );
}

hitungTip(430);
