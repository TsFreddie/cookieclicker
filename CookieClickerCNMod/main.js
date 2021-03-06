var __TWCNL = {
  // MOD_ID
  MOD_ID: 'TWCNClickerCN',

  // Number ending
  NUM_COOKIES: '块饼干',

  // Localized cookies
  BRAND_COOKIE_CN: {
    120: {
      name: '猫耳朵',
      quote: '经典零食。我们的产品是用上好的橘猫制成的。',
      icon: [0, 0],
    },
    121: {
      name: '鿏丽素',
      quote: '绝不含任何非放射性成分。',
      icon: [1, 0],
    },
    122: {
      name: '好吃片',
      quote: '不好吃的话，可能是你对坚果过敏，建议多吃点。',
      icon: [2, 0],
    },
    123: {
      name: '巧克力派',
      quote: '老奶奶的最爱？',
      icon: [3, 0],
    },
    125: {
      name: '2×3',
      quote:
        '两片奶酪夹入三片奶油饼干中，大概没有人想过可以这么干——我们甚至可以用这个概念申请商标了。',
      icon: [0, 1],
    },
    127: {
      name: '趣咄咄',
      quote: '保留对所有巧克力豆饼干发律师函的权利。',
      icon: [2, 1],
    },
    128: {
      name: '行星杯',
      quote:
        '最下面的仅有的薄薄一层奶油才是最好吃的。我们可以把它们刮下来做成新的饼干。至于里面已经有的饼干和巧克力，就和塑料包装搅碎一起当作早餐麦片卖掉就好了。',
      icon: [3, 1],
    },
    344: {
      name: '辣条',
      quote: '同样是小麦制成的，只不过这些上面撒的不是糖罢了。',
      icon: [0, 2],
    },
    401: {
      name: '鲜贝',
      quote: '不保证含有海鲜。',
      icon: [1, 2],
    },
    402: {
      name: '小猫熊面饼',
      quote: '据说用水泡会变的难吃，和饼干一样。',
      icon: [2, 2],
    },
    463: {
      name: '大灰兔奶糖',
      quote: '用饼干制成的包装——不是指最外面这层。',
      icon: [3, 2],
    },
    612: {
      name: '俄芙巧克力',
      quote:
        '你可以选择整齐地掰下每个小块，也可以反人类一样整板咬着吃。一些海外国家生产的这些东西有数百种独特的口味，如绿茶味、龙虾浓汤味和黑巧克力味。',
      icon: [0, 3],
    },
    618: {
      name: '霜饼',
      quote: '据说撒在烘焙米饼上的糖霜是从冰雹中提取出来的。',
      icon: [1, 3],
    },
    619: {
      name: '诡脆鲨威化饼干',
      quote: '小心它一口被你吃掉。',
      icon: [2, 3],
    },
  },

  // Big number
  CN_UNITS: [
    [1e72, '大数'],
    [1e68, '无量'],
    [1e64, '不可思议'],
    [1e60, '那由他'],
    [1e56, '阿僧祇'],
    [1e52, '恒河沙'],
    [1e48, '极'],
    [1e44, '载'],
    [1e40, '正'],
    [1e36, '涧'],
    [1e32, '沟'],
    [1e28, '穰'],
    [1e24, '秭'],
    [1e20, '垓'],
    [1e16, '京'],
    [1e12, '兆'],
  ],

  // Stackable units
  CN_UNITS_STACKABLE: [
    [1e8, '亿'],
    [1e4, '万'],
    [1e3, '千'],
    [1e2, '百'],
    [1e1, '十'],
  ],

  // Min unit display value
  CN_UNITS_MIN: ['十', '百', '千', '万', '亿'],

  // Custom building actions
  STR_BUILDING_ACTION_REGEX: /到目前为止生产出 <b>(.*) 块饼干<\/b>/,
  CN_BUILDING_ACTION: {
    'clicked': '到目前为止点击了 [X] 次饼干',
    'baked': '到目前为止烘焙了 [X] 块饼干',
    'harvested': '到目前为止收获了 [X] 块饼干',
    'mined': '到目前为止开采出了 [X] 块饼干',
    'mass-produced': '到目前为止量产了 [X] 块饼干',
    'banked': '到目前为止投资获得了 [X] 块饼干',
    'discovered': '到目前为止发现了 [X] 块饼干',
    'summoned': '到目前为止召唤了 [X] 块饼干',
    'shipped': '到目前为止运输了 [X] 块饼干',
    'transmuted': '到目前为止冶炼出了 [X] 块饼干',
    'retrieved': '到目前为止获取了 [X] 块饼干',
    'recovered': '到目前为止回收了 [X] 块饼干',
    'condensed': '到目前为止聚合了 [X] 块饼干',
    'converted': '到目前为止转化出了 [X] 块饼干',
    'spontaneously generated': '到目前为止随机出现了 [X] 块饼干',
    'made from cookies': '到目前为止有 [X] 块饼干双倍分形了',
    'programmed': '到目前为止计算出了 [X] 块饼干',
    'hijacked': '到目前为止劫持了 [X] 块饼干',
    'imagined': '到目前为止想象出了 [X] 块饼干',
  },

  // Custom building level tooltips
  STR_BUILDING_EXTRANAME_REGEX: /获得<b>/,
  CN_BUILDING_EXTRANAME: {
    '[X] extra finger': '[X] 只额外手指为你',
    'Grandmas are [X] year older': '奶奶们又老了 [X] 岁，她们的经验为你',
    '[X] more acre': '[X] 英亩的扩充地为你',
    '[X] mile deeper': '所有矿坑都加深了 [X] 英里，为你',
    '[X] additional patent': '[X] 项新专利为你',
    'Interest rates [X]% better': '银行的利率提高了 [X]%，为你',
    '[X] sacred artifact retrieved': '发现了 [X] 处神圣的遗迹，为你',
    'Incantations have [X] more syllable': '每个咒语都添加了 [X] 个新音节，为你',
    '[X] galaxy fully explored': '完全探索了 [X] 个银河，为你',
    '[X] primordial element mastered': '掌握了 [X] 个基原元素，为你',
    '[X] dimension enslaved': '统治了 [X] 个超元维度，为你',
    '[X] century secured': '收复了 [X] 个世纪，为你',
    '[X] extra quark flavor': '有 [X] 种新的夸克风味为你',
    '[X] new color discovered': '发现了 [X] 种新的颜色，为你',
    'Chancemakers are powered by [X]-leaf clovers': '机会制造机由[X]叶幸运草驱动，为你',
    '[X] iteration deep': '经过 [X] 层迭代，你',
    'Equipped with [X] external library': '接入了 [X] 个第三方库，为你',
    '[X] manifold': '[X] 个宇宙合集为你',
    '[X] extra IQ point': '[X] 点额外的IQ点数，为你',
  },

  // Default settings
  DEF_SETTING_TRILLION: 0,
  DEF_SETTING_BRAND: 1,

  // Strings
  STR_PURCHASE: '点击以购买。',
  STR_PURRCHASE: '点击以收养。',
  STR_INFINITY: '无限',
  STR_SETTING_TITLE: '中文模组设置',
  STR_SETTING_CNUNIT: '使用中文计数单位',
  STR_SETTING_CNUNIT_LABEL: '按住<b>Z键</b>可临时显示完整数字',
  STR_SETTING_DECIMAL: '中文单位前保留',
  STR_SETTING_DECIMAL_RIGHT: '小数点后[$]位',
  STR_SETTING_MIN_UNIT: '最小计数单位',
  STR_SETTING_TRILLION: '启用“兆”单位',
  STR_SETTING_TRILLION_LABEL: '启用后 <b>1万亿</b> 将显示为 <b>1兆</b>',
  STR_SETTING_SCIENTIFIC: '使用科学计数法',
  STR_SETTING_SCIENTIFIC_LABEL: '替换完整数字为优化版的科学计数法，禁用后使用原版数字显示',
  STR_SETTING_SCILEN: '数字长度',
  STR_SETTING_SCILEN_VALUES: ['完整', '长', '中', '短'],
  STR_SETTING_SCILEN_LABEL: '可以调整数字显示的长度，普通数字和科学计数法均会被影响',
  STR_SETTING_FIXLEN: '固定小数位数',
  STR_SETTING_FIXLEN_LABEL: '启用后中文单位前的小数不会省略末尾的0。',

  STR_531:
    '“从前有座山，山上有座庙，[X]在庙里开了一家烘焙坊。一天，烘焙坊的门口传来了敲门声。[X]打开了门，抬头看到了一位散发着邪恶气息的老奶奶。老奶奶微微张口，用虚弱而诡异的声音，开始讲述她记忆中的小故事：',
  STR_534_A: '<q>可靠的小家伙鼠不胜鼠！</q>',
  STR_534_B: '<q>可靠的小家伙数不胜数！</q>',
  STR_606: '就像量子计算一样，但是更有趣',
  STR_606_FUNC: code =>
    '(你买了注彩票，彩票号码为 ' +
    code +
    '，彩票中的奖品是' +
    choose([
      ' ' + Math.floor(Math.random() * 5 + 2) + ' 行 Javascript 代码',
      '一次 Math.random() 的免费使用权',
      '一量子位，然而并不知道那是什么玩意',
      '一块被啃了一半的饼干',
      '一台全新的吸尘器',
      '大半杯敞口放了一天的橙子味汽水',
      '一个很好吃的三明治',
      '一大把口袋里的碎毛',
      '某人基本干净的假发',
      '免费去高档餐厅参观的机会',
      '一张写着 ' + code + ' 的纸',
      '一次抬头偷看滚动新闻的机会',
      '一张半价彩票的优惠券',
      '一张自助发霉面包的餐券',
      '永远用不完的空气',
      '一套' +
        choose([
          '红色',
          '橙色',
          '黄色',
          '绿色',
          '蓝色',
          '紫色',
          '黑色',
          '白色',
          '灰色',
          '棕色',
          '粉色',
          '青色',
        ]) +
        '便签纸',
      '一次暂时提升自己智商的机会',
      '一把古老的符文剑',
      '遥远国度的宝座',
      '黑手党头目的职位，祝你好运',
      '一周末的时间旅行实验参与机会',
      '一个挺好看的小玩意',
      '与一个油井的契约',
      '一个用你自选的动物，植物和朋友做成的汉堡',
      '世界上最后一只' + choose(['渡渡鸟', '袋狼', '独角兽', '恐龙', '熊猫']) + '的抚养权',
      '满满的成就感',
      '稍纵即逝的沾沾自喜的感觉',
      '一种隐约的不安感',
      '深沉的存在恐惧',
      '延长你一周的寿命',
      '从现在开始你会有意识地自己呼吸',
      '现在可以眨眼一次',
      '和一位名人见面的机会，活人死人都可以。请在你今晚的梦里领奖。',
      '一场很温馨的梦',
      '一个搞怪的音效',
      '45秒不受法律约束的时间',
      '一个没有结局的游戏',
      '一个圆形，三角形，正方形或其他简单的几何形状',
      '这条随机出现的消息',
      '改变人生的动力',
      '无限的恐惧',
      '一个秘密的超能力',
      '下次在下次彩票开奖时中奖的机会',
      '完全不合理的彩票恐惧症',
      '一大只蜘蛛',
      '增强你的自我价值感和决心',
      '内心的平静',
      '一张你喜欢的网游的两天双倍经验卡',
      '一小块宇宙，包含了你手上这张彩票的所有原子',
      '食物中毒',
      '天上的月亮！是的，月亮现在属于你了，虽然你自己碰不到它',
      '一辆新车呦',
      '一个新的口头禅',
      '你想要的胡思乱想',
      '……什么鬼？刮开的区域里什么都没写',
      '最新电影的导演职位',
      '一只很好看的小牛',
      '一枚真正的海盗金达布隆',
      '“财宝”什么的',
      '一艘船，不过它现在在海底的某处',
      '全新的二手婴儿鞋',
      '某个国王或王后的直系血统',
      '掌握一门已经失传的语言的能力',
      '一首你不知道歌词的歌曲的旋律',
      '持续的白噪声',
      '轻度残疾',
      '新的嘴唇',
      '一个东西',
      '一条带有你名字的流行语',
      '一个错字',
      '一张出狱卡',
      '你的余生……',
      '一次礼貌的怒吼',
      '被人居高临下地凝视一分钟',
      '一只被诅咒的猴爪',
      '真爱，大概',
      '一条可以自选的动物、国家、电视节目或名人的有趣事实',
      '一条流行网梗',
      '几分钟的乐趣',
      '空气。其实你没中奖，抱歉',
    ]) +
    '。)',
};


