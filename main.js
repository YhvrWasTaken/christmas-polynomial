//XXX    XXX  MMMMM   MMMMM      AAAAA       SSSSSS
// XXX  XXX   MMMMMM MMMMMM     AAA AAA     SSSS
//  XXXXXX    MMM MMMMM MMM    AAA   AAA     SSSSS    yhvrwastaken.github.io/christmas-polynomial
// XXX  XXX   MMM       MMM   AAAAAAAAAAA     SSSSSS
//XXX    XXX  MMM       MMM  AAA       AAA  SSSSSS

var player = {
  presents: new Decimal(50),
  elves: {
    e1: {
      amount: new Decimal(0),
      cost: new Decimal(10),
      pow: new Decimal(2), // Starts at 2 for balancing <3
      costpow: new Decimal(10)
    },
    e2: {
      amount: new Decimal(0),
      cost: new Decimal(100),
      pow: new Decimal(1),
      costpow: new Decimal(50)
    },
    e3: {
      amount: new Decimal(0),
      cost: new Decimal(1e4),
      pow: new Decimal(1),
      costpow: new Decimal(250)
    },
    e4: {
      amount: new Decimal(0),
      cost: new Decimal(1e8),
      pow: new Decimal(1),
      costpow: new Decimal(625 * 2)
    },
    e5: {
      amount: new Decimal(0),
      cost: new Decimal(1e16),
      pow: new Decimal(1),
      costpow: new Decimal(3000)
    },
    e6: {
      amount: new Decimal(0),
      cost: new Decimal(1e32),
      pow: new Decimal(1),
      costpow: new Decimal(10000)
    }
  },
  pMult: {
    cost: new Decimal(100)
  },
  happiness: new Decimal(0),
  happinesscost: new Decimal(1e16),
  happinessunlocked: false,
  happinessprodmult: new Decimal(1),
  happinessgain: new Decimal(1),
  happinessupgradecosts: {
    up1: new Decimal(1),
    up2: new Decimal(5)
  },
  universePoints: new Decimal(0),
  universedStat: new Decimal(0),
  universeUpgrades: {
    u1: false,
    u2: false,
    u3: false,
    u4: new Decimal(1),
    u4cost: new Decimal(5),
    u5: false,
    u6: false,
    u7: false,
    u8: false,
    u9: false
  },
  universeExploringUnlocked: false,
  universeExploring: false,
  options: {
    theme: 1
  }
};

