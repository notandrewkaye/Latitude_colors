// http://flexport.com/design/guidelines/color-system
var init_latitude_colors = function(title) {
  var colors = [
    ["grey10", "F7FAFC"],
    ["grey20", "EDF3F7"],
    ["grey30", "CED7DE"],
    ["grey40", "B0BAC2"],
    ["grey50", "6E7881"],
    ["grey60", "18191A"],
    ["white", "FFFFFF"],
    ["red10", "FFEBEB"],
    ["red20", "FCBDBD"],
    ["red30", "F2555F"],
    ["red40", "EF3340"],
    ["red45", "D92736"],
    ["red50", "A6212A"],
    ["red60", "591317"],
    ["yellow10", "FCF6DE"],
    ["yellow20", "FFE880"],
    ["yellow30", "FFDE4C"],
    ["yellow40", "FFD100"],
    ["yellow50", "FF9419"],
    ["yellow60", "662E00"],
    ["", ""],
    ["blue10", "E7F1FF"],
    ["blue20", "BAD2FF"],
    ["blue30", "3E6BE6"],
    ["blue40", "265DF1"],
    ["blue50", "1942B3"],
    ["blue60", "0E2259"],
    ["", ""],
    ["green10", "EBFFF1"],
    ["green20", "B0EBC3"],
    ["green30", "66CC86"],
    ["green40", "3DC468"],
    ["green50", "2DA854"],
    ["green60", "124D25"],
    ["", ""],
    ["cyan10", "E8F6FF"],
    ["cyan20", "BEE6FF"],
    ["cyan30", "8CDBFF"],
    ["cyan40", "66CFFF"],
    ["cyan50", "0A8FCC"],
    ["cyan60", "00384C"],
    ["", ""],
    ["purple10", "F4EDFF"],
    ["purple20", "C4AEE8"],
    ["purple30", "8F62D9"],
    ["purple40", "7B41D9"],
    ["purple50", "572E99"],
    ["purple60", "331B59"],
    ["", ""],
  ];

  $(document).ready(function() {
    removeSwatches();

    for (var i = 0; i < colors.length; i++) {
      var hex = colors[i][1];
      var name = colors[i][0];
      $("#swatches").append(
        '<li><button class="palette name" onclick="window.location.hash=\'' +
          hex +
          '\'" title="' +
          name +
          '" style="width:51px;height:51px;background:#' +
          hex +
          ';">' +
          hex +
          "</button></li>"
      );
    }

    initSwatches(title);
  });
};