(function () {
  const __TWCNG = {
    // 按键
    UNIT_TOGGLE_KEY: 90,

    // 数字长度设置
    CN_NUMBER_LEN: [
      { threshold: 1e16, sciDecimals: 12 },
      { threshold: 1e13, sciDecimals: 9 },
      { threshold: 1e10, sciDecimals: 6 },
      { threshold: 1e7, sciDecimals: 3 },
    ],

    // 替换数字格式化
    FormatterCN: (val, floats) => {
      let unit = '';
      if (!isFinite(val)) return __TWCNL.STR_INFINITY;
      if (val >= 1e4) {
        for (const u of __TWCNL.CN_UNITS) {
          if (!Game.prefs.numbercntrillion && u[1] == '兆') continue;
          if (val >= u[0]) {
            val = Math.round(val / (u[0] / 10000)) / 10000;
            unit = u[1];
            break;
          }
        }
        for (var i = 0; i < __TWCNL.CN_UNITS_STACKABLE.length - Game.prefs.numbercnminunit; i++) {
          const u = __TWCNL.CN_UNITS_STACKABLE[i];
          while (val >= u[0]) {
            val = Math.round(val / (u[0] / 10000)) / 10000;
            unit = u[1] + unit;
          }
        }

        const prec = Game.prefs.numbercndecimal;
        if (Game.prefs.numbercnfixlen) {
          return (
            (Math.floor(val * prec) / prec)
              .toFixed(Game.prefs.numbercndecimallen)
              .replace(/\B(?=(\d{4})+(?!\d))/g, '\u2008') + unit
          );
        } else {
          return (
            (Math.floor(val * prec) / prec).toString().replace(/\B(?=(\d{4})+(?!\d))/g, '\u2008') +
            unit
          );
        }
      } else {
        return val.toString();
      }
    },

    // 替换科学计数法
    SUPNUM: ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'],
    FormatterScientific: (val, decimals) => {
      const [coefficient, exponent] = val.toExponential(decimals).split('e');
      let [integer, decimal] = coefficient.split('.');

      decimal ??= '';

      if (__TWCNG.isModdingAchievement)
        while (decimal.endsWith('000')) decimal = decimal.slice(0, -3);

      let superscript = '';
      let negative = false;
      for (var i = 0; i < exponent.length; i++) {
        if (exponent.charAt(i) == '+') {
          negative = false;
          continue;
        }
        if (exponent.charAt(i) == '-') {
          negative = true;
          continue;
        }
        superscript += __TWCNG.SUPNUM[exponent.charCodeAt(i) - 48];
      }

      let decimalPart = decimal.match(/.{1,3}/g);
      if (!decimalPart) decimalPart = decimal;
      else decimalPart = decimalPart.join('\u2008');

      return (
        integer +
        (decimalPart ? '.' : '') +
        decimalPart +
        '×10' +
        (negative ? '⁻' : '') +
        superscript
      );
    },

    FormatterGroupThree: val => {
      return Math.floor(Math.round(val * 1000) / 1000)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    SaveDataMap: {
      s: 'numbercnsci',
      c: 'numbercn',
      l: 'numbercnscilen',
      d: 'numbercndecimallen',
      m: 'numbercnminunit',
      t: 'numbercntrillion',
      b: 'brandcn',
      f: 'numbercnfixlen',
    },
  };

  // 中文数字魔改
  const ModGameUnit = MOD => {
    const oldBeautify = Beautify;
    Beautify = (val, floats) => {
      let negative = val < 0;
      let decimal = '';
      let fixed = val.toFixed(floats);
      if (Math.abs(val) < 1000 && floats > 0 && Math.floor(fixed) != fixed)
        decimal = '.' + fixed.toString().split('.')[1];
      val = Math.floor(Math.abs(val));
      if (floats > 0 && fixed == val + 1) val++;
      let output;

      const numLen = __TWCNG.CN_NUMBER_LEN[Game.prefs.numbercnscilen];

      if (
        Game.prefs.numbercn &&
        Game.keys[__TWCNG.UNIT_TOGGLE_KEY] != 1 &&
        (val < 1e88 || !isFinite(val))
      ) {
        output = __TWCNG.FormatterCN(val);
      } else {
        output = Game.prefs.numbercnsci
          ? val >= numLen.threshold
            ? __TWCNG.FormatterScientific(val, numLen.sciDecimals)
            : __TWCNG.FormatterGroupThree(val)
          : oldBeautify(val, floats);
      }

      if (output == '0') negative = false;
      return negative ? '-' + output : output + decimal;
    };
  };

  // 翻译花园小游戏的提示图片（因为里面有文本）
  const ModGardenTooltip = (MOD, M) => {
    let oldDescFunc = M.tools.info.descFunc;
    M.tools.info.descFunc = function () {
      return oldDescFunc().replace(
        '<img src="img/gardenTip.png" style="float:right;margin:0px 0px 8px 8px;"/>',
        '<img src="' +
          MOD.dirURI +
          '/gardenTip.png" width="120px" style="float:right;margin:0px 0px 8px 8px;"/>'
      );
    };
  };

  // 将花园收获饼干Popup改为Notify，避免和解锁种子提示冲突，并修复收获饼干数量没有翻译的问题
  const ModGardenPopup = (MOD, M) => {
    M.plants.bakeberry.onHarvest = function (x, y, age) {
      if (age >= this.mature) {
        let moni = Math.min(Game.cookies * 0.03, Game.cookiesPs * 60 * 30);
        if (moni != 0) {
          Game.Earn(moni);
          Game.Notify(
            loc('You harvested %1', this.name),
            loc('Found <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
            [0, this.icon, 'img/gardenPlants.png'],
            6
          );
        }
        M.dropUpgrade('Bakeberry cookies', 0.015);
      }
    };
    M.plants.chocoroot.onHarvest = function (x, y, age) {
      if (age >= this.mature) {
        let moni = Math.min(Game.cookies * 0.03, Game.cookiesPs * 60 * 3);
        if (moni != 0) {
          Game.Earn(moni);
          Game.Notify(
            loc('You harvested %1', this.name),
            loc('Found <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
            [0, this.icon, 'img/gardenPlants.png'],
            6
          );
        }
      }
    };
    M.plants.whiteChocoroot.onHarvest = function (x, y, age) {
      if (age >= this.mature) {
        let moni = Math.min(Game.cookies * 0.03, Game.cookiesPs * 60 * 3);
        if (moni != 0) {
          Game.Earn(moni);
          Game.Notify(
            loc('You harvested %1', this.name),
            loc('Found <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
            [0, this.icon, 'img/gardenPlants.png'],
            6
          );
        }
      }
    };
    M.plants.queenbeet.onHarvest = function (x, y, age) {
      if (age >= this.mature) {
        let moni = Math.min(Game.cookies * 0.04, Game.cookiesPs * 60 * 60);
        if (moni != 0) {
          Game.Earn(moni);
          Game.Notify(
            loc('You harvested %1', this.name),
            loc('Found <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
            [0, this.icon, 'img/gardenPlants.png'],
            6
          );
        }
      }
    };
    M.plants.duketater.onHarvest = function (x, y, age) {
      if (age >= this.mature) {
        let moni = Math.min(Game.cookies * 0.08, Game.cookiesPs * 60 * 60 * 2);
        if (moni != 0) {
          Game.Earn(moni);
          Game.Notify(
            loc('You harvested %1', this.name),
            loc('Found <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
            [0, this.icon, 'img/gardenPlants.png'],
            6
          );
          M.dropUpgrade('Duketater cookies', 0.005);
        }
      }
    };
    M.plants.crumbspore.onDie = function (x, y) {
      let moni = Math.min(Game.cookies * 0.01, Game.cookiesPs * 60) * Math.random();
      if (moni != 0) {
        Game.Earn(moni);
        Game.Notify(
          loc('%1 decayed', this.name),
          loc('Exploded into <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
          [0, this.icon, 'img/gardenPlants.png'],
          6
        );
      }
    };
    M.plants.doughshroom.onDie = function (x, y) {
      let moni = Math.min(Game.cookies * 0.03, Game.cookiesPs * 60 * 5) * Math.random();
      if (moni != 0) {
        Game.Earn(moni);
        Game.Notify(
          loc('%1 decayed', this.name),
          loc('Exploded into <b>%1</b>!', loc('%1 cookie', Beautify(moni))),
          [0, this.icon, 'img/gardenPlants.png'],
          6
        );
      }
    };
  };

  // 花园小游戏加载检查器
  const ModGarden = MOD => {
    const gardenChecker = () => {
      if (Game.isMinigameReady(Game.Objects['Farm'])) {
        let M = Game.Objects['Farm'].minigame;
        ModGardenTooltip(MOD, M);
        ModGardenPopup(MOD, M);
      } else {
        setTimeout(gardenChecker, 500);
      }
    };
    gardenChecker();
  };

  // 修复股票小游戏内未翻译的文本
  const ModMarket = MOD => {
    const hackMarket = () => {
      if (Game.isMinigameReady(Game.Objects['Bank'])) {
        let M = Game.Objects['Bank'].minigame;
        M.loanTypes[2][0] = loc('a retirement loan');
      } else {
        setTimeout(hackMarket, 500);
      }
    };
    hackMarket();
  };

  // 修复Santa升级提示中未翻译的文本
  const ModUpgrade152 = MOD => {
    Game.UpgradesById[152].buyFunction = function () {
      const drop = choose(Game.santaDrops);
      Game.Unlock(drop);
      const dropName = Game.Upgrades[drop].dname;
      Game.Notify(
        loc('In the festive hat, you find...'),
        loc('a festive test tube<br>and <b>%1</b>.', dropName),
        Game.Upgrades[drop].icon
      );
    };
  };

  // 修复黄金开关未翻译的文本
  const ModUpgrade332 = MOD => {
    Game.UpgradesById[332].descFunc = function () {
      if (Game.Has('Residual luck')) {
        let bonus = 0;
        const upgrades = Game.goldenCookieUpgrades;
        for (let i in upgrades) {
          if (Game.Has(upgrades[i])) bonus++;
        }
        return (
          '<div style="text-align:center;">' +
          Game.listTinyOwnedUpgrades(Game.goldenCookieUpgrades) +
          '<br><br>' +
          loc(
            'The effective boost is <b>+%1%</b><br>thanks to residual luck<br>and your <b>%2</b> %3.',
            [
              Beautify(Math.round(50 + bonus * 10)),
              Beautify(bonus),
              loc('golden cookie upgrade', bonus),
            ]
          ) +
          '</div><div class="line"></div>' +
          this.ddesc
        );
      }
      return this.desc;
    };
  };

  // 修复巧克力蛋提示中未翻译的文本
  const ModUpgrade227 = MOD => {
    Game.UpgradesById[227].buyFunction = function () {
      const cookies = Game.cookies * 0.05;
      Game.Notify(
        Game.Upgrades['Chocolate egg'].dname,
        loc('The egg bursts into <b>%1</b> cookies!', Beautify(cookies)),
        Game.Upgrades['Chocolate egg'].icon
      );
      Game.Earn(cookies);
    };
  };

  // 魔改一个带特效的分形引擎引文
  const ModUpgrade531 = MOD => {
    Game.UpgradesById[531].descFunc = function () {
      var str = __TWCNL.STR_531.replace(/\[X\]/g, Game.bakeryName);
      var i = Math.floor(Game.T * 0.1) % 100;
      var offset = 'transform:translate3d(-' + i + '%, 5px, 0);';
      return (
        this.baseDesc +
        '<style>.CNS{margin-left:2px;margin-right:2px;max-width:250px;overflow:hidden;display:inline-block;white-space:nowrap;}.CNS p{white-space:nowrap;overflow:hidden;display:inline-block;}</style>' +
        '<q style="font-style:normal;font-family:Courier monospace;white-space:nowrap;">' +
        '<span class="CNS"><p style="' +
        offset +
        '">' +
        str +
        '</p><p style="' +
        offset +
        '">' +
        str +
        '</p></span></q>'
      );
    };
  };

  // 魔改点鼠标的老鼠的随机引文
  const ModUpgrade534 = MOD => {
    Game.UpgradesById[534].descFunc = function () {
      Math.seedrandom(Game.seed + '-blasphemouse');
      if (Math.random() < 0.3) {
        Math.seedrandom();
        return this.baseDesc + __TWCNL.STR_534_A;
      } else {
        Math.seedrandom();
        return this.baseDesc + __TWCNL.STR_534_B;
      }
    };
  };

  // 魔改猴子排序的随机引文
  const ModUpgrade606 = MOD => {
    const shuffle = arr => {
      var i = arr.length,
        j,
        temp;
      if (i == 0) return arr;
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    };

    Game.UpgradesById[606].descFunc = function () {
      Math.seedrandom(Game.seed + '-tombolacomputing');
      const red = [];
      const blue = [];
      for (let i = 1; i <= 33; i++) {
        if (i < 10) red.push('0' + i.toString());
        else red.push(i.toString());
      }
      for (let i = 1; i <= 16; i++) {
        if (i < 10) blue.push('0' + i.toString());
        else blue.push(i.toString());
      }

      const code = shuffle(red).slice(0, 6).join(' ') + '-' + shuffle(blue)[0];
      const str = __TWCNL.STR_606_FUNC(code);

      Math.seedrandom();
      return this.baseDesc + '<q>' + __TWCNL.STR_606 + '<br>' + str + '</q>';
    };
  };

  // 修复彩蛋掉落未翻译的文本
  const ModDropEgg = MOD => {
    Game.DropEgg = failRate => {
      failRate *= 1 / Game.dropRateMult();
      if (Game.season != 'easter') return;
      if (Game.HasAchiev('Hide & seek champion')) failRate *= 0.7;
      if (Game.Has('Omelette')) failRate *= 0.9;
      if (Game.Has('Starspawn')) failRate *= 0.9;
      if (Game.hasGod) {
        const godLvl = Game.hasGod('seasons');
        if (godLvl == 1) failRate *= 0.9;
        else if (godLvl == 2) failRate *= 0.95;
        else if (godLvl == 3) failRate *= 0.97;
      }
      if (Math.random() >= failRate) {
        let drop = '';
        if (Math.random() < 0.1) drop = choose(Game.rareEggDrops);
        else drop = choose(Game.eggDrops);
        if (Game.Has(drop) || Game.HasUnlocked(drop)) {
          //reroll if we have it
          if (Math.random() < 0.1) drop = choose(Game.rareEggDrops);
          else drop = choose(Game.eggDrops);
        }
        if (Game.Has(drop) || Game.HasUnlocked(drop)) return;
        Game.Unlock(drop);
        Game.Notify(
          loc('You found an egg!'),
          '<b>' + Game.Upgrades[drop].dname + '</b>',
          Game.Upgrades[drop].icon
        );
      }
    };
  };

  // 修复抚摸龙掉落未翻译的通知
  const ModTouchSpecialPic = MOD => {
    Game.ClickSpecialPic = function () {
      if (
        Game.specialTab == 'dragon' &&
        Game.dragonLevel >= 4 &&
        Game.Has('Pet the dragon') &&
        l('specialPic')
      ) {
        triggerAnim(l('specialPic'), 'pucker');
        PlaySound('snd/click' + Math.floor(Math.random() * 7 + 1) + '.mp3', 0.5);
        if (Date.now() - Game.lastClickedSpecialPic > 2000) PlaySound('snd/growl.mp3');
        //else if (Math.random()<0.5) PlaySound('snd/growl.mp3',0.5+Math.random()*0.2);
        Game.lastClickedSpecialPic = Date.now();
        if (Game.prefs.particles) {
          Game.particleAdd(
            Game.mouseX,
            Game.mouseY - 32,
            Math.random() * 4 - 2,
            Math.random() * -2 - 4,
            Math.random() * 0.2 + 0.5,
            1,
            2,
            [20, 3]
          );
        }
        if (Game.dragonLevel >= 8 && Math.random() < 1 / 20) {
          Math.seedrandom(Game.seed + '/dragonTime');
          var drops = ['Dragon scale', 'Dragon claw', 'Dragon fang', 'Dragon teddy bear'];
          drops = shuffle(drops);
          var drop = drops[Math.floor((new Date().getMinutes() / 60) * drops.length)];
          if (!Game.Has(drop) && !Game.HasUnlocked(drop)) {
            Game.Unlock(drop);
            Game.Notify(
              Game.Upgrades[drop].dname,
              '<b>' + loc('Your dragon dropped something!') + '</b>',
              Game.Upgrades[drop].icon
            );
          }
          Math.seedrandom();
        }
      }
    };
  };

  // 小猫购买提示魔改
  const ModCrateTooltip = MOD => {
    const oldCrateTooltip = Game.crateTooltip;
    Game.crateTooltip = function (me, context) {
      let result = oldCrateTooltip(me, context);
      if (me.kitten) result = result.replace(__TWCNL.STR_PURCHASE, __TWCNL.STR_PURRCHASE);
      return result;
    };
  };

  // 建筑物 Tooltip 魔改
  const ModObjectTooltip = MOD => {
    for (const i in Game.Objects) {
      const oldTooltip = Game.Objects[i].tooltip;
      Game.Objects[i].tooltip = function () {
        let result = oldTooltip.bind(this)();
        if (this.actionName && __TWCNL.CN_BUILDING_ACTION[this.actionName]) {
          result = result.replace(__TWCNL.STR_BUILDING_ACTION_REGEX, (_, num) =>
            __TWCNL.CN_BUILDING_ACTION[this.actionName].replace('[X]', `<b>${num}</b>`)
          );
        }
        return result;
      };
    }
  };

  // 升级 Tooltip 魔改
  const ModObjectLevelTooltip = MOD => {
    for (const i in Game.Objects) {
      const oldLevelTooltip = Game.Objects[i].levelTooltip;
      Game.Objects[i].levelTooltip = function () {
        let result = oldLevelTooltip.bind(this)();
        if (this.extraName && __TWCNL.CN_BUILDING_EXTRANAME[this.extraName]) {
          if (this.level) {
            result = result.replace(
              __TWCNL.STR_BUILDING_EXTRANAME_REGEX,
              og =>
                __TWCNL.CN_BUILDING_EXTRANAME[this.extraName].replace(
                  '[X]',
                  this.level.toString()
                ) + og
            );
          }
        }
        return result;
      };
    }
  };

  // 修复parseLoc
  const FixParseLoc = () => {
    const isCN = localStorageGet('CookieClickerLang') === 'ZH-CN';

    parseLoc = (str, params) => {
      if (typeof params === 'undefined') params = [];
      else if (params.constructor !== Array) params = [params];
      if (!str) return '';

      // Transform func field into actual functions
      if (str.constructor === Array) {
        const ogStr = str;
        let hasFunc = false;
        for (let i = 0; i < ogStr.length; i++) {
          const s = ogStr[i];
          if (typeof s === 'function') {
            if (!hasFunc) {
              str = [...ogStr];
              hasFunc = true;
            }
            str[i] = s();
          }
        }
      } else if (typeof str === 'function') {
        str = str();
      }

      if (params.length == 0) return str;

      if (str.constructor === Array) {
        if (typeof params[0] === 'object') {
          let plurIndex = locPlur(params[0].n);
          plurIndex = Math.min(str.length - 1, plurIndex);
          str = str[plurIndex];
          str = replaceAll('%1', params[0].b, str);
        } else {
          let plurIndex = locPlur(params[0]);
          plurIndex = Math.min(str.length - 1, plurIndex);
          str = str[plurIndex];
          str = replaceAll('%1', params[0], str);
        }
      }

      let out = '';
      let len = str.length;
      let inPercent = false;
      for (let i = 0; i < len; i++) {
        let it = str[i];
        if (inPercent) {
          inPercent = false;
          afterReplace = true;
          if (!isNaN(it) && params.length >= parseInt(it) - 1) {
            out += params[parseInt(it) - 1];
          } else out += '%' + it;
        } else if (it == '%') inPercent = true;
        else out += it;
      }
      if (inPercent) out += '%';
      return out;
    };

    if (isCN) {
      // 让成就的数字Filter支持科学计数法
      beautifyInTextFilterSN = /\d(?:\.\d*)?e\+\d+/g;
      beautifyInTextFilterUN = /(\d+(?:\.\d+)?)( (?:\w+lion)| (?:thousand))/;
      // 将parseInt替换成可以读取更多数字的方式
      BeautifyInTextFunction = str => {
        return Beautify(Number(str.replace(/,/g, '')));
      };
      BeautifyInText = str => {
        let matchNumUnit = str.match(beautifyInTextFilterUN);

        if (matchNumUnit) {
          // 将单位替换成BeautifyInTextFunction可处理的格式
          const unitIndex = formatLong.indexOf(matchNumUnit[2]);
          if (unitIndex < 0) return str;
          const unitExp = (formatLong.indexOf(matchNumUnit[2]) + 1) * 3;
          const beautified = BeautifyInTextFunction(`${matchNumUnit[1]}e${unitExp}`);
          return str.replace(matchNumUnit[0], beautified);
        }

        let matchNum = str.match(beautifyInTextFilterSN) || str.match(beautifyInTextFilter);
        if (matchNum) {
          const beautified = BeautifyInTextFunction(matchNum[0]);
          return str.replace(matchNum[0], beautified);
        }
        return str;
      };
      BeautifyAll = () => {
        __TWCNG.isModdingAchievement = true;
        for (var i in Game.UpgradesById) {
          const it = Game.UpgradesById[i];
          const type = it.getType();
          let found = false;
          it.ddesc = BeautifyInText(it.baseDesc || it.ddesc);
          found = FindLocStringByPart(type + ' desc ' + it.id);
          if (found) it.ddesc = loc(found);
          if (__TWCNL.BRAND_COOKIE_CN && Game.prefs.brandcn && __TWCNL.BRAND_COOKIE_CN[i]) {
            // 替换的饼干特殊判断
            it.ddesc += '<q>' + __TWCNL.BRAND_COOKIE_CN[i].quote + '</q>';
          } else {
            found = FindLocStringByPart(type + ' quote ' + it.id);
            if (found) it.ddesc += '<q>' + loc(found) + '</q>';
          }
        }
        for (var i in Game.AchievementsById) {
          const it = Game.AchievementsById[i];
          const type = it.getType();
          let found = false;
          it.ddesc = BeautifyInText(it.baseDesc || it.ddesc);
          found = FindLocStringByPart(type + ' desc ' + it.id);
          if (found) it.ddesc = loc(found);
          found = FindLocStringByPart(type + ' quote ' + it.id);
          if (found) it.ddesc += '<q>' + loc(found) + '</q>';
        }
        __TWCNG.isModdingAchievement = false;
      };
    }
  };

  // 修复百亿级别单位数字换行闪烁的问题
  const ModCookiesFormat = MOD => {
    Game.registerHook('draw', () => {
      // 只有使用中文单位时需要
      if (Game.prefs.numbercn && Game.keys[__TWCNG.UNIT_TOGGLE_KEY] != 1) {
        const cookies = l('cookies');
        cookies.innerHTML = cookies.innerHTML.replace(
          new RegExp('(-?[0-9]+(?:.[0-9])?[^sa-z]*)(?:<br>| )' + __TWCNL.NUM_COOKIES),
          (_, v) => v + __TWCNL.NUM_COOKIES
        );
      }
    });
  };

  // 魔改随机烘焙坊名
  const ModRandomBakeryName = MOD => {
    const RandomName = Game.RandomBakeryName;
    Game.RandomBakeryName = function () {
      return RandomName().replace(/ /g, '');
    };
  };

  // 汉化背景选择器中的背景名
  const ModBackgroundSelector = MOD => {
    for (let i in Game.BGsByChoice) {
      if (i == 0) continue;
      Game.BGsByChoice[i].name = loc('[bg] ' + Game.BGsByChoice[i].name);
    }
  };

  // 菜单修改
  const MENU_HOOKS = [];
  const AddMenuHook = (MOD, func) => {
    if (typeof CCSE == 'undefined') {
      MENU_HOOKS.push([MOD, func]);
    } else {
      if (Game.customOptionsMenu == null) {
        Game.customOptionsMenu = [];
      }
      Game.customOptionsMenu.push(() => {
        CCSE.AppendOptionsMenu(func(MOD));
      });
    }
  };
  const SetupMenuHooks = MOD => {
    if (typeof CCSE == 'undefined') {
      const oldMenu = Game.UpdateMenu;
      Game.UpdateMenu = function () {
        oldMenu();
        if (Game.onMenu == 'prefs') {
          let menuHTML = l('menu').innerHTML;
          for (let hook of MENU_HOOKS) {
            menuHTML = menuHTML.replace(
              '<div style="height:128px;"></div>',
              '<div class="framed" style="margin:4px 48px;"><div class="block" style="padding:0px;margin:8px 4px;"><div class="subsection" style="padding:0px;">' +
                hook[1](hook[0], menuHTML) +
                '</div></div></div><div style="height:128px;"></div>'
            );
          }
          menu.innerHTML = menuHTML;
        }
      };
    }
  };

  // 添加设置
  const ModSlider = (
    slider,
    leftText,
    rightText,
    startValueDisplayFunction,
    startValueFunction,
    min,
    max,
    step,
    callback
  ) => {
    if (!callback) callback = '';
    return (
      '<div class="sliderBox"><div style="float:left;" class="smallFancyButton">' +
      leftText +
      '</div><div style="float:right;" class="smallFancyButton" id="' +
      slider +
      'RightText">' +
      rightText.replace('[$]', startValueDisplayFunction()) +
      '</div><input class="slider" style="clear:both;" type="range" min="' +
      min +
      '" max="' +
      max +
      '" step="' +
      step +
      '" value="' +
      startValueFunction() +
      '" onchange="' +
      callback +
      '" oninput="' +
      callback +
      '" onmouseup="PlaySound(\'snd/tick.mp3\');" id="' +
      slider +
      '"/></div>'
    );
  };

  const DisabledButton = (button, text) => {
    return '<a class="smallFancyButton option off disabled" id="' + button + '">' + text + '</a>';
  };

  const ModPrefButton = (prefName, button, on, off, callback, invert) => {
    var invert = invert ? 1 : 0;
    if (!callback) callback = '';
    callback += "PlaySound('snd/tick.mp3');";
    return (
      '<a class="smallFancyButton prefButton option' +
      (Game.prefs[prefName] ^ invert ? '' : ' off') +
      '" id="' +
      button +
      '" ' +
      Game.clickStr +
      '="Game.Toggle(\'' +
      prefName +
      "','" +
      button +
      "','" +
      on +
      "','" +
      off +
      "','" +
      invert +
      "');" +
      callback +
      '">' +
      (Game.prefs[prefName] ? on : off) +
      '</a>'
    );
  };

  const ModPrefMenu = MOD => {
    return (
      `<div class="title">${__TWCNL.STR_SETTING_TITLE}</div>` +
      '<div class="listing">' +
      ModPrefButton(
        'numbercn',
        'numbercnButton',
        __TWCNL.STR_SETTING_CNUNIT + ON,
        __TWCNL.STR_SETTING_CNUNIT + OFF,
        'Game.UpdateMenu();BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;'
      ) +
      `<label>(${__TWCNL.STR_SETTING_CNUNIT_LABEL})</label><br>` +
      (Game.prefs.numbercn
        ? ModSlider(
            'numbercnDecimal',
            __TWCNL.STR_SETTING_DECIMAL,
            __TWCNL.STR_SETTING_DECIMAL_RIGHT,
            () => Game.prefs.numbercndecimallen,
            () => Game.prefs.numbercndecimallen,
            0,
            4,
            1,
            "Game.prefs.numbercndecimallen=Math.floor(l('numbercnDecimal').value);Game.prefs.numbercndecimal=Math.pow(10,Game.prefs.numbercndecimallen);l('numbercnDecimalRightText').innerHTML='小数点后'+Math.floor(l('numbercnDecimal').value)+'位';BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;"
          ) +
          '<br>' +
          ModSlider(
            'numbercnMinUnit',
            __TWCNL.STR_SETTING_MIN_UNIT,
            '[$]',
            () => __TWCNL.CN_UNITS_MIN[Game.prefs.numbercnminunit],
            () => Game.prefs.numbercnminunit,
            0,
            4,
            1,
            "Game.prefs.numbercnminunit=l('numbercnMinUnit').value;l('numbercnMinUnitRightText').innerHTML=__TWCNL.CN_UNITS_MIN[l('numbercnMinUnit').value];BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;"
          ) +
          '<br>' +
          ModPrefButton(
            'numbercnfixlen',
            'numbercnFixLenButton',
            __TWCNL.STR_SETTING_FIXLEN + ON,
            __TWCNL.STR_SETTING_FIXLEN + OFF,
            'Game.UpdateMenu();BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;'
          ) +
          `<label>(${__TWCNL.STR_SETTING_FIXLEN_LABEL})</label><br>` +
          ModPrefButton(
            'numbercntrillion',
            'numbercntrillionButton',
            __TWCNL.STR_SETTING_TRILLION + ON,
            __TWCNL.STR_SETTING_TRILLION + OFF,
            'BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;'
          ) +
          `<label>(${__TWCNL.STR_SETTING_TRILLION_LABEL})</label><br>`
        : '') +
      '<br>' +
      ModPrefButton(
        'numbercnsci',
        'numbercnDisableButton',
        __TWCNL.STR_SETTING_SCIENTIFIC + ON,
        __TWCNL.STR_SETTING_SCIENTIFIC + OFF,
        'Game.UpdateMenu();BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;'
      ) +
      `<label>(${__TWCNL.STR_SETTING_SCIENTIFIC_LABEL})</label><br>` +
      (Game.prefs.numbercnsci
        ? ModSlider(
            'numbercnScientific',
            __TWCNL.STR_SETTING_SCILEN,
            '[$]',
            () => __TWCNL.STR_SETTING_SCILEN_VALUES[Game.prefs.numbercnscilen],
            () => Game.prefs.numbercnscilen,
            0,
            3,
            1,
            "Game.prefs.numbercnscilen=l('numbercnScientific').value;l('numbercnScientificRightText').innerHTML=__TWCNL.STR_SETTING_SCILEN_VALUES[Math.floor(l('numbercnScientific').value)];BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;"
          ) + `<label>(${__TWCNL.STR_SETTING_SCILEN_LABEL})</label><br>`
        : '') +
      '<br>' +
      (__TWCNL.BRAND_COOKIE_CN
        ? Game.Has('Box of brand biscuits')
          ? ModPrefButton(
              'brandcn',
              'brandcnButton',
              '替换品牌饼干' + ON,
              '替换品牌饼干' + OFF,
              "Game.mods['" +
                MOD.id +
                "'].toggleBrandCookies();Game.RefreshStore();Game.upgradesToRebuild=1;"
            ) + '<label>(将“一盒品牌饼干”升级替换为本土化的品牌)</label><br>'
          : DisabledButton('brandcnButton', '??????????  ??') +
            '<label>(根据你目前的进度，该选项不会有影响也不能更改。)</label><br>'
        : '') +
      '</div>'
    );
  };

  // 去除时间格式的逗号
  const ModSayTime = MOD => {
    const oldSayTime = Game.sayTime;
    Game.sayTime = (time, detail) =>
      oldSayTime(time, detail)
        .replace(/, /g, '')
        .replace(/Infinity/g, '∞');
  };

  // 替换品牌饼干
  const ModBrandedCookies = MOD => {
    MOD.OriginalBrandCookies = {};
    for (let uid in __TWCNL.BRAND_COOKIE_CN) {
      const it = Game.UpgradesById[uid];
      if (it) {
        MOD.OriginalBrandCookies[uid] = {
          name: it.dname,
          desc: it.ddesc,
          icon: it.icon,
        };
        if (__TWCNL.BRAND_COOKIE_CN[uid].quote) {
          __TWCNL.BRAND_COOKIE_CN[uid].desc =
            it.ddesc.replace(/<q>.*/, '') + '<q>' + __TWCNL.BRAND_COOKIE_CN[uid].quote + '</q>';
        }
        __TWCNL.BRAND_COOKIE_CN[uid].icon.push(`${MOD.dirURI}/brands.png`, it.icon[0], it.icon[1]);
      }
    }

    // 魔改ParticleAdd还原魔改饼干
    const ParticleAdd = Game.particleAdd;
    Game.particleAdd = (x, y, xd, yd, size, dur, z, pic, text) => {
      const part = ParticleAdd(x, y, xd, yd, size, dur, z, pic, text);
      // 还原魔改饼干
      if (part.picPos[3]) part.picPos = [part.picPos[3], part.picPos[4]];
      return part;
    };
  };

  // 魔改Synergie升级的描述文本
  const ModSynergies = MOD => {
    for (let id in Game.UpgradesById) {
      const it = Game.UpgradesById[id];
      if (
        (it.tier === 'synergy1' || it.tier === 'synergy2') &&
        it.buildingTie1 &&
        it.buildingTie2
      ) {
        it.baseDesc =
          loc('%1 gain <b>+%2%</b> CpS for each %3.', [
            cap(it.buildingTie1.plural),
            5,
            it.buildingTie2.single,
          ]) +
          '<br>' +
          loc('%1 gain <b>+%2%</b> CpS for each %3.', [
            cap(it.buildingTie2.plural),
            0.1,
            it.buildingTie1.single,
          ]);
      }
    }
  };

  const FixPlaySound = () => {
    // 用monophonic换性能，游戏里也没什么地方需要同时播放一个声音好几遍的情况
    PlaySound = (url, vol, pitchVar) => {
      var volume = 1;
      var volumeSetting = Game.volume;
      if (typeof vol !== 'undefined') volume = vol;
      if (volume < -5) {
        volume += 10;
        volumeSetting = Game.volumeMusic;
      }
      if (!volumeSetting || volume == 0) return 0;
      if (typeof Sounds[url] === 'undefined') {
        Sounds[url] = new Audio(url);
        Sounds[url].onloadeddata = function (e) {
          PlaySound(url, vol, pitchVar);
        };
      } else if (Sounds[url].readyState >= 2) {
        var sound = Sounds[url];
        sound.volume = Math.pow((volume * volumeSetting) / 100, 2);
        if (pitchSupport) {
          var pitchVar = typeof pitchVar === 'undefined' ? 0.05 : pitchVar;
          var rate = 1 + (Math.random() * 2 - 1) * pitchVar;
          sound.preservesPitch = false;
          sound.mozPreservesPitch = false;
          sound.webkitPreservesPitch = false;
          sound.playbackRate = rate;
        }
        try {
          sound.currentTime = 0;
          sound.play();
        } catch (e) {}
      }
    };
  };

  // 植入CSS
  const ModInjectCSS = MOD => {
    // 修改Notes里的行间距
    document.head.insertAdjacentHTML('beforeEnd', '<style>.note .title{line-height:1em}</style>');
  };

  // 在游戏加载前就修复Loc函数 (需要赶在本地化成就之前就生效)
  FixParseLoc();

  Game.registerMod(__TWCNL.MOD_ID, {
    init: function () {
      // 提供语言给函数
      this.lang = localStorageGet('CookieClickerLang');
      this.dirURI = this.dir
        ? 'file:///' + encodeURI(this.dir.replace(/\\/g, '/'))
        : 'CookieClickerCNMod';
      this.lastSpaceKeyStatus = 0;

      SetupMenuHooks(this);

      // onDraw
      Game.registerHook('draw', () => {
        if (
          this.lang == 'ZH-CN' &&
          Game.prefs.numbercn &&
          this.lastSpaceKeyStatus != Game.keys[__TWCNG.UNIT_TOGGLE_KEY]
        ) {
          // 检测按键变化
          this.lastSpaceKeyStatus = Game.keys[__TWCNG.UNIT_TOGGLE_KEY];
          BeautifyAll();
          Game.RefreshStore();
          Game.upgradesToRebuild = 1;
        }
      });

      // 其他语言也会被修复
      FixPlaySound(this);

      // 切换为其他语言时需要可以替换回来
      if (__TWCNL.BRAND_COOKIE_CN) ModBrandedCookies(this);

      // 只有语言是中文的时候启用模组
      if (this.lang == 'ZH-CN') {
        // 默认设置参数
        if (Game.prefs.numbercn == null) Game.prefs.numbercn = 1;
        if (Game.prefs.numbercnfixlen == null) Game.prefs.numbercnfixlen = 0;
        if (Game.prefs.numbercnsci == null) Game.prefs.numbercnsci = 1;
        if (Game.prefs.numbercnscilen == null) Game.prefs.numbercnscilen = 0;
        if (Game.prefs.numbercndecimal == null) Game.prefs.numbercndecimal = 100;
        if (Game.prefs.numbercndecimallen == null)
          Game.prefs.numbercndecimallen = Math.log10(Game.prefs.numbercndecimal);
        if (Game.prefs.numbercnminunit == null) Game.prefs.numbercnminunit = 1;
        if (Game.prefs.numbercntrillion == null)
          Game.prefs.numbercntrillion = __TWCNL.DEF_SETTING_TRILLION;
        if (Game.prefs.brandcn == null) Game.prefs.brandcn = __TWCNL.DEF_SETTING_BRAND;

        ModTouchSpecialPic(this);
        ModMarket(this);
        ModUpgrade152(this);
        ModUpgrade227(this);
        ModUpgrade332(this);
        ModUpgrade531(this);
        ModUpgrade534(this);
        ModUpgrade606(this);
        ModDropEgg(this);
        ModBackgroundSelector(this);
        ModInjectCSS(this);
        ModSayTime(this);
        ModGameUnit(this);
        ModCookiesFormat(this);
        ModGarden(this);
        ModSynergies(this);
        ModRandomBakeryName(this);
        ModCrateTooltip(this);
        ModObjectTooltip(this);
        ModObjectLevelTooltip(this);
        AddMenuHook(this, ModPrefMenu);
      }
    },

    save: function () {
      const p = {};
      for (let key in __TWCNG.SaveDataMap) {
        const option = __TWCNG.SaveDataMap[key];
        p[key] = Game.prefs[option];
      }

      return JSON.stringify({ p });
    },

    load: function (str) {
      try {
        let data = JSON.parse(str);
        if (data.prefs) {
          for (let pref in data.prefs) {
            Game.prefs[pref] = data.prefs[pref];
          }
          Game.prefs.numbercndecimallen = Math.log10(Game.prefs.numbercndecimal);
        } else if (data.p) {
          for (let key in __TWCNG.SaveDataMap) {
            const option = __TWCNG.SaveDataMap[key];
            if (data.p[key] != null) Game.prefs[option] = data.p[key];
          }
          Game.prefs.numbercndecimal = Math.pow(10, Game.prefs.numbercndecimallen);
        }
      } catch (e) {
        console.error(e);
      }

      BeautifyAll();
      this.toggleBrandCookies();
    },
    toggleBrandCookies: function () {
      const data =
        Game.prefs.brandcn && this.lang == 'ZH-CN'
          ? __TWCNL.BRAND_COOKIE_CN
          : this.OriginalBrandCookies;
      for (let uid in data) {
        const it = Game.UpgradesById[uid];
        it.dname = data[uid].name;
        it.ddesc = data[uid].desc;
        it.icon = data[uid].icon;
      }
    },
  });
})();