function load() {
var playersave = JSON.parse(localStorage.getItem("xmasSave"));

if (playersave !== null) {
  /* long bc break_infinity.js :[ */
  player.presents = new Decimal(playersave.presents)
  player.elves.e1.amount = new Decimal(playersave.elves.e1.amount)
  player.elves.e1.cost = new Decimal(playersave.elves.e1.cost)
  player.elves.e1.pow = new Decimal(playersave.elves.e1.pow)
  player.elves.e1.costpow = new Decimal(playersave.elves.e1.costpow)

  player.elves.e2.amount = new Decimal(playersave.elves.e2.amount)
  player.elves.e2.cost = new Decimal(playersave.elves.e2.cost)
  player.elves.e2.pow = new Decimal(playersave.elves.e2.pow)
  player.elves.e2.costpow = new Decimal(playersave.elves.e2.costpow)

  player.elves.e3.amount = new Decimal(playersave.elves.e3.amount)
  player.elves.e3.cost = new Decimal(playersave.elves.e3.cost)
  player.elves.e3.pow = new Decimal(playersave.elves.e3.pow)
  player.elves.e3.costpow = new Decimal(playersave.elves.e3.costpow)

  player.elves.e4.amount = new Decimal(playersave.elves.e4.amount)
  player.elves.e4.cost = new Decimal(playersave.elves.e4.cost)
  player.elves.e4.pow = new Decimal(playersave.elves.e4.pow)
  player.elves.e4.costpow = new Decimal(playersave.elves.e4.costpow)

  player.elves.e5.amount = new Decimal(playersave.elves.e5.amount)
  player.elves.e5.cost = new Decimal(playersave.elves.e5.cost)
  player.elves.e5.pow = new Decimal(playersave.elves.e5.pow)
  player.elves.e5.costpow = new Decimal(playersave.elves.e5.costpow)

  player.elves.e6.amount = new Decimal(playersave.elves.e6.amount)
  player.elves.e6.cost = new Decimal(playersave.elves.e6.cost)
  player.elves.e6.pow = new Decimal(playersave.elves.e6.pow)
  player.elves.e6.costpow = new Decimal(playersave.elves.e6.costpow)

  player.pMult.cost = new Decimal(playersave.pMult.cost)

  player.happiness = new Decimal(playersave.happiness)
  player.happinesscost = new Decimal(playersave.happinesscost)
  player.happinessunlocked = playersave.happinessunlocked
  player.happinessprodmult = new Decimal(playersave.happinessprodmult)
  player.happinessgain = new Decimal(playersave.happinessgain)
  player.happinessupgradecosts.up1 = new Decimal(playersave.happinessupgradecosts.up1)
  player.happinessupgradecosts.up2 = new Decimal(playersave.happinessupgradecosts.up2)

  player.universePoints = new Decimal(playersave.universePoints)
  player.universedStat = new Decimal(playersave.universedStat)
  player.universeUpgrades.u1 = playersave.universeUpgrades.u1
  player.universeUpgrades.u2 = playersave.universeUpgrades.u2
  player.universeUpgrades.u3 = playersave.universeUpgrades.u3
  player.universeUpgrades.u4 = new Decimal(playersave.universeUpgrades.u4)
  player.universeUpgrades.u4cost = new Decimal(playersave.universeUpgrades.u4cost)
  player.universeUpgrades.u5 = playersave.universeUpgrades.u5
  player.universeUpgrades.u6 = playersave.universeUpgrades.u6
  player.universeUpgrades.u7 = playersave.universeUpgrades.u7
  player.universeUpgrades.u8 = playersave.universeUpgrades.u8
  player.universeUpgrades.u9 = playersave.universeUpgrades.u9
  player.universeExploring = playersave.universeExploring
  player.universeExploringUnlocked = playersave.universeExploringUnlocked

  player.options.theme = playersave.options.theme

  if (player.elves.e1.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy1").innerHTML = "Buy 1 Cost: " + player.elves.e1.cost.toExponential(1)
  if (player.elves.e1.cost.lessThan(1e6)) document.getElementById("buy1").innerHTML = "Buy 1 Cost: " + player.elves.e1.cost.toFixed(0)
  if (player.elves.e2.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy2").innerHTML = "Buy 1 Cost: " + player.elves.e2.cost.toExponential(1)
  if (player.elves.e2.cost.lessThan(1e6)) document.getElementById("buy2").innerHTML = "Buy 1 Cost: " + player.elves.e2.cost.toFixed(0)
  if (player.elves.e3.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy3").innerHTML = "Buy 1 Cost: " + player.elves.e3.cost.toExponential(1)
  if (player.elves.e3.cost.lessThan(1e6)) document.getElementById("buy3").innerHTML = "Buy 1 Cost: " + player.elves.e3.cost.toFixed(0)
  if (player.elves.e4.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy4").innerHTML = "Buy 1 Cost: " + player.elves.e4.cost.toExponential(1)
  if (player.elves.e4.cost.lessThan(1e6)) document.getElementById("buy4").innerHTML = "Buy 1 Cost: " + player.elves.e4.cost.toFixed(0)

  document.getElementById("buy5").innerHTML = "Buy 1 Cost: " + player.elves.e5.cost.toExponential(1)
  document.getElementById("elvesamt6").innerHTML = player.elves.e6.amount.toFixed(0)
  document.getElementById("buy6").innerHTML = "Buy 1 Cost: " + player.elves.e6.cost.toExponential(1)
  document.getElementById("pMult").innerHTML = "2x Presents - " + player.pMult.cost.toExponential(1) + " Presents"

  document.getElementById("happinessamt").innerHTML = "You have <b>" + player.happiness + "</b> Happiness."
  document.getElementById("happinessupgrade1").innerHTML = "10x All Production<br>" + player.happinessupgradecosts.up1 + " Happiness"
  document.getElementById("happinessupgrade2").innerHTML = "2x Happiness<br>" + player.happinessupgradecosts.up2 + " Happiness"
  document.getElementById("ptoh").innerHTML = player.happinesscost.toExponential(1) + " Presents -> 1 Happiness"

  if (player.universedStat.greaterThanOrEqualTo(1)) document.getElementById("universe").style.display = "inline-block"
  document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."

  document.getElementById("theme").href = player.options.theme + ".css"
}
}
var reset = {
  presents: function() {
    player.presents = new Decimal(50)
  },
  elves: function() {
    /* NE */
    player.elves.e1.amount = new Decimal(0);
    player.elves.e1.cost = new Decimal(10);
    player.elves.e1.pow = new Decimal(2);
    player.elves.e1.costpow = new Decimal(10);
    document.getElementById("buy1").innerHTML = "Buy 1 Cost: " + player.elves.e1.cost.toFixed(0)
    /* MiE */
    player.elves.e2.amount = new Decimal(0);
    player.elves.e2.cost = new Decimal(100);
    player.elves.e2.pow = new Decimal(1);
    player.elves.e2.costpow = new Decimal(50);
    document.getElementById("buy2").innerHTML = "Buy 1 Cost: " + player.elves.e2.cost.toFixed(0)
    /* E */
    player.elves.e3.amount = new Decimal(0);
    player.elves.e3.cost = new Decimal(1e4);
    player.elves.e3.pow = new Decimal(1);
    player.elves.e3.costpow = new Decimal(250);
    document.getElementById("buy3").innerHTML = "Buy 1 Cost: " + player.elves.e3.cost.toFixed(0)
    /* MeE */
    player.elves.e4.amount = new Decimal(0);
    player.elves.e4.cost = new Decimal(1e8);
    player.elves.e4.pow = new Decimal(1);
    player.elves.e4.costpow = new Decimal(625 * 2);
    document.getElementById("buy4").innerHTML = "Buy 1 Cost: " + player.elves.e4.cost.toExponential(1)
    /* GE */
    player.elves.e5.amount = new Decimal(0);
    player.elves.e5.cost = new Decimal(1e16);
    player.elves.e5.pow = new Decimal(1);
    player.elves.e5.costpow = new Decimal(3000);
    document.getElementById("buy5").innerHTML = "Buy 1 Cost: " + player.elves.e5.cost.toExponential(1)
    /* ∞E */
    player.elves.e6.amount = new Decimal(0);
    player.elves.e6.cost = new Decimal(1e32);
    player.elves.e6.pow = new Decimal(1);
    player.elves.e6.costpow = new Decimal(10000);
    document.getElementById("elvesamt6").innerHTML = player.elves.e6.amount.toFixed(0)
    document.getElementById("buy6").innerHTML = "Buy 1 Cost: " + player.elves.e6.cost.toExponential(1)
  },
  pMult: function() {
    player.pMult.cost = new Decimal(100)
    document.getElementById("pMult").innerHTML = "2x Presents - " + player.pMult.cost + " Presents"
  },
  happiness: function() {
    player.happiness = new Decimal(0);
    player.happinesscost = new Decimal(1e16);
    player.happinessprodmult = new Decimal(1);
    player.happinessgain = new Decimal(1)
    player.happinessupgradecosts.up1 = new Decimal(1);
    player.happinessupgradecosts.up2 = new Decimal(5);
    document.getElementById("happinessamt").innerHTML = "You have <b>" + player.happiness + "</b> Happiness."
    document.getElementById("happinessupgrade1").innerHTML = "10x All Production<br>" + player.happinessupgradecosts.up1 + " Happiness"
    document.getElementById("happinessupgrade2").innerHTML = "2x Happiness<br>" + player.happinessupgradecosts.up2 + " Happiness"
    document.getElementById("ptoh").innerHTML = player.happinesscost.toExponential(1) + " Presents -> 1 Happiness"
  },
}

/*
••••••
•••
••••••
•••
••••••
*/

function buy1() {
  if (player.presents.greaterThanOrEqualTo(player.elves.e1.cost)) {
  player.presents = player.presents.subtract(player.elves.e1.cost)
  player.elves.e1.amount = player.elves.e1.amount.add(1)
  player.elves.e1.cost = player.elves.e1.cost.mul((player.universeExploring && (player.elves.e1.cost.greaterThanOrEqualTo(1e100)) ? player.elves.e1.costpow : 5))
  player.elves.e1.pow = player.elves.e1.pow.mul(2)
  player.elves.e1.costpow = player.elves.e1.costpow.mul(1e1)
  if (player.elves.e1.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy1").innerHTML = "Buy 1 Cost: " + player.elves.e1.cost.toExponential(1)
  if (player.elves.e1.cost.lessThan(1e6)) document.getElementById("buy1").innerHTML = "Buy 1 Cost: " + player.elves.e1.cost.toFixed(0)
  }
}

function buy2() {
  if (player.presents.greaterThanOrEqualTo(player.elves.e2.cost)) {
  player.presents = player.presents.subtract(player.elves.e2.cost)
  player.elves.e2.amount = player.elves.e2.amount.add(1)
  player.elves.e2.cost = player.elves.e2.cost.mul((player.universeExploring && (player.elves.e2.cost.greaterThanOrEqualTo(1e100)) ? player.elves.e2.costpow : 25))
  player.elves.e2.pow = player.elves.e2.pow.mul(1.5)
  player.elves.e2.costpow = player.elves.e2.costpow.mul(1e2)
  if (player.elves.e2.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy2").innerHTML = "Buy 1 Cost: " + player.elves.e2.cost.toExponential(1)
  if (player.elves.e2.cost.lessThan(1e6)) document.getElementById("buy2").innerHTML = "Buy 1 Cost: " + player.elves.e2.cost.toFixed(0)
  }
}

function buy3() {
  if (player.presents.greaterThanOrEqualTo(player.elves.e3.cost)) {
  player.presents = player.presents.subtract(player.elves.e3.cost)
  player.elves.e3.amount = player.elves.e3.amount.add(1)
  player.elves.e3.cost = player.elves.e3.cost.mul((player.universeExploring && (player.elves.e3.cost.greaterThanOrEqualTo(1e100)) ? player.elves.e3.costpow : 125))
  player.elves.e3.pow = player.elves.e3.pow.mul(1.5)
  player.elves.e3.costpow = player.elves.e3.costpow.mul(1e3)
  if (player.elves.e3.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy3").innerHTML = "Buy 1 Cost: " + player.elves.e3.cost.toExponential(1)
  if (player.elves.e3.cost.lessThan(1e6)) document.getElementById("buy3").innerHTML = "Buy 1 Cost: " + player.elves.e3.cost.toFixed(0)
  }
}

function buy4() {
  if (player.presents.greaterThanOrEqualTo(player.elves.e4.cost)) {
  player.presents = player.presents.subtract(player.elves.e4.cost)
  player.elves.e4.amount = player.elves.e4.amount.add(1)
  player.elves.e4.cost = player.elves.e4.cost.mul((player.universeExploring && (player.elves.e4.cost.greaterThanOrEqualTo(1e100)) ? player.elves.e4.costpow : 625))
  player.elves.e4.pow = player.elves.e4.pow.mul(1.5)
  player.elves.e4.costpow = player.elves.e4.costpow.mul(1e4)
  if (player.elves.e4.cost.greaterThanOrEqualTo(1e6)) document.getElementById("buy4").innerHTML = "Buy 1 Cost: " + player.elves.e4.cost.toExponential(1)
  if (player.elves.e4.cost.lessThan(1e6)) document.getElementById("buy4").innerHTML = "Buy 1 Cost: " + player.elves.e4.cost.toFixed(0)
  }
}

function buy5() {
  if (player.presents.greaterThanOrEqualTo(player.elves.e5.cost)) {
  player.presents = player.presents.subtract(player.elves.e5.cost)
  player.elves.e5.amount = player.elves.e5.amount.add(1)
  player.elves.e5.cost = player.elves.e5.cost.mul((player.universeExploring && (player.elves.e5.cost.greaterThanOrEqualTo(1e100)) ? player.elves.e5.costpow : 1500)) //I just give up with mults here xd
  player.elves.e5.pow = player.elves.e5.pow.mul(1.5)
  player.elves.e5.costpow = player.elves.e5.costpow.mul(1e5)
  document.getElementById("buy5").innerHTML = "Buy 1 Cost: " + player.elves.e5.cost.toExponential(1)
  }
}

function buy6() {
  if (player.presents.greaterThanOrEqualTo(player.elves.e6.cost)) {
  player.presents = player.presents.subtract(player.elves.e6.cost)
  player.elves.e6.amount = player.elves.e6.amount.add(1)
  player.elves.e6.cost = player.elves.e6.cost.mul((player.universeExploring && (player.elves.e6.cost.greaterThanOrEqualTo(1e100)) ? player.elves.e6.costpow : 5000))
  player.elves.e6.pow = player.elves.e6.pow.mul(1.5)
  player.elves.e6.costpow = player.elves.e6.costpow.mul(1e6)
  document.getElementById("elvesamt6").innerHTML = player.elves.e6.amount.toFixed(0)
  document.getElementById("buy6").innerHTML = "Buy 1 Cost: " + player.elves.e6.cost.toExponential(1)
  }
}

function pMult() {
  if (player.presents.greaterThanOrEqualTo(player.pMult.cost)) {
    player.presents = player.presents.subtract(player.pMult.cost)
    player.pMult.cost = player.pMult.cost.mul(5)
    player.pMult.mult = player.elves.e1.pow.mul(2)
    document.getElementById("pMult").innerHTML = "2x Presents - " + player.pMult.cost.toExponential(1) + " Presents"
  }
}

/*
•••   •••
•••   •••
•••••••••
•••   •••
•••   •••
*/

function happinessTrade() {
  if (player.presents.greaterThanOrEqualTo(player.happinesscost)) {
    player.presents = player.presents.sub(player.happinesscost)
    player.happinesscost = player.happinesscost.mul(1000)
    player.happiness = player.happiness.add(player.happinessgain)
    document.getElementById("happinessamt").innerHTML = "You have <b>" + player.happiness + "</b> Happiness."
    document.getElementById("ptoh").innerHTML = player.happinesscost.toExponential(1) + " Presents -> 1 Happiness"
  }
}

function maxHappinessTrade() {
  while (player.presents.greaterThanOrEqualTo(player.happinesscost)) {
    happinessTrade()
  }
}

function happinessupgrade(upgrade) {
  if (upgrade == 1) {
    if (player.happiness.greaterThanOrEqualTo(player.happinessupgradecosts.up1)) {
      player.happiness = player.happiness.sub(player.happinessupgradecosts.up1)
      player.happinessprodmult = player.happinessprodmult.mul(10)
      player.happinessupgradecosts.up1 = player.happinessupgradecosts.up1.mul(10)
      document.getElementById("happinessamt").innerHTML = "You have <b>" + player.happiness + "</b> Happiness."
      document.getElementById("happinessupgrade1").innerHTML = "10x All Production<br>" + player.happinessupgradecosts.up1 + " Happiness"
    }
  } else if (upgrade == 2) {
    if (player.happiness.greaterThanOrEqualTo(player.happinessupgradecosts.up2)) {
      player.happiness = player.happiness.sub(player.happinessupgradecosts.up2)
      player.happinessgain = player.happinessgain.mul(2)
      player.happinessupgradecosts.up2 = player.happinessupgradecosts.up2.mul(10)
      document.getElementById("happinessamt").innerHTML = "You have <b>" + player.happiness + "</b> Happiness."
      document.getElementById("happinessupgrade2").innerHTML = "2x Happiness<br>" + player.happinessupgradecosts.up2 + " Happiness"
    }
  }
}

/*
•••   •••
•••   •••
•••   •••
•••   •••
 •••••••
*/

function universe() {
  if (player.universeExploring) {
    alert("Endgame has been reached. Thank you for playing!")
  } else if (player.presents.greaterThanOrEqualTo(1e308)) {
    reset.presents()
    reset.elves()
    reset.pMult()
    reset.happiness()
    player.universedStat.add(1)
    player.universePoints = player.universePoints.add(player.universeUpgrades.u4)
    document.getElementById("universe").style.display = "inline-block"
    document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
    /* UU Checks */
    if (player.universeUpgrades.u7) {
      player.happiness = new Decimal(10)
    }
    if (player.universeUpgrades.u6) {
      player.presents = new Decimal(1e16)
    }
    if (player.universeUpgrades.u9) {
      player.elves.e2.amount = new Decimal(1)
    }
    if (player.universeUpgrades.u5) {
      player.elves.e1.amount = new Decimal(1)
    }
  }
}

var uu = {
  u1: function() {
    if (player.universePoints.greaterThanOrEqualTo(1) && !player.universeUpgrades.u1) {
      player.universePoints = player.universePoints.sub(1)
      player.universeUpgrades.u1 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade1").innerHTML = "2.5x NanoElves Production<br>MAX"
    }
  },
  u2: function() {
    if (player.universePoints.greaterThanOrEqualTo(25) && !player.universeUpgrades.u2) {
      player.universePoints = player.universePoints.sub(25)
      player.universeUpgrades.u2 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade2").innerHTML = "25 Happiness/secs<br>MAX"
      if (player.happiness.equals(0)) player.happiness = new Decimal(25)
    }
  },
  u3: function() {
    if (player.universePoints.greaterThanOrEqualTo(15) && !player.universeUpgrades.u3) {
      player.universePoints = player.universePoints.sub(15)
      player.universeUpgrades.u3 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade3").innerHTML = "Apply a multiplier (sqrt of sqrt of presents) to GigaElves, Max of 5x<br>MAX"
    }
  },
  u4: function() {
    if (player.universePoints.greaterThanOrEqualTo(player.universeUpgrades.u4cost)) {
      player.universePoints = player.universePoints.sub(player.universeUpgrades.u4cost)
      player.universeUpgrades.u4 = player.universeUpgrades.u4.mul(2)
      player.universeUpgrades.u4cost = player.universeUpgrades.u4cost.mul(5)
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade4").innerHTML = "2x Multiplier to UP gain<br>" + player.universeUpgrades.u4cost + " UP"
    }
  },
  u5: function() {
    if (player.universePoints.greaterThanOrEqualTo(1) && !player.universeUpgrades.u5) {
      player.universePoints = player.universePoints.sub(1)
      player.universeUpgrades.u5 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade5").innerHTML = "GigaElves multiplier effects NanoElves<br>MAX"
    }
  },
  u6: function() {
    if (player.universePoints.greaterThanOrEqualTo(10) && !player.universeUpgrades.u6) {
      player.universePoints = player.universePoints.sub(10)
      player.universeUpgrades.u6 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade6").innerHTML = "Start with 1.0e+16 Presents<br>MAX"
    }
  },
  u7: function() {
    if (player.universePoints.greaterThanOrEqualTo(1) && !player.universeUpgrades.u7) {
      player.universePoints = player.universePoints.sub(1)
      player.universeUpgrades.u7 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade7").innerHTML = "Start with 10 Happiness<br>MAX"
    }
  },
  u8: function() {
    if (player.universePoints.greaterThanOrEqualTo(2) && !player.universeUpgrades.u8) {
      player.universePoints = player.universePoints.sub(2)
      player.universeUpgrades.u8 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade8").innerHTML = "1.1x Multiplier to all Elves for each Universe<br>MAX"
    }
  },
  u9: function() {
    if (player.universePoints.greaterThanOrEqualTo(4) && !player.universeUpgrades.u9) {
      player.universePoints = player.universePoints.sub(4)
      player.universeUpgrades.u9 = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgrade9").innerHTML = "Start 1 MicroElf<br>MAX"
    }
  },
  ue: function() {
    if (player.universePoints.greaterThanOrEqualTo(500) && !player.universeExploringUnlocked) {
      player.universePoints = player.universePoints.sub(500)
      player.universeExploringUnlocked = true
      document.getElementById("universeamt").innerHTML = "You have <b>" + player.universePoints + "</b> Universe Points."
      document.getElementById("universeupgradeue").innerHTML = "EXPLORE UNIVERSE<br>MAX"
      document.getElementById("uex").style.display = "inline-block"
    }
  }
}

function toggleExploring() {
  player.universeExploring = !player.universeExploring
}

function changeMenu(x) {
  document.getElementById("production").style.display = "none"
  document.getElementById("happiness").style.display = "none"
  document.getElementById("universemenu").style.display = "none"
  document.getElementById("uexmenu").style.display = "none"
  document.getElementById("options").style.display = "none"
  document.getElementById(x).style.display = "inline-block"

  if (x == "happiness") {
    if (player.happinessunlocked) {
      document.getElementById("notunlocked").style.display = "none"
      document.getElementById("unlocked").style.display = "inline-block"
    } else {
      document.getElementById("notunlocked").style.display = "inline-block"
      document.getElementById("unlocked").style.display = "none"
    }
  }
}

function maxAll() {
  while (player.presents.greaterThanOrEqualTo(player.pMult.cost)) {
    pMult()
  }
  while (player.presents.greaterThanOrEqualTo(player.elves.e1.cost)) {
    buy1()
  }
  while (player.presents.greaterThanOrEqualTo(player.elves.e2.cost)) {
    buy2()
  }
  while (player.presents.greaterThanOrEqualTo(player.elves.e3.cost)) {
    buy3()
  }
  while (player.presents.greaterThanOrEqualTo(player.elves.e4.cost)) {
    buy4()
  }
  while (player.presents.greaterThanOrEqualTo(player.elves.e5.cost)) {
    buy5()
  }
  while (player.presents.greaterThanOrEqualTo(player.elves.e6.cost)) {
    buy6()
  }
}

function changeTheme() {
  player.options.theme += 1;
  if (player.options.theme == 4) {
    player.options.theme = 1;
  }
  document.getElementById("theme").href = player.options.theme + ".css"
}

this.addEventListener('keydown', (event) => {
		if (event.keyCode == 77) { /* https://www.javascriptkeycode.com */
			maxAll();
		} else if (event.keyCode == 49) {
      buy1()
    } else if (event.keyCode == 50) {
      buy2()
    } else if (event.keyCode == 51) {
      buy3()
    } else if (event.keyCode == 52) {
      buy4()
    } else if (event.keyCode == 53) {
      buy5()
    } else if (event.keyCode == 54) {
      buy6()
    } else if (event.keyCode == 80) {
      pMult()
    }
	})

/* Tell the game what should be added to each elf tier */
function calculateGain(x) {
  if (x == 1) {
    var z = new Decimal(10)
    if (player.universeUpgrades.u1) var y = new Decimal(player.elves.e1.amount.mul(player.happinessprodmult.mul(z.mul(player.elves.e1.pow.div(20))))); else var y = new Decimal(player.elves.e1.amount.mul(player.happinessprodmult.mul(player.elves.e1.pow.div(20))))
    if (player.universeUpgrades.u8) y = y.mul(player.universedStat.div(10).add(1))
    return(y)
  } else if (x == 2) {
    var y = new Decimal(player.elves.e2.amount.mul(player.elves.e2.pow.mul(player.happinessprodmult.div(200))))
    if (player.universeUpgrades.u8) y = y.mul(player.universedStat.div(10).add(1))
    return(y)
  } else if (x == 3) {
    var y = new Decimal(player.elves.e3.amount.mul(player.elves.e3.pow.mul(player.happinessprodmult.div(200))))
    if (player.universeUpgrades.u8) y = y.mul(player.universedStat.div(10).add(1))
    return(y)
  } else if (x == 4) {
    var y = new Decimal(player.elves.e4.amount.mul(player.elves.e4.pow.mul(player.happinessprodmult.div(200))))
    if (player.universeUpgrades.u8) y = y.mul(player.universedStat.div(10).add(1))
    return(y)
  } else if (x == 5) {
    var y = new Decimal(player.elves.e5.amount.mul(player.elves.e5.pow.mul(player.happinessprodmult.div(200))))
    if (player.universeUpgrades.u8) y = y.mul(player.universedStat.div(10).add(1))
    return(y)
  } else if (x == 6) {
    var y = new Decimal(player.elves.e6.amount.mul(player.elves.e6.pow.mul(player.happinessprodmult.div(200))))
    var z = new Decimal(y.mul(player.presents.sqrt().sqrt()))
    if (z.greaterThan(5)) z = new Decimal(5)
    if (player.universeUpgrades.u8) y = y.mul(player.universedStat.div(10).add(1))
    return(y.times(z))
  }
}

function calcUPGain() {
  return(player.presents.div(1e500))
}

function save() {
  localStorage.setItem("xmasSave", JSON.stringify(player)); //I have no clue what the fuck this does I copied the code from AD
}

load()

window.setInterval(function() {
  player.presents = player.presents.add(calculateGain(1))
  player.elves.e1.amount = player.elves.e1.amount.add(calculateGain(2))
  player.elves.e2.amount = player.elves.e2.amount.add(calculateGain(3))
  player.elves.e3.amount = player.elves.e3.amount.add(calculateGain(4))
  player.elves.e4.amount = player.elves.e4.amount.add(calculateGain(5))
  player.elves.e5.amount = player.elves.e5.amount.add(calculateGain(6))
  if (player.presents.greaterThanOrEqualTo(1e6)) document.getElementById("amt").innerHTML = "You have <b>" + player.presents.toExponential(1) + "</b> Presents."
  if (player.presents.lessThan(1e6)) document.getElementById("amt").innerHTML = "You have <b>" + player.presents.toFixed(0) + "</b> Presents."
  if (player.elves.e1.amount.greaterThanOrEqualTo(1e6)) document.getElementById("elvesamt1").innerHTML = player.elves.e1.amount.toExponential(1)
  if (player.elves.e1.amount.lessThan(1e6)) document.getElementById("elvesamt1").innerHTML = player.elves.e1.amount.toFixed(0)
  if (player.elves.e2.amount.greaterThanOrEqualTo(1e6)) document.getElementById("elvesamt2").innerHTML = player.elves.e2.amount.toExponential(1)
  if (player.elves.e2.amount.lessThan(1e6)) document.getElementById("elvesamt2").innerHTML = player.elves.e2.amount.toFixed(0)
  if (player.elves.e3.amount.greaterThanOrEqualTo(1e6)) document.getElementById("elvesamt3").innerHTML = player.elves.e3.amount.toExponential(1)
  if (player.elves.e3.amount.lessThan(1e6)) document.getElementById("elvesamt3").innerHTML = player.elves.e3.amount.toFixed(0)
  if (player.elves.e4.amount.greaterThanOrEqualTo(1e6)) document.getElementById("elvesamt4").innerHTML = player.elves.e4.amount.toExponential(1)
  if (player.elves.e4.amount.lessThan(1e6)) document.getElementById("elvesamt4").innerHTML = player.elves.e4.amount.toFixed(0)
  if (player.elves.e5.amount.greaterThanOrEqualTo(1e6)) document.getElementById("elvesamt5").innerHTML = player.elves.e5.amount.toExponential(1)
  if (player.elves.e5.amount.lessThan(1e6)) document.getElementById("elvesamt5").innerHTML = player.elves.e5.amount.toFixed(0)
  /* Make sure player is exploring universe is unlocked if presents > infinity */
  if (player.presents.exponent >= 308 && !player.universeExploring) {
    universe()
  }
}, 50)

/* This is mainly to run checks, like if happiness should be unlocked. */
window.setInterval(function() {
  if (player.presents.greaterThanOrEqualTo(1e16) && !player.happinessunlocked) {
    player.happinessunlocked = true;
  }
  player.happiness.add((player.universeUpgrades.u2 ? 25 : 0))
  document.getElementById("happinessamt").innerHTML = "You have <b>" + player.happiness + "</b> Happiness."
  if (player.universeExploring) {
    document.getElementById("universeduringexp").innerHTML = "Universe For " + calcUPGain() + " UP."
    calcUPGain()
  }
}, 1000)

window.setInterval(save(), 30000)
