module.exports = {
  main: [
    { label: "Kalkulačka BMI", url: "/" },
    {
      label: "Kalkulačky",
      url: "#",
      children: [
        { label: "BMI kalkulačka", url: "/" },
        { label: "BMR / TDEE kalkulačka", url: "/kalkulacka-bmr/" },
        { label: "Ideální váha", url: "/kalkulacka-idealni-vaha/" },
        { label: "Obvod pasu k výšce (WHtR)", url: "/kalkulacka-whtr/" },
        { label: "Kalorický deficit", url: "/kalkulacka-deficit/" },
        { label: "Tepové zóny", url: "/kalkulacka-tep/" },
      ],
    },
    {
      label: "Průvodci",
      url: "#",
      children: [
        { label: "Jak snížit BMI", url: "/jak-snizit-bmi/" },
        { label: "BMI u dětí", url: "/bmi-u-deti/" },
        { label: "BMI vs. jiné metody", url: "/bmi-vs-jine-metody/" },
        { label: "Stupně obezity", url: "/stupne-obezity/" },
      ],
    },
    { label: "Blog", url: "/blog/" },
    { label: "Metodika", url: "/metodika/" },
    { label: "O nás", url: "/o-nas/" },
  ],
  footer: {
    kalkulacky: [
      { label: "BMI kalkulačka", url: "/" },
      { label: "BMR / TDEE", url: "/kalkulacka-bmr/" },
      { label: "Ideální váha", url: "/kalkulacka-idealni-vaha/" },
      { label: "Obvod pasu k výšce", url: "/kalkulacka-whtr/" },
      { label: "Kalorický deficit", url: "/kalkulacka-deficit/" },
      { label: "Tepové zóny", url: "/kalkulacka-tep/" },
    ],
    web: [
      { label: "Blog", url: "/blog/" },
      { label: "Metodika a zdroje", url: "/metodika/" },
      { label: "Ochrana soukromí", url: "/ochrana-soukromi/" },
      { label: "Obchodní podmínky", url: "/podminky/" },
    ],
    onas: [
      { label: "O nás", url: "/o-nas/" },
      { label: "Kontakt", url: "/kontakt/" },
      { label: "Provozovatel", url: "/provozovatel/" },
    ],
  },
};
