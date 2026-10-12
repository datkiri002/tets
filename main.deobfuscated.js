var __typeError = msg => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { world } from "@minecraft/server";
var LOG_ENABLED = ![];
var LOG_LEVEL = "debug";
var LEVEL_ORDER = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40
};
var LOG_GROUPS = {
  ui: !![],
  ram: !![],
  disk: !![],
  entity: !![],
  trade: !![],
  cache: !![],
  gc: !![],
  mig: !![],
  flow: !![]
};
var MAX_PAYLOAD_CHARS = 800;
var _runtimeEnabled = !![];
function currentTick() {
  const _0x3162c9 = _0xa10031;
  try {
    return world[_0x3162c9(119)]();
  } catch (_0x57ae28) {
    return null;
  }
}
function stamp() {
  const _0x4b2991 = _0xa10031,
    _0x4db2ba = {
      BnrLS: function (_0x1334fa, _0x30b555) {
        return _0x1334fa(_0x30b555);
      }
    },
    _0x34b27d = Date.now(),
    _0x1ef8cb = new Date(_0x34b27d),
    _0x1b275c = (_0x3d2e59, _0x37a50a = 2) => String(_0x3d2e59).padStart(_0x37a50a, "0"),
    _0x228cc0 = _0x4db2ba.BnrLS(_0x1b275c, _0x1ef8cb[_0x4b2991(151)]()) + ":" + _0x1b275c(_0x1ef8cb[_0x4b2991(110)]()) + ":" + _0x1b275c(_0x1ef8cb[_0x4b2991(111)]()),
    _0x304176 = _0x1b275c(_0x1ef8cb[_0x4b2991(162)](), 3);
  return _0x228cc0 + "." + _0x304176;
}
function fmtPayload(_0x57eb71) {
  const _0x5e58a6 = _0xa10031,
    _0x4bbb1b = {
      eopDm: function (_0x43252e, _0x1b47ce) {
        return _0x43252e || _0x1b47ce;
      },
      ruBGW: _0x5e58a6(166),
      EnxoD: _0x5e58a6(124),
      gUibO: function (_0x272d58, _0x3310cd) {
        return _0x272d58 === _0x3310cd;
      },
      qehyt: _0x5e58a6(144),
      lOFNv: function (_0x24b5fa, _0x57c573) {
        return _0x24b5fa !== _0x57c573;
      },
      TstiX: "bigint",
      BHkYP: _0x5e58a6(135),
      nobZd: _0x5e58a6(179),
      kjItZ: function (_0x2f4a0d, _0xdd5168) {
        return _0x2f4a0d > _0xdd5168;
      },
      eRQeT: function (_0x288df3, _0x9ea5b0) {
        return _0x288df3 + _0x9ea5b0;
      },
      ryGEX: _0x5e58a6(109)
    };
  if (_0x57eb71 === void 0) return "";
  try {
    if (_0x57eb71 instanceof Error) return " " + _0x57eb71.name + ": " + _0x57eb71[_0x5e58a6(118)];
    if (typeof _0x57eb71 === _0x4bbb1b[_0x5e58a6(120)]) {
      if (_0x5e58a6(158) !== _0x4bbb1b.nobZd) return " " + (_0x4bbb1b[_0x5e58a6(141)](_0x57eb71.length, MAX_PAYLOAD_CHARS) ? _0x57eb71[_0x5e58a6(142)](0, MAX_PAYLOAD_CHARS) + "\u2026" : _0x57eb71);else {
        const _0x463d09 = _0xa11f54[_0x5e58a6(103)](),
          _0x1a8846 = new _0x1114dd(_0x463d09),
          _0x467f9a = (_0x4c340a, _0x35a9e7 = 2) => _0x31f3b4(_0x4c340a)[_0x5e58a6(126)](_0x35a9e7, "0"),
          _0x4c0ea2 = _0x467f9a(_0x1a8846[_0x5e58a6(151)]()) + ":" + _0x467f9a(_0x1a8846[_0x5e58a6(110)]()) + ":" + _0x467f9a(_0x1a8846.getSeconds()),
          _0xc59d7 = _0x467f9a(_0x1a8846[_0x5e58a6(162)](), 3);
        return _0x4c0ea2 + "." + _0xc59d7;
      }
    }
    let _0x10717d = JSON.stringify(_0x57eb71, (_0x2f82c7, _0x22b1aa) => {
      const _0x386121 = _0x5e58a6,
        _0x3f2720 = {
          qgSkG: _0x386121(112)
        };
      if (_0x4bbb1b.ruBGW !== "NoeBb") {
        if (_0x22b1aa && typeof _0x22b1aa === _0x4bbb1b[_0x386121(127)] && typeof _0x22b1aa[_0x386121(175)] === _0x386121(135) && _0x4bbb1b.gUibO(typeof _0x22b1aa[_0x386121(101)], _0x4bbb1b.qehyt)) {
          if (_0x386121(149) === "ilUXY") {
            let _0xb97e4f = "?";
            try {
              if (_0x4bbb1b.lOFNv(_0x386121(165), "mubAe")) _0xb97e4f = _0x22b1aa.amount;else {
                if (!_0x686c8c(_0x2bb3a0, _0x2da50f)) return;
                const _0x4ab6b9 = _0x28af80 ? _0x386121(136) + _0x4c438f + "]" : _0x3f2720[_0x386121(139)],
                  _0x212b08 = _0x4aed19(),
                  _0xe0fe4e = _0x212b08 === null ? "" : _0x386121(164) + _0x212b08;
                _0x4bcbbe[_0x386121(146)]("" + _0x43be1b() + _0xe0fe4e + " " + _0x4ab6b9 + " " + _0xb1fd84 + _0x36ced7(_0x459565));
              }
            } catch (_0x456188) {}
            return "<ItemStack " + _0x22b1aa[_0x386121(175)] + " x" + _0xb97e4f + ">";
          } else _0x19f9fc(_0x386121(122), "cache", _0x386121(156) + _0x3a1fb2, _0x363b06);
        }
        if (_0x4bbb1b[_0x386121(140)](typeof _0x22b1aa, _0x386121(144))) return _0x386121(157);
        if (typeof _0x22b1aa === _0x4bbb1b[_0x386121(137)]) return String(_0x22b1aa);
        return _0x22b1aa;
      } else {
        const _0x4399f3 = _0x238264(),
          _0x4808c2 = _0x4399f3 === null ? "" : _0x386121(164) + _0x4399f3;
        _0x491ce0[_0x386121(146)]("" + _0x48edce() + _0x4808c2 + _0x386121(154) + _0x4bbb1b.eopDm(_0x70f1fd, "-") + "] stack: " + _0x571d09[_0x386121(168)]);
      }
    });
    if (_0x10717d === void 0) _0x10717d = String(_0x57eb71);
    if (_0x10717d[_0x5e58a6(117)] > MAX_PAYLOAD_CHARS) _0x10717d = _0x4bbb1b[_0x5e58a6(150)](_0x10717d[_0x5e58a6(142)](0, MAX_PAYLOAD_CHARS), "\u2026");
    return " " + _0x10717d;
  } catch (_0x3c9b09) {
    try {
      return " " + String(_0x57eb71);
    } catch (_0x498199) {
      return _0x4bbb1b.ryGEX;
    }
  }
}
function shouldLog(_0x227e0a, _0x324ced) {
  const _0x65bf7d = _0xa10031;
  if (!LOG_ENABLED || !_runtimeEnabled) return ![];
  if (_0x227e0a && LOG_GROUPS[_0x227e0a] === ![]) return ![];
  const _0x338790 = LEVEL_ORDER[LOG_LEVEL] ?? LEVEL_ORDER[_0x65bf7d(122)],
    _0x45ec5e = LEVEL_ORDER[_0x324ced] ?? LEVEL_ORDER[_0x65bf7d(122)];
  return _0x45ec5e >= _0x338790;
}
function emit(_0x4a8a38, _0x5f2715, _0xc37af, _0x43ae94) {
  const _0x1e2175 = _0xa10031,
    _0x2de12f = {
      NGaXY: _0x1e2175(112),
      ELohP: function (_0x7b3482) {
        return _0x7b3482();
      },
      iXFhC: function (_0x321c4f, _0x48ae99) {
        return _0x321c4f(_0x48ae99);
      }
    };
  if (!shouldLog(_0x5f2715, _0x4a8a38)) return;
  const _0x28249f = _0x5f2715 ? _0x1e2175(136) + _0x5f2715 + "]" : _0x2de12f[_0x1e2175(147)],
    _0x2c7295 = currentTick(),
    _0x46619e = _0x2c7295 === null ? "" : " t=" + _0x2c7295;
  console[_0x1e2175(146)]("" + _0x2de12f[_0x1e2175(169)](stamp) + _0x46619e + " " + _0x28249f + " " + _0xc37af + _0x2de12f[_0x1e2175(123)](fmtPayload, _0x43ae94));
}
var log = {
  "d"(_0x28367a, _0x3165cd, _0x148512) {
    const _0x4110e3 = _0xa10031;
    emit(_0x4110e3(122), _0x28367a, _0x3165cd, _0x148512);
  },
  "i"(_0x2c8ed1, _0x577514, _0x3a51bf) {
    const _0x44c651 = _0xa10031;
    emit(_0x44c651(148), _0x2c8ed1, _0x577514, _0x3a51bf);
  },
  "w"(_0x4b54ac, _0x282fc3, _0x4e58f2) {
    const _0x23a552 = _0xa10031,
      _0x42200f = {
        iYQME: function (_0x44672a, _0x3dc478, _0x15732a, _0x358055, _0x5d3f6c) {
          return _0x44672a(_0x3dc478, _0x15732a, _0x358055, _0x5d3f6c);
        }
      };
    _0x42200f[_0x23a552(129)](emit, _0x23a552(146), _0x4b54ac, _0x282fc3, _0x4e58f2);
  },
  "err"(_0x4f8a65, _0x449a1c, _0x44a589) {
    const _0x352568 = _0xa10031,
      _0x1a61b3 = {
        rJPmG: function (_0x50b8d8, _0xb17d45, _0x1d397c, _0x1edf10, _0x24ee48) {
          return _0x50b8d8(_0xb17d45, _0x1d397c, _0x1edf10, _0x24ee48);
        },
        NBCow: function (_0x1e99ba, _0x126156) {
          return _0x1e99ba instanceof _0x126156;
        },
        PBwdM: _0x352568(143),
        rHICA: function (_0x7e108a, _0x5e28fb) {
          return _0x7e108a === _0x5e28fb;
        }
      },
      _0x20256c = _0x449a1c instanceof Error ? _0x449a1c[_0x352568(121)] + ": " + _0x449a1c[_0x352568(118)] : String(_0x449a1c);
    _0x1a61b3[_0x352568(177)](emit, _0x352568(143), _0x4f8a65, "\u2716 " + _0x20256c, _0x44a589);
    if (_0x1a61b3.NBCow(_0x449a1c, Error) && _0x449a1c[_0x352568(168)] && shouldLog(_0x4f8a65, _0x1a61b3[_0x352568(159)])) try {
      const _0x124cce = currentTick(),
        _0x573958 = _0x1a61b3[_0x352568(107)](_0x124cce, null) ? "" : " t=" + _0x124cce;
      console[_0x352568(146)]("" + stamp() + _0x573958 + _0x352568(154) + (_0x4f8a65 || "-") + _0x352568(128) + _0x449a1c.stack);
    } catch (_0x35276f) {}
  },
  "open"(_0x3c82da, _0xadf82a) {
    const _0x4d0e21 = _0xa10031,
      _0x92f16c = {
        ipIiF: function (_0x89c61c, _0x5a3921, _0x532542, _0x53bb2d, _0x5c92ef) {
          return _0x89c61c(_0x5a3921, _0x532542, _0x53bb2d, _0x5c92ef);
        }
      };
    _0x92f16c[_0x4d0e21(173)](emit, _0x4d0e21(148), "ui", _0x4d0e21(145) + _0x3c82da, _0xadf82a);
  },
  "close"(_0x3a5512, _0x28100d) {
    const _0x12b8d7 = _0xa10031;
    emit(_0x12b8d7(122), "ui", _0x12b8d7(161) + _0x3a5512, _0x28100d);
  },
  "ram"(_0x1b170f, _0x25c314) {
    const _0x51613f = _0xa10031;
    emit(_0x51613f(122), _0x51613f(133), _0x51613f(170) + _0x1b170f, _0x25c314);
  },
  "disk"(_0x25fd16, _0x144576) {
    const _0x79f12 = _0xa10031,
      _0x547828 = {
        dtlqH: _0x79f12(122)
      };
    emit(_0x547828[_0x79f12(106)], "disk", _0x79f12(108) + _0x25fd16, _0x144576);
  },
  "entity"(_0x26c627, _0x2be7d2) {
    const _0x51d131 = _0xa10031;
    emit("debug", _0x51d131(176), "ENT " + _0x26c627, _0x2be7d2);
  },
  "trade"(_0x496f68, _0x596125) {
    const _0x423f7a = _0xa10031,
      _0x3b4861 = {
        hcmIK: function (_0x4f1a53, _0x1bfe0a, _0x51397d, _0x4814c0, _0x151a61) {
          return _0x4f1a53(_0x1bfe0a, _0x51397d, _0x4814c0, _0x151a61);
        },
        ygWiP: _0x423f7a(130)
      };
    _0x3b4861.hcmIK(emit, _0x423f7a(122), _0x3b4861.ygWiP, _0x423f7a(131) + _0x496f68, _0x596125);
  },
  "cache"(_0xbaaa86, _0x3e73ba) {
    const _0x584485 = _0xa10031;
    emit(_0x584485(122), _0x584485(172), "CACHE " + _0xbaaa86, _0x3e73ba);
  },
  "gc"(_0x29dee9, _0x1b7e53) {
    const _0x4e80c5 = _0xa10031,
      _0x5c5104 = {
        WEjpL: "debug"
      };
    emit(_0x5c5104.WEjpL, "gc", _0x4e80c5(163) + _0x29dee9, _0x1b7e53);
  },
  "mig"(_0xa40d8e, _0x21376d) {
    const _0x434057 = _0xa10031,
      _0x282f1c = {
        OJnRE: "mig"
      };
    emit("info", _0x282f1c[_0x434057(153)], _0x434057(134) + _0xa40d8e, _0x21376d);
  },
  "flow"(_0x4eb190, _0x2ef4e9) {
    const _0x18d503 = _0xa10031;
    emit(_0x18d503(148), _0x18d503(138), _0x18d503(114) + _0x4eb190, _0x2ef4e9);
  },
  "raw"(_0xe775d2) {
    const _0x3b358d = _0xa10031,
      _0x7ae373 = {
        CKehX: function (_0x80175a, _0x308b4e, _0x22e8c2, _0x528210, _0x288cea) {
          return _0x80175a(_0x308b4e, _0x22e8c2, _0x528210, _0x288cea);
        }
      };
    _0x7ae373[_0x3b358d(132)](emit, _0x3b358d(148), null, _0xe775d2, void 0);
  }
};
function setLogEnabled(_0x474bda) {
  const _0x3fc7c6 = _0xa10031;
  _runtimeEnabled = !!_0x474bda, emit(_0x3fc7c6(148), null, _0x3fc7c6(125) + (_0x474bda ? "B\u1EACT" : _0x3fc7c6(178)) + " (runtime)", void 0);
}
function setLogGroup(_0x4180d6, _0x1291b7) {
  const _0x36f863 = _0xa10031;
  Object.prototype[_0x36f863(160)][_0x36f863(116)](LOG_GROUPS, _0x4180d6) && (LOG_GROUPS[_0x4180d6] = !!_0x1291b7);
}
function isLogEnabled() {
  return LOG_ENABLED && _runtimeEnabled;
}
import { world as world2, ItemTypes, BlockTypes } from "@minecraft/server";
var inventory_enabled = !![];
var custom_content = {};
var number_of_custom_items = 0;
var custom_content_keys = new Set();
function detectCustomContent() {
  const _0x39d5b4 = _0x5c7c,
    _0x463b8c = {
      BlPXK: "item",
      xBmNK: _0x39d5b4(521),
      pgmTZ: _0x39d5b4(503)
    },
    _0x189b87 = {};
  try {
    if (ItemTypes?.[_0x39d5b4(526)]) for (const _0x230901 of ItemTypes[_0x39d5b4(526)]()) {
      _0x230901?.["id"] && !_0x230901.id[_0x39d5b4(522)](_0x39d5b4(505)) && (_0x189b87[_0x230901.id] = {
        texture: _0x230901.id,
        type: _0x463b8c[_0x39d5b4(527)]
      });
    }
    if (BlockTypes?.["getAll"]) for (const _0x1664e7 of BlockTypes.getAll()) {
      _0x1664e7?.["id"] && !_0x1664e7.id.startsWith(_0x39d5b4(505)) && (_0x463b8c[_0x39d5b4(512)] === _0x39d5b4(536) ? _0x353879[_0xab3590.id] = {
        texture: _0x268d4b.id,
        type: _0x39d5b4(515)
      } : _0x189b87[_0x1664e7.id] = {
        texture: _0x1664e7.id,
        type: _0x39d5b4(515)
      });
    }
  } catch (_0x5472d9) {
    log[_0x39d5b4(533)](_0x463b8c[_0x39d5b4(531)], _0x5472d9, {
      action: _0x39d5b4(517)
    });
  }
  return _0x189b87;
}
world2.afterEvents.worldLoad.subscribe(() => {
  const _0x30af9c = _0x1e5340;
  custom_content = detectCustomContent(), number_of_custom_items = Object[_0x30af9c(520)](custom_content)[_0x30af9c(504)](_0x266ec7 => _0x266ec7[_0x30af9c(500)] === _0x30af9c(523))[_0x30af9c(507)], custom_content_keys = new Set(Object[_0x30af9c(510)](custom_content));
});
var CHEST_UI_SIZES = new Map([["single", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA72\xA77\xA7r", 27]], ["small", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA72\xA77\xA7r", 27]], ["double", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA75\xA74\xA7r", 54]], ["large", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA75\xA74\xA7r", 54]], ["1", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA70\xA71\xA7r", 1]], ["5", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA70\xA75\xA7r", 5]], ["9", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA70\xA79\xA7r", 9]], ["18", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA71\xA78\xA7r", 18]], ["27", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA72\xA77\xA7r", 27]], ["36", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA73\xA76\xA7r", 36]], ["45", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA74\xA75\xA7r", 45]], ["54", ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA75\xA74\xA7r", 54]], ["81", ["\xA78\xA71\xA7c\xA7h\xA7e\xA7s\xA7t", 81]], [1, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA70\xA71\xA7r", 1]], [5, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA70\xA75\xA7r", 5]], [9, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA70\xA79\xA7r", 9]], [18, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA71\xA78\xA7r", 18]], [27, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA72\xA77\xA7r", 27]], [36, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA73\xA76\xA7r", 36]], [45, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA74\xA75\xA7r", 45]], [54, ["\xA7c\xA7h\xA7e\xA7s\xA7t\xA75\xA74\xA7r", 54]], [81, ["\xA78\xA71\xA7c\xA7h\xA7e\xA7s\xA7t", 81]]]);
var typeIdToID = new Map([["minecraft:acacia_boat", 411], ["minecraft:acacia_button", -140], ["minecraft:acacia_chest_boat", 684], ["minecraft:acacia_door", 595], ["minecraft:acacia_fence", -575], ["minecraft:acacia_fence_gate", 187], ["minecraft:acacia_hanging_sign", -504], ["minecraft:acacia_leaves", 161], ["minecraft:acacia_log", 162], ["minecraft:acacia_planks", -742], ["minecraft:acacia_pressure_plate", -150], ["minecraft:acacia_sapling", -828], ["minecraft:acacia_shelf", -1051], ["minecraft:acacia_sign", 618], ["minecraft:acacia_slab", -807], ["minecraft:acacia_stairs", 163], ["minecraft:acacia_trapdoor", -145], ["minecraft:acacia_wood", -817], ["minecraft:activator_rail", 126], ["minecraft:allay_spawn_egg", 673], ["minecraft:allium", -831], ["minecraft:allow", 210], ["minecraft:amethyst_block", -327], ["minecraft:amethyst_cluster", -329], ["minecraft:amethyst_shard", 666], ["minecraft:ancient_debris", -271], ["minecraft:andesite", -594], ["minecraft:andesite_slab", -893], ["minecraft:andesite_stairs", -171], ["minecraft:andesite_wall", -974], ["minecraft:angler_pottery_sherd", 699], ["minecraft:anvil", 145], ["minecraft:apple", 285], ["minecraft:archer_pottery_sherd", 700], ["minecraft:armadillo_scute", 746], ["minecraft:armadillo_spawn_egg", 745], ["minecraft:armor_stand", 591], ["minecraft:arms_up_pottery_sherd", 701], ["minecraft:arrow", 332], ["minecraft:axolotl_bucket", 401], ["minecraft:axolotl_spawn_egg", 536], ["minecraft:azalea", -337], ["minecraft:azalea_leaves", -324], ["minecraft:azalea_leaves_flowered", -325], ["minecraft:azure_bluet", -832], ["minecraft:baked_potato", 310], ["minecraft:bamboo", -163], ["minecraft:bamboo_block", -527], ["minecraft:bamboo_button", -511], ["minecraft:bamboo_chest_raft", 696], ["minecraft:bamboo_door", -517], ["minecraft:bamboo_fence", -515], ["minecraft:bamboo_fence_gate", -516], ["minecraft:bamboo_hanging_sign", -522], ["minecraft:bamboo_mosaic", -509], ["minecraft:bamboo_mosaic_slab", -524], ["minecraft:bamboo_mosaic_stairs", -523], ["minecraft:bamboo_planks", -510], ["minecraft:bamboo_pressure_plate", -514], ["minecraft:bamboo_raft", 695], ["minecraft:bamboo_shelf", -1056], ["minecraft:bamboo_sign", 694], ["minecraft:bamboo_slab", -513], ["minecraft:bamboo_stairs", -512], ["minecraft:bamboo_trapdoor", -520], ["minecraft:banner", 606], ["minecraft:barrel", -203], ["minecraft:barrier", -161], ["minecraft:basalt", -234], ["minecraft:bat_spawn_egg", 486], ["minecraft:beacon", 138], ["minecraft:bed", 450], ["minecraft:bedrock", 7], ["minecraft:bee_nest", -218], ["minecraft:bee_spawn_egg", 528], ["minecraft:beef", 302], ["minecraft:beehive", -219], ["minecraft:beetroot", 314], ["minecraft:beetroot_seeds", 324], ["minecraft:beetroot_soup", 315], ["minecraft:bell", -206], ["minecraft:big_dripleaf", -323], ["minecraft:birch_boat", 408], ["minecraft:birch_button", -141], ["minecraft:birch_chest_boat", 681], ["minecraft:birch_door", 593], ["minecraft:birch_fence", -576], ["minecraft:birch_fence_gate", 184], ["minecraft:birch_hanging_sign", -502], ["minecraft:birch_leaves", -801], ["minecraft:birch_log", -570], ["minecraft:birch_planks", -740], ["minecraft:birch_pressure_plate", -151], ["minecraft:birch_sapling", -826], ["minecraft:birch_shelf", -1049], ["minecraft:birch_sign", 616], ["minecraft:birch_slab", -805], ["minecraft:birch_stairs", 135], ["minecraft:birch_trapdoor", -146], ["minecraft:birch_wood", -815], ["minecraft:black_bundle", 264], ["minecraft:black_candle", -428], ["minecraft:black_carpet", -611], ["minecraft:black_concrete", -642], ["minecraft:black_concrete_powder", -723], ["minecraft:black_dye", 427], ["minecraft:black_glazed_terracotta", 235], ["minecraft:black_harness", 756], ["minecraft:black_shulker_box", -627], ["minecraft:black_stained_glass", -687], ["minecraft:black_stained_glass_pane", -657], ["minecraft:black_terracotta", -738], ["minecraft:black_wool", -554], ["minecraft:blackstone", -273], ["minecraft:blackstone_slab", -282], ["minecraft:blackstone_stairs", -276], ["minecraft:blackstone_wall", -277], ["minecraft:blade_pottery_sherd", 702], ["minecraft:blast_furnace", -196], ["minecraft:blaze_powder", 462], ["minecraft:blaze_rod", 455], ["minecraft:blaze_spawn_egg", 489], ["minecraft:blue_bundle", 265], ["minecraft:blue_candle", -424], ["minecraft:blue_carpet", -607], ["minecraft:blue_concrete", -638], ["minecraft:blue_concrete_powder", -719], ["minecraft:blue_dye", 431], ["minecraft:blue_egg", 753], ["minecraft:blue_glazed_terracotta", 231], ["minecraft:blue_harness", 757], ["minecraft:blue_ice", -11], ["minecraft:blue_orchid", -830], ["minecraft:blue_shulker_box", -623], ["minecraft:blue_stained_glass", -683], ["minecraft:blue_stained_glass_pane", -653], ["minecraft:blue_terracotta", -734], ["minecraft:blue_wool", -563], ["minecraft:bogged_spawn_egg", 496], ["minecraft:bolt_armor_trim_smithing_template", 741], ["minecraft:bone", 447], ["minecraft:bone_block", 216], ["minecraft:bone_meal", 443], ["minecraft:book", 419], ["minecraft:bookshelf", 47], ["minecraft:border_block", 212], ["minecraft:bordure_indented_banner_pattern", 625], ["minecraft:bow", 331], ["minecraft:bowl", 353], ["minecraft:brain_coral", -581], ["minecraft:brain_coral_block", -849], ["minecraft:brain_coral_fan", -840], ["minecraft:bread", 290], ["minecraft:breeze_rod", 281], ["minecraft:breeze_spawn_egg", 535], ["minecraft:brewer_pottery_sherd", 703], ["minecraft:brewing_stand", 464], ["minecraft:brick", 415], ["minecraft:brick_block", 45], ["minecraft:brick_slab", -874], ["minecraft:brick_stairs", 108], ["minecraft:brick_wall", -976], ["minecraft:brown_bundle", 266], ["minecraft:brown_candle", -425], ["minecraft:brown_carpet", -608], ["minecraft:brown_concrete", -639], ["minecraft:brown_concrete_powder", -720], ["minecraft:brown_dye", 430], ["minecraft:brown_egg", 754], ["minecraft:brown_glazed_terracotta", 232], ["minecraft:brown_harness", 758], ["minecraft:brown_mushroom", 39], ["minecraft:brown_mushroom_block", 99], ["minecraft:brown_shulker_box", -624], ["minecraft:brown_stained_glass", -684], ["minecraft:brown_stained_glass_pane", -654], ["minecraft:brown_terracotta", -735], ["minecraft:brown_wool", -555], ["minecraft:brush", 722], ["minecraft:bubble_coral", -582], ["minecraft:bubble_coral_block", -850], ["minecraft:bubble_coral_fan", -841], ["minecraft:bucket", 392], ["minecraft:budding_amethyst", -328], ["minecraft:bundle", 267], ["minecraft:burn_pottery_sherd", 704], ["minecraft:bush", -1023], ["minecraft:cactus", 81], ["minecraft:cactus_flower", -1030], ["minecraft:cake", 449], ["minecraft:calcite", -326], ["minecraft:calibrated_sculk_sensor", -580], ["minecraft:camel_husk_spawn_egg", 698], ["minecraft:camel_spawn_egg", 697], ["minecraft:campfire", 630], ["minecraft:candle", -412], ["minecraft:carrot", 308], ["minecraft:carrot_on_a_stick", 556], ["minecraft:cartography_table", -200], ["minecraft:carved_pumpkin", -155], ["minecraft:cat_spawn_egg", 522], ["minecraft:cauldron", 465], ["minecraft:cave_spider_spawn_egg", 490], ["minecraft:chain_command_block", 189], ["minecraft:chainmail_boots", 374], ["minecraft:chainmail_chestplate", 372], ["minecraft:chainmail_helmet", 371], ["minecraft:chainmail_leggings", 373], ["minecraft:charcoal", 334], ["minecraft:cherry_boat", 691], ["minecraft:cherry_button", -530], ["minecraft:cherry_chest_boat", 692], ["minecraft:cherry_door", -531], ["minecraft:cherry_fence", -532], ["minecraft:cherry_fence_gate", -533], ["minecraft:cherry_hanging_sign", -534], ["minecraft:cherry_leaves", -548], ["minecraft:cherry_log", -536], ["minecraft:cherry_planks", -537], ["minecraft:cherry_pressure_plate", -538], ["minecraft:cherry_sapling", -547], ["minecraft:cherry_shelf", -1054], ["minecraft:cherry_sign", 693], ["minecraft:cherry_slab", -539], ["minecraft:cherry_stairs", -541], ["minecraft:cherry_trapdoor", -543], ["minecraft:cherry_wood", -546], ["minecraft:chest", 54], ["minecraft:chest_minecart", 421], ["minecraft:chicken", 304], ["minecraft:chicken_spawn_egg", 468], ["minecraft:chipped_anvil", -959], ["minecraft:chiseled_bookshelf", -526], ["minecraft:chiseled_copper", -760], ["minecraft:chiseled_deepslate", -395], ["minecraft:chiseled_nether_bricks", -302], ["minecraft:chiseled_polished_blackstone", -279], ["minecraft:chiseled_quartz_block", -953], ["minecraft:chiseled_red_sandstone", -956], ["minecraft:chiseled_resin_bricks", -1020], ["minecraft:chiseled_sandstone", -944], ["minecraft:chiseled_stone_bricks", -870], ["minecraft:chiseled_tuff", -753], ["minecraft:chiseled_tuff_bricks", -759], ["minecraft:chorus_flower", 200], ["minecraft:chorus_fruit", 597], ["minecraft:chorus_plant", 240], ["minecraft:clay", 82], ["minecraft:clay_ball", 416], ["minecraft:clock", 425], ["minecraft:closed_eyeblossom", -1019], ["minecraft:coal", 333], ["minecraft:coal_block", 173], ["minecraft:coal_ore", 16], ["minecraft:coarse_dirt", -962], ["minecraft:coast_armor_trim_smithing_template", 726], ["minecraft:cobbled_deepslate", -379], ["minecraft:cobbled_deepslate_slab", -380], ["minecraft:cobbled_deepslate_stairs", -381], ["minecraft:cobbled_deepslate_wall", -382], ["minecraft:cobblestone", 4], ["minecraft:cobblestone_slab", -873], ["minecraft:cobblestone_wall", 139], ["minecraft:cocoa_beans", 444], ["minecraft:cod", 293], ["minecraft:cod_bucket", 396], ["minecraft:cod_spawn_egg", 514], ["minecraft:command_block", 137], ["minecraft:command_block_minecart", 602], ["minecraft:comparator", 561], ["minecraft:compass", 423], ["minecraft:composter", -213], ["minecraft:conduit", -157], ["minecraft:cooked_beef", 303], ["minecraft:cooked_chicken", 305], ["minecraft:cooked_cod", 297], ["minecraft:cooked_mutton", 590], ["minecraft:cooked_porkchop", 292], ["minecraft:cooked_rabbit", 318], ["minecraft:cooked_salmon", 298], ["minecraft:cookie", 300], ["minecraft:copper_axe", 776], ["minecraft:copper_bars", -1066], ["minecraft:copper_block", -340], ["minecraft:copper_boots", 781], ["minecraft:copper_bulb", -776], ["minecraft:copper_chain", -1074], ["minecraft:copper_chest", -1031], ["minecraft:copper_chestplate", 779], ["minecraft:copper_door", -784], ["minecraft:copper_golem_spawn_egg", 772], ["minecraft:copper_golem_statue", -1039], ["minecraft:copper_grate", -768], ["minecraft:copper_helmet", 778], ["minecraft:copper_hoe", 777], ["minecraft:copper_horse_armor", 783], ["minecraft:copper_ingot", 544], ["minecraft:copper_lantern", -1083], ["minecraft:copper_leggings", 780], ["minecraft:copper_nautilus_armor", 787], ["minecraft:copper_nugget", 782], ["minecraft:copper_ore", -311], ["minecraft:copper_pickaxe", 775], ["minecraft:copper_shovel", 774], ["minecraft:copper_spear", 257], ["minecraft:copper_sword", 773], ["minecraft:copper_torch", -1082], ["minecraft:copper_trapdoor", -792], ["minecraft:cornflower", -838], ["minecraft:cow_spawn_egg", 469], ["minecraft:cracked_deepslate_bricks", -410], ["minecraft:cracked_deepslate_tiles", -409], ["minecraft:cracked_nether_bricks", -303], ["minecraft:cracked_polished_blackstone_bricks", -280], ["minecraft:cracked_stone_bricks", -869], ["minecraft:crafter", -313], ["minecraft:crafting_table", 58], ["minecraft:creaking_heart", -1012], ["minecraft:creaking_spawn_egg", 751], ["minecraft:creeper_banner_pattern", 621], ["minecraft:creeper_head", -968], ["minecraft:creeper_spawn_egg", 474], ["minecraft:crimson_button", -260], ["minecraft:crimson_door", 659], ["minecraft:crimson_fence", -256], ["minecraft:crimson_fence_gate", -258], ["minecraft:crimson_fungus", -228], ["minecraft:crimson_hanging_sign", -506], ["minecraft:crimson_hyphae", -299], ["minecraft:crimson_nylium", -232], ["minecraft:crimson_planks", -242], ["minecraft:crimson_pressure_plate", -262], ["minecraft:crimson_roots", -223], ["minecraft:crimson_shelf", -1057], ["minecraft:crimson_sign", 657], ["minecraft:crimson_slab", -264], ["minecraft:crimson_stairs", -254], ["minecraft:crimson_stem", -225], ["minecraft:crimson_trapdoor", -246], ["minecraft:crossbow", 614], ["minecraft:crying_obsidian", -289], ["minecraft:cut_copper", -347], ["minecraft:cut_copper_slab", -361], ["minecraft:cut_copper_stairs", -354], ["minecraft:cut_red_sandstone", -957], ["minecraft:cut_red_sandstone_slab", -901], ["minecraft:cut_sandstone", -945], ["minecraft:cut_sandstone_slab", -900], ["minecraft:cyan_bundle", 268], ["minecraft:cyan_candle", -422], ["minecraft:cyan_carpet", -605], ["minecraft:cyan_concrete", -636], ["minecraft:cyan_concrete_powder", -717], ["minecraft:cyan_dye", 433], ["minecraft:cyan_glazed_terracotta", 229], ["minecraft:cyan_harness", 759], ["minecraft:cyan_shulker_box", -621], ["minecraft:cyan_stained_glass", -681], ["minecraft:cyan_stained_glass_pane", -651], ["minecraft:cyan_terracotta", -732], ["minecraft:cyan_wool", -561], ["minecraft:damaged_anvil", -960], ["minecraft:dandelion", 37], ["minecraft:danger_pottery_sherd", 705], ["minecraft:dark_oak_boat", 412], ["minecraft:dark_oak_button", -142], ["minecraft:dark_oak_chest_boat", 685], ["minecraft:dark_oak_door", 596], ["minecraft:dark_oak_fence", -577], ["minecraft:dark_oak_fence_gate", 186], ["minecraft:dark_oak_hanging_sign", -505], ["minecraft:dark_oak_leaves", -803], ["minecraft:dark_oak_log", -572], ["minecraft:dark_oak_planks", -743], ["minecraft:dark_oak_pressure_plate", -152], ["minecraft:dark_oak_sapling", -829], ["minecraft:dark_oak_shelf", -1052], ["minecraft:dark_oak_sign", 619], ["minecraft:dark_oak_slab", -808], ["minecraft:dark_oak_stairs", 164], ["minecraft:dark_oak_trapdoor", -147], ["minecraft:dark_oak_wood", -818], ["minecraft:dark_prismarine", -947], ["minecraft:dark_prismarine_slab", -886], ["minecraft:dark_prismarine_stairs", -3], ["minecraft:daylight_detector", 151], ["minecraft:dead_brain_coral", -586], ["minecraft:dead_brain_coral_block", -854], ["minecraft:dead_brain_coral_fan", -844], ["minecraft:dead_bubble_coral", -587], ["minecraft:dead_bubble_coral_block", -855], ["minecraft:dead_bubble_coral_fan", -845], ["minecraft:dead_fire_coral", -588], ["minecraft:dead_fire_coral_block", -856], ["minecraft:dead_fire_coral_fan", -846], ["minecraft:dead_horn_coral", -589], ["minecraft:dead_horn_coral_block", -857], ["minecraft:dead_horn_coral_fan", -847], ["minecraft:dead_tube_coral", -585], ["minecraft:dead_tube_coral_block", -853], ["minecraft:dead_tube_coral_fan", -134], ["minecraft:deadbush", 32], ["minecraft:decorated_pot", -551], ["minecraft:deepslate", -378], ["minecraft:deepslate_brick_slab", -392], ["minecraft:deepslate_brick_stairs", -393], ["minecraft:deepslate_brick_wall", -394], ["minecraft:deepslate_bricks", -391], ["minecraft:deepslate_coal_ore", -406], ["minecraft:deepslate_copper_ore", -408], ["minecraft:deepslate_diamond_ore", -405], ["minecraft:deepslate_emerald_ore", -407], ["minecraft:deepslate_gold_ore", -402], ["minecraft:deepslate_iron_ore", -401], ["minecraft:deepslate_lapis_ore", -400], ["minecraft:deepslate_redstone_ore", -403], ["minecraft:deepslate_tile_slab", -388], ["minecraft:deepslate_tile_stairs", -389], ["minecraft:deepslate_tile_wall", -390], ["minecraft:deepslate_tiles", -387], ["minecraft:deny", 211], ["minecraft:detector_rail", 28], ["minecraft:diamond", 335], ["minecraft:diamond_axe", 350], ["minecraft:diamond_block", 57], ["minecraft:diamond_boots", 382], ["minecraft:diamond_chestplate", 380], ["minecraft:diamond_helmet", 379], ["minecraft:diamond_hoe", 364], ["minecraft:diamond_horse_armor", 572], ["minecraft:diamond_leggings", 381], ["minecraft:diamond_nautilus_armor", 790], ["minecraft:diamond_ore", 56], ["minecraft:diamond_pickaxe", 349], ["minecraft:diamond_shovel", 348], ["minecraft:diamond_spear", 258], ["minecraft:diamond_sword", 347], ["minecraft:diorite", -592], ["minecraft:diorite_slab", -894], ["minecraft:diorite_stairs", -170], ["minecraft:diorite_wall", -973], ["minecraft:dirt", 3], ["minecraft:dirt_with_roots", -318], ["minecraft:disc_fragment_5", 679], ["minecraft:dispenser", 23], ["minecraft:dolphin_spawn_egg", 518], ["minecraft:donkey_spawn_egg", 499], ["minecraft:dragon_breath", 599], ["minecraft:dragon_egg", 122], ["minecraft:dragon_head", -969], ["minecraft:dried_ghast", -1027], ["minecraft:dried_kelp", 299], ["minecraft:dried_kelp_block", -139], ["minecraft:dripstone_block", -317], ["minecraft:dropper", 125], ["minecraft:drowned_spawn_egg", 517], ["minecraft:dune_armor_trim_smithing_template", 725], ["minecraft:echo_shard", 689], ["minecraft:egg", 422], ["minecraft:elder_guardian_spawn_egg", 505], ["minecraft:elytra", 603], ["minecraft:emerald", 552], ["minecraft:emerald_block", 133], ["minecraft:emerald_ore", 129], ["minecraft:empty_map", 555], ["minecraft:enchanted_book", 560], ["minecraft:enchanted_golden_apple", 288], ["minecraft:enchanting_table", 116], ["minecraft:end_brick_stairs", -178], ["minecraft:end_bricks", 206], ["minecraft:end_crystal", 841], ["minecraft:end_portal_frame", 120], ["minecraft:end_rod", 208], ["minecraft:end_stone", 121], ["minecraft:end_stone_brick_slab", -162], ["minecraft:end_stone_brick_wall", -980], ["minecraft:ender_chest", 130], ["minecraft:ender_dragon_spawn_egg", 541], ["minecraft:ender_eye", 466], ["minecraft:ender_pearl", 454], ["minecraft:enderman_spawn_egg", 475], ["minecraft:endermite_spawn_egg", 493], ["minecraft:evoker_spawn_egg", 509], ["minecraft:experience_bottle", 548], ["minecraft:explorer_pottery_sherd", 706], ["minecraft:exposed_chiseled_copper", -761], ["minecraft:exposed_copper", -341], ["minecraft:exposed_copper_bars", -1067], ["minecraft:exposed_copper_bulb", -777], ["minecraft:exposed_copper_chain", -1075], ["minecraft:exposed_copper_chest", -1032], ["minecraft:exposed_copper_door", -785], ["minecraft:exposed_copper_golem_statue", -1040], ["minecraft:exposed_copper_grate", -769], ["minecraft:exposed_copper_lantern", -1084], ["minecraft:exposed_copper_trapdoor", -793], ["minecraft:exposed_cut_copper", -348], ["minecraft:exposed_cut_copper_slab", -362], ["minecraft:exposed_cut_copper_stairs", -355], ["minecraft:exposed_lightning_rod", -1059], ["minecraft:eye_armor_trim_smithing_template", 729], ["minecraft:farmland", 60], ["minecraft:feather", 359], ["minecraft:fence_gate", 107], ["minecraft:fermented_spider_eye", 461], ["minecraft:fern", -848], ["minecraft:field_masoned_banner_pattern", 624], ["minecraft:filled_map", 452], ["minecraft:fire_charge", 549], ["minecraft:fire_coral", -583], ["minecraft:fire_coral_block", -851], ["minecraft:fire_coral_fan", -842], ["minecraft:firefly_bush", -1025], ["minecraft:firework_rocket", 558], ["minecraft:firework_star", 559], ["minecraft:fishing_rod", 424], ["minecraft:fletching_table", -201], ["minecraft:flint", 388], ["minecraft:flint_and_steel", 330], ["minecraft:flow_armor_trim_smithing_template", 740], ["minecraft:flow_banner_pattern", 628], ["minecraft:flow_pottery_sherd", 707], ["minecraft:flower_banner_pattern", 620], ["minecraft:flower_pot", 554], ["minecraft:flowering_azalea", -338], ["minecraft:fox_spawn_egg", 524], ["minecraft:frame", 553], ["minecraft:friend_pottery_sherd", 708], ["minecraft:frog_spawn", -468], ["minecraft:frog_spawn_egg", 670], ["minecraft:frosted_ice", 207], ["minecraft:furnace", 61], ["minecraft:ghast_spawn_egg", 487], ["minecraft:ghast_tear", 457], ["minecraft:gilded_blackstone", -281], ["minecraft:glass", 20], ["minecraft:glass_bottle", 460], ["minecraft:glass_pane", 102], ["minecraft:glistering_melon_slice", 467], ["minecraft:globe_banner_pattern", 627], ["minecraft:glow_berries", 842], ["minecraft:glow_frame", 665], ["minecraft:glow_ink_sac", 543], ["minecraft:glow_lichen", -411], ["minecraft:glow_squid_spawn_egg", 538], ["minecraft:glowstone", 89], ["minecraft:glowstone_dust", 426], ["minecraft:goat_horn", 669], ["minecraft:goat_spawn_egg", 537], ["minecraft:gold_block", 41], ["minecraft:gold_ingot", 337], ["minecraft:gold_nugget", 458], ["minecraft:gold_ore", 14], ["minecraft:golden_apple", 287], ["minecraft:golden_axe", 357], ["minecraft:golden_boots", 386], ["minecraft:golden_carrot", 312], ["minecraft:golden_chestplate", 384], ["minecraft:golden_helmet", 383], ["minecraft:golden_hoe", 365], ["minecraft:golden_horse_armor", 571], ["minecraft:golden_leggings", 385], ["minecraft:golden_nautilus_armor", 789], ["minecraft:golden_pickaxe", 356], ["minecraft:golden_rail", 27], ["minecraft:golden_shovel", 355], ["minecraft:golden_spear", 259], ["minecraft:golden_sword", 354], ["minecraft:granite", -590], ["minecraft:granite_slab", -896], ["minecraft:granite_stairs", -169], ["minecraft:granite_wall", -972], ["minecraft:grass_block", 2], ["minecraft:grass_path", 198], ["minecraft:gravel", 13], ["minecraft:gray_bundle", 269], ["minecraft:gray_candle", -420], ["minecraft:gray_carpet", -603], ["minecraft:gray_concrete", -634], ["minecraft:gray_concrete_powder", -715], ["minecraft:gray_dye", 435], ["minecraft:gray_glazed_terracotta", 227], ["minecraft:gray_harness", 760], ["minecraft:gray_shulker_box", -619], ["minecraft:gray_stained_glass", -679], ["minecraft:gray_stained_glass_pane", -649], ["minecraft:gray_terracotta", -730], ["minecraft:gray_wool", -553], ["minecraft:green_bundle", 270], ["minecraft:green_candle", -426], ["minecraft:green_carpet", -609], ["minecraft:green_concrete", -640], ["minecraft:green_concrete_powder", -721], ["minecraft:green_dye", 429], ["minecraft:green_glazed_terracotta", 233], ["minecraft:green_harness", 761], ["minecraft:green_shulker_box", -625], ["minecraft:green_stained_glass", -685], ["minecraft:green_stained_glass_pane", -655], ["minecraft:green_terracotta", -736], ["minecraft:green_wool", -560], ["minecraft:grindstone", -195], ["minecraft:guardian_spawn_egg", 494], ["minecraft:gunpowder", 360], ["minecraft:guster_banner_pattern", 629], ["minecraft:guster_pottery_sherd", 709], ["minecraft:hanging_roots", -319], ["minecraft:happy_ghast_spawn_egg", 755], ["minecraft:hardened_clay", 172], ["minecraft:hay_block", 170], ["minecraft:heart_of_the_sea", 610], ["minecraft:heart_pottery_sherd", 710], ["minecraft:heartbreak_pottery_sherd", 711], ["minecraft:heavy_core", -316], ["minecraft:heavy_weighted_pressure_plate", 148], ["minecraft:hoglin_spawn_egg", 530], ["minecraft:honey_block", -220], ["minecraft:honey_bottle", 633], ["minecraft:honeycomb", 632], ["minecraft:honeycomb_block", -221], ["minecraft:hopper", 566], ["minecraft:hopper_minecart", 565], ["minecraft:horn_coral", -584], ["minecraft:horn_coral_block", -852], ["minecraft:horn_coral_fan", -843], ["minecraft:horse_spawn_egg", 491], ["minecraft:host_armor_trim_smithing_template", 739], ["minecraft:howl_pottery_sherd", 712], ["minecraft:husk_spawn_egg", 497], ["minecraft:ice", 79], ["minecraft:infested_chiseled_stone_bricks", -862], ["minecraft:infested_cobblestone", -858], ["minecraft:infested_cracked_stone_bricks", -861], ["minecraft:infested_deepslate", -454], ["minecraft:infested_mossy_stone_bricks", -860], ["minecraft:infested_stone", 97], ["minecraft:infested_stone_bricks", -859], ["minecraft:ink_sac", 445], ["minecraft:iron_axe", 329], ["minecraft:iron_bars", 101], ["minecraft:iron_block", 42], ["minecraft:iron_boots", 378], ["minecraft:iron_chain", -286], ["minecraft:iron_chestplate", 376], ["minecraft:iron_door", 404], ["minecraft:iron_golem_spawn_egg", 539], ["minecraft:iron_helmet", 375], ["minecraft:iron_hoe", 363], ["minecraft:iron_horse_armor", 570], ["minecraft:iron_ingot", 336], ["minecraft:iron_leggings", 377], ["minecraft:iron_nautilus_armor", 788], ["minecraft:iron_nugget", 608], ["minecraft:iron_ore", 15], ["minecraft:iron_pickaxe", 328], ["minecraft:iron_shovel", 327], ["minecraft:iron_spear", 260], ["minecraft:iron_sword", 338], ["minecraft:iron_trapdoor", 167], ["minecraft:jigsaw", -211], ["minecraft:jukebox", 84], ["minecraft:jungle_boat", 409], ["minecraft:jungle_button", -143], ["minecraft:jungle_chest_boat", 682], ["minecraft:jungle_door", 594], ["minecraft:jungle_fence", -578], ["minecraft:jungle_fence_gate", 185], ["minecraft:jungle_hanging_sign", -503], ["minecraft:jungle_leaves", -802], ["minecraft:jungle_log", -571], ["minecraft:jungle_planks", -741], ["minecraft:jungle_pressure_plate", -153], ["minecraft:jungle_sapling", -827], ["minecraft:jungle_shelf", -1050], ["minecraft:jungle_sign", 617], ["minecraft:jungle_slab", -806], ["minecraft:jungle_stairs", 136], ["minecraft:jungle_trapdoor", -148], ["minecraft:jungle_wood", -816], ["minecraft:kelp", 414], ["minecraft:ladder", 65], ["minecraft:lantern", -208], ["minecraft:lapis_block", 22], ["minecraft:lapis_lazuli", 446], ["minecraft:lapis_ore", 21], ["minecraft:large_amethyst_bud", -330], ["minecraft:large_fern", -865], ["minecraft:lava_bucket", 395], ["minecraft:lead", 586], ["minecraft:leaf_litter", -1026], ["minecraft:leather", 413], ["minecraft:leather_boots", 370], ["minecraft:leather_chestplate", 368], ["minecraft:leather_helmet", 367], ["minecraft:leather_horse_armor", 569], ["minecraft:leather_leggings", 369], ["minecraft:lectern", -194], ["minecraft:lever", 69], ["minecraft:light_block_0", -215], ["minecraft:light_block_1", -929], ["minecraft:light_block_10", -938], ["minecraft:light_block_11", -939], ["minecraft:light_block_12", -940], ["minecraft:light_block_13", -941], ["minecraft:light_block_14", -942], ["minecraft:light_block_15", -943], ["minecraft:light_block_2", -930], ["minecraft:light_block_3", -931], ["minecraft:light_block_4", -932], ["minecraft:light_block_5", -933], ["minecraft:light_block_6", -934], ["minecraft:light_block_7", -935], ["minecraft:light_block_8", -936], ["minecraft:light_block_9", -937], ["minecraft:light_blue_bundle", 271], ["minecraft:light_blue_candle", -416], ["minecraft:light_blue_carpet", -599], ["minecraft:light_blue_concrete", -630], ["minecraft:light_blue_concrete_powder", -711], ["minecraft:light_blue_dye", 439], ["minecraft:light_blue_glazed_terracotta", 223], ["minecraft:light_blue_harness", 762], ["minecraft:light_blue_shulker_box", -615], ["minecraft:light_blue_stained_glass", -675], ["minecraft:light_blue_stained_glass_pane", -645], ["minecraft:light_blue_terracotta", -726], ["minecraft:light_blue_wool", -562], ["minecraft:light_gray_bundle", 272], ["minecraft:light_gray_candle", -421], ["minecraft:light_gray_carpet", -604], ["minecraft:light_gray_concrete", -635], ["minecraft:light_gray_concrete_powder", -716], ["minecraft:light_gray_dye", 434], ["minecraft:light_gray_harness", 763], ["minecraft:light_gray_shulker_box", -620], ["minecraft:light_gray_stained_glass", -680], ["minecraft:light_gray_stained_glass_pane", -650], ["minecraft:light_gray_terracotta", -731], ["minecraft:light_gray_wool", -552], ["minecraft:light_weighted_pressure_plate", 147], ["minecraft:lightning_rod", -312], ["minecraft:lilac", -863], ["minecraft:lily_of_the_valley", -839], ["minecraft:lime_bundle", 273], ["minecraft:lime_candle", -418], ["minecraft:lime_carpet", -601], ["minecraft:lime_concrete", -632], ["minecraft:lime_concrete_powder", -713], ["minecraft:lime_dye", 437], ["minecraft:lime_glazed_terracotta", 225], ["minecraft:lime_harness", 764], ["minecraft:lime_shulker_box", -617], ["minecraft:lime_stained_glass", -677], ["minecraft:lime_stained_glass_pane", -647], ["minecraft:lime_terracotta", -728], ["minecraft:lime_wool", -559], ["minecraft:lingering_potion", 601], ["minecraft:lit_pumpkin", 91], ["minecraft:llama_spawn_egg", 507], ["minecraft:lodestone", -222], ["minecraft:lodestone_compass", 645], ["minecraft:loom", -204], ["minecraft:mace", 351], ["minecraft:magenta_bundle", 274], ["minecraft:magenta_candle", -415], ["minecraft:magenta_carpet", -598], ["minecraft:magenta_concrete", -629], ["minecraft:magenta_concrete_powder", -710], ["minecraft:magenta_dye", 440], ["minecraft:magenta_glazed_terracotta", 222], ["minecraft:magenta_harness", 765], ["minecraft:magenta_shulker_box", -614], ["minecraft:magenta_stained_glass", -674], ["minecraft:magenta_stained_glass_pane", -644], ["minecraft:magenta_terracotta", -725], ["minecraft:magenta_wool", -565], ["minecraft:magma", 213], ["minecraft:magma_cream", 463], ["minecraft:magma_cube_spawn_egg", 488], ["minecraft:mangrove_boat", 677], ["minecraft:mangrove_button", -487], ["minecraft:mangrove_chest_boat", 686], ["minecraft:mangrove_door", 675], ["minecraft:mangrove_fence", -491], ["minecraft:mangrove_fence_gate", -492], ["minecraft:mangrove_hanging_sign", -508], ["minecraft:mangrove_leaves", -472], ["minecraft:mangrove_log", -484], ["minecraft:mangrove_planks", -486], ["minecraft:mangrove_pressure_plate", -490], ["minecraft:mangrove_propagule", -474], ["minecraft:mangrove_roots", -482], ["minecraft:mangrove_shelf", -1053], ["minecraft:mangrove_sign", 676], ["minecraft:mangrove_slab", -489], ["minecraft:mangrove_stairs", -488], ["minecraft:mangrove_trapdoor", -496], ["minecraft:mangrove_wood", -497], ["minecraft:medium_amethyst_bud", -331], ["minecraft:melon_block", 103], ["minecraft:melon_seeds", 322], ["minecraft:melon_slice", 301], ["minecraft:milk_bucket", 393], ["minecraft:minecart", 402], ["minecraft:miner_pottery_sherd", 713], ["minecraft:mob_spawner", 52], ["minecraft:mojang_banner_pattern", 623], ["minecraft:mooshroom_spawn_egg", 473], ["minecraft:moss_block", -320], ["minecraft:moss_carpet", -335], ["minecraft:mossy_cobblestone", 48], ["minecraft:mossy_cobblestone_slab", -888], ["minecraft:mossy_cobblestone_stairs", -179], ["minecraft:mossy_cobblestone_wall", -971], ["minecraft:mossy_stone_brick_slab", -166], ["minecraft:mossy_stone_brick_stairs", -175], ["minecraft:mossy_stone_brick_wall", -978], ["minecraft:mossy_stone_bricks", -868], ["minecraft:mourner_pottery_sherd", 714], ["minecraft:mud", -473], ["minecraft:mud_brick_slab", -478], ["minecraft:mud_brick_stairs", -480], ["minecraft:mud_brick_wall", -481], ["minecraft:mud_bricks", -475], ["minecraft:muddy_mangrove_roots", -483], ["minecraft:mule_spawn_egg", 500], ["minecraft:mushroom_stem", -1008], ["minecraft:mushroom_stew", 289], ["minecraft:music_disc_11", 583], ["minecraft:music_disc_13", 573], ["minecraft:music_disc_5", 678], ["minecraft:music_disc_blocks", 575], ["minecraft:music_disc_cat", 574], ["minecraft:music_disc_chirp", 576], ["minecraft:music_disc_creator", 826], ["minecraft:music_disc_creator_music_box", 827], ["minecraft:music_disc_far", 577], ["minecraft:music_disc_lava_chicken", 830], ["minecraft:music_disc_mall", 578], ["minecraft:music_disc_mellohi", 579], ["minecraft:music_disc_otherside", 668], ["minecraft:music_disc_pigstep", 662], ["minecraft:music_disc_precipice", 828], ["minecraft:music_disc_relic", 742], ["minecraft:music_disc_stal", 580], ["minecraft:music_disc_strad", 581], ["minecraft:music_disc_tears", 829], ["minecraft:music_disc_wait", 584], ["minecraft:music_disc_ward", 582], ["minecraft:mutton", 589], ["minecraft:mycelium", 110], ["minecraft:name_tag", 587], ["minecraft:nautilus_shell", 609], ["minecraft:nautilus_spawn_egg", 784], ["minecraft:nether_brick", 112], ["minecraft:nether_brick_fence", 113], ["minecraft:nether_brick_slab", -877], ["minecraft:nether_brick_stairs", 114], ["minecraft:nether_brick_wall", -979], ["minecraft:nether_gold_ore", -288], ["minecraft:nether_sprouts", 663], ["minecraft:nether_star", 557], ["minecraft:nether_wart", 323], ["minecraft:nether_wart_block", 214], ["minecraft:netherbrick", 562], ["minecraft:netherite_axe", 649], ["minecraft:netherite_block", -270], ["minecraft:netherite_boots", 655], ["minecraft:netherite_chestplate", 653], ["minecraft:netherite_helmet", 652], ["minecraft:netherite_hoe", 650], ["minecraft:netherite_horse_armor", 792], ["minecraft:netherite_ingot", 651], ["minecraft:netherite_leggings", 654], ["minecraft:netherite_nautilus_armor", 791], ["minecraft:netherite_pickaxe", 648], ["minecraft:netherite_scrap", 656], ["minecraft:netherite_shovel", 647], ["minecraft:netherite_spear", 261], ["minecraft:netherite_sword", 646], ["minecraft:netherite_upgrade_smithing_template", 723], ["minecraft:netherrack", 87], ["minecraft:normal_stone_slab", -899], ["minecraft:normal_stone_stairs", -180], ["minecraft:noteblock", 25], ["minecraft:oak_boat", 407], ["minecraft:oak_chest_boat", 680], ["minecraft:oak_fence", 85], ["minecraft:oak_hanging_sign", -500], ["minecraft:oak_leaves", 18], ["minecraft:oak_log", 17], ["minecraft:oak_planks", 5], ["minecraft:oak_sapling", 6], ["minecraft:oak_shelf", -1047], ["minecraft:oak_sign", 390], ["minecraft:oak_slab", 158], ["minecraft:oak_stairs", 53], ["minecraft:oak_wood", -212], ["minecraft:observer", 251], ["minecraft:obsidian", 49], ["minecraft:ocelot_spawn_egg", 484], ["minecraft:ochre_froglight", -471], ["minecraft:ominous_bottle", 634], ["minecraft:ominous_trial_key", 282], ["minecraft:open_eyeblossom", -1018], ["minecraft:orange_bundle", 275], ["minecraft:orange_candle", -414], ["minecraft:orange_carpet", -597], ["minecraft:orange_concrete", -628], ["minecraft:orange_concrete_powder", -709], ["minecraft:orange_dye", 441], ["minecraft:orange_glazed_terracotta", 221], ["minecraft:orange_harness", 766], ["minecraft:orange_shulker_box", -613], ["minecraft:orange_stained_glass", -673], ["minecraft:orange_stained_glass_pane", -643], ["minecraft:orange_terracotta", -724], ["minecraft:orange_tulip", -834], ["minecraft:orange_wool", -557], ["minecraft:oxeye_daisy", -837], ["minecraft:oxidized_chiseled_copper", -763], ["minecraft:oxidized_copper", -343], ["minecraft:oxidized_copper_bars", -1069], ["minecraft:oxidized_copper_bulb", -779], ["minecraft:oxidized_copper_chain", -1077], ["minecraft:oxidized_copper_chest", -1034], ["minecraft:oxidized_copper_door", -787], ["minecraft:oxidized_copper_golem_statue", -1042], ["minecraft:oxidized_copper_grate", -771], ["minecraft:oxidized_copper_lantern", -1086], ["minecraft:oxidized_copper_trapdoor", -795], ["minecraft:oxidized_cut_copper", -350], ["minecraft:oxidized_cut_copper_slab", -364], ["minecraft:oxidized_cut_copper_stairs", -357], ["minecraft:oxidized_lightning_rod", -1061], ["minecraft:packed_ice", 174], ["minecraft:packed_mud", -477], ["minecraft:painting", 389], ["minecraft:pale_hanging_moss", -1011], ["minecraft:pale_moss_block", -1009], ["minecraft:pale_moss_carpet", -1010], ["minecraft:pale_oak_boat", 748], ["minecraft:pale_oak_button", -989], ["minecraft:pale_oak_chest_boat", 749], ["minecraft:pale_oak_door", -990], ["minecraft:pale_oak_fence", -991], ["minecraft:pale_oak_fence_gate", -992], ["minecraft:pale_oak_hanging_sign", -993], ["minecraft:pale_oak_leaves", -1007], ["minecraft:pale_oak_log", -995], ["minecraft:pale_oak_planks", -996], ["minecraft:pale_oak_pressure_plate", -997], ["minecraft:pale_oak_sapling", -1006], ["minecraft:pale_oak_shelf", -1055], ["minecraft:pale_oak_sign", 750], ["minecraft:pale_oak_slab", -998], ["minecraft:pale_oak_stairs", -1e3], ["minecraft:pale_oak_trapdoor", -1002], ["minecraft:pale_oak_wood", -1005], ["minecraft:panda_spawn_egg", 523], ["minecraft:paper", 418], ["minecraft:parched_spawn_egg", 786], ["minecraft:parrot_spawn_egg", 512], ["minecraft:pearlescent_froglight", -469], ["minecraft:peony", -867], ["minecraft:petrified_oak_slab", -902], ["minecraft:phantom_membrane", 613], ["minecraft:phantom_spawn_egg", 520], ["minecraft:pig_spawn_egg", 470], ["minecraft:piglin_banner_pattern", 626], ["minecraft:piglin_brute_spawn_egg", 533], ["minecraft:piglin_head", -970], ["minecraft:piglin_spawn_egg", 531], ["minecraft:pillager_spawn_egg", 525], ["minecraft:pink_bundle", 276], ["minecraft:pink_candle", -419], ["minecraft:pink_carpet", -602], ["minecraft:pink_concrete", -633], ["minecraft:pink_concrete_powder", -714], ["minecraft:pink_dye", 436], ["minecraft:pink_glazed_terracotta", 226], ["minecraft:pink_harness", 767], ["minecraft:pink_petals", -549], ["minecraft:pink_shulker_box", -618], ["minecraft:pink_stained_glass", -678], ["minecraft:pink_stained_glass_pane", -648], ["minecraft:pink_terracotta", -729], ["minecraft:pink_tulip", -836], ["minecraft:pink_wool", -566], ["minecraft:piston", 33], ["minecraft:pitcher_plant", -612], ["minecraft:pitcher_pod", 326], ["minecraft:player_head", -967], ["minecraft:plenty_pottery_sherd", 715], ["minecraft:podzol", 243], ["minecraft:pointed_dripstone", -308], ["minecraft:poisonous_potato", 311], ["minecraft:polar_bear_spawn_egg", 506], ["minecraft:polished_andesite", -595], ["minecraft:polished_andesite_slab", -892], ["minecraft:polished_andesite_stairs", -174], ["minecraft:polished_basalt", -235], ["minecraft:polished_blackstone", -291], ["minecraft:polished_blackstone_brick_slab", -284], ["minecraft:polished_blackstone_brick_stairs", -275], ["minecraft:polished_blackstone_brick_wall", -278], ["minecraft:polished_blackstone_bricks", -274], ["minecraft:polished_blackstone_button", -296], ["minecraft:polished_blackstone_pressure_plate", -295], ["minecraft:polished_blackstone_slab", -293], ["minecraft:polished_blackstone_stairs", -292], ["minecraft:polished_blackstone_wall", -297], ["minecraft:polished_deepslate", -383], ["minecraft:polished_deepslate_slab", -384], ["minecraft:polished_deepslate_stairs", -385], ["minecraft:polished_deepslate_wall", -386], ["minecraft:polished_diorite", -593], ["minecraft:polished_diorite_slab", -895], ["minecraft:polished_diorite_stairs", -173], ["minecraft:polished_granite", -591], ["minecraft:polished_granite_slab", -897], ["minecraft:polished_granite_stairs", -172], ["minecraft:polished_tuff", -748], ["minecraft:polished_tuff_slab", -749], ["minecraft:polished_tuff_stairs", -751], ["minecraft:polished_tuff_wall", -752], ["minecraft:popped_chorus_fruit", 598], ["minecraft:poppy", 38], ["minecraft:porkchop", 291], ["minecraft:potato", 309], ["minecraft:potion", 459], ["minecraft:powder_snow_bucket", 400], ["minecraft:prismarine", 168], ["minecraft:prismarine_brick_slab", -887], ["minecraft:prismarine_bricks", -948], ["minecraft:prismarine_bricks_stairs", -4], ["minecraft:prismarine_crystals", 588], ["minecraft:prismarine_shard", 604], ["minecraft:prismarine_slab", -885], ["minecraft:prismarine_stairs", -2], ["minecraft:prismarine_wall", -981], ["minecraft:prize_pottery_sherd", 716], ["minecraft:pufferfish", 296], ["minecraft:pufferfish_bucket", 399], ["minecraft:pufferfish_spawn_egg", 515], ["minecraft:pumpkin", 86], ["minecraft:pumpkin_pie", 313], ["minecraft:pumpkin_seeds", 321], ["minecraft:purple_bundle", 277], ["minecraft:purple_candle", -423], ["minecraft:purple_carpet", -606], ["minecraft:purple_concrete", -637], ["minecraft:purple_concrete_powder", -718], ["minecraft:purple_dye", 432], ["minecraft:purple_glazed_terracotta", 219], ["minecraft:purple_harness", 768], ["minecraft:purple_shulker_box", -622], ["minecraft:purple_stained_glass", -682], ["minecraft:purple_stained_glass_pane", -652], ["minecraft:purple_terracotta", -733], ["minecraft:purple_wool", -564], ["minecraft:purpur_block", 201], ["minecraft:purpur_pillar", -951], ["minecraft:purpur_slab", -884], ["minecraft:purpur_stairs", 203], ["minecraft:quartz", 563], ["minecraft:quartz_block", 155], ["minecraft:quartz_bricks", -304], ["minecraft:quartz_ore", 153], ["minecraft:quartz_pillar", -954], ["minecraft:quartz_slab", -876], ["minecraft:quartz_stairs", 156], ["minecraft:rabbit", 317], ["minecraft:rabbit_foot", 567], ["minecraft:rabbit_hide", 568], ["minecraft:rabbit_spawn_egg", 492], ["minecraft:rabbit_stew", 319], ["minecraft:rail", 66], ["minecraft:raiser_armor_trim_smithing_template", 737], ["minecraft:ravager_spawn_egg", 527], ["minecraft:raw_copper", 547], ["minecraft:raw_copper_block", -452], ["minecraft:raw_gold", 546], ["minecraft:raw_gold_block", -453], ["minecraft:raw_iron", 545], ["minecraft:raw_iron_block", -451], ["minecraft:recovery_compass", 688], ["minecraft:red_bundle", 278], ["minecraft:red_candle", -427], ["minecraft:red_carpet", -610], ["minecraft:red_concrete", -641], ["minecraft:red_concrete_powder", -722], ["minecraft:red_dye", 428], ["minecraft:red_glazed_terracotta", 234], ["minecraft:red_harness", 769], ["minecraft:red_mushroom", 40], ["minecraft:red_mushroom_block", 100], ["minecraft:red_nether_brick", 215], ["minecraft:red_nether_brick_slab", -890], ["minecraft:red_nether_brick_stairs", -184], ["minecraft:red_nether_brick_wall", -983], ["minecraft:red_sand", -949], ["minecraft:red_sandstone", 179], ["minecraft:red_sandstone_slab", 182], ["minecraft:red_sandstone_stairs", 180], ["minecraft:red_sandstone_wall", -982], ["minecraft:red_shulker_box", -626], ["minecraft:red_stained_glass", -686], ["minecraft:red_stained_glass_pane", -656], ["minecraft:red_terracotta", -737], ["minecraft:red_tulip", -833], ["minecraft:red_wool", -556], ["minecraft:redstone", 405], ["minecraft:redstone_block", 152], ["minecraft:redstone_lamp", 123], ["minecraft:redstone_ore", 73], ["minecraft:redstone_torch", 76], ["minecraft:reinforced_deepslate", -466], ["minecraft:repeater", 451], ["minecraft:repeating_command_block", 188], ["minecraft:resin_block", -1021], ["minecraft:resin_brick", 752], ["minecraft:resin_brick_slab", -1014], ["minecraft:resin_brick_stairs", -1016], ["minecraft:resin_brick_wall", -1017], ["minecraft:resin_bricks", -1013], ["minecraft:resin_clump", -1022], ["minecraft:respawn_anchor", -272], ["minecraft:rib_armor_trim_smithing_template", 733], ["minecraft:rose_bush", -866], ["minecraft:rotten_flesh", 306], ["minecraft:saddle", 403], ["minecraft:salmon", 294], ["minecraft:salmon_bucket", 397], ["minecraft:salmon_spawn_egg", 516], ["minecraft:sand", 12], ["minecraft:sandstone", 24], ["minecraft:sandstone_slab", -872], ["minecraft:sandstone_stairs", 128], ["minecraft:sandstone_wall", -975], ["minecraft:scaffolding", -165], ["minecraft:scrape_pottery_sherd", 717], ["minecraft:sculk", -458], ["minecraft:sculk_catalyst", -460], ["minecraft:sculk_sensor", -307], ["minecraft:sculk_shrieker", -461], ["minecraft:sculk_vein", -459], ["minecraft:sea_lantern", 169], ["minecraft:sea_pickle", -156], ["minecraft:seagrass", -130], ["minecraft:sentry_armor_trim_smithing_template", 724], ["minecraft:shaper_armor_trim_smithing_template", 738], ["minecraft:sheaf_pottery_sherd", 718], ["minecraft:shears", 453], ["minecraft:sheep_spawn_egg", 471], ["minecraft:shelter_pottery_sherd", 719], ["minecraft:shield", 387], ["minecraft:short_dry_grass", -1028], ["minecraft:short_grass", 31], ["minecraft:shroomlight", -230], ["minecraft:shulker_shell", 605], ["minecraft:shulker_spawn_egg", 503], ["minecraft:silence_armor_trim_smithing_template", 735], ["minecraft:silver_glazed_terracotta", 228], ["minecraft:silverfish_spawn_egg", 476], ["minecraft:skeleton_horse_spawn_egg", 501], ["minecraft:skeleton_skull", 144], ["minecraft:skeleton_spawn_egg", 477], ["minecraft:skull_banner_pattern", 622], ["minecraft:skull_pottery_sherd", 720], ["minecraft:slime", 165], ["minecraft:slime_ball", 420], ["minecraft:slime_spawn_egg", 478], ["minecraft:small_amethyst_bud", -332], ["minecraft:small_dripleaf_block", -336], ["minecraft:smithing_table", -202], ["minecraft:smoker", -198], ["minecraft:smooth_basalt", -377], ["minecraft:smooth_quartz", -955], ["minecraft:smooth_quartz_slab", -898], ["minecraft:smooth_quartz_stairs", -185], ["minecraft:smooth_red_sandstone", -958], ["minecraft:smooth_red_sandstone_slab", -891], ["minecraft:smooth_red_sandstone_stairs", -176], ["minecraft:smooth_sandstone", -946], ["minecraft:smooth_sandstone_slab", -889], ["minecraft:smooth_sandstone_stairs", -177], ["minecraft:smooth_stone", -183], ["minecraft:smooth_stone_slab", 44], ["minecraft:sniffer_egg", -596], ["minecraft:sniffer_spawn_egg", 534], ["minecraft:snort_pottery_sherd", 721], ["minecraft:snout_armor_trim_smithing_template", 732], ["minecraft:snow", 80], ["minecraft:snow_golem_spawn_egg", 540], ["minecraft:snow_layer", 78], ["minecraft:snowball", 406], ["minecraft:soul_campfire", 664], ["minecraft:soul_lantern", -269], ["minecraft:soul_sand", 88], ["minecraft:soul_soil", -236], ["minecraft:soul_torch", -268], ["minecraft:spider_eye", 307], ["minecraft:spider_spawn_egg", 479], ["minecraft:spire_armor_trim_smithing_template", 734], ["minecraft:splash_potion", 600], ["minecraft:sponge", 19], ["minecraft:spore_blossom", -321], ["minecraft:spruce_boat", 410], ["minecraft:spruce_button", -144], ["minecraft:spruce_chest_boat", 683], ["minecraft:spruce_door", 592], ["minecraft:spruce_fence", -579], ["minecraft:spruce_fence_gate", 183], ["minecraft:spruce_hanging_sign", -501], ["minecraft:spruce_leaves", -800], ["minecraft:spruce_log", -569], ["minecraft:spruce_planks", -739], ["minecraft:spruce_pressure_plate", -154], ["minecraft:spruce_sapling", -825], ["minecraft:spruce_shelf", -1048], ["minecraft:spruce_sign", 615], ["minecraft:spruce_slab", -804], ["minecraft:spruce_stairs", 134], ["minecraft:spruce_trapdoor", -149], ["minecraft:spruce_wood", -814], ["minecraft:spyglass", 667], ["minecraft:squid_spawn_egg", 483], ["minecraft:stick", 352], ["minecraft:sticky_piston", 29], ["minecraft:stone", 1], ["minecraft:stone_axe", 346], ["minecraft:stone_brick_slab", -875], ["minecraft:stone_brick_stairs", 109], ["minecraft:stone_brick_wall", -977], ["minecraft:stone_bricks", 98], ["minecraft:stone_button", 77], ["minecraft:stone_hoe", 362], ["minecraft:stone_pickaxe", 345], ["minecraft:stone_pressure_plate", 70], ["minecraft:stone_shovel", 344], ["minecraft:stone_spear", 262], ["minecraft:stone_stairs", 67], ["minecraft:stone_sword", 343], ["minecraft:stonecutter_block", -197], ["minecraft:stray_spawn_egg", 495], ["minecraft:strider_spawn_egg", 529], ["minecraft:string", 358], ["minecraft:stripped_acacia_log", -8], ["minecraft:stripped_acacia_wood", -823], ["minecraft:stripped_bamboo_block", -528], ["minecraft:stripped_birch_log", -6], ["minecraft:stripped_birch_wood", -821], ["minecraft:stripped_cherry_log", -535], ["minecraft:stripped_cherry_wood", -545], ["minecraft:stripped_crimson_hyphae", -300], ["minecraft:stripped_crimson_stem", -240], ["minecraft:stripped_dark_oak_log", -9], ["minecraft:stripped_dark_oak_wood", -824], ["minecraft:stripped_jungle_log", -7], ["minecraft:stripped_jungle_wood", -822], ["minecraft:stripped_mangrove_log", -485], ["minecraft:stripped_mangrove_wood", -498], ["minecraft:stripped_oak_log", -10], ["minecraft:stripped_oak_wood", -819], ["minecraft:stripped_pale_oak_log", -994], ["minecraft:stripped_pale_oak_wood", -1004], ["minecraft:stripped_spruce_log", -5], ["minecraft:stripped_spruce_wood", -820], ["minecraft:stripped_warped_hyphae", -301], ["minecraft:stripped_warped_stem", -241], ["minecraft:structure_block", 252], ["minecraft:structure_void", 217], ["minecraft:sugar", 448], ["minecraft:sugar_cane", 417], ["minecraft:sunflower", 175], ["minecraft:suspicious_gravel", -573], ["minecraft:suspicious_sand", -529], ["minecraft:suspicious_stew", 631], ["minecraft:sweet_berries", 316], ["minecraft:tadpole_bucket", 672], ["minecraft:tadpole_spawn_egg", 671], ["minecraft:tall_dry_grass", -1029], ["minecraft:tall_grass", -864], ["minecraft:target", -239], ["minecraft:tide_armor_trim_smithing_template", 731], ["minecraft:tinted_glass", -334], ["minecraft:tnt", 46], ["minecraft:tnt_minecart", 564], ["minecraft:torch", 50], ["minecraft:torchflower", -568], ["minecraft:torchflower_seeds", 325], ["minecraft:totem_of_undying", 607], ["minecraft:trader_llama_spawn_egg", 690], ["minecraft:trapdoor", 96], ["minecraft:trapped_chest", 146], ["minecraft:trial_key", 283], ["minecraft:trial_spawner", -315], ["minecraft:trident", 585], ["minecraft:tripwire_hook", 131], ["minecraft:tropical_fish", 295], ["minecraft:tropical_fish_bucket", 398], ["minecraft:tropical_fish_spawn_egg", 513], ["minecraft:tube_coral", -131], ["minecraft:tube_coral_block", -132], ["minecraft:tube_coral_fan", -133], ["minecraft:tuff", -333], ["minecraft:tuff_brick_slab", -755], ["minecraft:tuff_brick_stairs", -757], ["minecraft:tuff_brick_wall", -758], ["minecraft:tuff_bricks", -754], ["minecraft:tuff_slab", -744], ["minecraft:tuff_stairs", -746], ["minecraft:tuff_wall", -747], ["minecraft:turtle_egg", -159], ["minecraft:turtle_helmet", 612], ["minecraft:turtle_scute", 611], ["minecraft:turtle_spawn_egg", 519], ["minecraft:twisting_vines", -287], ["minecraft:undyed_shulker_box", 205], ["minecraft:vault", -314], ["minecraft:verdant_froglight", -470], ["minecraft:vex_armor_trim_smithing_template", 730], ["minecraft:vex_spawn_egg", 510], ["minecraft:villager_spawn_egg", 482], ["minecraft:vindicator_spawn_egg", 508], ["minecraft:vine", 106], ["minecraft:wandering_trader_spawn_egg", 526], ["minecraft:ward_armor_trim_smithing_template", 728], ["minecraft:warden_spawn_egg", 674], ["minecraft:warped_button", -261], ["minecraft:warped_door", 660], ["minecraft:warped_fence", -257], ["minecraft:warped_fence_gate", -259], ["minecraft:warped_fungus", -229], ["minecraft:warped_fungus_on_a_stick", 661], ["minecraft:warped_hanging_sign", -507], ["minecraft:warped_hyphae", -298], ["minecraft:warped_nylium", -233], ["minecraft:warped_planks", -243], ["minecraft:warped_pressure_plate", -263], ["minecraft:warped_roots", -224], ["minecraft:warped_shelf", -1058], ["minecraft:warped_sign", 658], ["minecraft:warped_slab", -265], ["minecraft:warped_stairs", -255], ["minecraft:warped_stem", -226], ["minecraft:warped_trapdoor", -247], ["minecraft:warped_wart_block", -227], ["minecraft:water_bucket", 394], ["minecraft:waterlily", 111], ["minecraft:waxed_chiseled_copper", -764], ["minecraft:waxed_copper", -344], ["minecraft:waxed_copper_bars", -1070], ["minecraft:waxed_copper_bulb", -780], ["minecraft:waxed_copper_chain", -1078], ["minecraft:waxed_copper_chest", -1035], ["minecraft:waxed_copper_door", -788], ["minecraft:waxed_copper_golem_statue", -1043], ["minecraft:waxed_copper_grate", -772], ["minecraft:waxed_copper_lantern", -1087], ["minecraft:waxed_copper_trapdoor", -796], ["minecraft:waxed_cut_copper", -351], ["minecraft:waxed_cut_copper_slab", -365], ["minecraft:waxed_cut_copper_stairs", -358], ["minecraft:waxed_exposed_chiseled_copper", -765], ["minecraft:waxed_exposed_copper", -345], ["minecraft:waxed_exposed_copper_bars", -1071], ["minecraft:waxed_exposed_copper_bulb", -781], ["minecraft:waxed_exposed_copper_chain", -1079], ["minecraft:waxed_exposed_copper_chest", -1036], ["minecraft:waxed_exposed_copper_door", -789], ["minecraft:waxed_exposed_copper_golem_statue", -1044], ["minecraft:waxed_exposed_copper_grate", -773], ["minecraft:waxed_exposed_copper_lantern", -1088], ["minecraft:waxed_exposed_copper_trapdoor", -797], ["minecraft:waxed_exposed_cut_copper", -352], ["minecraft:waxed_exposed_cut_copper_slab", -366], ["minecraft:waxed_exposed_cut_copper_stairs", -359], ["minecraft:waxed_exposed_lightning_rod", -1063], ["minecraft:waxed_lightning_rod", -1062], ["minecraft:waxed_oxidized_chiseled_copper", -766], ["minecraft:waxed_oxidized_copper", -446], ["minecraft:waxed_oxidized_copper_bars", -1073], ["minecraft:waxed_oxidized_copper_bulb", -783], ["minecraft:waxed_oxidized_copper_chain", -1081], ["minecraft:waxed_oxidized_copper_chest", -1038], ["minecraft:waxed_oxidized_copper_door", -791], ["minecraft:waxed_oxidized_copper_golem_statue", -1046], ["minecraft:waxed_oxidized_copper_grate", -775], ["minecraft:waxed_oxidized_copper_lantern", -1090], ["minecraft:waxed_oxidized_copper_trapdoor", -799], ["minecraft:waxed_oxidized_cut_copper", -447], ["minecraft:waxed_oxidized_cut_copper_slab", -449], ["minecraft:waxed_oxidized_cut_copper_stairs", -448], ["minecraft:waxed_oxidized_lightning_rod", -1065], ["minecraft:waxed_weathered_chiseled_copper", -767], ["minecraft:waxed_weathered_copper", -346], ["minecraft:waxed_weathered_copper_bars", -1072], ["minecraft:waxed_weathered_copper_bulb", -782], ["minecraft:waxed_weathered_copper_chain", -1080], ["minecraft:waxed_weathered_copper_chest", -1037], ["minecraft:waxed_weathered_copper_door", -790], ["minecraft:waxed_weathered_copper_golem_statue", -1045], ["minecraft:waxed_weathered_copper_grate", -774], ["minecraft:waxed_weathered_copper_lantern", -1089], ["minecraft:waxed_weathered_copper_trapdoor", -798], ["minecraft:waxed_weathered_cut_copper", -353], ["minecraft:waxed_weathered_cut_copper_slab", -367], ["minecraft:waxed_weathered_cut_copper_stairs", -360], ["minecraft:waxed_weathered_lightning_rod", -1064], ["minecraft:wayfinder_armor_trim_smithing_template", 736], ["minecraft:weathered_chiseled_copper", -762], ["minecraft:weathered_copper", -342], ["minecraft:weathered_copper_bars", -1068], ["minecraft:weathered_copper_bulb", -778], ["minecraft:weathered_copper_chain", -1076], ["minecraft:weathered_copper_chest", -1033], ["minecraft:weathered_copper_door", -786], ["minecraft:weathered_copper_golem_statue", -1041], ["minecraft:weathered_copper_grate", -770], ["minecraft:weathered_copper_lantern", -1085], ["minecraft:weathered_copper_trapdoor", -794], ["minecraft:weathered_cut_copper", -349], ["minecraft:weathered_cut_copper_slab", -363], ["minecraft:weathered_cut_copper_stairs", -356], ["minecraft:weathered_lightning_rod", -1060], ["minecraft:web", 30], ["minecraft:weeping_vines", -231], ["minecraft:wet_sponge", -984], ["minecraft:wheat", 366], ["minecraft:wheat_seeds", 320], ["minecraft:white_bundle", 279], ["minecraft:white_candle", -413], ["minecraft:white_carpet", 171], ["minecraft:white_concrete", 236], ["minecraft:white_concrete_powder", 237], ["minecraft:white_dye", 442], ["minecraft:white_glazed_terracotta", 220], ["minecraft:white_harness", 770], ["minecraft:white_shulker_box", 218], ["minecraft:white_stained_glass", 241], ["minecraft:white_stained_glass_pane", 160], ["minecraft:white_terracotta", 159], ["minecraft:white_tulip", -835], ["minecraft:white_wool", 35], ["minecraft:wild_armor_trim_smithing_template", 727], ["minecraft:wildflowers", -1024], ["minecraft:wind_charge", 284], ["minecraft:witch_spawn_egg", 485], ["minecraft:wither_rose", -216], ["minecraft:wither_skeleton_skull", -965], ["minecraft:wither_skeleton_spawn_egg", 498], ["minecraft:wither_spawn_egg", 542], ["minecraft:wolf_armor", 747], ["minecraft:wolf_spawn_egg", 472], ["minecraft:wooden_axe", 342], ["minecraft:wooden_button", 143], ["minecraft:wooden_door", 391], ["minecraft:wooden_hoe", 361], ["minecraft:wooden_pickaxe", 341], ["minecraft:wooden_pressure_plate", 72], ["minecraft:wooden_shovel", 340], ["minecraft:wooden_spear", 263], ["minecraft:wooden_sword", 339], ["minecraft:writable_book", 550], ["minecraft:yellow_bundle", 280], ["minecraft:yellow_candle", -417], ["minecraft:yellow_carpet", -600], ["minecraft:yellow_concrete", -631], ["minecraft:yellow_concrete_powder", -712], ["minecraft:yellow_dye", 438], ["minecraft:yellow_glazed_terracotta", 224], ["minecraft:yellow_harness", 771], ["minecraft:yellow_shulker_box", -616], ["minecraft:yellow_stained_glass", -676], ["minecraft:yellow_stained_glass_pane", -646], ["minecraft:yellow_terracotta", -727], ["minecraft:yellow_wool", -558], ["minecraft:zoglin_spawn_egg", 532], ["minecraft:zombie_head", -966], ["minecraft:zombie_horse_spawn_egg", 502], ["minecraft:zombie_nautilus_spawn_egg", 785], ["minecraft:zombie_pigman_spawn_egg", 481], ["minecraft:zombie_spawn_egg", 480], ["minecraft:zombie_villager_spawn_egg", 511], ["minecraft:acacia_double_slab", -812], ["minecraft:acacia_standing_sign", -190], ["minecraft:acacia_wall_sign", -191], ["minecraft:agent_spawn_egg", 521], ["minecraft:air", -158], ["minecraft:andesite_double_slab", -920], ["minecraft:balloon", 642], ["minecraft:bamboo_double_slab", -521], ["minecraft:bamboo_mosaic_double_slab", -525], ["minecraft:bamboo_sapling", -164], ["minecraft:bamboo_standing_sign", -518], ["minecraft:bamboo_wall_sign", -519], ["minecraft:banner_pattern", 829], ["minecraft:beetroots", 244], ["minecraft:birch_double_slab", -810], ["minecraft:birch_standing_sign", -186], ["minecraft:birch_wall_sign", -187], ["minecraft:black_candle_cake", -445], ["minecraft:blackstone_double_slab", -283], ["minecraft:bleach", 640], ["minecraft:blue_candle_cake", -441], ["minecraft:board", 636], ["minecraft:boat", 828], ["minecraft:brain_coral_wall_fan", -904], ["minecraft:brick_double_slab", -880], ["minecraft:brown_candle_cake", -442], ["minecraft:bubble_column", -160], ["minecraft:bubble_coral_wall_fan", -136], ["minecraft:cake_block", 92], ["minecraft:camera", 637], ["minecraft:camera_block", 637], ["minecraft:candle_cake", -429], ["minecraft:carpet", 785], ["minecraft:carrots", 141], ["minecraft:cave_vines", -322], ["minecraft:cave_vines_body_with_berries", -375], ["minecraft:cave_vines_head_with_berries", -376], ["minecraft:chain", 663], ["minecraft:chalkboard", 230], ["minecraft:chemical_heat", 192], ["minecraft:chemistry_table", 822], ["minecraft:cherry_double_slab", -540], ["minecraft:cherry_standing_sign", -542], ["minecraft:cherry_wall_sign", -544], ["minecraft:chest_boat", 688], ["minecraft:client_request_placeholder_block", -465], ["minecraft:cobbled_deepslate_double_slab", -396], ["minecraft:cobblestone_double_slab", -879], ["minecraft:cocoa", 127], ["minecraft:colored_torch_blue", 204], ["minecraft:colored_torch_bp", 826], ["minecraft:colored_torch_green", -963], ["minecraft:colored_torch_purple", -964], ["minecraft:colored_torch_red", 202], ["minecraft:colored_torch_rg", 825], ["minecraft:compound", 638], ["minecraft:compound_creator", 238], ["minecraft:concrete", 811], ["minecraft:concrete_powder", 812], ["minecraft:coral", 807], ["minecraft:coral_block", 789], ["minecraft:coral_fan", 798], ["minecraft:coral_fan_dead", 799], ["minecraft:crimson_double_slab", -266], ["minecraft:crimson_standing_sign", -250], ["minecraft:crimson_wall_sign", -252], ["minecraft:cut_red_sandstone_double_slab", -928], ["minecraft:cut_sandstone_double_slab", -927], ["minecraft:cyan_candle_cake", -439], ["minecraft:dark_oak_double_slab", -813], ["minecraft:dark_prismarine_double_slab", -913], ["minecraft:darkoak_standing_sign", -192], ["minecraft:darkoak_wall_sign", -193], ["minecraft:daylight_detector_inverted", 178], ["minecraft:dead_brain_coral_wall_fan", -906], ["minecraft:dead_bubble_coral_wall_fan", -908], ["minecraft:dead_fire_coral_wall_fan", -909], ["minecraft:dead_horn_coral_wall_fan", -910], ["minecraft:dead_tube_coral_wall_fan", -905], ["minecraft:debug_stick", 632], ["minecraft:deepslate_brick_double_slab", -399], ["minecraft:deepslate_tile_double_slab", -398], ["minecraft:deprecated_anvil", -961], ["minecraft:deprecated_purpur_block_1", -950], ["minecraft:deprecated_purpur_block_2", -952], ["minecraft:diorite_double_slab", -921], ["minecraft:double_cut_copper_slab", -368], ["minecraft:double_oak_slab", 157], ["minecraft:double_plant", 805], ["minecraft:double_stone_block_slab", 794], ["minecraft:double_stone_block_slab2", 795], ["minecraft:double_stone_block_slab3", 796], ["minecraft:double_stone_block_slab4", 797], ["minecraft:double_wooden_slab", 808], ["minecraft:dye", 828], ["minecraft:element_0", 36], ["minecraft:element_1", -12], ["minecraft:element_10", -21], ["minecraft:element_100", -111], ["minecraft:element_101", -112], ["minecraft:element_102", -113], ["minecraft:element_103", -114], ["minecraft:element_104", -115], ["minecraft:element_105", -116], ["minecraft:element_106", -117], ["minecraft:element_107", -118], ["minecraft:element_108", -119], ["minecraft:element_109", -120], ["minecraft:element_11", -22], ["minecraft:element_110", -121], ["minecraft:element_111", -122], ["minecraft:element_112", -123], ["minecraft:element_113", -124], ["minecraft:element_114", -125], ["minecraft:element_115", -126], ["minecraft:element_116", -127], ["minecraft:element_117", -128], ["minecraft:element_118", -129], ["minecraft:element_12", -23], ["minecraft:element_13", -24], ["minecraft:element_14", -25], ["minecraft:element_15", -26], ["minecraft:element_16", -27], ["minecraft:element_17", -28], ["minecraft:element_18", -29], ["minecraft:element_19", -30], ["minecraft:element_2", -13], ["minecraft:element_20", -31], ["minecraft:element_21", -32], ["minecraft:element_22", -33], ["minecraft:element_23", -34], ["minecraft:element_24", -35], ["minecraft:element_25", -36], ["minecraft:element_26", -37], ["minecraft:element_27", -38], ["minecraft:element_28", -39], ["minecraft:element_29", -40], ["minecraft:element_3", -14], ["minecraft:element_30", -41], ["minecraft:element_31", -42], ["minecraft:element_32", -43], ["minecraft:element_33", -44], ["minecraft:element_34", -45], ["minecraft:element_35", -46], ["minecraft:element_36", -47], ["minecraft:element_37", -48], ["minecraft:element_38", -49], ["minecraft:element_39", -50], ["minecraft:element_4", -15], ["minecraft:element_40", -51], ["minecraft:element_41", -52], ["minecraft:element_42", -53], ["minecraft:element_43", -54], ["minecraft:element_44", -55], ["minecraft:element_45", -56], ["minecraft:element_46", -57], ["minecraft:element_47", -58], ["minecraft:element_48", -59], ["minecraft:element_49", -60], ["minecraft:element_5", -16], ["minecraft:element_50", -61], ["minecraft:element_51", -62], ["minecraft:element_52", -63], ["minecraft:element_53", -64], ["minecraft:element_54", -65], ["minecraft:element_55", -66], ["minecraft:element_56", -67], ["minecraft:element_57", -68], ["minecraft:element_58", -69], ["minecraft:element_59", -70], ["minecraft:element_6", -17], ["minecraft:element_60", -71], ["minecraft:element_61", -72], ["minecraft:element_62", -73], ["minecraft:element_63", -74], ["minecraft:element_64", -75], ["minecraft:element_65", -76], ["minecraft:element_66", -77], ["minecraft:element_67", -78], ["minecraft:element_68", -79], ["minecraft:element_69", -80], ["minecraft:element_7", -18], ["minecraft:element_70", -81], ["minecraft:element_71", -82], ["minecraft:element_72", -83], ["minecraft:element_73", -84], ["minecraft:element_74", -85], ["minecraft:element_75", -86], ["minecraft:element_76", -87], ["minecraft:element_77", -88], ["minecraft:element_78", -89], ["minecraft:element_79", -90], ["minecraft:element_8", -19], ["minecraft:element_80", -91], ["minecraft:element_81", -92], ["minecraft:element_82", -93], ["minecraft:element_83", -94], ["minecraft:element_84", -95], ["minecraft:element_85", -96], ["minecraft:element_86", -97], ["minecraft:element_87", -98], ["minecraft:element_88", -99], ["minecraft:element_89", -100], ["minecraft:element_9", -20], ["minecraft:element_90", -101], ["minecraft:element_91", -102], ["minecraft:element_92", -103], ["minecraft:element_93", -104], ["minecraft:element_94", -105], ["minecraft:element_95", -106], ["minecraft:element_96", -107], ["minecraft:element_97", -108], ["minecraft:element_98", -109], ["minecraft:element_99", -110], ["minecraft:element_constructor", -987], ["minecraft:end_gateway", 209], ["minecraft:end_portal", 119], ["minecraft:end_stone_brick_double_slab", -167], ["minecraft:exposed_double_cut_copper_slab", -369], ["minecraft:fence", 787], ["minecraft:fire", 51], ["minecraft:fire_coral_wall_fan", -907], ["minecraft:flowing_lava", 10], ["minecraft:flowing_water", 8], ["minecraft:frame_block", 199], ["minecraft:glow_frame_block", -339], ["minecraft:glow_stick", 645], ["minecraft:glowingobsidian", 246], ["minecraft:granite_double_slab", -923], ["minecraft:gray_candle_cake", -437], ["minecraft:green_candle_cake", -443], ["minecraft:hard_black_stained_glass", -702], ["minecraft:hard_black_stained_glass_pane", -672], ["minecraft:hard_blue_stained_glass", -698], ["minecraft:hard_blue_stained_glass_pane", -668], ["minecraft:hard_brown_stained_glass", -699], ["minecraft:hard_brown_stained_glass_pane", -669], ["minecraft:hard_cyan_stained_glass", -696], ["minecraft:hard_cyan_stained_glass_pane", -666], ["minecraft:hard_glass", 253], ["minecraft:hard_glass_pane", 190], ["minecraft:hard_gray_stained_glass", -694], ["minecraft:hard_gray_stained_glass_pane", -664], ["minecraft:hard_green_stained_glass", -700], ["minecraft:hard_green_stained_glass_pane", -670], ["minecraft:hard_light_blue_stained_glass", -690], ["minecraft:hard_light_blue_stained_glass_pane", -660], ["minecraft:hard_light_gray_stained_glass", -695], ["minecraft:hard_light_gray_stained_glass_pane", -665], ["minecraft:hard_lime_stained_glass", -692], ["minecraft:hard_lime_stained_glass_pane", -662], ["minecraft:hard_magenta_stained_glass", -689], ["minecraft:hard_magenta_stained_glass_pane", -659], ["minecraft:hard_orange_stained_glass", -688], ["minecraft:hard_orange_stained_glass_pane", -658], ["minecraft:hard_pink_stained_glass", -693], ["minecraft:hard_pink_stained_glass_pane", -663], ["minecraft:hard_purple_stained_glass", -697], ["minecraft:hard_purple_stained_glass_pane", -667], ["minecraft:hard_red_stained_glass", -701], ["minecraft:hard_red_stained_glass_pane", -671], ["minecraft:hard_stained_glass", 823], ["minecraft:hard_stained_glass_pane", 824], ["minecraft:hard_white_stained_glass", 254], ["minecraft:hard_white_stained_glass_pane", 191], ["minecraft:hard_yellow_stained_glass", -691], ["minecraft:hard_yellow_stained_glass_pane", -661], ["minecraft:horn_coral_wall_fan", -137], ["minecraft:ice_bomb", 639], ["minecraft:info_update", 248], ["minecraft:info_update2", 249], ["minecraft:invisible_bedrock", 95], ["minecraft:item.acacia_door", 196], ["minecraft:item.beetroot", 244], ["minecraft:item.birch_door", 194], ["minecraft:item.brewing_stand", 117], ["minecraft:item.cake", 92], ["minecraft:item.camera", 242], ["minecraft:item.campfire", -209], ["minecraft:item.cauldron", 118], ["minecraft:item.crimson_door", -244], ["minecraft:item.dark_oak_door", 197], ["minecraft:item.flower_pot", 140], ["minecraft:item.frame", 199], ["minecraft:item.glow_frame", -339], ["minecraft:item.hopper", 154], ["minecraft:item.iron_door", 71], ["minecraft:item.jungle_door", 195], ["minecraft:item.kelp", -138], ["minecraft:item.mangrove_door", -493], ["minecraft:item.nether_sprouts", -238], ["minecraft:item.nether_wart", 115], ["minecraft:item.reeds", 83], ["minecraft:item.soul_campfire", -290], ["minecraft:item.spruce_door", 193], ["minecraft:item.warped_door", -245], ["minecraft:item.wheat", 59], ["minecraft:item.wooden_door", 64], ["minecraft:jungle_double_slab", -811], ["minecraft:jungle_standing_sign", -188], ["minecraft:jungle_wall_sign", -189], ["minecraft:kelp_plant", -138], ["minecraft:lab_table", -988], ["minecraft:lava", 11], ["minecraft:leaves", 801], ["minecraft:leaves2", 802], ["minecraft:light_block", 827], ["minecraft:light_blue_candle_cake", -433], ["minecraft:light_gray_candle_cake", -438], ["minecraft:lime_candle_cake", -435], ["minecraft:lit_blast_furnace", -214], ["minecraft:lit_deepslate_redstone_ore", -404], ["minecraft:lit_furnace", 62], ["minecraft:lit_redstone_lamp", 124], ["minecraft:lit_redstone_ore", 74], ["minecraft:lit_smoker", -199], ["minecraft:log", 786], ["minecraft:log2", 809], ["minecraft:magenta_candle_cake", -432], ["minecraft:mangrove_double_slab", -499], ["minecraft:mangrove_standing_sign", -494], ["minecraft:mangrove_wall_sign", -495], ["minecraft:material_reducer", -986], ["minecraft:medicine", 643], ["minecraft:melon_stem", 105], ["minecraft:monster_egg", 808], ["minecraft:mossy_cobblestone_double_slab", -915], ["minecraft:mossy_stone_brick_double_slab", -168], ["minecraft:moving_block", 250], ["minecraft:mud_brick_double_slab", -479], ["minecraft:nether_brick_double_slab", -883], ["minecraft:nether_wart_plant", 115], ["minecraft:netherreactor", 247], ["minecraft:normal_stone_double_slab", -926], ["minecraft:npc_spawn_egg", 504], ["minecraft:oak_double_slab", 157], ["minecraft:orange_candle_cake", -431], ["minecraft:oxidized_double_cut_copper_slab", -371], ["minecraft:pale_oak_double_slab", -999], ["minecraft:pale_oak_standing_sign", -1001], ["minecraft:pale_oak_wall_sign", -1003], ["minecraft:petrified_oak_double_slab", -903], ["minecraft:pink_candle_cake", -436], ["minecraft:piston_arm_collision", 34], ["minecraft:pitcher_crop", -574], ["minecraft:planks", 806], ["minecraft:polished_andesite_double_slab", -919], ["minecraft:polished_blackstone_brick_double_slab", -285], ["minecraft:polished_blackstone_double_slab", -294], ["minecraft:polished_deepslate_double_slab", -397], ["minecraft:polished_diorite_double_slab", -922], ["minecraft:polished_granite_double_slab", -924], ["minecraft:polished_tuff_double_slab", -750], ["minecraft:portal", 90], ["minecraft:potatoes", 142], ["minecraft:powder_snow", -306], ["minecraft:powered_comparator", 150], ["minecraft:powered_repeater", 94], ["minecraft:prismarine_brick_double_slab", -914], ["minecraft:prismarine_double_slab", -912], ["minecraft:pumpkin_stem", 104], ["minecraft:purple_candle_cake", -440], ["minecraft:purpur_double_slab", -911], ["minecraft:quartz_double_slab", -882], ["minecraft:rapid_fertilizer", 641], ["minecraft:red_candle_cake", -444], ["minecraft:red_flower", 804], ["minecraft:red_nether_brick_double_slab", -917], ["minecraft:red_sandstone_double_slab", 181], ["minecraft:redstone_wire", 55], ["minecraft:reeds", 83], ["minecraft:reserved6", 255], ["minecraft:resin_brick_double_slab", -1015], ["minecraft:sandstone_double_slab", -878], ["minecraft:sapling", 800], ["minecraft:shulker_box", 218], ["minecraft:skull", 743], ["minecraft:smooth_quartz_double_slab", -925], ["minecraft:smooth_red_sandstone_double_slab", -918], ["minecraft:smooth_sandstone_double_slab", -916], ["minecraft:smooth_stone_double_slab", 43], ["minecraft:soul_fire", -237], ["minecraft:sparkler", 644], ["minecraft:spawn_egg", 830], ["minecraft:spruce_double_slab", -809], ["minecraft:spruce_standing_sign", -181], ["minecraft:spruce_wall_sign", -182], ["minecraft:stained_glass", 813], ["minecraft:stained_glass_pane", 814], ["minecraft:stained_hardened_clay", 744], ["minecraft:standing_banner", 176], ["minecraft:standing_sign", 63], ["minecraft:sticky_piston_arm_collision", -217], ["minecraft:stone_block_slab", 790], ["minecraft:stone_block_slab2", 791], ["minecraft:stone_block_slab3", 792], ["minecraft:stone_block_slab4", 793], ["minecraft:stone_brick_double_slab", -881], ["minecraft:stonebrick", 788], ["minecraft:stonecutter", 245], ["minecraft:sweet_berry_bush", -207], ["minecraft:tallgrass", 808], ["minecraft:torchflower_crop", -567], ["minecraft:trip_wire", 132], ["minecraft:tripwire", 132], ["minecraft:tube_coral_wall_fan", -135], ["minecraft:tuff_brick_double_slab", -756], ["minecraft:tuff_double_slab", -745], ["minecraft:underwater_tnt", -985], ["minecraft:underwater_torch", 239], ["minecraft:unknown", -305], ["minecraft:unlit_redstone_torch", 75], ["minecraft:unpowered_comparator", 149], ["minecraft:unpowered_repeater", 93], ["minecraft:wall_banner", 177], ["minecraft:wall_sign", 68], ["minecraft:warped_double_slab", -267], ["minecraft:warped_standing_sign", -251], ["minecraft:warped_wall_sign", -253], ["minecraft:water", 9], ["minecraft:waxed_double_cut_copper_slab", -372], ["minecraft:waxed_exposed_double_cut_copper_slab", -373], ["minecraft:waxed_oxidized_double_cut_copper_slab", -450], ["minecraft:waxed_weathered_double_cut_copper_slab", -374], ["minecraft:weathered_double_cut_copper_slab", -370], ["minecraft:wheat_plant", 59], ["minecraft:white_candle_cake", -430], ["minecraft:wood", 816], ["minecraft:wooden_slab", 803], ["minecraft:wool", 784], ["minecraft:written_book", 551], ["minecraft:yellow_candle_cake", -434]]);
var typeIdToDataId = new Map([["minecraft:antidote", 642 + 2 / 65536], ["minecraft:attached_melon_stem", 104 + 1 / 65536], ["minecraft:attached_pumpkin_stem", 103 + 1 / 65536], ["minecraft:awkward_arrow", 331 + 5 / 65536], ["minecraft:awkward_lingering_potion", 601 + 4 / 65536], ["minecraft:awkward_potion", 459 + 4 / 65536], ["minecraft:awkward_splash_potion", 600 + 4 / 65536], ["minecraft:barrel_closed", -203], ["minecraft:barrel_open", -203 + 1 / 65536], ["minecraft:beetroots_stage_0", 243], ["minecraft:beetroots_stage_1", 243 + 1 / 65536], ["minecraft:beetroots_stage_2", 243 + 2 / 65536], ["minecraft:beetroots_stage_3", 243 + 3 / 65536], ["minecraft:beetroots_stage_4", 243 + 4 / 65536], ["minecraft:beetroots_stage_5", 243 + 5 / 65536], ["minecraft:beetroots_stage_6", 243 + 6 / 65536], ["minecraft:beetroots_stage_7", 243 + 7 / 65536], ["minecraft:black_balloon", 641 + 15 / 65536], ["minecraft:black_banner", 605], ["minecraft:black_standing_banner", 175], ["minecraft:black_wall_banner", 176], ["minecraft:blue_balloon", 641 + 4 / 65536], ["minecraft:blue_banner", 605 + 4 / 65536], ["minecraft:blue_glowstick", 644 + 4 / 65536], ["minecraft:blue_sparkler", 643], ["minecraft:blue_standing_banner", 175 + 4 / 65536], ["minecraft:blue_wall_banner", 176 + 4 / 65536], ["minecraft:brown_balloon", 641 + 3 / 65536], ["minecraft:brown_banner", 605 + 3 / 65536], ["minecraft:brown_glowstick", 644 + 3 / 65536], ["minecraft:brown_mushroom_block_bit_0", 98], ["minecraft:brown_mushroom_block_bit_1", 98 + 1 / 65536], ["minecraft:brown_mushroom_block_bit_10", 98 + 10 / 65536], ["minecraft:brown_mushroom_block_bit_11", 98 + 11 / 65536], ["minecraft:brown_mushroom_block_bit_12", 98 + 12 / 65536], ["minecraft:brown_mushroom_block_bit_13", 98 + 13 / 65536], ["minecraft:brown_mushroom_block_bit_14", 98 + 14 / 65536], ["minecraft:brown_mushroom_block_bit_15", 98 + 15 / 65536], ["minecraft:brown_mushroom_block_bit_2", 98 + 2 / 65536], ["minecraft:brown_mushroom_block_bit_3", 98 + 3 / 65536], ["minecraft:brown_mushroom_block_bit_4", 98 + 4 / 65536], ["minecraft:brown_mushroom_block_bit_5", 98 + 5 / 65536], ["minecraft:brown_mushroom_block_bit_6", 98 + 6 / 65536], ["minecraft:brown_mushroom_block_bit_7", 98 + 7 / 65536], ["minecraft:brown_mushroom_block_bit_8", 98 + 8 / 65536], ["minecraft:brown_mushroom_block_bit_9", 98 + 9 / 65536], ["minecraft:brown_standing_banner", 175 + 3 / 65536], ["minecraft:brown_wall_banner", 176 + 3 / 65536], ["minecraft:cake_block_slice_0", 91], ["minecraft:cake_block_slice_1", 91 + 1 / 65536], ["minecraft:cake_block_slice_2", 91 + 2 / 65536], ["minecraft:cake_block_slice_3", 91 + 3 / 65536], ["minecraft:cake_block_slice_4", 91 + 4 / 65536], ["minecraft:cake_block_slice_5", 91 + 5 / 65536], ["minecraft:cake_block_slice_6", 91 + 6 / 65536], ["minecraft:carrots_stage_0", 140], ["minecraft:carrots_stage_1", 140 + 1 / 65536], ["minecraft:carrots_stage_2", 140 + 2 / 65536], ["minecraft:carrots_stage_3", 140 + 3 / 65536], ["minecraft:carrots_stage_4", 140 + 4 / 65536], ["minecraft:carrots_stage_5", 140 + 5 / 65536], ["minecraft:carrots_stage_6", 140 + 6 / 65536], ["minecraft:carrots_stage_7", 140 + 7 / 65536], ["minecraft:cocoa_stage_0", 126], ["minecraft:cocoa_stage_1", 126 + 1 / 65536], ["minecraft:cocoa_stage_2", 126 + 2 / 65536], ["minecraft:cocoa_stage_3", 126 + 3 / 65536], ["minecraft:compound_aluminum_oxide", 637 + 13 / 65536], ["minecraft:compound_black_beaker", 637 + 29 / 65536], ["minecraft:compound_blue_beaker", 637 + 26 / 65536], ["minecraft:compound_blue_bottle", 637 + 38 / 65536], ["minecraft:compound_blue_jar", 637 + 24 / 65536], ["minecraft:compound_boron_trioxide", 637 + 14 / 65536], ["minecraft:compound_calcium_bromide", 637 + 7 / 65536], ["minecraft:compound_charcoal", 637 + 11 / 65536], ["minecraft:compound_clear_beaker", 637 + 35 / 65536], ["minecraft:compound_garbage", 637 + 17 / 65536], ["minecraft:compound_glue", 637 + 27 / 65536], ["minecraft:compound_iron_sulfide", 637 + 4 / 65536], ["minecraft:compound_lithium_hydride", 637 + 5 / 65536], ["minecraft:compound_luminol", 637 + 10 / 65536], ["minecraft:compound_magnesium_nitrate", 637 + 3 / 65536], ["minecraft:compound_magnesium_oxide", 637 + 8 / 65536], ["minecraft:compound_polyethylene", 637 + 16 / 65536], ["minecraft:compound_salt", 637], ["minecraft:compound_soap", 637 + 15 / 65536], ["minecraft:compound_sodium_acetate", 637 + 9 / 65536], ["minecraft:compound_sodium_hydride", 637 + 6 / 65536], ["minecraft:compound_sodium_hydroxide", 637 + 2 / 65536], ["minecraft:compound_sodium_oxide", 637 + 1 / 65536], ["minecraft:compound_sugar", 637 + 12 / 65536], ["minecraft:compound_white_beaker", 637 + 28 / 65536], ["minecraft:compound_yellow_beaker", 637 + 31 / 65536], ["minecraft:conditional_chain_command_block", 188 + 8 / 65536], ["minecraft:conditional_command_block", 136 + 8 / 65536], ["minecraft:conditional_repeating_command_block", 187 + 8 / 65536], ["minecraft:cyan_balloon", 641 + 6 / 65536], ["minecraft:cyan_banner", 605 + 6 / 65536], ["minecraft:cyan_glowstick", 644 + 6 / 65536], ["minecraft:cyan_standing_banner", 175 + 6 / 65536], ["minecraft:cyan_wall_banner", 176 + 6 / 65536], ["minecraft:decay_arrow", 331 + 37 / 65536], ["minecraft:decay_lingering_potion", 601 + 36 / 65536], ["minecraft:decay_potion", 459 + 36 / 65536], ["minecraft:decay_splash_potion", 600 + 36 / 65536], ["minecraft:desert_village_map", 452 + 11 / 65536], ["minecraft:elixir", 642 + 3 / 65536], ["minecraft:eye_drops", 642], ["minecraft:filled_end_portal_frame", 119 + 4 / 65536], ["minecraft:fire_resistance_arrow", 331 + 13 / 65536], ["minecraft:fire_resistance_lingering_potion", 601 + 12 / 65536], ["minecraft:fire_resistance_potion", 459 + 12 / 65536], ["minecraft:fire_resistance_splash_potion", 600 + 12 / 65536], ["minecraft:gray_balloon", 641 + 8 / 65536], ["minecraft:gray_banner", 605 + 8 / 65536], ["minecraft:gray_glowstick", 644 + 8 / 65536], ["minecraft:gray_standing_banner", 175 + 8 / 65536], ["minecraft:gray_wall_banner", 176 + 8 / 65536], ["minecraft:green_balloon", 641 + 2 / 65536], ["minecraft:green_banner", 605 + 2 / 65536], ["minecraft:green_glowstick", 644 + 2 / 65536], ["minecraft:green_sparkler", 643 + 2 / 65536], ["minecraft:green_standing_banner", 175 + 2 / 65536], ["minecraft:green_wall_banner", 176 + 2 / 65536], ["minecraft:harming_arrow", 331 + 24 / 65536], ["minecraft:harming_lingering_potion", 601 + 23 / 65536], ["minecraft:harming_potion", 459 + 23 / 65536], ["minecraft:harming_splash_potion", 600 + 23 / 65536], ["minecraft:healing_arrow", 331 + 22 / 65536], ["minecraft:healing_lingering_potion", 601 + 21 / 65536], ["minecraft:healing_potion", 459 + 21 / 65536], ["minecraft:healing_splash_potion", 600 + 21 / 65536], ["minecraft:infestation_lingering_potion", 459 + 46 / 65536], ["minecraft:infestation_potion", 459 + 46 / 65536], ["minecraft:infestation_splash_potion", 459 + 46 / 65536], ["minecraft:jungle_village_map", 452 + 12 / 65536], ["minecraft:leaping_arrow", 331 + 9 / 65536], ["minecraft:leaping_lingering_potion", 601 + 8 / 65536], ["minecraft:leaping_potion", 459 + 8 / 65536], ["minecraft:leaping_splash_potion", 600 + 8 / 65536], ["minecraft:light_blue_balloon", 641 + 12 / 65536], ["minecraft:light_blue_banner", 605 + 12 / 65536], ["minecraft:light_blue_glowstick", 644 + 12 / 65536], ["minecraft:light_blue_standing_banner", 175 + 12 / 65536], ["minecraft:light_blue_wall_banner", 176 + 12 / 65536], ["minecraft:light_gray_balloon", 641 + 7 / 65536], ["minecraft:light_gray_banner", 605 + 7 / 65536], ["minecraft:light_gray_standing_banner", 175 + 7 / 65536], ["minecraft:light_gray_wall_banner", 176 + 7 / 65536], ["minecraft:lime_balloon", 641 + 10 / 65536], ["minecraft:lime_banner", 605 + 10 / 65536], ["minecraft:lime_glowstick", 644 + 10 / 65536], ["minecraft:lime_standing_banner", 175 + 10 / 65536], ["minecraft:lime_wall_banner", 176 + 10 / 65536], ["minecraft:lit_blue_glowstick", 644 + 36 / 65536], ["minecraft:lit_blue_sparkler", 643 + 32 / 65536], ["minecraft:lit_brown_glowstick", 644 + 35 / 65536], ["minecraft:lit_cyan_glowstick", 644 + 38 / 65536], ["minecraft:lit_gray_glowstick", 644 + 40 / 65536], ["minecraft:lit_green_glowstick", 644 + 34 / 65536], ["minecraft:lit_green_sparkler", 643 + 34 / 65536], ["minecraft:lit_light_blue_glowstick", 644 + 44 / 65536], ["minecraft:lit_lime_glowstick", 644 + 42 / 65536], ["minecraft:lit_magenta_glowstick", 644 + 45 / 65536], ["minecraft:lit_orange_glowstick", 644 + 46 / 65536], ["minecraft:lit_orange_sparkler", 643 + 46 / 65536], ["minecraft:lit_pink_glowstick", 644 + 41 / 65536], ["minecraft:lit_pink_sparker", 643 + 37 / 65536], ["minecraft:lit_purple_glowstick", 644 + 37 / 65536], ["minecraft:lit_red_glowstick", 644 + 39 / 65536], ["minecraft:lit_red_sparkler", 643 + 33 / 65536], ["minecraft:lit_white_glowstick", 644 + 47 / 65536], ["minecraft:lit_yellow_glowstick", 644 + 43 / 65536], ["minecraft:locator_map", 452 + 2 / 65536], ["minecraft:locked_map", 452 + 6 / 65536], ["minecraft:magenta_balloon", 641 + 13 / 65536], ["minecraft:magenta_banner", 605 + 13 / 65536], ["minecraft:magenta_glowstick", 644 + 13 / 65536], ["minecraft:magenta_standing_banner", 175 + 13 / 65536], ["minecraft:magenta_wall_banner", 176 + 13 / 65536], ["minecraft:mundane_arrow", 331 + 2 / 65536], ["minecraft:mundane_lingering_potion", 601 + 1 / 65536], ["minecraft:mundane_potion", 459 + 1 / 65536], ["minecraft:mundane_splash_potion", 600 + 1 / 65536], ["minecraft:nether_wart_plant_stage_0", 114], ["minecraft:nether_wart_plant_stage_1", 114 + 1 / 65536], ["minecraft:nether_wart_plant_stage_2", 114 + 2 / 65536], ["minecraft:nether_wart_plant_stage_3", 114 + 3 / 65536], ["minecraft:night_vision_arrow", 331 + 6 / 65536], ["minecraft:night_vision_lingering_potion", 601 + 5 / 65536], ["minecraft:night_vision_potion", 459 + 5 / 65536], ["minecraft:night_vision_splash_potion", 600 + 5 / 65536], ["minecraft:ocean_explorer_map", 452 + 3 / 65536], ["minecraft:oozing_lingering_potion", 459 + 45 / 65536], ["minecraft:oozing_potion", 459 + 45 / 65536], ["minecraft:oozing_splash_potion", 459 + 45 / 65536], ["minecraft:orange_balloon", 641 + 14 / 65536], ["minecraft:orange_banner", 605 + 14 / 65536], ["minecraft:orange_glowstick", 644 + 14 / 65536], ["minecraft:orange_sparkler", 643 + 14 / 65536], ["minecraft:orange_standing_banner", 175 + 14 / 65536], ["minecraft:orange_wall_banner", 176 + 14 / 65536], ["minecraft:pink_balloon", 641 + 9 / 65536], ["minecraft:pink_banner", 605 + 9 / 65536], ["minecraft:pink_glowstick", 644 + 9 / 65536], ["minecraft:pink_sparker", 643 + 5 / 65536], ["minecraft:pink_standing_banner", 175 + 9 / 65536], ["minecraft:pink_wall_banner", 176 + 9 / 65536], ["minecraft:plains_village_map", 452 + 9 / 65536], ["minecraft:poison_arrow", 331 + 26 / 65536], ["minecraft:poison_lingering_potion", 601 + 25 / 65536], ["minecraft:poison_potion", 459 + 25 / 65536], ["minecraft:poison_splash_potion", 600 + 25 / 65536], ["minecraft:potatoes_stage_0", 141], ["minecraft:potatoes_stage_1", 141 + 1 / 65536], ["minecraft:potatoes_stage_2", 141 + 2 / 65536], ["minecraft:potatoes_stage_3", 141 + 3 / 65536], ["minecraft:potatoes_stage_4", 141 + 4 / 65536], ["minecraft:potatoes_stage_5", 141 + 5 / 65536], ["minecraft:potatoes_stage_6", 141 + 6 / 65536], ["minecraft:potatoes_stage_7", 141 + 7 / 65536], ["minecraft:purple_balloon", 641 + 5 / 65536], ["minecraft:purple_banner", 605 + 5 / 65536], ["minecraft:purple_glowstick", 644 + 5 / 65536], ["minecraft:purple_standing_banner", 175 + 5 / 65536], ["minecraft:purple_wall_banner", 176 + 5 / 65536], ["minecraft:red_balloon", 641 + 1 / 65536], ["minecraft:red_banner", 605 + 1 / 65536], ["minecraft:red_glowstick", 644 + 7 / 65536], ["minecraft:red_mushroom_block_bit_0", 99], ["minecraft:red_mushroom_block_bit_1", 99 + 1 / 65536], ["minecraft:red_mushroom_block_bit_10", 99 + 10 / 65536], ["minecraft:red_mushroom_block_bit_11", 99 + 11 / 65536], ["minecraft:red_mushroom_block_bit_12", 99 + 12 / 65536], ["minecraft:red_mushroom_block_bit_13", 99 + 13 / 65536], ["minecraft:red_mushroom_block_bit_14", 99 + 14 / 65536], ["minecraft:red_mushroom_block_bit_15", 99 + 15 / 65536], ["minecraft:red_mushroom_block_bit_2", 99 + 2 / 65536], ["minecraft:red_mushroom_block_bit_3", 99 + 3 / 65536], ["minecraft:red_mushroom_block_bit_4", 99 + 4 / 65536], ["minecraft:red_mushroom_block_bit_5", 99 + 5 / 65536], ["minecraft:red_mushroom_block_bit_6", 99 + 6 / 65536], ["minecraft:red_mushroom_block_bit_7", 99 + 7 / 65536], ["minecraft:red_mushroom_block_bit_8", 99 + 8 / 65536], ["minecraft:red_mushroom_block_bit_9", 99 + 9 / 65536], ["minecraft:red_sparkler", 643 + 1 / 65536], ["minecraft:red_standing_banner", 175 + 1 / 65536], ["minecraft:red_wall_banner", 176 + 1 / 65536], ["minecraft:redstone_wire_power_0", 54], ["minecraft:redstone_wire_power_1", 54 + 1 / 65536], ["minecraft:redstone_wire_power_10", 54 + 10 / 65536], ["minecraft:redstone_wire_power_11", 54 + 11 / 65536], ["minecraft:redstone_wire_power_12", 54 + 12 / 65536], ["minecraft:redstone_wire_power_13", 54 + 13 / 65536], ["minecraft:redstone_wire_power_14", 54 + 14 / 65536], ["minecraft:redstone_wire_power_15", 54 + 15 / 65536], ["minecraft:redstone_wire_power_2", 54 + 2 / 65536], ["minecraft:redstone_wire_power_3", 54 + 3 / 65536], ["minecraft:redstone_wire_power_4", 54 + 4 / 65536], ["minecraft:redstone_wire_power_5", 54 + 5 / 65536], ["minecraft:redstone_wire_power_6", 54 + 6 / 65536], ["minecraft:redstone_wire_power_7", 54 + 7 / 65536], ["minecraft:redstone_wire_power_8", 54 + 8 / 65536], ["minecraft:redstone_wire_power_9", 54 + 9 / 65536], ["minecraft:regeneration_arrow", 331 + 29 / 65536], ["minecraft:regeneration_lingering_potion", 601 + 28 / 65536], ["minecraft:regeneration_potion", 459 + 28 / 65536], ["minecraft:regeneration_splash_potion", 600 + 28 / 65536], ["minecraft:respawn_anchor_charge_0", -272], ["minecraft:respawn_anchor_charge_1", -272 + 1 / 65536], ["minecraft:respawn_anchor_charge_2", -272 + 2 / 65536], ["minecraft:respawn_anchor_charge_3", -272 + 3 / 65536], ["minecraft:respawn_anchor_charge_4", -272 + 4 / 65536], ["minecraft:savanna_village_map", 452 + 10 / 65536], ["minecraft:slow_falling_arrow", 331 + 41 / 65536], ["minecraft:slow_falling_lingering_potion", 601 + 40 / 65536], ["minecraft:slow_falling_potion", 459 + 40 / 65536], ["minecraft:slow_falling_splash_potion", 600 + 40 / 65536], ["minecraft:slowness_arrow", 331 + 18 / 65536], ["minecraft:slowness_lingering_potion", 601 + 17 / 65536], ["minecraft:slowness_potion", 459 + 17 / 65536], ["minecraft:slowness_splash_potion", 600 + 17 / 65536], ["minecraft:snow_layer_1", 79], ["minecraft:snow_layer_2", 79 + 1 / 65536], ["minecraft:snow_layer_3", 79 + 2 / 65536], ["minecraft:snow_layer_4", 79 + 3 / 65536], ["minecraft:snow_layer_5", 79 + 4 / 65536], ["minecraft:snow_layer_6", 79 + 5 / 65536], ["minecraft:snow_layer_7", 79 + 6 / 65536], ["minecraft:snow_layer_8", 79 + 7 / 65536], ["minecraft:snowy_village_map", 452 + 7 / 65536], ["minecraft:splash_arrow", 331 + 1 / 65536], ["minecraft:strength_arrow", 331 + 32 / 65536], ["minecraft:strength_lingering_potion", 601 + 31 / 65536], ["minecraft:strength_potion", 459 + 31 / 65536], ["minecraft:strength_splash_potion", 600 + 31 / 65536], ["minecraft:structure_block_corner", 251 + 3 / 65536], ["minecraft:structure_block_data", 251], ["minecraft:structure_block_export", 251 + 5 / 65536], ["minecraft:structure_block_invalid", 251 + 4 / 65536], ["minecraft:structure_block_load", 251 + 2 / 65536], ["minecraft:structure_block_save", 251 + 1 / 65536], ["minecraft:swamp_village_map", 452 + 13 / 65536], ["minecraft:swiftness_arrow", 331 + 15 / 65536], ["minecraft:swiftness_lingering_potion", 601 + 14 / 65536], ["minecraft:swiftness_potion", 459 + 14 / 65536], ["minecraft:swiftness_splash_potion", 600 + 14 / 65536], ["minecraft:taiga_village_map", 452 + 8 / 65536], ["minecraft:thick_arrow", 331 + 4 / 65536], ["minecraft:thick_lingering_potion", 601 + 3 / 65536], ["minecraft:thick_potion", 459 + 3 / 65536], ["minecraft:thick_splash_potion", 600 + 3 / 65536], ["minecraft:tonic", 642 + 1 / 65536], ["minecraft:treasure_map", 452 + 5 / 65536], ["minecraft:turtle_master_arrow", 331 + 38 / 65536], ["minecraft:turtle_master_lingering_potion", 601 + 37 / 65536], ["minecraft:turtle_master_potion", 459 + 37 / 65536], ["minecraft:turtle_master_splash_potion", 600 + 37 / 65536], ["minecraft:water_breathing_arrow", 331 + 20 / 65536], ["minecraft:water_breathing_lingering_potion", 601 + 19 / 65536], ["minecraft:water_breathing_potion", 459 + 19 / 65536], ["minecraft:water_breathing_splash_potion", 600 + 19 / 65536], ["minecraft:weakness_arrow", 331 + 35 / 65536], ["minecraft:weakness_lingering_potion", 601 + 34 / 65536], ["minecraft:weakness_potion", 459 + 34 / 65536], ["minecraft:weakness_splash_potion", 600 + 34 / 65536], ["minecraft:weaving_lingering_potion", 459 + 44 / 65536], ["minecraft:weaving_potion", 459 + 44 / 65536], ["minecraft:weaving_splash_potion", 459 + 44 / 65536], ["minecraft:wet_farmland", 59 + 1 / 65536], ["minecraft:wheat_plant_stage_0", 58], ["minecraft:wheat_plant_stage_1", 58 + 1 / 65536], ["minecraft:wheat_plant_stage_2", 58 + 2 / 65536], ["minecraft:wheat_plant_stage_3", 58 + 3 / 65536], ["minecraft:wheat_plant_stage_4", 58 + 4 / 65536], ["minecraft:wheat_plant_stage_5", 58 + 5 / 65536], ["minecraft:wheat_plant_stage_6", 58 + 6 / 65536], ["minecraft:wheat_plant_stage_7", 58 + 7 / 65536], ["minecraft:white_balloon", 641], ["minecraft:white_banner", 605 + 15 / 65536], ["minecraft:white_glowstick", 644 + 15 / 65536], ["minecraft:white_standing_banner", 175 + 15 / 65536], ["minecraft:white_wall_banner", 176 + 15 / 65536], ["minecraft:wind_charged_lingering_potion", 459 + 43 / 65536], ["minecraft:wind_charged_potion", 459 + 43 / 65536], ["minecraft:wind_charged_splash_potion", 459 + 43 / 65536], ["minecraft:woodland_explorer_map", 452 + 4 / 65536], ["minecraft:yellow_balloon", 641 + 11 / 65536], ["minecraft:yellow_banner", 605 + 11 / 65536], ["minecraft:yellow_glowstick", 644 + 11 / 65536], ["minecraft:yellow_standing_banner", 175 + 11 / 65536], ["minecraft:yellow_wall_banner", 176 + 11 / 65536], ["minecraft:white_bed", 450], ["minecraft:orange_bed", 450 + 1 / 65536], ["minecraft:magenta_bed", 450 + 2 / 65536], ["minecraft:light_blue_bed", 450 + 3 / 65536], ["minecraft:yellow_bed", 450 + 4 / 65536], ["minecraft:lime_bed", 450 + 5 / 65536], ["minecraft:pink_bed", 450 + 6 / 65536], ["minecraft:gray_bed", 450 + 7 / 65536], ["minecraft:light_gray_bed", 450 + 8 / 65536], ["minecraft:cyan_bed", 450 + 9 / 65536], ["minecraft:purple_bed", 450 + 10 / 65536], ["minecraft:blue_bed", 450 + 11 / 65536], ["minecraft:brown_bed", 450 + 12 / 65536], ["minecraft:green_bed", 450 + 13 / 65536], ["minecraft:red_bed", 450 + 14 / 65536], ["minecraft:black_bed", 450 + 15 / 65536]]);
var CUSTOM_ITEM_OFFSET = {
  v1: {
    count: 0,
    timestamp: Date.now(),
    description: "Initial version without custom items"
  }
};
function getTotalCustomItemOffset() {
  const _0x3ac239 = _0x295733;
  return Object[_0x3ac239(290)](CUSTOM_ITEM_OFFSET)[_0x3ac239(285)]((_0x26db70, _0x42bfc2) => _0x26db70 + _0x42bfc2.count, 0);
}
function calculateSafeItemID(_0x538cfe, _0x320763) {
  if (_0x538cfe === void 0) return void 0;
  const _0x5d190d = getTotalCustomItemOffset(),
    _0xcd0e7b = _0x5d190d > 0 ? _0x5d190d : _0x320763;
  if (_0x538cfe < 256) return _0x538cfe;
  return _0x538cfe + _0xcd0e7b;
}
function calculateFinalTextureID(_0x52b4a2, _0x3e0e66, _0x3e5ad0 = ![]) {
  if (_0x52b4a2 === void 0) return void 0;
  const _0x42d2a6 = getTotalCustomItemOffset(),
    _0x5c0a10 = _0x42d2a6 > 0 ? _0x42d2a6 : _0x3e0e66,
    _0x5c6bdc = _0x52b4a2 < 256 ? _0x52b4a2 : _0x52b4a2 + _0x5c0a10;
  return _0x5c6bdc * 65536 + (_0x3e5ad0 ? 32768 : 0);
}
function logOffsetState() {
  const _0x71c73 = _0x295733,
    _0x50434b = getTotalCustomItemOffset();
  return log.i(_0x71c73(302), _0x71c73(287), {
    totalOffset: _0x50434b,
    history: CUSTOM_ITEM_OFFSET
  }), _0x50434b;
}
var _titleText, _buttonArray, _inventoryOverrides, _titleText2, _buttonArray2;
import { ActionFormData } from "@minecraft/server-ui";
function getDisplayTexture(_0x121f4e) {
  const _0x49b86a = _0x5058;
  if (custom_content_keys[_0x49b86a(258)](_0x121f4e)) return custom_content[_0x121f4e].texture;
  if (_0x121f4e[_0x49b86a(270)]("/") || _0x121f4e[_0x49b86a(270)](".png")) return _0x121f4e;
  const _0x3cd324 = _0x121f4e,
    _0x393499 = typeIdToDataId[_0x49b86a(258)](_0x3cd324) || typeIdToID[_0x49b86a(258)](_0x3cd324);
  if (!_0x393499) return _0x49b86a(212);
  return _0x3cd324;
}
function formatLocalizationKey(_0x323f85) {
  const _0x3d5148 = _0x5058,
    _0x908ef0 = {
      YZZby: function (_0x1925c6, _0x5c627f) {
        return _0x1925c6 === _0x5c627f;
      },
      dFqLX: "stainedHardenedClay",
      aBxew: "Terracotta",
      QYUxc: function (_0x3beeb1, _0x137642) {
        return _0x3beeb1 + _0x137642;
      }
    };
  if (!_0x323f85) return null;
  try {
    const _0x2cf7bb = _0x323f85.match(/%?potion\.(\w+)(?:\.(splash|linger))?\.name/);
    if (_0x2cf7bb) {
      const _0x5593f4 = _0x2cf7bb[1],
        _0x2470d9 = _0x2cf7bb[2],
        _0x295c7a = _0x5593f4.replace(/([A-Z])/g, _0x3d5148(186))[_0x3d5148(238)](" ")[_0x3d5148(314)](_0x5da26c => _0x5da26c.length > 0).map(_0x903109 => _0x903109.charAt(0)[_0x3d5148(292)]() + _0x903109[_0x3d5148(329)](1)[_0x3d5148(324)]())[_0x3d5148(155)](" ");
      if (_0x2470d9 === _0x3d5148(166)) return _0x3d5148(325) + _0x295c7a;else return _0x2470d9 === "linger" ? "Lingering Potion of " + _0x295c7a : "Potion of " + _0x295c7a;
    }
    const _0xde8d7b = _0x323f85[_0x3d5148(301)](/^%?item\.(\w+)\.(\w+)\.name$/);
    if (_0xde8d7b) {
      if (_0x908ef0.YZZby(_0x3d5148(347), "VJrgX")) {
        const _0x5d68cd = _0xde8d7b[1],
          _0x4d51d4 = _0xde8d7b[2],
          _0x125d9c = _0x4d51d4[_0x3d5148(280)](/([A-Z])/g, " $1").split(" ")[_0x3d5148(314)](_0x553cfc => _0x553cfc[_0x3d5148(185)] > 0)[_0x3d5148(282)](_0x4e4cda => _0x4e4cda[_0x3d5148(356)](0)[_0x3d5148(292)]() + _0x4e4cda.slice(1)[_0x3d5148(324)]())[_0x3d5148(155)](" "),
          _0x17d28d = _0x5d68cd.charAt(0)[_0x3d5148(292)]() + _0x5d68cd[_0x3d5148(329)](1);
        return _0x125d9c + " " + _0x17d28d;
      } else _0xb84ace = _0x1842be.charAt(0)[_0x3d5148(292)]() + _0x14a8f6[_0x3d5148(329)](1);
    }
    const _0x51ec1e = _0x323f85[_0x3d5148(301)](/^%?tile\.(\w+)\.(\w+)\.name$/);
    if (_0x51ec1e) {
      const _0x2fe208 = _0x51ec1e[1],
        _0x103ce1 = _0x51ec1e[2],
        _0x1c55db = _0x103ce1[_0x3d5148(280)](/([A-Z])/g, _0x3d5148(186))[_0x3d5148(238)](" ")[_0x3d5148(314)](_0x1d0c21 => _0x1d0c21[_0x3d5148(185)] > 0).map(_0x3d0432 => _0x3d0432[_0x3d5148(356)](0).toUpperCase() + _0x3d0432[_0x3d5148(329)](1)[_0x3d5148(324)]())[_0x3d5148(155)](" ");
      let _0x98c8f2 = _0x2fe208;
      return _0x908ef0[_0x3d5148(340)](_0x2fe208, _0x908ef0.dFqLX) ? _0x98c8f2 = _0x908ef0[_0x3d5148(359)] : _0x98c8f2 = _0x908ef0[_0x3d5148(242)](_0x2fe208.charAt(0).toUpperCase(), _0x2fe208.slice(1)), _0x1c55db + " " + _0x98c8f2;
    }
    let _0x7b245e = _0x323f85.replace(/^%?item\./, "").replace(/^%?tile\./, "").replace(/^%?potion\./, "")[_0x3d5148(280)](/\.name$/, "");
    return _0x7b245e = _0x7b245e[_0x3d5148(280)](/_/g, " ")[_0x3d5148(280)](/\./g, " "), _0x7b245e[_0x3d5148(238)](" ")[_0x3d5148(314)](_0x49cdbf => _0x49cdbf[_0x3d5148(185)] > 0)[_0x3d5148(282)](_0x6f1d32 => _0x6f1d32[_0x3d5148(356)](0).toUpperCase() + _0x6f1d32[_0x3d5148(329)](1)).join(" ");
  } catch (_0x4daa61) {
    return null;
  }
}
function getVariantTypeId(_0x134dc3) {
  const _0x2833f0 = _0x5058,
    _0x49bcda = {
      tTooD: function (_0x326d32, _0x2a7605) {
        return _0x326d32 === _0x2a7605;
      },
      wZrBv: _0x2833f0(209),
      aUayf: function (_0xf628a4, _0x3b06d4) {
        return _0xf628a4 === _0x3b06d4;
      },
      orbjN: function (_0x19c625, _0x186356) {
        return _0x19c625 === _0x186356;
      },
      wtinM: "minecraft:potion",
      XtzIm: _0x2833f0(218),
      JHEMD: function (_0x2fe901, _0x45b276) {
        return _0x2fe901 === _0x45b276;
      }
    };
  if (!_0x134dc3 || !_0x134dc3[_0x2833f0(266)]) return null;
  try {
    const _0x163c44 = _0x134dc3[_0x2833f0(266)],
      _0x29abbe = _0x134dc3.localizationKey;
    if (!_0x29abbe) return _0x163c44;
    if (_0x163c44 === _0x2833f0(189)) {
      const _0x151d18 = _0x29abbe[_0x2833f0(301)](/item\.bed\.(\w+)\.name/);
      if (_0x151d18) {
        const _0x1d852b = _0x151d18[1];
        return _0x2833f0(173) + _0x1d852b + _0x2833f0(196);
      }
    }
    if (_0x49bcda[_0x2833f0(181)](_0x163c44, "minecraft:banner")) {
      const _0x3e1a28 = _0x29abbe[_0x2833f0(301)](/item\.banner\.(\w+)\.name/);
      if (_0x3e1a28) {
        let _0xdf9fa9 = _0x3e1a28[1];
        return _0xdf9fa9 = _0xdf9fa9[_0x2833f0(280)](/([A-Z])/g, _0x49bcda.wZrBv)[_0x2833f0(324)](), _0x2833f0(173) + _0xdf9fa9 + _0x2833f0(297);
      }
    }
    if (_0x163c44 === _0x2833f0(337)) {
      const _0x18c16d = _0x29abbe.match(/item\.wool\.(\w+)\.name/);
      if (_0x18c16d) {
        const _0x193758 = _0x18c16d[1];
        return _0x2833f0(173) + _0x193758 + _0x2833f0(341);
      }
    }
    if (_0x163c44 === _0x2833f0(293)) {
      const _0x9afd7e = _0x29abbe.match(/item\.carpet\.(\w+)\.name/);
      if (_0x9afd7e) {
        const _0x3548b5 = _0x9afd7e[1];
        return _0x2833f0(173) + _0x3548b5 + _0x2833f0(283);
      }
    }
    if (_0x49bcda.aUayf(_0x163c44, _0x2833f0(251))) {
      const _0x6db0e0 = _0x29abbe.match(/item\.dye\.(\w+)\.name/);
      if (_0x6db0e0) {
        const _0x5d964 = _0x6db0e0[1];
        return _0x2833f0(173) + _0x5d964 + "_dye";
      }
    }
    if (_0x163c44 === _0x2833f0(176)) {
      const _0x1c44ba = _0x29abbe[_0x2833f0(301)](/tile\.concrete\.(\w+)\.name/);
      if (_0x1c44ba) {
        const _0x461f72 = _0x1c44ba[1];
        return _0x2833f0(173) + _0x461f72 + _0x2833f0(237);
      }
    }
    if (_0x163c44 === _0x2833f0(360) || _0x163c44 === _0x2833f0(246)) {
      const _0x80d3e4 = _0x29abbe[_0x2833f0(301)](/tile\.stainedHardenedClay\.(\w+)\.name/);
      if (_0x80d3e4) {
        const _0x3fd3aa = _0x80d3e4[1];
        return _0x2833f0(173) + _0x3fd3aa + "_terracotta";
      }
    }
    if (_0x49bcda.orbjN(_0x163c44, _0x49bcda[_0x2833f0(312)]) || _0x163c44 === _0x2833f0(344) || _0x163c44 === _0x49bcda[_0x2833f0(317)]) {
      const _0x52e722 = _0x29abbe[_0x2833f0(301)](/%?potion\.(\w+)(?:\.(splash|linger))?\.name/);
      if (_0x52e722) {
        const _0x223fa7 = _0x52e722[1],
          _0x3531c4 = _0x52e722[2],
          _0x17e9d9 = _0x223fa7.replace(/([A-Z])/g, _0x2833f0(209)).toLowerCase();
        if (_0x49bcda.JHEMD(_0x3531c4, _0x2833f0(166))) {
          if (_0x2833f0(197) === _0x2833f0(197)) return _0x2833f0(173) + _0x17e9d9 + _0x2833f0(243);else try {
            if (_0x34d540.localizationKey) {
              const _0x588ecb = _0x45998a(_0x46d4db[_0x2833f0(265)]);
              if (_0x588ecb) return _0x588ecb;
            }
          } catch (_0x4fe89b) {}
        } else return _0x3531c4 === "linger" ? "minecraft:" + _0x17e9d9 + "_lingering_potion" : "minecraft:" + _0x17e9d9 + _0x2833f0(170);
      }
    }
    return _0x163c44;
  } catch (_0x1224c6) {
    return _0x134dc3[_0x2833f0(266)];
  }
}
function getItemDisplayName(_0x24ea7a) {
  const _0x32266e = _0x5058,
    _0x3f33a4 = {
      WfmLT: _0x32266e(220),
      oBWVI: _0x32266e(189),
      zGrqF: "minecraft:banner",
      FFYBx: _0x32266e(319)
    };
  if (!_0x24ea7a) return _0x3f33a4[_0x32266e(342)];
  if (_0x24ea7a[_0x32266e(169)] && _0x24ea7a.nameTag.trim() !== "") return _0x24ea7a[_0x32266e(169)];
  const _0x4276ca = [_0x3f33a4[_0x32266e(308)], _0x3f33a4[_0x32266e(224)], _0x32266e(337), _0x32266e(293), _0x32266e(251), _0x32266e(176), "minecraft:stained_hardened_clay", "minecraft:terracotta", "minecraft:potion", _0x32266e(344), "minecraft:lingering_potion"],
    _0x1f4f7b = _0x4276ca[_0x32266e(270)](_0x24ea7a[_0x32266e(266)]);
  if (_0x1f4f7b) try {
    if (_0x24ea7a[_0x32266e(265)]) {
      if (_0x32266e(319) !== _0x3f33a4[_0x32266e(267)]) _0x454e27.rawtext[_0x32266e(253)]({
        text: _0x43065c
      });else {
        const _0x3053f0 = formatLocalizationKey(_0x24ea7a[_0x32266e(265)]);
        if (_0x3053f0) return _0x3053f0;
      }
    }
  } catch (_0x15100a) {}
  try {
    if (!_0x24ea7a[_0x32266e(266)]) return _0x32266e(220);
    return _0x24ea7a.typeId[_0x32266e(280)](/minecraft:/, "").replace(/_/g, " ")[_0x32266e(238)](" ").map(_0x569391 => _0x569391[_0x32266e(356)](0).toUpperCase() + _0x569391[_0x32266e(329)](1))[_0x32266e(155)](" ");
  } catch (_0x37a769) {
    return _0x32266e(220);
  }
}
function getEnchantmentLore(_0x6d9c9f) {
  const _0x247664 = _0x5058,
    _0x31102c = {
      mOBDw: _0x247664(207)
    };
  if (!_0x6d9c9f) return [];
  const _0x529e73 = _0x6d9c9f.getComponent("enchantable");
  if (!_0x529e73 || !_0x529e73[_0x247664(219)]) return [];
  const _0xac6bb0 = _0x529e73[_0x247664(219)]();
  if (_0xac6bb0[_0x247664(185)] === 0) return [];
  const _0x12a632 = [],
    _0x294c7b = _0x2cc14c => {
      const _0x4379b2 = _0x247664,
        _0x17c09a = {
          1: "I",
          2: "II",
          3: _0x31102c[_0x4379b2(336)],
          4: "IV",
          5: "V",
          6: "VI",
          7: _0x4379b2(223),
          8: "VIII",
          9: "IX",
          10: "X"
        };
      return _0x17c09a[_0x2cc14c] || String(_0x2cc14c);
    },
    _0x2331bc = _0x45f0b5 => {
      const _0x5e9988 = _0x247664,
        _0x3ae3a3 = _0x45f0b5[_0x5e9988(280)](/^minecraft:/, "").replace(/_/g, " ");
      return _0x3ae3a3[_0x5e9988(280)](/(^\w|\s\w)/g, _0x4b1e9b => _0x4b1e9b[_0x5e9988(292)]());
    };
  for (const _0x472b16 of _0xac6bb0) {
    const _0x30f771 = _0x2331bc(_0x472b16[_0x247664(291)].id),
      _0x17c5bf = _0x472b16[_0x247664(192)],
      _0x13db17 = _0x17c5bf > 1 ? " " + _0x294c7b(_0x17c5bf) : "",
      _0x2e9944 = _0x472b16.type.id[_0x247664(270)](_0x247664(235)),
      _0x4c2063 = _0x2e9944 ? "\xA7c" : "\xA79";
    _0x12a632[_0x247664(253)]("" + _0x4c2063 + _0x30f771 + _0x13db17);
  }
  return _0x12a632;
}
function getEquipmentSlotName(_0x24d61d) {
  const _0x1e1f8b = _0x5058,
    _0x5b8a6b = {
      lOTfd: _0x1e1f8b(307),
      IswyZ: _0x1e1f8b(226),
      lxnIb: _0x1e1f8b(322)
    };
  if (!_0x24d61d) return null;
  const _0x182a63 = _0x24d61d[_0x1e1f8b(324)]();
  if (_0x182a63.includes(_0x1e1f8b(262)) || _0x182a63.includes("axe") || _0x182a63[_0x1e1f8b(270)](_0x5b8a6b[_0x1e1f8b(313)]) || _0x182a63[_0x1e1f8b(270)](_0x5b8a6b[_0x1e1f8b(272)]) || _0x182a63[_0x1e1f8b(270)]("hoe") || _0x182a63[_0x1e1f8b(270)](_0x1e1f8b(296)) || _0x182a63.includes(_0x5b8a6b.lxnIb) || _0x182a63.includes(_0x1e1f8b(330))) return "mainhand";
  if (_0x182a63.includes(_0x1e1f8b(163)) || _0x182a63[_0x1e1f8b(270)]("_head")) return _0x1e1f8b(236);
  if (_0x182a63.includes(_0x1e1f8b(252)) || _0x182a63[_0x1e1f8b(270)]("_chest")) return "chest";
  if (_0x182a63.includes(_0x1e1f8b(309)) || _0x182a63[_0x1e1f8b(270)](_0x1e1f8b(203))) return _0x1e1f8b(179);
  if (_0x182a63[_0x1e1f8b(270)](_0x1e1f8b(247)) || _0x182a63.includes(_0x1e1f8b(244))) return _0x1e1f8b(193);
  return null;
}
var WEAPON_DAMAGE = {
  "minecraft:wooden_sword": 4,
  "minecraft:golden_sword": 4,
  "minecraft:stone_sword": 5,
  "minecraft:iron_sword": 6,
  "minecraft:diamond_sword": 7,
  "minecraft:netherite_sword": 8,
  "minecraft:wooden_axe": 3,
  "minecraft:golden_axe": 3,
  "minecraft:stone_axe": 4,
  "minecraft:iron_axe": 5,
  "minecraft:diamond_axe": 6,
  "minecraft:netherite_axe": 7,
  "minecraft:wooden_pickaxe": 2,
  "minecraft:golden_pickaxe": 2,
  "minecraft:stone_pickaxe": 3,
  "minecraft:iron_pickaxe": 4,
  "minecraft:diamond_pickaxe": 5,
  "minecraft:netherite_pickaxe": 6,
  "minecraft:wooden_shovel": 2,
  "minecraft:golden_shovel": 2,
  "minecraft:stone_shovel": 3,
  "minecraft:iron_shovel": 4,
  "minecraft:diamond_shovel": 5,
  "minecraft:netherite_shovel": 6,
  "minecraft:wooden_hoe": 1,
  "minecraft:golden_hoe": 1,
  "minecraft:stone_hoe": 1,
  "minecraft:iron_hoe": 1,
  "minecraft:diamond_hoe": 1,
  "minecraft:netherite_hoe": 1,
  "minecraft:trident": 8,
  "minecraft:wooden_spear": 2,
  "minecraft:stone_spear": 3,
  "minecraft:copper_spear": 3,
  "minecraft:golden_spear": 2,
  "minecraft:iron_spear": 4,
  "minecraft:diamond_spear": 4,
  "minecraft:netherite_spear": 5,
  "minecraft:mace": 6
};
function getAttributeModifiers(_0xc97cdf) {
  const _0x123e3a = _0x5058,
    _0x23a3a6 = {
      oZbPs: function (_0x5566a0, _0x459517) {
        return _0x5566a0 > _0x459517;
      },
      CIViP: _0x123e3a(346),
      GvUvi: _0x123e3a(339),
      oYoqY: _0x123e3a(164),
      QYVIj: function (_0x10d3e9, _0x7b6b12) {
        return _0x10d3e9 === _0x7b6b12;
      },
      rIZgi: function (_0x213b54, _0x3795c3) {
        return _0x213b54 + _0x3795c3;
      },
      ZsSnM: _0x123e3a(214)
    };
  if (!_0xc97cdf) return [];
  const _0x3cd79f = [],
    _0x6be616 = _0xc97cdf.typeId,
    _0x456fe1 = getEquipmentSlotName(_0x6be616);
  if (!_0x456fe1) return [];
  try {
    if (_0x456fe1 === "mainhand") {
      _0x3cd79f.push("\xA77When in Main Hand:");
      let _0x5d7c1f = WEAPON_DAMAGE[_0x6be616] || 1;
      const _0x49f903 = _0xc97cdf.getComponent(_0x123e3a(357));
      if (_0x49f903) {
        const _0xc957a = _0x49f903[_0x123e3a(335)](_0x123e3a(201));
        if (_0xc957a) {
          if ("jsdwd" === _0x23a3a6[_0x123e3a(351)]) {
            const _0x359da8 = _0x415f83[_0x123e3a(314)](_0x8f039c => {
              const _0x3b2e7a = _0x123e3a;
              return !_0x8f039c[_0x3b2e7a(324)]()[_0x3b2e7a(270)](_0x3b2e7a(157));
            });
            _0x23a3a6[_0x123e3a(222)](_0x359da8[_0x123e3a(185)], 0) && (_0x2e67ba.push(""), _0x2d187c[_0x123e3a(253)](..._0x359da8));
          } else _0x5d7c1f += 1.25 * _0xc957a[_0x123e3a(192)];
        }
      }
      _0x5d7c1f = Math[_0x123e3a(320)](_0x5d7c1f * 100) / 100, _0x3cd79f[_0x123e3a(253)]("\xA72 +" + _0x5d7c1f + _0x123e3a(161));
    }
    if (["head", _0x123e3a(159), _0x123e3a(179), "feet"][_0x123e3a(270)](_0x456fe1)) {
      const _0x30257a = _0xc97cdf.getComponent("minecraft:armor");
      if (_0x30257a) {
        const _0x3921d5 = {
            head: _0x23a3a6.GvUvi,
            chest: _0x123e3a(164),
            legs: _0x123e3a(240),
            feet: _0x123e3a(184)
          }[_0x456fe1] || _0x23a3a6[_0x123e3a(210)],
          _0x4fd88d = _0x23a3a6[_0x123e3a(271)](_0x456fe1, "chest") ? _0x123e3a(164) : _0x23a3a6[_0x123e3a(215)](_0x456fe1.charAt(0)[_0x123e3a(292)](), _0x456fe1[_0x123e3a(329)](1));
        _0x3cd79f.push(_0x123e3a(304) + _0x4fd88d + ":");
        const _0x52e39b = _0x30257a.protection || 0;
        _0x23a3a6[_0x123e3a(222)](_0x52e39b, 0) && _0x3cd79f[_0x123e3a(253)](_0x123e3a(327) + _0x52e39b + _0x123e3a(208));
        let _0x5495ec = 0;
        if (_0x6be616[_0x123e3a(270)](_0x123e3a(214))) _0x5495ec = 3;else {
          if (_0x6be616[_0x123e3a(270)](_0x123e3a(328))) _0x5495ec = 2;
        }
        _0x5495ec > 0 && _0x3cd79f[_0x123e3a(253)]("\xA72 +" + _0x5495ec + " Armor Toughness"), _0x6be616[_0x123e3a(270)](_0x23a3a6.ZsSnM) && _0x3cd79f[_0x123e3a(253)]("\xA72 +1 Knockback Resistance");
      }
    }
  } catch (_0x1b1593) {}
  return _0x3cd79f;
}
function getDurabilityLore(_0x232a76) {
  const _0x3042af = _0x5058;
  if (!_0x232a76) return [];
  try {
    const _0x5033d8 = _0x232a76.getComponent(_0x3042af(199));
    if (!_0x5033d8) return [];
    const _0x146b5c = _0x5033d8[_0x3042af(167)] - _0x5033d8[_0x3042af(289)],
      _0x3596e6 = _0x5033d8.maxDurability;
    return [_0x3042af(300) + _0x146b5c + " / " + _0x3596e6];
  } catch (_0x387b72) {
    return [];
  }
}
function getPotionLore(_0x3509f7) {
  const _0x4b6829 = _0x5058,
    _0x5537d8 = {
      AOnbW: function (_0x2bb3e4, _0x1bc94f) {
        return _0x2bb3e4 / _0x1bc94f;
      },
      Tyzgt: _0x4b6829(245),
      UZvNV: _0x4b6829(303),
      iVhcv: "absorption",
      AAZAD: _0x4b6829(288),
      SccQF: _0x4b6829(274)
    };
  if (!_0x3509f7) return [];
  try {
    const _0x4688eb = _0x3509f7[_0x4b6829(171)]("minecraft:potion");
    if (!_0x4688eb || !_0x4688eb[_0x4b6829(211)]) return [];
    const _0x2fc7f4 = [],
      _0x5ee616 = _0x4688eb.potionEffectType,
      _0x385bcf = _0x5ee616.id || _0x5ee616[_0x4b6829(273)] || "",
      _0xd6b1cc = _0x5ee616.durationTicks || 0;
    if (!_0x385bcf) return [];
    let _0x30e162 = _0x385bcf[_0x4b6829(280)](_0x4b6829(173), "").replace(/_/g, " ");
    _0x30e162 = _0x30e162[_0x4b6829(280)](/^(long|strong|extended|enhanced)\s+/, ""), _0x30e162 = _0x30e162[_0x4b6829(238)](" ")[_0x4b6829(282)](_0x4c4964 => _0x4c4964[_0x4b6829(356)](0)[_0x4b6829(292)]() + _0x4c4964[_0x4b6829(329)](1))[_0x4b6829(155)](" ");
    const _0x408624 = Math[_0x4b6829(298)](_0x5537d8[_0x4b6829(191)](_0xd6b1cc, 20)),
      _0x3301b7 = Math[_0x4b6829(298)](_0x408624 / 60),
      _0x51078c = _0x408624 % 60;
    let _0x4ae8bc = "";
    _0x3301b7 > 0 ? _0x4ae8bc = _0x3301b7 + ":" + _0x51078c.toString()[_0x4b6829(230)](2, "0") : _0x4ae8bc = "0:" + _0x51078c[_0x4b6829(229)]()[_0x4b6829(230)](2, "0");
    const _0xb2ef77 = ["regeneration", "speed", _0x4b6829(239), _0x4b6829(228), _0x4b6829(321), _0x5537d8.Tyzgt, "water_breathing", _0x5537d8[_0x4b6829(172)], _0x4b6829(299), "health_boost", _0x5537d8[_0x4b6829(204)], "saturation", _0x4b6829(249), _0x4b6829(315), _0x5537d8[_0x4b6829(158)]],
      _0xdfbebf = _0xb2ef77.some(_0xd58b14 => _0x385bcf.toLowerCase()[_0x4b6829(270)](_0xd58b14)),
      _0x7066d = _0xdfbebf ? "\xA79" : "\xA7c";
    return _0x2fc7f4[_0x4b6829(253)]("" + _0x7066d + _0x30e162 + " (" + _0x4ae8bc + ")"), _0x2fc7f4;
  } catch (_0xfc437e) {
    if (_0x4b6829(259) !== _0x5537d8[_0x4b6829(225)]) return [];else {
      if (_0x4b9ce8[_0x4b6829(258)](_0x1c1c97)) return _0x1de1f2[_0x258a3e][_0x4b6829(268)];
      if (_0x1ee0a6[_0x4b6829(270)]("/") || _0x2727cd.includes(_0x4b6829(234))) return _0x3bdef2;
      const _0x2d5717 = _0x208f23,
        _0x3b9ca1 = _0x3c1170[_0x4b6829(258)](_0x2d5717) || _0x4945b2[_0x4b6829(258)](_0x2d5717);
      if (!_0x3b9ca1) return _0x4b6829(212);
      return _0x2d5717;
    }
  }
}
function buildJavaStyleLore(_0x202a8b) {
  const _0x205085 = _0x5058,
    _0x57a92c = {
      FhySb: function (_0x53a32c, _0x4126b9) {
        return _0x53a32c(_0x4126b9);
      },
      majHa: function (_0x3bb44e, _0x16964c) {
        return _0x3bb44e(_0x16964c);
      },
      CMnIw: function (_0x309042, _0x14cc31) {
        return _0x309042 > _0x14cc31;
      },
      FmOwG: "Dxhgy",
      TtqBo: function (_0x52f97d, _0x33d50d) {
        return _0x52f97d > _0x33d50d;
      }
    };
  if (!_0x202a8b) return [];
  const _0x3c0293 = [],
    _0x1c5a3c = _0x57a92c.FhySb(getEnchantmentLore, _0x202a8b);
  _0x1c5a3c[_0x205085(185)] > 0 && _0x3c0293[_0x205085(253)](..._0x1c5a3c);
  const _0x5b852b = _0x57a92c[_0x205085(278)](getPotionLore, _0x202a8b);
  if (_0x57a92c[_0x205085(175)](_0x5b852b.length, 0)) {
    if ("RLAqt" !== _0x57a92c.FmOwG) _0x3c0293.push(..._0x5b852b);else return "mainhand";
  }
  const _0xac453c = _0x202a8b[_0x205085(287)]();
  if (_0x57a92c[_0x205085(260)](_0xac453c.length, 0)) {
    const _0x1ed22d = _0xac453c[_0x205085(314)](_0x3b71e2 => {
      const _0x509e4d = _0x205085;
      return !_0x3b71e2.toLowerCase().includes(_0x509e4d(157));
    });
    _0x1ed22d[_0x205085(185)] > 0 && (_0x3c0293.push(""), _0x3c0293.push(..._0x1ed22d));
  }
  return _0x3c0293;
}
function appendDescriptionFragments(_0x1d9590, _0x11959e) {
  const _0xc2040d = _0x5058,
    _0x4619e1 = {
      uxdSI: _0xc2040d(353),
      YpTjB: function (_0x5a0788, _0x58d0f0) {
        return _0x5a0788(_0x58d0f0);
      },
      WMlef: function (_0x249365, _0x38a5c1) {
        return _0x249365 === _0x38a5c1;
      }
    },
    _0x417777 = _0x539470 => {
      const _0x19dfe9 = _0xc2040d;
      if (typeof _0x539470 === _0x4619e1[_0x19dfe9(295)]) return _0x539470[_0x19dfe9(310)]().length > 0;
      if (!_0x539470 || typeof _0x539470 !== _0x19dfe9(261)) return ![];
      if (Array[_0x19dfe9(263)](_0x539470)) return _0x539470[_0x19dfe9(248)](_0x417777);
      if (Array.isArray(_0x539470[_0x19dfe9(232)])) return _0x539470[_0x19dfe9(232)][_0x19dfe9(248)](_0x417777);
      if (_0x19dfe9(358) in _0x539470) return _0x4619e1[_0x19dfe9(160)](String, _0x539470[_0x19dfe9(358)] ?? "")[_0x19dfe9(310)]()[_0x19dfe9(185)] > 0;
      if ("translate" in _0x539470) return _0x4619e1.YpTjB(String, _0x539470.translate ?? "")[_0x19dfe9(310)]().length > 0;
      return Object[_0x19dfe9(198)](_0x539470).length > 0;
    },
    _0x440c83 = _0x47a02a => {
      const _0x9a4a3 = _0xc2040d;
      if (Array[_0x9a4a3(263)](_0x47a02a)) {
        for (const _0xe3692a of _0x47a02a) _0x4619e1.YpTjB(_0x440c83, _0xe3692a);
        return;
      }
      let _0x3945d8;
      if (typeof _0x47a02a === _0x9a4a3(353)) _0x3945d8 = [{
        text: _0x47a02a
      }];else {
        if (Array[_0x9a4a3(263)](_0x47a02a?.[_0x9a4a3(232)])) _0x3945d8 = _0x47a02a[_0x9a4a3(232)];else {
          if (_0x47a02a && _0x4619e1[_0x9a4a3(332)](typeof _0x47a02a, _0x9a4a3(261))) _0x3945d8 = [_0x47a02a];else return;
        }
      }
      if (!_0x3945d8[_0x9a4a3(248)](_0x417777)) return;
      _0x1d9590[_0x9a4a3(232)][_0x9a4a3(253)]({
        text: "\n"
      }, ..._0x3945d8);
    };
  _0x440c83(_0x11959e);
}
var ChestFormData = class {
  constructor(_0x503bfc = "small") {
    __privateAdd(this, _titleText);
    __privateAdd(this, _buttonArray);
    __privateAdd(this, _inventoryOverrides);
    const _0x253803 = _0x19e934,
      _0x1e0a3e = {
        Atrod: _0x253803(233),
        jclXH: function (_0x20c555, _0x13982e) {
          return _0x20c555(_0x13982e);
        }
      },
      _0x4e9da7 = CHEST_UI_SIZES[_0x253803(174)](_0x503bfc) ?? [_0x1e0a3e[_0x253803(350)], 27];
    __privateSet(this, _titleText, {
      rawtext: [{
        text: "" + _0x4e9da7[0]
      }]
    });
    const _0x45063a = ["", void 0];
    __privateSet(this, _buttonArray, _0x1e0a3e[_0x253803(165)](Array, _0x4e9da7[1]).fill(null)[_0x253803(282)](() => [..._0x45063a])), this[_0x253803(290)] = _0x4e9da7[1], __privateSet(this, _inventoryOverrides, new Map());
  }
  ["overrideInventorySlot"](_0x3d64cc, _0x4260ca) {
    const _0x231cdc = _0x19e934;
    return __privateGet(this, _inventoryOverrides)[_0x231cdc(281)](_0x3d64cc, _0x4260ca), this;
  }
  ["title"](_0x4af640) {
    const _0x4af850 = _0x19e934;
    if (typeof _0x4af640 === "string") __privateGet(this, _titleText)[_0x4af850(232)][_0x4af850(253)]({
      text: _0x4af640
    });else typeof _0x4af640 === "object" && (_0x4af640[_0x4af850(232)] ? __privateGet(this, _titleText)[_0x4af850(232)][_0x4af850(253)](..._0x4af640[_0x4af850(232)]) : __privateGet(this, _titleText).rawtext[_0x4af850(253)](_0x4af640));
    return this;
  }
  ["_buildItemNameFragment"](_0x5187e0, _0x1a990f = "") {
    const _0x1469a8 = _0x19e934,
      _0x2d5cb8 = {
        ksCiP: function (_0x4482e3, _0x586d37) {
          return _0x4482e3 === _0x586d37;
        },
        OupKi: _0x1469a8(353)
      },
      _0x5dbb36 = [];
    if (_0x1a990f) _0x5dbb36[_0x1469a8(253)]({
      text: _0x1a990f
    });
    if (_0x2d5cb8.ksCiP(typeof _0x5187e0, _0x2d5cb8[_0x1469a8(348)])) _0x5dbb36.push({
      text: _0x5187e0 + "\xA7r"
    });else {
      if (_0x5187e0?.[_0x1469a8(232)] && Array[_0x1469a8(263)](_0x5187e0[_0x1469a8(232)])) _0x5dbb36[_0x1469a8(253)](..._0x5187e0[_0x1469a8(232)], {
        text: "\xA7r"
      });else {
        if (_0x5187e0?.["translate"]) {
          const _0x1e6851 = {
            translate: _0x5187e0[_0x1469a8(305)]
          };
          if (_0x5187e0[_0x1469a8(333)]) _0x1e6851.with = _0x5187e0[_0x1469a8(333)];
          _0x5dbb36[_0x1469a8(253)](_0x1e6851, {
            text: "\xA7r"
          });
        } else _0x5187e0 && typeof _0x5187e0 === _0x1469a8(261) && _0x5dbb36.push(_0x5187e0, {
          text: "\xA7r"
        });
      }
    }
    return _0x5dbb36;
  }
  ["button"](_0x1adc65, _0x165722, _0x4c8648, _0x29a98d, _0x49c8d0 = 1, _0x3b5250 = 0, _0x519483 = ![]) {
    const _0x1f890b = _0x19e934,
      _0x325332 = {
        OpRTU: function (_0x5d3694, _0x21aa51) {
          return _0x5d3694 === _0x21aa51;
        },
        tIYac: function (_0x4ce9a0, _0x4565df) {
          return _0x4ce9a0 - _0x4565df;
        },
        bokkv: function (_0x7bd93b, _0x2c6509) {
          return _0x7bd93b < _0x2c6509;
        }
      },
      _0x58d1f8 = getDisplayTexture(_0x29a98d),
      _0x12be9b = custom_content_keys[_0x1f890b(258)](_0x58d1f8) ? custom_content[_0x58d1f8]?.[_0x1f890b(268)] : _0x58d1f8,
      _0x38f3b0 = typeIdToDataId[_0x1f890b(174)](_0x12be9b) ?? typeIdToID.get(_0x12be9b);
    let _0x1c4596 = {
      rawtext: []
    };
    const _0x230950 = "stack#" + String(Math[_0x1f890b(187)](Math[_0x1f890b(334)](_0x49c8d0, 1), 99)).padStart(2, "0") + "dur#" + String(Math.min(Math.max(_0x3b5250, 0), 99))[_0x1f890b(230)](2, "0") + "\xA7r",
      _0x4a82b8 = this._buildItemNameFragment(_0x165722, _0x230950);
    if (_0x325332.OpRTU(_0x4a82b8.length, 0)) return this;
    _0x1c4596[_0x1f890b(232)].push(..._0x4a82b8), appendDescriptionFragments(_0x1c4596, _0x4c8648);
    if (_0x325332[_0x1f890b(311)](_0x38f3b0, void 0)) __privateGet(this, _buttonArray).splice(Math[_0x1f890b(334)](0, Math[_0x1f890b(187)](_0x1adc65, _0x325332[_0x1f890b(216)](this.slotCount, 1))), 1, [_0x1c4596, _0x12be9b]);else {
      const _0x86b890 = getTotalCustomItemOffset() || number_of_custom_items,
        _0xb7a50 = _0x38f3b0 + (_0x325332[_0x1f890b(190)](_0x38f3b0, 256) ? 0 : _0x86b890);
      __privateGet(this, _buttonArray)[_0x1f890b(183)](Math.max(0, Math.min(_0x1adc65, this[_0x1f890b(290)] - 1)), 1, [_0x1c4596, _0xb7a50 * 65536 + (_0x519483 ? 32768 : 0)]);
    }
    return this;
  }
  ["pattern"](_0x59bf90, _0x55a637) {
    const _0xa94d30 = _0x19e934,
      _0x3f2d90 = {
        HMOLB: function (_0x576ade, _0x1e600d) {
          return _0x576ade < _0x1e600d;
        },
        hEVSf: function (_0x4f81cd, _0x4fa8df) {
          return _0x4f81cd + _0x4fa8df;
        }
      },
      _0x59c342 = getTotalCustomItemOffset() || number_of_custom_items;
    for (let _0xefdd1e = 0; _0xefdd1e < _0x59bf90[_0xa94d30(185)]; _0xefdd1e++) {
      const _0x49ab15 = _0x59bf90[_0xefdd1e];
      for (let _0x392717 = 0; _0x392717 < _0x49ab15.length; _0x392717++) {
        const _0x6403fb = _0x49ab15.charAt(_0x392717),
          _0x24d57b = _0x55a637[_0x6403fb];
        if (!_0x24d57b) continue;
        const _0x2e776b = _0x392717 + _0xefdd1e * 9,
          _0x378247 = getDisplayTexture(_0x24d57b[_0xa94d30(268)]),
          _0x2dc2b4 = custom_content_keys[_0xa94d30(258)](_0x378247) ? custom_content[_0x378247]?.["texture"] : _0x378247,
          _0x10429f = typeIdToDataId[_0xa94d30(174)](_0x2dc2b4) ?? typeIdToID[_0xa94d30(174)](_0x2dc2b4),
          {
            stackAmount = 1,
            durability = 0,
            itemName: _0x2d1b56,
            itemDesc: _0x49f99d,
            enchanted = ![]
          } = _0x24d57b,
          _0x570211 = String(Math[_0xa94d30(187)](Math[_0xa94d30(334)](stackAmount, 1), 99)).padStart(2, "0"),
          _0x4848aa = String(Math[_0xa94d30(187)](Math[_0xa94d30(334)](durability, 0), 99))[_0xa94d30(230)](2, "0"),
          _0x5ce40c = _0xa94d30(195) + _0x570211 + _0xa94d30(345) + _0x4848aa + "\xA7r";
        let _0x1c4eba = {
          rawtext: []
        };
        const _0x577a96 = this[_0xa94d30(276)](_0x2d1b56, _0x5ce40c);
        if (_0x577a96[_0xa94d30(185)] === 0) continue;
        _0x1c4eba.rawtext[_0xa94d30(253)](..._0x577a96), appendDescriptionFragments(_0x1c4eba, _0x49f99d);
        if (_0x10429f === void 0) __privateGet(this, _buttonArray)[_0xa94d30(183)](Math.max(0, Math[_0xa94d30(187)](_0x2e776b, this[_0xa94d30(290)] - 1)), 1, [_0x1c4eba, _0x2dc2b4]);else {
          const _0x582481 = _0x10429f + (_0x3f2d90.HMOLB(_0x10429f, 256) ? 0 : _0x59c342);
          __privateGet(this, _buttonArray)[_0xa94d30(183)](Math.max(0, Math[_0xa94d30(187)](_0x2e776b, this[_0xa94d30(290)] - 1)), 1, [_0x1c4eba, _0x3f2d90.hEVSf(_0x582481 * 65536, enchanted ? 32768 : 0)]);
        }
      }
    }
    return this;
  }
  ["show"](_0x415bf4) {
    const _0x5256b9 = _0x19e934,
      _0xbec631 = {
        MucJQ: function (_0x2af776, _0x2ad858) {
          return _0x2af776 !== _0x2ad858;
        },
        rvlfq: function (_0x30dcf4, _0x1038ea) {
          return _0x30dcf4 > _0x1038ea;
        },
        XUWHH: function (_0x4090b7, _0xf82ab8) {
          return _0x4090b7 * _0xf82ab8;
        },
        GEuQL: function (_0x36125f, _0xba9904) {
          return _0x36125f / _0xba9904;
        },
        rDJUi: function (_0x20ecdb, _0x276b74) {
          return _0x20ecdb(_0x276b74);
        },
        ltrvz: _0x5256b9(353),
        jlBxq: function (_0x1bddae, _0x58fba5) {
          return _0x1bddae === _0x58fba5;
        },
        yWzrp: function (_0x4d4204, _0x1d1108) {
          return _0x4d4204 + _0x1d1108;
        }
      },
      _0x25115e = new ActionFormData().title(__privateGet(this, _titleText));
    __privateGet(this, _buttonArray)[_0x5256b9(227)](_0x529376 => {
      const _0x376dc5 = _0x5256b9;
      _0x25115e.button(_0x529376[0], _0x529376[1]?.[_0x376dc5(229)]());
    });
    if (!inventory_enabled) return _0x25115e[_0x5256b9(200)](_0x415bf4);
    const _0x3e114a = getTotalCustomItemOffset() || number_of_custom_items,
      _0x350da9 = _0x415bf4[_0x5256b9(171)](_0x5256b9(178))[_0x5256b9(264)],
      _0x32c7f2 = new Map();
    let _0x35a78e = this[_0x5256b9(290)];
    for (let _0x30082e = 0; _0x30082e < _0x350da9.size; _0x30082e++) {
      const _0x17c6ab = _0x350da9.getItem(_0x30082e);
      let _0x4959a6 = _0x17c6ab ? _0x17c6ab[_0x5256b9(231)] : 0,
        _0x118bff = null,
        _0x1397b5 = null;
      const _0x319d53 = __privateGet(this, _inventoryOverrides)[_0x5256b9(174)](_0x30082e);
      _0x319d53 && (_0x319d53[_0x5256b9(231)] !== void 0 && (_0x4959a6 = _0x319d53.amount), _0x319d53.itemName !== void 0 && (_0x118bff = _0x319d53[_0x5256b9(318)]), _0x319d53.itemDesc !== void 0 && (_0x1397b5 = _0x319d53.itemDesc));
      _0x32c7f2[_0x5256b9(281)](_0x35a78e, _0x30082e), _0x35a78e++;
      if (_0x4959a6 <= 0) {
        _0x25115e[_0x5256b9(352)]("", void 0);
        continue;
      }
      const _0x337b48 = getVariantTypeId(_0x17c6ab),
        _0x2a2ecc = _0x337b48 || (_0x17c6ab ? _0x17c6ab[_0x5256b9(266)] : _0x5256b9(294)),
        _0x146075 = getDisplayTexture(_0x2a2ecc),
        _0x3e7ea9 = custom_content_keys[_0x5256b9(258)](_0x146075) ? custom_content[_0x146075]?.[_0x5256b9(268)] : _0x146075,
        _0x139796 = typeIdToDataId.get(_0x3e7ea9) ?? typeIdToID.get(_0x3e7ea9),
        _0x587e1e = _0x17c6ab ? _0x17c6ab[_0x5256b9(171)](_0x5256b9(205)) : null,
        _0x36ffe7 = _0x587e1e && _0xbec631[_0x5256b9(338)](_0x587e1e.damage, 0) ? Math[_0x5256b9(334)](1, Math[_0x5256b9(320)](_0xbec631[_0x5256b9(168)](_0xbec631[_0x5256b9(177)](_0x587e1e[_0x5256b9(167)] - _0x587e1e.damage, _0x587e1e[_0x5256b9(167)]), 99))) : 0,
        _0x386fd6 = _0x118bff || getItemDisplayName(_0x17c6ab),
        _0x5be87b = _0x17c6ab ? _0x17c6ab.getComponent(_0x5256b9(180)) : null,
        _0x205c49 = _0x5be87b && _0x5be87b.getEnchantments && _0x5be87b[_0x5256b9(219)]().length > 0;
      let _0x3f1cdf = {
        rawtext: []
      };
      _0x3f1cdf[_0x5256b9(232)].push({
        text: _0x5256b9(195) + String(_0x4959a6)[_0x5256b9(230)](2, "0") + _0x5256b9(345) + _0xbec631.rDJUi(String, _0x36ffe7)[_0x5256b9(230)](2, "0") + "\xA7r"
      });
      if (typeof _0x386fd6 === _0x5256b9(353)) _0x3f1cdf[_0x5256b9(232)].push({
        text: _0x386fd6
      });else {
        if (_0x386fd6?.[_0x5256b9(232)] && Array[_0x5256b9(263)](_0x386fd6[_0x5256b9(232)])) _0x3f1cdf.rawtext.push(..._0x386fd6[_0x5256b9(232)]);else {
          if (_0x386fd6?.["translate"]) {
            const _0x51bbca = {
              translate: _0x386fd6[_0x5256b9(305)]
            };
            if (_0x386fd6[_0x5256b9(333)]) _0x51bbca[_0x5256b9(333)] = _0x386fd6[_0x5256b9(333)];
            _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)](_0x51bbca);
          } else _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)](_0x386fd6);
        }
      }
      if (_0x1397b5) {
        if (Array[_0x5256b9(263)](_0x1397b5)) for (const _0x29a7bf of _0x1397b5) {
          if (typeof _0x29a7bf === _0x5256b9(353)) _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
            text: "\n" + _0x29a7bf
          });else {
            if (_0x29a7bf?.[_0x5256b9(232)]) _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
              text: "\n"
            }, ..._0x29a7bf.rawtext);else {
              if (_0x29a7bf?.["translate"]) {
                const _0x4dffda = {
                  translate: _0x29a7bf[_0x5256b9(305)]
                };
                if (_0x29a7bf.with) _0x4dffda[_0x5256b9(333)] = _0x29a7bf.with;
                _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
                  text: "\n"
                }, _0x4dffda);
              } else _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
                text: "\n"
              }, _0x29a7bf);
            }
          }
        } else {
          if (typeof _0x1397b5 === _0xbec631.ltrvz) _0x3f1cdf.rawtext[_0x5256b9(253)]({
            text: "\n" + _0x1397b5
          });else {
            if (_0x1397b5?.["rawtext"]) _0x3f1cdf.rawtext[_0x5256b9(253)]({
              text: "\n"
            }, ..._0x1397b5.rawtext);else {
              if (_0x1397b5?.[_0x5256b9(305)]) {
                if (_0x5256b9(277) === _0x5256b9(153)) return _0x5a91e8;else {
                  const _0x85aee7 = {
                    translate: _0x1397b5[_0x5256b9(305)]
                  };
                  if (_0x1397b5[_0x5256b9(333)]) _0x85aee7.with = _0x1397b5[_0x5256b9(333)];
                  _0x3f1cdf.rawtext.push({
                    text: "\n"
                  }, _0x85aee7);
                }
              } else _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
                text: "\n"
              }, _0x1397b5);
            }
          }
        }
      }
      if (_0x17c6ab) {
        const _0x4612f2 = _0xbec631[_0x5256b9(284)](buildJavaStyleLore, _0x17c6ab);
        for (const _0x9e3e92 of _0x4612f2) {
          if (typeof _0x9e3e92 === _0xbec631.ltrvz) _0x3f1cdf.rawtext.push({
            text: "\n" + _0x9e3e92
          });else {
            if (_0x9e3e92?.[_0x5256b9(232)]) _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
              text: "\n"
            }, ..._0x9e3e92[_0x5256b9(232)]);else {
              if (_0x9e3e92?.[_0x5256b9(305)]) {
                const _0x3f9345 = {
                  translate: _0x9e3e92[_0x5256b9(305)]
                };
                if (_0x9e3e92[_0x5256b9(333)]) _0x3f9345.with = _0x9e3e92[_0x5256b9(333)];
                _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
                  text: "\n"
                }, _0x3f9345);
              } else _0x3f1cdf[_0x5256b9(232)][_0x5256b9(253)]({
                text: "\n"
              }, _0x9e3e92);
            }
          }
        }
      }
      const _0x12332f = _0xbec631.jlBxq(_0x139796, void 0) ? _0x3e7ea9 : _0xbec631.yWzrp(_0x139796, _0x139796 < 256 ? 0 : _0x3e114a) * 65536 + (_0x205c49 ? 32768 : 0);
      _0x25115e.button(_0x3f1cdf, _0x12332f[_0x5256b9(229)]());
    }
    return _0x25115e[_0x5256b9(200)](_0x415bf4)[_0x5256b9(279)](_0x252774 => {
      const _0x40c426 = _0x5256b9;
      return !_0x252774[_0x40c426(355)] && _0xbec631[_0x40c426(275)](_0x252774.selection, void 0) && (_0x252774[_0x40c426(323)] = _0x32c7f2.get(_0x252774[_0x40c426(354)]) ?? null), _0x252774;
    });
  }
};
_titleText = new WeakMap();
_buttonArray = new WeakMap();
_inventoryOverrides = new WeakMap();
var FurnaceFormData = class {
  constructor(_0x571020 = ![]) {
    __privateAdd(this, _titleText2);
    __privateAdd(this, _buttonArray2);
    const _0x5f0fd9 = _0x19e934,
      _0xf40b6e = {
        MEcoT: _0x5f0fd9(182)
      };
    __privateSet(this, _titleText2, {
      rawtext: [{
        text: _0x571020 ? "\xA7f\xA7u\xA7r\xA7n\xA7a\xA7c\xA7e\xA7l\xA7i\xA7t\xA7r" : _0xf40b6e[_0x5f0fd9(188)]
      }]
    }), __privateSet(this, _buttonArray2, Array(3)[_0x5f0fd9(221)](["", void 0])), this[_0x5f0fd9(290)] = 3;
  }
  ["title"](_0x579bf2) {
    const _0xb23be1 = _0x19e934;
    if (typeof _0x579bf2 === _0xb23be1(353)) __privateGet(this, _titleText2)[_0xb23be1(232)][_0xb23be1(253)]({
      text: _0x579bf2
    });else typeof _0x579bf2 === "object" && _0x579bf2[_0xb23be1(232)] ? __privateGet(this, _titleText2)[_0xb23be1(232)][_0xb23be1(253)](..._0x579bf2[_0xb23be1(232)]) : __privateGet(this, _titleText2)[_0xb23be1(232)][_0xb23be1(253)]({
      text: ""
    });
    return this;
  }
  ["button"](_0x23770a, _0x38d3a0, _0x5e50db, _0x2335f0, _0x4cbec6 = 1, _0x2666a4 = 0, _0x54c3b0 = ![]) {
    const _0x5b9dbb = _0x19e934,
      _0x4871ea = {
        ueKlG: function (_0x6d95ba, _0x489cb3) {
          return _0x6d95ba(_0x489cb3);
        },
        eeCJy: _0x5b9dbb(206),
        RWBmF: function (_0x4c4bcc, _0x3edb35) {
          return _0x4c4bcc - _0x3edb35;
        },
        IfzTH: function (_0x3c49ed) {
          return _0x3c49ed();
        },
        SWHdd: function (_0x21b9e8, _0x5b5f10) {
          return _0x21b9e8 + _0x5b5f10;
        },
        rlhmB: function (_0x20e04a, _0x1271e0) {
          return _0x20e04a * _0x1271e0;
        }
      },
      _0x4b23fe = _0x4871ea[_0x5b9dbb(194)](getDisplayTexture, _0x2335f0),
      _0x1cd314 = custom_content_keys[_0x5b9dbb(258)](_0x4b23fe) ? custom_content[_0x4b23fe]?.[_0x5b9dbb(268)] : _0x4b23fe,
      _0x15c35a = typeIdToDataId[_0x5b9dbb(174)](_0x1cd314) ?? typeIdToID.get(_0x1cd314);
    let _0x3c31db = {
      rawtext: []
    };
    const _0x49f3c8 = "stack#" + String(Math.min(Math[_0x5b9dbb(334)](_0x4cbec6, 1), 99))[_0x5b9dbb(230)](2, "0") + _0x5b9dbb(345) + String(Math.min(Math.max(_0x2666a4, 0), 99)).padStart(2, "0") + "\xA7r";
    if (typeof _0x38d3a0 === "string") _0x3c31db[_0x5b9dbb(232)][_0x5b9dbb(253)]({
      text: _0x49f3c8 + (_0x38d3a0 ? _0x38d3a0 + "\xA7r" : "\xA7r")
    });else {
      if (typeof _0x38d3a0 === _0x5b9dbb(261) && _0x38d3a0.rawtext) _0x3c31db[_0x5b9dbb(232)][_0x5b9dbb(253)]({
        text: _0x49f3c8
      }, ..._0x38d3a0[_0x5b9dbb(232)], {
        text: "\xA7r"
      });else return;
    }
    appendDescriptionFragments(_0x3c31db, _0x5e50db);
    if (_0x15c35a === void 0) _0x5b9dbb(306) === _0x4871ea.eeCJy ? _0x358c84.rawtext[_0x5b9dbb(253)]({
      text: "\n"
    }, _0x5f46bf) : __privateGet(this, _buttonArray2)[_0x5b9dbb(183)](Math[_0x5b9dbb(334)](0, Math[_0x5b9dbb(187)](_0x23770a, _0x4871ea.RWBmF(this[_0x5b9dbb(290)], 1))), 1, [_0x3c31db, _0x1cd314]);else {
      const _0x24ce7c = _0x4871ea[_0x5b9dbb(255)](getTotalCustomItemOffset) || number_of_custom_items,
        _0x4e4c4c = _0x4871ea[_0x5b9dbb(156)](_0x15c35a, _0x15c35a < 256 ? 0 : _0x24ce7c);
      __privateGet(this, _buttonArray2).splice(Math[_0x5b9dbb(334)](0, Math[_0x5b9dbb(187)](_0x23770a, this[_0x5b9dbb(290)] - 1)), 1, [_0x3c31db, _0x4871ea[_0x5b9dbb(302)](_0x4e4c4c, 65536) + (_0x54c3b0 ? 32768 : 0)]);
    }
    return this;
  }
  ["show"](_0x5ccea4) {
    const _0x5b5135 = _0x19e934,
      _0x5a2ff7 = {
        xwpUC: _0x5b5135(178),
        rTXCd: function (_0x3b821e, _0x234ed8) {
          return _0x3b821e(_0x234ed8);
        },
        kEYds: function (_0x570aba, _0x43d912) {
          return _0x570aba(_0x43d912);
        },
        DXKmR: _0x5b5135(205),
        IJEhb: function (_0x207249, _0x41c6e8) {
          return _0x207249 > _0x41c6e8;
        }
      },
      _0x2f3a12 = new ActionFormData()[_0x5b5135(202)](__privateGet(this, _titleText2));
    __privateGet(this, _buttonArray2)[_0x5b5135(227)](_0x4d841d => {
      const _0x20593b = _0x5b5135;
      _0x2f3a12.button(_0x4d841d[0], _0x4d841d[1]?.[_0x20593b(229)]());
    });
    if (!inventory_enabled) return _0x2f3a12.show(_0x5ccea4);
    const _0x116914 = getTotalCustomItemOffset() || number_of_custom_items,
      _0x39d5b4 = _0x5ccea4.getComponent(_0x5a2ff7.xwpUC)[_0x5b5135(264)],
      _0x52e671 = new Map();
    let _0x15c94c = this[_0x5b5135(290)];
    for (let _0xad1668 = 0; _0xad1668 < _0x39d5b4[_0x5b5135(254)]; _0xad1668++) {
      const _0x2c5199 = _0x39d5b4[_0x5b5135(343)](_0xad1668);
      _0x52e671.set(_0x15c94c, _0xad1668), _0x15c94c++;
      if (!_0x2c5199) {
        _0x2f3a12[_0x5b5135(352)]("", void 0);
        continue;
      }
      const _0x57b45c = _0x5a2ff7.rTXCd(getVariantTypeId, _0x2c5199),
        _0x14ffd6 = _0x57b45c || _0x2c5199.typeId,
        _0x4b0e60 = _0x5a2ff7[_0x5b5135(286)](getDisplayTexture, _0x14ffd6),
        _0x26856d = custom_content_keys[_0x5b5135(258)](_0x4b0e60) ? custom_content[_0x4b0e60]?.[_0x5b5135(268)] : _0x4b0e60,
        _0x7b9070 = typeIdToDataId[_0x5b5135(174)](_0x26856d) ?? typeIdToID[_0x5b5135(174)](_0x26856d),
        _0x38f028 = _0x2c5199.getComponent(_0x5a2ff7[_0x5b5135(326)]),
        _0x5aeabb = _0x38f028 && _0x38f028[_0x5b5135(289)] > 0 ? Math.max(1, Math[_0x5b5135(320)]((_0x38f028[_0x5b5135(167)] - _0x38f028[_0x5b5135(289)]) / _0x38f028[_0x5b5135(167)] * 99)) : 0,
        _0xe82b95 = _0x2c5199[_0x5b5135(231)],
        _0x5bd695 = getItemDisplayName(_0x2c5199),
        _0x334887 = _0x2c5199[_0x5b5135(171)](_0x5b5135(180)),
        _0x1f6a24 = _0x334887 && _0x334887[_0x5b5135(219)] && _0x5a2ff7.IJEhb(_0x334887.getEnchantments().length, 0);
      let _0xf32aa5 = {
        rawtext: [{
          text: _0x5b5135(195) + String(_0xe82b95)[_0x5b5135(230)](2, "0") + _0x5b5135(345) + _0x5a2ff7[_0x5b5135(316)](String, _0x5aeabb).padStart(2, "0") + "\xA7r" + _0x5bd695
        }]
      };
      const _0x4a6ce1 = _0x5a2ff7[_0x5b5135(316)](buildJavaStyleLore, _0x2c5199);
      for (const _0x2e9951 of _0x4a6ce1) {
        _0xf32aa5[_0x5b5135(232)][_0x5b5135(253)]({
          text: "\n" + _0x2e9951
        });
      }
      const _0xa58ff5 = _0x7b9070 === void 0 ? _0x26856d : (_0x7b9070 + (_0x7b9070 < 256 ? 0 : _0x116914)) * 65536 + (_0x1f6a24 ? 32768 : 0);
      _0x2f3a12[_0x5b5135(352)](_0xf32aa5, _0xa58ff5.toString());
    }
    return _0x2f3a12[_0x5b5135(200)](_0x5ccea4)[_0x5b5135(279)](_0x243c62 => {
      const _0x10d597 = _0x5b5135;
      return !_0x243c62[_0x10d597(355)] && _0x243c62[_0x10d597(354)] !== void 0 && (_0x243c62[_0x10d597(323)] = _0x52e671[_0x10d597(174)](_0x243c62.selection) ?? null), _0x243c62;
    });
  }
};
_titleText2 = new WeakMap();
_buttonArray2 = new WeakMap();
var MAX_PREVIEW_DEPTH = 3;
function plainEnchantments(_0x49bb45) {
  const _0x2eef46 = _0x2603;
  if (!_0x49bb45) return [];
  try {
    const _0x45b3bd = _0x49bb45[_0x2eef46(486)] ? _0x49bb45[_0x2eef46(486)]("minecraft:enchantable") : null;
    if (_0x45b3bd && typeof _0x45b3bd[_0x2eef46(493)] === _0x2eef46(472)) {
      const _0x1de61c = _0x45b3bd.getEnchantments() || [];
      return _0x1de61c[_0x2eef46(478)](_0x5b8b38 => ({
        id: _0x5b8b38 && _0x5b8b38.type && _0x5b8b38[_0x2eef46(469)].id ? _0x5b8b38[_0x2eef46(469)].id : _0x5b8b38 && _0x5b8b38.id ? _0x5b8b38.id : _0x2eef46(465),
        level: _0x5b8b38 && _0x5b8b38[_0x2eef46(489)] != null ? _0x5b8b38.level : 1
      }));
    }
  } catch (_0x56f5e9) {}
  return [];
}
function plainLore(_0x4fbdba) {
  const _0xc76d71 = _0x2603,
    _0x550781 = {
      HeEnx: _0xc76d71(472)
    };
  if (!_0x4fbdba) return [];
  try {
    if (typeof _0x4fbdba.getLore === _0x550781.HeEnx) return _0x4fbdba[_0xc76d71(462)]() || [];
  } catch (_0x230507) {}
  return _0x4fbdba.lore || [];
}
function plainDamage(_0x18e17a) {
  const _0x321a4c = _0x2603,
    _0x3ca758 = {
      YLAUe: _0x321a4c(482)
    };
  if (!_0x18e17a) return 0;
  try {
    const _0xc629ce = _0x18e17a[_0x321a4c(486)] ? _0x18e17a.getComponent(_0x3ca758.YLAUe) : null;
    if (_0xc629ce) return _0xc629ce.damage || 0;
  } catch (_0x5830b5) {}
  return _0x18e17a[_0x321a4c(470)] || 0;
}
function isBundle(_0x1310ca) {
  const _0x39f80e = _0x2603,
    _0x465512 = {
      wFTxk: _0x39f80e(487)
    };
  return !!(_0x1310ca && typeof _0x1310ca[_0x39f80e(494)] === _0x465512[_0x39f80e(459)] && _0x1310ca[_0x39f80e(494)][_0x39f80e(480)](_0x39f80e(474)));
}
function isShulker(_0x4f1494) {
  const _0x3453e7 = _0x2603;
  return !!(_0x4f1494 && typeof _0x4f1494[_0x3453e7(494)] === _0x3453e7(487) && _0x4f1494[_0x3453e7(494)][_0x3453e7(480)](_0x3453e7(477)));
}
function serializeBundleContents(_0x245915, _0x26e8b9 = 0) {
  const _0x1176ac = _0x2603,
    _0x275518 = {
      oarDz: function (_0x375e6f, _0x2630b3) {
        return _0x375e6f > _0x2630b3;
      },
      UKxYk: function (_0x2e2f10, _0x29ae5a) {
        return _0x2e2f10 < _0x29ae5a;
      },
      ytbRI: function (_0x1c9f39, _0x1630a9) {
        return _0x1c9f39 + _0x1630a9;
      }
    },
    _0x4509d6 = [];
  if (!_0x245915 || _0x275518[_0x1176ac(471)](_0x26e8b9, MAX_PREVIEW_DEPTH)) return _0x4509d6;
  try {
    const _0x22c8dd = _0x245915[_0x1176ac(486)] ? _0x245915.getComponent(_0x1176ac(466)) : null,
      _0x4ba2f8 = _0x22c8dd?.[_0x1176ac(475)];
    if (!_0x4ba2f8) return _0x4509d6;
    for (let _0x369f1f = 0; _0x275518[_0x1176ac(484)](_0x369f1f, _0x4ba2f8.size); _0x369f1f++) {
      const _0x6aec4a = _0x4ba2f8[_0x1176ac(461)](_0x369f1f);
      if (!_0x6aec4a) continue;
      _0x4509d6[_0x1176ac(481)](serializeItem(_0x6aec4a, _0x275518.ytbRI(_0x26e8b9, 1)));
    }
  } catch (_0x1d35eb) {}
  return _0x4509d6;
}
function plainLocalizationKey(_0x23a718) {
  const _0x3c108b = _0x2603;
  if (!_0x23a718) return null;
  try {
    if (typeof _0x23a718[_0x3c108b(491)] === _0x3c108b(487) && _0x23a718.localizationKey.length > 0) return _0x23a718.localizationKey;
  } catch (_0x45bec2) {}
  try {
    const _0x18ea34 = _0x23a718[_0x3c108b(469)];
    if (_0x18ea34 && typeof _0x18ea34.localizationKey === _0x3c108b(487) && _0x18ea34.localizationKey[_0x3c108b(460)] > 0) return _0x18ea34[_0x3c108b(491)];
  } catch (_0x32aaff) {}
  return null;
}
function serializeItem(_0x1cdcb6, _0xe11441 = 0) {
  const _0x57d06b = _0x2603;
  if (!_0x1cdcb6) return null;
  const _0x5437ef = {
    typeId: _0x1cdcb6.typeId || _0x57d06b(465),
    amount: _0x1cdcb6[_0x57d06b(492)] || 1,
    nameTag: _0x1cdcb6[_0x57d06b(488)] != null ? _0x1cdcb6[_0x57d06b(488)] : null,
    localizationKey: plainLocalizationKey(_0x1cdcb6),
    lore: plainLore(_0x1cdcb6),
    enchantments: plainEnchantments(_0x1cdcb6),
    damage: plainDamage(_0x1cdcb6)
  };
  return isBundle(_0x1cdcb6) && (_0x5437ef[_0x57d06b(458)] = serializeBundleContents(_0x1cdcb6, _0xe11441)), _0x5437ef;
}
import * as _0x3e2df4 from "@minecraft/server";
var TEMP_Y = -60,
  RANGE = 2e3,
  PREFIX = "shk_job_",
  CACHE_PREFIX = "shk_data_",
  CHUNK_SIZE = 3e4,
  MAX_PREVIEW_DEPTH2 = 3,
  INDEX_KEY = "shk_index",
  MAX_CACHE_AGE_MS = 7 * 24 * 60 * 60 * 1e3;
function readIndex() {
  const _0x358d73 = _0x51a160,
    _0x4e8188 = {
      sHmzl: _0x358d73(246)
    };
  try {
    const _0x19f0c9 = _0x3e2df4[_0x358d73(260)][_0x358d73(273)](INDEX_KEY);
    if (!_0x19f0c9) return {};
    const _0x252142 = JSON[_0x358d73(239)](_0x19f0c9);
    return _0x252142 && typeof _0x252142 === _0x4e8188[_0x358d73(256)] ? _0x252142 : {};
  } catch (_0x58cdd6) {
    return {};
  }
}
function writeIndex(_0x1cf61c) {
  const _0xd293a3 = _0x51a160;
  try {
    _0x3e2df4.world[_0xd293a3(258)](INDEX_KEY, JSON[_0xd293a3(285)](_0x1cf61c));
  } catch (_0x528352) {}
}
function getSafeHighPos(_0x6c260d) {
  const _0x1e5ac5 = _0x51a160,
    _0x4c8486 = {
      mDQHW: _0x1e5ac5(288),
      eleVT: function (_0xde37f1, _0xd9ec0f) {
        return _0xde37f1 === _0xd9ec0f;
      }
    },
    _0x1b6173 = _0x6c260d[_0x1e5ac5(222)];
  let _0x48408b = 319;
  if (_0x1b6173.id === _0x4c8486[_0x1e5ac5(280)]) _0x48408b = 127;
  if (_0x4c8486[_0x1e5ac5(275)](_0x1b6173.id, _0x1e5ac5(281))) _0x48408b = 255;
  const _0x54a05c = Math[_0x1e5ac5(284)](Math[_0x1e5ac5(257)]() * 10) - 5,
    _0xd40c41 = Math[_0x1e5ac5(284)](Math.random() * 10) - 5;
  return {
    x: Math[_0x1e5ac5(284)](_0x6c260d.location.x) + _0x54a05c,
    y: _0x48408b - 2,
    z: Math[_0x1e5ac5(284)](_0x6c260d[_0x1e5ac5(266)].z) + _0xd40c41
  };
}
function makeId() {
  const _0x49768d = _0x51a160,
    _0x1f0745 = {
      DhqkG: function (_0x591adc, _0x273c99) {
        return _0x591adc * _0x273c99;
      }
    };
  return Math.floor(_0x1f0745[_0x49768d(207)](Math[_0x49768d(257)](), 99999999))[_0x49768d(231)]();
}
function serializePreviewItem(_0x138bf0, _0x2b8c93 = 0) {
  return serializeItem(_0x138bf0, _0x2b8c93);
}
function getBundleContents(_0x46d007, _0x105364 = 0) {
  const _0x21a0c4 = _0x51a160,
    _0x2c4ee0 = {
      QeRHJ: function (_0x57e867, _0x6fb2b6, _0x485979) {
        return _0x57e867(_0x6fb2b6, _0x485979);
      }
    };
  return _0x2c4ee0[_0x21a0c4(276)](serializeBundleContents, _0x46d007, _0x105364);
}
function saveShulkerCache(_0x25dc29, _0xa544fd, _0x4be65b) {
  const _0x5b5366 = _0x51a160,
    _0xc0ea99 = {
      ZhaUB: _0x5b5366(246),
      vgsLg: function (_0x46d973, _0x1847d8, _0xff3f5e) {
        return _0x46d973(_0x1847d8, _0xff3f5e);
      },
      PsJtZ: function (_0x451f2c, _0x647715) {
        return _0x451f2c(_0x647715);
      },
      NdFaQ: _0x5b5366(247)
    },
    _0x502768 = "" + CACHE_PREFIX + _0x25dc29 + "_" + _0xa544fd + "_",
    _0x50571a = JSON[_0x5b5366(285)](_0x4be65b);
  let _0x1df389 = 0;
  _0xc0ea99[_0x5b5366(264)](deleteShulkerCache, _0x25dc29, _0xa544fd);
  for (let _0x1bf968 = 0; _0x1bf968 < _0x50571a[_0x5b5366(253)]; _0x1bf968 += CHUNK_SIZE) {
    const _0x373e68 = _0x50571a[_0x5b5366(277)](_0x1bf968, _0x1bf968 + CHUNK_SIZE);
    _0x3e2df4[_0x5b5366(260)].setDynamicProperty(_0x502768 + _0x1df389, _0x373e68), _0x1df389++;
  }
  try {
    if ("rtBWC" !== _0x5b5366(241)) {
      const _0x32038e = _0x30b0eb[_0x5b5366(260)][_0x5b5366(273)](_0x995912);
      if (!_0x32038e) return {};
      const _0x25b99d = _0x395945[_0x5b5366(239)](_0x32038e);
      return _0x25b99d && typeof _0x25b99d === jbQtpw[_0x5b5366(252)] ? _0x25b99d : {};
    } else {
      const _0x53f7cf = readIndex();
      if (!_0x53f7cf[_0x25dc29]) _0x53f7cf[_0x25dc29] = {};
      _0x53f7cf[_0x25dc29][_0xc0ea99.PsJtZ(String, _0xa544fd)] = {
        chunks: _0x1df389,
        ts: Date.now()
      }, writeIndex(_0x53f7cf), log[_0x5b5366(247)](_0x5b5366(274), {
        storage: _0x25dc29,
        slot: _0xa544fd,
        chunks: _0x1df389,
        bytes: _0x50571a[_0x5b5366(253)]
      });
    }
  } catch (_0x438746) {
    log[_0x5b5366(271)](_0xc0ea99.NdFaQ, _0x438746, {
      action: "shulker saveIndex",
      storage: _0x25dc29,
      slot: _0xa544fd
    });
  }
}
function loadShulkerCache(_0x1b1441, _0x490e2e) {
  const _0x12f0ad = _0x51a160,
    _0x189731 = {
      vZmQe: function (_0x3f39a1, _0x5a1bde) {
        return _0x3f39a1 === _0x5a1bde;
      },
      uaQYZ: _0x12f0ad(230)
    },
    _0x156f62 = "" + CACHE_PREFIX + _0x1b1441 + "_" + _0x490e2e + "_";
  let _0x5520ad = "",
    _0x378a73 = 0;
  while (!![]) {
    const _0x37ebcb = _0x3e2df4[_0x12f0ad(260)][_0x12f0ad(273)](_0x156f62 + _0x378a73);
    if (_0x189731.vZmQe(typeof _0x37ebcb, "string")) _0x5520ad += _0x37ebcb, _0x378a73++;else break;
  }
  if (_0x189731[_0x12f0ad(233)](_0x5520ad.length, 0)) return log[_0x12f0ad(247)](_0x189731[_0x12f0ad(249)], {
    storage: _0x1b1441,
    slot: _0x490e2e
  }), null;
  try {
    const _0x50530c = JSON.parse(_0x5520ad);
    return log[_0x12f0ad(247)](_0x12f0ad(240), {
      storage: _0x1b1441,
      slot: _0x490e2e,
      chunks: _0x378a73,
      bytes: _0x5520ad[_0x12f0ad(253)]
    }), _0x50530c;
  } catch (_0x4c3d66) {
    return log[_0x12f0ad(271)]("cache", _0x4c3d66, {
      action: _0x12f0ad(206),
      storage: _0x1b1441,
      slot: _0x490e2e
    }), null;
  }
}
function deleteShulkerCache(_0x402bb6, _0x2dfbc3) {
  const _0x3a1898 = _0x51a160,
    _0x308d22 = {
      rnUet: function (_0xa265ba, _0x240d2e) {
        return _0xa265ba(_0x240d2e);
      },
      AunHT: function (_0x5ae4e9, _0x82a1db) {
        return _0x5ae4e9 === _0x82a1db;
      }
    },
    _0x13809f = "" + CACHE_PREFIX + _0x402bb6 + "_" + _0x2dfbc3 + "_";
  let _0x51aba3 = 0;
  try {
    const _0x1ccccd = readIndex(),
      _0x30c94b = _0x1ccccd[_0x402bb6] && _0x1ccccd[_0x402bb6][String(_0x2dfbc3)];
    if (_0x30c94b && typeof _0x30c94b[_0x3a1898(282)] === "number") {
      for (let _0x48673b = 0; _0x48673b < _0x30c94b[_0x3a1898(282)]; _0x48673b++) {
        _0x3e2df4[_0x3a1898(260)].setDynamicProperty(_0x13809f + _0x48673b, void 0);
      }
      delete _0x1ccccd[_0x402bb6][String(_0x2dfbc3)];
      if (Object[_0x3a1898(227)](_0x1ccccd[_0x402bb6])[_0x3a1898(253)] === 0) delete _0x1ccccd[_0x402bb6];
      _0x308d22.rnUet(writeIndex, _0x1ccccd);
      return;
    }
  } catch (_0x57b8de) {}
  while (!![]) {
    const _0x246f7e = _0x3e2df4[_0x3a1898(260)][_0x3a1898(273)](_0x13809f + _0x51aba3);
    if (_0x308d22.AunHT(typeof _0x246f7e, "string")) _0x3e2df4[_0x3a1898(260)][_0x3a1898(258)](_0x13809f + _0x51aba3, void 0), _0x51aba3++;else break;
  }
}
function deleteAllForStorage(_0x4cc962) {
  const _0x3615d7 = _0x51a160,
    _0x19be43 = {
      bisyB: function (_0x548069) {
        return _0x548069();
      },
      znvRU: function (_0x462f00, _0x4b1cac) {
        return _0x462f00 > _0x4b1cac;
      },
      JwEXo: function (_0x111906, _0x13e386) {
        return _0x111906 !== _0x13e386;
      }
    };
  let _0x18da15 = [];
  try {
    const _0x14c367 = _0x19be43[_0x3615d7(237)](readIndex);
    if (_0x14c367[_0x4cc962]) _0x18da15 = Object[_0x3615d7(227)](_0x14c367[_0x4cc962]);
    if (_0x19be43[_0x3615d7(290)](_0x18da15.length, 0)) {
      for (const _0x25f81e of _0x18da15) {
        deleteShulkerCache(_0x4cc962, Number(_0x25f81e));
      }
      return;
    }
  } catch (_0x53ab70) {}
  const _0x38f3d0 = 255 * 10;
  for (let _0x1d1372 = 0; _0x1d1372 < _0x38f3d0; _0x1d1372++) {
    const _0x5bffe8 = _0x3e2df4[_0x3615d7(260)][_0x3615d7(273)]("" + CACHE_PREFIX + _0x4cc962 + "_" + _0x1d1372 + "_0");
    _0x19be43[_0x3615d7(221)](_0x5bffe8, void 0) && deleteShulkerCache(_0x4cc962, _0x1d1372);
  }
}
function sweepExpiredShulkerCache(_0x440abb = MAX_CACHE_AGE_MS) {
  const _0x36b382 = _0x51a160,
    _0x58872b = {
      HfskD: function (_0x5c1264) {
        return _0x5c1264();
      },
      fzjnY: _0x36b382(214)
    };
  let _0x3826bc = 0;
  try {
    const _0x153abc = _0x58872b.HfskD(readIndex),
      _0x1b633a = Date[_0x36b382(250)]();
    for (const _0x51911f of Object[_0x36b382(227)](_0x153abc)) {
      const _0x5b1600 = _0x153abc[_0x51911f] || {};
      for (const _0x2e412d of Object[_0x36b382(227)](_0x5b1600)) {
        const _0x5b2921 = _0x5b1600[_0x2e412d];
        if (!_0x5b2921 || typeof _0x5b2921.ts !== _0x58872b[_0x36b382(228)]) continue;
        _0x1b633a - _0x5b2921.ts > _0x440abb && (deleteShulkerCache(_0x51911f, Number(_0x2e412d)), _0x3826bc++);
      }
    }
  } catch (_0x2afcd4) {
    log[_0x36b382(271)]("gc", _0x2afcd4, {
      action: _0x36b382(268)
    });
  }
  return _0x3826bc;
}
function saveBundleCache() {}
function loadBundleCache() {
  return null;
}
function deleteBundleCache() {}
function readShulker(_0x3c14e4, _0x5150fa, _0x1d86a0, _0x2d0719) {
  const _0x323056 = _0x51a160,
    _0x561f32 = {
      XjCqh: function (_0x4c0072, _0xf5a7fa) {
        return _0x4c0072 < _0xf5a7fa;
      },
      ZGGGX: _0x323056(235),
      byPXK: function (_0x233526) {
        return _0x233526();
      }
    };
  return new Promise(_0x1a0f3b => {
    const _0x16efcc = _0x323056,
      _0x30f501 = {
        NTcAx: function (_0xea117d, _0x1425d8) {
          const _0x29e020 = _0x5027;
          return _0x561f32[_0x29e020(213)](_0xea117d, _0x1425d8);
        },
        IwsEV: function (_0x4e511c, _0x566687) {
          return _0x4e511c !== _0x566687;
        },
        HaJeZ: _0x561f32[_0x16efcc(262)],
        kFmnT: function (_0x979436, _0x3188b8) {
          return _0x979436(_0x3188b8);
        },
        hvDxp: function (_0x34b233, _0x18e89c, _0x381f98, _0x2cd101) {
          return _0x34b233(_0x18e89c, _0x381f98, _0x2cd101);
        },
        jFQvW: function (_0x2b4649, _0x28da57) {
          return _0x2b4649(_0x28da57);
        },
        eEHKX: _0x16efcc(289)
      };
    if ("MAuoT" !== _0x16efcc(283)) _0x7fb1cc.world.setDynamicProperty(_0x562b7a, _0xdce415[_0x16efcc(285)](_0x5097d4));else {
      if (!_0x3c14e4 || !_0x3c14e4.typeId || !_0x3c14e4[_0x16efcc(267)][_0x16efcc(251)](_0x16efcc(286))) {
        _0x1a0f3b([]);
        return;
      }
      saveShulkerCache(_0x1d86a0, _0x2d0719, {
        loading: !![]
      });
      const _0x168a86 = _0x5150fa.dimension,
        _0x399516 = _0x561f32[_0x16efcc(279)](makeId);
      _0x3e2df4[_0x16efcc(234)][_0x16efcc(220)](() => {
        const _0x4c64dd = _0x16efcc,
          _0x535d04 = _0x30f501[_0x4c64dd(254)](getSafeHighPos, _0x5150fa),
          _0x2f7af0 = _0x535d04,
          _0x560960 = {
            x: _0x535d04.x + 1,
            y: _0x535d04.y,
            z: _0x535d04.z
          },
          _0x4f515b = {
            x: _0x535d04.x,
            y: _0x535d04.y + 1,
            z: _0x535d04.z
          };
        try {
          _0x168a86[_0x4c64dd(229)]("setblock " + _0x535d04.x + " " + _0x535d04.y + " " + _0x535d04.z + _0x4c64dd(208));
          const _0x5e4609 = _0x168a86[_0x4c64dd(211)](_0x535d04),
            _0x470b74 = _0x5e4609?.[_0x4c64dd(223)](_0x4c64dd(216));
          if (!_0x470b74?.[_0x4c64dd(255)]) {
            saveShulkerCache(_0x1d86a0, _0x2d0719, {
              items: []
            }), _0x30f501.jFQvW(_0x1a0f3b, []);
            return;
          }
          _0x470b74[_0x4c64dd(255)].setItem(0, _0x3c14e4[_0x4c64dd(261)]()), _0x168a86[_0x4c64dd(229)](_0x4c64dd(226) + _0x560960.x + " " + _0x560960.y + " " + _0x560960.z + _0x4c64dd(212)), _0x3e2df4[_0x4c64dd(234)][_0x4c64dd(219)](() => {
            const _0x4ae71d = _0x4c64dd;
            try {
              const _0x5c4f08 = [],
                _0xffbade = _0x168a86.getBlock(_0x4f515b),
                _0x9c25e5 = _0xffbade?.[_0x4ae71d(223)](_0x4ae71d(216));
              if (_0x9c25e5?.[_0x4ae71d(255)]) {
                const _0x303010 = _0x9c25e5[_0x4ae71d(255)];
                for (let _0x1cc986 = 0; _0x30f501[_0x4ae71d(265)](_0x1cc986, _0x303010[_0x4ae71d(263)]); _0x1cc986++) {
                  if (_0x30f501[_0x4ae71d(225)](_0x30f501[_0x4ae71d(287)], "AAucj")) {
                    const _0x300911 = _0x267484.world[_0x4ae71d(273)]("" + _0x19c7b4 + _0x4571a0 + "_" + _0x65ccda + "_0");
                    _0x300911 !== _0xbe1388 && _0x3bdcae(_0x11c6c9, _0x777a57);
                  } else {
                    const _0x3a3bdf = _0x303010[_0x4ae71d(245)](_0x1cc986);
                    if (!_0x3a3bdf) continue;
                    const _0xdb82b7 = serializePreviewItem(_0x3a3bdf, 0);
                    if (_0xdb82b7) _0x5c4f08[_0x4ae71d(278)](_0xdb82b7);
                  }
                }
              }
              try {
                _0x168a86[_0x4ae71d(229)]("setblock " + _0x2f7af0.x + " " + _0x2f7af0.y + " " + _0x2f7af0.z + _0x4ae71d(270));
              } catch (_0x13d3ae) {}
              try {
                _0x168a86.runCommand("setblock " + _0x560960.x + " " + _0x560960.y + " " + _0x560960.z + _0x4ae71d(270));
              } catch (_0x21d9fd) {}
              try {
                _0x168a86[_0x4ae71d(229)]("setblock " + _0x4f515b.x + " " + _0x4f515b.y + " " + _0x4f515b.z + _0x4ae71d(270));
              } catch (_0x1d79a0) {}
              saveShulkerCache(_0x1d86a0, _0x2d0719, {
                items: _0x5c4f08
              }), _0x30f501[_0x4ae71d(232)](_0x1a0f3b, _0x5c4f08);
            } catch (_0x2d243c) {
              log[_0x4ae71d(271)](_0x4ae71d(247), _0x2d243c, {
                action: "readShulker"
              });
              try {
                _0x168a86.runCommand("setblock " + _0x2f7af0.x + " " + _0x2f7af0.y + " " + _0x2f7af0.z + _0x4ae71d(270));
              } catch (_0x2f333a) {}
              try {
                _0x168a86.runCommand(_0x4ae71d(226) + _0x560960.x + " " + _0x560960.y + " " + _0x560960.z + _0x4ae71d(270));
              } catch (_0x3bd112) {}
              try {
                _0x168a86[_0x4ae71d(229)]("setblock " + _0x4f515b.x + " " + _0x4f515b.y + " " + _0x4f515b.z + " air");
              } catch (_0x30d1a3) {}
              _0x30f501.hvDxp(saveShulkerCache, _0x1d86a0, _0x2d0719, {
                items: []
              }), _0x1a0f3b([]);
            }
          }, 10);
        } catch (_0x4e6f3a) {
          const _0xbb18f5 = _0x4c64dd(269)[_0x4c64dd(215)]("|");
          let _0x223784 = 0;
          while (!![]) {
            switch (_0xbb18f5[_0x223784++]) {
              case "0":
                try {
                  _0x168a86[_0x4c64dd(229)](_0x4c64dd(226) + _0x535d04.x + " " + (_0x535d04.y + 1) + " " + _0x535d04.z + _0x4c64dd(270));
                } catch (_0x45449b) {}
                continue;
              case "1":
                _0x30f501[_0x4c64dd(254)](_0x1a0f3b, []);
                continue;
              case "2":
                log[_0x4c64dd(271)](_0x4c64dd(247), _0x4e6f3a, {
                  action: _0x30f501[_0x4c64dd(242)]
                });
                continue;
              case "3":
                try {
                  _0x168a86[_0x4c64dd(229)](_0x4c64dd(226) + _0x535d04.x + " " + _0x535d04.y + " " + _0x535d04.z + " air");
                } catch (_0x3b2667) {}
                continue;
              case "4":
                saveShulkerCache(_0x1d86a0, _0x2d0719, {
                  items: []
                });
                continue;
              case "5":
                try {
                  _0x168a86[_0x4c64dd(229)](_0x4c64dd(226) + (_0x535d04.x + 1) + " " + _0x535d04.y + " " + _0x535d04.z + _0x4c64dd(270));
                } catch (_0x2ea0f1) {}
                continue;
            }
            break;
          }
        }
      });
    }
  });
}
import * as _0x528cb0 from "@minecraft/server";
var ItemStorage = class {
  constructor() {
    const _0x1d9c62 = _0x1bbe;
    this.baseNamespace = "shopstorage", this[_0x1d9c62(300)] = "shopkeeper:storage_entity", this[_0x1d9c62(335)] = 255, this.HIDDEN_BASE_X = 2e6, this.HIDDEN_BASE_Z = 2e6, this[_0x1d9c62(327)] = 50, this[_0x1d9c62(358)] = _0x1d9c62(286), this[_0x1d9c62(310)] = new Map(), this[_0x1d9c62(421)] = new Map(), this[_0x1d9c62(412)] = new Map(), this[_0x1d9c62(399)] = {
      hit: 0,
      miss: 0,
      invalid: 0,
      rebuild: 0
    }, this._dirty = new Set(), this[_0x1d9c62(491)] = 256, this.MAX_LIVE_CACHE = 4096, this.MAX_ENTITY_CACHE = 512, this._flushHandle = null, this[_0x1d9c62(302)] = 40, this._storageDirty = ![];
  }
  ["_syncRamFromDp"](_0x3ac481) {
    const _0x532d88 = _0x6414db,
      _0x2ec053 = _0x528cb0[_0x532d88(340)][_0x532d88(420)](this[_0x532d88(295)](_0x3ac481));
    if (_0x2ec053) try {
      const _0x30a567 = JSON[_0x532d88(375)](_0x2ec053);
      this[_0x532d88(421)][_0x532d88(326)](this[_0x532d88(295)](_0x3ac481), _0x30a567), log[_0x532d88(470)]("DP\u2192RAM read", {
        shop: _0x3ac481,
        bytes: _0x2ec053[_0x532d88(331)],
        slots: _0x30a567 && _0x30a567[_0x532d88(443)] ? Object[_0x532d88(430)](_0x30a567.items)[_0x532d88(331)] : 0
      });
    } catch (_0x1e95b8) {
      log[_0x532d88(488)]("disk", _0x1e95b8, {
        action: _0x532d88(385),
        shop: _0x3ac481
      });
    }
  }
  ["loadAllToRam"]() {
    const _0x37362f = _0x6414db,
      _0x57a8d3 = {
        gefjw: function (_0x548d9e, _0x481c6a) {
          return _0x548d9e < _0x481c6a;
        },
        CZugG: function (_0x5661b7, _0x1d1488) {
          return _0x5661b7 === _0x1d1488;
        }
      },
      _0x2b70a8 = Date[_0x37362f(464)](),
      _0x3f24e3 = typeof _0x528cb0[_0x37362f(340)].getDynamicPropertyIds === _0x37362f(474) ? _0x528cb0[_0x37362f(340)][_0x37362f(272)]() : [],
      _0x523997 = this[_0x37362f(358)];
    for (let _0x4f7f43 = 0; _0x57a8d3[_0x37362f(436)](_0x4f7f43, _0x3f24e3[_0x37362f(331)]); _0x4f7f43++) {
      const _0x37b32a = _0x3f24e3[_0x4f7f43];
      _0x57a8d3[_0x37362f(489)](typeof _0x37b32a, _0x37362f(431)) && _0x37b32a[_0x37362f(395)](_0x523997) && this._syncRamFromDp(_0x37b32a[_0x37362f(480)](_0x523997.length));
    }
    log.ram(_0x37362f(339), {
      shops: this._ramCache.size,
      dpIds: _0x3f24e3[_0x37362f(331)],
      ms: Date[_0x37362f(464)]() - _0x2b70a8
    }), this._boundRamCache();
  }
  ["flushNow"]() {
    return this.flushDirty(!![]);
  }
  ["_dpKey"](_0x3c2194) {
    return this.DP_PREFIX + _0x3c2194;
  }
  ["_serializeBundleContents"](_0x1bdb76, _0x530988 = 0) {
    return serializeBundleContents(_0x1bdb76, _0x530988);
  }
  ["_plainEnchantments"](_0x2cbbca) {
    return plainEnchantments(_0x2cbbca);
  }
  ["_itemToPlain"](_0x1460ce) {
    const _0x2fea6e = _0x6414db,
      _0x145431 = {
        vcIhJ: function (_0x41b5b5, _0x131932) {
          return _0x41b5b5(_0x131932);
        },
        TJSby: _0x2fea6e(469),
        zVqyk: function (_0x148d16, _0x468b3f) {
          return _0x148d16 !== _0x468b3f;
        }
      };
    if (!_0x1460ce) return null;
    try {
      return serializeItem(_0x1460ce);
    } catch (_0x329e7c) {
      let _0x432531 = "unknown",
        _0x58d918 = 1,
        _0x56c5d5 = null,
        _0x1ca443 = null;
      try {
        _0x432531 = _0x1460ce[_0x2fea6e(454)] ?? _0x2fea6e(292);
      } catch (_0x1b8f5f) {}
      try {
        _0x58d918 = _0x1460ce.amount ?? 1;
      } catch (_0x342a34) {}
      try {
        if (_0x145431[_0x2fea6e(348)] === "tNcTb") {
          const _0x2b171e = _0x4b151b[_0x2fea6e(352)];
          _0x4abd57[_0x2fea6e(318)]({
            x: _0x2b171e.x,
            y: -300,
            z: _0x2b171e.z
          });
        } else _0x56c5d5 = _0x1460ce.nameTag ?? null;
      } catch (_0x4f59b8) {}
      try {
        if (_0x145431[_0x2fea6e(394)](_0x2fea6e(503), _0x2fea6e(273))) _0x1ca443 = _0x145431[_0x2fea6e(313)](plainLocalizationKey, _0x1460ce);else {
          if (_0x2ea0f4[_0xe5147b]) _0x2aaeb6[_0x145431[_0x2fea6e(313)](_0x9ad874, _0x1cee66)] = this[_0x2fea6e(408)](_0x416349[_0x39a11e]);
        }
      } catch (_0x2db57b) {}
      return {
        typeId: _0x432531,
        amount: _0x58d918,
        nameTag: _0x56c5d5,
        localizationKey: _0x1ca443,
        lore: [],
        enchantments: [],
        damage: 0
      };
    }
  }
  ["_dpSave"](_0x4730c, _0x15fc70) {
    const _0x30fad1 = _0x6414db,
      _0x81d3e8 = {
        yQrRE: function (_0x4ed5f9, _0x366e1a) {
          return _0x4ed5f9(_0x366e1a);
        }
      };
    try {
      const _0x31baee = Date[_0x30fad1(464)](),
        _0x5a825b = {
          v: 2,
          items: {},
          ts: Date[_0x30fad1(464)]()
        };
      for (let _0x88fee9 = 0; _0x88fee9 < _0x15fc70[_0x30fad1(331)]; _0x88fee9++) {
        if (_0x15fc70[_0x88fee9]) _0x5a825b.items[_0x81d3e8[_0x30fad1(423)](String, _0x88fee9)] = this._itemToPlain(_0x15fc70[_0x88fee9]);
      }
      const _0x314b11 = JSON.stringify(_0x5a825b);
      _0x528cb0.world[_0x30fad1(386)](this[_0x30fad1(295)](_0x4730c), _0x314b11), this[_0x30fad1(452)][_0x30fad1(291)](_0x4730c), log.disk(_0x30fad1(304), {
        shop: _0x4730c,
        slots: Object.keys(_0x5a825b[_0x30fad1(443)])[_0x30fad1(331)],
        bytes: _0x314b11[_0x30fad1(331)],
        ms: Date.now() - _0x31baee
      });
    } catch (_0x3ea0c8) {
      log[_0x30fad1(488)](_0x30fad1(470), _0x3ea0c8, {
        action: "_dpSave",
        shop: _0x4730c
      });
    }
  }
  ["_dpLoad"](_0x5c3587) {
    const _0x2dba81 = _0x6414db,
      _0x51952a = {
        gbEYR: _0x2dba81(274),
        CPMNK: function (_0x5a61fd, _0x5c27df) {
          return _0x5a61fd !== _0x5c27df;
        },
        duqjS: _0x2dba81(442)
      };
    try {
      const _0x50cf13 = _0x528cb0.world[_0x2dba81(420)](this[_0x2dba81(295)](_0x5c3587));
      if (!_0x50cf13) return log[_0x2dba81(470)](_0x51952a[_0x2dba81(325)], {
        shop: _0x5c3587
      }), null;
      const _0x52e53c = JSON.parse(_0x50cf13);
      if (!_0x52e53c || !_0x52e53c.items) return null;
      if (_0x52e53c.v !== 1 && _0x51952a[_0x2dba81(512)](_0x52e53c.v, 2)) return log[_0x2dba81(470)](_0x2dba81(456), {
        shop: _0x5c3587,
        v: _0x52e53c.v
      }), null;
      return log[_0x2dba81(470)](_0x51952a[_0x2dba81(417)], {
        shop: _0x5c3587,
        v: _0x52e53c.v,
        slots: Object[_0x2dba81(430)](_0x52e53c[_0x2dba81(443)])[_0x2dba81(331)]
      }), _0x52e53c[_0x2dba81(443)];
    } catch (_0x181ace) {
      return log[_0x2dba81(488)](_0x2dba81(470), _0x181ace, {
        action: _0x2dba81(353),
        shop: _0x5c3587
      }), null;
    }
  }
  ["_dpDelete"](_0x3147bd) {
    const _0x2007de = _0x6414db,
      _0x50d65e = {
        VhdAG: _0x2007de(315)
      };
    try {
      _0x528cb0[_0x2007de(340)][_0x2007de(386)](this._dpKey(_0x3147bd), void 0), log.disk(_0x2007de(342), {
        shop: _0x3147bd
      });
    } catch (_0x4cbb57) {
      log[_0x2007de(488)](_0x2007de(470), _0x4cbb57, {
        action: _0x50d65e.VhdAG,
        shop: _0x3147bd
      });
    }
  }
  ["_dpRebuildFromEntity"](_0x4cfb07, _0x59218c) {
    const _0xf4c437 = _0x6414db,
      _0x172f53 = [];
    for (let _0xaa948d = 1; _0xaa948d <= 10; _0xaa948d++) {
      const _0x3a76b1 = this[_0xf4c437(390)](_0x59218c, _0xaa948d);
      if (!_0x3a76b1) break;
      const _0x181524 = this[_0xf4c437(379)](_0x3a76b1);
      if (!_0x181524) break;
      let _0x5e93ab = ![];
      for (let _0x28be61 = 0; _0x28be61 < this[_0xf4c437(335)]; _0x28be61++) {
        const _0x3c03fe = _0x181524[_0xf4c437(499)](_0x28be61);
        if (_0x3c03fe) _0x5e93ab = !![];
        _0x172f53.push(_0x3c03fe ? _0x3c03fe.clone() : void 0);
      }
      if (!_0x5e93ab) break;
    }
    if (_0x172f53[_0xf4c437(331)] > 0) {
      this[_0xf4c437(392)](_0x59218c, _0x172f53);
      const _0x10be0e = {};
      for (let _0x49b596 = 0; _0x49b596 < _0x172f53[_0xf4c437(331)]; _0x49b596++) {
        if (_0x172f53[_0x49b596]) _0x10be0e[String(_0x49b596)] = this[_0xf4c437(408)](_0x172f53[_0x49b596]);
      }
      this[_0xf4c437(421)][_0xf4c437(326)](this[_0xf4c437(295)](_0x59218c), {
        v: 2,
        items: _0x10be0e,
        ts: Date[_0xf4c437(464)]()
      }), this._boundRamCache();
    }
    return _0x172f53;
  }
  ["_dpSetSlot"](_0x300f9c, _0xb7f0e4, _0x3dcec7) {
    const _0x2ba80c = _0x6414db,
      _0x2a9ae3 = {
        YFCkQ: function (_0x399338, _0x4adc7b) {
          return _0x399338(_0x4adc7b);
        },
        ulfXD: function (_0x10f32d, _0x2bdec1) {
          return _0x10f32d(_0x2bdec1);
        }
      };
    try {
      const _0x4d86ea = this[_0x2ba80c(377)](_0x300f9c);
      if (_0x3dcec7) _0x4d86ea[_0x2ba80c(443)][_0x2a9ae3[_0x2ba80c(364)](String, _0xb7f0e4)] = this[_0x2ba80c(408)](_0x3dcec7);else delete _0x4d86ea.items[_0x2a9ae3.ulfXD(String, _0xb7f0e4)];
      _0x4d86ea.ts = Date.now(), _0x528cb0[_0x2ba80c(340)][_0x2ba80c(386)](this._dpKey(_0x300f9c), JSON.stringify(_0x4d86ea));
    } catch (_0xb80de1) {}
  }
  ["_readDpObject"](_0x459fe4) {
    const _0x210f40 = _0x6414db,
      _0x3ba591 = {
        TCSUu: function (_0x37bf04, _0x40f841) {
          return _0x37bf04 === _0x40f841;
        }
      };
    try {
      const _0x586ed9 = _0x528cb0[_0x210f40(340)][_0x210f40(420)](this._dpKey(_0x459fe4));
      if (_0x586ed9) {
        const _0xcec11e = JSON[_0x210f40(375)](_0x586ed9);
        if (_0xcec11e && _0x3ba591[_0x210f40(349)](_0xcec11e.v, 2) && _0xcec11e[_0x210f40(443)]) return _0xcec11e;
        if (_0xcec11e && _0xcec11e.v === 1 && _0xcec11e[_0x210f40(443)]) return {
          v: 2,
          items: _0xcec11e[_0x210f40(443)],
          ts: _0xcec11e.ts || Date[_0x210f40(464)]()
        };
      }
    } catch (_0x291b38) {}
    return {
      v: 2,
      items: {},
      ts: Date[_0x210f40(464)]()
    };
  }
  ["_ramSetSlot"](_0x122027, _0x4e118c, _0x5b172b) {
    const _0x538f9f = _0x6414db;
    this[_0x538f9f(438)](_0x122027, _0x4e118c, _0x5b172b), this._markDirty(_0x122027), this[_0x538f9f(409)](), log.ram(_0x538f9f(368), {
      shop: _0x122027,
      slot: _0x4e118c,
      item: _0x5b172b ? _0x5b172b[_0x538f9f(454)] ?? "?" : null
    });
  }
  ["_markDirty"](_0x4a8c37) {
    const _0x530843 = _0x6414db,
      _0x4c6f58 = !this._dirty[_0x530843(276)](_0x4a8c37);
    this._dirty.add(_0x4a8c37), log.cache(_0x530843(309), {
      shop: _0x4a8c37,
      pending: this._dirty[_0x530843(384)],
      first: _0x4c6f58
    });
    if (this[_0x530843(406)] === null) try {
      this._flushHandle = _0x528cb0.system[_0x530843(363)](() => this[_0x530843(329)](), this[_0x530843(302)]), log.cache(_0x530843(282), {
        everyTicks: this[_0x530843(302)]
      });
    } catch (_0x443165) {
      this[_0x530843(406)] = null, log[_0x530843(488)](_0x530843(486), _0x443165, {
        action: _0x530843(314)
      });
    }
  }
  ["flushDirty"](_0x1366ed = ![]) {
    const _0x5df508 = _0x6414db,
      _0x379728 = {
        YgaDR: "Dirty shop missing from RAM cache",
        MjuiW: _0x5df508(470),
        eFCpN: _0x5df508(329),
        sSKea: function (_0x50f54f, _0x2af23d) {
          return _0x50f54f - _0x2af23d;
        }
      };
    if (this[_0x5df508(452)][_0x5df508(384)] === 0) {
      if (_0x1366ed) log[_0x5df508(470)](_0x5df508(277));
      return 0;
    }
    const _0x448b91 = Date[_0x5df508(464)](),
      _0x6fb8a9 = Array[_0x5df508(271)](this[_0x5df508(452)]);
    let _0x2587de = 0;
    for (const _0x5b03c6 of _0x6fb8a9) {
      try {
        const _0x45990b = this[_0x5df508(421)][_0x5df508(455)](this[_0x5df508(295)](_0x5b03c6));
        if (!_0x45990b) throw new Error(_0x379728[_0x5df508(459)]);
        this[_0x5df508(441)](_0x5b03c6, _0x45990b), this._dirty.delete(_0x5b03c6), _0x2587de++;
      } catch (_0x188df6) {
        log[_0x5df508(488)](_0x379728[_0x5df508(435)], _0x188df6, {
          action: "flushDirty",
          shop: _0x5b03c6
        });
      }
    }
    return this[_0x5df508(409)](), log.disk(_0x379728[_0x5df508(288)], {
      shops: _0x2587de,
      pending: _0x6fb8a9,
      ms: _0x379728.sSKea(Date.now(), _0x448b91)
    }), _0x2587de;
  }
  ["_writeRamToDp"](_0xff6eac, _0x3536c9) {
    const _0x42dfa6 = _0x6414db,
      _0xcbc799 = {
        v: 2,
        items: _0x3536c9[_0x42dfa6(443)] || {},
        ts: _0x3536c9.ts || Date[_0x42dfa6(464)]()
      },
      _0x4b85af = JSON[_0x42dfa6(346)](_0xcbc799);
    _0x528cb0.world[_0x42dfa6(386)](this[_0x42dfa6(295)](_0xff6eac), _0x4b85af), log[_0x42dfa6(470)]("RAM\u2192DP", {
      shop: _0xff6eac,
      slots: Object[_0x42dfa6(430)](_0xcbc799.items).length,
      bytes: _0x4b85af.length
    });
  }
  ["stopFlusher"]() {
    const _0xe9ad20 = _0x6414db;
    if (this[_0xe9ad20(406)] !== null) {
      try {
        _0x528cb0[_0xe9ad20(510)].clearRun(this._flushHandle);
      } catch (_0xbe2634) {}
      this[_0xe9ad20(406)] = null, log[_0xe9ad20(486)](_0xe9ad20(450));
    }
  }
  ["_boundRamCache"]() {
    const _0x361d4c = _0x6414db;
    let _0x2ce92c = 0;
    for (const _0x54604b of this._ramCache[_0x361d4c(430)]()) {
      if (this[_0x361d4c(421)][_0x361d4c(384)] <= this[_0x361d4c(491)]) break;
      if (this._dirty[_0x361d4c(276)](_0x54604b) || this[_0x361d4c(452)].has(_0x54604b[_0x361d4c(480)](this[_0x361d4c(358)].length))) continue;
      this[_0x361d4c(421)][_0x361d4c(291)](_0x54604b), _0x2ce92c++;
    }
    return _0x2ce92c;
  }
  ["_boundLiveCache"]() {
    const _0x4a5adc = _0x6414db,
      _0x311923 = {
        DkWbp: function (_0x116fac, _0x181c51) {
          return _0x116fac <= _0x181c51;
        }
      };
    let _0x5c301a = 0;
    for (const _0x3f331b of this[_0x4a5adc(412)].keys()) {
      if (_0x311923.DkWbp(this[_0x4a5adc(412)].size, this[_0x4a5adc(493)])) break;
      this[_0x4a5adc(412)].delete(_0x3f331b), _0x5c301a++;
    }
    return _0x5c301a;
  }
  ["_boundEntityCache"]() {
    const _0x479103 = _0x6414db;
    let _0x4dca5c = 0;
    for (const _0x3a0821 of this._entityCache[_0x479103(430)]()) {
      if (this[_0x479103(310)].size <= this.MAX_ENTITY_CACHE) break;
      this._entityCache.delete(_0x3a0821), _0x4dca5c++;
    }
    return _0x4dca5c;
  }
  ["_boundCaches"]() {
    const _0x572958 = _0x6414db;
    return this[_0x572958(409)]() + this[_0x572958(506)]() + this[_0x572958(485)]();
  }
  ["getCacheStats"]() {
    const _0x4126e3 = _0x6414db;
    return {
      ram: this._ramCache[_0x4126e3(384)],
      live: this._liveCache[_0x4126e3(384)],
      entity: this._entityCache[_0x4126e3(384)],
      dirty: this[_0x4126e3(452)].size,
      ramCap: this[_0x4126e3(491)],
      liveCap: this[_0x4126e3(493)],
      entityCap: this.MAX_ENTITY_CACHE
    };
  }
  ["markStorageDirty"]() {
    const _0xd26c6e = _0x6414db;
    this._storageDirty = !![], log.gc(_0xd26c6e(400));
  }
  ["consumeStorageDirty"]() {
    const _0x1d4218 = _0x6414db,
      _0x4e28b9 = this[_0x1d4218(344)] === !![];
    return this[_0x1d4218(344)] = ![], log.gc(_0x1d4218(476), {
      wasDirty: _0x4e28b9
    }), _0x4e28b9;
  }
  ["getDisplayData"](_0x35fb87) {
    const _0x16693b = _0x6414db,
      _0x4d9525 = {
        emCoM: function (_0x2f6bde, _0x44a379) {
          return _0x2f6bde === _0x44a379;
        },
        aqavm: "getDisplayData miss \u2192 DP"
      },
      _0x43248d = this[_0x16693b(421)].get(this[_0x16693b(295)](_0x35fb87));
    if (_0x43248d && _0x43248d.items) {
      if (_0x16693b(341) !== _0x16693b(341)) {
        const _0x331e98 = this[_0x16693b(310)][_0x16693b(455)](_0x26dc10);
        _0x331e98 && typeof _0x5de062.id === "string" && _0x4d9525[_0x16693b(404)](_0x331e98[_0x16693b(382)], _0x4ca298.id) && this[_0x16693b(310)][_0x16693b(291)](_0xd5e31f);
      } else return log[_0x16693b(316)]("getDisplayData hit", {
        shop: _0x35fb87,
        slots: Object[_0x16693b(430)](_0x43248d.items)[_0x16693b(331)]
      }), _0x43248d[_0x16693b(443)];
    }
    log.ram(_0x4d9525[_0x16693b(356)], {
      shop: _0x35fb87
    });
    const _0x1a4d50 = this[_0x16693b(353)](_0x35fb87);
    return _0x1a4d50 && (this[_0x16693b(421)][_0x16693b(326)](this._dpKey(_0x35fb87), {
      v: 2,
      items: _0x1a4d50,
      ts: Date[_0x16693b(464)]()
    }), this._boundRamCache()), _0x1a4d50 || {};
  }
  ["_ramUpdate"](_0x2b10d6, _0x46d774, _0x271323) {
    const _0xeb3b86 = _0x6414db,
      _0x14b2f1 = this[_0xeb3b86(295)](_0x2b10d6);
    let _0x471c4d = this[_0xeb3b86(421)][_0xeb3b86(455)](_0x14b2f1);
    if (!_0x471c4d) {
      const _0x4500bd = this[_0xeb3b86(353)](_0x2b10d6);
      _0x471c4d = _0x4500bd ? {
        v: 2,
        items: _0x4500bd,
        ts: Date[_0xeb3b86(464)]()
      } : {
        v: 2,
        items: {},
        ts: Date[_0xeb3b86(464)]()
      }, this[_0xeb3b86(421)][_0xeb3b86(326)](_0x14b2f1, _0x471c4d);
    }
    if (_0x271323) _0x471c4d.items[String(_0x46d774)] = this._itemToPlain(_0x271323);else delete _0x471c4d[_0xeb3b86(443)][String(_0x46d774)];
    _0x471c4d.ts = Date[_0xeb3b86(464)]();
  }
  ["_ramDelete"](_0x54d440) {
    const _0x2d35f6 = _0x6414db;
    this[_0x2d35f6(421)][_0x2d35f6(291)](this._dpKey(_0x54d440)), this._dirty[_0x2d35f6(291)](_0x54d440);
  }
  ["_isStackAlive"](_0x1d1140) {
    const _0x5f0cd2 = _0x6414db,
      _0x396c49 = {
        ihKny: _0x5f0cd2(431)
      };
    if (!_0x1d1140) return ![];
    try {
      const _0x26ded2 = _0x1d1140[_0x5f0cd2(454)];
      return typeof _0x26ded2 === _0x396c49[_0x5f0cd2(270)] && _0x26ded2[_0x5f0cd2(331)] > 0;
    } catch (_0x4d8393) {
      return ![];
    }
  }
  ["_liveKey"](_0x5aa644, _0x8df82d) {
    return _0x5aa644 + "#" + _0x8df82d;
  }
  ["getLive"](_0xd65416, _0x488a06, _0x205165) {
    const _0x13ec5d = _0x6414db,
      _0x1b4156 = {
        EdJkp: _0x13ec5d(502)
      },
      _0x3a7332 = this._liveKey(_0x488a06, _0x205165);
    if (this[_0x13ec5d(412)].has(_0x3a7332)) {
      const _0x42ca00 = this._liveCache.get(_0x3a7332);
      if (_0x42ca00 === null) return this[_0x13ec5d(399)][_0x13ec5d(501)]++, void 0;
      if (this._isStackAlive(_0x42ca00)) return this[_0x13ec5d(399)][_0x13ec5d(501)]++, _0x42ca00.clone();
      this._liveStats[_0x13ec5d(440)]++, this[_0x13ec5d(412)][_0x13ec5d(291)](_0x3a7332), log[_0x13ec5d(486)](_0x1b4156.EdJkp, {
        key: _0x3a7332,
        invalid: this[_0x13ec5d(399)][_0x13ec5d(440)]
      });
    }
    this._liveStats[_0x13ec5d(402)]++;
    try {
      const _0x286b6b = this[_0x13ec5d(451)](_0xd65416, _0x488a06, _0x205165);
      if (_0x286b6b) return this[_0x13ec5d(412)][_0x13ec5d(326)](_0x3a7332, _0x286b6b), this[_0x13ec5d(506)](), log.cache("getLive miss\u2192entity", {
        key: _0x3a7332,
        item: _0x286b6b.typeId,
        amount: _0x286b6b[_0x13ec5d(465)],
        miss: this[_0x13ec5d(399)][_0x13ec5d(402)]
      }), _0x286b6b.clone();
      return this[_0x13ec5d(412)][_0x13ec5d(326)](_0x3a7332, null), this._boundLiveCache(), log[_0x13ec5d(486)]("getLive miss\u2192empty", {
        key: _0x3a7332,
        miss: this[_0x13ec5d(399)][_0x13ec5d(402)]
      }), void 0;
    } catch (_0x426a86) {
      return log[_0x13ec5d(488)]("cache", _0x426a86, {
        action: _0x13ec5d(312),
        key: _0x3a7332
      }), void 0;
    }
  }
  ["_readLiveFromEntity"](_0x24c8a0, _0x4921d4, _0x4d0d7c) {
    const _0x294006 = _0x6414db,
      _0x34f5cc = {
        iUIpL: _0x294006(370),
        KhlUL: _0x294006(293)
      },
      {
        box: _0x7ab644,
        local: _0x16f866
      } = this[_0x294006(437)](_0x4d0d7c),
      _0x2036ff = this[_0x294006(390)](_0x4921d4, _0x7ab644);
    if (!_0x2036ff) return log[_0x294006(370)](_0x294006(508), {
      shop: _0x4921d4,
      box: _0x7ab644
    }), void 0;
    const _0x1f7211 = this[_0x294006(379)](_0x2036ff);
    if (!_0x1f7211) return log[_0x294006(370)](_0x294006(367), {
      shop: _0x4921d4,
      box: _0x7ab644,
      entityId: _0x2036ff.id
    }), void 0;
    try {
      const _0x44c911 = _0x1f7211[_0x294006(499)](_0x16f866);
      return log[_0x294006(370)](_0x294006(338), {
        shop: _0x4921d4,
        box: _0x7ab644,
        local: _0x16f866,
        item: _0x44c911 ? _0x44c911.typeId : null
      }), _0x44c911 ? _0x44c911.clone() : void 0;
    } catch (_0x354812) {
      return log[_0x294006(488)](_0x34f5cc[_0x294006(369)], _0x354812, {
        action: _0x34f5cc.KhlUL,
        shop: _0x4921d4,
        box: _0x7ab644,
        local: _0x16f866
      }), void 0;
    }
  }
  ["_setLive"](_0x46eea7, _0x391a5e, _0x32c56c) {
    const _0x1df789 = _0x6414db,
      _0x133c66 = this[_0x1df789(393)](_0x46eea7, _0x391a5e);
    if (_0x32c56c) try {
      const _0x3d6d48 = _0x32c56c[_0x1df789(354)]();
      this[_0x1df789(383)](_0x3d6d48) ? (this[_0x1df789(412)][_0x1df789(326)](_0x133c66, _0x3d6d48), this[_0x1df789(399)][_0x1df789(311)]++) : this._liveCache.delete(_0x133c66);
    } catch (_0x608ae6) {
      this._liveCache[_0x1df789(291)](_0x133c66);
    } else this[_0x1df789(412)][_0x1df789(326)](_0x133c66, null);
    this._boundLiveCache();
  }
  ["_clearLive"](_0x1a02df, _0x4c7a07) {
    const _0x392958 = _0x6414db;
    this._liveCache[_0x392958(291)](this[_0x392958(393)](_0x1a02df, _0x4c7a07));
  }
  ["_clearLiveFor"](_0x1362ba) {
    const _0x429549 = _0x6414db,
      _0x57aee9 = _0x1362ba + "#";
    for (const _0x3faf64 of this._liveCache[_0x429549(430)]()) {
      if (_0x3faf64[_0x429549(395)](_0x57aee9)) this._liveCache.delete(_0x3faf64);
    }
  }
  ["_clearLiveAll"]() {
    const _0x221123 = _0x6414db;
    this[_0x221123(412)][_0x221123(391)]();
  }
  ["getAllLive"](_0x297f48, _0x45fe0b) {
    const _0x33a07f = _0x6414db,
      _0x558f68 = {
        cSPTw: function (_0x311f16, _0x3d8afe) {
          return _0x311f16 + _0x3d8afe;
        },
        KPBwq: function (_0x1d4894, _0x3d48b1) {
          return _0x1d4894 - _0x3d48b1;
        }
      },
      _0x38a46a = [];
    for (let _0x27f2c5 = 1; _0x27f2c5 <= 10; _0x27f2c5++) {
      const _0xdda2db = this[_0x33a07f(390)](_0x45fe0b, _0x27f2c5);
      if (!_0xdda2db) break;
      const _0x58c993 = this[_0x33a07f(379)](_0xdda2db);
      if (!_0x58c993) break;
      let _0x221b59 = ![];
      for (let _0x5661da = 0; _0x5661da < this[_0x33a07f(335)]; _0x5661da++) {
        const _0x5e6c57 = _0x558f68[_0x33a07f(322)](_0x558f68[_0x33a07f(411)](_0x27f2c5, 1) * this[_0x33a07f(335)], _0x5661da),
          _0x5b1dbf = this.getLive(_0x297f48, _0x45fe0b, _0x5e6c57);
        if (_0x5b1dbf) _0x221b59 = !![];
        _0x38a46a[_0x33a07f(405)](_0x5b1dbf);
      }
      if (!_0x221b59) break;
    }
    return _0x38a46a;
  }
  ["getLiveStats"]() {
    const _0x5f3f2b = _0x6414db;
    return {
      size: this[_0x5f3f2b(412)][_0x5f3f2b(384)],
      ...this[_0x5f3f2b(399)]
    };
  }
  ["_clearEntityCache"](_0x5f3fae, _0x3a3966) {
    const _0x2642b6 = _0x6414db;
    this._entityCache[_0x2642b6(291)](_0x5f3fae + "#" + _0x3a3966);
  }
  ["_clearEntityCacheFor"](_0x3e1842) {
    const _0x427773 = _0x6414db;
    for (const _0x3bd556 of this._entityCache[_0x427773(430)]()) {
      if (_0x3bd556[_0x427773(395)](_0x3e1842 + "#")) this[_0x427773(310)].delete(_0x3bd556);
    }
  }
  ["_clearEntityCacheAll"]() {
    const _0x32bdbe = _0x6414db;
    this[_0x32bdbe(310)][_0x32bdbe(391)]();
  }
  ["_getHiddenLocation"](_0x11f5ce, _0x6a5faa = 1) {
    const _0x108d44 = _0x6414db,
      _0x457d01 = {
        zxMnU: function (_0x171f11, _0x3bab88) {
          return _0x171f11 >>> _0x3bab88;
        }
      };
    let _0x55ba8a = _0x457d01[_0x108d44(275)](2166136261, 0);
    const _0x33d5ed = _0x11f5ce + "#" + _0x6a5faa;
    for (let _0x341d18 = 0; _0x341d18 < _0x33d5ed[_0x108d44(331)]; _0x341d18++) {
      _0x55ba8a ^= _0x33d5ed[_0x108d44(307)](_0x341d18), _0x55ba8a = Math[_0x108d44(371)](_0x55ba8a, 16777619) >>> 0;
    }
    const _0x28b473 = this[_0x108d44(434)] + _0x55ba8a % 1e5,
      _0x5a6cdd = this[_0x108d44(283)] + (_0x55ba8a >>> 16) % 1e5;
    return {
      x: _0x28b473,
      y: this.HIDDEN_Y,
      z: _0x5a6cdd
    };
  }
  ["_getOrCreateEntity"](_0x20fb1d, _0x15fa79 = 1, _0x55773c = null) {
    const _0x15c5ed = _0x6414db,
      _0x28457a = {
        jZkGh: function (_0x253e5a, _0x4462fb) {
          return _0x253e5a + _0x4462fb;
        },
        WdKdx: _0x15c5ed(333),
        QTkIM: function (_0xae881d, _0x36b4a5) {
          return _0xae881d + _0x36b4a5;
        },
        UHHQJ: function (_0x459bfb, _0x2892af) {
          return _0x459bfb > _0x2892af;
        },
        OeSbD: function (_0x11d367, _0x3d44ba) {
          return _0x11d367 === _0x3d44ba;
        },
        GMWpU: _0x15c5ed(431),
        pHyZs: function (_0x3f1bd6, _0x1a2a9b) {
          return _0x3f1bd6 + _0x1a2a9b;
        }
      },
      _0x5b1653 = _0x28457a[_0x15c5ed(509)](_0x20fb1d, "#") + _0x15fa79,
      _0x3bf1a3 = this[_0x15c5ed(310)].get(_0x5b1653);
    if (_0x3bf1a3) {
      try {
        if (_0x15c5ed(333) === _0x28457a[_0x15c5ed(448)]) {
          const _0x56aae4 = _0x528cb0[_0x15c5ed(340)][_0x15c5ed(357)](_0x3bf1a3[_0x15c5ed(296)]);
          if (_0x56aae4) {
            const _0x5d944d = this[_0x15c5ed(294)](_0x56aae4, _0x3bf1a3.entityId, _0x3bf1a3.dimId);
            if (_0x5d944d) return _0x5d944d;
          }
        } else this._syncRamFromDp(_0x4c009e[_0x15c5ed(480)](_0x585851[_0x15c5ed(331)]));
      } catch (_0x43846b) {}
      this[_0x15c5ed(310)][_0x15c5ed(291)](_0x5b1653);
    }
    const _0x227071 = _0x28457a[_0x15c5ed(511)](this[_0x15c5ed(415)], ":") + _0x20fb1d + "#" + _0x15fa79;
    let _0x2cb1a2 = _0x55773c && _0x55773c[_0x15c5ed(281)] ? _0x55773c[_0x15c5ed(281)] : _0x528cb0[_0x15c5ed(340)][_0x15c5ed(357)](_0x15c5ed(320)),
      _0x3a5fe7 = [];
    const _0x12db02 = [_0x15c5ed(320), _0x15c5ed(447), "the_end"];
    for (const _0x51e762 of _0x12db02) {
      try {
        const _0x220d3f = _0x528cb0[_0x15c5ed(340)][_0x15c5ed(357)](_0x51e762);
        if (!_0x220d3f) continue;
        _0x3a5fe7 = _0x220d3f.getEntities({
          type: this[_0x15c5ed(300)],
          tags: [_0x227071]
        });
        if (_0x3a5fe7 && _0x28457a[_0x15c5ed(432)](_0x3a5fe7[_0x15c5ed(331)], 0)) {
          _0x2cb1a2 = _0x220d3f;
          break;
        }
      } catch (_0x39d231) {}
    }
    if (_0x3a5fe7.length > 0) {
      const _0x4cfdf3 = _0x3a5fe7[0];
      return _0x4cfdf3 && _0x28457a[_0x15c5ed(297)](typeof _0x4cfdf3.id, _0x28457a.GMWpU) && (this[_0x15c5ed(310)][_0x15c5ed(326)](_0x5b1653, {
        dimId: _0x2cb1a2.id,
        entityId: _0x4cfdf3.id
      }), this._boundEntityCache()), log[_0x15c5ed(370)](_0x15c5ed(362), {
        shop: _0x20fb1d,
        box: _0x15fa79,
        dim: _0x2cb1a2.id,
        entityId: _0x4cfdf3 && _0x4cfdf3.id
      }), _0x4cfdf3;
    }
    let _0x58eee5;
    if (_0x55773c && _0x55773c.location) {
      const _0x5157ca = _0x55773c[_0x15c5ed(352)];
      _0x58eee5 = {
        x: Math[_0x15c5ed(285)](_0x5157ca.x) + 2,
        y: _0x28457a[_0x15c5ed(416)](Math[_0x15c5ed(285)](_0x5157ca.y), 8),
        z: Math[_0x15c5ed(285)](_0x5157ca.z) + 2
      }, log.entity("getOrCreate: loc near player", {
        shop: _0x20fb1d,
        box: _0x15fa79,
        loc: _0x58eee5
      });
    } else _0x58eee5 = this._getHiddenLocation(_0x20fb1d, _0x15fa79), log[_0x15c5ed(370)](_0x15c5ed(433), {
      shop: _0x20fb1d,
      box: _0x15fa79,
      loc: _0x58eee5
    });
    const _0x55d73a = _0x2cb1a2[_0x15c5ed(284)](this[_0x15c5ed(300)], _0x58eee5);
    return _0x55d73a[_0x15c5ed(445)](_0x227071), _0x55d73a.addTag("shopstorage"), this[_0x15c5ed(319)](_0x20fb1d, _0x15fa79), _0x55d73a[_0x15c5ed(351)] = _0x15c5ed(410) + _0x20fb1d + "#" + _0x15fa79 + _0x15c5ed(376), log[_0x15c5ed(370)](_0x15c5ed(365), {
      shop: _0x20fb1d,
      box: _0x15fa79,
      dim: _0x2cb1a2.id,
      entityId: _0x55d73a.id,
      loc: _0x58eee5
    }), _0x55d73a;
  }
  ["_getEntityById"](_0x185eae, _0x61186f, _0x1e0d41) {
    const _0x1af7e9 = _0x6414db,
      _0x4b83f7 = {
        CkSTn: _0x1af7e9(474)
      };
    if (!_0x61186f) return null;
    try {
      const _0x43de60 = _0x528cb0.world.getEntity(_0x61186f);
      if (_0x43de60 && _0x43de60[_0x1af7e9(403)]) return _0x43de60;
      return null;
    } catch (_0x4a222a) {}
    if (!_0x185eae || typeof _0x185eae[_0x1af7e9(336)] !== _0x4b83f7.CkSTn) return null;
    try {
      const _0x4512b9 = _0x185eae.getEntities({
        type: this[_0x1af7e9(300)]
      });
      if (!_0x4512b9 || _0x4512b9[_0x1af7e9(331)] === 0) return null;
      for (const _0x2fc95b of _0x4512b9) {
        try {
          if (_0x2fc95b && _0x2fc95b.id === _0x61186f) return _0x2fc95b;
        } catch (_0x16b8fd) {}
      }
    } catch (_0x4cf8d1) {}
    return null;
  }
  ["_findExistingEntity"](_0x3bb577, _0x1635a6 = 1) {
    const _0xc88ba0 = _0x6414db,
      _0x90fcdd = {
        mWvdb: _0xc88ba0(320),
        jxJEt: function (_0x532461, _0x5d4f7b) {
          return _0x532461 === _0x5d4f7b;
        },
        rjrgZ: _0xc88ba0(397)
      },
      _0x28ed45 = _0x3bb577 + "#" + _0x1635a6,
      _0x28d0e9 = this[_0xc88ba0(310)][_0xc88ba0(455)](_0x28ed45);
    if (_0x28d0e9) {
      try {
        const _0x1b0fef = _0x528cb0[_0xc88ba0(340)][_0xc88ba0(357)](_0x28d0e9.dimId);
        if (_0x1b0fef) {
          const _0x36330b = this[_0xc88ba0(294)](_0x1b0fef, _0x28d0e9[_0xc88ba0(382)], _0x28d0e9[_0xc88ba0(296)]);
          if (_0x36330b) return log[_0xc88ba0(370)](_0xc88ba0(497), {
            shop: _0x3bb577,
            box: _0x1635a6,
            entityId: _0x28d0e9[_0xc88ba0(382)],
            dim: _0x28d0e9[_0xc88ba0(296)]
          }), _0x36330b;
          log[_0xc88ba0(370)](_0xc88ba0(303), {
            shop: _0x3bb577,
            box: _0x1635a6,
            entityId: _0x28d0e9.entityId,
            dim: _0x28d0e9[_0xc88ba0(296)]
          });
        }
      } catch (_0x3aaec3) {
        log[_0xc88ba0(488)]("entity", _0x3aaec3, {
          action: "find: _getEntityById",
          shop: _0x3bb577,
          box: _0x1635a6
        });
      }
      this[_0xc88ba0(310)].delete(_0x28ed45);
    }
    const _0x325f57 = this[_0xc88ba0(415)] + ":" + _0x3bb577 + "#" + _0x1635a6,
      _0x55e47c = [_0x90fcdd.mWvdb, "nether", _0xc88ba0(460)];
    for (const _0x59ee6e of _0x55e47c) {
      try {
        const _0x33488d = _0x528cb0.world[_0xc88ba0(357)](_0x59ee6e);
        if (!_0x33488d) continue;
        const _0x6f6d67 = _0x33488d[_0xc88ba0(336)]({
          type: this[_0xc88ba0(300)],
          tags: [_0x325f57]
        });
        if (_0x6f6d67 && _0x6f6d67.length > 0) {
          const _0x3566e8 = _0x6f6d67[0];
          return _0x3566e8 && _0x90fcdd.jxJEt(typeof _0x3566e8.id, _0xc88ba0(431)) && (this[_0xc88ba0(310)][_0xc88ba0(326)](_0x28ed45, {
            dimId: _0x33488d.id,
            entityId: _0x3566e8.id
          }), this[_0xc88ba0(485)]()), log[_0xc88ba0(370)](_0xc88ba0(334), {
            shop: _0x3bb577,
            box: _0x1635a6,
            dim: _0x59ee6e,
            entityId: _0x3566e8 && _0x3566e8.id,
            found: _0x6f6d67.length
          }), _0x3566e8;
        }
      } catch (_0xcbe550) {
        log[_0xc88ba0(488)](_0xc88ba0(370), _0xcbe550, {
          action: _0xc88ba0(439),
          shop: _0x3bb577,
          box: _0x1635a6,
          dim: _0x59ee6e
        });
      }
    }
    return log[_0xc88ba0(370)](_0x90fcdd[_0xc88ba0(419)], {
      shop: _0x3bb577,
      box: _0x1635a6,
      tag: _0x325f57
    }), null;
  }
  ["_getContainer"](_0xb5a933) {
    const _0x3861e3 = _0x6414db,
      _0x25c2b7 = {
        XzOYW: "minecraft:inventory"
      };
    if (!_0xb5a933) return null;
    const _0x50cfa4 = _0xb5a933.getComponent(_0x25c2b7[_0x3861e3(347)]);
    return _0x50cfa4?.[_0x3861e3(496)] ?? null;
  }
  ["_compute"](_0x586c0f) {
    const _0x1eb07b = _0x6414db,
      _0x3ec6fc = {
        pLltO: function (_0x59295b, _0x18f369) {
          return _0x59295b + _0x18f369;
        }
      },
      _0x1d5efc = _0x3ec6fc[_0x1eb07b(396)](Math[_0x1eb07b(285)](_0x586c0f / this[_0x1eb07b(335)]), 1),
      _0x56061e = _0x586c0f % this[_0x1eb07b(335)];
    return {
      box: _0x1d5efc,
      local: _0x56061e
    };
  }
  ["_pruneBoxIfEmpty"](_0x1dcd37, _0x4faf46, _0xed93c5) {
    const _0x30addf = _0x6414db,
      _0x8f30a8 = {
        jfvOS: function (_0x410b02, _0x110806) {
          return _0x410b02 <= _0x110806;
        }
      };
    if (!_0xed93c5) return;
    const _0x1273aa = this._getContainer(_0xed93c5);
    if (!_0x1273aa) return;
    let _0x33f577 = ![];
    for (let _0x248e17 = 0; _0x248e17 < this[_0x30addf(335)]; _0x248e17++) {
      if (_0x1273aa[_0x30addf(499)](_0x248e17)) {
        _0x33f577 = !![];
        break;
      }
    }
    if (_0x33f577) return;
    if (_0x4faf46 > 1) {
      this._clearEntityCache(_0x1dcd37, _0x4faf46), this.forceRemoveEntity(_0xed93c5);
      return;
    }
    try {
      for (let _0x5073a3 = 2; _0x8f30a8[_0x30addf(513)](_0x5073a3, 10); _0x5073a3++) {
        const _0x194cc0 = this._findExistingEntity(_0x1dcd37, _0x5073a3);
        if (!_0x194cc0) continue;
        const _0x31ff2f = this[_0x30addf(379)](_0x194cc0);
        if (!_0x31ff2f) continue;
        for (let _0x25372f = 0; _0x25372f < this[_0x30addf(335)]; _0x25372f++) {
          if (_0x31ff2f[_0x30addf(499)](_0x25372f)) return;
        }
      }
    } catch (_0x2a0ada) {}
    this._clearEntityCache(_0x1dcd37, 1), this[_0x30addf(462)](_0xed93c5);
  }
  ["forceRemoveEntity"](_0x461c8f) {
    const _0x439b35 = _0x6414db,
      _0x29b482 = {
        sVhdf: "KYkjZ",
        kuEjH: _0x439b35(467),
        msYDL: _0x439b35(495),
        qMuZQ: "function",
        eIzNX: "XGBqs",
        ZkrZj: _0x439b35(298),
        NLKJB: _0x439b35(370),
        XUvNG: function (_0x2efae0, _0x1c6a4c) {
          return _0x2efae0 === _0x1c6a4c;
        },
        fjdVY: function (_0x12eaa1, _0xe36a1e) {
          return _0x12eaa1 + _0xe36a1e;
        }
      };
    if (!_0x461c8f) return;
    try {
      const _0x852ec1 = typeof _0x461c8f[_0x439b35(504)] === _0x439b35(474) ? _0x461c8f[_0x439b35(504)]() : [];
      for (const _0x1f73d7 of _0x852ec1) {
        if (_0x29b482[_0x439b35(418)](typeof _0x1f73d7, _0x439b35(431)) && _0x1f73d7[_0x439b35(395)](this[_0x439b35(415)] + ":")) {
          const _0x18c6ed = _0x1f73d7.match(new RegExp(_0x29b482[_0x439b35(428)]("^", this.baseNamespace) + _0x439b35(332)));
          if (_0x18c6ed) this[_0x439b35(330)](_0x18c6ed[1]);
        }
      }
    } catch (_0xc44216) {}
    for (const _0x4a617b of this._entityCache.keys()) {
      const _0x3a86c6 = this._entityCache.get(_0x4a617b);
      _0x3a86c6 && typeof _0x461c8f.id === _0x439b35(431) && _0x3a86c6[_0x439b35(382)] === _0x461c8f.id && this[_0x439b35(310)].delete(_0x4a617b);
    }
    const _0x13e4de = _0x11ff30 => {
      const _0x17ecb7 = _0x439b35;
      if (_0x29b482[_0x17ecb7(378)] === "KYkjZ") try {
        if (!_0x11ff30) return;
        try {
          if (_0x11ff30.location) {
            const _0x3e41b0 = _0x11ff30[_0x17ecb7(352)];
            _0x11ff30.teleport({
              x: _0x3e41b0.x,
              y: -300,
              z: _0x3e41b0.z
            });
          }
        } catch (_0x15f739) {}
        try {
          const _0x3b9228 = _0x11ff30.getComponent(_0x17ecb7(481));
          _0x3b9228 && _0x3b9228[_0x17ecb7(427)](0);
        } catch (_0x13f887) {
          !String(_0x13f887)[_0x17ecb7(446)](_0x17ecb7(372)) && log.err("entity", _0x13f887, {
            action: _0x29b482[_0x17ecb7(337)]
          });
        }
        try {
          if (typeof _0x11ff30[_0x17ecb7(473)] === _0x17ecb7(474)) _0x11ff30[_0x17ecb7(473)]();
        } catch (_0x13a796) {
          !String(_0x13a796)[_0x17ecb7(446)](_0x17ecb7(372)) && log[_0x17ecb7(488)](_0x17ecb7(370), _0x13a796, {
            action: _0x29b482[_0x17ecb7(324)]
          });
        }
        try {
          if (typeof _0x11ff30[_0x17ecb7(305)] === _0x29b482[_0x17ecb7(287)]) _0x11ff30[_0x17ecb7(305)]();
        } catch (_0x1079dd) {
          _0x29b482.eIzNX === _0x29b482[_0x17ecb7(478)] ? _0x5890ba[_0x17ecb7(427)](0) : !String(_0x1079dd)[_0x17ecb7(446)](_0x17ecb7(372)) && log[_0x17ecb7(488)](_0x17ecb7(370), _0x1079dd, {
            action: _0x17ecb7(492)
          });
        }
      } catch (_0x37dd9e) {
        !String(_0x37dd9e)[_0x17ecb7(446)](_0x17ecb7(372)) && log[_0x17ecb7(488)](_0x29b482.NLKJB, _0x37dd9e, {
          action: _0x17ecb7(462)
        });
      } else this[_0x17ecb7(412)].set(_0x5656ef, null);
    };
    log[_0x439b35(370)]("REMOVE entity", {
      entityId: _0x461c8f && _0x461c8f.id,
      typeId: _0x461c8f && _0x461c8f[_0x439b35(454)],
      tags: (() => {
        const _0x49810d = _0x439b35;
        try {
          return _0x461c8f[_0x49810d(504)]();
        } catch (_0x2cf321) {
          return null;
        }
      })()
    }), _0x13e4de(_0x461c8f);
    try {
      _0x528cb0[_0x439b35(510)][_0x439b35(453)](() => {
        const _0x4f7f98 = _0x439b35;
        try {
          if (typeof _0x461c8f[_0x4f7f98(403)] === "boolean" && !_0x461c8f[_0x4f7f98(403)]) return;
        } catch (_0x3d74bb) {
          return;
        }
        log.entity(_0x4f7f98(449), {
          entityId: _0x461c8f && _0x461c8f.id
        }), _0x13e4de(_0x461c8f);
      });
    } catch (_0x546937) {
      log[_0x439b35(488)]("entity", _0x546937, {
        action: "schedule remove retry"
      });
    }
  }
  ["get"](_0x59f474, _0x448b8f, _0x10c5e2) {
    const _0x2033b1 = _0x6414db,
      _0x3f6c76 = this[_0x2033b1(393)](_0x448b8f, _0x10c5e2);
    if (this[_0x2033b1(412)][_0x2033b1(276)](_0x3f6c76)) {
      const _0x1aaccb = this[_0x2033b1(412)][_0x2033b1(455)](_0x3f6c76);
      if (_0x1aaccb === null) return void 0;
      if (this[_0x2033b1(383)](_0x1aaccb)) return this[_0x2033b1(399)][_0x2033b1(501)]++, _0x1aaccb[_0x2033b1(354)]();
      this[_0x2033b1(399)][_0x2033b1(440)]++, this._liveCache[_0x2033b1(291)](_0x3f6c76);
    }
    const {
        box: _0xc41923,
        local: _0x39e59e
      } = this[_0x2033b1(437)](_0x10c5e2),
      _0x14ffee = this[_0x2033b1(390)](_0x448b8f, _0xc41923),
      _0x5e20f8 = this._getContainer(_0x14ffee);
    if (!_0x5e20f8) return void 0;
    try {
      const _0x2afc42 = _0x5e20f8.getItem(_0x39e59e);
      if (_0x2afc42) {
        const _0x246e74 = _0x2afc42[_0x2033b1(354)]();
        return this[_0x2033b1(479)](_0x448b8f, _0x10c5e2, _0x246e74), _0x246e74.clone();
      }
      return this[_0x2033b1(412)][_0x2033b1(326)](_0x3f6c76, null), this[_0x2033b1(506)](), void 0;
    } catch (_0x3a428d) {
      return void 0;
    }
  }
  ["set"](_0x3bff7e, _0x27cb31, _0x42d0e6, _0x2b2bf8, _0x49d3a2) {
    const _0x22b79f = _0x6414db,
      _0x3ab246 = {
        FdYiD: _0x22b79f(483)
      },
      {
        box: _0x3d08b9,
        local: _0x2bb6cd
      } = this._compute(_0x42d0e6);
    log[_0x22b79f(487)]("set", {
      shop: _0x27cb31,
      slot: _0x42d0e6,
      box: _0x3d08b9,
      local: _0x2bb6cd,
      item: _0x2b2bf8 ? _0x2b2bf8[_0x22b79f(454)] ?? "?" : null,
      amount: _0x2b2bf8 ? _0x2b2bf8.amount : 0
    });
    let _0x456e46 = this._getOrCreateEntity(_0x27cb31, _0x3d08b9, _0x3bff7e),
      _0x2ddd32 = this[_0x22b79f(379)](_0x456e46);
    const _0x5811a1 = (_0x5ae156, _0x59bb2d) => {
      const _0x3ece54 = _0x22b79f;
      if (!_0x59bb2d) return ![];
      try {
        const _0x216686 = !_0x2b2bf8;
        return _0x59bb2d[_0x3ece54(290)](_0x2bb6cd, _0x2b2bf8 ? _0x2b2bf8[_0x3ece54(354)]() : void 0), this[_0x3ece54(477)](_0x27cb31, _0x42d0e6, _0x216686 ? null : _0x2b2bf8), this._setLive(_0x27cb31, _0x42d0e6, _0x216686 ? null : _0x2b2bf8), _0x216686 ? (deleteShulkerCache(_0x27cb31, _0x42d0e6), this[_0x3ece54(319)](_0x27cb31, _0x3d08b9), _0x5ae156 && this[_0x3ece54(494)](_0x27cb31, _0x3d08b9, _0x5ae156)) : _0x2b2bf8 && _0x2b2bf8.typeId[_0x3ece54(446)](_0x3ab246[_0x3ece54(424)]) && readShulker(_0x2b2bf8, _0x3bff7e, _0x27cb31, _0x42d0e6), !![];
      } catch (_0x5ec1ac) {
        return log[_0x3ece54(488)](_0x3ece54(470), _0x5ec1ac, {
          action: "set"
        }), ![];
      }
    };
    if (_0x2ddd32) {
      const _0x358196 = _0x5811a1(_0x456e46, _0x2ddd32);
      if (typeof _0x49d3a2 === "function") _0x49d3a2(_0x358196);
      return _0x358196 && this[_0x22b79f(400)](), _0x358196;
    }
    return _0x528cb0.system[_0x22b79f(453)](() => {
      const _0x576e11 = _0x22b79f,
        _0x28baac = {
          stDTd: function (_0x39f29e, _0x23aeeb, _0x3d6975) {
            return _0x39f29e(_0x23aeeb, _0x3d6975);
          }
        };
      _0x456e46 = this[_0x576e11(414)](_0x27cb31, _0x3d08b9, _0x3bff7e), _0x2ddd32 = this[_0x576e11(379)](_0x456e46);
      if (_0x2ddd32) {
        const _0x3e8c08 = _0x5811a1(_0x456e46, _0x2ddd32);
        if (_0x3e8c08) this.markStorageDirty();
        if (typeof _0x49d3a2 === "function") _0x49d3a2(_0x3e8c08);
      } else _0x528cb0[_0x576e11(510)][_0x576e11(453)](() => {
        const _0x3289eb = _0x576e11;
        _0x456e46 = this[_0x3289eb(414)](_0x27cb31, _0x3d08b9, _0x3bff7e), _0x2ddd32 = this._getContainer(_0x456e46);
        if (_0x2ddd32) {
          const _0x1bbea9 = _0x28baac.stDTd(_0x5811a1, _0x456e46, _0x2ddd32);
          if (_0x1bbea9) this.markStorageDirty();
          if (typeof _0x49d3a2 === _0x3289eb(474)) _0x49d3a2(_0x1bbea9);
        } else {
          log.err(_0x3289eb(370), new Error(_0x3289eb(444)), {
            action: _0x3289eb(326),
            shop: _0x27cb31,
            slot: _0x42d0e6
          });
          if (typeof _0x49d3a2 === _0x3289eb(474)) _0x49d3a2(![]);
        }
      });
    }), !![];
  }
  ["add"](_0x14bede, _0x2c3c67, _0xf4707d) {
    const _0x2706cf = _0x6414db,
      _0x4ac0a1 = {
        TBZRn: "add",
        LJBxp: function (_0x24342b, _0x1fe798, _0x48cc08, _0x318dc2, _0x2ebd42) {
          return _0x24342b(_0x1fe798, _0x48cc08, _0x318dc2, _0x2ebd42);
        },
        OWees: "shulker_box"
      };
    if (!_0xf4707d) return ![];
    log[_0x2706cf(487)](_0x4ac0a1[_0x2706cf(289)], {
      shop: _0x2c3c67,
      item: _0xf4707d[_0x2706cf(454)],
      amount: _0xf4707d[_0x2706cf(465)]
    });
    const _0x1a8874 = 10;
    for (let _0x3ad3d2 = 1; _0x3ad3d2 <= _0x1a8874; _0x3ad3d2++) {
      const _0x501fef = this[_0x2706cf(390)](_0x2c3c67, _0x3ad3d2);
      if (!_0x501fef) continue;
      const _0x1cfcd8 = this._getContainer(_0x501fef);
      if (!_0x1cfcd8) continue;
      for (let _0x65b252 = 0; _0x65b252 < this[_0x2706cf(335)]; _0x65b252++) {
        if (!_0x1cfcd8[_0x2706cf(499)](_0x65b252)) {
          _0x1cfcd8[_0x2706cf(290)](_0x65b252, _0xf4707d[_0x2706cf(354)]());
          const _0x30d581 = (_0x3ad3d2 - 1) * this[_0x2706cf(335)] + _0x65b252;
          return this[_0x2706cf(477)](_0x2c3c67, _0x30d581, _0xf4707d), this[_0x2706cf(479)](_0x2c3c67, _0x30d581, _0xf4707d), this[_0x2706cf(400)](), log[_0x2706cf(487)]("add \u2192 placed", {
            shop: _0x2c3c67,
            box: _0x3ad3d2,
            local: _0x65b252,
            slot: _0x30d581
          }), _0xf4707d.typeId[_0x2706cf(446)](_0x2706cf(483)) && _0x4ac0a1[_0x2706cf(381)](readShulker, _0xf4707d, _0x14bede, _0x2c3c67, _0x30d581), !![];
        }
      }
    }
    for (let _0x2c27ad = 1; _0x2c27ad <= _0x1a8874; _0x2c27ad++) {
      if (!this._findExistingEntity(_0x2c3c67, _0x2c27ad)) {
        const _0x5162a4 = this._getOrCreateEntity(_0x2c3c67, _0x2c27ad, _0x14bede),
          _0x21bac3 = this[_0x2706cf(379)](_0x5162a4);
        if (_0x21bac3) {
          _0x21bac3[_0x2706cf(290)](0, _0xf4707d[_0x2706cf(354)]());
          const _0x331fb4 = (_0x2c27ad - 1) * this.MAX_SLOTS;
          return this[_0x2706cf(477)](_0x2c3c67, _0x331fb4, _0xf4707d), this._setLive(_0x2c3c67, _0x331fb4, _0xf4707d), this[_0x2706cf(400)](), log[_0x2706cf(487)](_0x2706cf(457), {
            shop: _0x2c3c67,
            box: _0x2c27ad,
            slot: _0x331fb4
          }), _0xf4707d.typeId[_0x2706cf(446)](_0x4ac0a1[_0x2706cf(505)]) && readShulker(_0xf4707d, _0x14bede, _0x2c3c67, _0x331fb4), !![];
        }
        break;
      }
    }
    return log.w("entity", _0x2706cf(374), {
      shop: _0x2c3c67,
      maxBoxes: 10
    }), ![];
  }
  ["adds"](_0x36d128, _0x4a7e7f, _0x9305c3) {
    const _0x3e57e2 = _0x6414db,
      _0xaed94b = {
        ZVVKD: function (_0x5809ba, _0x1384fe) {
          return _0x5809ba === _0x1384fe;
        }
      };
    if (!_0x9305c3 || _0xaed94b[_0x3e57e2(500)](_0x9305c3[_0x3e57e2(331)], 0)) return ![];
    log[_0x3e57e2(487)](_0x3e57e2(472), {
      shop: _0x4a7e7f,
      count: _0x9305c3[_0x3e57e2(331)]
    });
    let _0x32799d = !![];
    for (let _0x13525e = 0; _0x13525e < _0x9305c3.length; _0x13525e++) {
      if (!this[_0x3e57e2(299)](_0x36d128, _0x4a7e7f, _0x9305c3[_0x13525e])) _0x32799d = ![];
    }
    return log[_0x3e57e2(487)](_0x3e57e2(373), {
      shop: _0x4a7e7f,
      count: _0x9305c3[_0x3e57e2(331)],
      success: _0x32799d
    }), _0x32799d;
  }
  ["getAll"](_0x32263b, _0x3d04c7) {
    const _0x7e39c9 = _0x6414db,
      _0x3061c6 = {
        PaXGg: function (_0x9eb14, _0x1d4b97) {
          return _0x9eb14 <= _0x1d4b97;
        }
      },
      _0x592caa = [],
      _0x472b01 = Date.now();
    let _0x59032e = 0;
    for (let _0x54a909 = 1; _0x3061c6[_0x7e39c9(461)](_0x54a909, 10); _0x54a909++) {
      const _0x30d093 = this[_0x7e39c9(390)](_0x3d04c7, _0x54a909);
      if (!_0x30d093) break;
      _0x59032e++;
      const _0x58be2b = this[_0x7e39c9(379)](_0x30d093);
      if (!_0x58be2b) break;
      let _0x3a7376 = ![];
      for (let _0x5611f9 = 0; _0x5611f9 < this[_0x7e39c9(335)]; _0x5611f9++) {
        const _0x235705 = _0x58be2b.getItem(_0x5611f9);
        if (_0x235705) _0x3a7376 = !![];
        _0x592caa.push(_0x235705 ? _0x235705.clone() : void 0);
      }
      if (!_0x3a7376) {
        this._pruneBoxIfEmpty(_0x3d04c7, _0x54a909, _0x30d093);
        break;
      }
    }
    let _0x5e0e31 = 0;
    for (let _0x2eaf5a = 0; _0x2eaf5a < _0x592caa[_0x7e39c9(331)]; _0x2eaf5a++) if (_0x592caa[_0x2eaf5a]) _0x5e0e31++;
    return log.ram(_0x7e39c9(279), {
      shop: _0x3d04c7,
      boxes: _0x59032e,
      slots: _0x592caa.length,
      filled: _0x5e0e31,
      ms: Date[_0x7e39c9(464)]() - _0x472b01
    }), _0x592caa;
  }
  ["clear"](_0x2a45a1, _0x50f920) {
    const _0x12c29e = _0x6414db,
      _0x566120 = {
        KlBoS: function (_0x50c490, _0x38c2bc) {
          return _0x50c490 < _0x38c2bc;
        }
      };
    if (!_0x50f920) return;
    log[_0x12c29e(487)](_0x12c29e(391), {
      shop: _0x50f920,
      player: _0x2a45a1 && _0x2a45a1[_0x12c29e(482)]
    }), this[_0x12c29e(452)][_0x12c29e(291)](_0x50f920), this._dpDelete(_0x50f920), this[_0x12c29e(355)](_0x50f920), this[_0x12c29e(330)](_0x50f920), this[_0x12c29e(400)]();
    const _0x93d5c9 = _0x2a45a1 && _0x2a45a1[_0x12c29e(281)] ? _0x2a45a1.dimension : _0x528cb0[_0x12c29e(340)].getDimension("overworld");
    for (let _0xc2c1b8 = 1; _0xc2c1b8 <= 10; _0xc2c1b8++) {
      const _0x267c38 = this[_0x12c29e(415)] + ":" + _0x50f920 + "#" + _0xc2c1b8;
      try {
        const _0x56b6f3 = _0x93d5c9[_0x12c29e(336)]({
          type: this[_0x12c29e(300)],
          tags: [_0x267c38]
        });
        for (const _0x32ef67 of _0x56b6f3) {
          const _0x24e9b3 = this[_0x12c29e(379)](_0x32ef67);
          if (_0x24e9b3) {
            for (let _0x2acac0 = 0; _0x566120[_0x12c29e(413)](_0x2acac0, this[_0x12c29e(335)]); _0x2acac0++) {
              _0x24e9b3.setItem(_0x2acac0, void 0);
            }
            deleteAllForStorage(_0x50f920), this[_0x12c29e(494)](_0x50f920, _0xc2c1b8, _0x32ef67);
          }
        }
      } catch (_0xc4ec23) {
        log[_0x12c29e(488)]("entity", _0xc4ec23, {
          action: _0x12c29e(391),
          shop: _0x50f920,
          box: _0xc2c1b8
        });
      }
    }
  }
  ["deleteFor"](_0x5b06fb, _0x2676e6 = null) {
    const _0x178e8c = _0x6414db,
      _0x11a152 = {
        HjUTQ: function (_0x3cc36f, _0x40801d) {
          return _0x3cc36f(_0x40801d);
        },
        MBzZy: function (_0x3020d4, _0x2eca22) {
          return _0x3020d4 + _0x2eca22;
        },
        IxEuF: _0x178e8c(463)
      };
    if (!_0x5b06fb) return;
    log.flow(_0x178e8c(389), {
      shop: _0x5b06fb,
      player: _0x2676e6 && _0x2676e6.name
    }), this[_0x178e8c(452)].delete(_0x5b06fb), this._dpDelete(_0x5b06fb), this._ramDelete(_0x5b06fb), this[_0x178e8c(308)](_0x5b06fb), this[_0x178e8c(330)](_0x5b06fb), this.markStorageDirty();
    const _0x32c7ab = _0x2676e6 && _0x2676e6[_0x178e8c(281)] ? _0x2676e6.dimension : _0x528cb0[_0x178e8c(340)].getDimension(_0x178e8c(320));
    _0x11a152[_0x178e8c(507)](deleteAllForStorage, _0x5b06fb);
    for (let _0x1776da = 1; _0x1776da <= 10; _0x1776da++) {
      const _0x28e5da = _0x11a152[_0x178e8c(280)](_0x11a152[_0x178e8c(280)](this[_0x178e8c(415)] + ":", _0x5b06fb), "#") + _0x1776da;
      try {
        const _0x4d3057 = _0x32c7ab[_0x178e8c(336)]({
          type: this[_0x178e8c(300)],
          tags: [_0x28e5da]
        });
        for (const _0x326d4e of _0x4d3057) {
          this[_0x178e8c(462)](_0x326d4e);
        }
      } catch (_0x103e95) {
        log[_0x178e8c(488)]("entity", _0x103e95, {
          action: _0x11a152[_0x178e8c(484)],
          shop: _0x5b06fb,
          box: _0x1776da
        });
      }
    }
    try {
      const _0x1a2aef = _0x32c7ab[_0x178e8c(336)]({
        type: this[_0x178e8c(300)],
        tags: ["shopstorage"]
      });
      for (const _0x5e61d3 of _0x1a2aef) {
        try {
          const _0x4dee85 = typeof _0x5e61d3[_0x178e8c(504)] === _0x178e8c(474) ? _0x5e61d3.getTags() : [];
          _0x4dee85.some(_0x60f375 => _0x60f375[_0x178e8c(446)](_0x5b06fb)) && this.forceRemoveEntity(_0x5e61d3);
        } catch (_0x45fc56) {}
      }
    } catch (_0xc111a2) {
      log.err(_0x178e8c(370), _0xc111a2, {
        action: _0x178e8c(387),
        shop: _0x5b06fb
      });
    }
  }
  ["cleanupAndMerge"](_0x4a6d3f) {
    const _0x310f8e = _0x6414db,
      _0x1b86e4 = {
        sMzVL: function (_0x3416ca, _0x935695) {
          return _0x3416ca !== _0x935695;
        },
        VYFBA: _0x310f8e(323),
        FuzYq: function (_0x554cb6, _0x55df9d) {
          return _0x554cb6 <= _0x55df9d;
        },
        ZkRhx: function (_0x43f958, _0x423c90) {
          return _0x43f958 - _0x423c90;
        },
        oyfUM: function (_0x27dec7, _0x4950b0) {
          return _0x27dec7 < _0x4950b0;
        }
      },
      _0x504f7e = ["overworld", "nether", _0x310f8e(460)];
    let _0x20b93e = 0;
    try {
      for (const _0x286e2a of _0x504f7e) {
        let _0x30b7f8;
        try {
          _0x310f8e(343) === _0x310f8e(343) ? _0x30b7f8 = _0x528cb0.world[_0x310f8e(357)](_0x286e2a) : (_0x5961ea.setItem(_0x12debe, _0x2d7ecd), _0x2ce08a[_0x310f8e(290)](_0x51f4fa, _0x478dc6));
        } catch (_0x3e0216) {
          if (_0x1b86e4.sMzVL(_0x1b86e4[_0x310f8e(321)], "iZfWl")) this[_0x310f8e(421)][_0x310f8e(291)](this[_0x310f8e(295)](_0x39deba)), this._dirty[_0x310f8e(291)](_0x16c184);else continue;
        }
        if (!_0x30b7f8) continue;
        let _0x469dd2 = [];
        try {
          _0x469dd2 = _0x30b7f8.getEntities({
            type: this[_0x310f8e(300)]
          });
        } catch (_0x5aae98) {
          continue;
        }
        const _0x14ece7 = {},
          _0x39ab7f = [];
        for (const _0x4f2dc8 of _0x469dd2) {
          const _0x44b3b4 = typeof _0x4f2dc8[_0x310f8e(504)] === _0x310f8e(474) ? _0x4f2dc8[_0x310f8e(504)]() : [],
            _0x3c9e6e = _0x44b3b4.find(_0x2d7020 => _0x2d7020[_0x310f8e(395)](this.baseNamespace + ":"));
          if (!_0x3c9e6e) {
            if (_0x310f8e(407) === "SMsUS") {
              const _0x30d632 = _0x15da5e.getItem(_0x1f48e8);
              if (_0x30d632) _0x607eba = !![];
              _0x2872ac[_0x310f8e(405)](_0x30d632 ? _0x30d632[_0x310f8e(354)]() : _0xb0c0e7);
            } else {
              _0x39ab7f[_0x310f8e(405)](_0x4f2dc8);
              continue;
            }
          }
          const _0x69c748 = _0x3c9e6e.match(new RegExp("^" + this[_0x310f8e(415)] + ":(.+)#\\d+$"));
          if (_0x69c748) {
            const _0x147e67 = _0x69c748[1];
            if (_0x4a6d3f && !_0x4a6d3f[_0x310f8e(446)](_0x147e67)) continue;
          }
          if (!_0x14ece7[_0x3c9e6e]) _0x14ece7[_0x3c9e6e] = [];
          _0x14ece7[_0x3c9e6e].push(_0x4f2dc8);
        }
        this[_0x310f8e(398)]();
        for (const _0x24c9bd of _0x39ab7f) {
          this[_0x310f8e(462)](_0x24c9bd), _0x20b93e++;
        }
        let _0x570f28 = 0;
        for (const _0x255b04 in _0x14ece7) {
          const _0x1695b4 = _0x14ece7[_0x255b04];
          if (_0x1b86e4.FuzYq(_0x1695b4.length, 1)) continue;
          _0x570f28 += _0x1b86e4.ZkRhx(_0x1695b4[_0x310f8e(331)], 1), _0x1695b4[_0x310f8e(401)]((_0x409602, _0x2df243) => this[_0x310f8e(498)](_0x2df243) - this._countItems(_0x409602));
          const _0x3b2697 = _0x1695b4[0],
            _0x27b909 = this[_0x310f8e(379)](_0x3b2697);
          for (let _0x5c4f23 = 1; _0x5c4f23 < _0x1695b4[_0x310f8e(331)]; _0x5c4f23++) {
            const _0x4101af = _0x1695b4[_0x5c4f23],
              _0x1d1cfe = this[_0x310f8e(379)](_0x4101af);
            if (_0x27b909 && _0x1d1cfe) for (let _0x349ca3 = 0; _0x1b86e4.oyfUM(_0x349ca3, this[_0x310f8e(335)]); _0x349ca3++) {
              const _0x5e1432 = _0x1d1cfe[_0x310f8e(499)](_0x349ca3);
              if (_0x5e1432) {
                const _0x280ed6 = _0x27b909[_0x310f8e(499)](_0x349ca3);
                if (!_0x280ed6) _0x27b909[_0x310f8e(290)](_0x349ca3, _0x5e1432), _0x1d1cfe.setItem(_0x349ca3, void 0);else for (let _0x27353a = 0; _0x27353a < this.MAX_SLOTS; _0x27353a++) {
                  if (!_0x27b909[_0x310f8e(499)](_0x27353a)) {
                    _0x27b909[_0x310f8e(290)](_0x27353a, _0x5e1432), _0x1d1cfe[_0x310f8e(290)](_0x349ca3, void 0);
                    break;
                  }
                }
              }
            }
            this[_0x310f8e(462)](_0x4101af), _0x20b93e++;
          }
        }
      }
    } catch (_0x31c456) {
      log[_0x310f8e(488)]("gc", _0x31c456, {
        action: _0x310f8e(306)
      });
    }
    return _0x20b93e;
  }
  ["_countItems"](_0x45b04a) {
    const _0x49fdfc = _0x6414db,
      _0x8354fd = {
        LqqSL: function (_0x2dd9ec, _0x1a7ae6) {
          return _0x2dd9ec < _0x1a7ae6;
        }
      },
      _0x2804e8 = this._getContainer(_0x45b04a);
    if (!_0x2804e8) return 0;
    let _0x805ddc = 0;
    for (let _0x1022ce = 0; _0x8354fd[_0x49fdfc(328)](_0x1022ce, this.MAX_SLOTS); _0x1022ce++) {
      if (_0x2804e8[_0x49fdfc(499)](_0x1022ce)) _0x805ddc++;
    }
    return _0x805ddc;
  }
};
var storage_default = new ItemStorage();
(function (_0x49e753, _0x16a59e) {
  const _0xd13aa7 = {
      _0xd98967: 712,
      _0x50ef35: 744,
      _0xa8fb1b: "K]wR",
      _0x2a09ea: 138,
      _0xa9e53: "K]wR",
      _0x3bce3f: 663,
      _0x5e0851: "ib$6",
      _0xd5ba57: 181,
      _0x44d689: 763,
      _0x10b504: "a*nr",
      _0x5234be: 216,
      _0x381d5b: 724
    },
    _0x46a4c4 = {
      _0x968989: 711
    };
  function _0x3187eb(_0x1f2229, _0x30463) {
    return _0x1a24(_0x1f2229 - 170, _0x30463);
  }
  function _0x589666(_0x38d6f4, _0x1f59f2) {
    return _0x1a24(_0x1f59f2 - -_0x46a4c4._0x968989, _0x38d6f4);
  }
  const _0x46abde = _0x49e753();
  while (!![]) {
    try {
      const _0x20b120 = parseInt(_0x3187eb(_0xd13aa7._0xd98967, "VVvF")) / (-1 * -2399 + 8 * 683 + -7862) + -parseInt(_0x3187eb(_0xd13aa7._0x50ef35, "EFmn")) / (1 * -4157 + -2360 + -2173 * -3) + -parseInt(_0x589666(_0xd13aa7._0xa8fb1b, -_0xd13aa7._0x2a09ea)) / (-1912 + -1021 * -2 + -127) * (-parseInt(_0x589666(_0xd13aa7._0xa9e53, -161)) / (284 * 11 + -8768 + -706 * -8)) + parseInt(_0x3187eb(_0xd13aa7._0x3bce3f, _0xd13aa7._0x5e0851)) / (-2491 * 1 + 1 * 6589 + -4093) * (-parseInt(_0x589666("96]w", -_0xd13aa7._0xd5ba57)) / (1351 * -3 + 2397 + 1662)) + -parseInt(_0x3187eb(_0xd13aa7._0x44d689, _0xd13aa7._0x10b504)) / (-9396 + 2214 + -1027 * -7) * (-parseInt(_0x589666("tLDp", -_0xd13aa7._0x5234be)) / (1 * 1777 + -7139 + -1 * -5370)) + -parseInt(_0x3187eb(_0xd13aa7._0x381d5b, "VHxc")) / (1199 + 2 * -2537 + 3884) + parseInt(_0x3187eb(682, "tZ4k")) / (4538 * -2 + -3071 + 12157);
      if (_0x20b120 === _0x16a59e) break;else _0x46abde.push(_0x46abde.shift());
    } catch (_0x31b3a9) {
      _0x46abde.push(_0x46abde.shift());
    }
  }
})(_0x248c, 258676 + -25105 * -9 + -317745);
var FSET_PAGE_SIZE = -1154 * 8 + -7450 + 16727;
var FSET_MAX_PAGES = -2189 + 1 * 4619 + -20 * 121;
var DECO_LORE_MAX = 1913 + 118 * 2 + -2134;
var DECO_CMD_MAX = 6830 + 4178 + 423 * -26;
var STORAGE_MAX_SLOT = 3474 + -7450 + 6525;
function fsetSlotToPage(_0xb8a54a) {
  const _0x4577fb = {
      _0x556309: "h^iS"
    },
    _0x57f0d3 = {
      _0x17b3a1: 686
    };
  function _0x2c7a8f(_0x568d75, _0x4bc474) {
    return _0x1a24(_0x4bc474 - -_0x57f0d3._0x17b3a1, _0x568d75);
  }
  const _0x3cf9a6 = {
      FFVNc: function (_0xf9ea2a, _0x490bb5) {
        return _0xf9ea2a(_0x490bb5);
      },
      VAluu: function (_0x1fc89b, _0x3350fb) {
        return _0x1fc89b < _0x3350fb;
      },
      NhyKJ: function (_0x2af9c0, _0x672e82) {
        return _0x2af9c0 / _0x672e82;
      }
    },
    _0x5ae5fb = _0x3cf9a6[_0x2c7a8f("it&V", -167)](Number, _0xb8a54a);
  if (!Number[_0xdce8ce(304, _0x4577fb._0x556309)](_0x5ae5fb) || _0x3cf9a6[_0x2c7a8f("BYtd", -87)](_0x5ae5fb, -6446 + 2426 + 4020)) return 1 * 5709 + -13 * -631 + -376 * 37;
  function _0xdce8ce(_0x1ed9e, _0x58ab21) {
    return _0x1a24(_0x1ed9e - -190, _0x58ab21);
  }
  return Math[_0xdce8ce(427, "VoTF")](_0x3cf9a6.NhyKJ(_0x5ae5fb, FSET_PAGE_SIZE));
}
function composeDecoPage(_0xf99b79, _0xe6f132) {
  const _0x3fa41c = {
    _0x160d88: "MQar",
    _0x272e78: "^M]Y",
    _0x142e88: 146,
    _0x119d35: "Dgkn",
    _0x3b99ff: 894,
    _0x532e4e: "v7Vf",
    _0x4c6102: 904,
    _0x96d6c1: "r)JQ",
    _0x3536ee: 90,
    _0x245628: "da08",
    _0xb1826d: 177,
    _0x7af505: "VHxc",
    _0x4960d6: "h^iS",
    _0x2e59dc: 880,
    _0x230b0c: 188,
    _0x401ee6: "(F3B",
    _0x3bd48c: 153,
    _0x1f503f: 893,
    _0x4e17d3: 945,
    _0x414cb9: "S*Hy"
  };
  function _0x494bd7(_0x540c56, _0x39e025) {
    return _0x1a24(_0x540c56 - -694, _0x39e025);
  }
  const _0x13eb0e = {
      mjNvi: _0x332355(921, "K]wR")
    },
    _0x848bd8 = new Set(Array[_0x332355(922, _0x3fa41c._0x160d88)](_0xe6f132?.[_0x332355(822, _0x3fa41c._0x272e78) + _0x494bd7(-_0x3fa41c._0x142e88, _0x3fa41c._0x119d35)]) ? _0xe6f132["hiddenEntr" + _0x494bd7(-161, "WUGX")] : []),
    _0x11af61 = _0xe6f132?.[_0x332355(_0x3fa41c._0x3b99ff, "ib$6")] && typeof _0xe6f132.detached === _0x13eb0e[_0x332355(868, _0x3fa41c._0x532e4e)] ? _0xe6f132.detached : {};
  function _0x332355(_0x3e11b8, _0x1e476f) {
    return _0x1a24(_0x3e11b8 - 325, _0x1e476f);
  }
  const _0x53382f = [],
    _0x163ffb = new Set();
  for (const _0x40c3aa of Array[_0x332355(_0x3fa41c._0x4c6102, _0x3fa41c._0x96d6c1)](_0xf99b79?.[_0x494bd7(-_0x3fa41c._0x3536ee, _0x3fa41c._0x245628) + "s"]) ? _0xf99b79[_0x494bd7(-_0x3fa41c._0xb1826d, "EFmn") + "s"] : []) {
    if (!_0x40c3aa || _0x848bd8[_0x494bd7(-91, "k]70")](_0x40c3aa[_0x494bd7(-176, "rxAU")])) continue;
    const _0x4d9002 = _0x11af61[_0x40c3aa[_0x332355(874, _0x3fa41c._0x7af505)]];
    _0x53382f[_0x494bd7(-178, _0x3fa41c._0x4960d6)]({
      ..._0x40c3aa,
      ...(_0x4d9002 || {}),
      entryId: _0x40c3aa[_0x332355(_0x3fa41c._0x2e59dc, "l%@p")],
      isPageLayout: !![],
      isDetached: !!_0x4d9002
    }), _0x163ffb[_0x494bd7(-_0x3fa41c._0x230b0c, _0x3fa41c._0x401ee6)](_0x40c3aa[_0x494bd7(-_0x3fa41c._0x3bd48c, "VoTF")]);
  }
  for (const [_0x55064d, _0x5f3c3c] of Object[_0x332355(_0x3fa41c._0x1f503f, "tLDp")](_0x11af61)) {
    if (!_0x163ffb[_0x332355(824, "$6M)")](_0x55064d) && _0x5f3c3c && !_0x848bd8.has(_0x55064d)) _0x53382f[_0x332355(_0x3fa41c._0x4e17d3, _0x3fa41c._0x96d6c1)]({
      ..._0x5f3c3c,
      entryId: _0x55064d,
      isPageLayout: !![],
      isDetached: !![]
    });
  }
  return _0x53382f[_0x494bd7(-107, _0x3fa41c._0x414cb9)](_0x1a44ee => Number[_0x494bd7(-198, "(lf[")](_0x1a44ee[_0x494bd7(-123, "Auo6")]) && _0x1a44ee[_0x494bd7(-206, "VHxc")] >= -1153 * 1 + 2534 + -1381 && _0x1a44ee.slot < FSET_PAGE_SIZE);
}
function fsetPageSlotRange(_0x2c8821) {
  const _0x30b034 = {
      _0x3bb5d7: 245,
      _0x49587b: "XD2G"
    },
    _0x52af33 = {
      _0x4ed097: 266
    },
    _0x628467 = {
      _0x42794b: 279
    },
    _0x4ac6c3 = {
      UzNgZ: function (_0x545d0f, _0x3c6720) {
        return _0x545d0f > _0x3c6720;
      },
      rcmon: function (_0x3b7c8d, _0x5ad57e) {
        return _0x3b7c8d * _0x5ad57e;
      },
      UFiev: function (_0x11cf2b, _0x2f1005) {
        return _0x11cf2b - _0x2f1005;
      }
    };
  function _0x13a865(_0xa7d8b7, _0x118b31) {
    return _0x1a24(_0x118b31 - _0x628467._0x42794b, _0xa7d8b7);
  }
  const _0x419bdc = Number[_0x49ed2a("(F3B", 339)](_0x2c8821) && _0x4ac6c3.UzNgZ(_0x2c8821, -1 * -5972 + -4713 + -1 * 1259) ? Math[_0x13a865("(F3B", 851)](_0x2c8821) : 7106 + 7109 * 1 + -14215 * 1,
    _0x2ef1af = _0x4ac6c3[_0x49ed2a("603F", _0x30b034._0x3bb5d7)](_0x419bdc, FSET_PAGE_SIZE);
  function _0x49ed2a(_0x39806e, _0x4d12fe) {
    return _0x1a24(_0x4d12fe - -_0x52af33._0x4ed097, _0x39806e);
  }
  return {
    page: _0x419bdc,
    start: _0x2ef1af,
    end: _0x4ac6c3[_0x13a865(_0x30b034._0x49587b, 881)](_0x2ef1af + FSET_PAGE_SIZE, 468 + -1076 + -87 * -7)
  };
}
function fsetIsSetNode(_0x181080) {
  const _0x52d84d = {
      _0x17418b: 4,
      _0x138311: "#zCu",
      _0x155272: 929,
      _0x42b6ad: ")LH0",
      _0x4c15b9: 811,
      _0x485457: "S*Hy",
      _0x1d486c: "h^iS",
      _0x251d58: "eEhp",
      _0x23af3a: 46,
      _0xc28733: 902
    },
    _0x497ff4 = {
      _0x5e1208: 584
    };
  function _0x123244(_0x403f7a, _0x405da6) {
    return _0x1a24(_0x403f7a - -_0x497ff4._0x5e1208, _0x405da6);
  }
  const _0x116c7e = {
    xZnsp: function (_0x2aadd0, _0x3df05d) {
      return _0x2aadd0 === _0x3df05d;
    },
    LmEDp: function (_0x2a277b, _0x4e726d) {
      return _0x2a277b === _0x4e726d;
    },
    qHhOD: _0x123244(_0x52d84d._0x17418b, "^M]Y"),
    iStLV: _0x123244(-63, "$6M)")
  };
  if (!_0x181080) return ![];
  function _0x176cb2(_0x59d91c, _0x474a3d) {
    return _0x1a24(_0x59d91c - 311, _0x474a3d);
  }
  if (_0x116c7e[_0x123244(2, _0x52d84d._0x138311)](_0x181080[_0x176cb2(_0x52d84d._0x155272, _0x52d84d._0x42b6ad)], _0x176cb2(_0x52d84d._0x4c15b9, _0x52d84d._0x485457))) return !![];
  return _0x116c7e[_0x176cb2(843, "a*nr")](_0x181080[_0x176cb2(814, _0x52d84d._0x1d486c)], _0x116c7e[_0x123244(8, _0x52d84d._0x251d58)]) && _0x116c7e[_0x176cb2(921, "GUrM")](_0x181080[_0x123244(-_0x52d84d._0x23af3a, "Auo6")], _0x116c7e[_0x176cb2(_0x52d84d._0xc28733, "Iww8")]);
}
function fsetPageHasContent(_0x5b12c8, _0x38bd60) {
  const _0x4c173c = {
      _0xbf8c1d: 735
    },
    _0x3adb17 = {
      _0xbbffd9: 154
    },
    _0xee890d = {
      _0x4fc88a: 606
    };
  function _0x51ac61(_0x113610, _0x3e1f52) {
    return _0x1a24(_0x113610 - _0xee890d._0x4fc88a, _0x3e1f52);
  }
  const {
    start: _0x4ce18d,
    end: _0x264b57
  } = fsetPageSlotRange(_0x38bd60);
  function _0x543d00(_0x2f8a83, _0x4df9b0) {
    return _0x1a24(_0x4df9b0 - _0x3adb17._0xbbffd9, _0x2f8a83);
  }
  return (_0x5b12c8 || [])[_0x543d00("aeRq", _0x4c173c._0xbf8c1d)](_0x4ebc10 => _0x4ebc10 && typeof _0x4ebc10[_0x51ac61(1152, "K]wR")] === "number" && _0x4ebc10[_0x543d00("WUGX", 762)] >= _0x4ce18d && _0x4ebc10[_0x51ac61(1183, "nkGs")] <= _0x264b57);
}
function fsetNextContentPage(_0x3cd62c, _0x24bd93) {
  const _0x5cf7c0 = {
      _0x2fcff2: "KH7P",
      _0x1be320: "l%@p",
      _0x3e4102: 1293,
      _0x4b0013: "it&V"
    },
    _0x2b7855 = {
      _0x1f79f8: 669
    };
  function _0x267635(_0x57ee3, _0x205ae9) {
    return _0x1a24(_0x57ee3 - _0x2b7855._0x1f79f8, _0x205ae9);
  }
  const _0x2f97f0 = {
    YGWht: function (_0x2af40c, _0xa51f31) {
      return _0x2af40c + _0xa51f31;
    },
    iiKzF: function (_0x5d4262, _0x3405ab) {
      return _0x5d4262 < _0x3405ab;
    },
    rIZFE: function (_0x483632, _0x69fafa, _0x52776a) {
      return _0x483632(_0x69fafa, _0x52776a);
    }
  };
  function _0x2c90af(_0x151d71, _0xf3b753) {
    return _0x1a24(_0xf3b753 - 784, _0x151d71);
  }
  const _0x578bb0 = _0x2f97f0[_0x267635(1270, _0x5cf7c0._0x2fcff2)](Number[_0x2c90af(_0x5cf7c0._0x1be320, _0x5cf7c0._0x3e4102)](_0x24bd93) ? _0x24bd93 : -7447 + -9893 + 1156 * 15, 2282 * 3 + 1 * 7495 + -14340);
  for (let _0x115e1f = _0x578bb0; _0x2f97f0.iiKzF(_0x115e1f, FSET_MAX_PAGES); _0x115e1f++) {
    if (_0x2f97f0[_0x2c90af(_0x5cf7c0._0x4b0013, 1315)](fsetPageHasContent, _0x3cd62c, _0x115e1f)) return _0x115e1f;
  }
  return -(61 * -81 + -2 * 2213 + 9368);
}
function fsetPrevContentPage(_0x458acd, _0x44e8d9) {
  const _0x2bf77f = {
      _0x202bd0: "(F3B",
      _0x4c22c0: 1391,
      _0x3d0534: 68,
      _0x58bf1d: "tZ4k"
    },
    _0x1ff460 = {
      _0x477b5a: 437
    },
    _0x123a06 = {
      _0x10ff21: 840
    };
  function _0x27e1f6(_0x494e6f, _0x37ebd2) {
    return _0x1a24(_0x37ebd2 - _0x123a06._0x10ff21, _0x494e6f);
  }
  const _0x281016 = {
      WOowu: function (_0x15fef0, _0x33bb5d) {
        return _0x15fef0 - _0x33bb5d;
      },
      Tbicf: function (_0x4ce744, _0x3cc4c5) {
        return _0x4ce744 >= _0x3cc4c5;
      },
      rxRGI: function (_0x478b3f, _0x4bf602, _0x5c59b6) {
        return _0x478b3f(_0x4bf602, _0x5c59b6);
      }
    },
    _0x1dd6ef = _0x281016[_0x27e1f6(_0x2bf77f._0x202bd0, 1402)](Number[_0x27e1f6("KH7P", _0x2bf77f._0x4c22c0)](_0x44e8d9) ? _0x44e8d9 : 5878 + -7499 + 1621, 58 * 127 + 8086 + 15451 * -1);
  for (let _0x3e2ce1 = _0x1dd6ef; _0x281016[_0x462c4e("tZ4k", _0x2bf77f._0x3d0534)](_0x3e2ce1, -9998 + 9033 + 5 * 193); _0x3e2ce1--) {
    if (_0x281016[_0x462c4e(_0x2bf77f._0x58bf1d, 153)](fsetPageHasContent, _0x458acd, _0x3e2ce1)) return _0x3e2ce1;
  }
  function _0x462c4e(_0x8ec587, _0xc98c0f) {
    return _0x1a24(_0xc98c0f - -_0x1ff460._0x477b5a, _0x8ec587);
  }
  return -(913 + 2374 + 106 * -31);
}
function collectSubtreeStorageRefs(_0x155513, _0x32a264 = []) {
  const _0x47b9f3 = {
      _0x59738b: 97,
      _0x2e14c4: "r)JQ",
      _0x37a7e5: 87,
      _0x41dd9c: 849,
      _0x3c065d: "VVvF",
      _0x424315: 847,
      _0x2dc598: "WtQ]",
      _0x3fd0d0: "w4Vc",
      _0x4446d5: "@bNW",
      _0x3d1a83: 43,
      _0x4bd1ac: 862,
      _0x3103a1: "ib$6",
      _0xb24321: 835,
      _0x1e9872: 775,
      _0x4dd873: 754,
      _0x151a62: "603F",
      _0x1ffc91: "it&V",
      _0x2c6b1d: 68,
      _0x2c01e0: "96]w",
      _0x4187ae: "HE]%",
      _0x774979: "K)T%",
      _0x41015e: 60,
      _0x147871: "xmHc",
      _0x357008: 805,
      _0x25f268: 774,
      _0x1b892c: "S*Hy",
      _0x3086c0: 768,
      _0x12b1ad: 766,
      _0x5a1853: "KH7P",
      _0x2c559c: 9
    },
    _0x5bb965 = {
      _0x1bb62f: 240
    },
    _0x515818 = {
      _0x3139b4: 607
    };
  function _0x49f150(_0x56117d, _0xcfac37) {
    return _0x1a24(_0x56117d - -_0x515818._0x3139b4, _0xcfac37);
  }
  const _0x272b2c = {
    SuSWX: function (_0x1b1beb, _0x1a482b) {
      return _0x1b1beb(_0x1a482b);
    },
    khAYZ: function (_0x3c7782, _0x3477fc) {
      return _0x3c7782 < _0x3477fc;
    },
    qNoaD: function (_0x28773c, _0x13f943) {
      return _0x28773c >= _0x13f943;
    },
    xFCjz: function (_0x3f50a9, _0x21031b) {
      return _0x3f50a9 >= _0x21031b;
    },
    HiAUu: _0x49f150(-_0x47b9f3._0x59738b, _0x47b9f3._0x2e14c4) + "e",
    aevRC: function (_0x1b855c, _0x2521a4) {
      return _0x1b855c < _0x2521a4;
    },
    tmOQo: function (_0x398d2f, _0x3f1137) {
      return _0x398d2f >= _0x3f1137;
    },
    ahpwo: "cmd-remove",
    rMlEj: function (_0x3a470e, _0x58d17b) {
      return _0x3a470e === _0x58d17b;
    },
    bOWFB: _0x49f150(-_0x47b9f3._0x37a7e5, "oMQ6"),
    VnTqb: function (_0x2ef31a, _0x1929dd) {
      return _0x2ef31a === _0x1929dd;
    },
    JLdta: "number"
  };
  function _0x4cbb75(_0x4ef32e, _0x202d43) {
    return _0x1a24(_0x4ef32e - _0x5bb965._0x1bb62f, _0x202d43);
  }
  if (!_0x155513) return _0x32a264;
  if (_0x272b2c[_0x4cbb75(_0x47b9f3._0x41dd9c, _0x47b9f3._0x3c065d)](_0x155513[_0x4cbb75(_0x47b9f3._0x424315, "VHxc")], _0x4cbb75(800, _0x47b9f3._0x2dc598)) && typeof _0x155513.storage === _0x272b2c.bOWFB && _0x272b2c[_0x49f150(-46, _0x47b9f3._0x3fd0d0)](typeof _0x155513["storageOff" + _0x49f150(-100, "tZ4k")], _0x272b2c[_0x4cbb75(825, "jbC@")])) {
    if (_0x4cbb75(796, "K]wR") !== _0x49f150(-63, "it&V")) {
      const _0x84d232 = _0x2affaf[_0x4cbb75(755, _0x47b9f3._0x4446d5)](_0x3c313b) ? _0x4f6d12 : [];
      let _0x153184 = 91 * -1 + 9065 + -4487 * 2;
      const _0x3e11b5 = _0x272b2c[_0x49f150(-85, "VoTF")](_0x3bcab7, _0x84d232[_0x153184++] ?? ""),
        _0x5dce97 = _0x53a297(_0x84d232[_0x153184++] ?? "")[_0x49f150(-_0x47b9f3._0x3d1a83, "$6M)")](),
        _0x558d02 = !!_0x84d232[_0x153184++];
      let _0x4dbd1d = _0x10bd7a(_0x84d232[_0x153184++]);
      if (!_0x2f388d[_0x4cbb75(_0x47b9f3._0x4bd1ac, ")LH0")](_0x4dbd1d) || _0x272b2c[_0x49f150(-37, "GUrM")](_0x4dbd1d, -5 * -787 + 3361 * -1 + -574)) _0x4dbd1d = 2787 + 3 * 71 + -3e3;
      const _0x33065b = [];
      for (let _0x2c2c94 = -1098 + -1443 + 2541; _0x2c2c94 < _0x1787d9; _0x2c2c94++) _0x33065b[_0x49f150(7, _0x47b9f3._0x3103a1)](_0x976d4a(_0x84d232[_0x153184++] ?? ""));
      const _0x251248 = !!_0x84d232[_0x153184++];
      let _0x32d704 = ![];
      if (_0x272b2c[_0x4cbb75(763, _0x47b9f3._0x3c065d)](_0x5d6c9b, 2882 + -5801 * -1 + -8682)) _0x32d704 = !!_0x84d232[_0x153184++];
      const _0x394aca = [];
      for (let _0x4bcbd5 = -6954 * -1 + 6165 + -3 * 4373; _0x4bcbd5 < _0x5a3940; _0x4bcbd5++) _0x394aca[_0x4cbb75(_0x47b9f3._0xb24321, "$6M)")](_0x4a8fca(_0x84d232[_0x153184++] ?? "")[_0x4cbb75(_0x47b9f3._0x1e9872, "l%@p")]());
      const _0x467260 = !!_0x84d232[_0x153184++];
      let _0x678ab4 = ![];
      if (_0x272b2c[_0x4cbb75(_0x47b9f3._0x4dd873, _0x47b9f3._0x151a62)](_0x4a791f, -8752 + 174 * -5 + 9623 * 1)) _0x678ab4 = !!_0x84d232[_0x153184++];
      let _0x25f69c = _0x4cbb75(807, _0x47b9f3._0x1ffc91);
      if (_0x251248 && _0x272b2c[_0x49f150(-7, "S*Hy")](_0x188748, _0x54eec1)) _0x25f69c = _0x49f150(-_0x47b9f3._0x2c6b1d, _0x47b9f3._0x2c01e0);else {
        if (_0x32d704 && _0x108809 >= -8369 * 1 + 595 * -7 + 12535) _0x25f69c = _0x272b2c[_0x49f150(-24, _0x47b9f3._0x4187ae)];else {
          if (_0x467260 && _0x272b2c[_0x49f150(-31, _0x47b9f3._0x774979)](_0x2621cd, _0x193a73)) _0x25f69c = _0x49f150(-1, "3[7W");else {
            if (_0x678ab4 && _0x272b2c[_0x49f150(-_0x47b9f3._0x41015e, "3[7W")](_0x499494, -1181 * -1 + 31 * 4 + -1304)) _0x25f69c = _0x272b2c[_0x49f150(-18, _0x47b9f3._0x147871)];
          }
        }
      }
      return {
        name: _0x3e11b5,
        texture: _0x5dce97,
        glint: _0x558d02,
        durability: _0x4dbd1d,
        lore: _0x33065b,
        cmds: _0x394aca,
        action: _0x25f69c
      };
    } else _0x32a264[_0x4cbb75(_0x47b9f3._0x357008, "^M]Y")]({
      storage: _0x155513.storage,
      offset: _0x155513[_0x4cbb75(_0x47b9f3._0x25f268, _0x47b9f3._0x1b892c) + _0x4cbb75(_0x47b9f3._0x3086c0, "BYtd")]
    });
  }
  if (Array[_0x4cbb75(_0x47b9f3._0x12b1ad, "tLDp")](_0x155513[_0x49f150(-9, _0x47b9f3._0x5a1853)])) {
    for (const _0x521415 of _0x155513[_0x49f150(-_0x47b9f3._0x2c559c, "KH7P")]) collectSubtreeStorageRefs(_0x521415, _0x32a264);
  }
  return _0x32a264;
}
function nextChildNamespace(_0x236ec1, _0x5ccedc) {
  const _0x378780 = {
      _0x1f8507: 493,
      _0x1dfcf5: 466,
      _0x21c458: "96]w",
      _0xe0438d: 344,
      _0x42113b: 428,
      _0x57901e: 323
    },
    _0x562f78 = {
      _0x43bc70: 889
    },
    _0x1e3494 = {
      _0x130658: 59
    };
  function _0x4f208d(_0x557770, _0x351eff) {
    return _0x1a24(_0x351eff - -_0x1e3494._0x130658, _0x557770);
  }
  function _0xf90fe6(_0xae21b6, _0x28b5fe) {
    return _0x1a24(_0x28b5fe - -_0x562f78._0x43bc70, _0xae21b6);
  }
  const _0x4516e7 = {
    tUTmh: function (_0x1b655f, _0xb0bdee) {
      return _0x1b655f + _0xb0bdee;
    },
    CAEqX: _0x4f208d("S*Hy", _0x378780._0x1f8507),
    HPXif: function (_0x58f8cd, _0x229294) {
      return _0x58f8cd(_0x229294);
    },
    zPkeL: function (_0x356c5f, _0x552e8e) {
      return _0x356c5f > _0x552e8e;
    },
    SYkxv: function (_0x570afd, _0x18e28b) {
      return _0x570afd + _0x18e28b;
    }
  };
  let _0x3a8ea6 = 46 + -9 * -681 + -95 * 65;
  const _0x1918cf = new RegExp(_0x4516e7[_0x4f208d("eEhp", _0x378780._0x1dfcf5)]("^", _0x5ccedc) + _0x4516e7[_0x4f208d(_0x378780._0x21c458, 519)]);
  for (const _0x174641 of _0x236ec1 || []) {
    if (!_0x174641 || typeof _0x174641[_0xf90fe6("()@3", -_0x378780._0xe0438d)] !== _0x4f208d("v7Vf", 498)) continue;
    const _0x2c7f9e = _0x174641[_0xf90fe6("k]70", -353)].match(_0x1918cf);
    if (!_0x2c7f9e) continue;
    const _0x2a6213 = _0x4516e7[_0x4f208d("ib$6", _0x378780._0x42113b)](Number, _0x2c7f9e[350 + -6099 + 5750 * 1]);
    if (Number[_0xf90fe6("a*nr", -398)](_0x2a6213) && _0x4516e7[_0xf90fe6("WUGX", -_0x378780._0x57901e)](_0x2a6213, _0x3a8ea6)) _0x3a8ea6 = _0x2a6213;
  }
  return _0x4516e7[_0x4f208d("#zCu", 552)](_0x5ccedc + "_", _0x4516e7[_0xf90fe6("eEhp", -364)](_0x3a8ea6, -9053 * -1 + -1398 + -7654));
}
function parseDecoFormValues(_0x334194, _0x1ec089, _0x77966a) {
  const _0x9eae8c = {
      _0x513be7: 28,
      _0x1c97ec: 54,
      _0x3cd3fc: 143,
      _0x199790: 865,
      _0xfab20d: 988,
      _0x34e213: 903,
      _0xa39005: "m1I2",
      _0x4dfdd8: "(lf[",
      _0x30c942: 934,
      _0x5a3417: 83,
      _0x11df28: "#zCu",
      _0x3afd9d: "l%@p",
      _0xda35df: 991
    },
    _0x16123b = {
      EdoKp: function (_0x1c46fb, _0x152ba0) {
        return _0x1c46fb(_0x152ba0);
      },
      IaMbu: function (_0x101d12, _0x345070) {
        return _0x101d12 < _0x345070;
      },
      ihlOz: function (_0x2721ab, _0x236348) {
        return _0x2721ab < _0x236348;
      },
      tkzgq: function (_0x36cbd1, _0x223db3) {
        return _0x36cbd1(_0x223db3);
      },
      xduFj: function (_0x267618, _0x42463c) {
        return _0x267618 >= _0x42463c;
      },
      UHfvh: function (_0x5a6230, _0x48b12a) {
        return _0x5a6230 < _0x48b12a;
      },
      JKrzk: function (_0x58fc25, _0x5a4a37) {
        return _0x58fc25 >= _0x5a4a37;
      },
      nfdNC: _0xa5451c(_0x9eae8c._0x513be7, "^M]Y")
    },
    _0x481368 = Array[_0x201d17("(F3B", 866)](_0x77966a) ? _0x77966a : [];
  function _0xa5451c(_0x572675, _0x3b532f) {
    return _0x1a24(_0x572675 - -470, _0x3b532f);
  }
  let _0x53839e = -8376 + -320 + 1087 * 8;
  const _0x2128d3 = _0x16123b[_0x201d17(")LH0", 951)](String, _0x481368[_0x53839e++] ?? ""),
    _0x14fc9f = String(_0x481368[_0x53839e++] ?? "").trim(),
    _0x512f76 = !!_0x481368[_0x53839e++];
  let _0x18d712 = _0x16123b[_0x201d17("m1I2", 939)](Number, _0x481368[_0x53839e++]);
  if (!Number[_0x201d17("jbC@", 995)](_0x18d712) || _0x16123b[_0x201d17("rxAU", 960)](_0x18d712, 531 + -6540 * -1 + 7071 * -1)) _0x18d712 = -2 * 4939 + 6319 + -1 * -3559;
  const _0x46c60d = [];
  for (let _0x41fa04 = 1 * 2389 + -1 * 5189 + 2800; _0x16123b[_0xa5451c(_0x9eae8c._0x1c97ec, "(F3B")](_0x41fa04, _0x334194); _0x41fa04++) _0x46c60d[_0xa5451c(_0x9eae8c._0x3cd3fc, "rxAU")](_0x16123b[_0x201d17("tZ4k", 935)](String, _0x481368[_0x53839e++] ?? ""));
  const _0x45584a = !!_0x481368[_0x53839e++];
  let _0x4cfe11 = ![];
  if (_0x16123b[_0x201d17("(lf[", _0x9eae8c._0x199790)](_0x334194, 9571 + 109 * 36 + -13494)) _0x4cfe11 = !!_0x481368[_0x53839e++];
  const _0x3f7203 = [];
  for (let _0xaa222f = 3403 + 4220 + -7 * 1089; _0x16123b[_0x201d17("m1I2", 970)](_0xaa222f, _0x1ec089); _0xaa222f++) _0x3f7203[_0x201d17("S*Hy", _0x9eae8c._0xfab20d)](_0x16123b[_0x201d17("r)JQ", 997)](String, _0x481368[_0x53839e++] ?? "")[_0x201d17("v7Vf", _0x9eae8c._0x34e213)]());
  function _0x201d17(_0x5551b8, _0x706cc8) {
    return _0x1a24(_0x706cc8 - 376, _0x5551b8);
  }
  const _0x155758 = !!_0x481368[_0x53839e++];
  let _0x3bc214 = ![];
  if (_0x16123b[_0xa5451c(146, _0x9eae8c._0xa39005)](_0x1ec089, 1146 + -4142 + 37 * 81)) _0x3bc214 = !!_0x481368[_0x53839e++];
  let _0x59ea4d = _0x201d17("Iww8", 889);
  if (_0x45584a && _0x334194 < DECO_LORE_MAX) _0x59ea4d = "lore-add";else {
    if (_0x4cfe11 && _0x16123b.xduFj(_0x334194, -7593 * -1 + -12 * 631 + -20)) _0x59ea4d = _0x201d17(_0x9eae8c._0x4dfdd8, _0x9eae8c._0x30c942) + "e";else {
      if (_0x155758 && _0x16123b[_0xa5451c(_0x9eae8c._0x5a3417, _0x9eae8c._0x11df28)](_0x1ec089, DECO_CMD_MAX)) _0x59ea4d = _0x201d17(_0x9eae8c._0x3afd9d, _0x9eae8c._0xda35df);else {
        if (_0x3bc214 && _0x16123b[_0xa5451c(22, "KH7P")](_0x1ec089, 5931 + 5158 + -11088)) _0x59ea4d = _0x16123b[_0xa5451c(31, "oMQ6")];
      }
    }
  }
  return {
    name: _0x2128d3,
    texture: _0x14fc9f,
    glint: _0x512f76,
    durability: _0x18d712,
    lore: _0x46c60d,
    cmds: _0x3f7203,
    action: _0x59ea4d
  };
}
import * as _0x370af0 from "@minecraft/server";
import { ActionFormData as ActionFormData2, ModalFormData } from "@minecraft/server-ui";
function fsetMsg(_0x1bee31, _0x55da72, _0x201a68 = []) {
  const _0x25aeb7 = _0x5778;
  try {
    _0x1bee31[_0x25aeb7(166)]({
      rawtext: [{
        translate: _0x25aeb7(257)
      }, {
        translate: _0x55da72,
        with: _0x201a68[_0x25aeb7(230)](rawMessageToText)
      }]
    });
  } catch (_0x4dc238) {}
}
function rawMessageToText(_0x47cd04) {
  const _0x392178 = _0x5778,
    _0x526c88 = {
      fCHjK: function (_0x48305c, _0x35f664) {
        return _0x48305c === _0x35f664;
      }
    };
  if (_0x526c88.fCHjK(typeof _0x47cd04, _0x392178(270))) return _0x47cd04;
  if (!_0x47cd04?.[_0x392178(151)] || !Array.isArray(_0x47cd04[_0x392178(151)])) return String(_0x47cd04 ?? "");
  return _0x47cd04.rawtext[_0x392178(230)](_0xfef1af => _0xfef1af?.["text"] ?? _0xfef1af?.["translate"] ?? "")[_0x392178(319)]("")[_0x392178(216)]();
}
var ctx = null;
function setFolderSetContext(_0x3bbf4e) {
  ctx = _0x3bbf4e;
}
function isAdmin(_0x522d5c) {
  const _0x2db9b0 = _0x5778;
  if (!_0x522d5c || typeof _0x522d5c[_0x2db9b0(314)] !== "function") return ![];
  try {
    return _0x522d5c[_0x2db9b0(314)]("admin");
  } catch (_0x442058) {
    return ![];
  }
}
function childrenOf(_0x23aa64) {
  const _0x438e74 = _0x5778;
  if (!_0x23aa64) return [];
  if (!Array[_0x438e74(400)](_0x23aa64[_0x438e74(143)])) _0x23aa64[_0x438e74(143)] = [];
  return _0x23aa64[_0x438e74(143)];
}
function findChildAtSlot(_0x1e49e0, _0x41fe63) {
  const _0x1130e3 = _0x5778;
  if (!Array[_0x1130e3(400)](_0x1e49e0)) return null;
  return _0x1e49e0[_0x1130e3(277)](_0x32cd3f => _0x32cd3f && _0x32cd3f[_0x1130e3(150)] === _0x41fe63) || null;
}
function folderSetUi(_0x11fd89, _0x2b4873, _0x36d608, _0x1b6a2f = 0, _0x3dde2a = null) {
  const _0x12a617 = _0x5778,
    _0x2c29bc = {
      YnAGD: function (_0x162829, _0x5c4d26) {
        return _0x162829 !== _0x5c4d26;
      },
      QyOBZ: function (_0x506d8b, _0x507a15, _0x1892e4, _0x579e1f, _0x38533c) {
        return _0x506d8b(_0x507a15, _0x1892e4, _0x579e1f, _0x38533c);
      },
      aBjBB: _0x12a617(312),
      SBxpA: function (_0x228f2b, _0x3684d5) {
        return _0x228f2b === _0x3684d5;
      },
      dDhOr: function (_0x1edc47, _0xd9a8f9) {
        return _0x1edc47 >= _0xd9a8f9;
      },
      zQCsK: function (_0x16da7e, _0x208290, _0x4775e9, _0x152f70, _0x5635b2, _0x403cbb) {
        return _0x16da7e(_0x208290, _0x4775e9, _0x152f70, _0x5635b2, _0x403cbb);
      },
      ilttc: _0x12a617(270),
      KRJNp: function (_0x28e634, _0x419c7a) {
        return _0x28e634 < _0x419c7a;
      },
      ULoza: function (_0xd89536, _0x4b02a1) {
        return _0xd89536 > _0x4b02a1;
      },
      ZMDRa: function (_0x425124, _0x5cc0ce) {
        return _0x425124 - _0x5cc0ce;
      },
      uIRAn: function (_0x7fdac1, _0x343a23) {
        return _0x7fdac1(_0x343a23);
      },
      hzoju: function (_0x94d8ba, _0x327b33) {
        return _0x94d8ba > _0x327b33;
      },
      pJHUI: _0x12a617(311),
      VhZSb: function (_0x4c5d23, _0x5f39e0) {
        return _0x4c5d23 * _0x5f39e0;
      },
      AvxxP: _0x12a617(266),
      DbSwC: "getDecoLayout",
      qQyme: function (_0x3b6838, _0x11e3b8, _0x395fce) {
        return _0x3b6838(_0x11e3b8, _0x395fce);
      },
      GXjAL: _0x12a617(384),
      LMyhW: function (_0x259d60, _0x1e5000) {
        return _0x259d60 > _0x1e5000;
      },
      cPreQ: function (_0x401fe4, _0x40f359) {
        return _0x401fe4 === _0x40f359;
      },
      dhrwT: _0x12a617(313),
      wEITb: _0x12a617(109),
      TpPWj: function (_0x3c5d23, _0x409b85) {
        return _0x3c5d23 === _0x409b85;
      },
      DhaJs: function (_0x198548, _0x55f394) {
        return _0x198548 + _0x55f394;
      },
      URrPg: function (_0x2b72d6, _0x50dac9, _0x1b8696, _0x449895) {
        return _0x2b72d6(_0x50dac9, _0x1b8696, _0x449895);
      },
      oQgsY: function (_0x3e01bb, _0x5e1f10) {
        return _0x3e01bb >= _0x5e1f10;
      },
      gIWvK: _0x12a617(288),
      zijwG: "shopkeeper.back.hint",
      tNgxz: _0x12a617(185),
      ZPUnL: _0x12a617(387),
      NdJhk: _0x12a617(198),
      COhWI: _0x12a617(347)
    };
  _0x36d608 = typeof _0x36d608 === _0x2c29bc.ilttc ? _0x36d608 : "", log[_0x12a617(122)]("folderSetUi", {
    player: _0x11fd89.name,
    rootName: _0x2b4873,
    link: _0x36d608,
    page: _0x1b6a2f
  });
  const _0x1088d6 = ctx[_0x12a617(128)](_0x2b4873);
  if (!_0x1088d6) {
    log.w("ui", _0x12a617(344), {
      rootName: _0x2b4873
    });
    return;
  }
  const _0x48def9 = ctx[_0x12a617(326)](_0x1088d6, _0x36d608);
  if (!_0x48def9 || !fsetIsSetNode(_0x48def9)) {
    log.w("ui", _0x12a617(135), {
      rootName: _0x2b4873,
      link: _0x36d608
    });
    return;
  }
  let _0x21f73f = Number[_0x12a617(390)](_0x1b6a2f) ? Math[_0x12a617(156)](_0x1b6a2f) : 0;
  if (_0x2c29bc.KRJNp(_0x21f73f, 0)) _0x21f73f = 0;
  if (_0x2c29bc.ULoza(_0x21f73f, FSET_MAX_PAGES - 1)) _0x21f73f = _0x2c29bc[_0x12a617(208)](FSET_MAX_PAGES, 1);
  const _0x1f2edd = isAdmin(_0x11fd89),
    _0x2288fd = _0x2c29bc.uIRAn(childrenOf, _0x48def9),
    _0x127778 = _0x36d608.length > 0;
  let _0x149422 = _0x48def9[_0x12a617(121)] ?? _0x2b4873;
  if (_0x2c29bc[_0x12a617(318)](FSET_MAX_PAGES, 1)) _0x149422 = _0x149422 + _0x12a617(303) + (_0x21f73f + 1) + "/" + FSET_MAX_PAGES + ")";
  const _0x35fdcb = new ChestFormData("54")[_0x12a617(267)](_0x149422),
    _0x51a11d = _0x1f2edd ? {
      texture: _0x12a617(365),
      itemName: {
        translate: _0x12a617(368)
      },
      itemDesc: {
        rawtext: [{
          translate: _0x12a617(103)
        }]
      },
      stackAmount: 1
    } : {
      texture: void 0,
      itemName: " ",
      stackAmount: 1
    };
  _0x35fdcb[_0x12a617(173)]([_0x12a617(341), _0x12a617(341), _0x12a617(341), _0x12a617(341), "_________", _0x2c29bc[_0x12a617(404)]], {
    _: _0x51a11d,
    "#": {
      texture: _0x12a617(269),
      itemName: "",
      stackAmount: 1
    }
  });
  const _0x367968 = _0x2c29bc.VhZSb(_0x21f73f, FSET_PAGE_SIZE),
    _0x232678 = _0x367968 + FSET_PAGE_SIZE - 1,
    _0x1acc1b = !_0x3dde2a && _0x48def9[_0x12a617(225)] && typeof _0x48def9[_0x12a617(225)] === _0x2c29bc[_0x12a617(307)] ? _0x48def9.decoLayouts : {},
    _0x4f31d9 = _0x1acc1b[String(_0x21f73f)] || null;
  let _0x213271 = null;
  if (_0x4f31d9?.["configId"] && typeof ctx[_0x12a617(259)] === _0x12a617(181)) try {
    _0x213271 = ctx[_0x12a617(259)](_0x4f31d9[_0x12a617(309)]);
  } catch (_0x58d870) {
    log[_0x12a617(246)]("ui", _0x58d870, {
      action: _0x2c29bc.DbSwC,
      rootName: _0x2b4873,
      link: _0x36d608,
      page: _0x21f73f
    });
  }
  const _0x2e9ecb = _0x2c29bc[_0x12a617(260)](composeDecoPage, _0x213271?.[_0x12a617(417)], _0x4f31d9),
    _0x2562c9 = new Map(_0x2e9ecb[_0x12a617(230)](_0x3301cc => [_0x3301cc.slot, _0x3301cc])),
    _0x4d8cb8 = _0x2e9ecb.filter(_0xc78900 => findChildAtSlot(_0x2288fd, _0x367968 + _0xc78900[_0x12a617(150)])),
    _0xb79643 = !!_0x4f31d9?.[_0x12a617(309)] && !_0x213271,
    _0x351700 = new Map(),
    _0x903e39 = new Map(),
    _0x2a2adf = (_0x4664e6, _0x215c8b) => {
      const _0x4917ed = _0x12a617,
        _0x2087b0 = _0x4664e6 + "@" + _0x215c8b;
      if (_0x903e39[_0x4917ed(299)](_0x2087b0)) return _0x903e39[_0x4917ed(305)](_0x2087b0);
      let _0x5d9034 = _0x351700[_0x4917ed(305)](_0x4664e6);
      _0x5d9034 === void 0 && (_0x5d9034 = storage_default[_0x4917ed(245)](_0x4664e6) || [], _0x351700[_0x4917ed(174)](_0x4664e6, _0x5d9034));
      const _0x12e7a7 = _0x5d9034[String(_0x215c8b)],
        _0x11cd9b = _0x12e7a7 ? ctx[_0x4917ed(337)](_0x12e7a7) : null;
      return _0x903e39[_0x4917ed(174)](_0x2087b0, _0x11cd9b), _0x11cd9b;
    },
    _0x4a75bc = _0x11fd89.getComponent(_0x2c29bc.GXjAL)?.[_0x12a617(215)],
    _0x45879d = new Map();
  if (_0x4a75bc) {
    if (_0x2c29bc.SBxpA("htEuI", _0x12a617(294))) {
      const _0x4c2f92 = new _0x4d84c6().title({
        translate: "shopkeeper.decolayout.apply.title"
      }).body({
        translate: _0x12a617(382),
        with: [_0x387661(_0x446c2e[_0x12a617(415)] + _0x28b5f8[_0x12a617(415)])]
      })[_0x12a617(409)]({
        translate: _0x2c29bc[_0x12a617(247)]
      }).button({
        translate: _0x12a617(288)
      });
      return _0x47ccac[_0x12a617(271)].run(() => _0x4c2f92[_0x12a617(167)](_0x4ef5f4).then(_0x4b59b2 => {
        const _0x49a198 = _0x12a617;
        if (_0x4b59b2[_0x49a198(110)] || _0x2c29bc[_0x49a198(320)](_0x4b59b2[_0x49a198(190)], 0)) return _0x2c29bc[_0x49a198(316)](_0x3f5de1, _0x307e1, _0x376946, _0x5c3aa1, _0x37f720);
        _0xadfe9f(_0x1775f1, _0x469d90, _0x356a82, _0xce3e1b, _0x330944, _0x21a2fa);
      }).catch(_0x3250e2 => _0x39ffe5[_0x12a617(246)]("ui", _0x3250e2, {
        action: _0x12a617(191),
        rootName: _0x56210f,
        link: _0x1078f5,
        page: _0x5d7641
      })));
    } else for (let _0x3d4390 = 0; _0x3d4390 < (_0x4a75bc[_0x12a617(237)] ?? 36); _0x3d4390++) {
      const _0x333e6a = _0x4a75bc.getItem(_0x3d4390);
      if (!_0x333e6a) continue;
      const _0x504c46 = ctx[_0x12a617(147)](_0x333e6a);
      if (!_0x504c46) continue;
      _0x45879d[_0x12a617(174)](_0x504c46, (_0x45879d[_0x12a617(305)](_0x504c46) || 0) + (_0x333e6a.amount ?? 0));
    }
  }
  const _0x30a2a7 = ctx[_0x12a617(335)](_0x2b4873, _0x1088d6);
  for (const _0x454d96 of _0x2288fd) {
    if (!_0x454d96 || typeof _0x454d96[_0x12a617(150)] !== _0x12a617(124)) continue;
    if (_0x454d96[_0x12a617(150)] < _0x367968 || _0x2c29bc.LMyhW(_0x454d96[_0x12a617(150)], _0x232678)) continue;
    if (_0x2562c9.has(_0x454d96[_0x12a617(150)] - _0x367968)) continue;
    if (!_0x1f2edd && _0x2c29bc[_0x12a617(396)](_0x454d96[_0x12a617(345)], _0x2c29bc[_0x12a617(272)]) && !ctx[_0x12a617(148)](_0x1088d6, _0x454d96, _0x11fd89)) continue;
    const _0x122067 = _0x2c29bc[_0x12a617(208)](_0x454d96.slot, _0x367968);
    if (_0x454d96[_0x12a617(345)] === _0x12a617(219)) {
      fsetRenderDecoButton(_0x35fdcb, _0x122067, _0x454d96);
      continue;
    }
    if (_0x2c29bc[_0x12a617(210)](_0x454d96.type, _0x2c29bc.wEITb) || _0x2c29bc[_0x12a617(127)](_0x454d96[_0x12a617(345)], _0x12a617(197))) {
      fsetRenderFolderButton(_0x35fdcb, _0x122067, _0x454d96, _0x1f2edd, _0x2b4873, _0x36d608);
      continue;
    }
    const _0x204495 = _0x454d96[_0x12a617(421)] ?? _0x2b4873,
      _0x3b69e5 = _0x454d96[_0x12a617(119)] || 0,
      _0x57ac54 = _0x2a2adf(_0x204495, _0x2c29bc[_0x12a617(412)](_0x3b69e5, 0));
    if (!_0x57ac54) {
      _0x35fdcb[_0x12a617(409)](_0x122067, {
        translate: "shopkeeper.item.error"
      }, {
        rawtext: [{
          translate: _0x12a617(380)
        }]
      }, "minecraft:barrier", 1);
      continue;
    }
    const _0x2e763e = ctx[_0x12a617(416)](_0x57ac54, _0x204495, _0x3b69e5 + 0);
    _0x2e763e.rawtext[_0x12a617(158)]({
      text: "\n"
    }, ...ctx.stockDisplay(_0x2b4873, _0x1088d6, _0x454d96).rawtext);
    const _0x35a080 = _0x36d608 ? _0x36d608 + "/" + _0x454d96[_0x12a617(130)] : _0x454d96[_0x12a617(130)];
    if (_0x35a080 === _0x30a2a7) _0x2e763e[_0x12a617(151)].push({
      text: "\n"
    }, {
      translate: _0x12a617(334)
    });
    const _0x168eb6 = ctx[_0x12a617(406)](_0x11fd89, _0x2b4873, _0x1088d6, _0x454d96, _0x35a080, _0x30a2a7),
      _0x1add35 = new Map(_0x45879d);
    for (let _0x4c4f9a = 1; _0x4c4f9a <= 9; _0x4c4f9a++) {
      const _0x398450 = _0x2a2adf(_0x204495, _0x3b69e5 + _0x4c4f9a);
      if (!_0x398450) continue;
      const _0x22073c = ctx[_0x12a617(147)](_0x398450),
        _0x40db7e = ctx[_0x12a617(194)](_0x398450[_0x12a617(153)] ?? 1, _0x168eb6),
        _0x2ea9eb = _0x1add35[_0x12a617(305)](_0x22073c) || 0,
        _0x4b3ca7 = Math[_0x12a617(149)](0, _0x40db7e - _0x2ea9eb);
      _0x1add35[_0x12a617(174)](_0x22073c, Math.max(0, _0x2ea9eb - _0x40db7e)), _0x2e763e[_0x12a617(151)][_0x12a617(158)](...ctx[_0x12a617(202)]({
        ..._0x398450,
        amount: _0x40db7e
      }, _0x4b3ca7)[_0x12a617(151)]);
    }
    _0x35fdcb[_0x12a617(409)](_0x122067, ctx[_0x12a617(238)](_0x57ac54), _0x2e763e, _0x57ac54.typeId, _0x57ac54[_0x12a617(153)] ?? 1, ctx.getDisplayDurability(_0x57ac54), ctx[_0x12a617(360)](_0x57ac54));
  }
  for (const _0x340388 of _0x2e9ecb) _0x2c29bc[_0x12a617(125)](fsetRenderDecoButton, _0x35fdcb, _0x340388.slot, _0x340388);
  const _0x21cf1b = _0x1f2edd ? _0x21f73f - 1 : _0x2c29bc[_0x12a617(260)](fsetPrevContentPage, _0x2288fd, _0x21f73f);
  _0x2c29bc[_0x12a617(385)](_0x21cf1b, 0) && _0x35fdcb[_0x12a617(409)](45, {
    translate: _0x12a617(222)
  }, {
    rawtext: [{
      translate: "shopkeeper.prevpage.hint"
    }]
  }, _0x12a617(357), 1);
  _0x127778 && _0x35fdcb[_0x12a617(409)](47, {
    translate: _0x2c29bc[_0x12a617(186)]
  }, {
    rawtext: [{
      translate: _0x2c29bc[_0x12a617(262)]
    }]
  }, _0x12a617(357), 1);
  _0x1f2edd && !_0x3dde2a && (_0x35fdcb[_0x12a617(409)](48, {
    translate: _0x12a617(188)
  }, {
    rawtext: [{
      translate: _0x2c29bc[_0x12a617(286)]
    }]
  }, _0x2c29bc.ZPUnL, 1), _0x35fdcb[_0x12a617(409)](49, {
    translate: "shopkeeper.decolayout.page"
  }, {
    rawtext: [{
      text: _0x4f31d9?.["configId"] ? _0x213271?.[_0x12a617(403)] || _0x4f31d9.configId : ""
    }, ...(_0xb79643 ? [{
      text: "\n"
    }, {
      translate: _0x2c29bc.NdJhk
    }] : []), ...(!_0xb79643 && _0x4d8cb8[_0x12a617(415)] ? [{
      text: "\n"
    }, {
      translate: _0x12a617(107)
    }] : [])]
  }, "minecraft:book", 1));
  if (_0x3dde2a) _0x35fdcb[_0x12a617(409)](51, {
    translate: _0x12a617(347)
  }, {
    translate: _0x2c29bc[_0x12a617(102)]
  }, "textures/ui/cancel", 1);
  _0x35fdcb[_0x12a617(409)](52, {
    translate: "shopkeeper.daily.order.button"
  }, {
    rawtext: [{
      translate: _0x12a617(377)
    }]
  }, "minecraft:chest", 1, 0, !![]);
  const _0x2f6fc0 = _0x1f2edd ? _0x2c29bc[_0x12a617(412)](_0x21f73f, 1) : fsetNextContentPage(_0x2288fd, _0x21f73f);
  _0x2f6fc0 >= 0 && _0x2f6fc0 <= FSET_MAX_PAGES - 1 && _0x35fdcb[_0x12a617(409)](53, {
    translate: _0x12a617(172)
  }, {
    rawtext: [{
      translate: _0x12a617(389)
    }]
  }, _0x12a617(152), 1), _0x370af0[_0x12a617(271)][_0x12a617(375)](() => {
    const _0x204921 = _0x12a617,
      _0x490760 = {
        shFlZ: function (_0x1ec377, _0x24928b) {
          return _0x1ec377 === _0x24928b;
        },
        cDhMX: function (_0x1b4dba, _0x3bc027) {
          const _0x3d1596 = _0x5778;
          return _0x2c29bc[_0x3d1596(210)](_0x1b4dba, _0x3bc027);
        },
        ngYWu: function (_0x3c272a, _0x3d1552) {
          return _0x2c29bc.dDhOr(_0x3c272a, _0x3d1552);
        },
        migPs: function (_0x40a4c6, _0x3ce9ca, _0x19d7a1, _0x363e6b, _0x192cf0, _0x28546e) {
          return _0x40a4c6(_0x3ce9ca, _0x19d7a1, _0x363e6b, _0x192cf0, _0x28546e);
        },
        yjdwu: function (_0x22cfa1, _0x1a0f49) {
          return _0x22cfa1 - _0x1a0f49;
        },
        DPBOY: function (_0xd09237, _0x1ecaf7) {
          return _0xd09237 < _0x1ecaf7;
        },
        mkWiw: function (_0x20c06b, _0x5e1d79) {
          return _0x20c06b - _0x5e1d79;
        },
        mcqeI: function (_0x2ce193, _0x518b66, _0x4d4050, _0x1244ce, _0x2800ac, _0x1bbcdf) {
          const _0x1c3779 = _0x5778;
          return _0x2c29bc[_0x1c3779(261)](_0x2ce193, _0x518b66, _0x4d4050, _0x1244ce, _0x2800ac, _0x1bbcdf);
        }
      };
    _0x35fdcb.show(_0x11fd89)[_0x204921(120)](_0x248232 => {
      const _0x597cda = _0x204921;
      if (_0x248232[_0x597cda(110)]) return;
      const _0x2ad4e3 = _0x248232.selection;
      if (_0x490760[_0x597cda(280)](_0x2ad4e3, void 0) || _0x2ad4e3 === null) return;
      if (_0x2ad4e3 === 51 && _0x3dde2a) return;
      if (_0x490760.cDhMX(_0x2ad4e3, 52)) {
        ctx[_0x597cda(235)](_0x11fd89, _0x2b4873);
        return;
      }
      if (_0x2ad4e3 === 45 && _0x490760[_0x597cda(244)](_0x21cf1b, 0)) {
        _0x490760.migPs(folderSetUi, _0x11fd89, _0x2b4873, _0x36d608, _0x21cf1b, _0x3dde2a);
        return;
      }
      if (_0x2ad4e3 === 47 && _0x127778) {
        if (_0x3dde2a) _0x3dde2a[_0x597cda(234)]?.();else fsetGoBack(_0x11fd89, _0x2b4873, _0x36d608);
        return;
      }
      if (_0x2ad4e3 === 48 && _0x1f2edd && !_0x3dde2a) {
        folderSetPropertiesUi(_0x11fd89, _0x2b4873, _0x36d608);
        return;
      }
      if (_0x490760[_0x597cda(280)](_0x2ad4e3, 49) && _0x1f2edd && !_0x3dde2a) return ctx[_0x597cda(138)](_0x11fd89, _0x4f31d9?.[_0x597cda(309)] || null, _0x21bc9d => fsetApplyDecoLayout(_0x11fd89, _0x2b4873, _0x36d608, _0x21f73f, _0x21bc9d), () => fsetUnassignDecoLayout(_0x11fd89, _0x2b4873, _0x36d608, _0x21f73f), () => folderSetUi(_0x11fd89, _0x2b4873, _0x36d608, _0x21f73f));
      if (_0x2ad4e3 === 53 && _0x2f6fc0 >= 0 && _0x2f6fc0 <= _0x490760[_0x597cda(139)](FSET_MAX_PAGES, 1)) {
        folderSetUi(_0x11fd89, _0x2b4873, _0x36d608, _0x2f6fc0, _0x3dde2a);
        return;
      }
      if (_0x490760[_0x597cda(419)](_0x2ad4e3, 0) || _0x2ad4e3 > _0x490760.mkWiw(FSET_PAGE_SIZE, 1)) return;
      const _0x4e7a41 = _0x367968 + _0x2ad4e3;
      if (_0x3dde2a) {
        const _0x3ebf22 = findChildAtSlot(_0x2288fd, _0x4e7a41);
        if (!_0x3ebf22) _0x3dde2a[_0x597cda(290)]?.(_0x36d608, _0x4e7a41);else {
          if (_0x3ebf22[_0x597cda(345)] === _0x597cda(109)) _0x3dde2a[_0x597cda(281)]?.(_0x36d608 ? _0x36d608 + "/" + _0x3ebf22[_0x597cda(130)] : _0x3ebf22.namespace);else {
            if (_0x3ebf22[_0x597cda(345)] === _0x597cda(197)) _0x3dde2a[_0x597cda(178)]?.(_0x36d608 ? _0x36d608 + "/" + _0x3ebf22[_0x597cda(130)] : _0x3ebf22.namespace, _0x21f73f);
          }
        }
        return;
      }
      const _0x3a8d22 = _0x2562c9.get(_0x2ad4e3);
      if (_0x3a8d22) {
        if (_0x1f2edd) fsetLayoutDecoSlotMenu(_0x11fd89, _0x2b4873, _0x36d608, _0x3a8d22, _0x21f73f);else fsetRunDecoCommands(_0x11fd89, _0x3a8d22);
        return;
      }
      _0x490760[_0x597cda(323)](fsetSlotClick, _0x11fd89, _0x2b4873, _0x36d608, _0x4e7a41, _0x21f73f);
    }).catch(_0x57d265 => log[_0x204921(246)]("ui", _0x57d265, {
      action: "folderSetUi.show",
      rootName: _0x2b4873,
      link: _0x36d608
    }));
  });
}
function fsetRenderFolderButton(_0x2a621a, _0x44c12d, _0x470363, _0x2f7e6f, _0x552799, _0x1a863e) {
  const _0x582372 = _0x5778,
    _0x27fc7f = {
      FTLGc: function (_0x4793a5, _0xd61942) {
        return _0x4793a5 - _0xd61942;
      },
      nSEZJ: function (_0x2140ac, _0x28763e) {
        return _0x2140ac > _0x28763e;
      }
    },
    _0x51855c = _0x470363[_0x582372(345)] === _0x582372(197),
    _0x221e9f = _0x51855c ? "minecraft:ender_chest" : "minecraft:chest",
    _0x4edbf3 = {
      rawtext: []
    },
    _0xcf0da5 = typeof _0x470363[_0x582372(386)] === _0x582372(270) && _0x470363[_0x582372(386)].length > 0 ? _0x470363[_0x582372(386)][_0x582372(324)]("\n")[_0x582372(230)](_0x2a4c4e => _0x2a4c4e[_0x582372(216)]())[_0x582372(175)](_0x5b3a4b => _0x5b3a4b[_0x582372(415)] > 0) : [];
  for (let _0x5d425d = 0; _0x5d425d < _0xcf0da5[_0x582372(415)]; _0x5d425d++) {
    _0x4edbf3[_0x582372(151)][_0x582372(158)]({
      text: _0xcf0da5[_0x5d425d]
    });
    if (_0x5d425d < _0x27fc7f[_0x582372(209)](_0xcf0da5[_0x582372(415)], 1)) _0x4edbf3.rawtext[_0x582372(158)]({
      text: "\n"
    });
  }
  const _0x31a392 = (_0x470363[_0x582372(143)] || [])[_0x582372(415)];
  if (_0x27fc7f[_0x582372(268)](_0x4edbf3[_0x582372(151)][_0x582372(415)], 0)) _0x4edbf3[_0x582372(151)][_0x582372(158)]({
    text: "\n"
  });
  _0x4edbf3[_0x582372(151)][_0x582372(158)]({
    translate: _0x582372(291),
    with: [String(_0x31a392)]
  }), _0x2f7e6f && _0x4edbf3[_0x582372(151)][_0x582372(158)]({
    text: "\n"
  }, {
    text: "\xA77UI: "
  }, {
    text: _0x582372(392) + _0x552799 + " " + (_0x1a863e ? _0x1a863e + "/" + _0x470363[_0x582372(130)] : _0x470363[_0x582372(130)])
  }), _0x2a621a[_0x582372(409)](_0x44c12d, _0x470363[_0x582372(121)] ?? _0x470363[_0x582372(130)], _0x4edbf3, _0x470363[_0x582372(336)] ?? _0x221e9f, 1, 0, _0x470363.glint ?? ![]);
}
function fsetRenderDecoButton(_0x2d9ae5, _0x16d694, _0x5b68c7) {
  const _0x5d73aa = _0x5778,
    _0x3bc758 = {
      AXdKC: function (_0x9a79b7, _0xfb1c6b) {
        return _0x9a79b7 - _0xfb1c6b;
      },
      Hbdan: _0x5d73aa(399)
    },
    _0x432a94 = {
      rawtext: []
    },
    _0x2289d2 = Array[_0x5d73aa(400)](_0x5b68c7[_0x5d73aa(217)]) ? _0x5b68c7[_0x5d73aa(217)] : [];
  for (let _0x272759 = 0; _0x272759 < _0x2289d2[_0x5d73aa(415)]; _0x272759++) {
    _0x432a94.rawtext.push({
      text: _0x2289d2[_0x272759]
    });
    if (_0x272759 < _0x3bc758.AXdKC(_0x2289d2[_0x5d73aa(415)], 1)) _0x432a94[_0x5d73aa(151)][_0x5d73aa(158)]({
      text: "\n"
    });
  }
  const _0x21cc8a = Array[_0x5d73aa(400)](_0x5b68c7[_0x5d73aa(256)]) ? _0x5b68c7[_0x5d73aa(256)][_0x5d73aa(175)](_0x46b794 => _0x46b794 && _0x46b794[_0x5d73aa(415)]) : [];
  if (_0x21cc8a[_0x5d73aa(415)] > 0) {
    if (_0x432a94[_0x5d73aa(151)][_0x5d73aa(415)] > 0) _0x432a94[_0x5d73aa(151)][_0x5d73aa(158)]({
      text: "\n"
    });
    _0x432a94[_0x5d73aa(151)][_0x5d73aa(158)]({
      translate: _0x5d73aa(367)
    });
  }
  _0x2d9ae5.button(_0x16d694, _0x5b68c7.display_name || {
    translate: _0x5d73aa(179)
  }, _0x432a94, _0x5b68c7[_0x5d73aa(336)] || _0x3bc758[_0x5d73aa(372)], 1, Number(_0x5b68c7.durability) || 0, !!_0x5b68c7.glint);
}
function fsetOwningSlot(_0x4a531b, _0x456fc6) {
  const _0x5c62e5 = _0x5778,
    _0x45c6ed = {
      kbRha: _0x5c62e5(270)
    };
  let _0x5778d6 = typeof _0x456fc6 === _0x45c6ed[_0x5c62e5(182)] ? _0x456fc6 : "";
  while (_0x5778d6.length > 0) {
    const _0x2e53f8 = ctx.getNode(_0x4a531b, _0x5778d6);
    if (_0x2e53f8 && typeof _0x2e53f8.slot === _0x5c62e5(124)) return _0x2e53f8.slot;
    _0x5778d6 = ctx.getParentLink(_0x5778d6);
  }
  return 0;
}
function fsetBackTarget(_0xda3352, _0x2f934e) {
  const _0x553407 = _0x5778,
    _0x8205f0 = {
      fSIRC: function (_0x379ff0, _0x2b3cdc, _0x425ac9) {
        return _0x379ff0(_0x2b3cdc, _0x425ac9);
      },
      jemPD: "set",
      TqzmA: function (_0x2d404e, _0x20aa55) {
        return _0x2d404e === _0x20aa55;
      }
    },
    _0x177436 = typeof _0x2f934e === _0x553407(270) ? _0x2f934e : "",
    _0x137c17 = !!(_0xda3352 && _0xda3352[_0x553407(395)] === _0x553407(197));
  if (_0x177436 === "") {
    if ("nfbmj" !== _0x553407(333)) return {
      ui: _0x137c17 ? _0x8205f0[_0x553407(192)] : _0x553407(308),
      link: "",
      page: 0
    };else {
      _0x8205f0[_0x553407(162)](_0x49ada9, _0x49873b, _0x553407(329));
      return;
    }
  }
  const _0x413f3a = ctx[_0x553407(283)](_0x177436),
    _0x4cac54 = ctx[_0x553407(326)](_0xda3352, _0x413f3a),
    _0x17bb08 = ctx.getNode(_0xda3352, _0x177436),
    _0x42d4f3 = _0x413f3a === "" ? _0x137c17 : !!(_0x4cac54 && _0x8205f0[_0x553407(343)](_0x4cac54.type, _0x553407(197))),
    _0x45adf1 = !!(_0x17bb08 && _0x17bb08.type === _0x553407(197));
  if (_0x42d4f3 || _0x45adf1) return {
    ui: "set",
    link: _0x413f3a,
    page: fsetSlotToPage(fsetOwningSlot(_0xda3352, _0x177436))
  };
  return {
    ui: _0x553407(308),
    link: _0x413f3a,
    page: 0
  };
}
function fsetOpenParent(_0xc31001, _0x37fd1d, _0x11b485) {
  const _0x3b85e8 = _0x5778,
    _0x5f24d8 = ctx[_0x3b85e8(128)](_0x37fd1d);
  if (!_0x5f24d8) return;
  const _0x56ee84 = fsetBackTarget(_0x5f24d8, _0x11b485);
  if (_0x56ee84.ui === "set") folderSetUi(_0xc31001, _0x37fd1d, _0x56ee84.link, _0x56ee84[_0x3b85e8(227)]);else ctx[_0x3b85e8(420)](_0xc31001, _0x37fd1d, _0x56ee84[_0x3b85e8(363)]);
}
function fsetGoBack(_0x481d10, _0x59bcb2, _0x36609e) {
  const _0x2d60b2 = _0x5778,
    _0x5cffed = {
      EaBbA: function (_0x29e29a, _0x4c1294) {
        return _0x29e29a === _0x4c1294;
      }
    },
    _0x44e495 = ctx[_0x2d60b2(128)](_0x59bcb2);
  if (!_0x44e495) return;
  const _0x53a5d7 = fsetBackTarget(_0x44e495, _0x36609e),
    _0x99acca = ctx[_0x2d60b2(326)](_0x44e495, _0x53a5d7[_0x2d60b2(363)]),
    _0x303e51 = _0x53a5d7.link === "" ? _0x5cffed[_0x2d60b2(168)](_0x44e495[_0x2d60b2(395)], _0x2d60b2(197)) : !!(_0x99acca && _0x99acca[_0x2d60b2(345)] === _0x2d60b2(197));
  if (_0x53a5d7.ui === _0x2d60b2(174) && _0x303e51) folderSetUi(_0x481d10, _0x59bcb2, _0x53a5d7[_0x2d60b2(363)], _0x53a5d7[_0x2d60b2(227)]);else ctx[_0x2d60b2(420)](_0x481d10, _0x59bcb2, _0x53a5d7[_0x2d60b2(363)]);
}
function fsetSlotClick(_0x4832bd, _0x19ca8f, _0x33efbf, _0x571922, _0x4fdebb) {
  const _0x507d9e = _0x5778,
    _0x1db8df = {
      wfeMa: function (_0x194e13, _0x1c8988, _0x1f5f24) {
        return _0x194e13(_0x1c8988, _0x1f5f24);
      },
      uvKtE: function (_0x3dc901, _0x5a9312) {
        return _0x3dc901 === _0x5a9312;
      },
      KugRD: function (_0x22b19b, _0x394e9d) {
        return _0x22b19b + _0x394e9d;
      }
    },
    _0x17a815 = ctx[_0x507d9e(128)](_0x19ca8f);
  if (!_0x17a815) return;
  const _0x1f8b67 = ctx[_0x507d9e(326)](_0x17a815, _0x33efbf);
  if (!_0x1f8b67) return;
  const _0x56f9da = childrenOf(_0x1f8b67),
    _0x578152 = _0x1db8df[_0x507d9e(300)](findChildAtSlot, _0x56f9da, _0x571922),
    _0x577510 = isAdmin(_0x4832bd);
  if (!_0x578152) {
    if (!_0x577510) return;
    fsetEmptySlotMenu(_0x4832bd, _0x19ca8f, _0x33efbf, _0x571922, _0x4fdebb);
    return;
  }
  if (_0x578152.type === _0x507d9e(313)) {
    ctx[_0x507d9e(407)](_0x4832bd, _0x19ca8f, _0x578152, _0x33efbf);
    return;
  }
  if (_0x578152.type === _0x507d9e(109)) {
    if (!_0x577510) {
      ctx[_0x507d9e(420)](_0x4832bd, _0x19ca8f, _0x33efbf ? _0x33efbf + "/" + _0x578152[_0x507d9e(130)] : _0x578152[_0x507d9e(130)]);
      return;
    }
    fsetFolderSlotMenu(_0x4832bd, _0x19ca8f, _0x33efbf, _0x578152, _0x4fdebb, ![]);
    return;
  }
  if (_0x1db8df[_0x507d9e(351)](_0x578152[_0x507d9e(345)], _0x507d9e(197))) {
    if (!_0x577510) {
      folderSetUi(_0x4832bd, _0x19ca8f, _0x33efbf ? _0x1db8df[_0x507d9e(184)](_0x33efbf, "/") + _0x578152.namespace : _0x578152[_0x507d9e(130)], 0);
      return;
    }
    fsetFolderSlotMenu(_0x4832bd, _0x19ca8f, _0x33efbf, _0x578152, _0x4fdebb, !![]);
    return;
  }
  if (_0x578152[_0x507d9e(345)] === _0x507d9e(219)) {
    if (!_0x577510) {
      fsetRunDecoCommands(_0x4832bd, _0x578152);
      return;
    }
    fsetDecoSlotMenu(_0x4832bd, _0x19ca8f, _0x33efbf, _0x578152, _0x4fdebb);
    return;
  }
}
function fsetEmptySlotMenu(_0x2f4dbc, _0xaa9418, _0x3f4de5, _0x103a49, _0x568d3e) {
  const _0x3e91cd = _0x5778,
    _0x1cd101 = {
      nqhzZ: function (_0x33598b, _0x489a16, _0x5a430b, _0x12c375, _0x2b3292) {
        return _0x33598b(_0x489a16, _0x5a430b, _0x12c375, _0x2b3292);
      },
      ABRvI: "shopkeeper.folderset.opt.item",
      QidCO: _0x3e91cd(356),
      JTRlY: _0x3e91cd(359),
      xWqHr: "textures/ui/icon_painting",
      nKaYq: _0x3e91cd(288)
    },
    _0x3f576d = new ActionFormData2().title({
      translate: _0x3e91cd(263)
    })[_0x3e91cd(278)]({
      rawtext: [{
        translate: _0x3e91cd(289)
      }, {
        text: "\n" + _0x103a49
      }]
    });
  _0x3f576d.button({
    translate: _0x1cd101[_0x3e91cd(405)]
  }, _0x1cd101[_0x3e91cd(206)]), _0x3f576d[_0x3e91cd(409)]({
    translate: _0x1cd101[_0x3e91cd(398)]
  }, _0x3e91cd(284)), _0x3f576d[_0x3e91cd(409)]({
    translate: "shopkeeper.folderset.opt.folderSet"
  }, _0x3e91cd(161)), _0x3f576d[_0x3e91cd(409)]({
    translate: _0x3e91cd(265)
  }, _0x1cd101.xWqHr), _0x3f576d[_0x3e91cd(409)]({
    translate: _0x1cd101.nKaYq
  }, "textures/ui/arrow_left"), _0x370af0.system[_0x3e91cd(375)](() => {
    const _0x1f0669 = _0x3e91cd;
    _0x3f576d.show(_0x2f4dbc).then(_0x3eeb03 => {
      const _0x41ff63 = _0x5778;
      if (_0x3eeb03.canceled || _0x3eeb03.selection === void 0) {
        _0x1cd101[_0x41ff63(374)](folderSetUi, _0x2f4dbc, _0xaa9418, _0x3f4de5, _0x568d3e);
        return;
      }
      switch (_0x3eeb03[_0x41ff63(190)]) {
        case 0:
          fsetCreateItemAtSlot(_0x2f4dbc, _0xaa9418, _0x3f4de5, _0x103a49, _0x568d3e);
          break;
        case 1:
          fsetCreateFolderAtSlot(_0x2f4dbc, _0xaa9418, _0x3f4de5, _0x103a49, _0x568d3e, ![]);
          break;
        case 2:
          fsetCreateFolderAtSlot(_0x2f4dbc, _0xaa9418, _0x3f4de5, _0x103a49, _0x568d3e, !![]);
          break;
        case 3:
          fsetDecoForm(_0x2f4dbc, _0xaa9418, _0x3f4de5, _0x103a49, _0x568d3e, null);
          break;
        default:
          _0x1cd101[_0x41ff63(374)](folderSetUi, _0x2f4dbc, _0xaa9418, _0x3f4de5, _0x568d3e);
          break;
      }
    })[_0x1f0669(285)](_0x241e5a => log.err("ui", _0x241e5a, {
      action: _0x1f0669(310),
      rootName: _0xaa9418,
      link: _0x3f4de5,
      absSlot: _0x103a49
    }));
  });
}
function fsetFolderSlotMenu(_0x1f371a, _0x568bbb, _0x4866f9, _0x1c3859, _0x32286d, _0x4227b7) {
  const _0x47fc58 = _0x5778,
    _0x4d99b7 = {
      lduUf: function (_0x16432e, _0x3e4ac7, _0x506856, _0xbe390a, _0x5de61c) {
        return _0x16432e(_0x3e4ac7, _0x506856, _0xbe390a, _0x5de61c);
      },
      yFbPW: function (_0xb74a7d, _0x29aab4, _0x4428f2, _0x593b1f, _0x2d657d) {
        return _0xb74a7d(_0x29aab4, _0x4428f2, _0x593b1f, _0x2d657d);
      },
      kbGQM: function (_0xde127e, _0x11afe3) {
        return _0xde127e + _0x11afe3;
      },
      ICwDU: function (_0x4ffaa7, _0x5c72c5, _0x241b70, _0x224b57, _0x513147, _0x426a76, _0x379984, _0x36885a) {
        return _0x4ffaa7(_0x5c72c5, _0x241b70, _0x224b57, _0x513147, _0x426a76, _0x379984, _0x36885a);
      },
      VxJVH: _0x47fc58(387),
      JFCXf: _0x47fc58(252)
    },
    _0x4e4e5c = new ActionFormData2().title({
      translate: _0x4227b7 ? _0x47fc58(224) : "shopkeeper.folderset.menu.folder"
    })[_0x47fc58(278)](_0x1c3859[_0x47fc58(121)] ?? _0x1c3859[_0x47fc58(130)]);
  _0x4e4e5c[_0x47fc58(409)]({
    translate: _0x47fc58(391)
  }, _0x47fc58(293)), _0x4e4e5c.button({
    translate: _0x47fc58(203)
  }, _0x47fc58(207)), _0x4e4e5c.button({
    translate: _0x47fc58(118)
  }, _0x4d99b7.VxJVH), _0x4e4e5c.button({
    translate: _0x47fc58(265)
  }, "textures/ui/icon_painting"), _0x4e4e5c[_0x47fc58(409)]({
    translate: _0x47fc58(325)
  }, _0x4d99b7[_0x47fc58(342)]), _0x4e4e5c[_0x47fc58(409)]({
    translate: _0x47fc58(288)
  }, _0x47fc58(357)), _0x370af0.system[_0x47fc58(375)](() => {
    const _0x3a1486 = _0x47fc58;
    _0x4e4e5c[_0x3a1486(167)](_0x1f371a)[_0x3a1486(120)](_0x389c1a => {
      const _0x1521e3 = _0x3a1486;
      if (_0x389c1a[_0x1521e3(110)] || _0x389c1a.selection === void 0) {
        _0x4d99b7[_0x1521e3(236)](folderSetUi, _0x1f371a, _0x568bbb, _0x4866f9, _0x32286d);
        return;
      }
      switch (_0x389c1a[_0x1521e3(190)]) {
        case 0:
          if (_0x4227b7) _0x4d99b7[_0x1521e3(233)](folderSetUi, _0x1f371a, _0x568bbb, _0x4866f9 ? _0x4d99b7.kbGQM(_0x4866f9, "/") + _0x1c3859[_0x1521e3(130)] : _0x1c3859[_0x1521e3(130)], 0);else ctx.folderUi(_0x1f371a, _0x568bbb, _0x4866f9 ? _0x4d99b7[_0x1521e3(214)](_0x4866f9 + "/", _0x1c3859[_0x1521e3(130)]) : _0x1c3859.namespace);
          break;
        case 1:
          fsetCreateFolderAtSlot(_0x1f371a, _0x568bbb, _0x4866f9, _0x1c3859.slot, _0x32286d, _0x4227b7);
          break;
        case 2:
          fsetChildPropsUi(_0x1f371a, _0x568bbb, _0x4866f9, _0x1c3859, _0x32286d);
          break;
        case 3:
          _0x4d99b7.ICwDU(fsetDecoForm, _0x1f371a, _0x568bbb, _0x4866f9, _0x1c3859.slot, _0x32286d, null, {
            replaceNamespace: _0x1c3859[_0x1521e3(130)]
          });
          break;
        case 4:
          fsetDeleteChild(_0x1f371a, _0x568bbb, _0x4866f9, _0x1c3859, _0x32286d);
          break;
        default:
          _0x4d99b7[_0x1521e3(233)](folderSetUi, _0x1f371a, _0x568bbb, _0x4866f9, _0x32286d);
          break;
      }
    })[_0x3a1486(285)](_0x576b79 => log.err("ui", _0x576b79, {
      action: _0x3a1486(241),
      rootName: _0x568bbb,
      link: _0x4866f9
    }));
  });
}
function fsetDecoSlotMenu(_0x4c880, _0x2c7ccf, _0x3e99ee, _0x55ea4a, _0x5605bf) {
  const _0x109b95 = _0x5778,
    _0x54f552 = {
      CdSPJ: _0x109b95(378),
      cxUxy: function (_0x1e441d, _0x531b49, _0x150f4b, _0x4f99c4, _0x4fa7be) {
        return _0x1e441d(_0x531b49, _0x150f4b, _0x4f99c4, _0x4fa7be);
      },
      YgtRu: function (_0x27bb02, _0x4e3e4c, _0x361a57, _0x14fca6, _0x457c56, _0x2dcf42, _0x180329) {
        return _0x27bb02(_0x4e3e4c, _0x361a57, _0x14fca6, _0x457c56, _0x2dcf42, _0x180329);
      },
      SKCxI: function (_0x20f30f, _0x4b617e, _0x11c6f9, _0x480859, _0x2b8651, _0x3f80cf, _0x41d9de, _0x11cfb1) {
        return _0x20f30f(_0x4b617e, _0x11c6f9, _0x480859, _0x2b8651, _0x3f80cf, _0x41d9de, _0x11cfb1);
      },
      RkaQN: _0x109b95(304),
      eLcIg: _0x109b95(179),
      CURLi: _0x109b95(207)
    },
    _0x57ee96 = new ActionFormData2()[_0x109b95(267)]({
      translate: _0x54f552[_0x109b95(322)]
    })[_0x109b95(278)](_0x55ea4a[_0x109b95(121)] || {
      translate: _0x54f552.eLcIg
    });
  _0x57ee96[_0x109b95(409)]({
    translate: _0x109b95(118)
  }, _0x109b95(387)), _0x57ee96[_0x109b95(409)]({
    translate: _0x109b95(203)
  }, _0x54f552[_0x109b95(369)]), _0x57ee96[_0x109b95(409)]({
    translate: "shopkeeper.delete"
  }, "textures/ui/trash"), _0x57ee96[_0x109b95(409)]({
    translate: "shopkeeper.back"
  }, "textures/ui/arrow_left"), _0x370af0[_0x109b95(271)].run(() => {
    const _0x4e2b67 = _0x109b95,
      _0x302590 = {
        NutOM: _0x4e2b67(354)
      };
    _0x57ee96.show(_0x4c880).then(_0x236306 => {
      const _0x5ba004 = _0x4e2b67;
      if (_0x54f552[_0x5ba004(328)] === _0x5ba004(378)) {
        if (_0x236306.canceled || _0x236306[_0x5ba004(190)] === void 0) {
          _0x54f552[_0x5ba004(169)](folderSetUi, _0x4c880, _0x2c7ccf, _0x3e99ee, _0x5605bf);
          return;
        }
        switch (_0x236306.selection) {
          case 0:
            _0x54f552[_0x5ba004(183)](fsetDecoForm, _0x4c880, _0x2c7ccf, _0x3e99ee, _0x55ea4a.slot, _0x5605bf, _0x55ea4a);
            break;
          case 1:
            _0x54f552[_0x5ba004(353)](fsetDecoForm, _0x4c880, _0x2c7ccf, _0x3e99ee, _0x55ea4a[_0x5ba004(150)], _0x5605bf, null, {
              replaceNamespace: _0x55ea4a[_0x5ba004(130)]
            });
            break;
          case 2:
            fsetDeleteChild(_0x4c880, _0x2c7ccf, _0x3e99ee, _0x55ea4a, _0x5605bf);
            break;
          default:
            folderSetUi(_0x4c880, _0x2c7ccf, _0x3e99ee, _0x5605bf);
            break;
        }
      } else return _0x3e0307.hasTag(GXtSIw[_0x5ba004(397)]);
    })[_0x4e2b67(285)](_0x513856 => log[_0x4e2b67(246)]("ui", _0x513856, {
      action: _0x4e2b67(205),
      rootName: _0x2c7ccf,
      link: _0x3e99ee
    }));
  });
}
function fsetLayoutDecoSlotMenu(_0x215dee, _0xc8fbf6, _0x4458f9, _0x22b0bf, _0x2cab71) {
  const _0x41b3c8 = _0x5778,
    _0x4d52c2 = {
      mfunD: function (_0x4fbf06, _0x4daa09, _0x5e9ba8, _0x583944, _0x43174d, _0x3e47ab, _0x5cf4c0, _0x399998) {
        return _0x4fbf06(_0x4daa09, _0x5e9ba8, _0x583944, _0x43174d, _0x3e47ab, _0x5cf4c0, _0x399998);
      },
      zoKfD: function (_0x4bdb78, _0x158268) {
        return _0x4bdb78 === _0x158268;
      },
      RNJnd: function (_0x1ea21d, _0x5d1c43, _0x1eaf64, _0x132001, _0x2e0c7b, _0x48487b) {
        return _0x1ea21d(_0x5d1c43, _0x1eaf64, _0x132001, _0x2e0c7b, _0x48487b);
      },
      zhJyK: _0x41b3c8(288)
    },
    _0x31c880 = new ActionFormData2().title({
      translate: _0x41b3c8(304)
    })[_0x41b3c8(278)](_0x22b0bf[_0x41b3c8(121)] || {
      translate: _0x41b3c8(179)
    });
  _0x31c880.button({
    translate: _0x41b3c8(211)
  }, _0x41b3c8(387)), _0x31c880[_0x41b3c8(409)]({
    translate: "shopkeeper.delete"
  }, _0x41b3c8(252)), _0x31c880.button({
    translate: _0x4d52c2.zhJyK
  }, "textures/ui/arrow_left"), _0x370af0[_0x41b3c8(271)][_0x41b3c8(375)](() => _0x31c880[_0x41b3c8(167)](_0x215dee).then(_0x433550 => {
    const _0x71410f = _0x41b3c8;
    if (_0x433550[_0x71410f(110)] || _0x433550.selection === void 0 || _0x433550.selection === 2) return folderSetUi(_0x215dee, _0xc8fbf6, _0x4458f9, _0x2cab71);
    if (_0x433550.selection === 0) return _0x4d52c2[_0x71410f(232)](fsetDecoForm, _0x215dee, _0xc8fbf6, _0x4458f9, _0x2cab71 * FSET_PAGE_SIZE + _0x22b0bf[_0x71410f(150)], _0x2cab71, _0x22b0bf, {
      onSave: _0x2f48bc => fsetSaveLayoutOverride(_0x215dee, _0xc8fbf6, _0x4458f9, _0x2cab71, _0x22b0bf, _0x2f48bc)
    });
    if (_0x4d52c2.zoKfD(_0x433550.selection, 1)) return _0x4d52c2[_0x71410f(274)](fsetRemoveLayoutEntry, _0x215dee, _0xc8fbf6, _0x4458f9, _0x2cab71, _0x22b0bf[_0x71410f(296)]);
  })[_0x41b3c8(285)](_0x50aeba => log[_0x41b3c8(246)]("ui", _0x50aeba, {
    action: _0x41b3c8(302),
    rootName: _0xc8fbf6,
    link: _0x4458f9,
    page: _0x2cab71
  })));
}
function fsetSaveLayoutOverride(_0x1595a7, _0x35b86c, _0x2575d1, _0x1a5e1e, _0x5afd66, _0x4b7d16) {
  const _0xfbff9c = _0x5778,
    _0x599773 = {
      Tizgi: function (_0x5da9cc, _0x25120c) {
        return _0x5da9cc !== _0x25120c;
      },
      Bpcme: function (_0x289278, _0x529f89, _0x5665f6, _0x2f11ea, _0x2c0ff6) {
        return _0x289278(_0x529f89, _0x5665f6, _0x2f11ea, _0x2c0ff6);
      }
    },
    _0x20ce4b = ctx.loadTradeRoot(_0x35b86c),
    _0x2b073f = _0x20ce4b && ctx.getNode(_0x20ce4b, _0x2575d1);
  if (!_0x2b073f) return;
  if (!_0x2b073f.decoLayouts || typeof _0x2b073f[_0xfbff9c(225)] !== "object") _0x2b073f[_0xfbff9c(225)] = {};
  const _0x55afef = _0x2b073f[_0xfbff9c(225)][String(_0x1a5e1e)];
  if (!_0x55afef) return folderSetUi(_0x1595a7, _0x35b86c, _0x2575d1, _0x1a5e1e);
  if (!_0x55afef.detached || _0x599773[_0xfbff9c(132)](typeof _0x55afef.detached, _0xfbff9c(266))) _0x55afef[_0xfbff9c(226)] = {};
  _0x55afef[_0xfbff9c(226)][_0x5afd66[_0xfbff9c(296)]] = {
    slot: _0x5afd66[_0xfbff9c(150)],
    display_name: _0x4b7d16.name[_0xfbff9c(216)](),
    texture: _0x4b7d16[_0xfbff9c(336)] || _0xfbff9c(399),
    glint: _0x4b7d16[_0xfbff9c(321)],
    durability: Math[_0xfbff9c(414)](100, Math.max(0, Math.floor(_0x4b7d16.durability))),
    lore: _0x4b7d16.lore[_0xfbff9c(230)](_0x55193b => _0x55193b.trim())[_0xfbff9c(175)](Boolean),
    commands: _0x4b7d16[_0xfbff9c(317)][_0xfbff9c(230)](_0x287334 => _0x287334[_0xfbff9c(216)]()).filter(Boolean)
  }, ctx.saveTradeRoot(_0x35b86c, _0x20ce4b), fsetMsg(_0x1595a7, "shopkeeper.deco.saved"), _0x599773[_0xfbff9c(254)](folderSetUi, _0x1595a7, _0x35b86c, _0x2575d1, _0x1a5e1e);
}
function fsetRemoveLayoutEntry(_0x238a8f, _0xc25aeb, _0x3efa21, _0x6df9eb, _0x50ebf3) {
  const _0x280753 = _0x5778,
    _0x44af3c = {
      lZAiw: function (_0x22adc4, _0x231bab) {
        return _0x22adc4(_0x231bab);
      },
      buqGN: function (_0x1a4d9c, _0x466004, _0x329473, _0x374513, _0x1877c9) {
        return _0x1a4d9c(_0x466004, _0x329473, _0x374513, _0x1877c9);
      }
    },
    _0x345133 = ctx[_0x280753(128)](_0xc25aeb),
    _0x3e6791 = _0x345133 && ctx.getNode(_0x345133, _0x3efa21),
    _0x563d67 = _0x3e6791?.[_0x280753(225)]?.[_0x44af3c[_0x280753(239)](String, _0x6df9eb)];
  if (!_0x563d67) return _0x44af3c[_0x280753(116)](folderSetUi, _0x238a8f, _0xc25aeb, _0x3efa21, _0x6df9eb);
  _0x563d67.hiddenEntryIds = Array[_0x280753(400)](_0x563d67.hiddenEntryIds) ? _0x563d67[_0x280753(250)] : [];
  if (!_0x563d67.hiddenEntryIds[_0x280753(348)](_0x50ebf3)) _0x563d67[_0x280753(250)][_0x280753(158)](_0x50ebf3);
  if (_0x563d67.detached) delete _0x563d67[_0x280753(226)][_0x50ebf3];
  ctx.saveTradeRoot(_0xc25aeb, _0x345133), folderSetUi(_0x238a8f, _0xc25aeb, _0x3efa21, _0x6df9eb);
}
function fsetApplyDecoLayout(_0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86, _0x40064a, _0x3e3644 = null) {
  const _0xc66d49 = _0x5778,
    _0x27bd0d = {
      mqpap: function (_0x25b5c4, _0x423d87, _0x5a2022, _0x20d6a9, _0x377342) {
        return _0x25b5c4(_0x423d87, _0x5a2022, _0x20d6a9, _0x377342);
      },
      cYqyU: function (_0xd39632, _0x2c5cd0) {
        return _0xd39632 !== _0x2c5cd0;
      },
      MFZrQ: "shopkeeper.back",
      bISKo: function (_0xa2724, _0x2362c8) {
        return _0xa2724 >= _0x2362c8;
      },
      CNArk: function (_0x1ba65a, _0x3d609d) {
        return _0x1ba65a * _0x3d609d;
      },
      hGtNj: _0xc66d49(266)
    },
    _0x1fec82 = ctx.loadTradeRoot(_0x39c708),
    _0x37e07f = _0x1fec82 && ctx[_0xc66d49(326)](_0x1fec82, _0x4a1c59),
    _0x4d65bf = ctx.getDecoLayout(_0x40064a);
  if (!_0x37e07f || !_0x4d65bf) return fsetMsg(_0x2a9b7c, "shopkeeper.decolayout.missing"), _0x27bd0d[_0xc66d49(362)](folderSetUi, _0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86);
  const _0x1bf00f = _0x37e07f[_0xc66d49(225)]?.[String(_0x2e4b86)] || {};
  if (_0x1bf00f[_0xc66d49(309)] === _0x40064a) return folderSetUi(_0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86);
  const _0x497600 = new Set(_0x4d65bf[_0xc66d49(417)][_0xc66d49(223)].map(_0x32791b => _0x2e4b86 * FSET_PAGE_SIZE + _0x32791b[_0xc66d49(150)])),
    _0x29a193 = childrenOf(_0x37e07f)[_0xc66d49(175)](_0x40dc40 => _0x497600.has(_0x40dc40.slot)),
    _0x32c7ed = Object[_0xc66d49(255)](_0x1bf00f[_0xc66d49(226)] || {})[_0xc66d49(175)](([, _0xa52055]) => _0x497600[_0xc66d49(299)](_0x2e4b86 * FSET_PAGE_SIZE + _0xa52055.slot)),
    _0x66d6f4 = JSON[_0xc66d49(273)]({
      revision: _0x4d65bf[_0xc66d49(371)],
      children: _0x29a193[_0xc66d49(230)](_0x3fbe96 => _0x3fbe96[_0xc66d49(130)])[_0xc66d49(301)](),
      detached: _0x32c7ed[_0xc66d49(230)](([_0xe03eea]) => _0xe03eea)[_0xc66d49(301)]()
    });
  if (_0x3e3644 && _0x27bd0d[_0xc66d49(126)](_0x3e3644, _0x66d6f4)) return fsetApplyDecoLayout(_0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86, _0x40064a);
  if (!_0x3e3644 && (_0x29a193[_0xc66d49(415)] || _0x32c7ed[_0xc66d49(415)])) {
    const _0x3cf887 = new ActionFormData2()[_0xc66d49(267)]({
      translate: _0xc66d49(129)
    })[_0xc66d49(278)]({
      translate: _0xc66d49(382),
      with: [String(_0x29a193[_0xc66d49(415)] + _0x32c7ed[_0xc66d49(415)])]
    }).button({
      translate: "shopkeeper.policy.apply.now"
    })[_0xc66d49(409)]({
      translate: _0x27bd0d.MFZrQ
    });
    return _0x370af0.system.run(() => _0x3cf887[_0xc66d49(167)](_0x2a9b7c)[_0xc66d49(120)](_0x28bdea => {
      const _0x392a81 = _0xc66d49;
      if (_0x28bdea.canceled || _0x28bdea[_0x392a81(190)] !== 0) return folderSetUi(_0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86);
      fsetApplyDecoLayout(_0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86, _0x40064a, _0x66d6f4);
    }).catch(_0xde78e7 => log.err("ui", _0xde78e7, {
      action: _0xc66d49(191),
      rootName: _0x39c708,
      link: _0x4a1c59,
      page: _0x2e4b86
    })));
  }
  const _0x4d9fbc = _0x29a193.flatMap(_0xed7fea => collectSubtreeStorageRefs(_0xed7fea));
  if (_0x4d9fbc[_0xc66d49(415)]) ctx.returnRefsToPlayer(_0x2a9b7c, _0x4d9fbc);
  if (_0x4d9fbc.length) ctx[_0xc66d49(105)](_0x2a9b7c, _0x4d9fbc);
  const _0x5d81ab = childrenOf(_0x37e07f);
  for (let _0x880795 = _0x5d81ab[_0xc66d49(415)] - 1; _0x27bd0d.bISKo(_0x880795, 0); _0x880795--) if (_0x497600.has(_0x5d81ab[_0x880795]?.[_0xc66d49(150)])) _0x5d81ab[_0xc66d49(157)](_0x880795, 1);
  const _0x15c6e0 = {
    ...(_0x1bf00f[_0xc66d49(226)] || {})
  };
  for (const [_0x151789, _0x28eeed] of Object[_0xc66d49(255)](_0x15c6e0)) if (_0x497600[_0xc66d49(299)](_0x27bd0d.CNArk(_0x2e4b86, FSET_PAGE_SIZE) + _0x28eeed[_0xc66d49(150)])) delete _0x15c6e0[_0x151789];
  if (!_0x37e07f.decoLayouts || typeof _0x37e07f[_0xc66d49(225)] !== _0x27bd0d.hGtNj) _0x37e07f.decoLayouts = {};
  _0x37e07f.decoLayouts[String(_0x2e4b86)] = {
    configId: _0x40064a,
    hiddenEntryIds: [],
    detached: _0x15c6e0
  }, ctx.saveTradeRoot(_0x39c708, _0x1fec82), fsetMsg(_0x2a9b7c, _0xc66d49(104)), folderSetUi(_0x2a9b7c, _0x39c708, _0x4a1c59, _0x2e4b86);
}
function fsetUnassignDecoLayout(_0x13e125, _0x1f9984, _0x32ae49, _0x5d6f9a) {
  const _0x2c26cd = _0x5778,
    _0x30f3f4 = ctx[_0x2c26cd(128)](_0x1f9984),
    _0x4d630b = _0x30f3f4 && ctx[_0x2c26cd(326)](_0x30f3f4, _0x32ae49);
  if (!_0x4d630b?.[_0x2c26cd(225)]?.[String(_0x5d6f9a)]) return folderSetUi(_0x13e125, _0x1f9984, _0x32ae49, _0x5d6f9a);
  const _0x35c8ff = _0x4d630b.decoLayouts[String(_0x5d6f9a)];
  if (Object[_0x2c26cd(410)](_0x35c8ff[_0x2c26cd(226)] || {})[_0x2c26cd(415)]) _0x4d630b[_0x2c26cd(225)][String(_0x5d6f9a)] = {
    configId: null,
    detached: _0x35c8ff.detached
  };else delete _0x4d630b[_0x2c26cd(225)][String(_0x5d6f9a)];
  ctx[_0x2c26cd(264)](_0x1f9984, _0x30f3f4), fsetMsg(_0x13e125, _0x2c26cd(104)), folderSetUi(_0x13e125, _0x1f9984, _0x32ae49, _0x5d6f9a);
}
function fsetDeleteChild(_0x1b95ef, _0xd8d289, _0x322c48, _0x431ab, _0x43ad2d) {
  const _0x2922ac = _0x5778,
    _0x3d7c6c = {
      pMczo: function (_0x294ac1, _0x32e588) {
        return _0x294ac1(_0x32e588);
      },
      KHifh: function (_0x439f9c, _0x3005d0) {
        return _0x439f9c === _0x3005d0;
      },
      XrVQG: "shopkeeper.deleted",
      iSfHF: function (_0x263366, _0x2c24ff) {
        return _0x263366(_0x2c24ff);
      }
    },
    _0x56ad94 = collectSubtreeStorageRefs(_0x431ab),
    _0x43129f = _0x431ab[_0x2922ac(121)] ?? _0x431ab[_0x2922ac(130)],
    _0xc8947f = _0x591046 => {
      const _0x26c17c = _0x2922ac,
        _0x4db8f9 = ctx.loadTradeRoot(_0xd8d289);
      if (!_0x4db8f9) return;
      const _0x29eba4 = ctx[_0x26c17c(326)](_0x4db8f9, _0x322c48);
      if (!_0x29eba4) return;
      const _0x1fbffa = _0x3d7c6c.pMczo(childrenOf, _0x29eba4)[_0x26c17c(352)](_0x17cf9e => _0x17cf9e && _0x17cf9e.namespace === _0x431ab[_0x26c17c(130)]);
      if (_0x3d7c6c[_0x26c17c(212)](_0x1fbffa, -1)) return;
      _0x591046 && _0x56ad94[_0x26c17c(415)] > 0 && ctx[_0x26c17c(361)](_0x1b95ef, _0x56ad94), _0x56ad94[_0x26c17c(415)] > 0 && ctx.clearStorageRefs(_0x1b95ef, _0x56ad94), childrenOf(_0x29eba4)[_0x26c17c(157)](_0x1fbffa, 1), ctx.saveTradeRoot(_0xd8d289, _0x4db8f9), fsetMsg(_0x1b95ef, _0x3d7c6c.XrVQG, [_0x3d7c6c.iSfHF(rawMessageToText, _0x43129f)]), folderSetUi(_0x1b95ef, _0xd8d289, _0x322c48, _0x43ad2d);
    };
  if (_0x56ad94[_0x2922ac(415)] === 0) {
    _0xc8947f(![]);
    return;
  }
  ctx[_0x2922ac(339)](_0x1b95ef, {
    refs: _0x56ad94,
    bodyKey: "shopkeeper.folderset.delete.choice.node.body",
    bodyParams: [rawMessageToText(_0x43129f), String(_0x56ad94[_0x2922ac(415)])],
    onConfirmed: () => _0xc8947f(![]),
    onReturn: () => _0xc8947f(!![]),
    onCancel: () => folderSetUi(_0x1b95ef, _0xd8d289, _0x322c48, _0x43ad2d)
  });
}
function fsetCreateItemAtSlot(_0x501665, _0xb93985, _0x2ecc90, _0x543bc3, _0x4ec7ef) {
  const _0x5178ac = _0x5778,
    _0x1ee89c = {
      ZWnpg: function (_0x2384d2, _0x6cf967, _0x4e7f63, _0x2aab0b, _0xc802b) {
        return _0x2384d2(_0x6cf967, _0x4e7f63, _0x2aab0b, _0xc802b);
      },
      xIzoR: function (_0x1f4be1, _0xdee599, _0x5d93bb) {
        return _0x1f4be1(_0xdee599, _0x5d93bb);
      },
      TrbLf: "shopkeeper.slot.empty",
      LCcoB: function (_0x1aadca, _0x1463ed) {
        return _0x1aadca + _0x1463ed;
      },
      riEZb: function (_0x467e48, _0x3a054e) {
        return _0x467e48 + _0x3a054e;
      },
      DqVHM: function (_0x7c0cbc, _0x30aa00) {
        return _0x7c0cbc(_0x30aa00);
      },
      xvxOC: function (_0x37df49, _0x154f49) {
        return _0x37df49 > _0x154f49;
      }
    },
    _0x35f99b = ctx[_0x5178ac(128)](_0xb93985);
  if (!_0x35f99b) return;
  const _0xa23ab1 = ctx[_0x5178ac(326)](_0x35f99b, _0x2ecc90);
  if (!_0xa23ab1) return;
  const _0x114fd8 = findChildAtSlot(_0x1ee89c[_0x5178ac(350)](childrenOf, _0xa23ab1), _0x543bc3);
  if (_0x114fd8) {
    const _0x59dd8f = childrenOf(_0xa23ab1).findIndex(_0x598f22 => _0x598f22 && _0x598f22[_0x5178ac(130)] === _0x114fd8[_0x5178ac(130)]);
    if (_0x59dd8f !== -1) {
      const _0x5af0d0 = collectSubtreeStorageRefs(_0x114fd8);
      if (_0x1ee89c[_0x5178ac(297)](_0x5af0d0[_0x5178ac(415)], 0)) ctx.clearStorageRefs(_0x501665, _0x5af0d0);
      childrenOf(_0xa23ab1)[_0x5178ac(157)](_0x59dd8f, 1), ctx[_0x5178ac(264)](_0xb93985, _0x35f99b);
    }
  }
  ctx.selectItemFromInventory(_0x501665, null, _0xc4006a => {
    const _0x3323b2 = _0x5178ac;
    if (_0xc4006a === null || _0xc4006a === void 0) {
      _0x1ee89c[_0x3323b2(134)](folderSetUi, _0x501665, _0xb93985, _0x2ecc90, _0x4ec7ef);
      return;
    }
    const _0x303a05 = _0x501665[_0x3323b2(131)](_0x3323b2(384))?.[_0x3323b2(215)],
      _0x215046 = _0x303a05 ? _0x303a05[_0x3323b2(145)](_0xc4006a) : null;
    if (!_0x215046) {
      _0x1ee89c.xIzoR(fsetMsg, _0x501665, _0x1ee89c[_0x3323b2(200)]), folderSetUi(_0x501665, _0xb93985, _0x2ecc90, _0x4ec7ef);
      return;
    }
    const _0xce9050 = ctx[_0x3323b2(128)](_0xb93985) || _0x35f99b,
      _0xaf58cc = ctx[_0x3323b2(326)](_0xce9050, _0x2ecc90) || _0xa23ab1,
      _0x5e50b2 = ctx[_0x3323b2(355)](_0xce9050);
    if (_0x1ee89c[_0x3323b2(248)](_0x5e50b2, 9) > STORAGE_MAX_SLOT) {
      _0x1ee89c[_0x3323b2(418)](fsetMsg, _0x501665, _0x3323b2(253)), folderSetUi(_0x501665, _0xb93985, _0x2ecc90, _0x4ec7ef);
      return;
    }
    const _0x378b09 = _0x1ee89c.riEZb(_0x3323b2(111) + Date[_0x3323b2(154)]() + "_", Math[_0x3323b2(156)](Math[_0x3323b2(201)]() * 1e4));
    childrenOf(_0xaf58cc).push({
      type: _0x3323b2(313),
      namespace: _0x378b09,
      tradeId: "t_" + Date[_0x3323b2(154)]()[_0x3323b2(358)](36) + "_" + Math[_0x3323b2(156)](Math[_0x3323b2(201)]() * 4294967296).toString(36),
      offerPolicyId: _0x3323b2(177),
      slot: _0x543bc3,
      display_name: ctx[_0x3323b2(238)](_0x215046),
      storage: _0xb93985,
      storageOffset: _0x5e50b2
    }), ctx[_0x3323b2(264)](_0xb93985, _0xce9050), storage_default.set(_0x501665, _0xb93985, _0x5e50b2 + 0, _0x215046[_0x3323b2(159)]()), fsetMsg(_0x501665, _0x3323b2(381)), _0x370af0[_0x3323b2(271)][_0x3323b2(375)](() => folderSetUi(_0x501665, _0xb93985, _0x2ecc90, _0x4ec7ef));
  });
}
function fsetCreateFolderAtSlot(_0x591379, _0x58a868, _0xa2cef7, _0x4f6582, _0x17cdf7, _0x2071d0) {
  const _0x26e80a = _0x5778,
    _0x3fb09f = {
      nCiQI: function (_0x10160d, _0xc4421e) {
        return _0x10160d(_0xc4421e);
      },
      xLjeL: _0x26e80a(282),
      feJGs: function (_0x50ce81, _0x424d3f, _0x9a6b2) {
        return _0x50ce81(_0x424d3f, _0x9a6b2);
      },
      VZRIz: function (_0x697ce, _0x3ee0cd) {
        return _0x697ce(_0x3ee0cd);
      },
      rlXrw: _0x26e80a(293),
      EVUCu: _0x26e80a(231)
    },
    _0x54e111 = ctx[_0x26e80a(128)](_0x58a868);
  if (!_0x54e111) return;
  const _0x4fc3ab = ctx[_0x26e80a(326)](_0x54e111, _0xa2cef7);
  if (!_0x4fc3ab) return;
  const _0x5ded28 = _0x3fb09f[_0x26e80a(240)](findChildAtSlot, _0x3fb09f[_0x26e80a(199)](childrenOf, _0x4fc3ab), _0x4f6582);
  if (_0x5ded28) {
    const _0x5b5ac5 = childrenOf(_0x4fc3ab).findIndex(_0x4a7c9d => _0x4a7c9d && _0x4a7c9d[_0x26e80a(130)] === _0x5ded28[_0x26e80a(130)]);
    if (_0x5b5ac5 !== -1) {
      const _0x134b55 = collectSubtreeStorageRefs(_0x5ded28);
      if (_0x134b55[_0x26e80a(415)] > 0) ctx[_0x26e80a(105)](_0x591379, _0x134b55);
      _0x3fb09f[_0x26e80a(199)](childrenOf, _0x4fc3ab)[_0x26e80a(157)](_0x5b5ac5, 1), ctx[_0x26e80a(264)](_0x58a868, _0x54e111);
    }
  }
  const _0x4088be = _0x2071d0 ? _0x26e80a(193) : _0x26e80a(221),
    _0x3b4fe8 = _0x2071d0 ? _0x26e80a(292) : _0x3fb09f.rlXrw;
  new ModalFormData()[_0x26e80a(267)]({
    translate: _0x2071d0 ? _0x26e80a(141) : "shopkeeper.folderset.create.folder.title"
  }).textField({
    translate: "shopkeeper.folder.create.name.label"
  }, "", {
    defaultValue: _0x4088be
  }).textField({
    translate: _0x3fb09f[_0x26e80a(275)]
  }, "", {
    defaultValue: ""
  })[_0x26e80a(144)]({
    translate: "shopkeeper.folder.create.texture.label"
  }, "", {
    defaultValue: _0x3b4fe8
  }).toggle({
    translate: _0x26e80a(171)
  }, {
    defaultValue: ![]
  })[_0x26e80a(167)](_0x591379)[_0x26e80a(120)](_0x4fc850 => {
    const _0xf5f9ee = _0x26e80a;
    if (_0x4fc850[_0xf5f9ee(110)]) {
      folderSetUi(_0x591379, _0x58a868, _0xa2cef7, _0x17cdf7);
      return;
    }
    const _0x53355c = ctx[_0xf5f9ee(128)](_0x58a868);
    if (!_0x53355c) return;
    const _0x4f23d = ctx.getNode(_0x53355c, _0xa2cef7);
    if (!_0x4f23d) return;
    const _0x539380 = nextChildNamespace(childrenOf(_0x4f23d), _0x2071d0 ? _0xf5f9ee(338) : "cat");
    childrenOf(_0x4f23d)[_0xf5f9ee(158)]({
      namespace: _0x539380,
      type: _0x2071d0 ? _0xf5f9ee(197) : _0xf5f9ee(109),
      slot: _0x4f6582,
      display_name: _0x3fb09f[_0xf5f9ee(408)](String, _0x4fc850.formValues[0] ?? _0x4088be),
      sub_name: String(_0x4fc850.formValues[1] ?? ""),
      texture: _0x3fb09f[_0xf5f9ee(408)](String, _0x4fc850[_0xf5f9ee(242)][2] ?? _0x3b4fe8),
      glint: !!_0x4fc850[_0xf5f9ee(242)][3],
      children: []
    }), ctx.saveTradeRoot(_0x58a868, _0x53355c), fsetMsg(_0x591379, _0x3fb09f[_0xf5f9ee(112)]), folderSetUi(_0x591379, _0x58a868, _0xa2cef7, _0x17cdf7);
  }).catch(_0x2a50cb => log[_0x26e80a(246)]("ui", _0x2a50cb, {
    action: _0x26e80a(108),
    rootName: _0x58a868,
    link: _0xa2cef7
  }));
}
function folderSetPropertiesUi(_0x551fac, _0x4532c6, _0x38d65e) {
  const _0x26c8de = _0x5778,
    _0x43a906 = {
      gEUxk: function (_0x4716bd, _0xdefb7) {
        return _0x4716bd(_0xdefb7);
      },
      rrJWa: function (_0x49af19, _0x1ac48d, _0x2046af) {
        return _0x49af19(_0x1ac48d, _0x2046af);
      }
    },
    _0x26a9cc = ctx[_0x26c8de(128)](_0x4532c6);
  if (!_0x26a9cc) return;
  const _0x33194f = ctx[_0x26c8de(326)](_0x26a9cc, _0x38d65e);
  if (!_0x33194f) return;
  new ModalFormData().title({
    translate: _0x26c8de(170)
  })[_0x26c8de(144)]({
    translate: _0x26c8de(332)
  }, "", {
    defaultValue: _0x33194f[_0x26c8de(121)] ?? ""
  })[_0x26c8de(144)]({
    translate: _0x26c8de(140)
  }, "", {
    defaultValue: _0x33194f[_0x26c8de(386)] ?? ""
  })[_0x26c8de(144)]({
    translate: _0x26c8de(330)
  }, "", {
    defaultValue: _0x33194f[_0x26c8de(336)] ?? "minecraft:ender_chest"
  })[_0x26c8de(160)]({
    translate: "shopkeeper.folder.properties.glint.label"
  }, {
    defaultValue: !!_0x33194f[_0x26c8de(321)]
  })[_0x26c8de(167)](_0x551fac)[_0x26c8de(120)](_0x2197b1 => {
    const _0x11adee = _0x26c8de;
    if (_0x2197b1[_0x11adee(110)]) {
      folderSetUi(_0x551fac, _0x4532c6, _0x38d65e, 0);
      return;
    }
    const _0x233dfb = ctx[_0x11adee(128)](_0x4532c6),
      _0x2ef921 = _0x233dfb ? ctx.getNode(_0x233dfb, _0x38d65e) : null;
    if (!_0x2ef921) return;
    _0x2ef921.display_name = String(_0x2197b1[_0x11adee(242)][0] ?? "")[_0x11adee(216)]() || _0x2ef921.display_name, _0x2ef921[_0x11adee(386)] = String(_0x2197b1[_0x11adee(242)][1] ?? "").trim(), _0x2ef921.texture = _0x43a906[_0x11adee(370)](String, _0x2197b1.formValues[2] ?? "").trim() || "minecraft:ender_chest", _0x2ef921.glint = !!_0x2197b1[_0x11adee(242)][3], ctx[_0x11adee(264)](_0x4532c6, _0x233dfb), _0x43a906[_0x11adee(113)](fsetMsg, _0x551fac, _0x11adee(379)), folderSetUi(_0x551fac, _0x4532c6, _0x38d65e, 0);
  }).catch(_0x54e965 => log[_0x26c8de(246)]("ui", _0x54e965, {
    action: _0x26c8de(306),
    rootName: _0x4532c6,
    link: _0x38d65e
  }));
}
function fsetChildPropsUi(_0x4a7503, _0x247a49, _0x5aff6d, _0x41d62d, _0x35619c) {
  const _0x1956bf = _0x5778,
    _0x2577c6 = {
      OKXKh: function (_0xc326f0, _0x201a5f, _0x55b12e, _0xd95db7, _0x405de2) {
        return _0xc326f0(_0x201a5f, _0x55b12e, _0xd95db7, _0x405de2);
      },
      oclMt: function (_0x2b433d, _0x4210e2) {
        return _0x2b433d(_0x4210e2);
      },
      hisKA: _0x1956bf(292)
    };
  new ModalFormData()[_0x1956bf(267)]({
    translate: _0x1956bf(170)
  })[_0x1956bf(144)]({
    translate: _0x1956bf(332)
  }, "", {
    defaultValue: _0x41d62d[_0x1956bf(121)] ?? ""
  }).textField({
    translate: "shopkeeper.folder.properties.subname.label"
  }, "", {
    defaultValue: _0x41d62d[_0x1956bf(386)] ?? ""
  })[_0x1956bf(144)]({
    translate: _0x1956bf(330)
  }, "", {
    defaultValue: _0x41d62d[_0x1956bf(336)] ?? (_0x41d62d[_0x1956bf(345)] === "folderSet" ? _0x2577c6[_0x1956bf(364)] : _0x1956bf(293))
  }).toggle({
    translate: _0x1956bf(401)
  }, {
    defaultValue: !!_0x41d62d[_0x1956bf(321)]
  })[_0x1956bf(167)](_0x4a7503)[_0x1956bf(120)](_0x558a9a => {
    const _0x75bbed = _0x1956bf;
    if (_0x558a9a[_0x75bbed(110)]) {
      _0x2577c6.OKXKh(folderSetUi, _0x4a7503, _0x247a49, _0x5aff6d, _0x35619c);
      return;
    }
    const _0x1e417b = ctx.loadTradeRoot(_0x247a49),
      _0x364152 = _0x1e417b ? ctx[_0x75bbed(326)](_0x1e417b, _0x5aff6d) : null;
    if (!_0x364152) return;
    const _0x791eeb = childrenOf(_0x364152)[_0x75bbed(277)](_0x1f673a => _0x1f673a && _0x1f673a.namespace === _0x41d62d.namespace);
    if (!_0x791eeb) return;
    _0x791eeb[_0x75bbed(121)] = String(_0x558a9a[_0x75bbed(242)][0] ?? "")[_0x75bbed(216)]() || _0x791eeb[_0x75bbed(121)], _0x791eeb[_0x75bbed(386)] = _0x2577c6[_0x75bbed(340)](String, _0x558a9a[_0x75bbed(242)][1] ?? "").trim(), _0x791eeb.texture = String(_0x558a9a.formValues[2] ?? "")[_0x75bbed(216)]() || _0x791eeb[_0x75bbed(336)], _0x791eeb[_0x75bbed(321)] = !!_0x558a9a[_0x75bbed(242)][3], ctx[_0x75bbed(264)](_0x247a49, _0x1e417b), fsetMsg(_0x4a7503, _0x75bbed(379)), _0x2577c6.OKXKh(folderSetUi, _0x4a7503, _0x247a49, _0x5aff6d, _0x35619c);
  })[_0x1956bf(285)](_0x33f339 => log[_0x1956bf(246)]("ui", _0x33f339, {
    action: _0x1956bf(413),
    rootName: _0x247a49,
    link: _0x5aff6d
  }));
}
function fsetDecoForm(_0x1d28e1, _0x3af70e, _0x4a5ab6, _0x4994da, _0x318e18, _0x542f01, _0x2a4db4 = {}) {
  const _0x4c7bfc = _0x5778,
    _0x45f904 = {
      rsQRA: _0x4c7bfc(243),
      OVzZF: _0x4c7bfc(180),
      dQiBa: function (_0x36821a, _0x21a6f9, _0x2a3de8, _0x531e13, _0x380436, _0x12b7fa, _0x10ed72, _0x23f25f) {
        return _0x36821a(_0x21a6f9, _0x2a3de8, _0x531e13, _0x380436, _0x12b7fa, _0x10ed72, _0x23f25f);
      },
      TSUqp: function (_0x23a093, _0x2a6b79) {
        return _0x23a093 - _0x2a6b79;
      },
      WLxBs: function (_0x23e4c7, _0x3d8352) {
        return _0x23e4c7 + _0x3d8352;
      },
      HUFrL: _0x4c7bfc(399),
      ETSnz: _0x4c7bfc(155),
      APHpm: function (_0x29d3ce, _0x23d8b1) {
        return _0x29d3ce(_0x23d8b1);
      },
      UIwEh: _0x4c7bfc(213),
      CfUHB: _0x4c7bfc(411),
      JraBo: _0x4c7bfc(258)
    },
    _0x2a311d = Math[_0x4c7bfc(149)](0, Math[_0x4c7bfc(414)](DECO_LORE_MAX, _0x2a4db4[_0x4c7bfc(373)] ?? (Array.isArray(_0x542f01?.["lore"]) ? _0x542f01[_0x4c7bfc(217)][_0x4c7bfc(415)] : 0))),
    _0x4b4354 = Math[_0x4c7bfc(149)](0, Math.min(DECO_CMD_MAX, _0x2a4db4[_0x4c7bfc(163)] ?? (Array[_0x4c7bfc(400)](_0x542f01?.["commands"]) ? _0x542f01.commands[_0x4c7bfc(415)] : 0))),
    _0xf2bc90 = !!(_0x542f01 || _0x2a4db4.replaceNamespace),
    _0x3c50e7 = _0x2a4db4.draft || _0x542f01 || {},
    _0x6702ec = new ModalFormData().title({
      translate: _0xf2bc90 ? _0x4c7bfc(123) : _0x4c7bfc(388)
    });
  _0x6702ec[_0x4c7bfc(144)]({
    translate: _0x4c7bfc(218)
  }, "", {
    defaultValue: _0x3c50e7[_0x4c7bfc(121)] ?? ""
  }), _0x6702ec[_0x4c7bfc(144)]({
    translate: _0x4c7bfc(137)
  }, "", {
    defaultValue: _0x3c50e7[_0x4c7bfc(336)] ?? _0x45f904.HUFrL
  }), _0x6702ec[_0x4c7bfc(160)]({
    translate: _0x4c7bfc(164)
  }, {
    defaultValue: !!_0x3c50e7[_0x4c7bfc(321)]
  }), _0x6702ec.slider({
    translate: _0x45f904.ETSnz
  }, 0, 100, {
    defaultValue: Number(_0x3c50e7.durability) || 0
  });
  for (let _0x13c876 = 0; _0x13c876 < _0x2a311d; _0x13c876++) {
    _0x6702ec.textField({
      translate: _0x4c7bfc(115),
      with: [_0x45f904.APHpm(String, _0x13c876 + 1)]
    }, "", {
      defaultValue: (_0x3c50e7[_0x4c7bfc(217)] && _0x3c50e7[_0x4c7bfc(217)][_0x13c876]) ?? ""
    });
  }
  _0x6702ec[_0x4c7bfc(160)]({
    translate: "shopkeeper.deco.lore.add"
  }, {
    defaultValue: ![]
  });
  _0x2a311d >= 1 && _0x6702ec[_0x4c7bfc(160)]({
    translate: _0x45f904[_0x4c7bfc(189)]
  }, {
    defaultValue: ![]
  });
  for (let _0x15e0fb = 0; _0x15e0fb < _0x4b4354; _0x15e0fb++) {
    _0x6702ec[_0x4c7bfc(144)]({
      translate: "shopkeeper.deco.command.index",
      with: [String(_0x15e0fb + 1)]
    }, "", {
      defaultValue: (_0x3c50e7[_0x4c7bfc(256)] ?? _0x3c50e7[_0x4c7bfc(317)])?.[_0x15e0fb] ?? ""
    });
  }
  _0x6702ec[_0x4c7bfc(160)]({
    translate: _0x45f904[_0x4c7bfc(249)]
  }, {
    defaultValue: ![]
  });
  if (_0x4b4354 >= 1) {
    if ("ZhPNO" === _0x45f904[_0x4c7bfc(176)]) _0x6702ec[_0x4c7bfc(160)]({
      translate: _0x4c7bfc(402)
    }, {
      defaultValue: ![]
    });else {
      const _0x498ec0 = _0x1d698d[_0x16edd8];
      if (_0x498ec0 && _0x498ec0[_0x4c7bfc(345)] !== "deco") {
        const _0x589c2a = _0x12935f(_0x498ec0);
        if (_0x589c2a.length > 0) _0x3ecf9a[_0x4c7bfc(105)](_0x7cf8b8, _0x589c2a);
      }
      _0x2b95ae[_0x4c7bfc(157)](_0x36039a, 1);
    }
  }
  _0x6702ec.show(_0x1d28e1)[_0x4c7bfc(120)](_0x377aff => {
    const _0x4c4e80 = _0x4c7bfc;
    if (_0x377aff[_0x4c4e80(110)]) {
      folderSetUi(_0x1d28e1, _0x3af70e, _0x4a5ab6, _0x318e18);
      return;
    }
    const _0x43df51 = parseDecoFormValues(_0x2a311d, _0x4b4354, _0x377aff[_0x4c4e80(242)]);
    if (_0x43df51.action === _0x45f904[_0x4c4e80(383)]) {
      fsetDecoForm(_0x1d28e1, _0x3af70e, _0x4a5ab6, _0x4994da, _0x318e18, _0x542f01, {
        ..._0x2a4db4,
        loreCount: _0x2a311d + 1,
        cmdCount: _0x4b4354,
        draft: _0x43df51
      });
      return;
    }
    if (_0x43df51[_0x4c4e80(114)] === _0x45f904.OVzZF) {
      _0x43df51[_0x4c4e80(217)][_0x4c4e80(195)](), _0x45f904.dQiBa(fsetDecoForm, _0x1d28e1, _0x3af70e, _0x4a5ab6, _0x4994da, _0x318e18, _0x542f01, {
        ..._0x2a4db4,
        loreCount: _0x45f904[_0x4c4e80(187)](_0x2a311d, 1),
        cmdCount: _0x4b4354,
        draft: _0x43df51
      });
      return;
    }
    if (_0x43df51.action === _0x4c4e80(165)) {
      _0x45f904.dQiBa(fsetDecoForm, _0x1d28e1, _0x3af70e, _0x4a5ab6, _0x4994da, _0x318e18, _0x542f01, {
        ..._0x2a4db4,
        loreCount: _0x2a311d,
        cmdCount: _0x45f904[_0x4c4e80(204)](_0x4b4354, 1),
        draft: _0x43df51
      });
      return;
    }
    if (_0x43df51[_0x4c4e80(114)] === _0x4c4e80(106)) {
      _0x43df51[_0x4c4e80(317)][_0x4c4e80(195)](), _0x45f904[_0x4c4e80(366)](fsetDecoForm, _0x1d28e1, _0x3af70e, _0x4a5ab6, _0x4994da, _0x318e18, _0x542f01, {
        ..._0x2a4db4,
        loreCount: _0x2a311d,
        cmdCount: _0x4b4354 - 1,
        draft: _0x43df51
      });
      return;
    }
    if (typeof _0x2a4db4.onSave === _0x4c4e80(181)) _0x2a4db4.onSave(_0x43df51);else fsetSaveDeco(_0x1d28e1, _0x3af70e, _0x4a5ab6, _0x4994da, _0x318e18, _0x43df51, _0x2a4db4[_0x4c4e80(315)] ?? null);
  }).catch(_0x49d610 => log.err("ui", _0x49d610, {
    action: _0x4c7bfc(279),
    rootName: _0x3af70e,
    link: _0x4a5ab6,
    absSlot: _0x4994da
  }));
}
function fsetSaveDeco(_0x615779, _0x439d63, _0x176730, _0x52df36, _0x3265d5, _0x380089, _0x544090) {
  const _0x1bd3cd = _0x5778,
    _0x519c01 = {
      MpbaZ: function (_0x185ecc, _0x44b1ea) {
        return _0x185ecc(_0x44b1ea);
      },
      TiPqL: _0x1bd3cd(399),
      PvQkB: "shopkeeper.deco.saved"
    },
    _0x2ebc6b = ctx[_0x1bd3cd(128)](_0x439d63);
  if (!_0x2ebc6b) return;
  const _0x34d7c3 = ctx[_0x1bd3cd(326)](_0x2ebc6b, _0x176730);
  if (!_0x34d7c3) return;
  const _0x3cc5c4 = _0x519c01[_0x1bd3cd(327)](childrenOf, _0x34d7c3);
  if (_0x544090) {
    const _0x3c281e = _0x3cc5c4[_0x1bd3cd(352)](_0x271fb8 => _0x271fb8 && _0x271fb8[_0x1bd3cd(130)] === _0x544090);
    if (_0x3c281e !== -1) {
      const _0x440b61 = _0x3cc5c4[_0x3c281e];
      if (_0x440b61 && _0x440b61.type !== _0x1bd3cd(219)) {
        const _0x3ef191 = collectSubtreeStorageRefs(_0x440b61);
        if (_0x3ef191[_0x1bd3cd(415)] > 0) ctx.clearStorageRefs(_0x615779, _0x3ef191);
      }
      _0x3cc5c4[_0x1bd3cd(157)](_0x3c281e, 1);
    }
  }
  const _0x3bdebd = findChildAtSlot(_0x3cc5c4, _0x52df36);
  if (_0x3bdebd) {
    const _0x109e59 = _0x3cc5c4[_0x1bd3cd(352)](_0x5378c8 => _0x5378c8 && _0x5378c8.namespace === _0x3bdebd[_0x1bd3cd(130)]);
    if (_0x109e59 !== -1) {
      const _0x294f9f = collectSubtreeStorageRefs(_0x3bdebd);
      if (_0x294f9f.length > 0) ctx.clearStorageRefs(_0x615779, _0x294f9f);
      _0x3cc5c4[_0x1bd3cd(157)](_0x109e59, 1);
    }
  }
  _0x3cc5c4.push({
    namespace: nextChildNamespace(_0x3cc5c4, _0x1bd3cd(219)),
    type: _0x1bd3cd(219),
    slot: _0x52df36,
    display_name: _0x380089[_0x1bd3cd(403)].trim(),
    texture: _0x380089[_0x1bd3cd(336)] || _0x519c01.TiPqL,
    glint: _0x380089[_0x1bd3cd(321)],
    durability: _0x380089[_0x1bd3cd(228)],
    lore: _0x380089[_0x1bd3cd(217)].map(_0x26ae71 => _0x26ae71[_0x1bd3cd(216)]()).filter(_0x14a706 => _0x14a706[_0x1bd3cd(415)] > 0),
    commands: _0x380089[_0x1bd3cd(317)][_0x1bd3cd(230)](_0xe8dff1 => _0xe8dff1[_0x1bd3cd(216)]())[_0x1bd3cd(175)](_0x138496 => _0x138496[_0x1bd3cd(415)] > 0)
  }), ctx[_0x1bd3cd(264)](_0x439d63, _0x2ebc6b), fsetMsg(_0x615779, _0x519c01[_0x1bd3cd(196)]), folderSetUi(_0x615779, _0x439d63, _0x176730, _0x3265d5);
}
function fsetRunDecoCommands(_0x36c258, _0x3119b7) {
  const _0x23a373 = _0x5778,
    _0x3265c8 = {
      IdZLu: function (_0x457a30, _0x2d82f4) {
        return _0x457a30 === _0x2d82f4;
      },
      IAabN: function (_0xa2629f, _0x40355d) {
        return _0xa2629f(_0x40355d);
      },
      NsexW: _0x23a373(229)
    },
    _0x57909c = Array[_0x23a373(400)](_0x3119b7 && _0x3119b7[_0x23a373(256)]) ? _0x3119b7[_0x23a373(256)][_0x23a373(175)](_0x49a5f7 => _0x49a5f7 && _0x49a5f7[_0x23a373(216)]()[_0x23a373(415)]) : [];
  if (_0x3265c8.IdZLu(_0x57909c[_0x23a373(415)], 0)) {
    fsetMsg(_0x36c258, "shopkeeper.deco.nocommand");
    return;
  }
  for (const _0x5d76e1 of _0x57909c) {
    let _0x3b8411 = _0x3265c8[_0x23a373(276)](String, _0x5d76e1).trim();
    if (_0x3b8411[_0x23a373(349)]("/")) _0x3b8411 = _0x3b8411[_0x23a373(376)](1);
    if (!_0x3b8411) continue;
    try {
      _0x36c258.runCommand(_0x3b8411);
    } catch (_0x4d44a1) {
      log.w(_0x23a373(251), _0x3265c8[_0x23a373(220)], {
        player: _0x36c258.name,
        cmd: _0x3b8411
      });
    }
  }
}
var __vmBox = Object.create(globalThis);
__vmBox.globalThis = __vmBox, function (_0x3bf587, _0x4cfe2d) {
  var _0x4126d6 = _0x214a14,
    _0x27aef4 = [5505, 21507, 19810, 24, 60, 1e3, "globalThis", "__shopkeeper_exports", _0x4126d6(178), _0x4126d6(289), "currentSeason", "isSeasonOpen", _0x4126d6(271), "restockTime", "eventWindow", _0x4126d6(184), _0x4126d6(236), "dailyOrderCandidate", void 0, _0x4126d6(197), 44843, _0x4126d6(300), "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", 0, 22589, _0x4126d6(177), 10852, "undefined", "Symbol", _0x4126d6(168), "R92", null, _0x4126d6(239), "Array", "GI1iiVz1", "@@iterator", _0x4126d6(257), "Rwa", _0x4126d6(221), _0x4126d6(173), "vZq", 25981, _0x4126d6(288), "sGCy", _0x4126d6(240), 24216, 60148, "String", "2qnKmom", "Function", _0x4126d6(186), 1, _0x4126d6(261), "next", 21017, _0x4126d6(285), _0x4126d6(200), _0x4126d6(235), _0x4126d6(179), _0x4126d6(279), "return", _0x4126d6(166), 43995, 12172, "j5X", "Boolean", _0x4126d6(248), "number", "s", "n", "e", "f", _0x4126d6(207), "SjXoX", 46223, 3041, "ygC", 16050, 50857, "tFD4qt", "VoqH", 19397, 800, 22196, _0x4126d6(284), _0x4126d6(242), "6vi", 51005, _0x4126d6(238), 33776, "string", "toString", "slice", 8, 36908, "constructor", "name", "Map", _0x4126d6(263), _0x4126d6(152), _0x4126d6(156), "Arguments", "KR0sFn", "RegExp", _0x4126d6(258), "", "test", _0x4126d6(303), "13cm", 26163, "LJjni", _0x4126d6(170), 44777, _0x4126d6(214), _0x4126d6(275), _0x4126d6(246), "Number", "level", "shopLevels", "sales", "discount", _0x4126d6(296), "purchases", 50, 4, 15, 20, 3, 10, 5, 2, 26857, 4068, 17317, _0x4126d6(237), 100, _0x4126d6(302), _0x4126d6(201), _0x4126d6(163), "Date", "winter", _0x4126d6(273), "summer", "autumn", _0x4126d6(188), "getUTCMonth", 12, "2ibRZz3", "jNtQre", 41896, _0x4126d6(264), "season", "all", 35241, 5278, "aYaN", "FlCpVMup", _0x4126d6(185), "now", _0x4126d6(253), "RqJhS", "Infinity", "isInteger", _0x4126d6(219), 6e4, _0x4126d6(154), _0x4126d6(282), "restockAt", "min", 7589, "ouzbr", 43933, 43966, "aav7", _0x4126d6(204), "^([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})$", _0x4126d6(256), "map", "UTC", 31952, "getUTCFullYear", 51778, 356, _0x4126d6(229), 35228, _0x4126d6(268), 31932, "getUTCMinutes", 46320, "getTime", _0x4126d6(227), 24467, 4497, "repeat", "once", 49776, "parse", "start", "end", _0x4126d6(278), _0x4126d6(292), "annual", "tfpZnAT", "iRaBg", !![], "6mFwBTGw", ![], 55679, "prYVpYBy", _0x4126d6(181), _0x4126d6(211), _0x4126d6(233), 1731, 37752, 45188, 39685, "filter", "sort", _0x4126d6(222), "\0", _0x4126d6(262), 2166136261, _0x4126d6(155), "charCodeAt", 25410, 16777619, 51847, "O3Wz8x", "v7I9Knu", "Fd26NOk", _0x4126d6(260), "^[a-z0-9_.-]+:[a-z0-9_./-]+$", "mzbX", _0x4126d6(294), "set", "id", _0x4126d6(217), "order:", _0x4126d6(287), _0x4126d6(249), 51747, "6RI", _0x4126d6(223), 49877, 5846, "7ff", 12440, 27845, 42502, 4742, 8596],
    _0x51a13d = [26771, 26, 0, 0, 26771, 28, 1, 0, 26771, 27, 2, 0, 52254, 1, 22756, 29, 678, 1, 8, 4, 0, 1, 5, 1, 4, 1, 11, 1, 3, 5433, 26, 27, 28, 26, 64245, 27, 26, 26, 28, 27, 27, 2, 29, 22756, 29, 820, 0, 5, 0, 0, 5433, 26, 28, 26, 26, 28515, 28, 27, 26, 27, 28, 28, 3, 29, 22756, 29, 843, 1, 12, 0, 0, 5433, 26, 28, 28, 28, 32537, 27, 28, 26, 27, 28, 28, 4, 29, 22756, 29, 1037, 1, 6, 1, 0, 1, 12, 5433, 27, 26, 28, 26, 49826, 27, 26, 28, 28, 27, 27, 5, 29, 22756, 29, 1076, 2, 9, 4, 0, 1, 9, 1, 8, 1, 11, 1, 7, 5433, 28, 26, 26, 26, 42463, 28, 26, 26, 27, 27, 26, 6, 29, 22756, 29, 1220, 0, 5, 0, 0, 5433, 26, 27, 27, 27, 21093, 26, 28, 27, 27, 26, 28, 7, 29, 22756, 29, 1243, 2, 26, 0, 0, 5433, 26, 28, 27, 26, 46171, 26, 28, 27, 27, 26, 26, 8, 29, 22756, 29, 2128, 1, 6, 0, 0, 5433, 28, 27, 27, 27, 9887, 27, 27, 27, 28, 28, 27, 9, 29, 22756, 29, 2159, 2, 23, 1, 0, 1, 11, 5433, 26, 27, 28, 26, 24755, 26, 26, 28, 26, 28, 27, 10, 29, 22756, 29, 3288, 2, 16, 1, 0, 1, 12, 5433, 26, 28, 28, 28, 53391, 27, 27, 27, 27, 27, 27, 11, 29, 22756, 29, 3779, 2, 13, 0, 0, 5433, 27, 27, 26, 28, 42221, 27, 26, 28, 26, 28, 28, 12, 29, 22756, 29, 4035, 5, 19, 1, 0, 1, 10, 5433, 27, 26, 26, 26, 41098, 26, 26, 27, 28, 26, 27, 14, 29, 22756, 29, 4297, 2, 16, 1, 0, 1, 14, 5433, 27, 27, 27, 28, 7278, 26, 26, 28, 26, 27, 26, 15, 29, 22756, 29, 4644, 2, 15, 0, 0, 5433, 28, 28, 26, 28, 30037, 27, 28, 26, 26, 27, 27, 16, 29, 22756, 29, 4748, 0, 11, 0, 0, 5433, 26, 27, 26, 27, 14554, 26, 26, 26, 26, 27, 26, 17, 29, 22756, 29, 5016, 1, 11, 1, 0, 1, 17, 5433, 27, 26, 26, 28, 33432, 26, 28, 26, 27, 28, 26, 18, 29, 22756, 29, 5305, 1, 18, 1, 0, 1, 13, 5433, 28, 28, 28, 27, 45711, 26, 28, 27, 26, 26, 26, 19, 29, 22756, 29, 6101, 1, 14, 0, 0, 5433, 27, 26, 28, 27, 31215, 28, 27, 27, 28, 27, 28, 20, 29, 22756, 29, 6591, 2, 20, 1, 0, 1, 6, 5433, 27, 26, 28, 28, 17398, 28, 26, 27, 26, 28, 28, 21, 29, 22756, 29, 7184, 1, 26, 1, 0, 1, 21, 5433, 28, 28, 26, 28, 31197, 26, 26, 28, 27, 26, 26, 22, 29, 22756, 29, 8601, 3, 15, 0, 0, 5433, 26, 28, 26, 26, 12267, 26, 27, 27, 28, 26, 27, 23, 29, 22756, 29, 8873, 2, 20, 1, 0, 1, 2, 5433, 26, 26, 27, 26, 54964, 27, 27, 26, 26, 26, 28, 24, 29, 22756, 29, 9583, 2, 24, 2, 0, 1, 10, 1, 24, 5433, 26, 26, 28, 26, 61179, 26, 28, 27, 27, 26, 28, 25, 29, 26771, 29, 3, 0, 26771, 30, 4, 0, 10025, 31, 28, 29, 30, 27, 26, 27, 27, 28, 26771, 29, 4, 0, 10025, 30, 26, 31, 29, 27, 26, 27, 27, 26, 26771, 29, 5, 0, 10025, 31, 28, 30, 29, 28, 27, 27, 27, 27, 5433, 26, 28, 26, 26, 3552, 27, 26, 27, 26, 27, 27, 13, 31, 2648, 29, 6, 0, 26771, 30, 7, 0, 26771, 31, 8, 0, 26771, 32, 9, 0, 26771, 33, 10, 0, 26771, 34, 11, 0, 26771, 35, 12, 0, 26771, 36, 13, 0, 26771, 37, 14, 0, 26771, 38, 15, 0, 26771, 39, 16, 0, 26771, 40, 17, 0, 24117, 41, 10, 31, 15, 32, 16, 33, 17, 34, 18, 35, 19, 36, 20, 37, 22, 38, 23, 39, 24, 40, 25, 2488, 29, 30, 41, 26771, 29, 18, 0, 43823, 29, 26771, 4, 19, 0, 26771, 3, 20, 0, 52254, 2, 14054, 5, 0, 3825, 6, 5, 1, 0, 5433, 3, 4, 3, 4, 24071, 4, 4, 4, 3, 4, 4, 5, 6, 19161, 5, 735, 14054, 6, 1, 3825, 7, 6, 1, 0, 5433, 3, 3, 4, 3, 38265, 4, 3, 4, 4, 3, 3, 5, 7, 5433, 4, 4, 4, 4, 41103, 4, 4, 4, 4, 4, 4, 6, 5, 19161, 6, 774, 14054, 5, 2, 3825, 7, 5, 1, 0, 5433, 4, 4, 3, 4, 5894, 4, 4, 4, 4, 4, 4, 6, 7, 5433, 4, 4, 4, 4, 15464, 4, 4, 4, 4, 4, 4, 5, 6, 19161, 5, 812, 14054, 6, 3, 3825, 7, 6, 0, 5433, 4, 4, 4, 4, 49282, 4, 4, 4, 4, 4, 4, 5, 7, 43823, 5, 26771, 5, 18, 0, 43823, 5, 52254, 1, 2648, 2, 21, 0, 26771, 3, 22, 0, 48434, 4, 2, 1, 3, 51790, 4, 26771, 2, 18, 0, 43823, 2, 26771, 6, 23, 0, 26771, 4, 24, 0, 26771, 3, 25, 0, 26771, 5, 26, 0, 52254, 2, 26771, 7, 27, 0, 36365, 8, 28, 0, 19352, 0, 0, 3, 4, 3, 7, 9, 30, 8, 29, 3, 3, 5, 884, 5433, 3, 3, 4, 3, 9724, 3, 3, 3, 3, 4, 3, 7, 9, 48322, 7, 950, 26771, 8, 31, 0, 2648, 9, 28, 0, 26771, 10, 32, 0, 1271, 11, 9, 10, 1271, 9, 0, 11, 19352, 0, 0, 4, 3, 3, 8, 10, 34, 9, 33, 3, 3, 5, 936, 5433, 3, 3, 3, 4, 5847, 3, 4, 3, 3, 3, 4, 7, 10, 5433, 3, 4, 4, 3, 15260, 4, 3, 3, 4, 4, 3, 8, 7, 19161, 8, 1008, 26771, 7, 31, 0, 26771, 9, 35, 0, 1271, 10, 0, 9, 19352, 0, 0, 3, 3, 4, 7, 9, 37, 10, 36, 4, 4, 5, 994, 5433, 4, 3, 4, 3, 39429, 4, 4, 3, 4, 3, 4, 8, 9, 48322, 8, 1031, 2648, 7, 33, 0, 26771, 8, 38, 0, 1271, 9, 7, 8, 62400, 8, 7, 9, 1, 0, 43823, 8, 26771, 7, 18, 0, 43823, 7, 52254, 2, 2648, 3, 33, 0, 26771, 4, 39, 0, 1271, 5, 3, 4, 62400, 4, 3, 5, 1, 0, 48322, 4, 1070, 14054, 3, 0, 3825, 4, 3, 1, 0, 43823, 4, 26771, 3, 18, 0, 43823, 3, 26771, 4, 40, 0, 26771, 5, 41, 0, 52254, 3, 14054, 6, 0, 3825, 7, 6, 1, 0, 5433, 5, 4, 4, 4, 12552, 5, 4, 5, 5, 5, 4, 6, 7, 19161, 6, 1134, 14054, 7, 1, 3825, 8, 7, 2, 0, 1, 5433, 4, 4, 4, 5, 16587, 4, 5, 5, 4, 4, 4, 6, 8, 5433, 4, 4, 5, 4, 52932, 4, 4, 4, 4, 4, 5, 7, 6, 19161, 7, 1174, 14054, 6, 2, 3825, 8, 6, 2, 0, 1, 5433, 4, 4, 4, 4, 27039, 5, 4, 5, 5, 4, 4, 7, 8, 5433, 5, 5, 5, 5, 9831, 5, 5, 5, 4, 5, 4, 6, 7, 19161, 6, 1212, 14054, 7, 3, 3825, 8, 7, 0, 5433, 4, 4, 5, 4, 49298, 4, 4, 5, 5, 4, 4, 6, 8, 43823, 6, 26771, 6, 18, 0, 43823, 6, 52254, 1, 2648, 2, 21, 0, 26771, 3, 42, 0, 48434, 4, 2, 1, 3, 51790, 4, 26771, 2, 18, 0, 43823, 2, 26771, 16, 43, 0, 26771, 17, 44, 0, 26771, 18, 45, 0, 26771, 20, 23, 0, 26771, 19, 46, 0, 52254, 3, 26771, 21, 31, 0, 6307, 17, 0, 1283, 17, 18, 17, 17, 22, 17, 21, 17, 17, 19, 48322, 22, 1306, 26771, 21, 31, 0, 5433, 16, 17, 16, 18, 54791, 16, 17, 17, 17, 16, 18, 22, 21, 58300, 1429, 26771, 21, 27, 0, 36365, 23, 28, 0, 19352, 0, 0, 18, 17, 16, 21, 24, 48, 23, 47, 16, 16, 19, 1329, 5433, 17, 16, 18, 18, 4768, 16, 17, 17, 16, 16, 17, 21, 24, 48322, 21, 1376, 2648, 23, 28, 0, 26771, 24, 32, 0, 1271, 25, 23, 24, 1271, 23, 0, 25, 5433, 16, 17, 16, 17, 63461, 17, 17, 16, 16, 16, 16, 21, 23, 5433, 17, 16, 18, 17, 55199, 16, 17, 17, 16, 17, 17, 23, 21, 19161, 23, 1415, 26771, 21, 35, 0, 1271, 24, 0, 21, 5433, 16, 17, 16, 18, 52757, 17, 18, 18, 18, 17, 17, 23, 24, 5433, 16, 16, 16, 18, 27866, 18, 18, 18, 18, 16, 16, 22, 23, 5433, 17, 16, 17, 17, 28672, 17, 17, 17, 16, 17, 17, 4, 22, 26771, 21, 31, 0, 19352, 0, 0, 17, 16, 16, 21, 22, 50, 4, 49, 17, 17, 19, 1462, 48322, 22, 2122, 26771, 5, 18, 0, 26771, 6, 18, 0, 26771, 7, 18, 0, 26771, 8, 18, 0, 36227, 21, 0, 5433, 17, 17, 18, 16, 21105, 17, 17, 17, 16, 17, 17, 9, 21, 26771, 21, 23, 0, 9325, 17, 17, 22, 17, 17, 21, 16, 18, 5433, 18, 16, 17, 17, 41693, 18, 16, 17, 16, 16, 17, 10, 22, 26771, 21, 51, 0, 9325, 18, 17, 22, 16, 18, 21, 16, 16, 5433, 16, 16, 18, 17, 52547, 18, 18, 16, 16, 18, 17, 11, 22, 20570, 1919, 12, 13, 2116, 9072, 1872, 0, 26771, 21, 52, 0, 1271, 22, 4, 21, 62400, 21, 4, 22, 1, 0, 5433, 18, 18, 18, 18, 28131, 17, 17, 17, 16, 17, 18, 4, 21, 26771, 21, 53, 0, 1271, 22, 4, 21, 5433, 17, 18, 18, 16, 27675, 17, 18, 18, 17, 17, 16, 7, 22, 26771, 21, 23, 0, 64749, 22, 54, 21, 18, 1, 17, 0, 17, 18, 48322, 22, 1705, 2648, 21, 55, 0, 3825, 22, 21, 1, 4, 3397, 17, 18, 18, 16, 18, 17, 17, 22, 21, 4, 18, 48322, 21, 1676, 26771, 21, 18, 0, 23336, 5433, 16, 16, 17, 18, 26802, 18, 16, 17, 17, 17, 17, 13, 21, 59950, 12, 2118, 23336, 58300, 1919, 26771, 21, 51, 0, 9325, 17, 17, 22, 17, 17, 21, 18, 18, 5433, 16, 18, 18, 17, 47766, 17, 17, 17, 17, 17, 17, 10, 22, 58300, 1869, 26771, 21, 52, 0, 1271, 22, 7, 21, 62400, 21, 7, 22, 1, 4, 5433, 16, 18, 17, 16, 52740, 18, 18, 18, 17, 18, 18, 5, 21, 26771, 21, 56, 0, 1271, 22, 5, 21, 5433, 18, 18, 16, 17, 39721, 18, 18, 17, 16, 18, 17, 10, 22, 9325, 18, 16, 21, 18, 16, 10, 18, 18, 5433, 17, 17, 16, 18, 14333, 17, 16, 18, 18, 17, 17, 22, 21, 48322, 22, 1837, 26771, 21, 57, 0, 1271, 23, 9, 21, 26771, 21, 58, 0, 1271, 24, 5, 21, 62400, 21, 9, 23, 1, 24, 26771, 21, 59, 0, 1271, 23, 9, 21, 3397, 17, 17, 16, 17, 16, 17, 16, 23, 21, 1, 18, 5433, 16, 18, 17, 17, 16990, 16, 17, 18, 18, 18, 18, 22, 21, 48322, 22, 1869, 26771, 21, 23, 0, 9325, 17, 17, 22, 16, 17, 21, 16, 17, 5433, 16, 18, 18, 17, 18240, 16, 18, 17, 16, 18, 18, 10, 22, 58300, 1705, 23336, 58300, 1913, 26771, 21, 23, 0, 9325, 18, 18, 22, 16, 18, 21, 16, 18, 5433, 16, 16, 18, 16, 34885, 18, 18, 16, 17, 16, 17, 11, 22, 5433, 17, 18, 16, 16, 47526, 18, 17, 17, 18, 18, 18, 6, 0, 23336, 59950, 12, 2120, 58300, 1919, 20570, 2103, 14, 15, 2110, 9325, 17, 16, 21, 17, 17, 10, 17, 17, 5433, 17, 17, 17, 17, 19067, 16, 17, 17, 16, 17, 17, 22, 21, 48322, 22, 1991, 26771, 21, 31, 0, 26771, 23, 60, 0, 1271, 24, 4, 23, 19352, 0, 0, 16, 18, 16, 21, 23, 61, 24, 29, 16, 16, 19, 1977, 5433, 16, 16, 16, 17, 4512, 17, 18, 17, 17, 17, 18, 22, 23, 5433, 16, 16, 17, 16, 20448, 16, 16, 16, 16, 16, 16, 21, 22, 48322, 21, 2070, 26771, 22, 60, 0, 1271, 23, 4, 22, 62400, 22, 4, 23, 0, 5433, 18, 16, 16, 16, 25938, 18, 16, 16, 18, 16, 18, 8, 22, 2648, 22, 55, 0, 3825, 23, 22, 1, 8, 3397, 17, 18, 18, 18, 16, 18, 16, 23, 22, 8, 18, 5433, 16, 16, 16, 16, 64644, 18, 16, 16, 16, 17, 17, 21, 22, 48322, 21, 2097, 26771, 21, 18, 0, 5433, 18, 17, 16, 16, 56383, 18, 18, 18, 16, 17, 18, 15, 21, 59950, 14, 2112, 23336, 58300, 2103, 23336, 59950, 14, 2114, 58300, 2103, 48322, 11, 2108, 51790, 6, 53266, 14, 51790, 15, 43823, 15, 53266, 12, 51790, 13, 43823, 13, 43823, 9, 26771, 21, 18, 0, 43823, 21, 52254, 2, 2648, 3, 33, 0, 26771, 4, 39, 0, 1271, 5, 3, 4, 62400, 4, 3, 5, 1, 0, 48322, 4, 2153, 43823, 0, 26771, 3, 18, 0, 43823, 3, 26771, 13, 23, 0, 26771, 11, 62, 0, 26771, 12, 63, 0, 26771, 10, 64, 0, 52254, 3, 26771, 14, 27, 0, 36365, 15, 28, 0, 19352, 0, 0, 10, 11, 10, 14, 16, 66, 15, 65, 10, 10, 12, 2200, 5433, 10, 10, 11, 10, 49928, 11, 11, 11, 10, 11, 10, 14, 16, 48322, 14, 2247, 2648, 15, 28, 0, 26771, 16, 32, 0, 1271, 17, 15, 16, 1271, 15, 0, 17, 5433, 11, 10, 11, 11, 44683, 11, 11, 10, 11, 10, 11, 14, 15, 5433, 10, 10, 11, 11, 11251, 11, 11, 11, 10, 10, 10, 15, 14, 19161, 15, 2286, 26771, 14, 35, 0, 1271, 16, 0, 14, 5433, 10, 11, 11, 10, 29906, 10, 11, 10, 10, 11, 10, 15, 16, 5433, 11, 10, 10, 11, 27520, 10, 10, 10, 11, 10, 10, 4, 15, 9325, 10, 10, 14, 10, 11, 4, 10, 10, 48322, 14, 2654, 2648, 14, 33, 0, 26771, 15, 39, 0, 1271, 16, 14, 15, 62400, 15, 14, 16, 1, 0, 5433, 10, 10, 11, 10, 40632, 10, 10, 11, 11, 11, 10, 14, 15, 19161, 14, 2383, 14054, 15, 0, 3825, 16, 15, 1, 0, 5433, 11, 10, 11, 11, 11128, 11, 11, 11, 10, 10, 11, 4, 16, 5433, 11, 11, 10, 10, 24760, 10, 10, 11, 10, 10, 10, 14, 4, 5433, 10, 11, 10, 11, 37710, 11, 11, 11, 11, 10, 11, 15, 14, 19161, 15, 2505, 5433, 11, 10, 10, 10, 50150, 11, 11, 10, 10, 11, 11, 14, 1, 48322, 14, 2431, 5433, 11, 11, 10, 10, 47295, 11, 11, 10, 11, 11, 11, 14, 0, 5433, 11, 10, 10, 11, 24365, 11, 11, 11, 11, 10, 10, 16, 14, 48322, 16, 2491, 26771, 14, 67, 0, 26771, 17, 59, 0, 1271, 18, 0, 17, 48941, 17, 18, 6307, 11, 17, 2477, 10, 11, 10, 10, 18, 11, 14, 10, 11, 12, 5433, 10, 11, 11, 10, 48161, 10, 11, 10, 10, 10, 11, 16, 18, 5433, 10, 10, 10, 10, 14108, 11, 10, 10, 11, 11, 11, 15, 16, 48322, 15, 2639, 5433, 11, 11, 10, 11, 6770, 10, 11, 11, 10, 10, 10, 14, 4, 48322, 14, 2553, 5433, 11, 11, 10, 10, 20197, 10, 11, 10, 11, 11, 10, 0, 4, 5433, 10, 10, 10, 10, 49763, 10, 11, 11, 10, 10, 10, 14, 0, 26771, 14, 23, 0, 5433, 11, 10, 10, 10, 54637, 11, 10, 10, 11, 11, 10, 5, 14, 22756, 14, 2795, 0, 3, 0, 0, 5433, 10, 11, 10, 10, 8411, 11, 10, 11, 10, 11, 11, 6, 14, 26771, 14, 68, 0, 26771, 15, 69, 0, 22756, 16, 2803, 0, 14, 2, 0, 1, 5, 1, 0, 26771, 17, 70, 0, 22756, 18, 2981, 1, 4, 0, 0, 26771, 19, 71, 0, 24117, 20, 4, 14, 6, 15, 16, 17, 18, 19, 6, 43823, 20, 2648, 14, 21, 0, 26771, 15, 72, 0, 48434, 16, 14, 1, 15, 51790, 16, 26771, 7, 18, 0, 26771, 14, 23, 0, 9325, 10, 11, 15, 10, 10, 14, 10, 10, 5433, 10, 11, 10, 10, 13583, 11, 11, 10, 10, 10, 10, 8, 15, 26771, 14, 51, 0, 9325, 10, 10, 15, 10, 11, 14, 11, 10, 5433, 10, 11, 10, 11, 2625, 10, 10, 11, 10, 11, 10, 9, 15, 26771, 14, 68, 0, 22756, 15, 2991, 0, 6, 2, 0, 1, 4, 1, 0, 26771, 16, 69, 0, 22756, 17, 3022, 0, 9, 2, 0, 1, 4, 1, 8, 26771, 18, 70, 0, 22756, 19, 3085, 1, 8, 2, 0, 1, 9, 1, 7, 26771, 20, 71, 0, 22756, 21, 3124, 0, 14, 4, 0, 1, 8, 1, 4, 1, 9, 1, 7, 24117, 22, 4, 14, 15, 16, 17, 18, 19, 20, 21, 43823, 22, 26771, 14, 18, 0, 43823, 14, 52254, 1, 26771, 2, 18, 0, 43823, 2, 26771, 3, 73, 0, 26771, 2, 74, 0, 26771, 4, 75, 0, 52254, 1, 14054, 5, 0, 14054, 6, 1, 26771, 7, 59, 0, 1271, 8, 6, 7, 60559, 4, 2, 8, 4, 5, 4, 4, 2, 2, 2, 2, 4, 2, 6, 48322, 6, 2887, 26771, 5, 56, 0, 26771, 6, 23, 0, 9325, 4, 2, 7, 2, 3, 6, 2, 2, 24117, 6, 1, 5, 7, 5433, 4, 2, 3, 2, 17952, 2, 2, 4, 4, 2, 4, 5, 6, 58300, 2973, 26771, 6, 56, 0, 26771, 7, 51, 0, 9325, 2, 4, 8, 2, 2, 7, 2, 2, 26771, 7, 58, 0, 14054, 9, 1, 14054, 10, 0, 5433, 3, 3, 3, 4, 39351, 2, 3, 2, 2, 2, 3, 11, 10, 26771, 12, 51, 0, 20416, 3, 2, 12, 4, 10, 4, 3, 3, 13, 4, 3, 4, 8833, 0, 13, 1271, 10, 9, 11, 24117, 9, 2, 6, 8, 7, 10, 5433, 2, 4, 4, 3, 51797, 2, 4, 3, 2, 2, 3, 5, 9, 43823, 5, 26771, 5, 18, 0, 43823, 5, 52254, 2, 51790, 0, 26771, 3, 18, 0, 43823, 3, 52254, 1, 14054, 2, 0, 26771, 3, 52, 0, 1271, 4, 2, 3, 14054, 3, 1, 62400, 5, 2, 4, 1, 3, 8833, 0, 5, 26771, 2, 18, 0, 43823, 2, 26771, 4, 76, 0, 26771, 5, 77, 0, 26771, 3, 78, 0, 52254, 1, 14054, 6, 0, 26771, 7, 53, 0, 1271, 8, 6, 7, 62400, 7, 6, 8, 0, 5433, 5, 4, 5, 4, 6922, 4, 4, 4, 3, 4, 4, 2, 7, 26771, 6, 56, 0, 1271, 7, 2, 6, 8833, 1, 7, 43823, 2, 26771, 6, 18, 0, 43823, 6, 26771, 5, 79, 0, 26771, 4, 80, 0, 26771, 3, 81, 0, 52254, 2, 26771, 6, 23, 0, 9325, 4, 5, 7, 4, 4, 6, 4, 4, 8833, 0, 7, 8833, 1, 0, 26771, 6, 18, 0, 43823, 6, 26771, 7, 82, 0, 26771, 5, 83, 0, 26771, 4, 84, 0, 26771, 6, 85, 0, 26771, 8, 23, 0, 52254, 1, 20570, 3267, 2, 3, 3280, 14054, 9, 0, 5433, 6, 5, 4, 5, 62339, 4, 4, 4, 6, 6, 6, 10, 9, 19161, 10, 3214, 26771, 9, 31, 0, 14054, 11, 1, 26771, 12, 60, 0, 1271, 13, 11, 12, 6307, 6, 13, 3200, 4, 5, 4, 5, 11, 4, 9, 5, 5, 7, 5433, 6, 5, 4, 6, 33101, 4, 5, 4, 6, 5, 6, 10, 11, 5433, 6, 5, 4, 5, 44952, 6, 5, 5, 6, 6, 6, 9, 10, 19161, 9, 3261, 14054, 10, 1, 26771, 11, 60, 0, 1271, 12, 10, 11, 62400, 11, 10, 12, 0, 5433, 6, 5, 5, 6, 35835, 6, 5, 5, 6, 4, 6, 9, 11, 23336, 59950, 2, 3282, 58300, 3267, 14054, 9, 2, 48322, 9, 3278, 14054, 9, 3, 51790, 9, 53266, 2, 51790, 3, 26771, 9, 18, 0, 43823, 9, 26771, 7, 86, 0, 26771, 9, 23, 0, 26771, 8, 87, 0, 26771, 5, 88, 0, 26771, 6, 89, 0, 52254, 3, 48322, 0, 3773, 26771, 10, 90, 0, 48941, 11, 0, 6307, 5, 11, 3334, 5, 7, 6, 6, 12, 6, 10, 6, 6, 8, 48322, 12, 3348, 14054, 10, 0, 3825, 11, 10, 2, 0, 1, 43823, 11, 24117, 10, 0, 26771, 11, 91, 0, 1271, 12, 10, 11, 26771, 10, 52, 0, 1271, 11, 12, 10, 62400, 10, 12, 11, 1, 0, 26771, 11, 92, 0, 1271, 12, 10, 11, 26771, 11, 93, 0, 26771, 13, 51, 0, 45127, 7, 13, 6, 7, 7, 6, 6, 9, 3400, 14, 62400, 13, 10, 12, 2, 11, 14, 5433, 6, 7, 5, 6, 61100, 6, 6, 6, 6, 5, 5, 4, 13, 26771, 10, 55, 0, 64749, 11, 94, 10, 5, 4, 6, 0, 5, 7, 5433, 5, 5, 6, 5, 16219, 6, 5, 6, 6, 7, 6, 10, 11, 48322, 10, 3474, 26771, 11, 95, 0, 1271, 12, 0, 11, 5433, 7, 6, 7, 6, 11938, 5, 7, 7, 6, 5, 5, 10, 12, 5433, 7, 5, 7, 5, 27337, 7, 5, 5, 7, 7, 6, 11, 10, 48322, 11, 3535, 26771, 10, 95, 0, 1271, 12, 0, 10, 26771, 10, 96, 0, 1271, 13, 12, 10, 5433, 6, 6, 7, 6, 1264, 7, 7, 7, 6, 5, 7, 4, 13, 5433, 6, 6, 5, 6, 60279, 5, 6, 5, 7, 5, 6, 11, 4, 26771, 10, 97, 0, 64749, 11, 98, 10, 6, 4, 5, 0, 6, 6, 5433, 6, 5, 7, 5, 58517, 5, 5, 5, 5, 5, 5, 10, 11, 19161, 10, 3594, 26771, 11, 99, 0, 64749, 12, 100, 11, 7, 4, 6, 0, 7, 5, 5433, 7, 5, 6, 6, 29768, 7, 5, 7, 6, 7, 5, 10, 12, 48322, 10, 3631, 2648, 10, 33, 0, 26771, 11, 38, 0, 1271, 12, 10, 11, 62400, 11, 10, 12, 1, 0, 5433, 7, 6, 6, 5, 51525, 5, 7, 7, 6, 5, 5, 10, 11, 58300, 3771, 26771, 11, 101, 0, 64749, 12, 102, 11, 6, 4, 7, 0, 6, 7, 5433, 6, 6, 6, 7, 48954, 6, 6, 6, 7, 6, 7, 11, 12, 19161, 11, 3708, 2648, 12, 103, 0, 26771, 13, 104, 0, 26771, 14, 105, 0, 48434, 15, 12, 2, 13, 14, 26771, 12, 106, 0, 1271, 13, 15, 12, 62400, 12, 15, 13, 1, 4, 5433, 7, 7, 6, 7, 22805, 5, 5, 6, 5, 5, 6, 11, 12, 48322, 11, 3736, 14054, 11, 0, 3825, 12, 11, 2, 0, 1, 5433, 6, 7, 7, 5, 22427, 7, 5, 5, 6, 7, 6, 11, 12, 58300, 3757, 26771, 12, 23, 0, 45700, 13, 12, 5433, 5, 5, 5, 5, 52503, 5, 5, 5, 7, 7, 7, 11, 13, 5433, 5, 5, 7, 5, 43322, 7, 7, 7, 7, 5, 5, 10, 11, 43823, 10, 26771, 10, 18, 0, 43823, 10, 26771, 7, 107, 0, 26771, 9, 23, 0, 26771, 6, 108, 0, 26771, 8, 109, 0, 52254, 3, 26771, 10, 31, 0, 6307, 7, 1, 3815, 6, 7, 7, 7, 11, 7, 10, 7, 7, 8, 5433, 6, 7, 6, 6, 55925, 6, 7, 7, 6, 7, 6, 10, 11, 19161, 10, 3864, 26771, 11, 59, 0, 1271, 12, 0, 11, 21916, 6, 7, 12, 7, 7, 7, 11, 7, 1, 5433, 7, 6, 7, 6, 50255, 6, 7, 7, 7, 6, 6, 10, 11, 5433, 7, 7, 7, 7, 38337, 7, 7, 7, 7, 7, 7, 11, 10, 48322, 11, 3917, 26771, 10, 59, 0, 1271, 12, 0, 10, 5433, 7, 6, 6, 6, 47029, 7, 7, 7, 7, 7, 7, 1, 12, 5433, 6, 7, 6, 7, 35979, 6, 6, 7, 6, 6, 7, 11, 1, 26771, 10, 23, 0, 5433, 7, 7, 7, 6, 43508, 7, 7, 7, 7, 6, 7, 4, 10, 2648, 10, 33, 0, 3825, 11, 10, 1, 1, 5433, 7, 6, 7, 6, 1208, 7, 6, 7, 6, 7, 6, 5, 11, 23314, 3969, 4, 1, 10, 8, 6, 9, 7, 3969, 7, 48322, 10, 4027, 1271, 10, 0, 4, 2488, 5, 4, 10, 5433, 6, 7, 6, 7, 16399, 7, 7, 7, 6, 7, 7, 10, 4, 26771, 10, 51, 0, 20416, 6, 7, 10, 6, 4, 6, 7, 6, 11, 6, 7, 6, 5433, 6, 6, 7, 6, 25583, 6, 7, 7, 7, 7, 7, 4, 11, 58300, 3958, 43823, 5, 26771, 10, 18, 0, 43823, 10, 26771, 14, 110, 0, 26771, 15, 111, 0, 52254, 6, 2648, 16, 33, 0, 26771, 17, 39, 0, 1271, 18, 16, 17, 62400, 17, 16, 18, 1, 1, 9325, 14, 14, 16, 14, 14, 17, 15, 14, 48322, 16, 4077, 43823, 4, 5433, 14, 14, 14, 14, 28189, 15, 14, 14, 15, 14, 14, 7, 4, 14054, 16, 0, 3825, 17, 16, 1, 1, 5433, 14, 15, 15, 14, 53207, 15, 14, 15, 15, 15, 14, 8, 17, 26771, 9, 18, 0, 20570, 4272, 11, 12, 4287, 9072, 4252, 10, 26771, 16, 68, 0, 1271, 17, 8, 16, 62400, 16, 8, 17, 0, 26771, 16, 69, 0, 1271, 17, 8, 16, 62400, 16, 8, 17, 0, 5433, 15, 15, 15, 14, 24531, 15, 15, 15, 14, 14, 14, 9, 16, 26771, 16, 56, 0, 1271, 17, 9, 16, 9325, 15, 15, 16, 14, 15, 17, 15, 15, 48322, 16, 4249, 26771, 16, 58, 0, 1271, 17, 9, 16, 5433, 15, 14, 15, 15, 43429, 14, 15, 14, 15, 15, 14, 13, 17, 1271, 16, 13, 2, 60559, 15, 15, 16, 14, 0, 15, 15, 15, 14, 14, 15, 15, 15, 17, 48322, 17, 4247, 1271, 16, 13, 3, 5433, 15, 15, 14, 15, 62772, 15, 15, 15, 14, 15, 15, 7, 16, 58300, 4138, 23336, 58300, 4266, 26771, 16, 70, 0, 1271, 17, 8, 16, 62400, 16, 8, 17, 1, 10, 23336, 59950, 11, 4289, 58300, 4272, 26771, 16, 71, 0, 1271, 17, 8, 16, 62400, 16, 8, 17, 0, 53266, 11, 51790, 12, 43823, 7, 26771, 16, 18, 0, 43823, 16, 26771, 6, 112, 0, 26771, 5, 113, 0, 52254, 3, 2648, 7, 114, 0, 26771, 8, 115, 0, 1271, 9, 7, 8, 26771, 8, 23, 0, 2648, 10, 116, 0, 3825, 11, 10, 1, 0, 5433, 6, 6, 5, 5, 9114, 6, 5, 6, 6, 6, 6, 10, 11, 19161, 10, 4367, 26771, 11, 23, 0, 5433, 5, 6, 5, 6, 35068, 5, 6, 5, 5, 5, 5, 10, 11, 62400, 11, 7, 9, 2, 8, 10, 5433, 5, 5, 5, 5, 53416, 6, 5, 6, 5, 6, 5, 4, 11, 48322, 1, 4472, 26771, 7, 117, 0, 14054, 8, 0, 26771, 9, 118, 0, 1271, 10, 1, 9, 26771, 9, 119, 0, 26771, 11, 117, 0, 26771, 12, 51, 0, 3825, 13, 8, 5, 4, 10, 9, 11, 12, 26771, 8, 120, 0, 14054, 9, 0, 26771, 10, 121, 0, 1271, 11, 1, 10, 26771, 10, 122, 0, 26771, 12, 120, 0, 26771, 14, 23, 0, 3825, 15, 9, 5, 4, 11, 10, 12, 14, 24117, 9, 2, 7, 13, 8, 15, 43823, 9, 26771, 7, 123, 0, 60559, 6, 5, 7, 5, 4, 6, 6, 5, 5, 5, 5, 6, 6, 8, 48322, 8, 4519, 26771, 7, 117, 0, 26771, 8, 124, 0, 26771, 9, 120, 0, 26771, 10, 125, 0, 24117, 11, 2, 7, 8, 9, 10, 43823, 11, 26771, 7, 126, 0, 60559, 5, 5, 7, 5, 4, 6, 6, 5, 5, 6, 5, 6, 6, 8, 48322, 8, 4566, 26771, 7, 117, 0, 26771, 8, 127, 0, 26771, 9, 120, 0, 26771, 10, 128, 0, 24117, 11, 2, 7, 8, 9, 10, 43823, 11, 26771, 7, 129, 0, 60559, 5, 5, 7, 6, 4, 5, 5, 5, 6, 6, 5, 5, 5, 8, 48322, 8, 4613, 26771, 7, 117, 0, 26771, 8, 130, 0, 26771, 9, 120, 0, 26771, 10, 129, 0, 24117, 11, 2, 7, 8, 9, 10, 43823, 11, 26771, 7, 117, 0, 26771, 8, 51, 0, 26771, 9, 120, 0, 26771, 10, 23, 0, 24117, 11, 2, 7, 8, 9, 10, 43823, 11, 26771, 7, 18, 0, 43823, 7, 26771, 6, 131, 0, 26771, 4, 132, 0, 26771, 5, 133, 0, 52254, 3, 2648, 7, 114, 0, 26771, 8, 115, 0, 1271, 9, 7, 8, 26771, 8, 51, 0, 2648, 10, 114, 0, 26771, 11, 134, 0, 1271, 12, 10, 11, 26771, 11, 135, 0, 46405, 1, 136, 4, 13, 4, 0, 11, 6, 6, 10025, 11, 4, 0, 13, 4, 5, 4, 6, 6, 26771, 13, 135, 0, 23330, 13, 4, 6, 5, 6, 4, 11, 6, 6, 14, 6, 6, 62400, 11, 10, 12, 1, 14, 62400, 10, 7, 9, 2, 8, 11, 43823, 10, 26771, 7, 18, 0, 43823, 7, 26771, 4, 137, 0, 26771, 3, 138, 0, 52254, 1, 26771, 5, 59, 0, 1271, 6, 0, 5, 26771, 5, 23, 0, 21916, 3, 4, 5, 3, 4, 3, 7, 3, 6, 5433, 4, 4, 4, 3, 13130, 3, 3, 3, 4, 3, 3, 5, 7, 48322, 5, 4835, 26771, 6, 23, 0, 1271, 7, 0, 6, 2648, 6, 27, 0, 3397, 3, 4, 3, 4, 3, 4, 3, 7, 8, 6, 4, 5433, 4, 4, 3, 3, 12690, 4, 4, 4, 3, 3, 4, 5, 8, 48322, 5, 4862, 26771, 5, 23, 0, 1271, 6, 0, 5, 5433, 4, 3, 3, 3, 15087, 4, 4, 3, 4, 3, 3, 5, 6, 58300, 4884, 2648, 6, 139, 0, 48434, 7, 6, 0, 5433, 4, 4, 4, 4, 959, 4, 4, 4, 4, 4, 4, 5, 7, 5433, 4, 4, 3, 4, 54655, 4, 4, 4, 4, 4, 4, 2, 5, 26771, 5, 140, 0, 26771, 6, 141, 0, 26771, 7, 142, 0, 26771, 8, 143, 0, 36227, 9, 4, 5, 6, 7, 8, 2648, 5, 114, 0, 26771, 6, 144, 0, 1271, 7, 5, 6, 26771, 6, 145, 0, 1271, 8, 2, 6, 62400, 6, 2, 8, 0, 26771, 8, 51, 0, 20416, 4, 4, 8, 4, 6, 3, 4, 4, 10, 3, 3, 4, 26771, 6, 146, 0, 45497, 3, 3, 3, 8, 4, 147, 0, 6, 10, 4, 1, 3, 3, 26771, 6, 127, 0, 23330, 6, 4, 4, 3, 3, 3, 8, 3, 4, 10, 4, 4, 62400, 6, 5, 7, 1, 10, 1271, 5, 9, 6, 43823, 5, 26771, 5, 18, 0, 43823, 5, 26771, 4, 148, 0, 26771, 6, 149, 0, 26771, 5, 150, 0, 52254, 2, 26771, 7, 59, 0, 1271, 8, 1, 7, 26771, 7, 51, 0, 21916, 6, 5, 7, 5, 5, 5, 9, 6, 8, 5433, 5, 6, 4, 5, 59031, 6, 4, 6, 5, 6, 5, 7, 9, 48322, 7, 5107, 26771, 8, 51, 0, 1271, 9, 1, 8, 2648, 8, 27, 0, 3397, 6, 4, 6, 4, 5, 6, 6, 9, 10, 8, 6, 5433, 5, 4, 6, 6, 15414, 5, 4, 6, 6, 5, 4, 7, 10, 48322, 7, 5134, 26771, 7, 51, 0, 1271, 8, 1, 7, 5433, 5, 6, 4, 6, 2235, 4, 6, 6, 4, 5, 5, 7, 8, 58300, 5156, 2648, 8, 139, 0, 48434, 9, 8, 0, 5433, 4, 6, 5, 6, 20766, 4, 6, 4, 5, 4, 6, 7, 9, 5433, 4, 4, 4, 5, 54005, 4, 4, 4, 6, 4, 4, 3, 7, 26771, 7, 151, 0, 1271, 8, 0, 7, 9325, 6, 6, 7, 4, 4, 8, 4, 4, 5433, 5, 5, 6, 6, 15937, 4, 4, 4, 5, 4, 4, 8, 7, 19161, 8, 5240, 26771, 7, 151, 0, 1271, 9, 0, 7, 26771, 7, 152, 0, 64749, 10, 153, 9, 5, 7, 6, 0, 5, 6, 5433, 6, 6, 5, 4, 37765, 6, 4, 5, 6, 6, 5, 8, 10, 5433, 5, 6, 5, 5, 20633, 5, 5, 5, 5, 5, 4, 7, 8, 19161, 7, 5297, 26771, 8, 151, 0, 1271, 9, 0, 8, 14054, 8, 0, 3825, 10, 8, 1, 3, 64749, 8, 154, 9, 5, 10, 5, 0, 5, 5, 5433, 5, 5, 6, 5, 57525, 5, 4, 5, 4, 5, 5, 7, 8, 43823, 7, 26771, 7, 18, 0, 43823, 7, 26771, 9, 155, 0, 26771, 7, 156, 0, 26771, 8, 157, 0, 52254, 2, 26771, 10, 59, 0, 1271, 11, 1, 10, 26771, 10, 51, 0, 21916, 8, 9, 10, 9, 7, 9, 12, 7, 11, 5433, 8, 8, 7, 7, 53968, 7, 7, 7, 8, 7, 9, 10, 12, 48322, 10, 5396, 26771, 11, 51, 0, 1271, 12, 1, 11, 2648, 11, 27, 0, 3397, 8, 9, 7, 7, 8, 7, 7, 12, 13, 11, 7, 5433, 7, 8, 8, 7, 33069, 7, 9, 7, 8, 8, 8, 10, 13, 48322, 10, 5423, 26771, 10, 51, 0, 1271, 11, 1, 10, 5433, 8, 7, 7, 8, 57745, 9, 8, 8, 8, 9, 8, 10, 11, 58300, 5454, 2648, 11, 139, 0, 26771, 12, 158, 0, 1271, 13, 11, 12, 62400, 12, 11, 13, 0, 5433, 8, 8, 8, 8, 3859, 8, 8, 8, 7, 8, 8, 10, 12, 5433, 7, 9, 9, 7, 64471, 9, 8, 8, 7, 9, 9, 3, 10, 26771, 10, 59, 0, 1271, 11, 1, 10, 26771, 10, 130, 0, 21916, 8, 9, 10, 9, 9, 8, 12, 9, 11, 5433, 7, 7, 9, 8, 44167, 7, 9, 9, 7, 7, 8, 10, 12, 48322, 10, 5545, 26771, 11, 130, 0, 1271, 12, 1, 11, 2648, 11, 27, 0, 3397, 9, 7, 9, 7, 9, 8, 8, 12, 13, 11, 9, 5433, 9, 9, 9, 7, 40717, 7, 9, 9, 8, 7, 8, 10, 13, 48322, 10, 5572, 26771, 10, 130, 0, 1271, 11, 1, 10, 5433, 8, 9, 7, 9, 36781, 7, 8, 9, 7, 9, 9, 10, 11, 58300, 5586, 5433, 8, 8, 9, 8, 37159, 8, 8, 8, 8, 8, 8, 10, 0, 5433, 9, 7, 9, 7, 41607, 7, 7, 7, 9, 8, 8, 4, 10, 2648, 10, 116, 0, 26771, 11, 159, 0, 1271, 12, 4, 11, 3825, 11, 10, 1, 12, 5433, 8, 9, 7, 9, 10109, 9, 8, 7, 8, 9, 8, 10, 11, 19161, 10, 5652, 26771, 11, 23, 0, 5433, 8, 8, 9, 7, 8895, 7, 7, 7, 7, 8, 8, 10, 11, 5433, 9, 9, 7, 7, 683, 9, 9, 9, 9, 9, 9, 5, 10, 26771, 10, 23, 0, 16455, 10, 5, 9, 7, 160, 11, 9, 7, 0, 48322, 11, 5689, 2648, 10, 161, 0, 43823, 10, 2648, 10, 116, 0, 26771, 11, 162, 0, 1271, 12, 10, 11, 26771, 11, 163, 0, 1271, 13, 4, 11, 62400, 11, 10, 12, 1, 13, 5433, 9, 7, 8, 7, 16545, 9, 7, 7, 7, 8, 7, 10, 11, 48322, 10, 5768, 26771, 11, 163, 0, 1271, 12, 4, 11, 26771, 11, 23, 0, 21916, 8, 7, 11, 8, 8, 9, 13, 9, 12, 5433, 8, 8, 9, 8, 15282, 9, 8, 8, 9, 8, 7, 10, 13, 48322, 10, 5809, 26771, 10, 163, 0, 1271, 11, 4, 10, 26771, 10, 164, 0, 10025, 12, 7, 11, 10, 9, 9, 9, 9, 9, 5433, 8, 8, 8, 9, 59391, 8, 8, 9, 8, 8, 8, 10, 12, 58300, 5826, 14054, 11, 0, 5433, 7, 9, 8, 9, 4130, 7, 9, 9, 7, 7, 7, 10, 11, 5433, 9, 8, 7, 8, 15680, 7, 8, 8, 7, 8, 8, 6, 10, 2648, 10, 116, 0, 26771, 11, 162, 0, 1271, 12, 10, 11, 26771, 11, 165, 0, 1271, 13, 0, 11, 62400, 11, 10, 12, 1, 13, 9325, 7, 7, 10, 8, 7, 11, 8, 8, 5433, 8, 7, 9, 7, 56105, 7, 7, 7, 7, 7, 8, 11, 10, 19161, 11, 5941, 2648, 10, 116, 0, 26771, 12, 166, 0, 1271, 13, 10, 12, 26771, 12, 167, 0, 1271, 14, 0, 12, 62400, 12, 10, 13, 1, 14, 9325, 8, 7, 10, 9, 7, 12, 9, 9, 5433, 7, 7, 9, 9, 8692, 9, 7, 9, 8, 9, 9, 11, 10, 5433, 7, 9, 9, 7, 32069, 9, 7, 8, 9, 9, 7, 10, 11, 19161, 10, 5995, 26771, 11, 167, 0, 1271, 12, 0, 11, 60559, 9, 8, 12, 7, 3, 9, 8, 8, 8, 8, 9, 9, 7, 11, 5433, 8, 8, 8, 9, 62429, 8, 9, 8, 8, 8, 8, 10, 11, 48322, 10, 6027, 26771, 10, 165, 0, 2488, 0, 10, 5, 26771, 10, 167, 0, 20416, 7, 9, 6, 9, 3, 9, 7, 7, 11, 9, 7, 7, 2488, 0, 10, 11, 26771, 10, 165, 0, 2648, 11, 114, 0, 26771, 12, 115, 0, 1271, 13, 11, 12, 26771, 12, 23, 0, 2648, 14, 114, 0, 26771, 15, 168, 0, 1271, 16, 14, 15, 26771, 15, 165, 0, 1271, 17, 0, 15, 62400, 15, 14, 16, 2, 5, 17, 62400, 14, 11, 13, 2, 12, 15, 2488, 0, 10, 14, 26771, 10, 165, 0, 1271, 11, 0, 10, 43823, 11, 26771, 10, 18, 0, 43823, 10, 26771, 6, 169, 0, 26771, 5, 170, 0, 26771, 7, 171, 0, 26771, 8, 23, 0, 52254, 2, 26771, 9, 59, 0, 1271, 10, 1, 9, 26771, 9, 51, 0, 21916, 5, 5, 9, 6, 5, 5, 11, 5, 10, 5433, 6, 5, 5, 5, 8768, 6, 6, 5, 6, 6, 5, 9, 11, 48322, 9, 6196, 26771, 10, 51, 0, 1271, 11, 1, 10, 2648, 10, 27, 0, 3397, 6, 6, 5, 5, 6, 5, 5, 11, 12, 10, 5, 5433, 5, 5, 6, 6, 47649, 6, 6, 6, 5, 5, 5, 9, 12, 48322, 9, 6223, 26771, 9, 51, 0, 1271, 10, 1, 9, 5433, 5, 6, 6, 5, 61164, 6, 5, 5, 6, 6, 6, 9, 10, 58300, 6254, 2648, 10, 139, 0, 26771, 11, 158, 0, 1271, 12, 10, 11, 62400, 11, 10, 12, 0, 5433, 5, 6, 6, 6, 52264, 5, 6, 6, 5, 6, 6, 9, 11, 5433, 5, 5, 6, 5, 52954, 5, 5, 5, 5, 5, 5, 3, 9, 26771, 9, 59, 0, 1271, 10, 1, 9, 26771, 9, 130, 0, 21916, 6, 5, 9, 5, 5, 5, 11, 6, 10, 5433, 5, 5, 6, 5, 20538, 5, 6, 6, 5, 5, 5, 9, 11, 48322, 9, 6345, 26771, 10, 130, 0, 1271, 11, 1, 10, 2648, 10, 27, 0, 3397, 5, 5, 5, 6, 6, 5, 6, 11, 12, 10, 5, 5433, 5, 6, 6, 5, 49944, 5, 5, 6, 5, 5, 5, 9, 12, 48322, 9, 6372, 26771, 9, 130, 0, 1271, 10, 1, 9, 5433, 5, 5, 5, 5, 35101, 5, 5, 5, 5, 6, 6, 9, 10, 58300, 6386, 5433, 6, 6, 6, 5, 47676, 6, 5, 5, 6, 6, 6, 9, 0, 5433, 6, 6, 6, 6, 12839, 5, 6, 5, 6, 6, 5, 4, 9, 2648, 9, 116, 0, 26771, 10, 159, 0, 1271, 11, 4, 10, 3825, 10, 9, 1, 11, 26771, 9, 23, 0, 21916, 5, 5, 9, 6, 6, 6, 11, 6, 10, 5433, 6, 5, 6, 6, 49571, 5, 5, 5, 6, 6, 5, 9, 11, 48322, 9, 6488, 2648, 10, 116, 0, 26771, 11, 166, 0, 1271, 12, 10, 11, 26771, 11, 167, 0, 1271, 13, 0, 11, 62400, 11, 10, 12, 1, 13, 5433, 5, 6, 5, 5, 42148, 6, 6, 5, 6, 6, 6, 9, 11, 5433, 6, 5, 6, 5, 31821, 5, 5, 5, 6, 5, 5, 10, 9, 48322, 10, 6538, 26771, 9, 167, 0, 1271, 11, 0, 9, 23314, 6524, 3, 11, 9, 7, 5, 8, 5, 6524, 5, 5433, 5, 6, 5, 5, 49505, 6, 5, 5, 6, 6, 6, 10, 9, 48322, 10, 6565, 26771, 9, 167, 0, 1271, 10, 0, 9, 5433, 5, 6, 6, 5, 60980, 5, 6, 6, 5, 5, 5, 9, 10, 58300, 6583, 26771, 10, 31, 0, 5433, 5, 6, 6, 5, 10565, 5, 5, 5, 5, 5, 5, 9, 10, 43823, 9, 26771, 9, 18, 0, 43823, 9, 26771, 13, 172, 0, 26771, 14, 173, 0, 26771, 12, 174, 0, 52254, 3, 2648, 15, 103, 0, 26771, 16, 175, 0, 48434, 17, 15, 1, 16, 26771, 15, 176, 0, 1271, 16, 17, 15, 62400, 15, 17, 16, 1, 0, 5433, 13, 13, 12, 13, 15785, 13, 13, 13, 13, 13, 13, 4, 15, 9325, 14, 14, 15, 14, 12, 4, 14, 13, 48322, 15, 6664, 26771, 15, 31, 0, 43823, 15, 26771, 15, 177, 0, 1271, 16, 4, 15, 2648, 15, 116, 0, 62400, 17, 4, 16, 1, 15, 5433, 12, 12, 12, 12, 51161, 14, 12, 12, 13, 14, 14, 5, 17, 14054, 15, 0, 26771, 16, 129, 0, 3825, 17, 15, 2, 5, 16, 5433, 12, 12, 14, 13, 9735, 14, 13, 12, 14, 14, 12, 6, 17, 26771, 15, 51, 0, 1271, 16, 6, 15, 5433, 13, 12, 14, 13, 36441, 13, 12, 14, 12, 12, 14, 7, 16, 26771, 15, 130, 0, 1271, 16, 6, 15, 5433, 14, 13, 12, 12, 20580, 12, 14, 14, 14, 13, 12, 8, 16, 26771, 15, 127, 0, 1271, 16, 6, 15, 5433, 14, 14, 14, 14, 44337, 13, 14, 12, 12, 12, 14, 9, 16, 26771, 15, 124, 0, 1271, 16, 6, 15, 5433, 13, 13, 14, 12, 33385, 12, 13, 12, 13, 12, 12, 10, 16, 2648, 15, 139, 0, 2648, 16, 139, 0, 26771, 17, 178, 0, 1271, 18, 16, 17, 26771, 17, 51, 0, 46405, 17, 179, 12, 19, 12, 0, 7, 14, 14, 62400, 17, 16, 18, 5, 1, 19, 8, 9, 10, 48434, 16, 15, 1, 17, 5433, 13, 13, 14, 13, 61357, 14, 14, 14, 12, 14, 13, 11, 16, 26771, 15, 180, 0, 1271, 16, 11, 15, 62400, 15, 11, 16, 0, 64749, 16, 181, 15, 13, 1, 14, 0, 13, 14, 5433, 14, 13, 14, 13, 31129, 14, 12, 14, 12, 13, 12, 15, 16, 48322, 15, 6964, 26771, 16, 145, 0, 1271, 17, 11, 16, 62400, 16, 11, 17, 0, 26771, 17, 51, 0, 20416, 12, 14, 17, 12, 16, 13, 14, 14, 18, 14, 14, 14, 64749, 16, 182, 18, 12, 7, 13, 0, 13, 14, 5433, 12, 12, 13, 13, 57883, 14, 12, 12, 14, 13, 12, 15, 16, 5433, 13, 14, 14, 14, 48528, 13, 14, 12, 13, 13, 14, 16, 15, 48322, 16, 7018, 26771, 15, 183, 0, 1271, 17, 11, 15, 62400, 15, 11, 17, 0, 64749, 17, 184, 15, 14, 8, 12, 0, 13, 12, 5433, 13, 13, 12, 12, 28977, 14, 12, 12, 12, 13, 13, 16, 17, 5433, 14, 14, 12, 14, 55297, 14, 14, 14, 14, 14, 14, 15, 16, 48322, 15, 7072, 26771, 16, 185, 0, 1271, 17, 11, 16, 62400, 16, 11, 17, 0, 64749, 17, 186, 16, 12, 9, 13, 0, 14, 13, 5433, 14, 12, 13, 13, 10567, 12, 13, 13, 12, 12, 14, 15, 17, 5433, 13, 14, 13, 13, 59316, 12, 13, 13, 13, 12, 12, 16, 15, 48322, 16, 7126, 26771, 15, 187, 0, 1271, 17, 11, 15, 62400, 15, 11, 17, 0, 64749, 17, 188, 15, 13, 10, 13, 0, 14, 13, 5433, 12, 13, 13, 12, 63914, 13, 14, 14, 12, 14, 13, 16, 17, 48322, 16, 7158, 26771, 15, 189, 0, 1271, 16, 11, 15, 62400, 15, 11, 16, 0, 5433, 14, 12, 13, 14, 4174, 14, 14, 13, 14, 13, 14, 16, 15, 58300, 7176, 26771, 15, 31, 0, 5433, 13, 12, 12, 14, 2007, 14, 14, 14, 14, 12, 14, 16, 15, 43823, 16, 26771, 15, 18, 0, 43823, 15, 26771, 18, 23, 0, 26771, 15, 190, 0, 26771, 17, 191, 0, 26771, 16, 192, 0, 52254, 2, 26771, 19, 59, 0, 1271, 20, 1, 19, 26771, 19, 51, 0, 21916, 16, 16, 19, 16, 16, 16, 21, 16, 20, 5433, 15, 15, 15, 16, 25822, 16, 15, 15, 15, 15, 16, 19, 21, 48322, 19, 7279, 26771, 20, 51, 0, 1271, 21, 1, 20, 2648, 20, 27, 0, 3397, 15, 15, 15, 15, 15, 15, 15, 21, 22, 20, 15, 5433, 16, 15, 16, 15, 2923, 15, 15, 15, 15, 16, 15, 19, 22, 48322, 19, 7306, 26771, 19, 51, 0, 1271, 20, 1, 19, 5433, 16, 16, 16, 16, 1384, 16, 16, 16, 15, 16, 16, 19, 20, 58300, 7337, 2648, 20, 139, 0, 26771, 21, 158, 0, 1271, 22, 20, 21, 62400, 21, 20, 22, 0, 5433, 15, 15, 16, 15, 23730, 15, 15, 15, 15, 15, 16, 19, 21, 5433, 15, 15, 16, 15, 15396, 15, 15, 15, 15, 15, 15, 3, 19, 9325, 15, 16, 19, 15, 16, 0, 15, 15, 5433, 15, 16, 16, 15, 48184, 15, 16, 15, 16, 16, 15, 20, 19, 19161, 20, 7418, 2648, 19, 116, 0, 26771, 21, 166, 0, 1271, 22, 19, 21, 62400, 21, 19, 22, 1, 3, 9325, 15, 16, 19, 15, 15, 21, 16, 15, 5433, 16, 16, 15, 16, 58146, 16, 16, 16, 15, 16, 15, 20, 19, 48322, 20, 7427, 26771, 19, 31, 0, 43823, 19, 26771, 19, 193, 0, 1271, 20, 0, 19, 26771, 19, 194, 0, 64749, 21, 195, 20, 16, 19, 15, 0, 16, 15, 48322, 21, 7762, 2648, 19, 139, 0, 26771, 20, 196, 0, 1271, 21, 19, 20, 26771, 20, 197, 0, 1271, 22, 0, 20, 62400, 20, 19, 21, 1, 22, 5433, 16, 16, 16, 15, 46424, 15, 15, 15, 15, 16, 16, 4, 20, 2648, 19, 139, 0, 26771, 20, 196, 0, 1271, 21, 19, 20, 26771, 20, 198, 0, 1271, 22, 0, 20, 62400, 20, 19, 21, 1, 22, 5433, 15, 15, 15, 15, 1775, 16, 15, 15, 16, 16, 15, 5, 20, 2648, 19, 116, 0, 26771, 20, 166, 0, 1271, 21, 19, 20, 62400, 20, 19, 21, 1, 4, 5433, 15, 16, 15, 15, 12984, 16, 16, 15, 15, 15, 15, 19, 20, 48322, 19, 7591, 21916, 15, 15, 4, 15, 15, 15, 20, 16, 5, 5433, 15, 15, 16, 15, 49596, 15, 15, 16, 15, 16, 15, 19, 20, 48322, 19, 7742, 26771, 19, 197, 0, 26771, 20, 198, 0, 26771, 21, 199, 0, 60559, 16, 15, 4, 15, 3, 16, 16, 16, 16, 15, 16, 16, 15, 22, 5433, 15, 15, 15, 16, 5158, 15, 15, 15, 15, 15, 16, 23, 22, 48322, 23, 7663, 23314, 7649, 3, 5, 22, 17, 15, 18, 15, 7649, 16, 5433, 15, 15, 15, 15, 17195, 16, 15, 16, 16, 15, 15, 23, 22, 26771, 22, 200, 0, 23314, 7678, 3, 4, 24, 17, 16, 18, 16, 7678, 16, 48322, 24, 7697, 5433, 16, 16, 16, 16, 18343, 16, 16, 16, 16, 16, 16, 24, 4, 58300, 7715, 26771, 25, 31, 0, 5433, 16, 15, 16, 15, 46672, 15, 15, 15, 16, 15, 15, 24, 25, 24117, 25, 4, 19, 4, 20, 5, 21, 23, 22, 24, 5433, 15, 15, 16, 16, 38779, 16, 15, 15, 16, 15, 16, 19, 25, 58300, 7760, 26771, 20, 31, 0, 5433, 15, 15, 16, 16, 4381, 16, 15, 15, 16, 16, 15, 19, 20, 43823, 19, 26771, 19, 193, 0, 1271, 20, 0, 19, 26771, 19, 201, 0, 3397, 16, 16, 16, 15, 16, 16, 16, 20, 21, 19, 15, 48322, 21, 7795, 26771, 19, 31, 0, 43823, 19, 2648, 19, 139, 0, 48434, 20, 19, 1, 3, 26771, 19, 180, 0, 1271, 21, 20, 19, 62400, 19, 20, 21, 0, 5433, 16, 16, 15, 15, 32912, 15, 16, 15, 16, 15, 15, 6, 19, 26771, 19, 23, 0, 5433, 15, 16, 15, 16, 6002, 16, 15, 15, 16, 16, 16, 7, 19, 26771, 19, 51, 0, 46405, 19, 202, 15, 20, 16, 0, 6, 16, 16, 36227, 19, 2, 20, 6, 5433, 16, 16, 15, 16, 7570, 15, 15, 16, 16, 16, 16, 8, 19, 26771, 19, 59, 0, 1271, 20, 8, 19, 23314, 7901, 7, 20, 19, 17, 16, 18, 16, 7901, 16, 48322, 19, 8363, 1271, 19, 8, 7, 5433, 16, 16, 15, 16, 33958, 15, 16, 16, 15, 16, 16, 9, 19, 14054, 19, 0, 26771, 20, 197, 0, 1271, 21, 0, 20, 3825, 20, 19, 2, 21, 9, 5433, 16, 15, 15, 15, 24295, 16, 15, 16, 15, 16, 16, 10, 20, 26771, 19, 31, 0, 64749, 20, 203, 10, 15, 19, 15, 0, 15, 15, 48322, 20, 7972, 58300, 8316, 14054, 19, 0, 26771, 20, 198, 0, 1271, 21, 0, 20, 3825, 20, 19, 2, 21, 9, 5433, 15, 16, 15, 16, 61708, 16, 16, 16, 16, 16, 16, 11, 20, 26771, 19, 31, 0, 3397, 15, 15, 16, 15, 16, 16, 16, 11, 20, 19, 15, 5433, 16, 15, 16, 15, 30880, 16, 16, 15, 16, 15, 16, 19, 20, 48322, 19, 8060, 21916, 15, 15, 10, 16, 16, 16, 20, 16, 11, 5433, 16, 15, 15, 15, 11208, 15, 16, 15, 16, 15, 16, 19, 20, 48322, 19, 8079, 5433, 16, 15, 15, 16, 29165, 16, 16, 16, 16, 16, 16, 19, 11, 58300, 8127, 14054, 20, 0, 26771, 21, 198, 0, 1271, 22, 0, 21, 26771, 21, 51, 0, 20416, 16, 16, 21, 16, 9, 16, 15, 16, 23, 16, 16, 16, 3825, 21, 20, 2, 22, 23, 5433, 16, 16, 16, 15, 45531, 15, 15, 15, 16, 15, 15, 19, 21, 5433, 15, 15, 15, 15, 22415, 16, 15, 15, 15, 16, 15, 12, 19, 26771, 19, 31, 0, 3397, 15, 15, 16, 15, 16, 15, 15, 12, 20, 19, 15, 5433, 15, 15, 15, 15, 52902, 15, 15, 15, 15, 15, 16, 19, 20, 48322, 19, 8198, 21916, 15, 16, 10, 15, 15, 16, 20, 15, 12, 5433, 16, 16, 16, 15, 29088, 16, 16, 16, 15, 15, 15, 19, 20, 5433, 15, 16, 15, 15, 7682, 15, 15, 15, 15, 15, 15, 20, 19, 48322, 20, 8244, 60559, 15, 15, 10, 15, 3, 15, 16, 16, 15, 16, 16, 15, 15, 19, 5433, 15, 16, 15, 16, 12577, 15, 16, 15, 15, 15, 16, 20, 19, 5433, 16, 15, 15, 15, 30722, 16, 15, 15, 16, 16, 15, 19, 20, 48322, 19, 8286, 23314, 8272, 3, 12, 20, 17, 15, 18, 15, 8272, 16, 5433, 15, 16, 15, 16, 25416, 15, 15, 15, 15, 16, 15, 19, 20, 48322, 19, 8316, 26771, 19, 197, 0, 26771, 20, 198, 0, 26771, 21, 199, 0, 26771, 22, 204, 0, 24117, 23, 3, 19, 10, 20, 12, 21, 22, 43823, 23, 5433, 15, 15, 16, 16, 28079, 15, 15, 15, 15, 16, 16, 19, 7, 26771, 19, 51, 0, 20416, 15, 15, 19, 15, 7, 15, 15, 15, 20, 15, 16, 15, 5433, 16, 15, 16, 15, 22818, 15, 15, 16, 15, 16, 16, 7, 20, 58300, 7882, 26771, 19, 23, 0, 5433, 15, 15, 16, 15, 50255, 15, 15, 15, 16, 15, 15, 13, 19, 26771, 19, 93, 0, 16455, 19, 13, 16, 15, 205, 20, 15, 15, 0, 48322, 20, 8570, 14054, 19, 0, 26771, 20, 197, 0, 1271, 21, 0, 20, 20416, 16, 16, 13, 15, 6, 15, 16, 16, 20, 15, 15, 15, 3825, 22, 19, 2, 21, 20, 5433, 15, 15, 15, 16, 42282, 16, 16, 15, 15, 16, 15, 14, 22, 26771, 19, 31, 0, 3397, 16, 15, 16, 15, 16, 16, 16, 14, 20, 19, 16, 5433, 15, 15, 15, 15, 8260, 15, 15, 15, 16, 15, 16, 19, 20, 48322, 19, 8499, 21916, 15, 15, 3, 16, 16, 15, 20, 16, 14, 5433, 15, 15, 16, 15, 1874, 15, 16, 15, 15, 15, 15, 19, 20, 48322, 19, 8523, 26771, 19, 199, 0, 26771, 20, 206, 0, 26771, 21, 200, 0, 24117, 22, 2, 19, 20, 21, 14, 43823, 22, 5433, 15, 15, 16, 15, 41263, 16, 15, 15, 16, 15, 15, 19, 13, 26771, 19, 51, 0, 20416, 15, 15, 19, 16, 13, 15, 16, 16, 20, 16, 16, 15, 5433, 16, 16, 16, 16, 3015, 15, 15, 15, 16, 15, 16, 13, 20, 58300, 8381, 26771, 19, 199, 0, 26771, 20, 206, 0, 26771, 21, 200, 0, 26771, 22, 31, 0, 24117, 23, 2, 19, 20, 21, 22, 43823, 23, 26771, 19, 18, 0, 43823, 19, 26771, 7, 207, 0, 26771, 6, 208, 0, 52254, 4, 2648, 8, 116, 0, 26771, 9, 162, 0, 1271, 10, 8, 9, 62400, 9, 8, 10, 1, 1, 9325, 6, 6, 8, 6, 6, 9, 6, 6, 5433, 6, 6, 7, 6, 38342, 7, 7, 6, 6, 7, 6, 9, 8, 19161, 9, 8683, 26771, 8, 23, 0, 16455, 8, 1, 7, 6, 209, 10, 7, 7, 0, 5433, 7, 7, 6, 7, 63918, 7, 7, 7, 7, 7, 6, 9, 10, 48322, 9, 8711, 26771, 8, 210, 0, 26771, 9, 23, 0, 26771, 10, 211, 0, 26771, 11, 23, 0, 24117, 12, 2, 8, 9, 10, 11, 43823, 12, 2648, 8, 114, 0, 26771, 9, 115, 0, 1271, 10, 8, 9, 26771, 9, 23, 0, 2648, 11, 116, 0, 3825, 12, 11, 1, 0, 5433, 6, 6, 6, 6, 45856, 6, 6, 6, 6, 6, 6, 11, 12, 19161, 11, 8771, 26771, 12, 23, 0, 5433, 7, 7, 7, 6, 54773, 7, 7, 6, 7, 6, 6, 11, 12, 62400, 12, 8, 10, 2, 9, 11, 20416, 6, 6, 2, 6, 12, 6, 6, 6, 8, 6, 6, 6, 5433, 7, 6, 6, 7, 48712, 7, 7, 6, 6, 7, 7, 5, 8, 26771, 8, 210, 0, 45497, 7, 6, 6, 9, 6, 212, 0, 1, 5, 7, 1, 6, 6, 26771, 10, 211, 0, 2648, 11, 114, 0, 26771, 12, 144, 0, 1271, 13, 11, 12, 23330, 1, 7, 7, 7, 7, 7, 5, 7, 7, 12, 6, 6, 62400, 14, 11, 13, 1, 12, 24117, 11, 2, 8, 9, 10, 14, 43823, 11, 26771, 8, 18, 0, 43823, 8, 26771, 12, 23, 0, 26771, 9, 213, 0, 26771, 11, 214, 0, 26771, 10, 215, 0, 52254, 3, 26771, 13, 59, 0, 1271, 14, 2, 13, 26771, 13, 130, 0, 21916, 10, 10, 13, 10, 10, 10, 15, 10, 14, 5433, 10, 10, 9, 10, 8187, 10, 9, 9, 10, 10, 10, 13, 15, 48322, 13, 8968, 26771, 14, 130, 0, 1271, 15, 2, 14, 2648, 14, 27, 0, 3397, 10, 10, 9, 9, 9, 9, 9, 15, 16, 14, 9, 5433, 10, 9, 9, 9, 47122, 9, 9, 10, 10, 10, 9, 13, 16, 48322, 13, 8995, 26771, 13, 130, 0, 1271, 14, 2, 13, 5433, 9, 9, 9, 9, 61843, 10, 9, 9, 10, 9, 9, 13, 14, 58300, 9017, 2648, 14, 139, 0, 48434, 15, 14, 0, 5433, 10, 9, 9, 9, 53201, 9, 9, 10, 10, 9, 9, 13, 15, 5433, 10, 10, 9, 9, 21663, 10, 10, 10, 9, 10, 10, 4, 13, 14054, 13, 0, 2648, 14, 99, 0, 2648, 15, 33, 0, 26771, 16, 39, 0, 1271, 17, 15, 16, 62400, 16, 15, 17, 1, 1, 48322, 16, 9075, 5433, 10, 9, 10, 9, 4738, 10, 9, 9, 10, 10, 10, 15, 1, 58300, 9092, 36227, 16, 0, 5433, 9, 10, 9, 9, 58171, 10, 9, 9, 9, 10, 10, 15, 16, 26771, 16, 216, 0, 1271, 17, 15, 16, 22756, 16, 9481, 1, 11, 0, 0, 62400, 18, 15, 17, 1, 16, 48434, 15, 14, 1, 18, 3825, 14, 13, 1, 15, 26771, 13, 217, 0, 1271, 15, 14, 13, 62400, 13, 14, 15, 0, 5433, 9, 9, 9, 9, 4867, 9, 9, 9, 10, 9, 10, 5, 13, 26771, 13, 59, 0, 1271, 14, 5, 13, 9325, 9, 10, 13, 9, 9, 14, 10, 9, 48322, 13, 9176, 26771, 13, 31, 0, 43823, 13, 26771, 13, 105, 0, 26771, 14, 218, 0, 1271, 15, 13, 14, 26771, 14, 219, 0, 62400, 16, 13, 15, 2, 0, 14, 26771, 13, 218, 0, 1271, 14, 16, 13, 26771, 13, 220, 0, 1271, 15, 4, 13, 62400, 13, 4, 15, 0, 26771, 15, 92, 0, 1271, 17, 13, 15, 26771, 15, 23, 0, 26771, 18, 128, 0, 62400, 19, 13, 17, 2, 15, 18, 62400, 13, 16, 14, 1, 19, 5433, 9, 10, 10, 10, 5897, 10, 10, 10, 10, 9, 10, 6, 13, 26771, 13, 221, 0, 5433, 10, 10, 9, 10, 847, 9, 9, 9, 9, 9, 10, 7, 13, 26771, 13, 23, 0, 5433, 10, 9, 9, 9, 59737, 9, 9, 10, 9, 10, 10, 8, 13, 26771, 13, 59, 0, 1271, 14, 6, 13, 23314, 9318, 8, 14, 13, 11, 9, 12, 9, 9318, 9, 48322, 13, 9447, 2648, 13, 114, 0, 26771, 14, 222, 0, 1271, 15, 13, 14, 26771, 14, 223, 0, 1271, 16, 6, 14, 62400, 14, 6, 16, 1, 8, 8710, 10, 9, 7, 0, 14, 9, 224, 9, 9, 16, 10, 9, 9, 24954, 26771, 14, 225, 0, 62400, 17, 13, 15, 2, 16, 14, 26771, 13, 23, 0, 48088, 9, 10, 17, 9, 9, 10, 14, 13, 5433, 9, 10, 9, 10, 5378, 10, 9, 9, 10, 10, 9, 7, 14, 5433, 9, 10, 9, 10, 48818, 10, 10, 10, 10, 9, 10, 13, 8, 26771, 13, 51, 0, 20416, 10, 10, 13, 10, 8, 9, 10, 10, 14, 9, 9, 9, 5433, 9, 9, 9, 9, 6953, 9, 9, 10, 10, 9, 9, 8, 14, 58300, 9299, 26771, 13, 59, 0, 1271, 14, 5, 13, 45497, 9, 10, 10, 13, 9, 226, 0, 14, 7, 10, 1, 9, 9, 1271, 14, 5, 13, 43823, 14, 26771, 13, 18, 0, 43823, 13, 26771, 4, 227, 0, 26771, 5, 228, 0, 26771, 3, 229, 0, 52254, 2, 48941, 6, 0, 26771, 7, 90, 0, 64749, 8, 230, 6, 5, 7, 5, 0, 5, 5, 5433, 5, 3, 4, 5, 5361, 5, 5, 5, 4, 3, 5, 6, 8, 48322, 6, 9575, 2648, 7, 103, 0, 26771, 8, 231, 0, 26771, 9, 105, 0, 48434, 10, 7, 2, 8, 9, 26771, 7, 106, 0, 1271, 8, 10, 7, 62400, 7, 10, 8, 1, 0, 5433, 5, 3, 4, 3, 64529, 4, 3, 4, 5, 4, 4, 6, 7, 43823, 6, 26771, 6, 18, 0, 43823, 6, 26771, 17, 232, 0, 26771, 18, 233, 0, 52254, 3, 26771, 4, 18, 0, 26771, 19, 59, 0, 1271, 20, 2, 19, 26771, 19, 130, 0, 21916, 17, 18, 19, 17, 18, 18, 21, 17, 20, 5433, 17, 18, 17, 18, 44325, 17, 18, 18, 18, 17, 18, 19, 21, 48322, 19, 9674, 26771, 20, 130, 0, 1271, 21, 2, 20, 2648, 20, 27, 0, 3397, 17, 17, 18, 18, 17, 18, 18, 21, 22, 20, 17, 5433, 18, 18, 18, 18, 31128, 17, 17, 18, 18, 18, 17, 19, 22, 48322, 19, 9701, 26771, 19, 130, 0, 1271, 20, 2, 19, 5433, 18, 18, 17, 18, 21381, 18, 18, 18, 17, 18, 18, 19, 20, 58300, 9723, 2648, 20, 139, 0, 48434, 21, 20, 0, 5433, 18, 17, 17, 18, 13195, 17, 18, 17, 18, 17, 18, 19, 21, 5433, 18, 18, 18, 18, 31514, 18, 18, 18, 17, 18, 18, 5, 19, 48941, 19, 0, 26771, 20, 90, 0, 3397, 18, 17, 17, 18, 18, 18, 18, 19, 21, 20, 18, 5433, 18, 18, 17, 17, 7796, 18, 17, 17, 17, 18, 18, 19, 21, 19161, 19, 9796, 9325, 18, 18, 20, 17, 17, 0, 17, 17, 5433, 17, 18, 17, 17, 19131, 17, 17, 18, 18, 18, 18, 19, 20, 5433, 18, 17, 17, 17, 4816, 18, 18, 18, 17, 17, 17, 20, 19, 19161, 20, 9844, 2648, 19, 139, 0, 64098, 21, 5, 19, 9325, 17, 17, 19, 18, 17, 21, 18, 18, 5433, 17, 17, 18, 18, 40681, 17, 17, 17, 17, 18, 18, 20, 19, 5433, 17, 18, 17, 17, 22405, 17, 17, 17, 17, 18, 18, 19, 20, 19161, 19, 9915, 2648, 20, 116, 0, 26771, 21, 166, 0, 1271, 22, 20, 21, 26771, 21, 189, 0, 1271, 23, 5, 21, 62400, 21, 5, 23, 0, 62400, 23, 20, 22, 1, 21, 9325, 17, 17, 20, 17, 17, 23, 17, 18, 5433, 17, 17, 17, 17, 22716, 18, 18, 17, 17, 17, 17, 19, 20, 48322, 19, 9924, 26771, 19, 31, 0, 43823, 19, 2648, 19, 33, 0, 26771, 20, 39, 0, 1271, 21, 19, 20, 62400, 20, 19, 21, 1, 1, 48322, 20, 9961, 5433, 18, 18, 17, 18, 60862, 18, 18, 18, 18, 17, 18, 19, 1, 58300, 9978, 36227, 20, 0, 5433, 18, 17, 18, 17, 25924, 18, 17, 17, 18, 18, 18, 19, 20, 26771, 20, 216, 0, 1271, 21, 19, 20, 22756, 20, 10669, 1, 10, 0, 0, 62400, 22, 19, 21, 1, 20, 5433, 18, 18, 18, 18, 41899, 18, 18, 18, 17, 18, 18, 6, 22, 2648, 19, 97, 0, 48434, 20, 19, 0, 5433, 18, 17, 17, 17, 29856, 17, 17, 17, 18, 17, 17, 7, 20, 14054, 19, 0, 3825, 20, 19, 1, 6, 5433, 17, 17, 17, 17, 45927, 17, 18, 17, 17, 18, 17, 8, 20, 26771, 9, 18, 0, 20570, 10359, 11, 12, 10374, 9072, 10339, 10, 26771, 19, 68, 0, 1271, 20, 8, 19, 62400, 19, 8, 20, 0, 26771, 19, 69, 0, 1271, 20, 8, 19, 62400, 19, 8, 20, 0, 5433, 17, 17, 17, 17, 11024, 17, 17, 17, 17, 17, 17, 9, 19, 26771, 19, 56, 0, 1271, 20, 9, 19, 9325, 17, 17, 19, 17, 18, 20, 17, 17, 48322, 19, 10336, 26771, 13, 18, 0, 26771, 19, 58, 0, 1271, 20, 9, 19, 5433, 17, 18, 18, 18, 11977, 18, 18, 17, 18, 17, 17, 14, 20, 26771, 19, 234, 0, 1271, 20, 7, 19, 26771, 19, 235, 0, 1271, 21, 14, 19, 26771, 19, 236, 0, 1271, 22, 7, 19, 26771, 19, 235, 0, 1271, 23, 14, 19, 62400, 19, 7, 22, 1, 23, 5433, 18, 18, 18, 18, 30004, 18, 18, 17, 17, 18, 18, 13, 19, 26771, 19, 31, 0, 3397, 18, 18, 18, 18, 18, 18, 17, 13, 22, 19, 17, 5433, 18, 17, 17, 17, 15843, 17, 18, 18, 17, 18, 18, 19, 22, 48322, 19, 10273, 26771, 22, 23, 0, 45700, 23, 22, 3397, 17, 17, 18, 18, 18, 18, 18, 13, 22, 23, 17, 5433, 18, 18, 17, 18, 32678, 17, 18, 17, 18, 18, 18, 19, 22, 48322, 19, 10292, 5433, 17, 18, 18, 18, 12441, 17, 18, 18, 18, 18, 18, 19, 13, 58300, 10310, 26771, 22, 23, 0, 5433, 18, 18, 17, 17, 64720, 18, 17, 17, 18, 18, 17, 19, 22, 26771, 22, 51, 0, 20416, 18, 18, 22, 18, 19, 18, 18, 18, 23, 18, 18, 18, 62400, 19, 7, 20, 2, 21, 23, 58300, 10082, 23336, 58300, 10353, 26771, 19, 70, 0, 1271, 20, 8, 19, 62400, 19, 8, 20, 1, 10, 23336, 59950, 11, 10376, 58300, 10359, 26771, 19, 71, 0, 1271, 20, 8, 19, 62400, 19, 8, 20, 0, 53266, 11, 51790, 12, 26771, 19, 216, 0, 1271, 20, 6, 19, 22756, 19, 10799, 1, 10, 1, 0, 1, 7, 62400, 21, 6, 20, 1, 19, 26771, 19, 217, 0, 1271, 20, 21, 19, 22756, 19, 10860, 2, 13, 0, 0, 62400, 22, 21, 20, 1, 19, 5433, 17, 17, 17, 17, 63634, 17, 17, 17, 18, 17, 17, 15, 22, 26771, 19, 59, 0, 1271, 20, 15, 19, 9325, 18, 18, 19, 17, 18, 20, 17, 17, 48322, 19, 10460, 26771, 19, 31, 0, 43823, 19, 14054, 19, 1, 26771, 20, 177, 0, 1271, 21, 15, 20, 22756, 20, 11032, 2, 7, 0, 0, 62400, 22, 15, 21, 1, 20, 3825, 20, 19, 3, 0, 22, 5, 5433, 17, 17, 18, 17, 64848, 18, 17, 17, 17, 18, 18, 16, 20, 2648, 19, 116, 0, 26771, 20, 92, 0, 1271, 21, 16, 20, 26771, 20, 237, 0, 26771, 22, 59, 0, 1271, 23, 20, 22, 62400, 20, 16, 21, 1, 23, 3825, 21, 19, 1, 20, 1271, 19, 15, 21, 5433, 17, 17, 18, 17, 22610, 17, 17, 17, 18, 18, 18, 4, 19, 26771, 19, 31, 0, 3397, 18, 17, 18, 17, 17, 18, 17, 4, 20, 19, 18, 5433, 18, 18, 18, 17, 59576, 18, 18, 17, 17, 17, 18, 19, 20, 48322, 19, 10624, 26771, 20, 23, 0, 45700, 21, 20, 3397, 17, 18, 17, 17, 17, 17, 17, 4, 20, 21, 17, 5433, 17, 17, 17, 17, 4504, 17, 18, 18, 17, 18, 17, 19, 20, 48322, 19, 10643, 5433, 17, 17, 17, 17, 22795, 17, 18, 18, 17, 17, 17, 19, 4, 58300, 10661, 26771, 20, 31, 0, 5433, 17, 17, 18, 18, 52861, 18, 18, 17, 18, 17, 17, 19, 20, 43823, 19, 26771, 19, 18, 0, 43823, 19, 26771, 3, 238, 0, 26771, 5, 239, 0, 26771, 4, 240, 0, 52254, 2, 5433, 5, 5, 4, 5, 48040, 5, 5, 5, 4, 4, 3, 6, 0, 48322, 6, 10739, 26771, 7, 235, 0, 1271, 8, 0, 7, 48941, 7, 8, 26771, 8, 90, 0, 64749, 9, 241, 7, 3, 8, 3, 0, 5, 4, 5433, 3, 4, 3, 5, 60845, 4, 3, 3, 4, 4, 4, 6, 9, 5433, 5, 5, 5, 5, 16001, 4, 4, 4, 3, 5, 4, 7, 6, 48322, 7, 10791, 26771, 6, 235, 0, 1271, 8, 0, 6, 26771, 6, 242, 0, 1271, 9, 8, 6, 62400, 6, 8, 9, 0, 5433, 3, 5, 4, 3, 19205, 5, 3, 3, 3, 4, 3, 7, 6, 43823, 7, 26771, 6, 18, 0, 43823, 6, 26771, 4, 243, 0, 26771, 5, 244, 0, 26771, 3, 245, 0, 52254, 2, 14054, 6, 0, 26771, 7, 236, 0, 1271, 8, 6, 7, 26771, 7, 235, 0, 1271, 9, 0, 7, 62400, 7, 6, 8, 1, 9, 26771, 6, 51, 0, 64749, 8, 246, 7, 3, 6, 3, 0, 3, 3, 43823, 8, 26771, 6, 18, 0, 43823, 6, 26771, 5, 247, 0, 26771, 4, 248, 0, 26771, 6, 249, 0, 26771, 7, 250, 0, 26771, 8, 23, 0, 52254, 3, 26771, 9, 235, 0, 1271, 10, 0, 9, 26771, 9, 235, 0, 1271, 11, 1, 9, 23314, 10909, 10, 11, 9, 7, 6, 8, 6, 10909, 6, 48322, 9, 10943, 26771, 9, 51, 0, 45127, 5, 9, 5, 6, 4, 6, 6, 8, 10927, 10, 5433, 4, 5, 5, 5, 18603, 6, 5, 5, 5, 5, 5, 9, 10, 58300, 11024, 26771, 10, 235, 0, 1271, 11, 0, 10, 26771, 10, 235, 0, 1271, 12, 1, 10, 21916, 6, 6, 12, 5, 6, 6, 10, 6, 11, 48322, 10, 10992, 26771, 10, 51, 0, 5433, 6, 6, 6, 5, 61063, 6, 5, 5, 4, 6, 5, 11, 10, 58300, 11010, 26771, 10, 23, 0, 5433, 5, 6, 6, 6, 34073, 6, 6, 5, 5, 5, 6, 11, 10, 5433, 6, 5, 4, 5, 10341, 5, 5, 5, 5, 5, 5, 9, 11, 43823, 9, 26771, 9, 18, 0, 43823, 9, 52254, 3, 26771, 4, 237, 0, 26771, 5, 218, 0, 1271, 6, 4, 5, 62400, 5, 4, 6, 1, 1, 43823, 5, 26771, 4, 18, 0, 43823, 4],
    _0x33aba0 = 0,
    _0xd8ce67 = 42,
    _0x2490f8 = ![],
    _0x54ac0d = ![],
    _0x2ae416 = {
      LOAD_CONST: 26771,
      LOAD_INT: 59950,
      LOAD_GLOBAL: 2648,
      LOAD_UPVALUE: 14054,
      LOAD_THIS: 52254,
      MOVE: 53409,
      STORE_GLOBAL: 37445,
      STORE_UPVALUE: 8833,
      GET_PROP: 1271,
      SET_PROP: 2488,
      DELETE_PROP: 51333,
      ADD: 40744,
      SUB: 57456,
      MUL: 43816,
      DIV: 57970,
      MOD: 22981,
      EXP: 63093,
      BAND: 47380,
      BOR: 55701,
      BXOR: 23628,
      SHL: 51616,
      SHR: 5106,
      USHR: 4124,
      LT: 29645,
      GT: 28207,
      LTE: 47936,
      GTE: 20763,
      EQ: 18024,
      NEQ: 14566,
      LOOSE_EQ: 13316,
      LOOSE_NEQ: 49867,
      IN: 39953,
      INSTANCEOF: 64098,
      UNARY_NEG: 25559,
      UNARY_POS: 4150,
      UNARY_NOT: 20170,
      UNARY_BITNOT: 50111,
      TYPEOF: 48941,
      VOID: 45700,
      TYPEOF_SAFE: 36365,
      JUMP: 58300,
      JUMP_IF_FALSE: 48322,
      JUMP_IF_TRUE: 19161,
      CALL: 3825,
      CALL_METHOD: 62400,
      NEW: 48434,
      RETURN: 43823,
      THROW: 51790,
      MAKE_CLOSURE: 22756,
      BUILD_ARRAY: 36227,
      BUILD_OBJECT: 24117,
      DEFINE_GETTER: 36529,
      DEFINE_SETTER: 29309,
      FOR_IN_SETUP: 34218,
      FOR_IN_NEXT: 59283,
      TRY_SETUP: 9072,
      TRY_END: 23336,
      PATCH: 36966,
      DEBUGGER: 11839,
      JUMP_REG: 53266,
      FINALLY_SETUP: 20570
    },
    _0x4ea13f = {
      CALL_SPREAD: 1126646367
    },
    _0x4d569e = {
      FRAME_SIZE: 9,
      CALLER: 1,
      RET_DST: 4,
      HANDLERS: 8,
      REG_BASE: 6,
      NOISE_PARAMS: 3,
      CLOSURE: 2,
      PC: 0,
      THIS: 7,
      NOISE_END: 5
    },
    _0x357558 = 10,
    _0x53ca7c = 16;
  function _0x60d448(_0x2e1752) {
    var _0x54653 = _0x4126d6;
    return typeof Buffer !== _0x54653(158) ? Buffer[_0x54653(221)](_0x2e1752, "base64") : Uint8Array.from(atob(_0x2e1752), function (_0x18a5db) {
      return _0x18a5db.charCodeAt(0);
    });
  }
  function _0x4e92e5(_0x23bf30) {
    var _0x2b2b13 = _0x4126d6;
    if (!_0x2490f8) return _0x23bf30;
    var _0x4304a0 = _0x60d448(_0x23bf30),
      _0x433ab7 = new Uint32Array(_0x4304a0.length / 4);
    for (var _0x4538aa = 0; _0x4538aa < _0x433ab7[_0x2b2b13(279)]; _0x4538aa++) _0x433ab7[_0x4538aa] = (_0x4304a0[_0x4538aa * 4] | _0x4304a0[_0x4538aa * 4 + 1] << 8 | _0x4304a0[_0x4538aa * 4 + 2] << 16 | _0x4304a0[_0x4538aa * 4 + 3] << 24) >>> 0;
    return _0x433ab7;
  }
  var _0x560c5a = new WeakMap();
  function _0x3a95ac(_0x5be621, _0x28ed33) {
    var _0xe36efb = _0x4126d6;
    this._regs = _0x5be621, this[_0xe36efb(234)] = _0x28ed33, this._closed = ![], this._value = void 0;
  }
  _0x3a95ac[_0x4126d6(165)]._read = function () {
    var _0x57b4b2 = _0x4126d6;
    return this[_0x57b4b2(187)] ? this._value : this._regs[this._absSlot];
  }, _0x3a95ac.prototype._write = function (_0x5c4062) {
    if (this._closed) this._value = _0x5c4062;else this._regs[this._absSlot] = _0x5c4062;
  }, _0x3a95ac.prototype[_0x4126d6(202)] = function () {
    var _0x35afb0 = _0x4126d6;
    this[_0x35afb0(172)] = this[_0x35afb0(269)][this[_0x35afb0(234)]], this[_0x35afb0(187)] = !![];
  };
  function _0x3ae3d3(_0x49b539) {
    var _0x2c69bd = _0x4126d6;
    this.fn = _0x49b539, this[_0x2c69bd(230)] = [], this.prototype = {};
  }
  function _0x298fd(_0x5ea813, _0x2a3cc8, _0x5409b7) {
    var _0x538f9f = _0x4126d6;
    this.bytecode = _0x5ea813, this[_0x538f9f(225)] = _0x2a3cc8, this[_0x538f9f(189)] = _0x5409b7, this._openUpvalues = null, this._regs = [], this._regsTop = _0x53ca7c, this._f = 0;
  }
  _0x298fd.prototype._operand = function () {
    return this.bytecode[this._regs[this._f + _0x4d569e.PC]++];
  }, _0x298fd.prototype[_0x4126d6(266)] = function (_0x1ac144, _0x248be4, _0x521b34, _0x19e63a) {
    var _0x258a9d = _0x4126d6,
      _0x759e3b = _0x1ac144.fn,
      _0x4fb142 = this[_0x258a9d(269)],
      _0x30f451 = this[_0x258a9d(205)],
      _0x5288fc = _0x357558 + _0x759e3b.regCount,
      _0x5e9cfd = _0x30f451 + _0x5288fc;
    while (_0x4fb142.length < _0x5e9cfd) _0x4fb142[_0x258a9d(235)](void 0);
    for (var _0x4f6f38 = _0x30f451; _0x4f6f38 < _0x5e9cfd; _0x4f6f38++) _0x4fb142[_0x4f6f38] = void 0;
    var _0x3367ae = _0x30f451 + _0x357558;
    _0x4fb142[_0x30f451 + _0x4d569e.PC] = _0x759e3b.startPc, _0x4fb142[_0x30f451 + _0x4d569e.CALLER] = this._f, _0x4fb142[_0x30f451 + _0x4d569e.RET_DST] = _0x19e63a, _0x4fb142[_0x30f451 + _0x4d569e.THIS] = _0x521b34, _0x4fb142[_0x30f451 + _0x4d569e[_0x258a9d(270)]] = _0x1ac144, _0x4fb142[_0x30f451 + _0x4d569e.FRAME_SIZE] = _0x5288fc, _0x4fb142[_0x30f451 + _0x4d569e.REG_BASE] = _0x3367ae;
    if (typeof _0x4d569e.NOISE_END === "number") _0x4fb142[_0x30f451 + _0x4d569e[_0x258a9d(286)]] = _0x5e9cfd;
    if (typeof _0x4d569e[_0x258a9d(259)] === _0x258a9d(208)) _0x4fb142[_0x30f451 + _0x4d569e.NOISE_PARAMS] = _0x759e3b.paramCount;
    if (typeof _0x4d569e[_0x258a9d(191)] === "number") _0x4fb142[_0x30f451 + _0x4d569e[_0x258a9d(191)]] = _0x248be4;
    if (typeof _0x4d569e[_0x258a9d(250)] === "number") _0x4fb142[_0x30f451 + _0x4d569e.NOISE_PC] = _0x759e3b[_0x258a9d(162)];
    if (typeof _0x4d569e.NOISE_COUNTER === "number") _0x4fb142[_0x30f451 + _0x4d569e[_0x258a9d(164)]] = 0;
    this._regsTop = _0x5e9cfd;
    if (_0x248be4) {
      if (_0x759e3b.hasRest) {
        var _0x36e72e = _0x759e3b.paramCount - 1;
        for (var _0xaa83a6 = 0; _0xaa83a6 < _0x36e72e; _0xaa83a6++) _0x4fb142[_0x3367ae + _0xaa83a6] = _0xaa83a6 < _0x248be4[_0x258a9d(279)] ? _0x248be4[_0xaa83a6] : void 0;
        _0x4fb142[_0x3367ae + _0x36e72e] = _0x248be4[_0x258a9d(157)](_0x36e72e);
      } else {
        for (var _0x3b685b = 0; _0x3b685b < _0x248be4[_0x258a9d(279)] && _0x3b685b < _0x759e3b.regCount; _0x3b685b++) _0x4fb142[_0x3367ae + _0x3b685b] = _0x248be4[_0x3b685b];
      }
      if (_0x759e3b.paramCount < _0x759e3b.regCount) _0x4fb142[_0x3367ae + _0x759e3b.paramCount] = _0x248be4;
    }
    this._f = _0x30f451;
  }, _0x298fd[_0x4126d6(165)].captureUpvalue = function (_0x4af010, _0x2355b7) {
    var _0x5bf473 = _0x4126d6,
      _0x58e2a4 = this[_0x5bf473(269)][_0x4af010 + _0x4d569e.REG_BASE] + _0x2355b7,
      _0x7aaa4d = this[_0x5bf473(174)] || (this._openUpvalues = []);
    return _0x7aaa4d[_0x58e2a4] || (_0x7aaa4d[_0x58e2a4] = new _0x3a95ac(this._regs, _0x58e2a4));
  }, _0x298fd.prototype[_0x4126d6(245)] = function (_0x436201, _0x31b3c9) {
    var _0x36ba7c = _0x4126d6,
      _0x41233a = _0x436201 ?? this[_0x36ba7c(216)](),
      _0x441801 = _0x31b3c9 ?? this._operand(),
      _0x5e0769 = this.constants[_0x41233a];
    if (!_0x441801) return _0x5e0769;
    if (typeof _0x5e0769 === _0x36ba7c(208)) return _0x5e0769 ^ _0x441801;
    if (typeof _0x5e0769 !== "string") return _0x5e0769;
    var _0x5a4872 = _0x60d448(_0x5e0769),
      _0x2e20de = "",
      _0x32b35e = _0x441801;
    for (var _0x524f3b = 0; _0x524f3b < _0x5a4872.length / 2; _0x524f3b++) {
      _0x32b35e = _0x32b35e + 2654435769 | 0;
      var _0x2b80f2 = (_0x32b35e ^ _0x32b35e >>> 13) & 65535,
        _0x59cb77 = _0x5a4872[_0x524f3b * 2] | _0x5a4872[_0x524f3b * 2 + 1] << 8;
      _0x2e20de += String.fromCharCode(_0x59cb77 ^ _0x2b80f2);
    }
    return _0x2e20de;
  }, _0x298fd[_0x4126d6(165)][_0x4126d6(224)] = function (_0x22fa9f) {
    var _0x39de32 = _0x4126d6,
      _0x51fffe = this._openUpvalues;
    if (!_0x51fffe) return;
    var _0x4868a1 = this._regs,
      _0x207d42 = _0x22fa9f + _0x4868a1[_0x22fa9f + _0x4d569e[_0x39de32(203)]];
    for (var _0x258cb2 = _0x4868a1[_0x22fa9f + _0x4d569e.REG_BASE]; _0x258cb2 < _0x207d42; _0x258cb2++) {
      var _0x39da7b = _0x51fffe[_0x258cb2];
      _0x39da7b && (_0x39da7b[_0x39de32(202)](), _0x51fffe[_0x258cb2] = void 0);
    }
  }, _0x298fd.prototype[_0x4126d6(167)] = function (_0x24e32a, _0x15ec1b, _0x12e766) {
    var _0x4faee9 = _0x4126d6,
      _0xa710bd = () => {
        return _0x4cfe2d.now();
      },
      _0x36255f = _0xa710bd();
    this[_0x4faee9(266)](_0x24e32a, _0x12e766, _0x15ec1b, 0);
    while (!![]) {
      var _0x4020ff = this._f,
        _0x3e64fa = this._regs,
        _0x4711ea = this.bytecode,
        _0x10dfae = _0x3e64fa[_0x4020ff + _0x4d569e.PC];
      if (_0x10dfae >= _0x4711ea[_0x4faee9(279)]) break;
      _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x10dfae + 1;
      var _0x58d2be = this.bytecode[_0x10dfae];
      if (typeof _0x4d569e.NOISE_PC === "number") _0x3e64fa[_0x4020ff + _0x4d569e.NOISE_PC] = (_0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(250)]] + 1) % _0x4711ea.length;
      if (typeof _0x4d569e[_0x4faee9(164)] === _0x4faee9(208)) _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(164)]]++;
      if (typeof _0x4d569e.NOISE_MIRROR === _0x4faee9(208)) _0x3e64fa[_0x4020ff + _0x4d569e.NOISE_MIRROR] = _0x58d2be;
      if (typeof _0x4d569e.NOISE_ACC === "number") _0x3e64fa[_0x4020ff + _0x4d569e.NOISE_ACC] = _0x3e64fa[_0x4020ff + _0x4d569e.NOISE_ACC] ^ _0x10dfae | 0;
      if (_0x54ac0d) {
        var _0x509401 = _0xa710bd(),
          _0x2cea4f = _0x509401 - _0x36255f > _0x54ac0d;
        _0x36255f = _0x509401;
        if (_0x2cea4f) {
          for (var _0x10054a = 0; _0x10054a < this[_0x4faee9(304)][_0x4faee9(279)]; _0x10054a++) this.bytecode[_0x10054a] = 0;
          for (var _0x24b3aa = _0x4020ff; _0x24b3aa < this[_0x4faee9(205)]; _0x24b3aa++) this._regs[_0x24b3aa] = void 0;
          _0x58d2be = _0x2ae416.JUMP, _0x3e64fa[_0x4020ff + _0x4d569e.PC] = this[_0x4faee9(304)].length;
        }
      }
      try {
        var _0x13ae57 = _0x3e64fa[_0x4020ff + _0x4d569e.REG_BASE];
        switch (_0x58d2be) {
          case _0x2ae416.LOAD_INT:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this._operand();
              break;
            }
          case _0x2ae416.IN:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad in _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416.TRY_SETUP:
            {
              var _0x4f698d = _0x3e64fa[_0x4020ff + _0x4d569e.HANDLERS];
              if (!_0x4f698d) _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(299)]] = _0x4f698d = [];
              _0x4f698d.push({
                handlerPc: this._operand(),
                exceptionReg: this[_0x4faee9(216)]()
              });
              break;
            }
          case _0x2ae416.EQ:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad === _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.LOAD_UPVALUE:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(270)]][_0x4faee9(230)][this._operand()]._read();
              break;
            }
          case 46405:
            {
              let _0x4f4fa3 = [this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand()],
                _0x26e5b3 = [_0x4f4fa3[7], _0x4f4fa3[8], _0x4f4fa3[4], _0x4f4fa3[3], _0x4f4fa3[6], _0x4f4fa3[0], _0x4f4fa3[2], _0x4f4fa3[1], _0x4f4fa3[5]];
              var _0x448aa2 = _0x26e5b3[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x26e5b3[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad !== _0x3e64fa[_0x13ae57 + _0x26e5b3[2]];
              var _0x448aa2 = _0x26e5b3[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x26e5b3[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad - _0x3e64fa[_0x13ae57 + _0x26e5b3[5]];
              var _0x448aa2 = _0x26e5b3[6];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this._constant(_0x26e5b3[7], _0x26e5b3[8]);
              break;
            }
          case _0x2ae416.EXP:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = Math[_0x4faee9(290)](_0x28d0ad, _0x3e64fa[_0x13ae57 + this._operand()]);
              break;
            }
          case _0x2ae416[_0x4faee9(254)]:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this[_0x4faee9(245)]();
              break;
            }
          case _0x2ae416.DEFINE_SETTER:
            {
              var _0x1e5b5f = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                _0x22b314 = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                _0x2bbffd = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x1e8b16 = Object.getOwnPropertyDescriptor(_0x1e5b5f, _0x22b314),
                _0x40c91f = {
                  set: _0x2bbffd,
                  configurable: !![],
                  enumerable: !![]
                };
              _0x1e8b16 && typeof _0x1e8b16.get === _0x4faee9(276) && (_0x40c91f.get = _0x1e8b16.get);
              Object[_0x4faee9(175)](_0x1e5b5f, _0x22b314, _0x40c91f);
              break;
            }
          case _0x2ae416[_0x4faee9(218)]:
            {
              var _0x448aa2 = this[_0x4faee9(216)]();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = +_0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416.DEBUGGER:
            {
              debugger;
              break;
            }
          case 6307:
            {
              let _0x4212dc = [this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand()],
                _0x4f0a22 = [_0x4212dc[10], _0x4212dc[11], _0x4212dc[7], _0x4212dc[9], _0x4212dc[1], _0x4212dc[12], _0x4212dc[2], _0x4212dc[4], _0x4212dc[8], _0x4212dc[6], _0x4212dc[3], _0x4212dc[5], _0x4212dc[0]];
              var _0x448aa2 = _0x4f0a22[0];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = -_0x3e64fa[_0x13ae57 + _0x4f0a22[1]];
              var _0x448aa2 = _0x4f0a22[2],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f0a22[3]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad == _0x3e64fa[_0x13ae57 + _0x4f0a22[4]];
              var _0xe02d88 = _0x4f0a22[5],
                _0x47867f = _0x4f0a22[6];
              if (!_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              var _0x448aa2 = _0x4f0a22[7],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f0a22[8]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad != _0x3e64fa[_0x13ae57 + _0x4f0a22[9]];
              var _0x448aa2 = _0x4f0a22[10],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f0a22[11]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad != _0x3e64fa[_0x13ae57 + _0x4f0a22[12]];
              break;
            }
          case _0x2ae416.BAND:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad & _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.SHR:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >> _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416[_0x4faee9(305)]:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad / _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.BXOR:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad ^ _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416.DELETE_PROP:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x1e5b5f = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x22b314 = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = delete _0x1e5b5f[_0x22b314];
              break;
            }
          case _0x2ae416.MOD:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad % _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416[_0x4faee9(251)]:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >= _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case 48088:
            {
              let _0x1c3cf7 = [this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand()],
                _0x3febca = [_0x1c3cf7[1], _0x1c3cf7[3], _0x1c3cf7[5], _0x1c3cf7[0], _0x1c3cf7[4], _0x1c3cf7[6], _0x1c3cf7[2], _0x1c3cf7[7]];
              var _0x448aa2 = _0x3febca[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x3febca[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad | _0x3e64fa[_0x13ae57 + _0x3febca[2]];
              var _0x448aa2 = _0x3febca[3];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = +_0x3e64fa[_0x13ae57 + _0x3febca[4]];
              var _0x448aa2 = _0x3febca[5],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x3febca[6]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >>> _0x3e64fa[_0x13ae57 + _0x3febca[7]];
              break;
            }
          case _0x2ae416[_0x4faee9(280)]:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x1e5b5f = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x287353 = [];
              if (_0x1e5b5f !== null && _0x1e5b5f !== void 0) {
                var _0x1392b6 = Object[_0x4faee9(272)](null),
                  _0x203914 = Object(_0x1e5b5f);
                while (_0x203914 !== null) {
                  var _0x1e2111 = Object[_0x4faee9(192)](_0x203914);
                  for (var _0x10054a = 0; _0x10054a < _0x1e2111[_0x4faee9(279)]; _0x10054a++) {
                    var _0x1e1c4e = _0x1e2111[_0x10054a];
                    if (!(_0x1e1c4e in _0x1392b6)) {
                      _0x1392b6[_0x1e1c4e] = !![];
                      var _0x1f61e5 = Object.getOwnPropertyDescriptor(_0x203914, _0x1e1c4e);
                      _0x1f61e5 && _0x1f61e5[_0x4faee9(293)] && _0x287353.push(_0x1e1c4e);
                    }
                  }
                  _0x203914 = Object.getPrototypeOf(_0x203914);
                }
              }
              _0x3e64fa[_0x13ae57 + _0x448aa2] = {
                _keys: _0x287353,
                i: 0
              };
              break;
            }
          case 3397:
            {
              let _0x466e11 = [this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this[_0x4faee9(216)]()],
                _0x2a5941 = [_0x466e11[6], _0x466e11[5], _0x466e11[2], _0x466e11[1], _0x466e11[0], _0x466e11[8], _0x466e11[7], _0x466e11[9], _0x466e11[3], _0x466e11[10], _0x466e11[4]];
              var _0x448aa2 = _0x2a5941[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2a5941[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad << _0x3e64fa[_0x13ae57 + _0x2a5941[2]];
              var _0x448aa2 = _0x2a5941[3];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x3e64fa[_0x13ae57 + _0x2a5941[4]];
              var _0x448aa2 = _0x2a5941[5],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2a5941[6]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad !== _0x3e64fa[_0x13ae57 + _0x2a5941[7]];
              var _0x448aa2 = _0x2a5941[8],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2a5941[9]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad | _0x3e64fa[_0x13ae57 + _0x2a5941[10]];
              break;
            }
          case _0x2ae416.PATCH:
            {
              var _0x209d30 = this._operand(),
                _0x4e5ba2 = this[_0x4faee9(216)](),
                _0x5c1cf6 = this[_0x4faee9(216)](),
                _0x3fe755 = this._operand() ^ _0x209d30 | 0;
              for (var _0x36f61d = _0x4e5ba2; _0x36f61d < _0x5c1cf6; _0x36f61d++) {
                _0x3fe755 = _0x3fe755 + 2654435769 | 0, this.bytecode[_0x209d30 + (_0x36f61d - _0x4e5ba2)] = (this[_0x4faee9(304)][_0x36f61d] ^ (_0x3fe755 ^ _0x3fe755 >>> 13)) >>> 0;
              }
              break;
            }
          case _0x2ae416[_0x4faee9(255)]:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad << _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.THROW:
            throw _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
          case _0x2ae416.TYPEOF:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = typeof _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.BUILD_OBJECT:
            {
              var _0x448aa2 = this._operand(),
                _0x25f2c3 = this._operand(),
                _0x4819a0 = {};
              for (var _0x10054a = 0; _0x10054a < _0x25f2c3; _0x10054a++) {
                var _0x22b314 = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                  _0x248a9b = _0x3e64fa[_0x13ae57 + this._operand()];
                _0x4819a0[_0x22b314] = _0x248a9b;
              }
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x4819a0;
              break;
            }
          case _0x2ae416.LOOSE_NEQ:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad != _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case 45497:
            {
              let _0x4f4e7e = [this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this._operand()],
                _0x12c359 = [_0x4f4e7e[1], _0x4f4e7e[5], _0x4f4e7e[6], _0x4f4e7e[4], _0x4f4e7e[10], _0x4f4e7e[2], _0x4f4e7e[12], _0x4f4e7e[0], _0x4f4e7e[9], _0x4f4e7e[11], _0x4f4e7e[3], _0x4f4e7e[8], _0x4f4e7e[7]];
              var _0x448aa2 = _0x12c359[0];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this[_0x4faee9(245)](_0x12c359[1], _0x12c359[2]);
              var _0x448aa2 = _0x12c359[3],
                _0x25f2c3 = _0x12c359[4],
                _0x4819a0 = {};
              for (var _0x10054a = 0; _0x10054a < _0x25f2c3; _0x10054a++) {
                var _0x22b314 = _0x3e64fa[_0x13ae57 + _0x12c359[5]],
                  _0x248a9b = _0x3e64fa[_0x13ae57 + _0x12c359[6]];
                _0x4819a0[_0x22b314] = _0x248a9b;
              }
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x4819a0;
              var _0x448aa2 = _0x12c359[7],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x12c359[8]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad < _0x3e64fa[_0x13ae57 + _0x12c359[9]];
              var _0x448aa2 = _0x12c359[10],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x12c359[11]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad % _0x3e64fa[_0x13ae57 + _0x12c359[12]];
              break;
            }
          case _0x2ae416.GT:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad > _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case 21916:
            {
              let _0x3ff4ff = [this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand()],
                _0x254b9b = [_0x3ff4ff[1], _0x3ff4ff[5], _0x3ff4ff[4], _0x3ff4ff[7], _0x3ff4ff[3], _0x3ff4ff[0], _0x3ff4ff[6], _0x3ff4ff[8], _0x3ff4ff[2]];
              var _0x448aa2 = _0x254b9b[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x254b9b[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad + _0x3e64fa[_0x13ae57 + _0x254b9b[2]];
              var _0x448aa2 = _0x254b9b[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x254b9b[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >>> _0x3e64fa[_0x13ae57 + _0x254b9b[5]];
              var _0x448aa2 = _0x254b9b[6],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x254b9b[7]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad > _0x3e64fa[_0x13ae57 + _0x254b9b[8]];
              break;
            }
          case _0x2ae416[_0x4faee9(153)]:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = ~_0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case 60559:
            {
              let _0x2ccd80 = [this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand()],
                _0xd87398 = [_0x2ccd80[6], _0x2ccd80[5], _0x2ccd80[11], _0x2ccd80[1], _0x2ccd80[0], _0x2ccd80[10], _0x2ccd80[8], _0x2ccd80[12], _0x2ccd80[7], _0x2ccd80[13], _0x2ccd80[4], _0x2ccd80[2], _0x2ccd80[9], _0x2ccd80[3]];
              var _0x448aa2 = _0xd87398[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0xd87398[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad !== _0x3e64fa[_0x13ae57 + _0xd87398[2]];
              var _0x448aa2 = _0xd87398[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0xd87398[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >>> _0x3e64fa[_0x13ae57 + _0xd87398[5]];
              var _0x448aa2 = _0xd87398[6],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0xd87398[7]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad - _0x3e64fa[_0x13ae57 + _0xd87398[8]];
              var _0x448aa2 = _0xd87398[9],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0xd87398[10]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >= _0x3e64fa[_0x13ae57 + _0xd87398[11]];
              var _0x448aa2 = _0xd87398[12];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = +_0x3e64fa[_0x13ae57 + _0xd87398[13]];
              break;
            }
          case _0x2ae416.ADD:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad + _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case 45127:
            {
              let _0x3cc406 = [this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)]()],
                _0x26a7b8 = [_0x3cc406[7], _0x3cc406[8], _0x3cc406[3], _0x3cc406[4], _0x3cc406[6], _0x3cc406[2], _0x3cc406[0], _0x3cc406[5], _0x3cc406[9], _0x3cc406[1]];
              var _0xe02d88 = _0x26a7b8[0],
                _0x47867f = _0x26a7b8[1];
              if (_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              var _0x448aa2 = _0x26a7b8[2],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x26a7b8[3]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >>> _0x3e64fa[_0x13ae57 + _0x26a7b8[4]];
              var _0x448aa2 = _0x26a7b8[5],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x26a7b8[6]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad === _0x3e64fa[_0x13ae57 + _0x26a7b8[7]];
              var _0x448aa2 = _0x26a7b8[8];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = -_0x3e64fa[_0x13ae57 + _0x26a7b8[9]];
              break;
            }
          case _0x2ae416[_0x4faee9(297)]:
            {
              var _0x448aa2 = this[_0x4faee9(216)]();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = -_0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416[_0x4faee9(213)]:
            {
              var _0xcc43b8 = this._operand();
              _0x3e64fa[_0x4020ff + _0x4d569e.CLOSURE].upvalues[_0xcc43b8]._write(_0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()]);
              break;
            }
          case _0x2ae416[_0x4faee9(171)]:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad | _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case 5433:
            {
              let _0x1795c2 = [this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand()],
                _0x24efd3 = [_0x1795c2[6], _0x1795c2[7], _0x1795c2[3], _0x1795c2[9], _0x1795c2[10], _0x1795c2[1], _0x1795c2[8], _0x1795c2[0], _0x1795c2[5], _0x1795c2[11], _0x1795c2[12], _0x1795c2[2], _0x1795c2[4]];
              var _0x448aa2 = _0x24efd3[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x24efd3[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad << _0x3e64fa[_0x13ae57 + _0x24efd3[2]];
              var _0x448aa2 = _0x24efd3[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x24efd3[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad - _0x3e64fa[_0x13ae57 + _0x24efd3[5]];
              var _0x448aa2 = _0x24efd3[6],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x24efd3[7]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad != _0x3e64fa[_0x13ae57 + _0x24efd3[8]];
              var _0x448aa2 = _0x24efd3[9];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x3e64fa[_0x13ae57 + _0x24efd3[10]];
              var _0x448aa2 = _0x24efd3[11];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x24efd3[12];
              break;
            }
          case 16455:
            {
              let _0x147ecc = [this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand()],
                _0x4a1cc9 = [_0x147ecc[5], _0x147ecc[1], _0x147ecc[0], _0x147ecc[3], _0x147ecc[7], _0x147ecc[2], _0x147ecc[6], _0x147ecc[4], _0x147ecc[8]];
              var _0x448aa2 = _0x4a1cc9[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4a1cc9[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad <= _0x3e64fa[_0x13ae57 + _0x4a1cc9[2]];
              var _0x448aa2 = _0x4a1cc9[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4a1cc9[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad !== _0x3e64fa[_0x13ae57 + _0x4a1cc9[5]];
              var _0x448aa2 = _0x4a1cc9[6],
                _0x1cebb5 = this._constant(_0x4a1cc9[7], _0x4a1cc9[8]),
                _0x248a9b = Object.prototype[_0x4faee9(267)].call(this[_0x4faee9(189)], _0x1cebb5) ? this[_0x4faee9(189)][_0x1cebb5] : void 0;
              _0x3e64fa[_0x13ae57 + _0x448aa2] = typeof _0x248a9b;
              break;
            }
          case 20416:
            {
              let _0x5b7566 = [this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this[_0x4faee9(216)]()],
                _0x4f5c36 = [_0x5b7566[8], _0x5b7566[4], _0x5b7566[2], _0x5b7566[9], _0x5b7566[5], _0x5b7566[3], _0x5b7566[0], _0x5b7566[7], _0x5b7566[10], _0x5b7566[6], _0x5b7566[11], _0x5b7566[1]];
              var _0x448aa2 = _0x4f5c36[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f5c36[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad + _0x3e64fa[_0x13ae57 + _0x4f5c36[2]];
              var _0x448aa2 = _0x4f5c36[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f5c36[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad > _0x3e64fa[_0x13ae57 + _0x4f5c36[5]];
              var _0x448aa2 = _0x4f5c36[6],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f5c36[7]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad << _0x3e64fa[_0x13ae57 + _0x4f5c36[8]];
              var _0x448aa2 = _0x4f5c36[9],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x4f5c36[10]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = Math.pow(_0x28d0ad, _0x3e64fa[_0x13ae57 + _0x4f5c36[11]]);
              break;
            }
          case _0x2ae416.NEQ:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad !== _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416[_0x4faee9(160)]:
            {
              var _0x5b5647 = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              this[_0x4faee9(224)](_0x4020ff);
              var _0x2ab35a = _0x3e64fa[_0x4020ff + _0x4d569e.CALLER],
                _0x13831b = _0x3e64fa[_0x4020ff + _0x4d569e.RET_DST];
              if (_0x13831b & 1 && (typeof _0x5b5647 !== _0x4faee9(283) || _0x5b5647 === null)) _0x5b5647 = _0x3e64fa[_0x4020ff + _0x4d569e.THIS];
              var _0x21b4dc = _0x4020ff + _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(203)]];
              for (var _0x10054a = _0x4020ff; _0x10054a < _0x21b4dc; _0x10054a++) _0x3e64fa[_0x10054a] = void 0;
              this[_0x4faee9(205)] = _0x4020ff, this._f = _0x2ab35a, _0x3e64fa[_0x2ab35a ? _0x3e64fa[_0x2ab35a + _0x4d569e.REG_BASE] + (_0x13831b >> 1) : 0] = _0x5b5647;
              break;
            }
          case _0x2ae416[_0x4faee9(274)]:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416[_0x4faee9(226)]:
            {
              var _0x448aa2 = this._operand(),
                _0x2e676b = this._operand(),
                _0x15043d = this[_0x4faee9(216)](),
                _0x53fa00 = this._operand(),
                _0x40c27c = this._operand(),
                _0x1f0f8e = this._operand(),
                _0xc2d7d8 = new Array(_0x40c27c);
              for (var _0x10054a = 0; _0x10054a < _0x40c27c; _0x10054a++) {
                var _0x5110f0 = this._operand(),
                  _0x27d778 = this[_0x4faee9(216)]();
                _0xc2d7d8[_0x10054a] = {
                  isLocal: _0x5110f0,
                  _index: _0x27d778
                };
              }
              var _0x59484a = {
                  paramCount: _0x15043d,
                  regCount: _0x53fa00,
                  startPc: _0x2e676b,
                  hasRest: _0x1f0f8e
                },
                _0x24e32a = new _0x3ae3d3(_0x59484a);
              for (var _0x10054a = 0; _0x10054a < _0xc2d7d8[_0x4faee9(279)]; _0x10054a++) {
                var _0x2da3c8 = _0xc2d7d8[_0x10054a];
                _0x2da3c8.isLocal ? _0x24e32a.upvalues.push(this.captureUpvalue(_0x4020ff, _0x2da3c8[_0x4faee9(198)])) : _0x24e32a.upvalues[_0x4faee9(235)](_0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(270)]][_0x4faee9(230)][_0x2da3c8[_0x4faee9(198)]]);
              }
              var _0x5394ff = this,
                _0x66bb36 = function (_0x42ec4e) {
                  return function () {
                    var _0x4e0b22 = _0x47d1;
                    return new _0x298fd(_0x5394ff[_0x4e0b22(304)], _0x5394ff[_0x4e0b22(225)], _0x5394ff.globals)[_0x4e0b22(167)](_0x42ec4e, this == null ? _0x5394ff[_0x4e0b22(189)] : this, Array[_0x4e0b22(165)][_0x4e0b22(157)][_0x4e0b22(261)](arguments));
                  };
                }(_0x24e32a);
              _0x560c5a.set(_0x66bb36, _0x24e32a), _0x66bb36.prototype = _0x24e32a[_0x4faee9(165)], _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x66bb36;
              break;
            }
          case 23330:
            {
              let _0xa45a98 = [this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand()],
                _0x2e079d = [_0xa45a98[4], _0xa45a98[11], _0xa45a98[8], _0xa45a98[7], _0xa45a98[5], _0xa45a98[2], _0xa45a98[3], _0xa45a98[1], _0xa45a98[10], _0xa45a98[9], _0xa45a98[6], _0xa45a98[0]];
              var _0x448aa2 = _0x2e079d[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2e079d[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad | _0x3e64fa[_0x13ae57 + _0x2e079d[2]];
              var _0x448aa2 = _0x2e079d[3];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = ~_0x3e64fa[_0x13ae57 + _0x2e079d[4]];
              var _0x448aa2 = _0x2e079d[5];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = +_0x3e64fa[_0x13ae57 + _0x2e079d[6]];
              var _0x448aa2 = _0x2e079d[7];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x3e64fa[_0x13ae57 + _0x2e079d[8]];
              var _0x448aa2 = _0x2e079d[9],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2e079d[10]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad / _0x3e64fa[_0x13ae57 + _0x2e079d[11]];
              break;
            }
          case 23314:
            {
              let _0x5c8a04 = [this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand()],
                _0x582c38 = [_0x5c8a04[3], _0x5c8a04[1], _0x5c8a04[2], _0x5c8a04[6], _0x5c8a04[0], _0x5c8a04[9], _0x5c8a04[7], _0x5c8a04[5], _0x5c8a04[4], _0x5c8a04[8]];
              var _0x448aa2 = _0x582c38[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x582c38[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad < _0x3e64fa[_0x13ae57 + _0x582c38[2]];
              var _0xe02d88 = _0x582c38[3],
                _0x47867f = _0x582c38[4];
              if (_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              var _0x448aa2 = _0x582c38[5],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x582c38[6]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad / _0x3e64fa[_0x13ae57 + _0x582c38[7]];
              var _0xe02d88 = _0x582c38[8],
                _0x47867f = _0x582c38[9];
              if (!_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              break;
            }
          case _0x2ae416.TYPEOF_SAFE:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x1cebb5 = this[_0x4faee9(245)](),
                _0x248a9b = Object[_0x4faee9(165)].hasOwnProperty.call(this[_0x4faee9(189)], _0x1cebb5) ? this[_0x4faee9(189)][_0x1cebb5] : void 0;
              _0x3e64fa[_0x13ae57 + _0x448aa2] = typeof _0x248a9b;
              break;
            }
          case _0x2ae416[_0x4faee9(199)]:
            {
              var _0x1e5b5f = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                _0x22b314 = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x115fb6 = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x1e8b16 = Object.getOwnPropertyDescriptor(_0x1e5b5f, _0x22b314),
                _0x3abb2f = {
                  get: _0x115fb6,
                  configurable: !![],
                  enumerable: !![]
                };
              _0x1e8b16 && typeof _0x1e8b16[_0x4faee9(209)] === _0x4faee9(276) && (_0x3abb2f.set = _0x1e8b16[_0x4faee9(209)]);
              Object.defineProperty(_0x1e5b5f, _0x22b314, _0x3abb2f);
              break;
            }
          case _0x2ae416.MUL:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad * _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416.LOAD_THIS:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(195)]];
              break;
            }
          case _0x2ae416[_0x4faee9(265)]:
            {
              var _0x4f698d = _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(299)]];
              if (!_0x4f698d) _0x3e64fa[_0x4020ff + _0x4d569e[_0x4faee9(299)]] = _0x4f698d = [];
              _0x4f698d.push({
                finallyPc: this._operand(),
                contReg: this[_0x4faee9(216)](),
                payloadReg: this._operand(),
                throwPad: this._operand()
              });
              break;
            }
          case _0x2ae416.LOOSE_EQ:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad == _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.LOAD_GLOBAL:
            {
              var _0x448aa2 = this._operand(),
                _0x19f63f = this._constant();
              if (!(_0x19f63f in this.globals)) throw new ReferenceError(_0x19f63f + _0x4faee9(196));
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this[_0x4faee9(189)][_0x19f63f];
              break;
            }
          case 19352:
            {
              let _0x532051 = [this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand()],
                _0x2b07ea = [_0x532051[10], _0x532051[4], _0x532051[11], _0x532051[6], _0x532051[5], _0x532051[8], _0x532051[2], _0x532051[7], _0x532051[1], _0x532051[12], _0x532051[13], _0x532051[3], _0x532051[9], _0x532051[0]];
              var _0x448aa2 = _0x2b07ea[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2b07ea[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad << _0x3e64fa[_0x13ae57 + _0x2b07ea[2]];
              var _0x448aa2 = _0x2b07ea[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x2b07ea[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad != _0x3e64fa[_0x13ae57 + _0x2b07ea[5]];
              var _0x448aa2 = _0x2b07ea[6],
                _0x1cebb5 = this._constant(_0x2b07ea[7], _0x2b07ea[8]),
                _0x248a9b = Object[_0x4faee9(165)][_0x4faee9(267)].call(this.globals, _0x1cebb5) ? this.globals[_0x1cebb5] : void 0;
              _0x3e64fa[_0x13ae57 + _0x448aa2] = typeof _0x248a9b;
              var _0xe02d88 = _0x2b07ea[9],
                _0x47867f = _0x2b07ea[10];
              if (!_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              var _0x448aa2 = _0x2b07ea[11],
                _0x19f63f = this[_0x4faee9(245)](_0x2b07ea[12], _0x2b07ea[13]);
              if (!(_0x19f63f in this[_0x4faee9(189)])) throw new ReferenceError(_0x19f63f + " is not defined");
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this.globals[_0x19f63f];
              break;
            }
          case _0x2ae416[_0x4faee9(180)]:
            {
              var _0xe02d88 = this._operand(),
                _0x47867f = this._operand();
              if (!_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              break;
            }
          case _0x2ae416.CALL_METHOD:
            {
              var _0x448aa2 = this._operand(),
                _0x5577a0 = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                _0x2b8842 = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x23cd1f = this._operand(),
                _0x12e766;
              if (_0x23cd1f === _0x4ea13f.CALL_SPREAD) _0x12e766 = _0x3e64fa[_0x13ae57 + this._operand()];else {
                _0x12e766 = new Array(_0x23cd1f);
                for (var _0x10054a = 0; _0x10054a < _0x23cd1f; _0x10054a++) _0x12e766[_0x10054a] = _0x3e64fa[_0x13ae57 + this._operand()];
              }
              var _0x24e32a = _0x2b8842 && _0x560c5a[_0x4faee9(217)](_0x2b8842);
              _0x24e32a ? this._pushFrame(_0x24e32a, _0x12e766, _0x5577a0, _0x448aa2 << 1) : _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x2b8842.apply(_0x5577a0, _0x12e766);
              break;
            }
          case _0x2ae416.BUILD_ARRAY:
            {
              var _0x448aa2 = this._operand(),
                _0x90d7f = this._operand(),
                _0x13629d = new Array(_0x90d7f);
              for (var _0x10054a = 0; _0x10054a < _0x90d7f; _0x10054a++) _0x13629d[_0x10054a] = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x13629d;
              break;
            }
          case _0x2ae416.SET_PROP:
            {
              var _0x1e5b5f = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                _0x22b314 = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x248a9b = _0x3e64fa[_0x13ae57 + this._operand()];
              Reflect[_0x4faee9(209)](_0x1e5b5f, _0x22b314, _0x248a9b);
              break;
            }
          case _0x2ae416.CALL:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x2b8842 = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x23cd1f = this._operand(),
                _0x12e766;
              if (_0x23cd1f === _0x4ea13f.CALL_SPREAD) _0x12e766 = _0x3e64fa[_0x13ae57 + this._operand()];else {
                _0x12e766 = new Array(_0x23cd1f);
                for (var _0x10054a = 0; _0x10054a < _0x23cd1f; _0x10054a++) _0x12e766[_0x10054a] = _0x3e64fa[_0x13ae57 + this._operand()];
              }
              var _0x24e32a = _0x2b8842 && _0x560c5a.get(_0x2b8842);
              _0x24e32a ? this._pushFrame(_0x24e32a, _0x12e766, this.globals, _0x448aa2 << 1) : _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x2b8842.apply(null, _0x12e766);
              break;
            }
          case _0x2ae416.STORE_GLOBAL:
            {
              this.globals[this._constant()] = _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416[_0x4faee9(169)]:
            {
              var _0xe02d88 = this._operand(),
                _0x47867f = this._operand();
              if (_0x3e64fa[_0x13ae57 + _0xe02d88]) _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x47867f;
              break;
            }
          case 9325:
            {
              let _0x292664 = [this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand()],
                _0x282e59 = [_0x292664[2], _0x292664[5], _0x292664[4], _0x292664[1], _0x292664[0], _0x292664[6], _0x292664[3], _0x292664[7]];
              var _0x448aa2 = _0x282e59[0];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = !_0x3e64fa[_0x13ae57 + _0x282e59[1]];
              var _0x448aa2 = _0x282e59[2],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x282e59[3]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad + _0x3e64fa[_0x13ae57 + _0x282e59[4]];
              var _0x448aa2 = _0x282e59[5],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x282e59[6]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >> _0x3e64fa[_0x13ae57 + _0x282e59[7]];
              break;
            }
          case _0x2ae416[_0x4faee9(244)]:
            {
              var _0x448aa2 = this._operand(),
                _0x531ff8 = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x4c1984 = this[_0x4faee9(216)]();
              _0x531ff8.i >= _0x531ff8._keys[_0x4faee9(279)] ? _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x4c1984 : _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x531ff8[_0x4faee9(228)][_0x531ff8.i++];
              break;
            }
          case _0x2ae416.JUMP_REG:
            {
              _0x3e64fa[_0x4020ff + _0x4d569e.PC] = _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416[_0x4faee9(232)]:
            {
              var _0x448aa2 = this._operand();
              _0x3e64fa[_0x13ae57 + _0x448aa2] = !_0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.TRY_END:
            {
              _0x3e64fa[_0x4020ff + _0x4d569e.HANDLERS].pop();
              break;
            }
          case 64749:
            {
              let _0x89f465 = [this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this._operand(), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)]()],
                _0x34e896 = [_0x89f465[5], _0x89f465[1], _0x89f465[6], _0x89f465[0], _0x89f465[2], _0x89f465[4], _0x89f465[7], _0x89f465[3], _0x89f465[8]];
              var _0x448aa2 = _0x34e896[0];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this._constant(_0x34e896[1], _0x34e896[2]);
              var _0x448aa2 = _0x34e896[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x34e896[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad === _0x3e64fa[_0x13ae57 + _0x34e896[5]];
              var _0x448aa2 = _0x34e896[6],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x34e896[7]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad == _0x3e64fa[_0x13ae57 + _0x34e896[8]];
              break;
            }
          case 8710:
            {
              let _0x5482ef = [this[_0x4faee9(216)](), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand()],
                _0x20834b = [_0x5482ef[5], _0x5482ef[13], _0x5482ef[9], _0x5482ef[2], _0x5482ef[4], _0x5482ef[0], _0x5482ef[1], _0x5482ef[8], _0x5482ef[11], _0x5482ef[7], _0x5482ef[12], _0x5482ef[10], _0x5482ef[6], _0x5482ef[3]];
              var _0x448aa2 = _0x20834b[0];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x20834b[1];
              var _0x448aa2 = _0x20834b[2],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x20834b[3]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad ^ _0x3e64fa[_0x13ae57 + _0x20834b[4]];
              var _0x448aa2 = _0x20834b[5],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x20834b[6]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad < _0x3e64fa[_0x13ae57 + _0x20834b[7]];
              var _0x448aa2 = _0x20834b[8],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x20834b[9]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad === _0x3e64fa[_0x13ae57 + _0x20834b[10]];
              var _0x448aa2 = _0x20834b[11];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = this[_0x4faee9(245)](_0x20834b[12], _0x20834b[13]);
              break;
            }
          case _0x2ae416.VOID:
            {
              var _0x448aa2 = this[_0x4faee9(216)]();
              this._operand(), _0x3e64fa[_0x13ae57 + _0x448aa2] = void 0;
              break;
            }
          case _0x2ae416[_0x4faee9(161)]:
            _0x3e64fa[_0x4020ff + _0x4d569e.PC] = this._operand();
            break;
          case _0x2ae416.GET_PROP:
            {
              var _0x448aa2 = this._operand(),
                _0x1e5b5f = _0x3e64fa[_0x13ae57 + this._operand()],
                _0x22b314 = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x1e5b5f[_0x22b314];
              break;
            }
          case _0x2ae416[_0x4faee9(281)]:
            {
              var _0x448aa2 = this._operand(),
                _0x2b8842 = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()],
                _0x23cd1f = this._operand(),
                _0x12e766;
              if (_0x23cd1f === _0x4ea13f.CALL_SPREAD) _0x12e766 = _0x3e64fa[_0x13ae57 + this._operand()];else {
                _0x12e766 = new Array(_0x23cd1f);
                for (var _0x10054a = 0; _0x10054a < _0x23cd1f; _0x10054a++) _0x12e766[_0x10054a] = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              }
              var _0x24e32a = _0x2b8842 && _0x560c5a[_0x4faee9(217)](_0x2b8842);
              _0x24e32a ? this._pushFrame(_0x24e32a, _0x12e766, Object[_0x4faee9(272)](_0x24e32a.prototype || null), _0x448aa2 << 1 | 1) : _0x3e64fa[_0x13ae57 + _0x448aa2] = Reflect.construct(_0x2b8842, _0x12e766);
              break;
            }
          case _0x2ae416[_0x4faee9(291)]:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad >>> _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          default:
            throw new Error(_0x4faee9(298) + _0x58d2be + " at pc " + (_0x3e64fa[_0x4020ff + _0x4d569e.PC] - 1));
          case 10025:
            {
              let _0xab0a81 = [this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this[_0x4faee9(216)](), this._operand()],
                _0x55e207 = [_0xab0a81[8], _0xab0a81[7], _0xab0a81[5], _0xab0a81[0], _0xab0a81[2], _0xab0a81[3], _0xab0a81[6], _0xab0a81[1], _0xab0a81[4]];
              var _0x448aa2 = _0x55e207[0],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x55e207[1]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad | _0x3e64fa[_0x13ae57 + _0x55e207[2]];
              var _0x448aa2 = _0x55e207[3],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x55e207[4]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad * _0x3e64fa[_0x13ae57 + _0x55e207[5]];
              var _0x448aa2 = _0x55e207[6],
                _0x28d0ad = _0x3e64fa[_0x13ae57 + _0x55e207[7]];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad | _0x3e64fa[_0x13ae57 + _0x55e207[8]];
              break;
            }
          case _0x2ae416.SUB:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad - _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416[_0x4faee9(182)]:
            {
              var _0x448aa2 = this[_0x4faee9(216)](),
                _0x1e5b5f = _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x1e5b5f instanceof _0x3e64fa[_0x13ae57 + this._operand()];
              break;
            }
          case _0x2ae416.LT:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad < _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
          case _0x2ae416[_0x4faee9(183)]:
            {
              var _0x448aa2 = this._operand(),
                _0x28d0ad = _0x3e64fa[_0x13ae57 + this._operand()];
              _0x3e64fa[_0x13ae57 + _0x448aa2] = _0x28d0ad <= _0x3e64fa[_0x13ae57 + this[_0x4faee9(216)]()];
              break;
            }
        }
      } catch (_0x53c5f1) {
        var _0x4d6f51 = 0,
          _0x36c5e6 = this._f;
        while (_0x36c5e6) {
          var _0x164f3e = _0x3e64fa[_0x36c5e6 + _0x4d569e.HANDLERS];
          if (_0x164f3e && _0x164f3e[_0x4faee9(279)] > 0) {
            _0x4d6f51 = _0x36c5e6;
            break;
          }
          this[_0x4faee9(224)](_0x36c5e6), this[_0x4faee9(205)] = _0x36c5e6, _0x36c5e6 = _0x3e64fa[_0x36c5e6 + _0x4d569e[_0x4faee9(194)]], this._f = _0x36c5e6;
        }
        if (!_0x4d6f51) throw _0x53c5f1;
        var _0x53fb73 = _0x3e64fa[_0x4d6f51 + _0x4d569e.HANDLERS].pop(),
          _0x442805 = _0x3e64fa[_0x4d6f51 + _0x4d569e.REG_BASE];
        _0x53fb73[_0x4faee9(215)] !== void 0 ? (_0x3e64fa[_0x442805 + _0x53fb73.exceptionReg] = _0x53c5f1, _0x3e64fa[_0x4d6f51 + _0x4d569e.PC] = _0x53fb73.handlerPc) : (_0x3e64fa[_0x442805 + _0x53fb73.contReg] = _0x53fb73[_0x4faee9(241)], _0x3e64fa[_0x442805 + _0x53fb73.payloadReg] = _0x53c5f1, _0x3e64fa[_0x4d6f51 + _0x4d569e.PC] = _0x53fb73.finallyPc), this._regsTop = _0x4d6f51 + _0x3e64fa[_0x4d6f51 + _0x4d569e.FRAME_SIZE], this._f = _0x4d6f51;
      }
      if (!this._f) return this[_0x4faee9(269)][0];
    }
  };
  var _0xd69559 = _0x3bf587;
  typeof window !== _0x4126d6(158) && (_0xd69559[_0x4126d6(220)] = window, _0xd69559.document = typeof document !== _0x4126d6(158) ? document : void 0);
  typeof module !== "undefined" && (_0xd69559[_0x4126d6(159)] = module, _0xd69559[_0x4126d6(243)] = typeof exports !== _0x4126d6(158) ? exports : void 0);
  var _0x3582b6 = new _0x298fd(_0x4e92e5(_0x51a13d), _0x27aef4, _0xd69559);
  _0x3582b6.run(new _0x3ae3d3({
    paramCount: 0,
    regCount: _0xd8ce67,
    startPc: _0x33aba0
  }), void 0, null);
}(__vmBox, {
  now: Date.now
});
var __vmExports = __vmBox.__shopkeeper_exports;
var shopLevel = __vmExports.shopLevel;
var discountedAmount = __vmExports.discountedAmount;
var currentSeason = __vmExports.currentSeason;
var isSeasonOpen = __vmExports.isSeasonOpen;
var availableStock = __vmExports.availableStock;
var restockTime = __vmExports.restockTime;
var eventWindow = __vmExports.eventWindow;
var advanceQuest = __vmExports.advanceQuest;
var dailySpecialNamespace = __vmExports.dailySpecialNamespace;
var dailyOrderCandidate = __vmExports.dailyOrderCandidate;
var __vmBox2 = Object.create(globalThis);
__vmBox2.globalThis = __vmBox2, function (_0x4780b3, _0x65588) {
  var _0x374ade = _0x5449,
    _0x5b52b4 = [59369, _0x374ade(237), "shopkeeper:policy:", "Set", _0x374ade(306), "offer", _0x374ade(307), _0x374ade(395), "Object", "freeze", "shopLevels", _0x374ade(323), 0, "level", 1, 5, 2, 20, 3, 50, 4, "reputation", "purchases", _0x374ade(327), "maxDiscount", "maxSurcharge", "dailySpecialDiscount", _0x374ade(347), ![], _0x374ade(383), _0x374ade(320), "successRate", 100, "stockMax", _0x374ade(238), 1440, _0x374ade(326), "questMode", _0x374ade(308), "questRewardStacks", "requiredLevel", "season", _0x374ade(298), "dailySpecialEligible", "dailyOrderTarget", "globalThis", _0x374ade(402), "DEFAULT_SHOP_POLICY", "DEFAULT_OFFER_POLICY", "parseUtcDateTime", _0x374ade(406), "createPolicyStore", void 0, "bqVOCiVM", 50975, 8526, _0x374ade(289), "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "RF6D", 16367, null, "undefined", _0x374ade(410), 28394, _0x374ade(200), "@@iterator", _0x374ade(398), "call", _0x374ade(233), 2760, "yOgMGY", "done", _0x374ade(196), "value", "length", 9983, "return", _0x374ade(242), "vm4R4", "Array", "isArray", 35103, _0x374ade(294), _0x374ade(272), "getOwnPropertySymbols", "filter", _0x374ade(319), _0x374ade(335), _0x374ade(333), "nNJSp", _0x374ade(259), _0x374ade(273), 23057, "forEach", "getOwnPropertyDescriptors", "defineProperties", "defineProperty", 62026, _0x374ade(337), "jZlVkW", "configurable", "writable", _0x374ade(374), 32685, 55858, _0x374ade(341), _0x374ade(287), "", _0x374ade(366), "gw37", _0x374ade(377), "9zsQil", _0x374ade(301), "toPrimitive", "Math", 14434, _0x374ade(291), "Lg2HYe4C", "@@toPrimitive must return a primitive value.", 44675, "String", _0x374ade(312), _0x374ade(217), 23308, "zBZCV2", "function", _0x374ade(363), "6aM93Zs", _0x374ade(207), _0x374ade(329), 58269, "prototype", "RegExp", 5548, _0x374ade(208), 32070, 55501, "number", "s", "n", "e", "f", _0x374ade(282), 31568, _0x374ade(359), 26525, _0x374ade(394), 44184, "fU7g", "cuy45", 6540, "dEkg", "SUD", 47034, 26713, 33239, "dgn", _0x374ade(262), "slice", 8, 33721, _0x374ade(205), "Map", 9447, 29447, "from", _0x374ade(265), 12743, _0x374ade(276), _0x374ade(212), "ZkCGt4G", 36155, 39132, _0x374ade(252), 26585, 1319, "ul7s", "isInteger", 40961, "KXelx", "EEnJ", _0x374ade(371), 33323, _0x374ade(360), 32638, "AMW9us5", _0x374ade(378), 27294, 64585, 21395, 32, "A4D7x", 4448, 13250, 17363, 4256, 1e9, !![], "rysX", "PQfJjRo", 62442, 49146, _0x374ade(232), "replace", "(T\\d{2}:\\d{2})Z$", "$1:00Z", "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{3})?Z$", "parse", "includes", ".", _0x374ade(365), _0x374ade(255), _0x374ade(385), 13411, "KjBJh", "has", 57317, 57014, 1e3, 500, "boolean", "28Xs61", "y6A", "map", _0x374ade(302), 63426, "every", _0x374ade(407), 1e5, 525600, _0x374ade(206), _0x374ade(314), 16, "spring", _0x374ade(226), "autumn", "winter", 64153, "Ssj3gGv", _0x374ade(223), "MIVT", "hUfa8", "^[a-z0-9_-]{1,64}$", "calendarIds", "WX9CTG86", 39089, _0x374ade(213), _0x374ade(234), 45, 59137, _0x374ade(275), "stringify", 24e3, _0x374ade(277), _0x374ade(290), "start", "end", "Function", _0x374ade(305), 48719, 55337, _0x374ade(293), "k622e", "Swlki", _0x374ade(369), "exec", "UTC", 2024, _0x374ade(219), 63052, "getUTCDate", "fnM", "getUTCHours", _0x374ade(271), _0x374ade(216), _0x374ade(211), 25088, 42637, "ju94gb9j", "VNklD0A", 33654, "id", 30449, "J4y", _0x374ade(251), 18018, "^[a-z0-9_-]{1,32}$", "tag", _0x374ade(309), _0x374ade(352), _0x374ade(279), 80, "deny", 45871, 56666, "min", 2147483648, 2147483647, _0x374ade(246), "9N1HhF7t", _0x374ade(297), 39406, _0x374ade(218), 5678, "qi8Tfw1F", 20911, "entryId", "OoH", 29157, 44119, 1956, _0x374ade(241), _0x374ade(253), 54465, _0x374ade(411), 44, "display_name", "X8DvDVW", 256, "texture", "1SHOnmFk", _0x374ade(224), "Nxfc", _0x374ade(399), _0x374ade(322), 15, "commands", 10, 18983, 45833, 15120, 46786, _0x374ade(405), _0x374ade(225), _0x374ade(396), 512, "concat", ":", 33047, 53204, 32356, _0x374ade(334), "jDQYj1", "8oXQdeV", _0x374ade(295), "publish", "cancelPending", _0x374ade(228), _0x374ade(296), "p5jldT2", 3441, "MnvIIJM", "Infinity", 35525, "now", "getDynamicProperty", _0x374ade(220), "ZQqd", "pending", "pendingAt", _0x374ade(342), _0x374ade(197), _0x374ade(348), _0x374ade(351), "data", "Invalid policy revision", _0x374ade(261), "revision", "scheduledAt", 29410, "w0pQGdqc", "ixLVI", _0x374ade(346), _0x374ade(361), 43621, "trim", _0x374ade(357), 30843, _0x374ade(209), _0x374ade(338), 60646, 43582, "pQ61kjx", _0x374ade(274), "Boolean", 13670, 63316, "eaM5R", _0x374ade(286), "Policy revision changed", _0x374ade(263), 16940, _0x374ade(353), _0x374ade(283), "I56", 65116, _0x374ade(310), 43376, "Policy revision write failed", 63119, _0x374ade(288), "CNB", 20614, "r2rNd", "F5VW7", 25434, _0x374ade(266), "parseInt", 2915, _0x374ade(260), 19870, "MoAN", "Invalid policy kind", "getDynamicPropertyIds", "sort", "BHY", 34471, "startsWith", _0x374ade(316), ":pointer", 36927, 23289, _0x374ade(210), "KFu3NEi", "SU2yyV", "XCLm82", "Cannot delete default policy", 61294, _0x374ade(349), "GqMWyP", "offerPolicyId", 62250, "XlWlIdq", _0x374ade(382), "{}", 25766, "rlWH", 27014, 61934, "IPW", 38519, 1284, _0x374ade(268), _0x374ade(401), 44321, 30424, _0x374ade(214), 27120, "yDYf5", "Policy delete failed", _0x374ade(370), "VEOX3Clz", 36004, 61335, "trade:", 43988, _0x374ade(254), _0x374ade(331), 33877, "JNV", 35056, "entries", _0x374ade(215), "values", 45493, "bMzQgEn6", _0x374ade(281), 58259, _0x374ade(278)],
    _0x3f9e5d = [28467, 27, 0, 0, 28467, 28, 1, 0, 27888, 1, 55029, 29, 931, 2, 10, 4, 0, 1, 5, 1, 4, 1, 13, 1, 3, 63856, 28, 2, 28, 29, 2, 28, 28, 55029, 29, 1043, 0, 5, 0, 0, 63856, 28, 3, 28, 29, 2, 28, 28, 55029, 29, 1066, 2, 23, 0, 0, 63856, 27, 4, 27, 29, 1, 27, 28, 55029, 29, 1811, 1, 6, 0, 0, 63856, 28, 5, 27, 29, 2, 28, 28, 55029, 29, 1842, 2, 12, 0, 0, 63856, 28, 6, 28, 29, 2, 28, 28, 55029, 29, 2040, 1, 14, 2, 0, 1, 6, 1, 8, 63856, 27, 7, 27, 29, 1, 27, 27, 55029, 29, 2480, 3, 18, 1, 0, 1, 9, 63856, 27, 8, 27, 29, 2, 27, 27, 55029, 29, 2648, 1, 10, 2, 0, 1, 10, 1, 11, 63856, 27, 9, 27, 29, 2, 28, 28, 55029, 29, 2756, 2, 13, 1, 0, 1, 11, 63856, 28, 10, 28, 29, 2, 28, 27, 55029, 29, 3067, 1, 11, 1, 0, 1, 11, 63856, 27, 11, 27, 29, 2, 28, 28, 55029, 29, 3404, 2, 21, 1, 0, 1, 13, 63856, 27, 12, 27, 29, 2, 28, 28, 55029, 29, 4367, 2, 14, 1, 0, 1, 14, 63856, 28, 13, 28, 29, 0, 28, 28, 55029, 29, 4768, 2, 12, 0, 0, 63856, 27, 14, 28, 29, 2, 28, 28, 55029, 29, 4976, 3, 11, 0, 0, 63856, 27, 19, 27, 29, 1, 28, 27, 55029, 29, 5080, 1, 12, 0, 0, 63856, 28, 20, 28, 29, 0, 28, 28, 55029, 29, 5446, 5, 23, 2, 0, 1, 12, 1, 19, 63856, 28, 21, 27, 29, 2, 28, 28, 55029, 29, 6145, 1, 14, 0, 0, 63856, 27, 22, 27, 29, 2, 27, 27, 55029, 29, 6643, 2, 18, 6, 0, 1, 16, 1, 11, 1, 21, 1, 20, 1, 19, 1, 22, 63856, 28, 23, 28, 29, 1, 28, 28, 55029, 29, 11486, 3, 9, 1, 0, 1, 15, 63856, 27, 24, 27, 29, 1, 28, 28, 55029, 29, 11569, 2, 11, 1, 0, 1, 16, 63856, 28, 25, 28, 29, 0, 28, 27, 55029, 29, 11738, 1, 17, 10, 0, 1, 25, 1, 24, 1, 19, 1, 23, 1, 7, 1, 16, 1, 15, 1, 12, 1, 11, 1, 2, 63856, 27, 26, 27, 29, 0, 27, 28, 28467, 29, 2, 0, 63856, 28, 15, 28, 29, 2, 27, 28, 24460, 29, 3, 0, 28467, 30, 4, 0, 28467, 31, 5, 0, 28467, 32, 6, 0, 28467, 33, 7, 0, 46371, 34, 4, 30, 31, 32, 33, 8354, 30, 29, 1, 34, 63856, 27, 16, 27, 30, 1, 27, 27, 24460, 29, 8, 0, 28467, 30, 9, 0, 60966, 31, 29, 30, 28467, 30, 10, 0, 28467, 32, 11, 0, 28467, 33, 12, 0, 28467, 34, 13, 0, 28467, 35, 14, 0, 40355, 36, 2, 32, 33, 34, 35, 28467, 32, 11, 0, 28467, 33, 15, 0, 28467, 34, 13, 0, 28467, 35, 16, 0, 40355, 37, 2, 32, 33, 34, 35, 28467, 32, 11, 0, 28467, 33, 17, 0, 28467, 34, 13, 0, 28467, 35, 18, 0, 40355, 38, 2, 32, 33, 34, 35, 28467, 32, 11, 0, 28467, 33, 19, 0, 28467, 34, 13, 0, 28467, 35, 20, 0, 40355, 39, 2, 32, 33, 34, 35, 46371, 32, 4, 36, 37, 38, 39, 28467, 33, 21, 0, 28467, 34, 22, 0, 28467, 35, 12, 0, 28467, 36, 23, 0, 28467, 37, 12, 0, 40355, 38, 2, 34, 35, 36, 37, 28467, 34, 22, 0, 28467, 35, 15, 0, 28467, 36, 23, 0, 28467, 37, 12, 0, 40355, 39, 2, 34, 35, 36, 37, 28467, 34, 22, 0, 28467, 35, 17, 0, 28467, 36, 23, 0, 28467, 37, 12, 0, 40355, 40, 2, 34, 35, 36, 37, 28467, 34, 22, 0, 28467, 35, 19, 0, 28467, 36, 23, 0, 28467, 37, 12, 0, 40355, 41, 2, 34, 35, 36, 37, 46371, 34, 4, 38, 39, 40, 41, 28467, 35, 24, 0, 28467, 36, 12, 0, 28467, 37, 25, 0, 28467, 38, 12, 0, 28467, 39, 26, 0, 28467, 40, 12, 0, 28467, 41, 27, 0, 28467, 42, 28, 0, 28467, 43, 29, 0, 28467, 44, 28, 0, 28467, 45, 30, 0, 46371, 46, 0, 40355, 47, 8, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 19182, 30, 29, 31, 1, 47, 63856, 28, 17, 27, 30, 0, 28, 27, 24460, 29, 8, 0, 28467, 30, 9, 0, 60966, 31, 29, 30, 28467, 30, 31, 0, 28467, 32, 32, 0, 28467, 33, 33, 0, 28467, 34, 12, 0, 28467, 35, 34, 0, 28467, 36, 35, 0, 28467, 37, 36, 0, 28467, 38, 12, 0, 28467, 39, 37, 0, 28467, 40, 38, 0, 28467, 41, 39, 0, 28467, 42, 14, 0, 28467, 43, 40, 0, 28467, 44, 14, 0, 28467, 45, 41, 0, 28467, 46, 42, 0, 28467, 47, 43, 0, 28467, 48, 28, 0, 28467, 49, 29, 0, 28467, 50, 28, 0, 28467, 51, 44, 0, 28467, 52, 14, 0, 40355, 53, 11, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 19182, 30, 29, 31, 1, 53, 63856, 27, 18, 28, 30, 0, 27, 28, 24460, 29, 45, 0, 28467, 30, 46, 0, 28467, 31, 47, 0, 28467, 32, 48, 0, 28467, 33, 49, 0, 28467, 34, 50, 0, 28467, 35, 51, 0, 40355, 36, 5, 31, 17, 32, 18, 33, 22, 34, 23, 35, 26, 45063, 29, 30, 36, 28467, 29, 52, 0, 2427, 29, 28467, 5, 53, 0, 28467, 4, 54, 0, 28467, 6, 55, 0, 27888, 3, 25854, 7, 0, 3127, 8, 7, 1, 0, 63856, 6, 7, 6, 8, 0, 6, 6, 44423, 7, 981, 25854, 8, 1, 3127, 9, 8, 2, 0, 1, 63856, 6, 7, 6, 9, 2, 6, 5, 63856, 6, 8, 4, 7, 2, 5, 5, 44423, 8, 1009, 25854, 7, 2, 3127, 9, 7, 2, 0, 1, 63856, 5, 8, 6, 9, 1, 6, 6, 63856, 5, 7, 6, 8, 2, 5, 4, 44423, 7, 1035, 25854, 8, 3, 3127, 9, 8, 0, 63856, 6, 7, 6, 9, 1, 6, 5, 2427, 7, 28467, 7, 52, 0, 2427, 7, 27888, 1, 24460, 2, 56, 0, 28467, 3, 57, 0, 8354, 4, 2, 1, 3, 16566, 4, 28467, 2, 52, 0, 2427, 2, 28467, 16, 58, 0, 28467, 17, 59, 0, 27888, 3, 28467, 18, 60, 0, 2535, 0, 16, 17, 17, 16, 19, 16, 16, 16, 18, 16, 16, 16, 16, 16, 5201, 19, 1113, 28467, 18, 60, 0, 63856, 16, 19, 17, 18, 1, 16, 16, 62279, 1204, 28467, 18, 61, 0, 20652, 20, 62, 0, 49415, 17, 17, 17, 20, 0, 21, 17, 17, 18, 63, 16, 16, 63856, 16, 18, 16, 21, 1, 16, 17, 5201, 18, 1169, 24460, 20, 62, 0, 28467, 21, 64, 0, 60966, 22, 20, 21, 60966, 20, 0, 22, 63856, 16, 18, 17, 20, 1, 17, 17, 63856, 17, 20, 16, 18, 1, 16, 17, 44423, 20, 1196, 28467, 18, 65, 0, 60966, 21, 0, 18, 63856, 17, 20, 17, 21, 2, 17, 17, 63856, 16, 19, 16, 20, 0, 17, 17, 63856, 17, 4, 16, 19, 2, 16, 17, 28467, 18, 60, 0, 49415, 16, 16, 16, 4, 0, 19, 16, 17, 18, 66, 16, 16, 5201, 19, 1805, 28467, 5, 52, 0, 28467, 6, 52, 0, 28467, 7, 52, 0, 28467, 8, 52, 0, 46371, 18, 0, 63856, 17, 9, 17, 18, 0, 16, 16, 28467, 18, 12, 0, 28949, 16, 17, 18, 19, 17, 17, 16, 17, 17, 17, 17, 16, 17, 63856, 17, 10, 17, 19, 0, 17, 17, 28467, 18, 14, 0, 28949, 17, 17, 18, 19, 16, 17, 17, 16, 17, 17, 17, 17, 17, 63856, 17, 11, 17, 19, 1, 16, 17, 35355, 1634, 12, 13, 1799, 56048, 1594, 0, 28467, 18, 67, 0, 60966, 19, 4, 18, 19182, 18, 4, 19, 1, 0, 63856, 17, 4, 17, 18, 1, 17, 17, 28467, 18, 68, 0, 60966, 19, 4, 18, 63856, 17, 7, 16, 19, 1, 16, 17, 28467, 18, 12, 0, 6336, 17, 18, 69, 16, 1, 17, 17, 19, 0, 5201, 19, 1446, 24460, 18, 8, 0, 3127, 19, 18, 1, 4, 49131, 17, 4, 16, 61, 0, 16, 19, 18, 17, 16, 70, 0, 5201, 18, 1418, 28467, 18, 52, 0, 64526, 63856, 16, 13, 16, 18, 1, 17, 16, 25276, 12, 1801, 64526, 62279, 1634, 28467, 18, 14, 0, 28949, 16, 16, 18, 19, 16, 16, 16, 16, 16, 16, 16, 16, 16, 63856, 16, 10, 16, 19, 0, 16, 16, 62279, 1591, 28467, 18, 67, 0, 60966, 19, 7, 18, 19182, 18, 7, 19, 1, 4, 63856, 17, 5, 16, 18, 0, 16, 16, 28467, 18, 71, 0, 60966, 19, 5, 18, 63856, 16, 10, 16, 19, 1, 16, 17, 28949, 16, 17, 10, 18, 16, 16, 16, 17, 17, 16, 17, 17, 17, 63856, 17, 19, 17, 18, 2, 17, 16, 5201, 19, 1560, 28467, 18, 72, 0, 60966, 20, 9, 18, 28467, 18, 73, 0, 60966, 21, 5, 18, 19182, 18, 9, 20, 1, 21, 28467, 18, 74, 0, 60966, 20, 9, 18, 49131, 17, 1, 17, 8, 0, 16, 20, 18, 17, 17, 75, 0, 63856, 16, 19, 17, 18, 2, 17, 17, 5201, 19, 1591, 28467, 18, 12, 0, 28949, 17, 16, 18, 19, 17, 16, 16, 17, 16, 17, 17, 16, 16, 63856, 16, 10, 17, 19, 0, 16, 16, 62279, 1446, 64526, 62279, 1628, 28467, 18, 12, 0, 28949, 16, 17, 18, 19, 16, 17, 16, 16, 17, 17, 16, 17, 16, 63856, 17, 11, 17, 19, 1, 16, 16, 63856, 16, 6, 17, 0, 0, 16, 17, 64526, 25276, 12, 1803, 62279, 1634, 35355, 1786, 14, 15, 1793, 28949, 16, 17, 10, 18, 16, 17, 17, 16, 16, 17, 16, 16, 17, 63856, 16, 19, 17, 18, 1, 17, 17, 5201, 19, 1697, 28467, 18, 60, 0, 28467, 20, 76, 0, 60966, 21, 4, 20, 49415, 16, 16, 16, 21, 0, 20, 17, 17, 18, 77, 16, 16, 63856, 17, 19, 16, 20, 2, 16, 17, 63856, 16, 18, 16, 19, 0, 16, 16, 5201, 18, 1759, 28467, 19, 76, 0, 60966, 20, 4, 19, 19182, 19, 4, 20, 0, 63856, 16, 8, 17, 19, 0, 16, 16, 24460, 19, 8, 0, 3127, 20, 19, 1, 8, 49131, 16, 8, 17, 61, 0, 16, 20, 19, 17, 16, 78, 0, 63856, 16, 18, 17, 19, 1, 17, 16, 5201, 18, 1780, 28467, 18, 52, 0, 63856, 16, 15, 17, 18, 1, 17, 16, 25276, 14, 1795, 64526, 62279, 1786, 64526, 25276, 14, 1797, 62279, 1786, 5201, 11, 1791, 16566, 6, 18905, 14, 16566, 15, 2427, 15, 18905, 12, 16566, 13, 2427, 13, 2427, 9, 28467, 18, 52, 0, 2427, 18, 27888, 2, 24460, 3, 79, 0, 28467, 4, 80, 0, 60966, 5, 3, 4, 19182, 4, 3, 5, 1, 0, 5201, 4, 1836, 2427, 0, 28467, 3, 52, 0, 2427, 3, 28467, 7, 81, 0, 28467, 6, 82, 0, 27888, 3, 24460, 8, 8, 0, 28467, 9, 83, 0, 60966, 10, 8, 9, 19182, 9, 8, 10, 1, 0, 63856, 7, 4, 6, 9, 2, 7, 7, 24460, 8, 8, 0, 28467, 9, 84, 0, 60966, 10, 8, 9, 5201, 10, 1992, 24460, 8, 8, 0, 28467, 9, 84, 0, 60966, 10, 8, 9, 19182, 9, 8, 10, 1, 0, 63856, 7, 5, 6, 9, 2, 7, 6, 63856, 6, 8, 7, 1, 2, 6, 7, 5201, 8, 1969, 28467, 9, 85, 0, 60966, 10, 5, 9, 55029, 9, 2e3, 1, 7, 1, 0, 1, 0, 19182, 11, 5, 10, 1, 9, 63856, 6, 5, 6, 11, 0, 7, 6, 63856, 7, 8, 7, 5, 2, 7, 7, 28467, 8, 72, 0, 60966, 9, 4, 8, 28467, 8, 86, 0, 60966, 10, 9, 8, 19182, 8, 9, 10, 2, 4, 5, 2427, 4, 28467, 8, 52, 0, 2427, 8, 27888, 2, 24460, 3, 8, 0, 28467, 4, 87, 0, 60966, 5, 3, 4, 25854, 4, 0, 19182, 6, 3, 5, 2, 4, 0, 28467, 3, 88, 0, 60966, 4, 6, 3, 2427, 4, 28467, 3, 52, 0, 2427, 3, 28467, 6, 89, 0, 28467, 7, 90, 0, 28467, 5, 91, 0, 27888, 2, 28467, 8, 14, 0, 63856, 7, 3, 5, 8, 1, 5, 6, 28467, 8, 74, 0, 60966, 9, 1, 8, 50439, 6, 6, 3, 5, 7, 5, 8, 5, 6, 9, 6, 5, 5, 5201, 8, 2391, 28467, 8, 60, 0, 60966, 9, 1, 3, 49415, 7, 5, 6, 9, 0, 10, 6, 6, 8, 92, 5, 5, 5201, 10, 2129, 60966, 8, 1, 3, 63856, 7, 9, 7, 8, 1, 5, 6, 62279, 2140, 40355, 8, 0, 63856, 5, 9, 5, 8, 1, 5, 6, 63856, 5, 4, 7, 9, 2, 7, 5, 28467, 8, 16, 0, 13091, 5, 5, 9, 7, 8, 5, 5, 3, 5201, 9, 2237, 25854, 8, 0, 24460, 9, 8, 0, 3127, 10, 9, 1, 4, 28467, 9, 12, 0, 28949, 7, 6, 9, 11, 6, 6, 6, 5, 5, 7, 5, 7, 7, 3127, 9, 8, 2, 10, 11, 28467, 8, 93, 0, 60966, 10, 9, 8, 55029, 8, 2399, 1, 7, 3, 0, 0, 1, 1, 0, 1, 4, 19182, 11, 9, 10, 1, 8, 63856, 6, 8, 7, 11, 0, 5, 5, 62279, 2357, 24460, 9, 8, 0, 28467, 10, 94, 0, 60966, 11, 9, 10, 5201, 11, 2299, 24460, 9, 8, 0, 28467, 10, 95, 0, 60966, 11, 9, 10, 24460, 10, 8, 0, 28467, 12, 94, 0, 60966, 13, 10, 12, 19182, 12, 10, 13, 1, 4, 19182, 10, 9, 11, 2, 0, 12, 63856, 6, 9, 7, 10, 0, 7, 6, 62279, 2349, 25854, 10, 0, 24460, 11, 8, 0, 3127, 12, 11, 1, 4, 3127, 11, 10, 1, 12, 28467, 10, 93, 0, 60966, 12, 11, 10, 55029, 10, 2427, 1, 10, 2, 0, 1, 0, 1, 4, 19182, 13, 11, 12, 1, 10, 63856, 7, 9, 6, 13, 1, 6, 5, 63856, 5, 8, 5, 9, 0, 5, 6, 63856, 6, 8, 6, 3, 0, 6, 7, 28467, 8, 14, 0, 45418, 9, 6, 5, 8, 5, 5, 5, 6, 3, 5, 5, 63856, 6, 3, 7, 9, 1, 5, 7, 62279, 2066, 2427, 0, 28467, 8, 52, 0, 2427, 8, 27888, 2, 25854, 3, 0, 25854, 4, 1, 25854, 5, 2, 60966, 6, 5, 0, 3127, 5, 3, 3, 4, 0, 6, 28467, 3, 52, 0, 2427, 3, 27888, 2, 24460, 3, 8, 0, 28467, 4, 96, 0, 60966, 5, 3, 4, 25854, 4, 0, 24460, 6, 8, 0, 28467, 7, 87, 0, 60966, 8, 6, 7, 25854, 7, 1, 19182, 9, 6, 8, 2, 7, 0, 19182, 6, 3, 5, 3, 4, 0, 9, 28467, 3, 52, 0, 2427, 3, 28467, 5, 97, 0, 28467, 6, 98, 0, 28467, 7, 99, 0, 27888, 4, 25854, 8, 0, 3127, 9, 8, 1, 1, 63856, 5, 1, 6, 9, 1, 5, 5, 64724, 8, 1, 0, 5201, 8, 2628, 24460, 8, 8, 0, 28467, 9, 96, 0, 60966, 10, 8, 9, 28467, 9, 73, 0, 28467, 11, 88, 0, 28467, 12, 12, 0, 28949, 5, 7, 12, 13, 5, 7, 7, 6, 6, 7, 6, 6, 7, 28467, 12, 100, 0, 28467, 14, 12, 0, 28949, 6, 6, 14, 15, 7, 6, 5, 6, 6, 6, 5, 5, 7, 28467, 14, 101, 0, 28467, 16, 12, 0, 28949, 6, 5, 16, 17, 7, 7, 6, 5, 7, 7, 6, 7, 7, 40355, 16, 4, 9, 2, 11, 13, 12, 15, 14, 17, 19182, 9, 8, 10, 3, 0, 1, 16, 63856, 7, 8, 6, 9, 1, 5, 6, 62279, 2640, 45063, 0, 1, 2, 63856, 7, 8, 7, 2, 1, 7, 6, 2427, 0, 28467, 8, 52, 0, 2427, 8, 28467, 6, 102, 0, 28467, 5, 103, 0, 28467, 4, 104, 0, 27888, 2, 25854, 7, 0, 28467, 8, 105, 0, 3127, 9, 7, 2, 0, 8, 63856, 6, 3, 4, 9, 1, 6, 4, 28467, 7, 106, 0, 25854, 8, 1, 3127, 9, 8, 1, 3, 2535, 9, 6, 6, 6, 4, 8, 6, 5, 5, 7, 6, 6, 6, 5, 6, 5201, 8, 2724, 63856, 5, 7, 6, 3, 0, 4, 6, 62279, 2748, 28467, 8, 107, 0, 45418, 9, 6, 6, 8, 4, 6, 6, 4, 3, 6, 4, 63856, 6, 7, 6, 9, 2, 5, 6, 2427, 7, 28467, 7, 52, 0, 2427, 7, 28467, 7, 108, 0, 28467, 6, 109, 0, 27888, 3, 28467, 8, 110, 0, 25854, 9, 0, 3127, 10, 9, 1, 0, 49415, 7, 7, 6, 10, 0, 9, 6, 7, 8, 111, 7, 6, 63856, 7, 8, 7, 9, 1, 7, 7, 44423, 8, 2824, 28949, 7, 6, 0, 9, 7, 7, 7, 7, 7, 7, 6, 6, 6, 63856, 7, 8, 6, 9, 1, 7, 7, 5201, 8, 2829, 2427, 0, 28467, 4, 52, 0, 28467, 8, 61, 0, 20652, 9, 62, 0, 49415, 7, 7, 7, 9, 0, 10, 7, 7, 8, 112, 7, 6, 63856, 7, 8, 7, 10, 1, 6, 6, 5201, 8, 2917, 28467, 9, 12, 0, 44958, 10, 9, 24460, 9, 62, 0, 28467, 11, 113, 0, 60966, 12, 9, 11, 60966, 9, 0, 12, 63856, 6, 4, 7, 9, 1, 7, 6, 49131, 6, 4, 6, 114, 0, 6, 10, 9, 6, 7, 115, 0, 63856, 7, 8, 6, 9, 1, 6, 6, 5201, 8, 3011, 28467, 8, 67, 0, 60966, 9, 4, 8, 63856, 7, 8, 6, 1, 1, 6, 7, 44423, 8, 2951, 28467, 10, 116, 0, 63856, 7, 8, 7, 10, 0, 7, 7, 19182, 10, 4, 9, 2, 0, 8, 63856, 6, 5, 6, 10, 0, 6, 7, 28467, 8, 110, 0, 25854, 9, 0, 3127, 10, 9, 1, 5, 49415, 6, 7, 6, 10, 0, 9, 6, 7, 8, 117, 6, 6, 5201, 9, 2996, 2427, 5, 24460, 8, 56, 0, 28467, 9, 118, 0, 8354, 10, 8, 1, 9, 16566, 10, 28467, 8, 105, 0, 6336, 7, 8, 119, 7, 1, 6, 6, 9, 0, 5201, 9, 3042, 24460, 8, 120, 0, 63856, 6, 9, 6, 8, 0, 7, 7, 62279, 3054, 24460, 8, 121, 0, 63856, 6, 9, 6, 8, 1, 7, 7, 3127, 8, 9, 1, 0, 2427, 8, 28467, 8, 52, 0, 2427, 8, 28467, 3, 122, 0, 28467, 4, 123, 0, 28467, 5, 124, 0, 27888, 2, 28467, 6, 125, 0, 20652, 7, 62, 0, 2535, 7, 5, 3, 4, 4, 8, 5, 5, 5, 6, 4, 4, 5, 4, 5, 63856, 5, 6, 5, 8, 0, 4, 5, 5201, 6, 3159, 28467, 7, 106, 0, 24460, 8, 62, 0, 28467, 9, 64, 0, 60966, 10, 8, 9, 13397, 8, 10, 2535, 8, 4, 3, 3, 4, 9, 4, 5, 4, 7, 4, 3, 5, 5, 4, 63856, 4, 6, 5, 9, 1, 5, 3, 5201, 6, 3179, 55029, 6, 3213, 1, 4, 0, 0, 63856, 4, 7, 4, 6, 2, 4, 4, 62279, 3194, 55029, 6, 3226, 1, 10, 0, 0, 63856, 3, 7, 4, 6, 1, 4, 3, 1082, 0, 7, 25854, 6, 0, 3127, 7, 6, 1, 0, 2427, 7, 28467, 6, 52, 0, 2427, 6, 27888, 2, 13397, 3, 0, 2427, 3, 28467, 3, 52, 0, 2427, 3, 28467, 5, 126, 0, 28467, 4, 127, 0, 28467, 3, 128, 0, 27888, 2, 63856, 5, 6, 5, 0, 2, 5, 5, 5201, 6, 3283, 28467, 7, 125, 0, 20652, 8, 62, 0, 2535, 8, 5, 5, 3, 5, 9, 4, 5, 3, 7, 5, 4, 4, 5, 4, 63856, 5, 6, 5, 9, 2, 5, 5, 63856, 4, 7, 4, 6, 2, 4, 4, 5201, 7, 3324, 28467, 6, 129, 0, 60966, 8, 0, 6, 24460, 6, 62, 0, 6336, 5, 8, 130, 4, 6, 4, 4, 9, 0, 63856, 4, 7, 4, 9, 1, 4, 4, 63856, 4, 6, 3, 7, 2, 3, 3, 5201, 6, 3368, 24460, 7, 62, 0, 28467, 8, 131, 0, 60966, 9, 7, 8, 49131, 5, 9, 4, 132, 0, 4, 0, 7, 3, 5, 133, 0, 63856, 4, 6, 4, 7, 0, 4, 3, 5201, 6, 3385, 28467, 6, 106, 0, 63856, 4, 7, 4, 6, 1, 4, 5, 62279, 3396, 13397, 6, 0, 63856, 3, 7, 3, 6, 1, 4, 5, 2427, 7, 28467, 6, 52, 0, 2427, 6, 28467, 11, 134, 0, 28467, 10, 135, 0, 27888, 3, 28467, 12, 61, 0, 20652, 13, 62, 0, 49415, 11, 11, 11, 13, 0, 14, 11, 11, 12, 136, 11, 11, 63856, 11, 12, 11, 14, 1, 10, 10, 5201, 12, 3470, 24460, 13, 62, 0, 28467, 14, 64, 0, 60966, 15, 13, 14, 60966, 13, 0, 15, 63856, 11, 12, 11, 13, 0, 10, 10, 63856, 10, 13, 11, 12, 1, 11, 10, 44423, 13, 3497, 28467, 12, 65, 0, 60966, 14, 0, 12, 63856, 11, 13, 11, 14, 0, 10, 10, 63856, 11, 4, 10, 13, 0, 11, 11, 28949, 10, 11, 4, 12, 10, 10, 10, 10, 10, 10, 10, 11, 10, 5201, 12, 3782, 24460, 12, 79, 0, 28467, 13, 80, 0, 60966, 14, 12, 13, 19182, 13, 12, 14, 1, 0, 63856, 11, 12, 11, 13, 0, 10, 11, 44423, 12, 3575, 25854, 13, 0, 3127, 14, 13, 1, 0, 63856, 10, 4, 11, 14, 0, 11, 10, 63856, 10, 12, 11, 4, 0, 11, 10, 63856, 11, 13, 11, 12, 2, 11, 11, 44423, 13, 3663, 63856, 10, 12, 11, 1, 0, 11, 10, 5201, 12, 3605, 63856, 11, 12, 10, 0, 2, 10, 11, 63856, 10, 14, 10, 12, 2, 10, 10, 5201, 14, 3655, 28467, 12, 137, 0, 28467, 15, 74, 0, 60966, 16, 0, 15, 13397, 15, 16, 2535, 15, 11, 11, 10, 10, 16, 11, 11, 11, 12, 10, 11, 11, 11, 11, 63856, 10, 14, 11, 16, 0, 11, 11, 63856, 11, 13, 11, 14, 0, 11, 10, 5201, 13, 3767, 63856, 11, 12, 11, 4, 0, 11, 11, 5201, 12, 3693, 63856, 11, 0, 11, 4, 2, 11, 11, 63856, 11, 12, 10, 0, 2, 11, 10, 28467, 12, 12, 0, 63856, 11, 5, 10, 12, 0, 10, 11, 55029, 12, 3921, 0, 3, 0, 0, 63856, 11, 6, 11, 12, 2, 10, 10, 28467, 12, 138, 0, 28467, 13, 139, 0, 55029, 14, 3929, 0, 14, 2, 0, 1, 5, 1, 0, 28467, 15, 140, 0, 55029, 16, 4095, 1, 4, 0, 0, 28467, 17, 141, 0, 40355, 18, 4, 12, 6, 13, 14, 15, 16, 17, 6, 2427, 18, 24460, 12, 56, 0, 28467, 13, 142, 0, 8354, 14, 12, 1, 13, 16566, 14, 28467, 7, 52, 0, 28467, 12, 12, 0, 28949, 11, 10, 12, 13, 10, 11, 10, 10, 11, 11, 11, 11, 11, 63856, 10, 8, 11, 13, 0, 10, 10, 28467, 12, 14, 0, 28949, 11, 10, 12, 13, 11, 10, 11, 10, 11, 11, 11, 11, 10, 63856, 11, 9, 10, 13, 1, 11, 11, 28467, 12, 138, 0, 55029, 13, 4105, 0, 6, 2, 0, 1, 4, 1, 0, 28467, 14, 139, 0, 55029, 15, 4136, 0, 9, 2, 0, 1, 4, 1, 8, 28467, 16, 140, 0, 55029, 17, 4193, 1, 8, 2, 0, 1, 9, 1, 7, 28467, 18, 141, 0, 55029, 19, 4237, 0, 11, 4, 0, 1, 8, 1, 4, 1, 9, 1, 7, 40355, 20, 4, 12, 13, 14, 15, 16, 17, 18, 19, 2427, 20, 28467, 12, 52, 0, 2427, 12, 27888, 1, 28467, 2, 52, 0, 2427, 2, 28467, 3, 143, 0, 28467, 2, 144, 0, 28467, 4, 145, 0, 27888, 1, 25854, 5, 0, 25854, 6, 1, 28467, 7, 74, 0, 60966, 8, 6, 7, 678, 3, 3, 4, 8, 2, 6, 2, 3, 2, 5, 3, 5201, 6, 4009, 28467, 5, 71, 0, 28467, 6, 12, 0, 28949, 4, 2, 6, 7, 2, 2, 4, 3, 2, 2, 2, 3, 4, 40355, 6, 1, 5, 7, 63856, 4, 5, 4, 6, 2, 3, 3, 62279, 4087, 28467, 6, 71, 0, 28467, 7, 14, 0, 28949, 2, 3, 7, 8, 2, 3, 4, 4, 3, 3, 4, 3, 2, 28467, 7, 73, 0, 25854, 9, 1, 25854, 10, 0, 63856, 3, 11, 3, 10, 1, 4, 2, 28467, 12, 14, 0, 45418, 13, 4, 2, 12, 2, 2, 2, 2, 10, 3, 2, 1082, 0, 13, 60966, 10, 9, 11, 40355, 9, 2, 6, 8, 7, 10, 63856, 2, 5, 4, 9, 0, 3, 3, 2427, 5, 28467, 5, 52, 0, 2427, 5, 27888, 2, 16566, 0, 28467, 3, 52, 0, 2427, 3, 27888, 1, 25854, 2, 0, 28467, 3, 67, 0, 60966, 4, 2, 3, 25854, 3, 1, 19182, 5, 2, 4, 1, 3, 1082, 0, 5, 28467, 2, 52, 0, 2427, 2, 28467, 3, 146, 0, 28467, 4, 147, 0, 28467, 5, 148, 0, 27888, 1, 25854, 6, 0, 28467, 7, 68, 0, 60966, 8, 6, 7, 19182, 7, 6, 8, 0, 63856, 4, 2, 3, 7, 2, 4, 3, 28467, 6, 71, 0, 60966, 7, 2, 6, 1082, 1, 7, 2427, 2, 28467, 6, 52, 0, 2427, 6, 28467, 5, 149, 0, 28467, 3, 150, 0, 28467, 4, 151, 0, 27888, 2, 28467, 6, 12, 0, 28949, 4, 4, 6, 7, 4, 4, 4, 4, 4, 5, 4, 4, 4, 1082, 0, 7, 1082, 1, 0, 28467, 6, 52, 0, 2427, 6, 28467, 5, 152, 0, 28467, 4, 153, 0, 27888, 1, 35355, 4346, 2, 3, 4359, 25854, 6, 0, 63856, 5, 7, 5, 6, 0, 5, 5, 44423, 7, 4305, 28467, 6, 60, 0, 25854, 8, 1, 28467, 9, 76, 0, 60966, 10, 8, 9, 2535, 10, 5, 5, 4, 5, 8, 4, 5, 5, 6, 5, 4, 5, 4, 5, 63856, 5, 7, 5, 8, 0, 4, 4, 63856, 5, 6, 5, 7, 2, 5, 5, 44423, 6, 4340, 25854, 7, 1, 28467, 8, 76, 0, 60966, 9, 7, 8, 19182, 8, 7, 9, 0, 63856, 4, 6, 4, 8, 1, 5, 4, 64526, 25276, 2, 4361, 62279, 4346, 25854, 6, 2, 5201, 6, 4357, 25854, 6, 3, 16566, 6, 18905, 2, 16566, 3, 28467, 6, 52, 0, 2427, 6, 28467, 7, 154, 0, 28467, 5, 155, 0, 28467, 6, 156, 0, 27888, 3, 5201, 0, 4762, 28467, 8, 105, 0, 13397, 9, 0, 2535, 9, 7, 6, 7, 6, 10, 7, 6, 6, 8, 5, 7, 7, 5, 5, 5201, 10, 4421, 25854, 8, 0, 3127, 9, 8, 2, 0, 1, 2427, 9, 40355, 8, 0, 28467, 9, 157, 0, 60966, 10, 8, 9, 28467, 8, 67, 0, 60966, 9, 10, 8, 19182, 8, 10, 9, 1, 0, 28467, 9, 158, 0, 60966, 10, 8, 9, 28467, 9, 159, 0, 28467, 11, 14, 0, 19958, 11, 5, 7, 12, 7, 5, 7, 6, 7, 5, 19182, 11, 8, 10, 2, 9, 12, 63856, 7, 4, 5, 11, 2, 6, 5, 28467, 8, 8, 0, 6336, 7, 8, 160, 5, 4, 6, 5, 9, 0, 63856, 6, 8, 7, 9, 2, 5, 7, 5201, 8, 4529, 28467, 9, 129, 0, 60966, 10, 0, 9, 63856, 6, 8, 5, 10, 2, 6, 6, 63856, 6, 9, 6, 8, 0, 6, 6, 5201, 9, 4572, 28467, 8, 129, 0, 60966, 10, 0, 8, 28467, 8, 161, 0, 60966, 11, 10, 8, 63856, 6, 4, 6, 11, 0, 6, 7, 63856, 6, 9, 7, 4, 0, 6, 5, 28467, 8, 162, 0, 6336, 5, 8, 163, 5, 4, 6, 7, 9, 0, 63856, 7, 8, 6, 9, 0, 5, 6, 44423, 8, 4619, 28467, 9, 3, 0, 6336, 5, 9, 164, 7, 4, 6, 6, 10, 0, 63856, 5, 8, 6, 10, 0, 6, 6, 5201, 8, 4650, 24460, 8, 79, 0, 28467, 9, 165, 0, 60966, 10, 8, 9, 19182, 9, 8, 10, 1, 0, 63856, 6, 8, 7, 9, 1, 7, 6, 62279, 4760, 28467, 9, 166, 0, 6336, 5, 9, 167, 5, 4, 7, 5, 10, 0, 63856, 6, 9, 6, 10, 2, 5, 6, 44423, 9, 4715, 24460, 10, 132, 0, 28467, 11, 168, 0, 28467, 12, 107, 0, 8354, 13, 10, 2, 11, 12, 28467, 10, 169, 0, 60966, 11, 13, 10, 19182, 10, 13, 11, 1, 4, 63856, 6, 9, 7, 10, 2, 6, 6, 5201, 9, 4737, 25854, 9, 0, 3127, 10, 9, 2, 0, 1, 63856, 6, 9, 5, 10, 2, 5, 5, 62279, 4752, 28467, 10, 12, 0, 44958, 11, 10, 63856, 7, 9, 7, 11, 1, 7, 7, 63856, 7, 8, 7, 9, 0, 7, 7, 2427, 8, 28467, 8, 52, 0, 2427, 8, 28467, 8, 170, 0, 28467, 6, 171, 0, 28467, 7, 172, 0, 27888, 3, 28467, 9, 60, 0, 2535, 1, 7, 7, 6, 7, 10, 7, 8, 8, 9, 6, 7, 8, 7, 8, 63856, 8, 9, 8, 10, 1, 8, 6, 44423, 9, 4845, 28467, 10, 74, 0, 60966, 11, 0, 10, 56867, 7, 6, 173, 8, 11, 7, 8, 0, 10, 6, 6, 8, 7, 7, 1, 63856, 7, 9, 6, 10, 2, 6, 7, 63856, 6, 10, 7, 9, 2, 8, 7, 5201, 10, 4880, 28467, 9, 74, 0, 60966, 11, 0, 9, 63856, 6, 1, 6, 11, 0, 7, 8, 63856, 8, 10, 8, 1, 0, 7, 6, 28467, 9, 12, 0, 63856, 7, 4, 6, 9, 0, 8, 8, 24460, 9, 79, 0, 3127, 10, 9, 1, 1, 63856, 8, 5, 8, 10, 2, 8, 8, 50439, 7, 7, 4, 7, 6, 6, 9, 7, 6, 1, 7, 6, 7, 5201, 9, 4968, 60966, 9, 0, 4, 45063, 5, 4, 9, 63856, 6, 9, 7, 4, 0, 7, 6, 28467, 9, 14, 0, 45418, 10, 6, 8, 9, 7, 7, 6, 8, 4, 7, 6, 63856, 6, 4, 8, 10, 2, 6, 6, 62279, 4909, 2427, 5, 28467, 9, 52, 0, 2427, 9, 28467, 5, 174, 0, 28467, 6, 175, 0, 28467, 7, 176, 0, 27888, 4, 24460, 8, 121, 0, 28467, 9, 177, 0, 60966, 10, 8, 9, 19182, 9, 8, 10, 1, 0, 63856, 6, 8, 6, 9, 1, 6, 6, 5201, 8, 5039, 678, 7, 6, 6, 1, 6, 9, 6, 5, 6, 0, 6, 63856, 6, 8, 6, 9, 2, 6, 7, 63856, 6, 9, 7, 8, 1, 7, 6, 5201, 9, 5072, 34678, 2, 5, 7, 6, 6, 5, 7, 8, 6, 5, 0, 6, 5, 63856, 6, 9, 6, 8, 2, 7, 6, 2427, 9, 28467, 8, 52, 0, 2427, 8, 28467, 5, 178, 0, 28467, 6, 179, 0, 28467, 7, 180, 0, 27888, 2, 28467, 8, 74, 0, 60966, 9, 1, 8, 28467, 8, 14, 0, 56867, 6, 7, 181, 5, 8, 6, 5, 0, 10, 6, 7, 6, 7, 7, 9, 63856, 6, 8, 7, 10, 0, 7, 5, 5201, 8, 5166, 28467, 9, 14, 0, 60966, 10, 1, 9, 24460, 9, 61, 0, 49131, 7, 9, 6, 120, 0, 7, 10, 11, 5, 7, 182, 0, 63856, 7, 8, 7, 11, 1, 7, 7, 5201, 8, 5187, 28467, 8, 14, 0, 60966, 9, 1, 8, 63856, 6, 8, 6, 9, 1, 6, 5, 62279, 5199, 28467, 9, 12, 0, 63856, 7, 8, 7, 9, 0, 7, 7, 63856, 7, 3, 7, 8, 0, 7, 7, 28467, 8, 74, 0, 60966, 9, 1, 8, 28467, 8, 16, 0, 56867, 7, 7, 132, 5, 8, 7, 6, 0, 10, 7, 5, 5, 7, 5, 9, 63856, 5, 8, 6, 10, 1, 7, 6, 5201, 8, 5279, 28467, 9, 16, 0, 60966, 10, 1, 9, 24460, 9, 61, 0, 49131, 7, 9, 6, 183, 0, 5, 10, 11, 7, 5, 184, 0, 63856, 7, 8, 7, 11, 2, 5, 6, 5201, 8, 5300, 28467, 8, 16, 0, 60966, 9, 1, 8, 63856, 7, 8, 7, 9, 2, 7, 7, 62279, 5312, 28467, 9, 32, 0, 63856, 7, 8, 5, 9, 2, 5, 7, 63856, 5, 4, 6, 8, 2, 6, 5, 13397, 8, 0, 28467, 9, 137, 0, 6336, 6, 8, 185, 5, 9, 6, 7, 10, 0, 63856, 5, 8, 5, 10, 1, 5, 7, 5201, 8, 5374, 24460, 9, 121, 0, 28467, 10, 186, 0, 60966, 11, 9, 10, 19182, 10, 9, 11, 1, 0, 63856, 7, 8, 6, 10, 1, 6, 6, 63856, 5, 9, 6, 8, 2, 6, 5, 5201, 9, 5405, 678, 6, 6, 6, 3, 6, 8, 7, 5, 5, 0, 5, 63856, 7, 9, 7, 8, 0, 6, 5, 63856, 5, 8, 5, 9, 2, 5, 7, 5201, 8, 5438, 34678, 4, 7, 5, 7, 7, 7, 7, 9, 7, 6, 0, 7, 5, 63856, 7, 8, 7, 9, 2, 5, 5, 2427, 8, 28467, 8, 52, 0, 2427, 8, 28467, 16, 187, 0, 28467, 17, 188, 0, 28467, 15, 189, 0, 27888, 6, 28467, 7, 52, 0, 24460, 18, 79, 0, 28467, 19, 80, 0, 60966, 20, 18, 19, 19182, 19, 18, 20, 1, 0, 28949, 15, 15, 19, 18, 15, 16, 16, 16, 17, 15, 17, 16, 15, 63856, 16, 19, 16, 18, 1, 16, 15, 44423, 19, 5541, 28467, 18, 74, 0, 60966, 20, 0, 18, 28467, 18, 14, 0, 50439, 15, 16, 20, 15, 15, 16, 21, 15, 16, 18, 15, 16, 16, 63856, 16, 19, 17, 21, 1, 17, 17, 63856, 16, 18, 16, 19, 0, 16, 16, 44423, 18, 5588, 28467, 19, 74, 0, 60966, 20, 0, 19, 28467, 19, 190, 0, 56867, 16, 17, 121, 16, 19, 17, 15, 0, 21, 16, 16, 16, 16, 16, 20, 63856, 17, 18, 15, 21, 0, 17, 15, 63856, 15, 19, 16, 18, 1, 16, 15, 44423, 19, 5722, 28467, 18, 12, 0, 60966, 20, 0, 18, 63856, 17, 7, 17, 20, 0, 16, 15, 28467, 18, 60, 0, 6336, 16, 7, 191, 16, 18, 17, 15, 20, 0, 63856, 16, 18, 16, 20, 1, 15, 16, 44423, 18, 5665, 28467, 20, 12, 0, 44958, 21, 20, 6336, 17, 7, 192, 15, 21, 15, 15, 20, 0, 63856, 16, 18, 15, 20, 1, 15, 17, 5201, 18, 5685, 28467, 18, 12, 0, 44958, 20, 18, 63856, 15, 18, 17, 20, 0, 17, 15, 62279, 5697, 60966, 20, 7, 1, 63856, 16, 18, 15, 20, 1, 15, 16, 28467, 20, 12, 0, 49131, 16, 20, 17, 114, 0, 17, 18, 21, 17, 15, 193, 0, 63856, 16, 19, 16, 21, 1, 17, 15, 5201, 19, 5731, 28467, 18, 28, 0, 2427, 18, 28467, 18, 14, 0, 19958, 18, 15, 15, 19, 15, 15, 15, 15, 15, 16, 63856, 15, 8, 17, 19, 1, 15, 15, 25854, 18, 0, 3127, 19, 18, 1, 0, 63856, 16, 9, 17, 19, 1, 15, 15, 28467, 10, 52, 0, 35355, 6114, 12, 13, 6129, 56048, 6094, 11, 28467, 18, 138, 0, 60966, 19, 9, 18, 19182, 18, 9, 19, 0, 28467, 18, 139, 0, 60966, 19, 9, 18, 19182, 18, 9, 19, 0, 63856, 17, 10, 17, 18, 2, 17, 17, 28467, 18, 71, 0, 60966, 19, 10, 18, 28949, 17, 16, 19, 18, 16, 17, 16, 15, 15, 16, 17, 16, 17, 5201, 18, 6091, 28467, 18, 73, 0, 60966, 19, 10, 18, 63856, 15, 14, 16, 19, 2, 16, 16, 25854, 18, 1, 28467, 19, 60, 0, 6336, 16, 14, 194, 15, 19, 16, 15, 20, 0, 63856, 15, 19, 15, 20, 1, 15, 15, 44423, 19, 5910, 28467, 20, 12, 0, 44958, 21, 20, 6336, 16, 14, 195, 15, 21, 16, 16, 20, 0, 63856, 15, 19, 16, 20, 2, 15, 17, 5201, 19, 5930, 28467, 19, 12, 0, 44958, 20, 19, 63856, 15, 19, 16, 20, 2, 16, 15, 62279, 5942, 60966, 20, 14, 1, 63856, 15, 19, 15, 20, 0, 15, 16, 28467, 20, 12, 0, 28467, 21, 196, 0, 3127, 22, 18, 3, 19, 20, 21, 28949, 16, 16, 22, 18, 16, 16, 16, 15, 15, 15, 16, 16, 16, 63856, 16, 19, 17, 18, 1, 16, 15, 44423, 19, 6008, 60966, 18, 14, 1, 34678, 8, 16, 16, 15, 16, 16, 16, 20, 15, 16, 18, 15, 16, 63856, 17, 19, 17, 20, 1, 17, 15, 63856, 16, 18, 16, 19, 2, 16, 15, 44423, 18, 6055, 25854, 19, 1, 60966, 20, 14, 2, 3127, 21, 19, 3, 20, 3, 4, 28949, 15, 16, 21, 19, 15, 15, 17, 15, 15, 16, 15, 16, 16, 63856, 15, 18, 17, 19, 1, 16, 15, 5201, 18, 6077, 28467, 18, 28, 0, 64526, 63856, 16, 13, 16, 18, 2, 16, 15, 25276, 12, 6131, 64526, 62279, 6114, 60966, 18, 14, 1, 63856, 16, 8, 16, 18, 0, 16, 17, 62279, 5795, 64526, 62279, 6108, 28467, 18, 140, 0, 60966, 19, 9, 18, 19182, 18, 9, 19, 1, 11, 64526, 25276, 12, 6133, 62279, 6114, 28467, 18, 141, 0, 60966, 19, 9, 18, 19182, 18, 9, 19, 0, 18905, 12, 16566, 13, 2427, 13, 28467, 18, 197, 0, 2427, 18, 28467, 18, 52, 0, 2427, 18, 28467, 7, 198, 0, 28467, 8, 199, 0, 27888, 2, 28467, 9, 74, 0, 60966, 10, 1, 9, 28467, 9, 14, 0, 56867, 7, 7, 8, 7, 9, 7, 8, 0, 11, 7, 7, 8, 7, 7, 10, 63856, 8, 9, 7, 11, 0, 7, 8, 5201, 9, 6227, 28467, 10, 14, 0, 60966, 11, 1, 10, 24460, 10, 61, 0, 49131, 7, 10, 8, 173, 0, 7, 11, 12, 8, 7, 200, 0, 63856, 7, 9, 7, 12, 2, 7, 8, 5201, 9, 6248, 28467, 9, 14, 0, 60966, 10, 1, 9, 63856, 7, 9, 7, 10, 2, 7, 8, 62279, 6260, 28467, 10, 28, 0, 63856, 8, 9, 8, 10, 2, 7, 8, 63856, 7, 3, 7, 9, 1, 7, 8, 13397, 9, 0, 28467, 10, 105, 0, 49131, 7, 10, 7, 8, 0, 8, 9, 11, 8, 7, 201, 0, 5201, 11, 6297, 24460, 9, 202, 0, 2427, 9, 5201, 3, 6347, 28467, 9, 203, 0, 60966, 10, 0, 9, 24460, 9, 132, 0, 28467, 11, 204, 0, 28467, 12, 107, 0, 8354, 13, 9, 2, 11, 12, 28467, 9, 205, 0, 19182, 11, 0, 10, 2, 13, 9, 63856, 8, 9, 8, 11, 0, 8, 7, 62279, 6355, 63856, 7, 9, 8, 0, 1, 8, 7, 63856, 8, 4, 7, 9, 1, 7, 8, 24460, 9, 132, 0, 28467, 10, 206, 0, 28467, 11, 107, 0, 8354, 12, 9, 2, 10, 11, 28467, 9, 169, 0, 60966, 10, 12, 9, 19182, 9, 12, 10, 1, 4, 28949, 8, 8, 9, 10, 8, 8, 7, 7, 8, 8, 7, 7, 7, 5201, 10, 6418, 24460, 9, 202, 0, 2427, 9, 24460, 9, 183, 0, 28467, 10, 207, 0, 60966, 11, 9, 10, 19182, 10, 9, 11, 1, 4, 63856, 7, 5, 7, 10, 0, 7, 8, 28467, 9, 208, 0, 60966, 10, 4, 9, 28467, 9, 209, 0, 19182, 11, 4, 10, 1, 9, 5201, 11, 6475, 63856, 8, 9, 8, 4, 0, 8, 8, 62279, 6533, 28467, 10, 158, 0, 60966, 11, 4, 10, 28467, 10, 12, 0, 28467, 12, 14, 0, 19958, 12, 7, 7, 13, 7, 8, 8, 7, 8, 8, 19182, 12, 4, 11, 2, 10, 13, 28467, 10, 210, 0, 45418, 11, 7, 7, 10, 7, 7, 8, 7, 12, 7, 7, 63856, 8, 9, 8, 11, 1, 8, 7, 63856, 8, 6, 8, 9, 2, 8, 8, 24460, 9, 121, 0, 28467, 10, 186, 0, 60966, 11, 9, 10, 19182, 10, 9, 11, 1, 5, 63856, 8, 9, 8, 10, 2, 8, 8, 5201, 9, 6610, 24460, 10, 183, 0, 8354, 11, 10, 1, 5, 28467, 10, 211, 0, 60966, 12, 11, 10, 19182, 10, 11, 12, 0, 6336, 7, 10, 212, 7, 6, 7, 7, 11, 0, 63856, 8, 9, 8, 11, 0, 8, 7, 5201, 9, 6623, 63856, 7, 9, 7, 5, 1, 7, 8, 62279, 6635, 24460, 10, 202, 0, 63856, 8, 9, 7, 10, 1, 7, 7, 2427, 9, 28467, 9, 52, 0, 2427, 9, 28467, 8, 213, 0, 28467, 9, 214, 0, 27888, 3, 55029, 10, 9104, 1, 17, 0, 0, 63856, 8, 7, 8, 10, 0, 8, 8, 25854, 10, 0, 28467, 11, 215, 0, 60966, 12, 10, 11, 19182, 11, 10, 12, 1, 0, 28949, 9, 9, 11, 10, 9, 9, 8, 9, 8, 8, 8, 9, 9, 63856, 9, 11, 8, 10, 2, 9, 9, 44423, 11, 6732, 28949, 8, 8, 1, 10, 9, 9, 9, 8, 8, 9, 9, 9, 9, 63856, 8, 11, 8, 10, 1, 8, 8, 63856, 8, 10, 8, 11, 2, 9, 9, 44423, 10, 6776, 25854, 11, 1, 3127, 12, 11, 1, 1, 28467, 11, 110, 0, 49131, 9, 11, 8, 120, 0, 9, 12, 13, 9, 9, 216, 0, 63856, 8, 10, 9, 13, 0, 8, 9, 63856, 9, 11, 8, 10, 2, 8, 9, 44423, 11, 6813, 24460, 10, 79, 0, 28467, 12, 80, 0, 60966, 13, 10, 12, 19182, 12, 10, 13, 1, 1, 63856, 9, 11, 8, 12, 1, 9, 8, 5201, 11, 6822, 28467, 10, 28, 0, 2427, 10, 28467, 10, 4, 0, 6336, 9, 0, 217, 8, 10, 9, 8, 11, 0, 5201, 11, 7376, 25854, 10, 2, 28467, 11, 10, 0, 60966, 12, 1, 11, 28467, 11, 11, 0, 28467, 13, 13, 0, 28467, 14, 14, 0, 28467, 15, 218, 0, 3127, 16, 10, 5, 12, 11, 13, 14, 15, 63856, 9, 10, 8, 16, 0, 9, 8, 5201, 10, 6930, 25854, 11, 2, 28467, 12, 21, 0, 60966, 13, 1, 12, 28467, 12, 22, 0, 28467, 14, 23, 0, 28467, 15, 12, 0, 28467, 16, 32, 0, 3127, 17, 11, 5, 13, 12, 14, 15, 16, 63856, 8, 10, 9, 17, 2, 9, 8, 63856, 9, 11, 9, 10, 2, 9, 9, 5201, 11, 6965, 25854, 10, 3, 28467, 12, 24, 0, 60966, 13, 1, 12, 3127, 12, 10, 1, 13, 63856, 8, 11, 8, 12, 0, 8, 9, 63856, 9, 10, 9, 11, 1, 9, 9, 5201, 10, 7010, 25854, 11, 3, 28467, 12, 25, 0, 60966, 13, 1, 12, 28467, 12, 12, 0, 28467, 14, 219, 0, 3127, 15, 11, 3, 13, 12, 14, 63856, 9, 10, 8, 15, 1, 9, 9, 63856, 9, 11, 9, 10, 1, 9, 9, 5201, 11, 7045, 25854, 10, 3, 28467, 12, 26, 0, 60966, 13, 1, 12, 3127, 12, 10, 1, 13, 63856, 8, 11, 8, 12, 0, 8, 8, 63856, 9, 10, 9, 11, 2, 9, 8, 5201, 10, 7089, 28467, 11, 27, 0, 60966, 12, 1, 11, 13397, 11, 12, 28467, 12, 220, 0, 6336, 9, 11, 221, 9, 12, 8, 8, 13, 0, 63856, 8, 10, 9, 13, 1, 9, 8, 63856, 9, 11, 9, 10, 2, 9, 9, 5201, 11, 7133, 28467, 10, 29, 0, 60966, 12, 1, 10, 13397, 10, 12, 28467, 12, 220, 0, 6336, 9, 10, 222, 9, 12, 9, 9, 13, 0, 63856, 9, 11, 9, 13, 2, 9, 8, 63856, 8, 10, 8, 11, 1, 8, 8, 5201, 10, 7178, 24460, 11, 79, 0, 28467, 12, 80, 0, 60966, 13, 11, 12, 28467, 12, 30, 0, 60966, 14, 1, 12, 19182, 12, 11, 13, 1, 14, 63856, 8, 10, 9, 12, 2, 9, 8, 63856, 8, 11, 9, 10, 1, 9, 9, 5201, 11, 7231, 28467, 10, 30, 0, 60966, 12, 1, 10, 28467, 10, 74, 0, 60966, 13, 12, 10, 28467, 10, 190, 0, 34678, 10, 8, 8, 9, 9, 9, 9, 12, 8, 9, 13, 8, 8, 63856, 8, 11, 8, 12, 1, 9, 9, 63856, 9, 10, 8, 11, 2, 8, 9, 5201, 10, 7322, 24460, 11, 3, 0, 28467, 12, 30, 0, 60966, 13, 1, 12, 28467, 12, 223, 0, 60966, 14, 13, 12, 55029, 12, 9543, 1, 9, 0, 0, 19182, 15, 13, 14, 1, 12, 8354, 12, 11, 1, 15, 28467, 11, 224, 0, 60966, 13, 12, 11, 28467, 11, 30, 0, 60966, 12, 1, 11, 28467, 11, 74, 0, 60966, 14, 12, 11, 6336, 9, 13, 225, 9, 14, 9, 8, 11, 0, 63856, 9, 10, 8, 11, 0, 9, 8, 63856, 9, 11, 9, 10, 0, 8, 8, 5201, 11, 7374, 28467, 10, 30, 0, 60966, 12, 1, 10, 28467, 10, 226, 0, 60966, 13, 12, 10, 55029, 10, 9651, 1, 14, 2, 0, 0, 4, 0, 3, 19182, 14, 12, 13, 1, 10, 63856, 8, 11, 8, 14, 2, 8, 8, 2427, 11, 28467, 10, 5, 0, 6336, 9, 0, 227, 9, 10, 9, 9, 11, 0, 5201, 11, 8321, 25854, 10, 3, 28467, 11, 31, 0, 60966, 12, 1, 11, 3127, 11, 10, 1, 12, 63856, 9, 10, 9, 11, 0, 9, 8, 5201, 10, 7454, 25854, 11, 4, 28467, 12, 33, 0, 60966, 13, 1, 12, 28467, 12, 12, 0, 28467, 14, 228, 0, 3127, 15, 11, 3, 13, 12, 14, 63856, 8, 10, 8, 15, 0, 8, 8, 63856, 9, 11, 8, 10, 1, 8, 9, 5201, 11, 7499, 25854, 10, 4, 28467, 12, 34, 0, 60966, 13, 1, 12, 28467, 12, 14, 0, 28467, 14, 229, 0, 3127, 15, 10, 3, 13, 12, 14, 63856, 8, 11, 8, 15, 0, 8, 8, 63856, 8, 10, 8, 11, 1, 8, 8, 5201, 10, 7544, 25854, 11, 4, 28467, 12, 36, 0, 60966, 13, 1, 12, 28467, 12, 12, 0, 28467, 14, 228, 0, 3127, 15, 11, 3, 13, 12, 14, 63856, 8, 10, 9, 15, 2, 8, 8, 63856, 9, 11, 9, 10, 0, 9, 9, 5201, 11, 7626, 28467, 10, 38, 0, 28467, 12, 230, 0, 28467, 13, 231, 0, 46371, 14, 3, 10, 12, 13, 28467, 10, 208, 0, 60966, 12, 14, 10, 28467, 10, 37, 0, 60966, 13, 1, 10, 63856, 9, 10, 9, 13, 2, 9, 9, 44423, 10, 7612, 28467, 13, 38, 0, 63856, 9, 10, 9, 13, 1, 9, 8, 19182, 13, 14, 12, 1, 10, 63856, 9, 11, 9, 13, 2, 9, 9, 63856, 9, 10, 9, 11, 0, 9, 8, 5201, 10, 7671, 25854, 11, 4, 28467, 12, 39, 0, 60966, 13, 1, 12, 28467, 12, 14, 0, 28467, 14, 232, 0, 3127, 15, 11, 3, 13, 12, 14, 63856, 9, 10, 9, 15, 1, 9, 9, 63856, 8, 11, 8, 10, 1, 8, 8, 5201, 11, 7716, 25854, 10, 4, 28467, 12, 40, 0, 60966, 13, 1, 12, 28467, 12, 14, 0, 28467, 14, 218, 0, 3127, 15, 10, 3, 13, 12, 14, 63856, 9, 11, 8, 15, 2, 8, 8, 63856, 9, 10, 8, 11, 1, 8, 9, 5201, 10, 7785, 28467, 11, 42, 0, 28467, 12, 233, 0, 28467, 13, 234, 0, 28467, 14, 235, 0, 28467, 15, 236, 0, 46371, 16, 5, 11, 12, 13, 14, 15, 28467, 11, 208, 0, 60966, 12, 16, 11, 28467, 11, 41, 0, 60966, 13, 1, 11, 19182, 11, 16, 12, 1, 13, 63856, 8, 10, 8, 11, 0, 9, 8, 63856, 9, 11, 9, 10, 2, 9, 9, 5201, 11, 7829, 28467, 10, 43, 0, 60966, 12, 1, 10, 13397, 10, 12, 28467, 12, 220, 0, 6336, 8, 10, 237, 9, 12, 9, 9, 13, 0, 63856, 9, 11, 8, 13, 1, 9, 9, 63856, 8, 10, 8, 11, 2, 8, 9, 5201, 10, 7873, 28467, 11, 29, 0, 60966, 12, 1, 11, 13397, 11, 12, 28467, 12, 220, 0, 6336, 8, 11, 238, 9, 12, 9, 8, 13, 0, 63856, 9, 10, 8, 13, 1, 8, 8, 63856, 8, 11, 9, 10, 1, 8, 8, 5201, 11, 7918, 25854, 10, 4, 28467, 12, 44, 0, 60966, 13, 1, 12, 28467, 12, 14, 0, 28467, 14, 228, 0, 3127, 15, 10, 3, 13, 12, 14, 63856, 9, 11, 8, 15, 2, 9, 9, 63856, 9, 10, 9, 11, 2, 9, 9, 5201, 10, 8062, 28467, 11, 239, 0, 60966, 12, 1, 11, 24460, 11, 61, 0, 6336, 9, 12, 240, 9, 11, 8, 9, 13, 0, 63856, 9, 11, 8, 13, 2, 9, 8, 44423, 11, 8054, 28467, 12, 239, 0, 60966, 13, 1, 12, 13397, 12, 13, 28467, 13, 105, 0, 6336, 9, 12, 241, 8, 13, 8, 8, 14, 0, 63856, 9, 12, 8, 14, 0, 8, 8, 5201, 12, 8046, 24460, 13, 132, 0, 28467, 14, 242, 0, 28467, 15, 107, 0, 8354, 16, 13, 2, 14, 15, 28467, 13, 169, 0, 60966, 14, 16, 13, 28467, 13, 239, 0, 60966, 15, 1, 13, 19182, 13, 16, 14, 1, 15, 63856, 9, 12, 9, 13, 1, 8, 9, 63856, 9, 11, 9, 12, 0, 9, 9, 63856, 8, 10, 8, 11, 0, 8, 8, 63856, 8, 11, 8, 10, 0, 9, 9, 5201, 11, 8319, 28467, 10, 243, 0, 60966, 12, 1, 10, 24460, 10, 61, 0, 6336, 9, 12, 244, 8, 10, 9, 8, 13, 0, 63856, 9, 10, 8, 13, 1, 9, 9, 44423, 10, 8311, 24460, 12, 79, 0, 28467, 13, 80, 0, 60966, 14, 12, 13, 28467, 13, 243, 0, 60966, 15, 1, 13, 19182, 13, 12, 14, 1, 15, 63856, 8, 12, 8, 13, 1, 8, 8, 5201, 12, 8185, 28467, 13, 243, 0, 60966, 14, 1, 13, 28467, 13, 74, 0, 60966, 15, 14, 13, 28467, 13, 232, 0, 34678, 13, 8, 8, 9, 9, 8, 8, 14, 9, 8, 15, 8, 8, 63856, 8, 12, 9, 14, 2, 8, 8, 63856, 8, 13, 9, 12, 0, 9, 8, 5201, 13, 8255, 24460, 12, 3, 0, 28467, 14, 243, 0, 60966, 15, 1, 14, 8354, 14, 12, 1, 15, 28467, 12, 224, 0, 60966, 15, 14, 12, 28467, 12, 243, 0, 60966, 14, 1, 12, 28467, 12, 74, 0, 60966, 16, 14, 12, 6336, 8, 15, 245, 8, 16, 8, 9, 12, 0, 63856, 9, 13, 8, 12, 0, 8, 8, 63856, 8, 12, 8, 13, 1, 8, 9, 5201, 12, 8303, 28467, 13, 243, 0, 60966, 14, 1, 13, 28467, 13, 226, 0, 60966, 15, 14, 13, 55029, 13, 10287, 1, 10, 0, 0, 19182, 16, 14, 15, 1, 13, 63856, 8, 12, 8, 16, 2, 8, 8, 63856, 8, 10, 9, 12, 2, 9, 8, 63856, 8, 11, 8, 10, 2, 8, 9, 2427, 11, 28467, 10, 7, 0, 6336, 9, 0, 246, 9, 10, 8, 9, 11, 0, 5201, 11, 8674, 28467, 10, 247, 0, 60966, 11, 1, 10, 63856, 8, 4, 9, 11, 1, 8, 9, 24460, 10, 79, 0, 28467, 11, 80, 0, 60966, 12, 10, 11, 19182, 11, 10, 12, 1, 4, 63856, 9, 10, 8, 11, 1, 8, 8, 5201, 10, 8417, 28467, 11, 74, 0, 60966, 12, 4, 11, 28467, 11, 248, 0, 34678, 11, 9, 9, 9, 9, 9, 9, 13, 9, 9, 12, 9, 8, 63856, 8, 10, 8, 13, 0, 8, 9, 63856, 8, 11, 8, 10, 1, 8, 9, 5201, 11, 8492, 24460, 10, 3, 0, 28467, 12, 223, 0, 60966, 13, 4, 12, 55029, 12, 10373, 1, 8, 0, 0, 19182, 14, 4, 13, 1, 12, 8354, 12, 10, 1, 14, 28467, 10, 224, 0, 60966, 13, 12, 10, 28467, 10, 74, 0, 60966, 12, 4, 10, 6336, 9, 13, 249, 8, 12, 8, 8, 10, 0, 63856, 8, 11, 8, 10, 0, 9, 9, 63856, 9, 10, 9, 11, 2, 9, 8, 5201, 10, 8567, 24460, 11, 3, 0, 28467, 12, 223, 0, 60966, 13, 4, 12, 55029, 12, 10477, 1, 8, 0, 0, 19182, 14, 4, 13, 1, 12, 8354, 12, 11, 1, 14, 28467, 11, 224, 0, 60966, 13, 12, 11, 28467, 11, 74, 0, 60966, 12, 4, 11, 6336, 8, 13, 250, 8, 12, 9, 8, 11, 0, 63856, 9, 10, 8, 11, 1, 8, 8, 63856, 8, 11, 9, 10, 2, 9, 8, 5201, 11, 8609, 28467, 10, 226, 0, 60966, 12, 4, 10, 55029, 10, 10581, 1, 11, 1, 0, 0, 4, 19182, 13, 4, 12, 1, 10, 63856, 9, 11, 9, 13, 2, 8, 8, 63856, 9, 10, 9, 11, 1, 8, 8, 5201, 10, 8672, 24460, 11, 181, 0, 28467, 12, 251, 0, 60966, 13, 11, 12, 19182, 12, 11, 13, 1, 1, 28467, 11, 74, 0, 60966, 13, 12, 11, 28467, 11, 252, 0, 34678, 11, 9, 9, 9, 8, 9, 8, 12, 8, 9, 13, 9, 9, 63856, 9, 10, 8, 12, 0, 8, 9, 2427, 10, 25854, 10, 4, 28467, 11, 253, 0, 60966, 12, 1, 11, 28467, 11, 218, 0, 19958, 11, 9, 9, 13, 9, 9, 9, 9, 9, 9, 28467, 11, 218, 0, 3127, 14, 10, 3, 12, 13, 11, 28949, 9, 9, 14, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 63856, 8, 11, 8, 10, 0, 8, 9, 44423, 11, 8795, 25854, 10, 3, 28467, 12, 23, 0, 60966, 13, 1, 12, 28467, 12, 219, 0, 19958, 12, 9, 8, 14, 8, 9, 9, 8, 8, 9, 28467, 12, 32, 0, 3127, 15, 10, 3, 13, 14, 12, 28949, 8, 9, 15, 10, 9, 9, 8, 8, 9, 9, 8, 8, 9, 63856, 9, 11, 8, 10, 0, 9, 8, 5201, 11, 8804, 28467, 10, 28, 0, 2427, 10, 28467, 10, 38, 0, 60966, 11, 1, 10, 28467, 10, 231, 0, 6336, 9, 11, 254, 9, 10, 9, 8, 12, 0, 5201, 12, 8969, 25854, 10, 5, 28467, 11, 255, 0, 60966, 12, 1, 11, 3127, 11, 10, 1, 12, 63856, 8, 5, 9, 11, 2, 9, 8, 25854, 10, 5, 28467, 11, 256, 0, 60966, 12, 1, 11, 3127, 11, 10, 1, 12, 63856, 8, 6, 9, 11, 1, 9, 8, 24460, 10, 121, 0, 28467, 11, 186, 0, 60966, 12, 10, 11, 19182, 11, 10, 12, 1, 5, 63856, 8, 10, 8, 11, 1, 9, 9, 5201, 10, 8932, 24460, 11, 121, 0, 28467, 12, 186, 0, 60966, 13, 11, 12, 19182, 12, 11, 13, 1, 6, 63856, 8, 10, 8, 12, 2, 9, 8, 63856, 8, 11, 9, 10, 0, 9, 8, 5201, 11, 8967, 56867, 8, 8, 257, 8, 5, 9, 8, 0, 10, 8, 9, 8, 8, 8, 6, 63856, 8, 11, 9, 10, 1, 8, 9, 2427, 11, 28467, 10, 38, 0, 60966, 11, 1, 10, 28467, 10, 258, 0, 49131, 8, 10, 9, 61, 0, 8, 11, 12, 9, 8, 259, 0, 5201, 12, 9003, 28467, 10, 28, 0, 2427, 10, 28467, 10, 255, 0, 60966, 11, 1, 10, 3127, 10, 7, 1, 11, 63856, 8, 11, 8, 10, 2, 8, 9, 5201, 11, 9048, 28467, 10, 256, 0, 60966, 12, 1, 10, 3127, 10, 7, 1, 12, 63856, 9, 11, 9, 10, 1, 8, 9, 63856, 9, 10, 9, 11, 2, 8, 9, 5201, 10, 9096, 28467, 11, 255, 0, 60966, 12, 1, 11, 28467, 11, 256, 0, 60966, 13, 1, 11, 49131, 8, 13, 9, 120, 0, 8, 12, 11, 9, 8, 260, 0, 63856, 9, 10, 9, 11, 2, 8, 8, 2427, 10, 28467, 10, 52, 0, 2427, 10, 28467, 10, 261, 0, 28467, 9, 262, 0, 27888, 2, 13397, 11, 0, 28467, 12, 105, 0, 6336, 9, 11, 263, 9, 12, 9, 9, 13, 0, 63856, 9, 11, 9, 13, 2, 9, 9, 5201, 11, 9177, 24460, 12, 132, 0, 28467, 13, 264, 0, 8354, 14, 12, 1, 13, 28467, 12, 265, 0, 60966, 13, 14, 12, 19182, 12, 14, 13, 1, 0, 63856, 9, 11, 9, 12, 0, 9, 10, 63856, 9, 3, 9, 11, 2, 9, 9, 28949, 10, 10, 3, 11, 9, 10, 9, 9, 10, 9, 10, 9, 10, 5201, 11, 9208, 28467, 11, 28, 0, 2427, 11, 24460, 11, 121, 0, 28467, 12, 14, 0, 60966, 13, 3, 12, 3127, 12, 11, 1, 13, 63856, 9, 4, 9, 12, 0, 9, 9, 24460, 11, 121, 0, 28467, 12, 16, 0, 60966, 13, 3, 12, 3127, 12, 11, 1, 13, 63856, 9, 5, 9, 12, 0, 9, 9, 24460, 11, 121, 0, 28467, 12, 18, 0, 60966, 13, 3, 12, 3127, 12, 11, 1, 13, 63856, 9, 6, 10, 12, 0, 9, 9, 24460, 11, 121, 0, 28467, 12, 20, 0, 60966, 13, 3, 12, 3127, 12, 11, 1, 13, 63856, 10, 7, 9, 12, 0, 9, 10, 24460, 11, 183, 0, 24460, 12, 183, 0, 28467, 13, 266, 0, 60966, 14, 12, 13, 28467, 13, 267, 0, 28467, 15, 14, 0, 30526, 9, 9, 9, 9, 9, 4, 9, 0, 10, 16, 9, 0, 9, 15, 19182, 15, 12, 14, 5, 13, 16, 5, 6, 7, 8354, 12, 11, 1, 15, 63856, 10, 8, 9, 12, 2, 9, 9, 28467, 11, 268, 0, 60966, 12, 8, 11, 19182, 11, 8, 12, 0, 28467, 12, 14, 0, 45418, 13, 9, 9, 12, 9, 9, 10, 9, 11, 10, 10, 6336, 9, 13, 269, 9, 4, 10, 9, 11, 0, 63856, 9, 12, 10, 11, 0, 9, 10, 5201, 12, 9451, 28467, 11, 270, 0, 60966, 13, 8, 11, 19182, 11, 8, 13, 0, 6336, 10, 11, 271, 10, 5, 9, 9, 13, 0, 63856, 9, 12, 9, 13, 2, 9, 9, 63856, 9, 11, 9, 12, 2, 9, 10, 5201, 11, 9493, 28467, 12, 272, 0, 60966, 13, 8, 12, 19182, 12, 8, 13, 0, 6336, 9, 12, 273, 9, 6, 9, 9, 13, 0, 63856, 10, 11, 10, 13, 1, 10, 9, 63856, 9, 12, 9, 11, 1, 9, 9, 5201, 12, 9535, 28467, 11, 274, 0, 60966, 13, 8, 11, 19182, 11, 8, 13, 0, 6336, 10, 11, 275, 10, 7, 10, 9, 13, 0, 63856, 9, 12, 9, 13, 0, 9, 9, 2427, 12, 28467, 11, 52, 0, 2427, 11, 28467, 5, 276, 0, 28467, 3, 277, 0, 28467, 4, 278, 0, 27888, 2, 28467, 6, 60, 0, 6336, 5, 0, 279, 4, 6, 4, 5, 7, 0, 63856, 4, 6, 4, 7, 1, 5, 5, 44423, 6, 9607, 28467, 7, 12, 0, 44958, 8, 7, 6336, 3, 0, 280, 4, 8, 3, 5, 7, 0, 63856, 5, 6, 3, 7, 2, 3, 3, 5201, 6, 9627, 28467, 6, 12, 0, 44958, 7, 6, 63856, 3, 6, 3, 7, 2, 3, 5, 62279, 9643, 28467, 7, 281, 0, 60966, 8, 0, 7, 63856, 5, 6, 3, 8, 2, 5, 4, 2427, 6, 28467, 6, 52, 0, 2427, 6, 28467, 5, 282, 0, 28467, 3, 283, 0, 28467, 4, 284, 0, 27888, 2, 63856, 3, 6, 3, 0, 2, 3, 4, 5201, 6, 9709, 28467, 7, 281, 0, 60966, 8, 0, 7, 13397, 7, 8, 28467, 8, 105, 0, 6336, 5, 7, 285, 3, 8, 3, 3, 9, 0, 63856, 3, 6, 5, 9, 1, 5, 3, 63856, 4, 7, 4, 6, 2, 4, 4, 5201, 7, 9768, 24460, 6, 132, 0, 28467, 8, 286, 0, 28467, 9, 107, 0, 8354, 10, 6, 2, 8, 9, 28467, 6, 169, 0, 60966, 8, 10, 6, 28467, 6, 281, 0, 60966, 9, 0, 6, 19182, 6, 10, 8, 1, 9, 63856, 3, 7, 4, 6, 2, 4, 3, 63856, 5, 6, 5, 7, 0, 5, 4, 5201, 6, 9822, 28467, 7, 287, 0, 28467, 8, 288, 0, 46371, 9, 2, 7, 8, 28467, 7, 208, 0, 60966, 8, 9, 7, 28467, 7, 289, 0, 60966, 10, 0, 7, 19182, 7, 9, 8, 1, 10, 63856, 4, 6, 3, 7, 1, 5, 4, 63856, 3, 7, 3, 6, 2, 5, 4, 5201, 7, 9866, 28467, 6, 73, 0, 60966, 8, 0, 6, 13397, 6, 8, 28467, 8, 105, 0, 6336, 5, 6, 290, 5, 8, 5, 3, 9, 0, 63856, 5, 7, 3, 9, 0, 5, 4, 63856, 4, 6, 4, 7, 1, 4, 3, 5201, 6, 9921, 28467, 7, 73, 0, 60966, 8, 0, 7, 28467, 7, 74, 0, 60966, 9, 8, 7, 28467, 7, 12, 0, 56867, 5, 5, 121, 4, 7, 3, 4, 0, 8, 5, 3, 4, 3, 5, 9, 63856, 5, 6, 5, 8, 2, 3, 3, 63856, 5, 7, 3, 6, 1, 3, 3, 5201, 7, 9974, 28467, 6, 73, 0, 60966, 8, 0, 6, 28467, 6, 74, 0, 60966, 9, 8, 6, 28467, 6, 291, 0, 34678, 6, 4, 5, 3, 3, 4, 3, 8, 4, 4, 9, 4, 4, 63856, 3, 7, 3, 8, 0, 3, 5, 63856, 4, 6, 4, 7, 2, 3, 4, 5201, 6, 10030, 25854, 7, 0, 28467, 8, 253, 0, 60966, 9, 0, 8, 28467, 8, 218, 0, 19958, 8, 3, 5, 10, 3, 5, 4, 4, 4, 4, 28467, 8, 218, 0, 3127, 11, 7, 3, 9, 10, 8, 63856, 3, 6, 4, 11, 0, 3, 4, 63856, 4, 7, 4, 6, 0, 4, 4, 5201, 7, 10074, 28467, 6, 292, 0, 60966, 8, 0, 6, 13397, 6, 8, 28467, 8, 220, 0, 6336, 5, 6, 293, 4, 8, 5, 5, 9, 0, 63856, 3, 7, 3, 9, 1, 5, 4, 63856, 3, 6, 3, 7, 1, 3, 4, 5201, 6, 10130, 25854, 7, 1, 28467, 8, 23, 0, 60966, 9, 0, 8, 28467, 8, 219, 0, 19958, 8, 5, 3, 10, 3, 4, 4, 3, 3, 3, 28467, 8, 32, 0, 3127, 11, 7, 3, 9, 10, 8, 63856, 5, 6, 3, 11, 1, 3, 5, 63856, 5, 7, 5, 6, 2, 5, 5, 5201, 7, 10279, 28467, 6, 289, 0, 60966, 8, 0, 6, 28467, 6, 288, 0, 49131, 3, 6, 3, 173, 0, 5, 8, 9, 5, 5, 294, 0, 63856, 3, 6, 4, 9, 0, 4, 3, 44423, 6, 10271, 25854, 8, 0, 28467, 9, 295, 0, 60966, 10, 0, 9, 28467, 9, 296, 0, 19958, 9, 5, 5, 11, 5, 5, 5, 5, 3, 3, 28467, 9, 297, 0, 3127, 12, 8, 3, 10, 11, 9, 63856, 4, 8, 4, 12, 2, 3, 4, 5201, 8, 10263, 25854, 9, 0, 28467, 10, 298, 0, 60966, 11, 0, 10, 28467, 10, 295, 0, 60966, 12, 0, 10, 28467, 10, 297, 0, 3127, 13, 9, 3, 11, 12, 10, 63856, 4, 8, 3, 13, 2, 5, 5, 63856, 3, 6, 3, 8, 2, 3, 4, 63856, 4, 7, 3, 6, 2, 3, 4, 2427, 7, 28467, 6, 52, 0, 2427, 6, 28467, 3, 299, 0, 28467, 4, 300, 0, 27888, 2, 13397, 5, 0, 28467, 6, 105, 0, 6336, 4, 5, 301, 3, 6, 3, 4, 7, 0, 63856, 4, 5, 3, 7, 1, 3, 3, 5201, 5, 10365, 24460, 6, 132, 0, 28467, 7, 242, 0, 28467, 8, 107, 0, 8354, 9, 6, 2, 7, 8, 28467, 6, 169, 0, 60966, 7, 9, 6, 19182, 6, 9, 7, 1, 0, 63856, 3, 5, 3, 6, 2, 3, 4, 2427, 5, 28467, 5, 52, 0, 2427, 5, 28467, 4, 302, 0, 28467, 3, 303, 0, 27888, 2, 28467, 5, 60, 0, 6336, 4, 0, 304, 4, 5, 4, 4, 6, 0, 63856, 3, 5, 3, 6, 1, 4, 3, 44423, 5, 10433, 28467, 6, 12, 0, 44958, 7, 6, 6336, 4, 0, 305, 4, 7, 3, 3, 6, 0, 63856, 4, 5, 4, 6, 0, 4, 3, 5201, 5, 10453, 28467, 5, 12, 0, 44958, 6, 5, 63856, 3, 5, 4, 6, 2, 4, 4, 62279, 10469, 28467, 6, 306, 0, 60966, 7, 0, 6, 63856, 3, 5, 3, 7, 1, 3, 4, 2427, 5, 28467, 5, 52, 0, 2427, 5, 28467, 3, 307, 0, 28467, 4, 308, 0, 27888, 2, 28467, 5, 60, 0, 6336, 3, 0, 309, 3, 5, 3, 3, 6, 0, 63856, 4, 5, 4, 6, 1, 3, 4, 44423, 5, 10537, 28467, 6, 12, 0, 44958, 7, 6, 6336, 3, 0, 310, 3, 7, 4, 3, 6, 0, 63856, 3, 5, 4, 6, 0, 4, 3, 5201, 5, 10557, 28467, 5, 12, 0, 44958, 6, 5, 63856, 3, 5, 3, 6, 1, 3, 4, 62279, 10573, 28467, 6, 311, 0, 60966, 7, 0, 6, 63856, 3, 5, 3, 7, 0, 3, 4, 2427, 5, 28467, 5, 52, 0, 2427, 5, 28467, 4, 312, 0, 28467, 3, 313, 0, 27888, 2, 63856, 3, 5, 3, 0, 2, 3, 3, 5201, 5, 10635, 28467, 6, 306, 0, 60966, 7, 0, 6, 13397, 6, 7, 28467, 7, 105, 0, 6336, 3, 6, 314, 4, 7, 4, 3, 8, 0, 63856, 4, 5, 3, 8, 0, 4, 3, 63856, 3, 6, 3, 5, 0, 4, 4, 5201, 6, 10694, 24460, 5, 132, 0, 28467, 7, 242, 0, 28467, 8, 107, 0, 8354, 9, 5, 2, 7, 8, 28467, 5, 169, 0, 60966, 7, 9, 5, 28467, 5, 306, 0, 60966, 8, 0, 5, 19182, 5, 9, 7, 1, 8, 63856, 4, 6, 3, 5, 0, 3, 3, 63856, 4, 5, 4, 6, 1, 4, 4, 5201, 5, 10739, 25854, 6, 0, 28467, 7, 311, 0, 60966, 8, 0, 7, 28467, 7, 12, 0, 28467, 9, 315, 0, 3127, 10, 6, 3, 8, 7, 9, 63856, 4, 5, 3, 10, 1, 4, 4, 63856, 4, 6, 4, 5, 0, 4, 4, 5201, 6, 10783, 28467, 5, 316, 0, 60966, 7, 0, 5, 13397, 5, 7, 28467, 7, 105, 0, 6336, 3, 5, 317, 4, 7, 4, 3, 8, 0, 63856, 4, 6, 4, 8, 0, 4, 4, 63856, 3, 5, 3, 6, 2, 3, 3, 5201, 5, 10836, 28467, 6, 316, 0, 60966, 7, 0, 6, 28467, 6, 74, 0, 60966, 8, 7, 6, 28467, 6, 318, 0, 34678, 6, 3, 3, 4, 4, 4, 4, 7, 4, 3, 8, 4, 3, 63856, 3, 5, 4, 7, 2, 4, 3, 63856, 3, 6, 3, 5, 0, 3, 3, 5201, 6, 10880, 28467, 5, 319, 0, 60966, 7, 0, 5, 13397, 5, 7, 28467, 7, 105, 0, 6336, 4, 5, 320, 3, 7, 4, 4, 8, 0, 63856, 3, 6, 3, 8, 1, 4, 3, 63856, 4, 5, 3, 6, 1, 3, 4, 5201, 5, 10933, 28467, 6, 319, 0, 60966, 7, 0, 6, 28467, 6, 74, 0, 60966, 8, 7, 6, 28467, 6, 318, 0, 34678, 6, 3, 4, 3, 3, 3, 4, 7, 3, 3, 8, 4, 4, 63856, 3, 5, 4, 7, 1, 3, 3, 63856, 3, 6, 3, 5, 0, 3, 4, 5201, 6, 10977, 28467, 5, 321, 0, 60966, 7, 0, 5, 13397, 5, 7, 28467, 7, 220, 0, 6336, 4, 5, 322, 3, 7, 4, 3, 8, 0, 63856, 3, 6, 4, 8, 2, 3, 3, 63856, 3, 5, 4, 6, 1, 4, 3, 5201, 5, 11022, 25854, 6, 0, 28467, 7, 323, 0, 60966, 8, 0, 7, 28467, 7, 12, 0, 28467, 9, 32, 0, 3127, 10, 6, 3, 8, 7, 9, 63856, 3, 5, 3, 10, 1, 4, 3, 63856, 3, 6, 4, 5, 0, 4, 3, 5201, 6, 11067, 24460, 5, 79, 0, 28467, 7, 80, 0, 60966, 8, 5, 7, 28467, 7, 324, 0, 60966, 9, 0, 7, 19182, 7, 5, 8, 1, 9, 63856, 4, 6, 4, 7, 0, 3, 3, 63856, 4, 5, 3, 6, 0, 3, 4, 5201, 5, 11120, 28467, 6, 324, 0, 60966, 7, 0, 6, 28467, 6, 74, 0, 60966, 8, 7, 6, 28467, 6, 325, 0, 34678, 6, 3, 3, 3, 3, 3, 3, 7, 3, 3, 8, 3, 4, 63856, 3, 5, 4, 7, 2, 4, 3, 63856, 4, 6, 3, 5, 0, 4, 4, 5201, 6, 11168, 28467, 5, 324, 0, 60966, 7, 0, 5, 28467, 5, 226, 0, 60966, 8, 7, 5, 55029, 5, 11322, 1, 10, 0, 0, 19182, 9, 7, 8, 1, 5, 63856, 4, 6, 3, 9, 1, 3, 4, 63856, 4, 5, 4, 6, 1, 4, 4, 5201, 5, 11213, 24460, 6, 79, 0, 28467, 7, 80, 0, 60966, 8, 6, 7, 28467, 7, 326, 0, 60966, 9, 0, 7, 19182, 7, 6, 8, 1, 9, 63856, 3, 5, 3, 7, 1, 3, 4, 63856, 4, 6, 3, 5, 1, 3, 4, 5201, 6, 11266, 28467, 5, 326, 0, 60966, 7, 0, 5, 28467, 5, 74, 0, 60966, 8, 7, 5, 28467, 5, 327, 0, 34678, 5, 3, 4, 3, 4, 4, 4, 7, 3, 4, 8, 3, 4, 63856, 3, 6, 3, 7, 1, 3, 4, 63856, 3, 5, 3, 6, 1, 3, 4, 5201, 5, 11314, 28467, 6, 326, 0, 60966, 7, 0, 6, 28467, 6, 226, 0, 60966, 8, 7, 6, 55029, 6, 11406, 1, 9, 0, 0, 19182, 9, 7, 8, 1, 6, 63856, 3, 5, 4, 9, 1, 3, 4, 2427, 5, 28467, 5, 52, 0, 2427, 5, 28467, 4, 328, 0, 28467, 3, 329, 0, 28467, 5, 330, 0, 27888, 2, 13397, 6, 0, 28467, 7, 105, 0, 6336, 5, 6, 331, 5, 7, 3, 3, 8, 0, 63856, 5, 6, 3, 8, 0, 3, 5, 5201, 6, 11398, 28467, 7, 74, 0, 60966, 8, 0, 7, 28467, 7, 318, 0, 34678, 7, 3, 5, 5, 5, 5, 5, 9, 5, 3, 8, 5, 3, 63856, 5, 6, 5, 9, 0, 5, 4, 2427, 6, 28467, 6, 52, 0, 2427, 6, 28467, 4, 332, 0, 28467, 3, 333, 0, 27888, 2, 13397, 5, 0, 28467, 6, 105, 0, 6336, 3, 5, 334, 3, 6, 3, 3, 7, 0, 63856, 4, 5, 4, 7, 0, 3, 4, 5201, 5, 11478, 28467, 6, 74, 0, 60966, 7, 0, 6, 28467, 6, 335, 0, 34678, 6, 3, 3, 4, 3, 3, 4, 8, 3, 3, 7, 4, 3, 63856, 4, 5, 4, 8, 1, 3, 3, 2427, 5, 28467, 5, 52, 0, 2427, 5, 27888, 4, 28467, 5, 107, 0, 28467, 6, 336, 0, 60966, 7, 5, 6, 25854, 6, 0, 19182, 8, 5, 7, 1, 6, 28467, 5, 336, 0, 60966, 6, 8, 5, 28467, 5, 337, 0, 19182, 7, 8, 6, 2, 0, 5, 28467, 5, 336, 0, 60966, 6, 7, 5, 28467, 5, 337, 0, 19182, 8, 7, 6, 2, 1, 5, 28467, 5, 336, 0, 60966, 6, 8, 5, 19182, 5, 8, 6, 1, 2, 2427, 5, 28467, 5, 52, 0, 2427, 5, 28467, 5, 338, 0, 28467, 4, 339, 0, 27888, 3, 25854, 6, 0, 28467, 7, 215, 0, 60966, 8, 6, 7, 19182, 7, 6, 8, 1, 0, 28949, 4, 4, 7, 6, 4, 4, 5, 4, 5, 5, 4, 4, 4, 63856, 5, 7, 4, 6, 1, 5, 4, 44423, 7, 11649, 13397, 6, 1, 28467, 8, 105, 0, 49131, 5, 8, 5, 114, 0, 5, 6, 9, 4, 4, 340, 0, 63856, 4, 7, 4, 9, 1, 4, 5, 63856, 4, 6, 4, 7, 2, 4, 5, 44423, 6, 11714, 24460, 7, 132, 0, 28467, 8, 242, 0, 28467, 9, 107, 0, 8354, 10, 7, 2, 8, 9, 28467, 7, 169, 0, 60966, 8, 10, 7, 19182, 7, 10, 8, 1, 1, 28949, 5, 5, 7, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 63856, 5, 6, 4, 8, 1, 5, 5, 5201, 6, 11732, 24460, 6, 173, 0, 28467, 7, 341, 0, 8354, 8, 6, 1, 7, 16566, 8, 28467, 6, 52, 0, 2427, 6, 28467, 10, 342, 0, 28467, 9, 343, 0, 27888, 2, 55029, 11, 11934, 2, 22, 7, 0, 0, 0, 1, 0, 0, 1, 0, 2, 1, 3, 0, 3, 0, 4, 63856, 10, 4, 9, 11, 1, 9, 10, 55029, 11, 12685, 4, 29, 5, 0, 0, 0, 0, 3, 0, 1, 1, 0, 1, 3, 63856, 9, 5, 9, 11, 1, 10, 9, 55029, 11, 14737, 3, 17, 3, 0, 0, 0, 0, 1, 1, 0, 63856, 9, 6, 10, 11, 2, 9, 9, 55029, 11, 15184, 1, 11, 3, 0, 0, 5, 0, 6, 1, 0, 63856, 9, 7, 10, 11, 1, 9, 10, 55029, 11, 15517, 2, 51, 9, 0, 0, 0, 0, 7, 1, 0, 0, 8, 0, 9, 1, 7, 0, 1, 0, 2, 1, 3, 63856, 10, 8, 10, 11, 2, 9, 9, 24460, 11, 162, 0, 8354, 12, 11, 0, 63856, 10, 3, 10, 12, 1, 10, 9, 28467, 11, 344, 0, 28467, 12, 345, 0, 28467, 13, 346, 0, 28467, 14, 347, 0, 28467, 15, 348, 0, 40355, 16, 5, 11, 4, 12, 5, 13, 6, 14, 7, 15, 8, 2427, 16, 28467, 11, 52, 0, 2427, 11, 28467, 11, 349, 0, 28467, 13, 350, 0, 28467, 12, 351, 0, 27888, 3, 28467, 14, 74, 0, 60966, 15, 2, 14, 28467, 14, 16, 0, 56867, 12, 13, 181, 12, 14, 13, 12, 0, 16, 13, 11, 11, 12, 12, 15, 63856, 12, 14, 11, 16, 2, 13, 11, 5201, 14, 12020, 28467, 15, 16, 0, 60966, 16, 2, 15, 24460, 15, 61, 0, 49131, 12, 15, 13, 352, 0, 13, 16, 17, 12, 13, 353, 0, 63856, 11, 14, 11, 17, 1, 11, 13, 5201, 14, 12041, 28467, 14, 16, 0, 60966, 15, 2, 14, 63856, 12, 14, 11, 15, 2, 11, 12, 62279, 12066, 24460, 15, 183, 0, 28467, 16, 354, 0, 60966, 17, 15, 16, 19182, 16, 15, 17, 0, 63856, 12, 14, 12, 16, 1, 12, 11, 63856, 13, 4, 11, 14, 1, 11, 13, 25854, 14, 0, 3127, 15, 14, 2, 0, 1, 25854, 14, 1, 28467, 15, 355, 0, 60966, 16, 14, 15, 25854, 15, 2, 28467, 17, 356, 0, 3127, 18, 15, 3, 0, 1, 17, 19182, 15, 14, 16, 1, 18, 63856, 11, 5, 12, 15, 2, 11, 11, 13397, 14, 5, 28467, 15, 105, 0, 49131, 11, 15, 13, 114, 0, 13, 14, 16, 13, 11, 357, 0, 5201, 16, 12151, 28467, 14, 60, 0, 2427, 14, 24460, 14, 181, 0, 28467, 15, 207, 0, 60966, 16, 14, 15, 19182, 15, 14, 16, 1, 5, 63856, 12, 6, 13, 15, 2, 13, 13, 28467, 14, 358, 0, 60966, 15, 6, 14, 63856, 13, 14, 13, 15, 2, 11, 12, 5201, 14, 12224, 28467, 15, 359, 0, 60966, 16, 6, 15, 678, 13, 13, 13, 16, 12, 15, 12, 11, 11, 4, 11, 63856, 11, 14, 13, 15, 2, 13, 12, 5201, 14, 12245, 28467, 14, 358, 0, 60966, 15, 6, 14, 63856, 13, 14, 13, 15, 0, 13, 11, 62279, 12261, 28467, 15, 360, 0, 60966, 16, 6, 15, 63856, 11, 14, 11, 16, 0, 11, 11, 63856, 11, 7, 11, 14, 1, 11, 12, 25854, 14, 3, 28467, 15, 14, 0, 28467, 16, 196, 0, 3127, 17, 14, 3, 7, 15, 16, 28949, 13, 13, 17, 14, 13, 13, 11, 13, 12, 13, 12, 12, 11, 5201, 14, 12319, 24460, 14, 173, 0, 28467, 15, 361, 0, 8354, 16, 14, 1, 15, 16566, 16, 28467, 14, 107, 0, 28467, 15, 336, 0, 60966, 16, 14, 15, 28467, 15, 337, 0, 19182, 17, 14, 16, 2, 0, 15, 28467, 14, 336, 0, 60966, 15, 17, 14, 28467, 14, 337, 0, 19182, 16, 17, 15, 2, 1, 14, 28467, 14, 336, 0, 60966, 15, 16, 14, 19182, 14, 16, 15, 1, 7, 63856, 11, 8, 11, 14, 0, 11, 12, 25854, 14, 4, 28467, 15, 344, 0, 60966, 16, 14, 15, 19182, 15, 14, 16, 1, 8, 63856, 12, 9, 12, 15, 1, 11, 13, 28949, 13, 11, 9, 14, 11, 13, 13, 13, 13, 13, 13, 13, 13, 5201, 14, 12600, 25854, 14, 1, 28467, 15, 355, 0, 60966, 16, 14, 15, 25854, 15, 2, 24460, 17, 120, 0, 3127, 18, 17, 1, 7, 3127, 17, 15, 3, 0, 1, 18, 19182, 15, 14, 16, 1, 17, 63856, 13, 10, 13, 15, 2, 13, 12, 13397, 14, 10, 28467, 15, 105, 0, 49131, 13, 15, 13, 186, 0, 11, 14, 16, 12, 12, 362, 0, 5201, 16, 12507, 24460, 14, 173, 0, 28467, 15, 363, 0, 8354, 16, 14, 1, 15, 16566, 16, 24460, 14, 181, 0, 28467, 15, 207, 0, 60966, 16, 14, 15, 19182, 15, 14, 16, 1, 10, 63856, 11, 9, 12, 15, 1, 11, 11, 25854, 14, 5, 28467, 15, 364, 0, 60966, 16, 9, 15, 3127, 15, 14, 2, 0, 16, 28949, 11, 11, 15, 14, 12, 13, 13, 13, 12, 12, 13, 11, 12, 5201, 14, 12582, 24460, 14, 173, 0, 28467, 15, 365, 0, 8354, 16, 14, 1, 15, 16566, 16, 25854, 14, 4, 28467, 15, 366, 0, 60966, 16, 14, 15, 19182, 15, 14, 16, 2, 8, 9, 25854, 14, 6, 25854, 15, 6, 40355, 16, 0, 3127, 17, 15, 2, 16, 9, 40355, 15, 0, 28467, 16, 281, 0, 28467, 18, 367, 0, 28467, 19, 368, 0, 28467, 20, 359, 0, 60966, 21, 6, 20, 63856, 13, 20, 13, 21, 0, 13, 11, 44423, 20, 12661, 28467, 21, 60, 0, 63856, 11, 20, 11, 21, 1, 11, 12, 40355, 21, 3, 16, 1, 18, 7, 19, 20, 3127, 16, 14, 3, 17, 15, 21, 2427, 16, 28467, 14, 52, 0, 2427, 14, 28467, 18, 369, 0, 28467, 20, 370, 0, 28467, 19, 371, 0, 27888, 5, 28467, 21, 74, 0, 60966, 22, 4, 21, 28467, 21, 20, 0, 56867, 18, 19, 132, 18, 21, 19, 20, 0, 23, 19, 20, 20, 20, 20, 22, 63856, 19, 21, 18, 23, 2, 18, 19, 5201, 21, 12771, 28467, 22, 20, 0, 60966, 23, 4, 22, 24460, 22, 61, 0, 49131, 19, 22, 19, 372, 0, 18, 23, 24, 18, 19, 373, 0, 63856, 18, 21, 18, 24, 2, 19, 18, 5201, 21, 12792, 28467, 21, 20, 0, 60966, 22, 4, 21, 63856, 19, 21, 19, 22, 1, 18, 18, 62279, 12817, 24460, 22, 183, 0, 28467, 23, 354, 0, 60966, 24, 22, 23, 19182, 23, 22, 24, 0, 63856, 20, 21, 20, 23, 2, 20, 19, 63856, 20, 6, 20, 21, 2, 19, 20, 28467, 21, 74, 0, 60966, 22, 4, 21, 28467, 21, 15, 0, 56867, 20, 20, 114, 20, 21, 20, 20, 0, 23, 20, 20, 19, 20, 20, 22, 5201, 23, 12874, 28467, 21, 15, 0, 60966, 22, 4, 21, 63856, 20, 21, 18, 22, 0, 20, 20, 62279, 12886, 24460, 22, 61, 0, 63856, 20, 21, 20, 22, 2, 20, 20, 63856, 20, 7, 18, 21, 2, 18, 19, 25854, 21, 0, 3127, 22, 21, 2, 0, 1, 13397, 21, 2, 28467, 22, 105, 0, 49131, 19, 22, 19, 173, 0, 18, 21, 23, 18, 19, 374, 0, 63856, 19, 21, 19, 23, 2, 20, 18, 44423, 21, 12969, 28467, 22, 375, 0, 60966, 23, 2, 22, 19182, 22, 2, 23, 0, 28949, 19, 18, 22, 23, 18, 19, 19, 18, 19, 18, 18, 19, 19, 63856, 19, 21, 19, 23, 1, 19, 20, 63856, 20, 22, 20, 21, 0, 20, 19, 44423, 22, 13016, 28467, 21, 74, 0, 60966, 23, 2, 21, 28467, 21, 291, 0, 56867, 19, 19, 186, 20, 21, 20, 18, 0, 24, 19, 20, 20, 19, 18, 23, 63856, 20, 22, 19, 24, 2, 18, 18, 63856, 19, 21, 19, 22, 2, 19, 19, 44423, 21, 13058, 25854, 22, 1, 3127, 23, 22, 2, 0, 3, 28949, 18, 18, 23, 22, 19, 18, 19, 18, 20, 19, 19, 19, 19, 63856, 19, 21, 18, 22, 0, 18, 20, 63856, 18, 22, 18, 21, 0, 18, 20, 44423, 22, 13109, 24460, 21, 121, 0, 28467, 23, 186, 0, 60966, 24, 21, 23, 19182, 23, 21, 24, 1, 6, 28949, 18, 19, 23, 21, 20, 20, 20, 20, 20, 19, 20, 19, 20, 63856, 18, 22, 18, 21, 0, 18, 19, 5201, 22, 13127, 24460, 21, 173, 0, 28467, 22, 376, 0, 8354, 23, 21, 1, 22, 16566, 23, 25854, 21, 2, 28467, 22, 356, 0, 3127, 23, 21, 3, 0, 1, 22, 63856, 18, 8, 20, 23, 0, 20, 20, 25854, 21, 3, 28467, 22, 355, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 1, 8, 63856, 20, 9, 19, 22, 1, 20, 19, 5201, 9, 13205, 24460, 21, 181, 0, 28467, 22, 207, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 1, 9, 63856, 20, 21, 19, 22, 0, 18, 20, 62279, 13217, 28467, 22, 60, 0, 63856, 18, 21, 18, 22, 2, 18, 19, 63856, 19, 10, 19, 21, 1, 19, 20, 24460, 21, 183, 0, 28467, 22, 354, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 0, 63856, 18, 11, 18, 22, 2, 20, 18, 28467, 21, 60, 0, 49131, 19, 21, 19, 121, 0, 18, 10, 22, 19, 20, 377, 0, 63856, 20, 21, 18, 22, 0, 19, 20, 5201, 21, 13306, 28467, 22, 12, 0, 44958, 23, 22, 49131, 20, 23, 18, 352, 0, 19, 10, 22, 18, 18, 378, 0, 63856, 18, 21, 18, 22, 1, 19, 18, 63856, 19, 22, 18, 21, 1, 18, 19, 5201, 22, 13333, 28467, 21, 358, 0, 60966, 23, 10, 21, 63856, 18, 22, 18, 23, 0, 19, 19, 63856, 20, 21, 18, 22, 1, 20, 18, 5201, 21, 13372, 28467, 22, 359, 0, 60966, 23, 10, 22, 678, 18, 20, 18, 23, 20, 22, 20, 18, 19, 11, 18, 63856, 19, 21, 20, 22, 2, 18, 18, 5201, 21, 13393, 28467, 21, 358, 0, 60966, 22, 10, 21, 63856, 19, 21, 18, 22, 2, 18, 18, 62279, 13487, 28467, 22, 60, 0, 6336, 18, 10, 379, 18, 22, 18, 18, 23, 0, 63856, 19, 22, 20, 23, 2, 19, 18, 44423, 22, 13443, 28467, 23, 12, 0, 44958, 24, 23, 6336, 18, 10, 380, 18, 24, 18, 18, 23, 0, 63856, 18, 22, 20, 23, 1, 20, 19, 5201, 22, 13463, 28467, 22, 12, 0, 44958, 23, 22, 63856, 20, 22, 20, 23, 2, 19, 20, 62279, 13479, 28467, 23, 360, 0, 60966, 24, 10, 23, 63856, 19, 22, 19, 24, 1, 19, 18, 63856, 18, 21, 18, 22, 1, 18, 20, 63856, 19, 12, 19, 21, 2, 20, 20, 28467, 21, 60, 0, 49131, 20, 21, 20, 186, 0, 18, 10, 22, 18, 18, 381, 0, 63856, 19, 21, 19, 22, 0, 19, 20, 5201, 21, 13551, 28467, 22, 12, 0, 44958, 23, 22, 49131, 19, 23, 20, 120, 0, 19, 10, 22, 19, 18, 382, 0, 63856, 18, 21, 18, 22, 1, 20, 19, 63856, 19, 22, 19, 21, 1, 19, 20, 5201, 22, 13578, 28467, 21, 358, 0, 60966, 23, 10, 21, 63856, 19, 22, 18, 23, 1, 20, 18, 63856, 18, 21, 18, 22, 1, 18, 18, 5201, 21, 13619, 28467, 22, 359, 0, 60966, 23, 10, 22, 50439, 18, 18, 11, 18, 18, 18, 22, 18, 18, 23, 19, 18, 19, 63856, 19, 21, 19, 22, 2, 19, 18, 5201, 21, 13637, 24460, 21, 173, 0, 28467, 22, 383, 0, 8354, 23, 21, 1, 22, 16566, 23, 24460, 21, 61, 0, 49131, 19, 21, 20, 384, 0, 19, 7, 22, 19, 19, 385, 0, 63856, 18, 21, 18, 22, 1, 18, 18, 5201, 21, 13767, 28467, 22, 60, 0, 49131, 18, 22, 18, 121, 0, 18, 12, 23, 19, 18, 386, 0, 63856, 20, 22, 19, 23, 2, 19, 20, 5201, 22, 13721, 28467, 23, 12, 0, 44958, 24, 23, 49131, 18, 24, 18, 120, 0, 19, 12, 23, 19, 18, 387, 0, 63856, 19, 22, 19, 23, 0, 18, 20, 5201, 22, 13734, 63856, 19, 22, 19, 12, 0, 19, 18, 62279, 13746, 28467, 23, 60, 0, 63856, 18, 22, 19, 23, 1, 19, 19, 49131, 20, 7, 20, 352, 0, 18, 22, 23, 18, 20, 388, 0, 63856, 19, 21, 19, 23, 1, 18, 20, 5201, 21, 13785, 24460, 21, 173, 0, 28467, 22, 389, 0, 8354, 23, 21, 1, 22, 16566, 23, 28949, 18, 18, 12, 21, 19, 18, 18, 19, 18, 18, 18, 18, 18, 63856, 18, 22, 20, 21, 1, 18, 19, 5201, 22, 13834, 56867, 19, 20, 352, 20, 11, 18, 18, 0, 21, 18, 19, 19, 20, 18, 6, 63856, 18, 22, 19, 21, 1, 18, 18, 5201, 22, 13852, 24460, 21, 173, 0, 28467, 22, 390, 0, 8354, 23, 21, 1, 22, 16566, 23, 24460, 21, 114, 0, 28467, 22, 298, 0, 60966, 23, 21, 22, 28467, 22, 60, 0, 6336, 19, 10, 391, 20, 22, 20, 19, 24, 0, 63856, 19, 22, 18, 24, 1, 20, 20, 44423, 22, 13914, 28467, 24, 12, 0, 44958, 25, 24, 6336, 18, 10, 392, 19, 25, 18, 19, 24, 0, 63856, 19, 22, 18, 24, 2, 18, 18, 5201, 22, 13934, 28467, 22, 12, 0, 44958, 24, 22, 63856, 18, 22, 18, 24, 2, 20, 18, 62279, 13950, 28467, 24, 360, 0, 60966, 25, 10, 24, 63856, 19, 22, 19, 25, 0, 19, 19, 63856, 18, 24, 18, 22, 1, 18, 19, 44423, 24, 13973, 28467, 22, 12, 0, 63856, 19, 24, 18, 22, 1, 19, 18, 28467, 22, 60, 0, 6336, 19, 10, 393, 20, 22, 20, 20, 25, 0, 63856, 20, 22, 20, 25, 0, 18, 19, 44423, 22, 14023, 28467, 25, 12, 0, 44958, 26, 25, 6336, 19, 10, 394, 18, 26, 20, 20, 25, 0, 63856, 18, 22, 18, 25, 0, 19, 19, 5201, 22, 14043, 28467, 22, 12, 0, 44958, 25, 22, 63856, 20, 22, 18, 25, 2, 18, 20, 62279, 14059, 28467, 25, 358, 0, 60966, 26, 10, 25, 63856, 19, 22, 19, 26, 0, 18, 19, 63856, 20, 25, 19, 22, 1, 19, 20, 44423, 25, 14082, 28467, 22, 12, 0, 63856, 20, 25, 19, 22, 2, 19, 18, 19182, 22, 21, 23, 2, 24, 25, 28467, 21, 14, 0, 45418, 23, 19, 18, 21, 19, 18, 19, 18, 22, 19, 19, 63856, 19, 13, 18, 23, 2, 18, 18, 25854, 21, 3, 28467, 22, 355, 0, 60966, 23, 21, 22, 25854, 22, 2, 24460, 24, 120, 0, 3127, 25, 24, 1, 13, 3127, 24, 22, 3, 0, 1, 25, 19182, 22, 21, 23, 1, 24, 24460, 21, 61, 0, 49131, 19, 21, 19, 8, 0, 20, 22, 23, 18, 19, 395, 0, 5201, 23, 14203, 63856, 19, 21, 19, 13, 2, 20, 19, 28467, 21, 14, 0, 45418, 22, 19, 19, 21, 19, 19, 20, 19, 13, 20, 18, 63856, 19, 13, 20, 22, 2, 19, 19, 62279, 14113, 28467, 21, 161, 0, 28467, 22, 375, 0, 60966, 23, 2, 22, 19182, 22, 2, 23, 0, 28467, 23, 364, 0, 24460, 24, 181, 0, 28467, 25, 207, 0, 60966, 26, 24, 25, 24460, 25, 181, 0, 28467, 27, 251, 0, 60966, 28, 25, 27, 19182, 27, 25, 28, 1, 3, 19182, 25, 24, 26, 1, 27, 40355, 24, 2, 21, 22, 23, 25, 63856, 18, 14, 19, 24, 0, 20, 19, 24460, 21, 181, 0, 28467, 22, 251, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 1, 14, 63856, 19, 15, 18, 22, 2, 20, 18, 25854, 21, 3, 28467, 22, 396, 0, 60966, 23, 21, 22, 25854, 22, 2, 24460, 24, 120, 0, 3127, 25, 24, 1, 13, 3127, 24, 22, 3, 0, 1, 25, 19182, 22, 21, 23, 2, 24, 15, 25854, 21, 3, 28467, 22, 355, 0, 60966, 23, 21, 22, 25854, 22, 2, 24460, 24, 120, 0, 3127, 25, 24, 1, 13, 3127, 24, 22, 3, 0, 1, 25, 19182, 22, 21, 23, 1, 24, 49131, 18, 15, 20, 181, 0, 19, 22, 21, 20, 20, 397, 0, 5201, 21, 14405, 24460, 21, 173, 0, 28467, 22, 398, 0, 8354, 23, 21, 1, 22, 16566, 23, 28949, 18, 18, 12, 21, 20, 19, 18, 19, 18, 18, 18, 18, 18, 63856, 19, 22, 20, 21, 0, 19, 18, 44423, 22, 14452, 34678, 11, 19, 20, 20, 19, 18, 20, 21, 19, 18, 6, 20, 18, 63856, 20, 22, 18, 21, 1, 20, 19, 5201, 22, 14474, 28467, 21, 360, 0, 40355, 22, 1, 21, 13, 63856, 20, 21, 20, 22, 2, 20, 20, 62279, 14503, 28467, 22, 360, 0, 28467, 23, 358, 0, 28467, 24, 359, 0, 40355, 25, 3, 22, 12, 23, 13, 24, 6, 63856, 20, 21, 20, 25, 0, 20, 19, 63856, 19, 16, 19, 21, 1, 19, 19, 24460, 21, 181, 0, 28467, 22, 251, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 1, 16, 63856, 18, 17, 18, 22, 0, 19, 19, 25854, 21, 3, 28467, 22, 396, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 2, 8, 17, 25854, 21, 3, 28467, 22, 355, 0, 60966, 23, 21, 22, 19182, 22, 21, 23, 1, 8, 49131, 18, 17, 19, 114, 0, 18, 22, 21, 18, 18, 399, 0, 5201, 21, 14603, 24460, 21, 173, 0, 28467, 22, 400, 0, 8354, 23, 21, 1, 22, 16566, 23, 25854, 21, 4, 28467, 22, 366, 0, 60966, 23, 21, 22, 28467, 22, 107, 0, 28467, 24, 336, 0, 60966, 25, 22, 24, 28467, 24, 337, 0, 19182, 26, 22, 25, 2, 0, 24, 28467, 22, 336, 0, 60966, 24, 26, 22, 28467, 22, 337, 0, 19182, 25, 26, 24, 2, 1, 22, 28467, 22, 336, 0, 60966, 24, 25, 22, 19182, 22, 25, 24, 1, 13, 19182, 24, 21, 23, 2, 22, 14, 28467, 21, 281, 0, 28467, 22, 367, 0, 28467, 23, 368, 0, 28467, 24, 359, 0, 60966, 25, 16, 24, 63856, 19, 24, 19, 25, 0, 18, 19, 44423, 24, 14720, 28467, 25, 60, 0, 63856, 19, 24, 20, 25, 2, 20, 19, 40355, 25, 3, 21, 1, 22, 13, 23, 24, 2427, 25, 28467, 21, 52, 0, 2427, 21, 28467, 10, 401, 0, 28467, 9, 402, 0, 28467, 11, 403, 0, 27888, 4, 25854, 12, 0, 3127, 13, 12, 2, 0, 1, 25854, 12, 1, 28467, 13, 356, 0, 3127, 14, 12, 3, 0, 1, 13, 63856, 11, 5, 11, 14, 2, 11, 11, 25854, 12, 2, 28467, 13, 355, 0, 60966, 14, 12, 13, 19182, 13, 12, 14, 1, 5, 63856, 9, 6, 9, 13, 0, 10, 10, 5201, 6, 14838, 24460, 12, 181, 0, 28467, 13, 207, 0, 60966, 14, 12, 13, 19182, 13, 12, 14, 1, 6, 63856, 11, 12, 11, 13, 1, 9, 11, 62279, 14850, 28467, 13, 60, 0, 63856, 10, 12, 10, 13, 0, 10, 11, 63856, 10, 7, 10, 12, 2, 10, 9, 28467, 12, 60, 0, 49131, 11, 12, 9, 173, 0, 10, 7, 13, 11, 9, 404, 0, 63856, 9, 12, 10, 13, 0, 10, 10, 5201, 12, 14914, 28467, 13, 12, 0, 44958, 14, 13, 49131, 10, 14, 9, 120, 0, 9, 7, 13, 9, 9, 405, 0, 63856, 11, 12, 11, 13, 0, 9, 10, 63856, 11, 13, 11, 12, 1, 11, 9, 5201, 13, 14941, 28467, 12, 358, 0, 60966, 14, 7, 12, 63856, 11, 13, 10, 14, 0, 11, 11, 28949, 10, 9, 13, 12, 10, 9, 9, 9, 10, 9, 9, 10, 10, 63856, 10, 13, 11, 12, 2, 9, 10, 44423, 13, 15011, 24460, 12, 183, 0, 28467, 14, 354, 0, 60966, 15, 12, 14, 19182, 14, 12, 15, 0, 28467, 12, 359, 0, 60966, 15, 7, 12, 678, 10, 9, 10, 15, 11, 12, 9, 10, 10, 14, 11, 63856, 9, 13, 11, 12, 1, 9, 10, 63856, 9, 12, 9, 13, 1, 9, 11, 44423, 12, 15051, 28467, 13, 360, 0, 60966, 14, 7, 13, 49131, 11, 2, 11, 181, 0, 10, 14, 13, 11, 9, 406, 0, 63856, 9, 12, 11, 13, 0, 9, 11, 5201, 12, 15069, 24460, 12, 173, 0, 28467, 13, 389, 0, 8354, 14, 12, 1, 13, 16566, 14, 24460, 12, 181, 0, 28467, 13, 251, 0, 60966, 14, 12, 13, 28467, 13, 360, 0, 28467, 15, 360, 0, 60966, 16, 7, 15, 40355, 15, 1, 13, 16, 19182, 13, 12, 14, 1, 15, 63856, 10, 8, 11, 13, 2, 11, 11, 25854, 12, 2, 28467, 13, 396, 0, 60966, 14, 12, 13, 19182, 13, 12, 14, 2, 5, 8, 25854, 12, 2, 28467, 13, 355, 0, 60966, 14, 12, 13, 19182, 13, 12, 14, 1, 5, 49131, 11, 8, 11, 407, 0, 11, 13, 12, 11, 10, 408, 0, 5201, 12, 15178, 24460, 12, 173, 0, 28467, 13, 400, 0, 8354, 14, 12, 1, 13, 16566, 14, 28467, 12, 52, 0, 2427, 12, 28467, 5, 409, 0, 28467, 6, 410, 0, 28467, 4, 411, 0, 27888, 2, 25854, 7, 0, 28467, 8, 215, 0, 60966, 9, 7, 8, 19182, 8, 7, 9, 1, 0, 28949, 6, 6, 8, 7, 4, 6, 6, 5, 6, 6, 5, 4, 4, 5201, 7, 15247, 24460, 7, 173, 0, 28467, 8, 412, 0, 8354, 9, 7, 1, 8, 16566, 9, 28467, 7, 107, 0, 28467, 8, 336, 0, 60966, 9, 7, 8, 25854, 8, 1, 19182, 10, 7, 9, 1, 8, 28467, 7, 336, 0, 60966, 8, 10, 7, 28467, 7, 337, 0, 19182, 9, 10, 8, 2, 0, 7, 63856, 4, 3, 4, 9, 1, 4, 5, 25854, 7, 2, 28467, 8, 413, 0, 60966, 9, 7, 8, 19182, 8, 7, 9, 0, 28467, 7, 85, 0, 60966, 9, 8, 7, 55029, 7, 15378, 1, 9, 1, 0, 1, 3, 19182, 10, 8, 9, 1, 7, 28467, 7, 223, 0, 60966, 8, 10, 7, 55029, 7, 15450, 1, 10, 1, 0, 1, 3, 19182, 9, 10, 8, 1, 7, 28467, 7, 414, 0, 60966, 8, 9, 7, 19182, 7, 9, 8, 0, 2427, 7, 28467, 7, 52, 0, 2427, 7, 28467, 4, 415, 0, 28467, 3, 416, 0, 27888, 2, 28467, 5, 417, 0, 60966, 6, 0, 5, 25854, 5, 0, 19182, 7, 0, 6, 1, 5, 63856, 4, 5, 3, 7, 2, 3, 4, 5201, 5, 15442, 28467, 6, 418, 0, 60966, 7, 0, 6, 28467, 6, 419, 0, 19182, 8, 0, 7, 1, 6, 63856, 3, 5, 4, 8, 1, 4, 4, 2427, 5, 28467, 5, 52, 0, 2427, 5, 28467, 3, 420, 0, 28467, 4, 421, 0, 27888, 2, 28467, 5, 158, 0, 60966, 6, 0, 5, 25854, 5, 0, 28467, 7, 74, 0, 60966, 8, 5, 7, 28467, 5, 419, 0, 28467, 7, 74, 0, 60966, 9, 5, 7, 19958, 9, 4, 4, 5, 3, 4, 4, 4, 4, 4, 19182, 7, 0, 6, 2, 8, 5, 2427, 7, 28467, 5, 52, 0, 2427, 5, 28467, 41, 422, 0, 28467, 40, 423, 0, 28467, 42, 424, 0, 27888, 3, 25854, 43, 0, 3127, 44, 43, 2, 0, 1, 28467, 43, 116, 0, 6336, 40, 1, 425, 40, 43, 40, 40, 44, 0, 5201, 44, 15572, 24460, 43, 173, 0, 28467, 44, 426, 0, 8354, 45, 43, 1, 44, 16566, 45, 28467, 43, 4, 0, 6336, 41, 0, 427, 41, 43, 41, 41, 44, 0, 5201, 44, 15607, 28467, 43, 428, 0, 46371, 44, 1, 43, 63856, 40, 43, 40, 44, 0, 41, 40, 62279, 15661, 28467, 44, 5, 0, 6336, 41, 0, 429, 41, 44, 41, 41, 45, 0, 5201, 45, 15642, 28467, 44, 430, 0, 46371, 45, 1, 44, 63856, 42, 44, 41, 45, 1, 42, 41, 62279, 15653, 46371, 45, 0, 63856, 40, 44, 40, 45, 1, 40, 41, 63856, 42, 43, 40, 44, 1, 40, 42, 63856, 41, 4, 42, 43, 0, 42, 41, 25854, 43, 1, 28467, 44, 7, 0, 6336, 41, 0, 431, 41, 44, 41, 40, 45, 0, 5201, 45, 15702, 46371, 44, 0, 63856, 42, 45, 41, 44, 0, 41, 42, 62279, 15726, 25854, 44, 2, 28467, 46, 413, 0, 60966, 47, 44, 46, 19182, 46, 44, 47, 0, 63856, 42, 45, 42, 46, 2, 42, 41, 3127, 44, 43, 1, 45, 63856, 40, 5, 40, 44, 0, 40, 40, 28467, 6, 52, 0, 35355, 15897, 8, 9, 15912, 56048, 15877, 7, 55029, 43, 17560, 0, 12, 6, 0, 1, 6, 0, 2, 0, 3, 0, 4, 1, 4, 1, 1, 63856, 40, 10, 40, 43, 1, 40, 41, 28467, 11, 52, 0, 28467, 43, 138, 0, 60966, 44, 5, 43, 19182, 43, 5, 44, 0, 28467, 43, 139, 0, 60966, 44, 5, 43, 19182, 43, 5, 44, 0, 63856, 41, 6, 40, 43, 0, 40, 41, 28467, 43, 71, 0, 60966, 44, 6, 43, 28949, 40, 42, 44, 43, 40, 42, 42, 42, 40, 42, 41, 40, 40, 5201, 43, 15874, 3127, 43, 10, 0, 63856, 41, 11, 42, 43, 1, 40, 41, 28467, 43, 12, 0, 6336, 41, 11, 432, 42, 43, 42, 41, 44, 0, 5201, 44, 15872, 62279, 15795, 62279, 15795, 64526, 62279, 15891, 28467, 43, 140, 0, 60966, 44, 5, 43, 19182, 43, 5, 44, 1, 7, 64526, 25276, 8, 15914, 62279, 15897, 28467, 43, 141, 0, 60966, 44, 5, 43, 19182, 43, 5, 44, 0, 18905, 8, 16566, 9, 28467, 43, 6, 0, 6336, 42, 0, 433, 42, 43, 41, 41, 44, 0, 5201, 44, 16898, 25854, 43, 1, 25854, 44, 5, 28467, 45, 5, 0, 3127, 46, 44, 1, 45, 3127, 44, 43, 1, 46, 63856, 42, 12, 42, 44, 1, 41, 41, 28467, 13, 52, 0, 35355, 16881, 14, 15, 16896, 56048, 16861, 7, 28467, 43, 138, 0, 60966, 44, 12, 43, 19182, 43, 12, 44, 0, 28467, 43, 139, 0, 60966, 44, 12, 43, 19182, 43, 12, 44, 0, 63856, 40, 13, 40, 43, 1, 40, 41, 28467, 43, 71, 0, 60966, 44, 13, 43, 28949, 40, 40, 44, 43, 41, 41, 41, 40, 41, 41, 40, 40, 40, 5201, 43, 16858, 28467, 43, 73, 0, 60966, 44, 13, 43, 63856, 42, 16, 41, 44, 0, 41, 42, 24460, 43, 181, 0, 28467, 44, 207, 0, 60966, 45, 43, 44, 25854, 44, 2, 28467, 46, 355, 0, 60966, 47, 44, 46, 25854, 46, 6, 28467, 48, 5, 0, 28467, 49, 356, 0, 3127, 50, 46, 3, 48, 16, 49, 19182, 46, 44, 47, 1, 50, 63856, 42, 44, 42, 46, 1, 40, 42, 44423, 44, 16116, 28467, 46, 434, 0, 63856, 40, 44, 40, 46, 0, 41, 41, 19182, 46, 43, 45, 1, 44, 63856, 41, 17, 41, 46, 2, 41, 41, 25854, 43, 1, 24460, 44, 3, 0, 28467, 45, 360, 0, 60966, 46, 17, 45, 28467, 45, 358, 0, 60966, 47, 17, 45, 46371, 45, 2, 46, 47, 8354, 46, 44, 1, 45, 3127, 44, 43, 1, 46, 63856, 41, 18, 41, 44, 2, 41, 41, 28467, 19, 52, 0, 35355, 16839, 20, 21, 16854, 56048, 16819, 7, 28467, 43, 138, 0, 60966, 44, 18, 43, 19182, 43, 18, 44, 0, 28467, 43, 139, 0, 60966, 44, 18, 43, 19182, 43, 18, 44, 0, 63856, 41, 19, 41, 43, 1, 41, 41, 28467, 43, 71, 0, 60966, 44, 19, 43, 28949, 42, 42, 44, 43, 41, 42, 41, 41, 41, 41, 42, 41, 42, 5201, 43, 16816, 28467, 22, 52, 0, 28467, 23, 52, 0, 28467, 43, 73, 0, 60966, 44, 19, 43, 63856, 42, 24, 41, 44, 2, 40, 41, 25854, 43, 7, 28467, 44, 14, 0, 28467, 45, 196, 0, 3127, 46, 43, 3, 24, 44, 45, 28949, 41, 42, 46, 43, 41, 42, 42, 42, 41, 41, 42, 41, 40, 5201, 43, 16308, 62279, 16201, 25854, 43, 2, 28467, 44, 355, 0, 60966, 45, 43, 44, 25854, 44, 6, 28467, 46, 5, 0, 24460, 47, 120, 0, 3127, 48, 47, 1, 24, 3127, 47, 44, 3, 46, 16, 48, 19182, 44, 43, 45, 1, 47, 63856, 41, 25, 41, 44, 0, 41, 41, 13397, 43, 25, 28467, 44, 105, 0, 49131, 42, 44, 42, 202, 0, 41, 43, 45, 42, 42, 435, 0, 5201, 45, 16381, 62279, 16201, 24460, 43, 181, 0, 28467, 44, 207, 0, 60966, 45, 43, 44, 19182, 44, 43, 45, 1, 25, 63856, 40, 22, 40, 44, 1, 40, 42, 28467, 43, 60, 0, 6336, 41, 22, 436, 40, 43, 41, 40, 44, 0, 63856, 40, 43, 42, 44, 1, 40, 40, 44423, 43, 16457, 28467, 44, 12, 0, 44958, 45, 44, 6336, 40, 22, 437, 41, 45, 40, 41, 44, 0, 63856, 41, 43, 40, 44, 0, 42, 41, 5201, 43, 16477, 28467, 43, 12, 0, 44958, 44, 43, 63856, 40, 43, 41, 44, 2, 41, 40, 62279, 16493, 28467, 44, 364, 0, 60966, 45, 22, 44, 63856, 40, 43, 41, 45, 2, 41, 40, 63856, 41, 26, 41, 43, 2, 41, 41, 28467, 43, 60, 0, 6336, 41, 26, 438, 40, 43, 40, 41, 44, 0, 63856, 41, 43, 41, 44, 2, 42, 40, 44423, 43, 16551, 28467, 44, 12, 0, 44958, 45, 44, 6336, 42, 26, 439, 41, 45, 41, 41, 44, 0, 63856, 41, 43, 41, 44, 2, 40, 40, 5201, 43, 16571, 28467, 43, 12, 0, 44958, 44, 43, 63856, 41, 43, 42, 44, 1, 42, 41, 62279, 16587, 28467, 44, 239, 0, 60966, 45, 26, 44, 63856, 41, 43, 40, 45, 0, 40, 40, 6336, 42, 43, 440, 41, 1, 42, 42, 44, 0, 63856, 41, 43, 41, 44, 1, 40, 42, 44423, 43, 16796, 28467, 44, 60, 0, 49131, 41, 44, 40, 352, 0, 41, 26, 45, 41, 40, 441, 0, 63856, 40, 44, 42, 45, 0, 42, 42, 5201, 44, 16664, 28467, 45, 12, 0, 44958, 46, 45, 49131, 42, 46, 41, 61, 0, 42, 26, 45, 42, 42, 442, 0, 63856, 42, 44, 40, 45, 2, 41, 41, 63856, 42, 45, 42, 44, 0, 42, 42, 5201, 45, 16716, 28467, 44, 243, 0, 60966, 46, 26, 44, 63856, 41, 23, 41, 46, 0, 42, 41, 28467, 44, 60, 0, 49131, 42, 44, 42, 443, 0, 40, 23, 46, 42, 41, 444, 0, 63856, 42, 45, 42, 46, 2, 42, 41, 63856, 41, 44, 41, 45, 2, 41, 41, 5201, 44, 16755, 28467, 45, 12, 0, 44958, 46, 45, 49131, 42, 46, 40, 181, 0, 42, 23, 45, 42, 41, 445, 0, 63856, 41, 44, 42, 45, 0, 41, 41, 63856, 41, 45, 41, 44, 0, 41, 41, 5201, 45, 16788, 28467, 44, 208, 0, 60966, 46, 23, 44, 19182, 44, 23, 46, 1, 1, 63856, 41, 45, 41, 44, 0, 41, 40, 63856, 42, 43, 40, 45, 1, 40, 40, 5201, 43, 16814, 24460, 43, 173, 0, 28467, 44, 446, 0, 8354, 45, 43, 1, 44, 16566, 45, 62279, 16201, 64526, 62279, 16833, 28467, 43, 140, 0, 60966, 44, 18, 43, 19182, 43, 18, 44, 1, 7, 64526, 25276, 20, 16856, 62279, 16839, 28467, 43, 141, 0, 60966, 44, 18, 43, 19182, 43, 18, 44, 0, 18905, 20, 16566, 21, 62279, 15984, 64526, 62279, 16875, 28467, 43, 140, 0, 60966, 44, 12, 43, 19182, 43, 12, 44, 1, 7, 64526, 25276, 14, 16898, 62279, 16881, 28467, 43, 141, 0, 60966, 44, 12, 43, 19182, 43, 12, 44, 0, 18905, 14, 16566, 15, 25854, 43, 6, 28467, 44, 356, 0, 3127, 45, 43, 3, 0, 1, 44, 63856, 41, 27, 41, 45, 2, 41, 42, 25854, 43, 2, 28467, 44, 355, 0, 60966, 45, 43, 44, 19182, 44, 43, 45, 1, 27, 63856, 41, 28, 41, 44, 1, 41, 41, 13397, 43, 28, 28467, 44, 105, 0, 49131, 41, 44, 41, 186, 0, 42, 43, 45, 41, 40, 447, 0, 5201, 45, 16974, 28467, 43, 28, 0, 2427, 43, 24460, 43, 181, 0, 28467, 44, 207, 0, 60966, 45, 43, 44, 19182, 44, 43, 45, 1, 28, 63856, 40, 29, 40, 44, 1, 40, 40, 25854, 43, 2, 28467, 44, 396, 0, 60966, 45, 43, 44, 24460, 44, 61, 0, 19182, 46, 43, 45, 2, 27, 44, 25854, 43, 2, 28467, 44, 355, 0, 60966, 45, 43, 44, 19182, 44, 43, 45, 1, 27, 24460, 43, 61, 0, 49131, 42, 43, 40, 372, 0, 42, 44, 45, 40, 40, 448, 0, 5201, 45, 17074, 24460, 43, 173, 0, 28467, 44, 449, 0, 8354, 45, 43, 1, 44, 16566, 45, 25854, 43, 1, 24460, 44, 3, 0, 28467, 45, 360, 0, 60966, 46, 29, 45, 28467, 45, 358, 0, 60966, 47, 29, 45, 46371, 45, 2, 46, 47, 8354, 46, 44, 1, 45, 3127, 44, 43, 1, 46, 63856, 41, 30, 41, 44, 0, 41, 41, 28467, 31, 52, 0, 35355, 17294, 32, 33, 17309, 56048, 17274, 7, 28467, 43, 138, 0, 60966, 44, 30, 43, 19182, 43, 30, 44, 0, 28467, 43, 139, 0, 60966, 44, 30, 43, 19182, 43, 30, 44, 0, 63856, 41, 31, 41, 43, 2, 40, 41, 28467, 43, 71, 0, 60966, 44, 31, 43, 28949, 41, 42, 44, 43, 41, 41, 40, 41, 41, 41, 41, 41, 41, 5201, 43, 17271, 28467, 43, 73, 0, 60966, 44, 31, 43, 63856, 42, 34, 40, 44, 1, 41, 40, 25854, 43, 7, 28467, 44, 14, 0, 28467, 45, 196, 0, 3127, 46, 43, 3, 34, 44, 45, 5201, 46, 17269, 25854, 43, 2, 28467, 44, 396, 0, 60966, 45, 43, 44, 25854, 44, 6, 24460, 46, 120, 0, 3127, 47, 46, 1, 34, 3127, 46, 44, 3, 0, 1, 47, 24460, 44, 61, 0, 19182, 47, 43, 45, 2, 46, 44, 62279, 17145, 64526, 62279, 17288, 28467, 43, 140, 0, 60966, 44, 30, 43, 19182, 43, 30, 44, 1, 7, 64526, 25276, 32, 17311, 62279, 17294, 28467, 43, 141, 0, 60966, 44, 30, 43, 19182, 43, 30, 44, 0, 18905, 32, 16566, 33, 25854, 43, 1, 25854, 44, 8, 28467, 45, 83, 0, 60966, 46, 44, 45, 19182, 45, 44, 46, 0, 3127, 44, 43, 1, 45, 63856, 41, 35, 40, 44, 0, 40, 42, 28467, 36, 52, 0, 35355, 17531, 37, 38, 17546, 56048, 17511, 7, 28467, 43, 138, 0, 60966, 44, 35, 43, 19182, 43, 35, 44, 0, 28467, 43, 139, 0, 60966, 44, 35, 43, 19182, 43, 35, 44, 0, 63856, 42, 36, 42, 43, 2, 41, 42, 28467, 43, 71, 0, 60966, 44, 36, 43, 28949, 42, 40, 44, 43, 42, 42, 41, 40, 41, 41, 40, 42, 42, 5201, 43, 17508, 28467, 43, 73, 0, 60966, 44, 36, 43, 63856, 40, 39, 41, 44, 2, 42, 42, 28467, 43, 417, 0, 60966, 44, 39, 43, 28467, 43, 107, 0, 28467, 45, 336, 0, 60966, 46, 43, 45, 28467, 45, 337, 0, 19182, 47, 43, 46, 2, 0, 45, 28467, 43, 336, 0, 60966, 45, 47, 43, 28467, 43, 337, 0, 19182, 46, 47, 45, 2, 1, 43, 19182, 43, 39, 44, 1, 46, 5201, 43, 17506, 25854, 43, 8, 28467, 44, 450, 0, 60966, 45, 43, 44, 19182, 44, 43, 45, 1, 39, 62279, 17368, 64526, 62279, 17525, 28467, 43, 140, 0, 60966, 44, 35, 43, 19182, 43, 35, 44, 1, 7, 64526, 25276, 37, 17548, 62279, 17531, 28467, 43, 141, 0, 60966, 44, 35, 43, 19182, 43, 35, 44, 0, 18905, 37, 16566, 38, 28467, 43, 197, 0, 2427, 43, 28467, 43, 52, 0, 2427, 43, 28467, 8, 451, 0, 28467, 6, 452, 0, 28467, 7, 453, 0, 27888, 1, 25854, 9, 0, 28467, 10, 73, 0, 60966, 11, 9, 10, 63856, 7, 2, 8, 11, 2, 8, 7, 28467, 9, 417, 0, 60966, 10, 2, 9, 28467, 9, 454, 0, 19182, 11, 2, 10, 1, 9, 28949, 6, 8, 11, 9, 6, 6, 7, 6, 7, 8, 7, 7, 6, 5201, 9, 17634, 28467, 9, 12, 0, 2427, 9, 25854, 9, 1, 28467, 10, 355, 0, 60966, 11, 9, 10, 19182, 10, 9, 11, 1, 2, 63856, 7, 3, 8, 10, 1, 8, 8, 13397, 9, 3, 28467, 10, 105, 0, 49131, 7, 10, 7, 181, 0, 7, 9, 11, 7, 7, 455, 0, 5201, 11, 17688, 28467, 9, 12, 0, 2427, 9, 55029, 9, 17793, 1, 11, 5, 0, 0, 2, 0, 3, 0, 4, 0, 5, 1, 4, 63856, 8, 4, 7, 9, 2, 8, 8, 56048, 17760, 5, 24460, 9, 181, 0, 28467, 10, 207, 0, 60966, 11, 9, 10, 19182, 10, 9, 11, 1, 3, 3127, 9, 4, 1, 10, 5201, 9, 17757, 24460, 9, 173, 0, 28467, 10, 446, 0, 8354, 11, 9, 1, 10, 16566, 11, 64526, 62279, 17787, 28467, 9, 456, 0, 60966, 10, 5, 9, 28467, 9, 446, 0, 6336, 8, 10, 457, 8, 9, 8, 8, 11, 0, 5201, 11, 17787, 16566, 5, 28467, 9, 52, 0, 2427, 9, 28467, 3, 458, 0, 28467, 4, 459, 0, 27888, 2, 63856, 4, 5, 4, 0, 1, 4, 3, 5201, 5, 17844, 25854, 6, 0, 3127, 7, 6, 1, 0, 28467, 6, 110, 0, 6336, 3, 7, 460, 3, 6, 3, 3, 8, 0, 63856, 3, 5, 4, 8, 0, 4, 4, 63856, 4, 6, 4, 5, 0, 4, 3, 5201, 6, 17962, 24460, 5, 8, 0, 28467, 7, 461, 0, 60966, 8, 5, 7, 19182, 7, 5, 8, 1, 0, 28467, 5, 462, 0, 60966, 8, 7, 5, 55029, 5, 17970, 1, 14, 3, 0, 0, 1, 0, 2, 0, 3, 19182, 9, 7, 8, 1, 5, 63856, 3, 5, 3, 9, 0, 3, 3, 44423, 5, 17954, 24460, 7, 8, 0, 28467, 8, 463, 0, 60966, 9, 7, 8, 19182, 8, 7, 9, 1, 0, 28467, 7, 462, 0, 60966, 9, 8, 7, 25854, 7, 4, 19182, 10, 8, 9, 1, 7, 63856, 4, 5, 4, 10, 2, 3, 3, 63856, 3, 6, 3, 5, 0, 3, 4, 2427, 6, 28467, 5, 52, 0, 2427, 5, 28467, 8, 464, 0, 28467, 6, 465, 0, 28467, 7, 466, 0, 27888, 2, 25854, 9, 0, 28467, 10, 16, 0, 3127, 11, 9, 2, 0, 10, 63856, 7, 3, 6, 11, 0, 6, 7, 28467, 9, 12, 0, 60966, 10, 3, 9, 63856, 7, 4, 6, 10, 1, 6, 7, 28467, 9, 14, 0, 60966, 10, 3, 9, 63856, 6, 5, 8, 10, 0, 6, 7, 25854, 9, 1, 28467, 10, 208, 0, 60966, 11, 9, 10, 19182, 10, 9, 11, 1, 4, 63856, 6, 9, 6, 10, 1, 7, 6, 5201, 9, 18175, 28467, 10, 243, 0, 6336, 6, 4, 467, 6, 10, 6, 7, 11, 0, 5201, 11, 18146, 24460, 10, 79, 0, 28467, 11, 80, 0, 60966, 12, 10, 11, 19182, 11, 10, 12, 1, 5, 63856, 6, 10, 6, 11, 2, 6, 7, 5201, 10, 18136, 28467, 11, 208, 0, 60966, 12, 5, 11, 25854, 11, 2, 19182, 13, 5, 12, 1, 11, 63856, 8, 10, 8, 13, 2, 6, 7, 63856, 6, 11, 6, 10, 1, 6, 6, 62279, 18167, 25854, 10, 2, 6336, 6, 5, 468, 8, 10, 6, 6, 12, 0, 63856, 8, 11, 6, 12, 1, 6, 8, 63856, 6, 9, 7, 11, 0, 6, 6, 2427, 9, 28467, 9, 52, 0, 2427, 9],
    _0xf80770 = 0,
    _0x5e98e9 = 54,
    _0x361bf3 = ![],
    _0x36de26 = ![],
    _0x846413 = {
      LOAD_CONST: 28467,
      LOAD_INT: 25276,
      LOAD_GLOBAL: 24460,
      LOAD_UPVALUE: 25854,
      LOAD_THIS: 27888,
      MOVE: 47237,
      STORE_GLOBAL: 58650,
      STORE_UPVALUE: 1082,
      GET_PROP: 60966,
      SET_PROP: 45063,
      DELETE_PROP: 38368,
      ADD: 55584,
      SUB: 41647,
      MUL: 63963,
      DIV: 13532,
      MOD: 42267,
      EXP: 44389,
      BAND: 36436,
      BOR: 21299,
      BXOR: 14724,
      SHL: 14910,
      SHR: 45962,
      USHR: 23721,
      LT: 50770,
      GT: 56774,
      LTE: 17681,
      GTE: 47146,
      EQ: 29441,
      NEQ: 42001,
      LOOSE_EQ: 26111,
      LOOSE_NEQ: 3038,
      IN: 64724,
      INSTANCEOF: 54318,
      UNARY_NEG: 19781,
      UNARY_POS: 43718,
      UNARY_NOT: 31444,
      UNARY_BITNOT: 6548,
      TYPEOF: 13397,
      VOID: 44958,
      TYPEOF_SAFE: 20652,
      JUMP: 62279,
      JUMP_IF_FALSE: 5201,
      JUMP_IF_TRUE: 44423,
      CALL: 3127,
      CALL_METHOD: 19182,
      NEW: 8354,
      RETURN: 2427,
      THROW: 16566,
      MAKE_CLOSURE: 55029,
      BUILD_ARRAY: 46371,
      BUILD_OBJECT: 40355,
      DEFINE_GETTER: 2952,
      DEFINE_SETTER: 31098,
      FOR_IN_SETUP: 57325,
      FOR_IN_NEXT: 37393,
      TRY_SETUP: 56048,
      TRY_END: 64526,
      PATCH: 24137,
      DEBUGGER: 34846,
      JUMP_REG: 18905,
      FINALLY_SETUP: 35355
    },
    _0x3cf288 = {
      CALL_SPREAD: 1946070369
    },
    _0x8f2ed = {
      NOISE_PARAMS: 8,
      FRAME_SIZE: 6,
      CLOSURE: 0,
      NOISE_MIRROR: 4,
      REG_BASE: 10,
      THIS: 7,
      CALLER: 12,
      PC: 5,
      NOISE_ARGS: 11,
      NOISE_COUNTER: 2,
      HANDLERS: 9,
      RET_DST: 3
    },
    _0x4fc6f6 = 13,
    _0x8bbb7d = 15;
  function _0x41e262(_0x59bfbc) {
    var _0x56abde = _0x374ade;
    return typeof Buffer !== "undefined" ? Buffer[_0x56abde(408)](_0x59bfbc, "base64") : Uint8Array.from(atob(_0x59bfbc), function (_0x48bfda) {
      return _0x48bfda.charCodeAt(0);
    });
  }
  function _0xfd8ad3(_0x4f3beb) {
    if (!_0x361bf3) return _0x4f3beb;
    var _0x47eccf = _0x41e262(_0x4f3beb),
      _0x59f236 = new Uint32Array(_0x47eccf.length / 4);
    for (var _0x5a3363 = 0; _0x5a3363 < _0x59f236.length; _0x5a3363++) _0x59f236[_0x5a3363] = (_0x47eccf[_0x5a3363 * 4] | _0x47eccf[_0x5a3363 * 4 + 1] << 8 | _0x47eccf[_0x5a3363 * 4 + 2] << 16 | _0x47eccf[_0x5a3363 * 4 + 3] << 24) >>> 0;
    return _0x59f236;
  }
  var _0x55ba0b = new WeakMap();
  function _0x144fea(_0x349a96, _0x36aa53) {
    var _0x412afa = _0x374ade;
    this[_0x412afa(267)] = _0x349a96, this[_0x412afa(389)] = _0x36aa53, this[_0x412afa(330)] = ![], this._value = void 0;
  }
  _0x144fea.prototype._read = function () {
    return this._closed ? this._value : this._regs[this._absSlot];
  }, _0x144fea.prototype[_0x374ade(317)] = function (_0x60515e) {
    var _0x598097 = _0x374ade;
    if (this[_0x598097(330)]) this._value = _0x60515e;else this._regs[this._absSlot] = _0x60515e;
  }, _0x144fea.prototype._close = function () {
    var _0x150e02 = _0x374ade;
    this._value = this._regs[this[_0x150e02(389)]], this[_0x150e02(330)] = !![];
  };
  function _0xcbed23(_0x9ccef2) {
    var _0x302611 = _0x374ade;
    this.fn = _0x9ccef2, this[_0x302611(375)] = [], this[_0x302611(364)] = {};
  }
  function _0x7c3f6b(_0x2ee0e8, _0x1f756b, _0xf0df0a) {
    var _0x14b58c = _0x374ade;
    this[_0x14b58c(358)] = _0x2ee0e8, this.constants = _0x1f756b, this.globals = _0xf0df0a, this._openUpvalues = null, this._regs = [], this._regsTop = _0x8bbb7d, this._f = 0;
  }
  _0x7c3f6b[_0x374ade(364)][_0x374ade(244)] = function () {
    return this.bytecode[this._regs[this._f + _0x8f2ed.PC]++];
  }, _0x7c3f6b.prototype._pushFrame = function (_0x47ab30, _0x138fc1, _0x19ed82, _0x4cbf97) {
    var _0x20f22d = _0x374ade,
      _0x755512 = _0x47ab30.fn,
      _0x58f63c = this._regs,
      _0x23ea6e = this._regsTop,
      _0x36e473 = _0x4fc6f6 + _0x755512.regCount,
      _0x31eeb6 = _0x23ea6e + _0x36e473;
    while (_0x58f63c.length < _0x31eeb6) _0x58f63c[_0x20f22d(196)](void 0);
    for (var _0x504c11 = _0x23ea6e; _0x504c11 < _0x31eeb6; _0x504c11++) _0x58f63c[_0x504c11] = void 0;
    var _0x58deb0 = _0x23ea6e + _0x4fc6f6;
    _0x58f63c[_0x23ea6e + _0x8f2ed.PC] = _0x755512.startPc, _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(372)]] = this._f, _0x58f63c[_0x23ea6e + _0x8f2ed.RET_DST] = _0x4cbf97, _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(328)]] = _0x19ed82, _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(354)]] = _0x47ab30, _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(386)]] = _0x36e473, _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(201)]] = _0x58deb0;
    if (typeof _0x8f2ed.NOISE_END === "number") _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(199)]] = _0x31eeb6;
    if (typeof _0x8f2ed[_0x20f22d(390)] === _0x20f22d(270)) _0x58f63c[_0x23ea6e + _0x8f2ed.NOISE_PARAMS] = _0x755512[_0x20f22d(222)];
    if (typeof _0x8f2ed[_0x20f22d(248)] === "number") _0x58f63c[_0x23ea6e + _0x8f2ed.NOISE_ARGS] = _0x138fc1;
    if (typeof _0x8f2ed.NOISE_PC === "number") _0x58f63c[_0x23ea6e + _0x8f2ed[_0x20f22d(313)]] = _0x755512.startPc;
    if (typeof _0x8f2ed.NOISE_COUNTER === "number") _0x58f63c[_0x23ea6e + _0x8f2ed.NOISE_COUNTER] = 0;
    this[_0x20f22d(392)] = _0x31eeb6;
    if (_0x138fc1) {
      if (_0x755512[_0x20f22d(284)]) {
        var _0x67e262 = _0x755512.paramCount - 1;
        for (var _0x6fef04 = 0; _0x6fef04 < _0x67e262; _0x6fef04++) _0x58f63c[_0x58deb0 + _0x6fef04] = _0x6fef04 < _0x138fc1.length ? _0x138fc1[_0x6fef04] : void 0;
        _0x58f63c[_0x58deb0 + _0x67e262] = _0x138fc1.slice(_0x67e262);
      } else {
        for (var _0x227fb0 = 0; _0x227fb0 < _0x138fc1[_0x20f22d(391)] && _0x227fb0 < _0x755512[_0x20f22d(384)]; _0x227fb0++) _0x58f63c[_0x58deb0 + _0x227fb0] = _0x138fc1[_0x227fb0];
      }
      if (_0x755512.paramCount < _0x755512.regCount) _0x58f63c[_0x58deb0 + _0x755512[_0x20f22d(222)]] = _0x138fc1;
    }
    this._f = _0x23ea6e;
  }, _0x7c3f6b[_0x374ade(364)].captureUpvalue = function (_0x11fc47, _0x46726c) {
    var _0x38c76e = _0x374ade,
      _0x31712b = this._regs[_0x11fc47 + _0x8f2ed.REG_BASE] + _0x46726c,
      _0xb606f4 = this._openUpvalues || (this[_0x38c76e(269)] = []);
    return _0xb606f4[_0x31712b] || (_0xb606f4[_0x31712b] = new _0x144fea(this._regs, _0x31712b));
  }, _0x7c3f6b[_0x374ade(364)]._constant = function (_0x2f4b2c, _0x3b767f) {
    var _0x929a82 = _0x374ade,
      _0x5bfde2 = _0x2f4b2c ?? this[_0x929a82(244)](),
      _0x56f714 = _0x3b767f ?? this._operand(),
      _0x3cc54a = this[_0x929a82(397)][_0x5bfde2];
    if (!_0x56f714) return _0x3cc54a;
    if (typeof _0x3cc54a === "number") return _0x3cc54a ^ _0x56f714;
    if (typeof _0x3cc54a !== "string") return _0x3cc54a;
    var _0x4987ed = _0x41e262(_0x3cc54a),
      _0x482751 = "",
      _0x47554f = _0x56f714;
    for (var _0x5cb534 = 0; _0x5cb534 < _0x4987ed[_0x929a82(391)] / 2; _0x5cb534++) {
      _0x47554f = _0x47554f + 2654435769 | 0;
      var _0x29a89f = (_0x47554f ^ _0x47554f >>> 13) & 65535,
        _0x32737d = _0x4987ed[_0x5cb534 * 2] | _0x4987ed[_0x5cb534 * 2 + 1] << 8;
      _0x482751 += String[_0x929a82(256)](_0x32737d ^ _0x29a89f);
    }
    return _0x482751;
  }, _0x7c3f6b.prototype._closeUpvaluesFor = function (_0x201aba) {
    var _0xb0fe44 = _0x374ade,
      _0x1cc739 = this._openUpvalues;
    if (!_0x1cc739) return;
    var _0x270b0a = this[_0xb0fe44(267)],
      _0x16cf58 = _0x201aba + _0x270b0a[_0x201aba + _0x8f2ed.FRAME_SIZE];
    for (var _0x502dee = _0x270b0a[_0x201aba + _0x8f2ed[_0xb0fe44(201)]]; _0x502dee < _0x16cf58; _0x502dee++) {
      var _0x56a467 = _0x1cc739[_0x502dee];
      _0x56a467 && (_0x56a467._close(), _0x1cc739[_0x502dee] = void 0);
    }
  }, _0x7c3f6b[_0x374ade(364)].run = function (_0x533b37, _0x2877a7, _0x3e2aa4) {
    var _0x3c794c = _0x374ade,
      _0x5e2a29 = () => {
        var _0xd134ba = _0x5449;
        return _0x65588[_0xd134ba(336)]();
      },
      _0x40ec06 = _0x5e2a29();
    this._pushFrame(_0x533b37, _0x3e2aa4, _0x2877a7, 0);
    while (!![]) {
      var _0x391f30 = this._f,
        _0x2f3c57 = this._regs,
        _0x248dea = this[_0x3c794c(358)],
        _0x252502 = _0x2f3c57[_0x391f30 + _0x8f2ed.PC];
      if (_0x252502 >= _0x248dea.length) break;
      _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = _0x252502 + 1;
      var _0x2528a4 = this.bytecode[_0x252502];
      if (typeof _0x8f2ed.NOISE_PC === "number") _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(313)]] = (_0x2f3c57[_0x391f30 + _0x8f2ed.NOISE_PC] + 1) % _0x248dea.length;
      if (typeof _0x8f2ed.NOISE_COUNTER === "number") _0x2f3c57[_0x391f30 + _0x8f2ed.NOISE_COUNTER]++;
      if (typeof _0x8f2ed[_0x3c794c(300)] === "number") _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(300)]] = _0x2528a4;
      if (typeof _0x8f2ed.NOISE_ACC === "number") _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(340)]] = _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(340)]] ^ _0x252502 | 0;
      if (_0x36de26) {
        var _0x20f0a5 = _0x5e2a29(),
          _0xd61b41 = _0x20f0a5 - _0x40ec06 > _0x36de26;
        _0x40ec06 = _0x20f0a5;
        if (_0xd61b41) {
          for (var _0x461f0d = 0; _0x461f0d < this.bytecode[_0x3c794c(391)]; _0x461f0d++) this.bytecode[_0x461f0d] = 0;
          for (var _0x2f1710 = _0x391f30; _0x2f1710 < this[_0x3c794c(392)]; _0x2f1710++) this._regs[_0x2f1710] = void 0;
          _0x2528a4 = _0x846413.JUMP, _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = this.bytecode.length;
        }
      }
      try {
        var _0x46bf9e = _0x2f3c57[_0x391f30 + _0x8f2ed.REG_BASE];
        switch (_0x2528a4) {
          case _0x846413.LOOSE_NEQ:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 != _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.EXP:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = Math.pow(_0x150ca9, _0x2f3c57[_0x46bf9e + this._operand()]);
              break;
            }
          case _0x846413[_0x3c794c(367)]:
            {
              var _0x151933 = this._operand(),
                _0x19be99 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x6f2077 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x19be99[_0x6f2077];
              break;
            }
          case _0x846413.TYPEOF_SAFE:
            {
              var _0x151933 = this._operand(),
                _0x1fbcb8 = this._constant(),
                _0x115ee4 = Object.prototype.hasOwnProperty.call(this[_0x3c794c(249)], _0x1fbcb8) ? this.globals[_0x1fbcb8] : void 0;
              _0x2f3c57[_0x46bf9e + _0x151933] = typeof _0x115ee4;
              break;
            }
          case _0x846413[_0x3c794c(240)]:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 !== _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.LT:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 < _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.SHL:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 << _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(321)]:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 ^ _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(368)]:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 / _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.TYPEOF:
            {
              var _0x151933 = this._operand();
              _0x2f3c57[_0x46bf9e + _0x151933] = typeof _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case 19958:
            {
              let _0x2ff0b5 = [this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand()],
                _0x1a116c = [_0x2ff0b5[5], _0x2ff0b5[8], _0x2ff0b5[9], _0x2ff0b5[4], _0x2ff0b5[1], _0x2ff0b5[7], _0x2ff0b5[6], _0x2ff0b5[2], _0x2ff0b5[3], _0x2ff0b5[0]];
              var _0x151933 = _0x1a116c[0],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x1a116c[1]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 | _0x2f3c57[_0x46bf9e + _0x1a116c[2]];
              var _0x151933 = _0x1a116c[3];
              _0x2f3c57[_0x46bf9e + _0x151933] = ~_0x2f3c57[_0x46bf9e + _0x1a116c[4]];
              var _0x151933 = _0x1a116c[5],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x1a116c[6]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 > _0x2f3c57[_0x46bf9e + _0x1a116c[7]];
              var _0x151933 = _0x1a116c[8];
              _0x2f3c57[_0x46bf9e + _0x151933] = -_0x2f3c57[_0x46bf9e + _0x1a116c[9]];
              break;
            }
          case _0x846413.IN:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 in _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.SHR:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >> _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.UNARY_NOT:
            {
              var _0x151933 = this[_0x3c794c(244)]();
              _0x2f3c57[_0x46bf9e + _0x151933] = !_0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(355)]:
            {
              var _0x151933 = this._operand(),
                _0x3be544 = this._operand(),
                _0x251504 = {};
              for (var _0x461f0d = 0; _0x461f0d < _0x3be544; _0x461f0d++) {
                var _0x6f2077 = _0x2f3c57[_0x46bf9e + this._operand()],
                  _0x115ee4 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
                _0x251504[_0x6f2077] = _0x115ee4;
              }
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x251504;
              break;
            }
          case 56867:
            {
              let _0x58f15b = [this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand()],
                _0x5745b4 = [_0x58f15b[13], _0x58f15b[10], _0x58f15b[12], _0x58f15b[6], _0x58f15b[2], _0x58f15b[7], _0x58f15b[1], _0x58f15b[9], _0x58f15b[11], _0x58f15b[5], _0x58f15b[0], _0x58f15b[3], _0x58f15b[8], _0x58f15b[14], _0x58f15b[4]];
              var _0x151933 = _0x5745b4[0],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5745b4[1]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >>> _0x2f3c57[_0x46bf9e + _0x5745b4[2]];
              var _0x151933 = _0x5745b4[3],
                _0x414b66 = this._constant(_0x5745b4[4], _0x5745b4[5]);
              if (!(_0x414b66 in this.globals)) throw new ReferenceError(_0x414b66 + " is not defined");
              _0x2f3c57[_0x46bf9e + _0x151933] = this.globals[_0x414b66];
              var _0x151933 = _0x5745b4[6],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5745b4[7]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 <= _0x2f3c57[_0x46bf9e + _0x5745b4[8]];
              var _0x151933 = _0x5745b4[9],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5745b4[10]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >>> _0x2f3c57[_0x46bf9e + _0x5745b4[11]];
              var _0x151933 = _0x5745b4[12],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5745b4[13]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 > _0x2f3c57[_0x46bf9e + _0x5745b4[14]];
              break;
            }
          case _0x846413.LTE:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 <= _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.LOAD_GLOBAL:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x414b66 = this[_0x3c794c(345)]();
              if (!(_0x414b66 in this.globals)) throw new ReferenceError(_0x414b66 + " is not defined");
              _0x2f3c57[_0x46bf9e + _0x151933] = this[_0x3c794c(249)][_0x414b66];
              break;
            }
          case _0x846413.LOAD_CONST:
            {
              var _0x151933 = this[_0x3c794c(244)]();
              _0x2f3c57[_0x46bf9e + _0x151933] = this[_0x3c794c(345)]();
              break;
            }
          case _0x846413.JUMP_IF_FALSE:
            {
              var _0xb72f75 = this._operand(),
                _0x2f888a = this._operand();
              if (!_0x2f3c57[_0x46bf9e + _0xb72f75]) _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = _0x2f888a;
              break;
            }
          case _0x846413[_0x3c794c(381)]:
            {
              _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.CALL_METHOD:
            {
              var _0x151933 = this._operand(),
                _0x5b6c7e = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x184cd4 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x17912e = this[_0x3c794c(244)](),
                _0x3e2aa4;
              if (_0x17912e === _0x3cf288.CALL_SPREAD) _0x3e2aa4 = _0x2f3c57[_0x46bf9e + this._operand()];else {
                _0x3e2aa4 = new Array(_0x17912e);
                for (var _0x461f0d = 0; _0x461f0d < _0x17912e; _0x461f0d++) _0x3e2aa4[_0x461f0d] = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              }
              var _0x533b37 = _0x184cd4 && _0x55ba0b.get(_0x184cd4);
              _0x533b37 ? this._pushFrame(_0x533b37, _0x3e2aa4, _0x5b6c7e, _0x151933 << 1) : _0x2f3c57[_0x46bf9e + _0x151933] = _0x184cd4.apply(_0x5b6c7e, _0x3e2aa4);
              break;
            }
          case 63856:
            {
              let _0x38b558 = [this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand()],
                _0x45b222 = [_0x38b558[1], _0x38b558[3], _0x38b558[2], _0x38b558[4], _0x38b558[5], _0x38b558[6], _0x38b558[0]];
              var _0x151933 = _0x45b222[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x2f3c57[_0x46bf9e + _0x45b222[1]];
              var _0x151933 = _0x45b222[2],
                _0x5f1a13 = _0x45b222[3],
                _0x350095 = new Array(_0x5f1a13);
              for (var _0x461f0d = 0; _0x461f0d < _0x5f1a13; _0x461f0d++) _0x350095[_0x461f0d] = _0x2f3c57[_0x46bf9e + _0x45b222[4]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x350095;
              var _0x151933 = _0x45b222[5];
              _0x2f3c57[_0x46bf9e + _0x151933] = -_0x2f3c57[_0x46bf9e + _0x45b222[6]];
              break;
            }
          case 2535:
            {
              let _0x16b56f = [this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand()],
                _0x19955c = [_0x16b56f[8], _0x16b56f[2], _0x16b56f[7], _0x16b56f[11], _0x16b56f[4], _0x16b56f[12], _0x16b56f[13], _0x16b56f[14], _0x16b56f[1], _0x16b56f[5], _0x16b56f[9], _0x16b56f[0], _0x16b56f[10], _0x16b56f[6], _0x16b56f[3]];
              var _0x151933 = _0x19955c[0],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x19955c[1]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >> _0x2f3c57[_0x46bf9e + _0x19955c[2]];
              var _0x151933 = _0x19955c[3],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x19955c[4]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 !== _0x2f3c57[_0x46bf9e + _0x19955c[5]];
              var _0x151933 = _0x19955c[6],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x19955c[7]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 % _0x2f3c57[_0x46bf9e + _0x19955c[8]];
              var _0x151933 = _0x19955c[9],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x19955c[10]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 == _0x2f3c57[_0x46bf9e + _0x19955c[11]];
              var _0x151933 = _0x19955c[12],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x19955c[13]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >> _0x2f3c57[_0x46bf9e + _0x19955c[14]];
              break;
            }
          case _0x846413.LOAD_UPVALUE:
            {
              var _0x151933 = this[_0x3c794c(244)]();
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(354)]].upvalues[this._operand()][_0x3c794c(247)]();
              break;
            }
          case _0x846413.BOR:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 | _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.VOID:
            {
              var _0x151933 = this._operand();
              this[_0x3c794c(244)](), _0x2f3c57[_0x46bf9e + _0x151933] = void 0;
              break;
            }
          case _0x846413.SUB:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 - _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.NEW:
            {
              var _0x151933 = this._operand(),
                _0x184cd4 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x17912e = this._operand(),
                _0x3e2aa4;
              if (_0x17912e === _0x3cf288.CALL_SPREAD) _0x3e2aa4 = _0x2f3c57[_0x46bf9e + this._operand()];else {
                _0x3e2aa4 = new Array(_0x17912e);
                for (var _0x461f0d = 0; _0x461f0d < _0x17912e; _0x461f0d++) _0x3e2aa4[_0x461f0d] = _0x2f3c57[_0x46bf9e + this._operand()];
              }
              var _0x533b37 = _0x184cd4 && _0x55ba0b[_0x3c794c(295)](_0x184cd4);
              _0x533b37 ? this[_0x3c794c(362)](_0x533b37, _0x3e2aa4, Object.create(_0x533b37.prototype || null), _0x151933 << 1 | 1) : _0x2f3c57[_0x46bf9e + _0x151933] = Reflect.construct(_0x184cd4, _0x3e2aa4);
              break;
            }
          case _0x846413.USHR:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >>> _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(315)]:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 & _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(257)]:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x184cd4 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x17912e = this._operand(),
                _0x3e2aa4;
              if (_0x17912e === _0x3cf288.CALL_SPREAD) _0x3e2aa4 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];else {
                _0x3e2aa4 = new Array(_0x17912e);
                for (var _0x461f0d = 0; _0x461f0d < _0x17912e; _0x461f0d++) _0x3e2aa4[_0x461f0d] = _0x2f3c57[_0x46bf9e + this._operand()];
              }
              var _0x533b37 = _0x184cd4 && _0x55ba0b[_0x3c794c(295)](_0x184cd4);
              _0x533b37 ? this._pushFrame(_0x533b37, _0x3e2aa4, this.globals, _0x151933 << 1) : _0x2f3c57[_0x46bf9e + _0x151933] = _0x184cd4[_0x3c794c(319)](null, _0x3e2aa4);
              break;
            }
          case _0x846413[_0x3c794c(403)]:
            {
              var _0x151933 = this._operand();
              _0x2f3c57[_0x46bf9e + _0x151933] = ~_0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case 34678:
            {
              let _0x3c89e3 = [this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand()],
                _0xa53e2b = [_0x3c89e3[5], _0x3c89e3[3], _0x3c89e3[9], _0x3c89e3[1], _0x3c89e3[2], _0x3c89e3[4], _0x3c89e3[12], _0x3c89e3[11], _0x3c89e3[6], _0x3c89e3[8], _0x3c89e3[7], _0x3c89e3[10], _0x3c89e3[0]];
              var _0x151933 = _0xa53e2b[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = ~_0x2f3c57[_0x46bf9e + _0xa53e2b[1]];
              var _0x151933 = _0xa53e2b[2];
              _0x2f3c57[_0x46bf9e + _0x151933] = typeof _0x2f3c57[_0x46bf9e + _0xa53e2b[3]];
              var _0x151933 = _0xa53e2b[4],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0xa53e2b[5]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >> _0x2f3c57[_0x46bf9e + _0xa53e2b[6]];
              var _0x151933 = _0xa53e2b[7],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0xa53e2b[8]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 > _0x2f3c57[_0x46bf9e + _0xa53e2b[9]];
              var _0x151933 = _0xa53e2b[10],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0xa53e2b[11]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 <= _0x2f3c57[_0x46bf9e + _0xa53e2b[12]];
              break;
            }
          case _0x846413[_0x3c794c(339)]:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x5155e3 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x364d15 = this._operand();
              _0x5155e3.i >= _0x5155e3[_0x3c794c(202)].length ? _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = _0x364d15 : _0x2f3c57[_0x46bf9e + _0x151933] = _0x5155e3[_0x3c794c(202)][_0x5155e3.i++];
              break;
            }
          case 6336:
            {
              let _0x534d70 = [this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand()],
                _0x5de4cc = [_0x534d70[0], _0x534d70[2], _0x534d70[8], _0x534d70[5], _0x534d70[3], _0x534d70[6], _0x534d70[7], _0x534d70[1], _0x534d70[4]];
              var _0x151933 = _0x5de4cc[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = this[_0x3c794c(345)](_0x5de4cc[1], _0x5de4cc[2]);
              var _0x151933 = _0x5de4cc[3],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5de4cc[4]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 != _0x2f3c57[_0x46bf9e + _0x5de4cc[5]];
              var _0x151933 = _0x5de4cc[6],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5de4cc[7]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 === _0x2f3c57[_0x46bf9e + _0x5de4cc[8]];
              break;
            }
          case _0x846413.MUL:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 * _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.MOD:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 % _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413[_0x3c794c(221)]:
            {
              var _0x151933 = this._operand(),
                _0xa061b5 = this._operand(),
                _0x165d5a = this._operand(),
                _0x527835 = this._operand(),
                _0x594ddb = this[_0x3c794c(244)](),
                _0x1cb1dd = this._operand(),
                _0x4c0ebb = new Array(_0x594ddb);
              for (var _0x461f0d = 0; _0x461f0d < _0x594ddb; _0x461f0d++) {
                var _0x4c7e1a = this[_0x3c794c(244)](),
                  _0x1b1dfd = this._operand();
                _0x4c0ebb[_0x461f0d] = {
                  isLocal: _0x4c7e1a,
                  _index: _0x1b1dfd
                };
              }
              var _0x2fc35d = {
                  paramCount: _0x165d5a,
                  regCount: _0x527835,
                  startPc: _0xa061b5,
                  hasRest: _0x1cb1dd
                },
                _0x533b37 = new _0xcbed23(_0x2fc35d);
              for (var _0x461f0d = 0; _0x461f0d < _0x4c0ebb.length; _0x461f0d++) {
                var _0x56e292 = _0x4c0ebb[_0x461f0d];
                _0x56e292[_0x3c794c(373)] ? _0x533b37[_0x3c794c(375)].push(this.captureUpvalue(_0x391f30, _0x56e292._index)) : _0x533b37[_0x3c794c(375)].push(_0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(354)]][_0x3c794c(375)][_0x56e292._index]);
              }
              var _0x1ea3b9 = this,
                _0x1e6ebd = function (_0x94e520) {
                  return function () {
                    return new _0x7c3f6b(_0x1ea3b9.bytecode, _0x1ea3b9.constants, _0x1ea3b9.globals).run(_0x94e520, this == null ? _0x1ea3b9.globals : this, Array.prototype.slice.call(arguments));
                  };
                }(_0x533b37);
              _0x55ba0b.set(_0x1e6ebd, _0x533b37), _0x1e6ebd[_0x3c794c(364)] = _0x533b37[_0x3c794c(364)], _0x2f3c57[_0x46bf9e + _0x151933] = _0x1e6ebd;
              break;
            }
          case _0x846413[_0x3c794c(303)]:
            {
              var _0x19be99 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x6f2077 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x522d41 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x8a88e1 = Object.getOwnPropertyDescriptor(_0x19be99, _0x6f2077),
                _0x2ab5ab = {
                  get: _0x522d41,
                  configurable: !![],
                  enumerable: !![]
                };
              _0x8a88e1 && typeof _0x8a88e1[_0x3c794c(261)] === "function" && (_0x2ab5ab[_0x3c794c(261)] = _0x8a88e1.set);
              Object.defineProperty(_0x19be99, _0x6f2077, _0x2ab5ab);
              break;
            }
          case _0x846413[_0x3c794c(230)]:
            {
              var _0x151933 = this._operand(),
                _0x5f1a13 = this._operand(),
                _0x350095 = new Array(_0x5f1a13);
              for (var _0x461f0d = 0; _0x461f0d < _0x5f1a13; _0x461f0d++) _0x350095[_0x461f0d] = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x350095;
              break;
            }
          case _0x846413.GT:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 > _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(356)]:
            {
              var _0x151933 = this[_0x3c794c(244)]();
              _0x2f3c57[_0x46bf9e + _0x151933] = this._operand();
              break;
            }
          case _0x846413[_0x3c794c(292)]:
            {
              debugger;
              break;
            }
          case _0x846413[_0x3c794c(324)]:
            {
              var _0x125228 = this._operand(),
                _0x36b9f3 = this._operand(),
                _0x2eabe7 = this[_0x3c794c(244)](),
                _0x4e162c = this[_0x3c794c(244)]() ^ _0x125228 | 0;
              for (var _0x1fb8e1 = _0x36b9f3; _0x1fb8e1 < _0x2eabe7; _0x1fb8e1++) {
                _0x4e162c = _0x4e162c + 2654435769 | 0, this.bytecode[_0x125228 + (_0x1fb8e1 - _0x36b9f3)] = (this.bytecode[_0x1fb8e1] ^ (_0x4e162c ^ _0x4e162c >>> 13)) >>> 0;
              }
              break;
            }
          case _0x846413.DELETE_PROP:
            {
              var _0x151933 = this[_0x3c794c(244)](),
                _0x19be99 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x6f2077 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = delete _0x19be99[_0x6f2077];
              break;
            }
          case 30526:
            {
              let _0x10f91a = [this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this[_0x3c794c(244)]()],
                _0x367dda = [_0x10f91a[1], _0x10f91a[2], _0x10f91a[3], _0x10f91a[4], _0x10f91a[6], _0x10f91a[9], _0x10f91a[5], _0x10f91a[13], _0x10f91a[12], _0x10f91a[7], _0x10f91a[0], _0x10f91a[10], _0x10f91a[11], _0x10f91a[8]];
              var _0x151933 = _0x367dda[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = ~_0x2f3c57[_0x46bf9e + _0x367dda[1]];
              var _0x151933 = _0x367dda[2],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x367dda[3]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 <= _0x2f3c57[_0x46bf9e + _0x367dda[4]];
              var _0x151933 = _0x367dda[5],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x367dda[6]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 - _0x2f3c57[_0x46bf9e + _0x367dda[7]];
              var _0x151933 = _0x367dda[8],
                _0x5f1a13 = _0x367dda[9],
                _0x350095 = new Array(_0x5f1a13);
              for (var _0x461f0d = 0; _0x461f0d < _0x5f1a13; _0x461f0d++) _0x350095[_0x461f0d] = _0x2f3c57[_0x46bf9e + _0x367dda[10]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x350095;
              var _0x151933 = _0x367dda[11],
                _0x5f1a13 = _0x367dda[12],
                _0x350095 = new Array(_0x5f1a13);
              for (var _0x461f0d = 0; _0x461f0d < _0x5f1a13; _0x461f0d++) _0x350095[_0x461f0d] = _0x2f3c57[_0x46bf9e + _0x367dda[13]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x350095;
              break;
            }
          case _0x846413[_0x3c794c(318)]:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >= _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case 50439:
            {
              let _0x541d84 = [this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand()],
                _0x5bd73c = [_0x541d84[5], _0x541d84[8], _0x541d84[0], _0x541d84[10], _0x541d84[11], _0x541d84[12], _0x541d84[4], _0x541d84[1], _0x541d84[6], _0x541d84[2], _0x541d84[9], _0x541d84[3], _0x541d84[7]];
              var _0x151933 = _0x5bd73c[0],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5bd73c[1]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 & _0x2f3c57[_0x46bf9e + _0x5bd73c[2]];
              var _0x151933 = _0x5bd73c[3],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5bd73c[4]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 * _0x2f3c57[_0x46bf9e + _0x5bd73c[5]];
              var _0x151933 = _0x5bd73c[6];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x2f3c57[_0x46bf9e + _0x5bd73c[7]];
              var _0x151933 = _0x5bd73c[8],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5bd73c[9]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 < _0x2f3c57[_0x46bf9e + _0x5bd73c[10]];
              var _0x151933 = _0x5bd73c[11];
              _0x2f3c57[_0x46bf9e + _0x151933] = typeof _0x2f3c57[_0x46bf9e + _0x5bd73c[12]];
              break;
            }
          case _0x846413[_0x3c794c(344)]:
            {
              var _0x151933 = this[_0x3c794c(244)]();
              _0x2f3c57[_0x46bf9e + _0x151933] = -_0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.TRY_END:
            {
              _0x2f3c57[_0x391f30 + _0x8f2ed.HANDLERS][_0x3c794c(258)]();
              break;
            }
          case _0x846413.SET_PROP:
            {
              var _0x19be99 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x6f2077 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x115ee4 = _0x2f3c57[_0x46bf9e + this._operand()];
              Reflect.set(_0x19be99, _0x6f2077, _0x115ee4);
              break;
            }
          case _0x846413.JUMP:
            _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = this[_0x3c794c(244)]();
            break;
          case _0x846413.STORE_UPVALUE:
            {
              var _0x1ff8aa = this._operand();
              _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(354)]].upvalues[_0x1ff8aa]._write(_0x2f3c57[_0x46bf9e + this._operand()]);
              break;
            }
          default:
            throw new Error(_0x3c794c(203) + _0x2528a4 + " at pc " + (_0x2f3c57[_0x391f30 + _0x8f2ed.PC] - 1));
          case 28949:
            {
              let _0x1c321a = [this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand()],
                _0x55c257 = [_0x1c321a[12], _0x1c321a[0], _0x1c321a[4], _0x1c321a[8], _0x1c321a[11], _0x1c321a[3], _0x1c321a[2], _0x1c321a[1], _0x1c321a[6], _0x1c321a[9], _0x1c321a[7], _0x1c321a[5], _0x1c321a[10]];
              var _0x151933 = _0x55c257[0],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x55c257[1]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 + _0x2f3c57[_0x46bf9e + _0x55c257[2]];
              var _0x151933 = _0x55c257[3];
              _0x2f3c57[_0x46bf9e + _0x151933] = !_0x2f3c57[_0x46bf9e + _0x55c257[4]];
              var _0x151933 = _0x55c257[5];
              _0x2f3c57[_0x46bf9e + _0x151933] = !_0x2f3c57[_0x46bf9e + _0x55c257[6]];
              var _0x151933 = _0x55c257[7],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x55c257[8]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >> _0x2f3c57[_0x46bf9e + _0x55c257[9]];
              var _0x151933 = _0x55c257[10],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x55c257[11]];
              _0x2f3c57[_0x46bf9e + _0x151933] = Math.pow(_0x150ca9, _0x2f3c57[_0x46bf9e + _0x55c257[12]]);
              break;
            }
          case _0x846413.MOVE:
            {
              var _0x151933 = this._operand();
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413[_0x3c794c(393)]:
            {
              var _0x151933 = this._operand(),
                _0x19be99 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x50de24 = [];
              if (_0x19be99 !== null && _0x19be99 !== void 0) {
                var _0x4e0ba1 = Object.create(null),
                  _0x4f1598 = Object(_0x19be99);
                while (_0x4f1598 !== null) {
                  var _0x5b026a = Object.getOwnPropertyNames(_0x4f1598);
                  for (var _0x461f0d = 0; _0x461f0d < _0x5b026a[_0x3c794c(391)]; _0x461f0d++) {
                    var _0x5d528f = _0x5b026a[_0x461f0d];
                    if (!(_0x5d528f in _0x4e0ba1)) {
                      _0x4e0ba1[_0x5d528f] = !![];
                      var _0x24f90e = Object.getOwnPropertyDescriptor(_0x4f1598, _0x5d528f);
                      _0x24f90e && _0x24f90e[_0x3c794c(333)] && _0x50de24.push(_0x5d528f);
                    }
                  }
                  _0x4f1598 = Object.getPrototypeOf(_0x4f1598);
                }
              }
              _0x2f3c57[_0x46bf9e + _0x151933] = {
                _keys: _0x50de24,
                i: 0
              };
              break;
            }
          case _0x846413.EQ:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 === _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case 49131:
            {
              let _0x2db166 = [this[_0x3c794c(244)](), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand()],
                _0x506d88 = [_0x2db166[5], _0x2db166[3], _0x2db166[11], _0x2db166[7], _0x2db166[6], _0x2db166[1], _0x2db166[2], _0x2db166[10], _0x2db166[4], _0x2db166[9], _0x2db166[0], _0x2db166[8]];
              var _0x151933 = _0x506d88[0],
                _0x414b66 = this._constant(_0x506d88[1], _0x506d88[2]);
              if (!(_0x414b66 in this.globals)) throw new ReferenceError(_0x414b66 + _0x3c794c(400));
              _0x2f3c57[_0x46bf9e + _0x151933] = this[_0x3c794c(249)][_0x414b66];
              var _0x151933 = _0x506d88[3],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x506d88[4]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 !== _0x2f3c57[_0x46bf9e + _0x506d88[5]];
              var _0x151933 = _0x506d88[6];
              _0x2f3c57[_0x46bf9e + _0x151933] = this[_0x3c794c(345)](_0x506d88[7], _0x506d88[8]);
              var _0x151933 = _0x506d88[9],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x506d88[10]];
              _0x2f3c57[_0x46bf9e + _0x151933] = Math[_0x3c794c(245)](_0x150ca9, _0x2f3c57[_0x46bf9e + _0x506d88[11]]);
              break;
            }
          case _0x846413.THROW:
            throw _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
          case _0x846413.LOAD_THIS:
            {
              var _0x151933 = this[_0x3c794c(244)]();
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x2f3c57[_0x391f30 + _0x8f2ed.THIS];
              break;
            }
          case _0x846413.INSTANCEOF:
            {
              var _0x151933 = this._operand(),
                _0x19be99 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x19be99 instanceof _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413[_0x3c794c(304)]:
            {
              var _0x42ae61 = _0x2f3c57[_0x391f30 + _0x8f2ed.HANDLERS];
              if (!_0x42ae61) _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(280)]] = _0x42ae61 = [];
              _0x42ae61.push({
                handlerPc: this[_0x3c794c(244)](),
                exceptionReg: this[_0x3c794c(244)]()
              });
              break;
            }
          case _0x846413.LOOSE_EQ:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 == _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.RETURN:
            {
              var _0x554f06 = _0x2f3c57[_0x46bf9e + this._operand()];
              this[_0x3c794c(239)](_0x391f30);
              var _0x4f0009 = _0x2f3c57[_0x391f30 + _0x8f2ed.CALLER],
                _0x3d6a58 = _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(264)]];
              if (_0x3d6a58 & 1 && (typeof _0x554f06 !== _0x3c794c(377) || _0x554f06 === null)) _0x554f06 = _0x2f3c57[_0x391f30 + _0x8f2ed.THIS];
              var _0x489838 = _0x391f30 + _0x2f3c57[_0x391f30 + _0x8f2ed.FRAME_SIZE];
              for (var _0x461f0d = _0x391f30; _0x461f0d < _0x489838; _0x461f0d++) _0x2f3c57[_0x461f0d] = void 0;
              this._regsTop = _0x391f30, this._f = _0x4f0009, _0x2f3c57[_0x4f0009 ? _0x2f3c57[_0x4f0009 + _0x8f2ed[_0x3c794c(201)]] + (_0x3d6a58 >> 1) : 0] = _0x554f06;
              break;
            }
          case _0x846413[_0x3c794c(229)]:
            {
              var _0x42ae61 = _0x2f3c57[_0x391f30 + _0x8f2ed.HANDLERS];
              if (!_0x42ae61) _0x2f3c57[_0x391f30 + _0x8f2ed[_0x3c794c(280)]] = _0x42ae61 = [];
              _0x42ae61[_0x3c794c(196)]({
                finallyPc: this[_0x3c794c(244)](),
                contReg: this[_0x3c794c(244)](),
                payloadReg: this._operand(),
                throwPad: this._operand()
              });
              break;
            }
          case 45418:
            {
              let _0x2b4fc0 = [this[_0x3c794c(244)](), this._operand(), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand()],
                _0x29e57e = [_0x2b4fc0[10], _0x2b4fc0[4], _0x2b4fc0[1], _0x2b4fc0[9], _0x2b4fc0[6], _0x2b4fc0[2], _0x2b4fc0[7], _0x2b4fc0[5], _0x2b4fc0[0], _0x2b4fc0[8], _0x2b4fc0[3]];
              var _0x151933 = _0x29e57e[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = ~_0x2f3c57[_0x46bf9e + _0x29e57e[1]];
              var _0x151933 = _0x29e57e[2],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x29e57e[3]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 ^ _0x2f3c57[_0x46bf9e + _0x29e57e[4]];
              var _0x151933 = _0x29e57e[5],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x29e57e[6]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 - _0x2f3c57[_0x46bf9e + _0x29e57e[7]];
              var _0x151933 = _0x29e57e[8],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x29e57e[9]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 + _0x2f3c57[_0x46bf9e + _0x29e57e[10]];
              break;
            }
          case 13091:
            {
              let _0x493bbf = [this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)]()],
                _0x498a7a = [_0x493bbf[1], _0x493bbf[6], _0x493bbf[5], _0x493bbf[3], _0x493bbf[0], _0x493bbf[2], _0x493bbf[7], _0x493bbf[4]];
              var _0x151933 = _0x498a7a[0],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x498a7a[1]];
              _0x2f3c57[_0x46bf9e + _0x151933] = Math.pow(_0x150ca9, _0x2f3c57[_0x46bf9e + _0x498a7a[2]]);
              var _0x151933 = _0x498a7a[3];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x2f3c57[_0x46bf9e + _0x498a7a[4]];
              var _0x151933 = _0x498a7a[5],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x498a7a[6]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 % _0x2f3c57[_0x46bf9e + _0x498a7a[7]];
              break;
            }
          case _0x846413[_0x3c794c(388)]:
            {
              var _0x151933 = this._operand(),
                _0x150ca9 = _0x2f3c57[_0x46bf9e + this._operand()];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 + _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()];
              break;
            }
          case _0x846413.STORE_GLOBAL:
            {
              this[_0x3c794c(249)][this._constant()] = _0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case _0x846413.JUMP_IF_TRUE:
            {
              var _0xb72f75 = this._operand(),
                _0x2f888a = this._operand();
              if (_0x2f3c57[_0x46bf9e + _0xb72f75]) _0x2f3c57[_0x391f30 + _0x8f2ed.PC] = _0x2f888a;
              break;
            }
          case _0x846413.DEFINE_SETTER:
            {
              var _0x19be99 = _0x2f3c57[_0x46bf9e + this[_0x3c794c(244)]()],
                _0x6f2077 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x182270 = _0x2f3c57[_0x46bf9e + this._operand()],
                _0x8a88e1 = Object[_0x3c794c(335)](_0x19be99, _0x6f2077),
                _0x4e2646 = {
                  set: _0x182270,
                  configurable: !![],
                  enumerable: !![]
                };
              _0x8a88e1 && typeof _0x8a88e1[_0x3c794c(295)] === "function" && (_0x4e2646.get = _0x8a88e1.get);
              Object[_0x3c794c(325)](_0x19be99, _0x6f2077, _0x4e2646);
              break;
            }
          case 49415:
            {
              let _0x31cc81 = [this._operand(), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)]()],
                _0x5e3f54 = [_0x31cc81[7], _0x31cc81[9], _0x31cc81[4], _0x31cc81[5], _0x31cc81[8], _0x31cc81[3], _0x31cc81[11], _0x31cc81[10], _0x31cc81[2], _0x31cc81[1], _0x31cc81[6], _0x31cc81[0]];
              var _0x151933 = _0x5e3f54[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = this[_0x3c794c(345)](_0x5e3f54[1], _0x5e3f54[2]);
              var _0x151933 = _0x5e3f54[3],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5e3f54[4]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 != _0x2f3c57[_0x46bf9e + _0x5e3f54[5]];
              var _0x151933 = _0x5e3f54[6],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5e3f54[7]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 / _0x2f3c57[_0x46bf9e + _0x5e3f54[8]];
              var _0x151933 = _0x5e3f54[9],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x5e3f54[10]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 <= _0x2f3c57[_0x46bf9e + _0x5e3f54[11]];
              break;
            }
          case _0x846413[_0x3c794c(332)]:
            {
              var _0x151933 = this._operand();
              _0x2f3c57[_0x46bf9e + _0x151933] = +_0x2f3c57[_0x46bf9e + this._operand()];
              break;
            }
          case 678:
            {
              let _0x3f2d56 = [this._operand(), this[_0x3c794c(244)](), this._operand(), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this[_0x3c794c(244)](), this._operand(), this._operand(), this._operand(), this._operand(), this[_0x3c794c(244)]()],
                _0x4f4024 = [_0x3f2d56[4], _0x3f2d56[2], _0x3f2d56[10], _0x3f2d56[6], _0x3f2d56[8], _0x3f2d56[5], _0x3f2d56[9], _0x3f2d56[3], _0x3f2d56[0], _0x3f2d56[7], _0x3f2d56[1]];
              var _0x151933 = _0x4f4024[0];
              _0x2f3c57[_0x46bf9e + _0x151933] = -_0x2f3c57[_0x46bf9e + _0x4f4024[1]];
              var _0x151933 = _0x4f4024[2],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x4f4024[3]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 + _0x2f3c57[_0x46bf9e + _0x4f4024[4]];
              var _0x151933 = _0x4f4024[5],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x4f4024[6]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 >= _0x2f3c57[_0x46bf9e + _0x4f4024[7]];
              var _0x151933 = _0x4f4024[8],
                _0x150ca9 = _0x2f3c57[_0x46bf9e + _0x4f4024[9]];
              _0x2f3c57[_0x46bf9e + _0x151933] = _0x150ca9 === _0x2f3c57[_0x46bf9e + _0x4f4024[10]];
              break;
            }
        }
      } catch (_0x46b6c9) {
        var _0x87275 = 0,
          _0x19d94d = this._f;
        while (_0x19d94d) {
          var _0x4f35d0 = _0x2f3c57[_0x19d94d + _0x8f2ed[_0x3c794c(280)]];
          if (_0x4f35d0 && _0x4f35d0.length > 0) {
            _0x87275 = _0x19d94d;
            break;
          }
          this._closeUpvaluesFor(_0x19d94d), this[_0x3c794c(392)] = _0x19d94d, _0x19d94d = _0x2f3c57[_0x19d94d + _0x8f2ed.CALLER], this._f = _0x19d94d;
        }
        if (!_0x87275) throw _0x46b6c9;
        var _0x189f4f = _0x2f3c57[_0x87275 + _0x8f2ed.HANDLERS][_0x3c794c(258)](),
          _0x8299bd = _0x2f3c57[_0x87275 + _0x8f2ed.REG_BASE];
        _0x189f4f.exceptionReg !== void 0 ? (_0x2f3c57[_0x8299bd + _0x189f4f.exceptionReg] = _0x46b6c9, _0x2f3c57[_0x87275 + _0x8f2ed.PC] = _0x189f4f[_0x3c794c(198)]) : (_0x2f3c57[_0x8299bd + _0x189f4f[_0x3c794c(376)]] = _0x189f4f[_0x3c794c(380)], _0x2f3c57[_0x8299bd + _0x189f4f[_0x3c794c(235)]] = _0x46b6c9, _0x2f3c57[_0x87275 + _0x8f2ed.PC] = _0x189f4f.finallyPc), this._regsTop = _0x87275 + _0x2f3c57[_0x87275 + _0x8f2ed.FRAME_SIZE], this._f = _0x87275;
      }
      if (!this._f) return this[_0x3c794c(267)][0];
    }
  };
  var _0x10870b = _0x4780b3;
  typeof window !== _0x374ade(236) && (_0x10870b[_0x374ade(231)] = window, _0x10870b[_0x374ade(204)] = typeof document !== "undefined" ? document : void 0);
  typeof module !== _0x374ade(236) && (_0x10870b.module = module, _0x10870b.exports = typeof exports !== "undefined" ? exports : void 0);
  var _0x4d8ce7 = new _0x7c3f6b(_0xfd8ad3(_0x3f9e5d), _0x5b52b4, _0x10870b);
  _0x4d8ce7[_0x374ade(409)](new _0xcbed23({
    paramCount: 0,
    regCount: _0x5e98e9,
    startPc: _0xf80770
  }), void 0, null);
}(__vmBox2, {
  now: Date.now
});
var __vmExports2 = __vmBox2.__shopkeeper_exports;
var DEFAULT_SHOP_POLICY = __vmExports2.DEFAULT_SHOP_POLICY;
var DEFAULT_OFFER_POLICY = __vmExports2.DEFAULT_OFFER_POLICY;
var parseUtcDateTime = __vmExports2.parseUtcDateTime;
var validatePolicy = __vmExports2.validatePolicy;
var createPolicyStore = __vmExports2.createPolicyStore;
import { ActionFormData as ActionFormData3, ModalFormData as ModalFormData2 } from "@minecraft/server-ui";
import * as _0x5d2af8 from "@minecraft/server";
var KINDS = ["shop", "offer", "event", "deco"],
  SEASONS = ["all", "spring", "summer", "autumn", "winter"];
function notice(_0x3083e1, _0x4b3b13) {
  const _0x2d3dcc = _0x12afc9;
  _0x3083e1[_0x2d3dcc(335)]({
    rawtext: [{
      translate: _0x4b3b13
    }]
  });
}
function policyErrorKey(_0x2eb30a) {
  const _0xa1706d = _0x12afc9,
    _0x409694 = {
      PAsok: _0xa1706d(410),
      mgaqg: _0xa1706d(147),
      nNbPR: "shopkeeper.policy.revision.changed",
      ClcFZ: _0xa1706d(254),
      hIlop: function (_0xf3c4e4, _0x3b78a1) {
        return _0xf3c4e4 === _0x3b78a1;
      },
      axDcG: _0xa1706d(207)
    };
  if (_0x2eb30a?.[_0xa1706d(221)] === _0x409694[_0xa1706d(235)]) return "shopkeeper.policy.schedule.first";
  if (_0x2eb30a?.[_0xa1706d(221)] === _0x409694.mgaqg) return _0xa1706d(200);
  if (_0x2eb30a?.["message"] === _0xa1706d(419)) return _0x409694[_0xa1706d(217)];
  if (_0x2eb30a?.["message"] === _0xa1706d(227)) return _0x409694.ClcFZ;
  if (_0x409694[_0xa1706d(220)](_0x2eb30a?.[_0xa1706d(221)], _0x409694.axDcG)) return _0xa1706d(323);
  return "shopkeeper.policy.invalid";
}
function showPolicyForm(_0x3cb87a, _0xbaa1a, _0x13a5db) {
  const _0x5b6e50 = _0x12afc9;
  return _0x3cb87a[_0x5b6e50(263)](_0xbaa1a).then(_0x284549 => _0x284549[_0x5b6e50(404)] && _0x284549[_0x5b6e50(222)] === "UserBusy" ? void 0 : _0x13a5db(_0x284549)).catch(_0x24bf64 => console[_0x5b6e50(418)]("[Shopkeeper policy UI] " + _0x24bf64));
}
function showChestForm(_0x11ea22, _0x476376, _0x40617e, _0x3cda24) {
  const _0x21db9f = _0x12afc9,
    _0x5936a6 = {
      LUutj: function (_0x311c99, _0x2552c7) {
        return _0x311c99 !== _0x2552c7;
      },
      zjWGg: function (_0x4ea9cc) {
        return _0x4ea9cc?.();
      },
      oPtjd: function (_0x4e27ae, _0x4ebc50) {
        return _0x4e27ae(_0x4ebc50);
      }
    };
  _0x5d2af8[_0x21db9f(218)][_0x21db9f(373)](() => _0x11ea22.show(_0x476376)[_0x21db9f(289)](_0x47e020 => {
    const _0x2b0183 = _0x21db9f;
    if (_0x47e020[_0x2b0183(404)] || _0x47e020.selection === void 0) return _0x3cda24?.();
    if (_0x5936a6[_0x2b0183(223)](_0x47e020[_0x2b0183(226)], null) && _0x47e020[_0x2b0183(226)] !== void 0) return _0x5936a6.zjWGg(_0x3cda24);
    _0x5936a6[_0x2b0183(156)](_0x40617e, _0x47e020[_0x2b0183(251)]);
  })[_0x21db9f(363)](_0x402f75 => console[_0x21db9f(418)]("[Shopkeeper policy UI] " + _0x402f75)));
}
function newId() {
  const _0x56252a = _0x12afc9,
    _0x222518 = {
      yVBbc: function (_0x2ebfba, _0x2ab818) {
        return _0x2ebfba * _0x2ab818;
      }
    };
  return "p_" + Date.now().toString(36) + "_" + Math[_0x56252a(270)](_0x222518.yVBbc(Math[_0x56252a(191)](), 1048576)).toString(36);
}
function entryName(_0x5c7ed5, _0x3b0326, _0xe0d925) {
  const _0x570fbf = _0x12afc9;
  try {
    return (_0x5c7ed5.get(_0x3b0326, _0xe0d925)?.[_0x570fbf(382)] || _0xe0d925) + " (" + _0xe0d925 + ")";
  } catch (_0x2d302f) {
    return _0xe0d925;
  }
}
function parseShopLevels(_0x303b4b) {
  const _0x2059d1 = _0x12afc9;
  return _0x303b4b[_0x2059d1(313)](",")[_0x2059d1(224)](_0x1dd653 => {
    const _0x205c7c = _0x2059d1,
      [_0xf4d7f7, _0x209d5b] = _0x1dd653.split(":").map(_0x1f82b0 => Number(_0x1f82b0[_0x205c7c(340)]()));
    return {
      sales: _0xf4d7f7,
      level: _0x209d5b
    };
  });
}
function parseReputation(_0x45de55) {
  const _0x3e69d9 = _0x12afc9;
  return _0x45de55[_0x3e69d9(313)](",")[_0x3e69d9(224)](_0x4f9dfe => {
    const _0x35c9f8 = _0x3e69d9,
      [_0x157ba4, _0x4b0f3f] = _0x4f9dfe.split(":")[_0x35c9f8(224)](_0x374b31 => Number(_0x374b31[_0x35c9f8(340)]()));
    return {
      purchases: _0x157ba4,
      discount: _0x4b0f3f
    };
  });
}
function policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86, _0x3b71bf = null, _0x39bd1b = 0) {
  const _0x43918f = _0x12afc9,
    _0x5a2ede = {
      BYzGX: function (_0x213c30) {
        return _0x213c30();
      },
      qSubm: "shopkeeper.back",
      DlJLi: function (_0x49c22a, _0x165ca4, _0x5e54a3, _0x142e47) {
        return _0x49c22a(_0x165ca4, _0x5e54a3, _0x142e47);
      },
      MyImK: _0x43918f(357),
      RiuWJ: function (_0x866e83) {
        return _0x866e83();
      },
      EOBic: function (_0x6c9bea, _0x43b91a) {
        return _0x6c9bea * _0x43b91a;
      },
      nAxTu: function (_0x15a533, _0x42ec9b) {
        return _0x15a533 === _0x42ec9b;
      },
      hzeko: function (_0x3ac44b, _0x565fd6, _0x50fea0, _0x4fa646) {
        return _0x3ac44b(_0x565fd6, _0x50fea0, _0x4fa646);
      },
      iyagh: _0x43918f(208)
    };
  if (!_0x3f9a75[_0x43918f(267)](_0x43918f(215))) return;
  if (!_0x3b71bf) {
    const _0x11ac7c = new ActionFormData3()[_0x43918f(384)]({
      translate: "shopkeeper.policy.library"
    });
    for (const _0x2c8a24 of KINDS) _0x11ac7c[_0x43918f(244)]({
      translate: _0x2c8a24 === _0x43918f(260) ? "shopkeeper.decolayout.kind" : _0x43918f(314) + _0x2c8a24
    });
    _0x11ac7c[_0x43918f(244)]({
      translate: _0x5a2ede[_0x43918f(355)]
    }), _0x5a2ede.DlJLi(showPolicyForm, _0x11ac7c, _0x3f9a75, _0x15d73d => {
      const _0xadd188 = _0x43918f;
      if (_0x15d73d[_0xadd188(404)]) return _0x5a2ede[_0xadd188(412)](_0x39ee86);
      if (_0x15d73d[_0xadd188(251)] < KINDS[_0xadd188(253)]) policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86, KINDS[_0x15d73d[_0xadd188(251)]]);else _0x39ee86();
    });
    return;
  }
  let _0x110e40;
  try {
    _0x110e40 = _0x397d7f.list(_0x3b71bf);
  } catch (_0x573c98) {
    return notice(_0x3f9a75, _0x5a2ede.MyImK), _0x5a2ede[_0x43918f(159)](_0x39ee86);
  }
  const _0x99c233 = _0x5a2ede.EOBic(Math[_0x43918f(302)](0, _0x39bd1b), 20),
    _0x4fb7b5 = _0x110e40.slice(_0x99c233, _0x99c233 + 20),
    _0x355e26 = new ActionFormData3().title({
      translate: _0x5a2ede[_0x43918f(320)](_0x3b71bf, _0x43918f(260)) ? _0x43918f(422) : _0x43918f(314) + _0x3b71bf
    });
  for (const _0x5e090c of _0x4fb7b5) _0x355e26.button({
    text: _0x5a2ede[_0x43918f(338)](entryName, _0x397d7f, _0x3b71bf, _0x5e090c)
  });
  _0x355e26.button({
    translate: _0x43918f(194)
  });
  if (_0x39bd1b > 0) _0x355e26[_0x43918f(244)]({
    translate: "shopkeeper.policy.prev"
  });
  if (_0x99c233 + 20 < _0x110e40.length) _0x355e26[_0x43918f(244)]({
    translate: _0x5a2ede[_0x43918f(195)]
  });
  _0x355e26[_0x43918f(244)]({
    translate: _0x43918f(431)
  }), showPolicyForm(_0x355e26, _0x3f9a75, _0x2c7a4e => {
    const _0x49505b = _0x43918f;
    if (_0x2c7a4e[_0x49505b(404)]) return policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86);
    const _0x40df8f = _0x2c7a4e[_0x49505b(251)];
    if (_0x40df8f < _0x4fb7b5.length) return policyDetailUi(_0x3f9a75, _0x397d7f, _0x3b71bf, _0x4fb7b5[_0x40df8f], () => policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86, _0x3b71bf, _0x39bd1b));
    let _0x584afa = _0x4fb7b5[_0x49505b(253)];
    if (_0x40df8f === _0x584afa++) return policyEditUi(_0x3f9a75, _0x397d7f, _0x3b71bf, null, () => policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86, _0x3b71bf, _0x39bd1b));
    if (_0x39bd1b > 0 && _0x40df8f === _0x584afa++) return policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86, _0x3b71bf, _0x39bd1b - 1);
    if (_0x99c233 + 20 < _0x110e40[_0x49505b(253)] && _0x40df8f === _0x584afa++) return policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86, _0x3b71bf, _0x39bd1b + 1);
    policyLibraryUi(_0x3f9a75, _0x397d7f, _0x39ee86);
  });
}
function policySelectUi(_0x30824d, _0x4a6366, _0x20bebe, _0x33fea3, _0xae85b, _0x1e62ef, _0x538168 = 0) {
  const _0x5e949d = _0x12afc9,
    _0x2e536e = {
      gQccW: function (_0x55f119) {
        return _0x55f119();
      },
      ydyTV: "admin",
      cAIac: function (_0x528ff5, _0xde214f) {
        return _0x528ff5 === _0xde214f;
      },
      foyUX: function (_0x7259f5, _0x221061, _0xacfd15, _0x1411f5, _0x86fa9f, _0x296497, _0x53edae, _0x5a9c19) {
        return _0x7259f5(_0x221061, _0xacfd15, _0x1411f5, _0x86fa9f, _0x296497, _0x53edae, _0x5a9c19);
      },
      QlDkK: function (_0x465d5d, _0x4831fb) {
        return _0x465d5d - _0x4831fb;
      },
      ytbZK: function (_0x217f25, _0x6eeb8a) {
        return _0x217f25 === _0x6eeb8a;
      },
      OCFpk: function (_0x30d9c7, _0x403081, _0x361f00, _0x53baf2) {
        return _0x30d9c7(_0x403081, _0x361f00, _0x53baf2);
      }
    };
  if (!_0x30824d[_0x5e949d(267)](_0x5e949d(215))) return;
  const _0x406eb7 = _0x4a6366[_0x5e949d(414)](_0x20bebe),
    _0x39872d = _0x538168 * 20,
    _0x102e52 = _0x406eb7[_0x5e949d(348)](_0x39872d, _0x39872d + 20),
    _0x86a24 = new ActionFormData3()[_0x5e949d(384)]({
      translate: "shopkeeper.policy.assign"
    })[_0x5e949d(420)]({
      rawtext: [{
        translate: "shopkeeper.policy.current"
      }, {
        text: " " + entryName(_0x4a6366, _0x20bebe, _0x33fea3)
      }]
    });
  for (const _0x558cd7 of _0x102e52) _0x86a24[_0x5e949d(244)]({
    text: _0x2e536e.OCFpk(entryName, _0x4a6366, _0x20bebe, _0x558cd7)
  });
  if (_0x538168 > 0) _0x86a24[_0x5e949d(244)]({
    translate: _0x5e949d(212)
  });
  if (_0x39872d + 20 < _0x406eb7[_0x5e949d(253)]) _0x86a24.button({
    translate: _0x5e949d(208)
  });
  _0x86a24.button({
    translate: _0x5e949d(431)
  }), showPolicyForm(_0x86a24, _0x30824d, _0x5b4da5 => {
    const _0x389692 = _0x5e949d;
    if (_0x5b4da5.canceled) return _0x2e536e.gQccW(_0x1e62ef);
    if (_0x5b4da5[_0x389692(251)] < _0x102e52.length) {
      if (!_0x30824d[_0x389692(267)](_0x2e536e[_0x389692(415)])) return notice(_0x30824d, "shopkeeper.policy.admin.required");
      return _0xae85b(_0x102e52[_0x5b4da5[_0x389692(251)]]);
    }
    let _0x4992a2 = _0x102e52.length;
    if (_0x538168 > 0 && _0x2e536e.cAIac(_0x5b4da5[_0x389692(251)], _0x4992a2++)) return _0x2e536e[_0x389692(339)](policySelectUi, _0x30824d, _0x4a6366, _0x20bebe, _0x33fea3, _0xae85b, _0x1e62ef, _0x2e536e[_0x389692(259)](_0x538168, 1));
    if (_0x39872d + 20 < _0x406eb7.length && _0x2e536e[_0x389692(168)](_0x5b4da5.selection, _0x4992a2++)) return policySelectUi(_0x30824d, _0x4a6366, _0x20bebe, _0x33fea3, _0xae85b, _0x1e62ef, _0x538168 + 1);
    _0x1e62ef();
  });
}
function decoLayoutPageUi(_0x501cae, _0x3f0858, _0x1d423e, _0x37bb56, _0x34258f, _0x14f4a1) {
  const _0x1177c4 = _0x12afc9,
    _0x137656 = {
      TVXYF: function (_0x53f5b6) {
        return _0x53f5b6();
      },
      YwPZH: "deco",
      UkESk: "shopkeeper.back"
    };
  if (!_0x501cae[_0x1177c4(267)](_0x1177c4(215))) return;
  const _0x2a2138 = new ActionFormData3()[_0x1177c4(384)]({
    translate: _0x1177c4(322)
  });
  _0x2a2138[_0x1177c4(244)]({
    translate: _0x1177c4(281)
  });
  if (_0x1d423e) _0x2a2138[_0x1177c4(244)]({
    translate: _0x1177c4(162)
  });
  _0x2a2138[_0x1177c4(244)]({
    translate: _0x137656[_0x1177c4(265)]
  }), showPolicyForm(_0x2a2138, _0x501cae, _0xe11442 => {
    const _0x20a890 = _0x1177c4;
    if (_0xe11442[_0x20a890(404)] || _0xe11442.selection === void 0) return _0x137656.TVXYF(_0x14f4a1);
    if (_0xe11442[_0x20a890(251)] === 0) return policySelectUi(_0x501cae, _0x3f0858, _0x137656[_0x20a890(327)], _0x1d423e, _0x37bb56, _0x14f4a1);
    if (_0x1d423e && _0xe11442[_0x20a890(251)] === 1) return _0x34258f();
    _0x14f4a1();
  });
}
function editAssignedPolicyUi(_0x44fdd3, _0x4df9b1, _0x5984b6, _0x17f19e, _0x3a1164) {
  const _0x1d08ee = _0x12afc9,
    _0x6e6a4 = {
      gQOVw: _0x1d08ee(215)
    };
  if (!_0x44fdd3.hasTag(_0x6e6a4[_0x1d08ee(181)])) return notice(_0x44fdd3, "shopkeeper.policy.admin.required");
  if (!_0x4df9b1[_0x1d08ee(299)](_0x5984b6, _0x17f19e)) return _0x3a1164();
  policyEditUi(_0x44fdd3, _0x4df9b1, _0x5984b6, _0x17f19e, _0x3a1164);
}
function editAssignedSuccessRateUi(_0x57d11f, _0x19c73f, _0x2810fe, _0x2d7e98) {
  const _0x5552b4 = _0x12afc9,
    _0x2cca4c = {
      kUBWa: function (_0x2a5450, _0x27230b, _0x5c8232) {
        return _0x2a5450(_0x27230b, _0x5c8232);
      },
      OlVAN: function (_0x1b0adc, _0x15f119) {
        return _0x1b0adc(_0x15f119);
      },
      qsUmn: function (_0x1411bc) {
        return _0x1411bc();
      },
      qRUBt: _0x5552b4(273),
      aHHKb: _0x5552b4(341),
      acmsB: "shopkeeper.settings.successrate.label",
      rOuYW: function (_0x3e1fc1, _0x496a1e, _0x4c2238, _0x2072d9) {
        return _0x3e1fc1(_0x496a1e, _0x4c2238, _0x2072d9);
      }
    };
  if (!_0x57d11f[_0x5552b4(267)](_0x5552b4(215))) return notice(_0x57d11f, _0x5552b4(387));
  const _0xe6fd1c = _0x19c73f[_0x5552b4(299)](_0x2cca4c[_0x5552b4(261)], _0x2810fe);
  if (!_0xe6fd1c) return _0x2d7e98();
  const _0x5b54dc = new ModalFormData2()[_0x5552b4(384)]({
    translate: _0x2cca4c.aHHKb
  }).slider({
    translate: _0x2cca4c.acmsB
  }, 0, 100, {
    defaultValue: _0xe6fd1c.data[_0x5552b4(426)]
  });
  _0x2cca4c[_0x5552b4(311)](showPolicyForm, _0x5b54dc, _0x57d11f, _0x58c956 => {
    const _0x5a7abd = _0x5552b4;
    if (_0x58c956[_0x5a7abd(404)]) return _0x2d7e98();
    if (!_0x57d11f[_0x5a7abd(267)]("admin")) return _0x2cca4c[_0x5a7abd(298)](notice, _0x57d11f, _0x5a7abd(387));
    const _0x4559dc = JSON[_0x5a7abd(242)](JSON[_0x5a7abd(293)](_0xe6fd1c[_0x5a7abd(307)]));
    _0x4559dc.successRate = _0x2cca4c[_0x5a7abd(163)](Number, _0x58c956[_0x5a7abd(301)]?.[0]);
    try {
      _0x19c73f.publish("offer", _0x2810fe, _0xe6fd1c.name, _0x4559dc, Date.now(), _0xe6fd1c[_0x5a7abd(316)]), _0x57d11f[_0x5a7abd(335)]({
        rawtext: [{
          translate: _0x5a7abd(271),
          with: [String(_0x4559dc[_0x5a7abd(426)])]
        }]
      }), _0x2cca4c.qsUmn(_0x2d7e98);
    } catch (_0x550f3f) {
      notice(_0x57d11f, policyErrorKey(_0x550f3f));
    }
  });
}
function policyDetailUi(_0x11619c, _0xb2e881, _0x39eff9, _0x395f6d, _0x4efd59) {
  const _0x39014c = _0x12afc9,
    _0xfef157 = {
      LMuaY: _0x39014c(390),
      NPgRl: function (_0x35d52d, _0x8a3ca8, _0x2070cd, _0x16da35, _0x554f43, _0x3ab813) {
        return _0x35d52d(_0x8a3ca8, _0x2070cd, _0x16da35, _0x554f43, _0x3ab813);
      },
      ZuDjY: "admin",
      rzVgQ: function (_0x40105e, _0x59fe6f, _0x474c90) {
        return _0x40105e(_0x59fe6f, _0x474c90);
      },
      GboNq: function (_0xb64fef, _0x7878f1, _0x523b51) {
        return _0xb64fef(_0x7878f1, _0x523b51);
      },
      yZXkr: function (_0x508c90) {
        return _0x508c90();
      },
      KlmXN: function (_0x1efa8c, _0x48f239, _0x7fd1ba) {
        return _0x1efa8c(_0x48f239, _0x7fd1ba);
      },
      SdhBo: function (_0x1500c5, _0x19d73e) {
        return _0x1500c5(_0x19d73e);
      },
      SLeAl: function (_0x262781, _0x2e062f) {
        return _0x262781 === _0x2e062f;
      },
      sAzXS: function (_0x3938ab, _0x524f26, _0x1dae00, _0x4f11a2, _0x90384e) {
        return _0x3938ab(_0x524f26, _0x1dae00, _0x4f11a2, _0x90384e);
      },
      WgHoG: "shopkeeper.policy.delete",
      YiBBs: "shopkeeper.policy.delete.confirm",
      bwYqc: function (_0x5f4d45, _0x3b369c) {
        return _0x5f4d45 === _0x3b369c;
      },
      JmsVw: function (_0x1abd5f, _0x541f61) {
        return _0x1abd5f > _0x541f61;
      },
      CxDFE: function (_0x4fcb56, _0x589e1a) {
        return _0x4fcb56 >= _0x589e1a;
      },
      Blwyx: _0x39014c(260),
      cHbxj: _0x39014c(303),
      tySRS: function (_0x3dc03d, _0x2d21c5, _0x4fc4fd, _0x3427e6) {
        return _0x3dc03d(_0x2d21c5, _0x4fc4fd, _0x3427e6);
      }
    },
    _0xd12373 = _0xb2e881[_0x39014c(299)](_0x39eff9, _0x395f6d);
  if (!_0xd12373) return _0x4efd59();
  const _0x58b4e0 = new ActionFormData3().title({
    text: _0xd12373[_0x39014c(382)]
  })[_0x39014c(420)]({
    text: _0x395f6d + " \xB7 v" + _0xd12373.revision
  });
  _0x58b4e0.button({
    translate: _0x39014c(344)
  }), _0x58b4e0[_0x39014c(244)]({
    translate: _0x39014c(238)
  });
  if (_0x39eff9 === _0x39014c(175)) _0x58b4e0[_0x39014c(244)]({
    translate: _0x39014c(361)
  });
  const _0x13fe99 = _0x39eff9 === _0x39014c(260) ? 2 : -1;
  if (_0xfef157.bwYqc(_0x39eff9, _0x39014c(260))) _0x58b4e0[_0x39014c(244)]({
    translate: _0x39014c(152)
  });
  const _0x2bbf08 = _0xfef157[_0x39014c(282)](_0xd12373[_0x39014c(376)], Date[_0x39014c(149)]()) ? _0x39eff9 === _0x39014c(175) ? 3 : 2 : -1;
  if (_0xfef157[_0x39014c(284)](_0x2bbf08, 0)) _0x58b4e0[_0x39014c(244)]({
    translate: _0x39014c(383)
  });
  const _0x34b681 = (_0xfef157[_0x39014c(328)](_0x39eff9, _0x39014c(175)) ? 3 : _0x39eff9 === _0xfef157[_0x39014c(277)] ? 3 : 2) + (_0x2bbf08 >= 0 ? 1 : 0);
  if (_0x395f6d !== _0xfef157[_0x39014c(198)]) _0x58b4e0[_0x39014c(244)]({
    translate: _0x39014c(180)
  });
  _0x58b4e0[_0x39014c(244)]({
    translate: "shopkeeper.back"
  }), _0xfef157[_0x39014c(228)](showPolicyForm, _0x58b4e0, _0x11619c, _0x3e6402 => {
    const _0x182bd1 = _0x39014c,
      _0xc5052b = {
        KMRQA: function (_0x1df9ee) {
          const _0xa7a4c5 = _0x2fed;
          return _0xfef157[_0xa7a4c5(304)](_0x1df9ee);
        },
        IkqYM: function (_0x2709a2, _0x3068b4, _0x566c5f) {
          const _0x11c460 = _0x2fed;
          return _0xfef157[_0x11c460(345)](_0x2709a2, _0x3068b4, _0x566c5f);
        },
        PrElV: "offer",
        zCsqV: function (_0x476ab8) {
          return _0x476ab8();
        },
        rFulw: function (_0x329ed3, _0x3960db) {
          const _0x5816aa = _0x2fed;
          return _0xfef157[_0x5816aa(337)](_0x329ed3, _0x3960db);
        },
        TXzDz: _0x182bd1(215),
        gUekZ: function (_0x5590f2, _0xc6cab8, _0x5bd141) {
          return _0x5590f2(_0xc6cab8, _0x5bd141);
        }
      };
    if (_0x3e6402[_0x182bd1(404)]) return _0x4efd59();
    if (_0x3e6402[_0x182bd1(251)] === 0) return policyEditUi(_0x11619c, _0xb2e881, _0x39eff9, _0x395f6d, _0x4efd59);
    if (_0x3e6402[_0x182bd1(251)] === 1) return policyEditUi(_0x11619c, _0xb2e881, _0x39eff9, null, _0x4efd59, _0xd12373[_0x182bd1(307)]);
    if (_0x39eff9 === _0x182bd1(175) && _0xfef157[_0x182bd1(205)](_0x3e6402[_0x182bd1(251)], 2)) return _0xfef157[_0x182bd1(248)](groupListUi, _0x11619c, _0xb2e881, _0x395f6d, _0x4efd59);
    if (_0x39eff9 === _0x182bd1(260) && _0xfef157.SLeAl(_0x3e6402[_0x182bd1(251)], _0x13fe99)) return decoLayoutEntriesUi(_0x11619c, _0xb2e881, _0x395f6d, _0x4efd59);
    if (_0x2bbf08 >= 0 && _0x3e6402[_0x182bd1(251)] === _0x2bbf08) {
      const _0x22f6b0 = new ActionFormData3()[_0x182bd1(384)]({
        translate: "shopkeeper.policy.schedule.cancel"
      }).body({
        translate: _0x182bd1(189)
      })[_0x182bd1(244)]({
        translate: _0x182bd1(383)
      })[_0x182bd1(244)]({
        translate: _0x182bd1(431)
      });
      return showPolicyForm(_0x22f6b0, _0x11619c, _0x2b9e36 => {
        const _0x30e5ba = _0x182bd1;
        if (_0xfef157[_0x30e5ba(318)] === _0x30e5ba(390)) {
          if (_0x2b9e36[_0x30e5ba(404)] || _0x2b9e36[_0x30e5ba(251)] !== 0) return _0xfef157.NPgRl(policyDetailUi, _0x11619c, _0xb2e881, _0x39eff9, _0x395f6d, _0x4efd59);
          if (!_0x11619c[_0x30e5ba(267)](_0xfef157[_0x30e5ba(351)])) return notice(_0x11619c, _0x30e5ba(387));
          try {
            _0xb2e881[_0x30e5ba(408)](_0x39eff9, _0x395f6d, _0xd12373[_0x30e5ba(316)]), _0xfef157[_0x30e5ba(230)](notice, _0x11619c, "shopkeeper.policy.schedule.canceled");
          } catch (_0x1259af) {
            _0xfef157.GboNq(notice, _0x11619c, policyErrorKey(_0x1259af));
          }
          policyDetailUi(_0x11619c, _0xb2e881, _0x39eff9, _0x395f6d, _0x4efd59);
        } else {
          if (_0x136d8c[_0x30e5ba(404)]) return bTSNTq.KMRQA(_0x2c63af);
          if (!_0x3167c7.hasTag("admin")) return bTSNTq[_0x30e5ba(377)](_0x3cf05c, _0x24ebed, _0x30e5ba(387));
          const _0x292ba8 = _0x27937c[_0x30e5ba(242)](_0x14bd4a.stringify(_0x2261be.data));
          _0x292ba8[_0x30e5ba(426)] = _0x28460b(_0x2d1a34[_0x30e5ba(301)]?.[0]);
          try {
            _0x49baf5[_0x30e5ba(411)](bTSNTq.PrElV, _0x2b3f2f, _0x341679[_0x30e5ba(382)], _0x292ba8, _0x1b164c[_0x30e5ba(149)](), _0x174ec7[_0x30e5ba(316)]), _0x36822d.sendMessage({
              rawtext: [{
                translate: _0x30e5ba(271),
                with: [_0x1276ee(_0x292ba8[_0x30e5ba(426)])]
              }]
            }), bTSNTq[_0x30e5ba(225)](_0x31841e);
          } catch (_0x45bd2a) {
            _0x420385(_0x5ee53c, bTSNTq.rFulw(_0x4df26c, _0x45bd2a));
          }
        }
      });
    }
    if (_0x395f6d !== "default" && _0x3e6402[_0x182bd1(251)] === _0x34b681) {
      const _0x258aa9 = new ActionFormData3().title({
        translate: _0xfef157.WgHoG
      }).body({
        rawtext: [{
          translate: _0xfef157[_0x182bd1(325)]
        }, {
          text: "\n" + _0xd12373[_0x182bd1(382)] + " (" + _0x395f6d + ")"
        }]
      })[_0x182bd1(244)]({
        translate: _0x182bd1(180)
      }).button({
        translate: "shopkeeper.back"
      });
      return showPolicyForm(_0x258aa9, _0x11619c, _0x409bfa => {
        const _0x4229dd = _0x182bd1;
        if (_0x409bfa.canceled || _0x409bfa[_0x4229dd(251)] !== 0) return policyDetailUi(_0x11619c, _0xb2e881, _0x39eff9, _0x395f6d, _0x4efd59);
        if (!_0x11619c.hasTag(_0xc5052b.TXzDz)) return notice(_0x11619c, _0x4229dd(387));
        try {
          _0xb2e881.deletePolicy(_0x39eff9, _0x395f6d), _0xc5052b[_0x4229dd(292)](notice, _0x11619c, _0x4229dd(264)), _0x4efd59();
        } catch (_0x1cd2f9) {
          notice(_0x11619c, policyErrorKey(_0x1cd2f9)), policyDetailUi(_0x11619c, _0xb2e881, _0x39eff9, _0x395f6d, _0x4efd59);
        }
      });
    }
    _0xfef157.yZXkr(_0x4efd59);
  });
}
function policyEditUi(_0xc0bc81, _0x1003c7, _0x2919bc, _0xa6288, _0x536b3f, _0x7b35a4 = null) {
  const _0x551c86 = _0x12afc9,
    _0x2c9eeb = {
      UdLrc: function (_0x438f82, _0x188573, _0x16d72b) {
        return _0x438f82(_0x188573, _0x16d72b);
      },
      QbOvM: _0x551c86(175),
      wMntf: function (_0x3a239b, _0x56343e) {
        return _0x3a239b(_0x56343e);
      },
      aQcbt: function (_0x13a1b2, _0x55e631) {
        return _0x13a1b2(_0x55e631);
      },
      cHOnq: function (_0x52d1d1, _0x4ba4a9) {
        return _0x52d1d1(_0x4ba4a9);
      },
      NSiym: function (_0x3092ed, _0x535324) {
        return _0x3092ed(_0x535324);
      },
      HeUVK: "shopkeeper.policy.saved",
      mLIfu: function (_0x13fd9a, _0x153e72, _0x39c45a, _0x434500, _0x536f4c, _0x36b574, _0x1ba361) {
        return _0x13fd9a(_0x153e72, _0x39c45a, _0x434500, _0x536f4c, _0x36b574, _0x1ba361);
      },
      hNfBX: function (_0x49210e, _0x2c9a85) {
        return _0x49210e === _0x2c9a85;
      },
      gSFGr: "2026-01-01T00:00:00Z",
      ypveg: _0x551c86(255),
      xAJlP: "Copy",
      ZIphT: function (_0x4b5931, _0x25a02c) {
        return _0x4b5931 !== _0x25a02c;
      },
      qogQG: _0x551c86(260),
      hsMjG: "YYYY-MM-DDTHH:mm:ssZ",
      CmxJp: _0x551c86(349),
      SCAXG: _0x551c86(305),
      eFdWt: _0x551c86(178),
      HcvJx: _0x551c86(154),
      GHrXd: _0x551c86(164),
      IHuBh: _0x551c86(169),
      rafIa: _0x551c86(231),
      EoEAe: _0x551c86(165),
      cKMeF: function (_0xfaf2ef, _0x106a2f) {
        return _0xfaf2ef === _0x106a2f;
      },
      EPyAs: _0x551c86(430),
      zjwUJ: _0x551c86(333),
      QJiGW: function (_0x13f9dd, _0x4fbcb9) {
        return _0x13f9dd(_0x4fbcb9);
      }
    },
    _0x1b57b4 = _0xa6288 ? _0x1003c7[_0x551c86(299)](_0x2919bc, _0xa6288) : null;
  if (_0x2c9eeb.hNfBX(_0x2919bc, _0x551c86(260))) return decoLayoutNameUi(_0xc0bc81, _0x1003c7, _0x1b57b4, _0x7b35a4, _0x536b3f);
  const _0x1cc038 = JSON[_0x551c86(242)](JSON[_0x551c86(293)](_0x7b35a4 || _0x1b57b4?.[_0x551c86(307)] || (_0x2c9eeb[_0x551c86(177)](_0x2919bc, _0x551c86(175)) ? DEFAULT_SHOP_POLICY : _0x2919bc === _0x551c86(273) ? DEFAULT_OFFER_POLICY : {
      start: _0x2c9eeb[_0x551c86(275)],
      end: "2026-01-02T00:00:00Z",
      repeat: "once",
      priority: 0,
      discount: 0
    }))),
    _0x4d6a4a = new ModalFormData2()[_0x551c86(384)]({
      translate: _0x551c86(344)
    }).textField({
      translate: _0x2c9eeb[_0x551c86(394)]
    }, "", {
      defaultValue: _0x7b35a4 ? (_0x1b57b4?.["name"] || _0x2c9eeb[_0x551c86(232)]) + " copy" : _0x1b57b4?.["name"] || ""
    });
  if (_0x2c9eeb[_0x551c86(319)](_0x2919bc, _0x2c9eeb[_0x551c86(400)])) _0x4d6a4a[_0x551c86(391)]({
    translate: _0x551c86(360)
  }, _0x2c9eeb[_0x551c86(155)], {
    defaultValue: ""
  });
  if (_0x2919bc === _0x551c86(175)) _0x4d6a4a[_0x551c86(391)]({
    translate: _0x551c86(243)
  }, "0:1,5:2,20:3,50:4", {
    defaultValue: _0x1cc038.shopLevels[_0x551c86(224)](_0xf05180 => _0xf05180.sales + ":" + _0xf05180.level)[_0x551c86(300)](",")
  }).textField({
    translate: "shopkeeper.policy.shop.reputation"
  }, _0x551c86(216), {
    defaultValue: _0x1cc038[_0x551c86(213)][_0x551c86(224)](_0x466bdf => _0x466bdf[_0x551c86(409)] + ":" + _0x466bdf[_0x551c86(285)]).join(",")
  })[_0x551c86(391)]({
    translate: "shopkeeper.policy.shop.maxdiscount"
  }, "25", {
    defaultValue: String(_0x1cc038[_0x551c86(269)])
  })[_0x551c86(391)]({
    translate: _0x551c86(309)
  }, _0x551c86(349), {
    defaultValue: String(_0x1cc038.maxSurcharge)
  }).textField({
    translate: _0x551c86(350)
  }, "10", {
    defaultValue: String(_0x1cc038.dailySpecialDiscount)
  }).toggle({
    translate: _0x551c86(370)
  }, {
    defaultValue: _0x1cc038[_0x551c86(245)]
  })[_0x551c86(366)]({
    translate: _0x551c86(280)
  }, {
    defaultValue: _0x1cc038.dailyOrderEnabled
  });else {
    if (_0x2c9eeb[_0x551c86(177)](_0x2919bc, _0x551c86(273))) _0x4d6a4a[_0x551c86(391)]({
      translate: "shopkeeper.settings.successrate.label"
    }, _0x2c9eeb[_0x551c86(362)], {
      defaultValue: String(_0x1cc038[_0x551c86(426)])
    })[_0x551c86(391)]({
      translate: _0x2c9eeb[_0x551c86(183)]
    }, "0", {
      defaultValue: String(_0x1cc038[_0x551c86(367)])
    })[_0x551c86(391)]({
      translate: "shopkeeper.policy.offer.restock"
    }, _0x551c86(296), {
      defaultValue: _0x2c9eeb[_0x551c86(249)](String, _0x1cc038[_0x551c86(286)])
    }).textField({
      translate: _0x551c86(368)
    }, "0", {
      defaultValue: _0x2c9eeb[_0x551c86(421)](String, _0x1cc038[_0x551c86(161)])
    })[_0x551c86(354)]({
      translate: "shopkeeper.policy.offer.questmode"
    }, [{
      translate: _0x551c86(236)
    }, {
      translate: _0x2c9eeb[_0x551c86(423)]
    }, {
      translate: _0x551c86(401)
    }], {
      defaultValueIndex: Math[_0x551c86(302)](0, [_0x551c86(206), _0x2c9eeb[_0x551c86(184)], _0x551c86(274)][_0x551c86(356)](_0x1cc038[_0x551c86(375)] || _0x551c86(206)))
    }).textField({
      translate: _0x2c9eeb.GHrXd
    }, "1", {
      defaultValue: _0x2c9eeb[_0x551c86(374)](String, _0x1cc038[_0x551c86(272)])
    })[_0x551c86(391)]({
      translate: _0x551c86(288)
    }, "1", {
      defaultValue: String(_0x1cc038.requiredLevel)
    })[_0x551c86(354)]({
      translate: _0x2c9eeb[_0x551c86(312)]
    }, SEASONS[_0x551c86(224)](_0x5d1319 => ({
      translate: "shopkeeper.season." + _0x5d1319
    })), {
      defaultValueIndex: Math[_0x551c86(302)](0, SEASONS[_0x551c86(356)](_0x1cc038[_0x551c86(347)]))
    })[_0x551c86(366)]({
      translate: _0x2c9eeb[_0x551c86(176)]
    }, {
      defaultValue: _0x1cc038[_0x551c86(334)]
    })[_0x551c86(366)]({
      translate: _0x551c86(424)
    }, {
      defaultValue: _0x1cc038.dailyOrderEnabled
    })[_0x551c86(391)]({
      translate: _0x551c86(378)
    }, "1", {
      defaultValue: _0x2c9eeb[_0x551c86(167)](String, _0x1cc038[_0x551c86(185)])
    }).textField({
      translate: _0x2c9eeb[_0x551c86(197)]
    }, _0x551c86(250), {
      defaultValue: (_0x1cc038[_0x551c86(295)] || (_0x1cc038[_0x551c86(329)] ? [_0x1cc038[_0x551c86(329)]] : []))[_0x551c86(300)](",")
    });else _0x2c9eeb.hNfBX(_0x2919bc, _0x551c86(186)) && _0x4d6a4a.dropdown({
      translate: "shopkeeper.policy.event.repeat"
    }, [{
      translate: "shopkeeper.policy.event.once"
    }, {
      translate: "shopkeeper.policy.event.annual"
    }], {
      defaultValueIndex: _0x2c9eeb[_0x551c86(428)](_0x1cc038[_0x551c86(206)], _0x551c86(199)) ? 1 : 0
    })[_0x551c86(391)]({
      translate: _0x2c9eeb[_0x551c86(192)]
    }, "", {
      defaultValue: _0x1cc038[_0x551c86(166)]
    }).textField({
      translate: _0x2c9eeb[_0x551c86(153)]
    }, "", {
      defaultValue: _0x1cc038[_0x551c86(407)]
    }).textField({
      translate: "shopkeeper.policy.event.priority"
    }, "0", {
      defaultValue: _0x2c9eeb[_0x551c86(425)](String, _0x1cc038[_0x551c86(237)])
    })[_0x551c86(391)]({
      translate: "shopkeeper.policy.event.discount"
    }, "0", {
      defaultValue: _0x2c9eeb[_0x551c86(421)](String, _0x1cc038[_0x551c86(285)])
    });
  }
  showPolicyForm(_0x4d6a4a, _0xc0bc81, _0x5187d6 => {
    const _0x4f2e1a = _0x551c86;
    if (_0x5187d6[_0x4f2e1a(404)]) return _0x536b3f();
    if (!_0xc0bc81[_0x4f2e1a(267)](_0x4f2e1a(215))) return _0x2c9eeb.UdLrc(notice, _0xc0bc81, "shopkeeper.policy.admin.required");
    const _0x5b61b0 = _0x5187d6[_0x4f2e1a(301)],
      _0xf4a1f3 = String(_0x5b61b0[0])[_0x4f2e1a(340)](),
      _0x24b90e = _0x2919bc === _0x4f2e1a(260) ? "" : String(_0x5b61b0[1] || "").trim(),
      _0xdb3b59 = _0x24b90e ? parseUtcDateTime(_0x24b90e, !![]) : Date[_0x4f2e1a(149)]();
    try {
      if (_0x2919bc === _0x2c9eeb[_0x4f2e1a(246)]) _0x1cc038.shopLevels = parseShopLevels(_0x2c9eeb.wMntf(String, _0x5b61b0[2])), _0x1cc038[_0x4f2e1a(213)] = parseReputation(_0x2c9eeb.wMntf(String, _0x5b61b0[3])), _0x1cc038.maxDiscount = Number(_0x5b61b0[4]), _0x1cc038.maxSurcharge = Number(_0x5b61b0[5]), _0x1cc038[_0x4f2e1a(279)] = Number(_0x5b61b0[6]), _0x1cc038[_0x4f2e1a(245)] = _0x5b61b0[7] === !![], _0x1cc038[_0x4f2e1a(151)] = _0x5b61b0[8] === !![];else {
        if (_0x2919bc === _0x4f2e1a(273)) {
          _0x1cc038[_0x4f2e1a(426)] = _0x2c9eeb.aQcbt(Number, _0x5b61b0[2]), _0x1cc038.stockMax = _0x2c9eeb.cHOnq(Number, _0x5b61b0[3]), _0x1cc038[_0x4f2e1a(286)] = Number(_0x5b61b0[4]), _0x1cc038.questTarget = Number(_0x5b61b0[5]), _0x1cc038.questMode = ["repeat", _0x4f2e1a(154), "once"][_0x5b61b0[6]], _0x1cc038.questRewardStacks = Number(_0x5b61b0[7]), _0x1cc038.requiredLevel = Number(_0x5b61b0[8]), _0x1cc038[_0x4f2e1a(347)] = SEASONS[_0x5b61b0[9]], _0x1cc038[_0x4f2e1a(334)] = _0x5b61b0[10] === !![], _0x1cc038[_0x4f2e1a(151)] = _0x5b61b0[11] === !![], _0x1cc038[_0x4f2e1a(185)] = Number(_0x5b61b0[12]), _0x1cc038[_0x4f2e1a(295)] = String(_0x5b61b0[13] || "").split(",").map(_0x21cfc1 => _0x21cfc1[_0x4f2e1a(340)]())[_0x4f2e1a(392)](Boolean), delete _0x1cc038.calendarId;
          if (_0x1cc038[_0x4f2e1a(295)][_0x4f2e1a(297)](_0x1d17ea => !_0x1003c7[_0x4f2e1a(299)]("event", _0x1d17ea))) throw new Error(_0x4f2e1a(266));
        } else _0x2919bc === _0x4f2e1a(186) && (_0x1cc038[_0x4f2e1a(206)] = _0x5b61b0[2] === 1 ? _0x4f2e1a(199) : "once", _0x1cc038[_0x4f2e1a(166)] = _0x2c9eeb.NSiym(String, _0x5b61b0[3]), _0x1cc038[_0x4f2e1a(407)] = String(_0x5b61b0[4]), _0x1cc038[_0x4f2e1a(237)] = Number(_0x5b61b0[5]), _0x1cc038.discount = _0x2c9eeb[_0x4f2e1a(421)](Number, _0x5b61b0[6]));
      }
      const _0x1e78cf = _0xa6288 || newId();
      _0x1003c7[_0x4f2e1a(411)](_0x2919bc, _0x1e78cf, _0xf4a1f3, _0x1cc038, _0xdb3b59, _0x1b57b4?.[_0x4f2e1a(316)] ?? null), notice(_0xc0bc81, _0x2c9eeb.HeUVK);
      if (_0x2919bc === _0x4f2e1a(260)) return decoLayoutEntriesUi(_0xc0bc81, _0x1003c7, _0x1e78cf, _0x536b3f);
      _0x536b3f();
    } catch (_0x31b448) {
      notice(_0xc0bc81, policyErrorKey(_0x31b448)), _0x2c9eeb.mLIfu(policyEditUi, _0xc0bc81, _0x1003c7, _0x2919bc, _0xa6288, _0x536b3f, _0x7b35a4);
    }
  });
}
function decoLayoutNameUi(_0x38da05, _0x27acbd, _0x4b7b10, _0x74c272, _0x4cec26, _0x1c847a = _0x4b7b10?.["name"] || (_0x74c272 ? "Copy" : "")) {
  const _0x5ad042 = _0x12afc9,
    _0x4f81b2 = {
      IUHgI: function (_0x4e58fa) {
        return _0x4e58fa();
      },
      tMFuk: _0x5ad042(215),
      pCddt: "shopkeeper.policy.admin.required",
      qfeuE: function (_0x3721fa, _0x24456d, _0x76b967, _0x58bf96, _0x50d0b8, _0x48669d, _0x25306c) {
        return _0x3721fa(_0x24456d, _0x76b967, _0x58bf96, _0x50d0b8, _0x48669d, _0x25306c);
      },
      ATgSy: function (_0x1a7c39) {
        return _0x1a7c39();
      },
      BSKHU: function (_0x27b588, _0x4db229, _0x2b869d) {
        return _0x27b588(_0x4db229, _0x2b869d);
      },
      svfrQ: function (_0x471e96, _0x4a89c2, _0x38634b, _0x1d58ad) {
        return _0x471e96(_0x4a89c2, _0x38634b, _0x1d58ad);
      }
    };
  if (!_0x38da05[_0x5ad042(267)](_0x5ad042(215))) return notice(_0x38da05, _0x4f81b2.pCddt);
  const _0x4e5578 = new ModalFormData2().title({
    translate: "shopkeeper.decolayout.name"
  })[_0x5ad042(391)]({
    translate: _0x5ad042(255)
  }, "", {
    defaultValue: _0x1c847a
  });
  _0x4f81b2[_0x5ad042(160)](showPolicyForm, _0x4e5578, _0x38da05, _0x4096d8 => {
    const _0x361b4a = _0x5ad042;
    if (_0x4096d8[_0x361b4a(404)]) return _0x4f81b2[_0x361b4a(209)](_0x4cec26);
    if (!_0x38da05[_0x361b4a(267)](_0x4f81b2.tMFuk)) return notice(_0x38da05, _0x4f81b2.pCddt);
    const _0x4ab5f9 = String(_0x4096d8[_0x361b4a(301)]?.[0] ?? "").trim();
    if (!_0x4ab5f9) return notice(_0x38da05, "shopkeeper.policy.invalid"), _0x4f81b2.qfeuE(decoLayoutNameUi, _0x38da05, _0x27acbd, _0x4b7b10, _0x74c272, _0x4cec26, _0x1c847a);
    const _0x5dea5e = _0x4b7b10?.["id"] || newId(),
      _0x1cd714 = _0x74c272 || _0x4b7b10?.[_0x361b4a(307)] || {
        decorations: []
      };
    try {
      _0x27acbd[_0x361b4a(411)]("deco", _0x5dea5e, _0x4ab5f9, _0x1cd714, Date.now(), _0x4b7b10?.[_0x361b4a(316)] ?? null), notice(_0x38da05, _0x361b4a(336));
      if (!_0x4b7b10) return decoLayoutEntriesUi(_0x38da05, _0x27acbd, _0x5dea5e, _0x4cec26);
      _0x4f81b2.ATgSy(_0x4cec26);
    } catch (_0xb53b12) {
      _0x4f81b2.BSKHU(notice, _0x38da05, policyErrorKey(_0xb53b12)), decoLayoutNameUi(_0x38da05, _0x27acbd, _0x4b7b10, _0x74c272, _0x4cec26, _0x4ab5f9);
    }
  });
}
function decoLayoutEntriesUi(_0x4f1594, _0x5c347f, _0x4bea49, _0x2bccbc) {
  const _0x17e0c9 = _0x12afc9,
    _0x46ac40 = {
      vQwgd: function (_0x15dbd9) {
        return _0x15dbd9();
      },
      ojAhu: "minecraft:item_frame",
      kaSXk: _0x17e0c9(196)
    };
  if (!_0x4f1594[_0x17e0c9(267)](_0x17e0c9(215))) return;
  const _0x2bc226 = _0x5c347f[_0x17e0c9(299)](_0x17e0c9(260), _0x4bea49);
  if (!_0x2bc226) return _0x46ac40.vQwgd(_0x2bccbc);
  const _0x32b596 = [..._0x2bc226.data[_0x17e0c9(287)]][_0x17e0c9(229)]((_0x2dbfec, _0x3ace8a) => _0x2dbfec.slot - _0x3ace8a[_0x17e0c9(326)]),
    _0x17d01d = new Map(_0x32b596[_0x17e0c9(224)](_0x28bbc8 => [_0x28bbc8[_0x17e0c9(326)], _0x28bbc8])),
    _0x999d7c = new ChestFormData("54")[_0x17e0c9(384)](_0x2bc226[_0x17e0c9(382)] + " \xB7 v" + _0x2bc226.revision);
  for (let _0x473898 = 0; _0x473898 < 45; _0x473898++) {
    const _0x59c66f = _0x17d01d[_0x17e0c9(299)](_0x473898);
    if (_0x59c66f) _0x999d7c[_0x17e0c9(244)](_0x473898, _0x59c66f[_0x17e0c9(193)] || {
      translate: _0x17e0c9(364)
    }, [_0x59c66f.texture, {
      translate: _0x17e0c9(240),
      with: [String(_0x59c66f.lore.length), String(_0x59c66f[_0x17e0c9(395)][_0x17e0c9(253)])]
    }], _0x59c66f[_0x17e0c9(150)] || _0x46ac40.ojAhu, 1, _0x59c66f[_0x17e0c9(187)], _0x59c66f[_0x17e0c9(386)]);else _0x999d7c.button(_0x473898, {
      translate: _0x17e0c9(239)
    }, [], _0x17e0c9(174));
  }
  _0x999d7c[_0x17e0c9(244)](47, {
    translate: _0x17e0c9(431)
  }, [], _0x17e0c9(380)), _0x999d7c[_0x17e0c9(244)](49, {
    translate: _0x46ac40[_0x17e0c9(219)]
  }, [], "minecraft:name_tag"), _0x999d7c.button(53, {
    translate: _0x17e0c9(180)
  }, [], _0x17e0c9(321)), showChestForm(_0x999d7c, _0x4f1594, _0x539ad9 => {
    const _0x58dba2 = _0x17e0c9;
    if (_0x539ad9 === 47) return _0x2bccbc();
    if (_0x539ad9 === 49) return decoLayoutNameUi(_0x4f1594, _0x5c347f, _0x2bc226, null, () => decoLayoutEntriesUi(_0x4f1594, _0x5c347f, _0x4bea49, _0x2bccbc));
    if (_0x539ad9 === 53) return decoLayoutDeleteUi(_0x4f1594, _0x5c347f, _0x4bea49, _0x2bccbc);
    if (_0x539ad9 >= 0 && _0x539ad9 < 45) {
      const _0x1aa5f4 = _0x17d01d[_0x58dba2(299)](_0x539ad9);
      return _0x1aa5f4 ? decoLayoutEntryForm(_0x4f1594, _0x5c347f, _0x4bea49, _0x539ad9, _0x2bccbc, _0x1aa5f4) : decoLayoutEntryForm(_0x4f1594, _0x5c347f, _0x4bea49, _0x539ad9, _0x2bccbc);
    }
    decoLayoutEntriesUi(_0x4f1594, _0x5c347f, _0x4bea49, _0x2bccbc);
  });
}
function decoLayoutDeleteUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929) {
  const _0x3dd329 = _0x12afc9,
    _0x33ee20 = {
      OqABh: function (_0x126e52, _0x105d7b) {
        return _0x126e52(_0x105d7b);
      },
      tsSpB: function (_0x13c0eb) {
        return _0x13c0eb();
      }
    },
    _0x5dd6ac = _0x1faed6[_0x3dd329(299)](_0x3dd329(260), _0x246826);
  if (!_0x5dd6ac) return _0x33ee20.tsSpB(_0x2c1929);
  const _0x380441 = [..._0x5dd6ac[_0x3dd329(307)][_0x3dd329(287)]][_0x3dd329(229)]((_0x4b70ce, _0xffc013) => _0x4b70ce.slot - _0xffc013.slot);
  if (!_0x380441[_0x3dd329(253)]) return notice(_0x367896, _0x3dd329(283)), decoLayoutEntriesUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929);
  const _0x590416 = new ActionFormData3()[_0x3dd329(384)]({
    translate: _0x3dd329(180)
  });
  for (const _0x47850f of _0x380441) _0x590416[_0x3dd329(244)](_0x47850f.slot + 1 + ": " + (_0x47850f.display_name || _0x47850f[_0x3dd329(150)]));
  _0x590416[_0x3dd329(244)]({
    translate: _0x3dd329(431)
  }), showPolicyForm(_0x590416, _0x367896, _0x55f481 => {
    const _0x14b46e = _0x3dd329;
    if (_0x55f481[_0x14b46e(404)]) return;
    if (_0x55f481[_0x14b46e(251)] === _0x380441[_0x14b46e(253)]) return decoLayoutEntriesUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929);
    const _0x479a80 = _0x380441[_0x55f481[_0x14b46e(251)]];
    if (!_0x479a80) return decoLayoutEntriesUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929);
    const _0x64b922 = new ActionFormData3().title({
      translate: _0x14b46e(180)
    })[_0x14b46e(420)]({
      rawtext: [{
        translate: _0x14b46e(385)
      }, {
        text: "\n" + (_0x479a80.display_name || _0x479a80[_0x14b46e(150)]) + _0x14b46e(330) + (_0x479a80[_0x14b46e(326)] + 1) + ")"
      }]
    })[_0x14b46e(244)]({
      translate: _0x14b46e(180)
    })[_0x14b46e(244)]({
      translate: _0x14b46e(431)
    });
    showPolicyForm(_0x64b922, _0x367896, _0x1b76b9 => {
      const _0x1280e6 = _0x14b46e;
      if (_0x1b76b9[_0x1280e6(404)]) return;
      if (_0x1b76b9.selection !== 0) return decoLayoutDeleteUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929);
      if (!_0x367896.hasTag("admin")) return notice(_0x367896, "shopkeeper.policy.admin.required");
      const _0x5deda7 = _0x1faed6.get(_0x1280e6(260), _0x246826);
      if (!_0x5deda7) return _0x2c1929();
      try {
        _0x1faed6[_0x1280e6(411)]("deco", _0x246826, _0x5deda7.name, {
          decorations: _0x5deda7[_0x1280e6(307)][_0x1280e6(287)][_0x1280e6(392)](_0x22c733 => _0x22c733.entryId !== _0x479a80[_0x1280e6(416)])
        }, Date.now(), _0x5deda7.revision), decoLayoutEntriesUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929);
      } catch (_0xc1e815) {
        notice(_0x367896, _0x33ee20[_0x1280e6(290)](policyErrorKey, _0xc1e815)), decoLayoutEntriesUi(_0x367896, _0x1faed6, _0x246826, _0x2c1929);
      }
    });
  });
}
function decoLayoutEntryForm(_0x8c051c, _0x449429, _0x229940, _0x1b5a69, _0x3f6bf6, _0x331b78 = null, _0x52424a = null) {
  const _0x95df00 = _0x12afc9,
    _0x5d198f = {
      jGhBO: function (_0x1bb9a3, _0x19932b, _0x519df7, _0x33bab7) {
        return _0x1bb9a3(_0x19932b, _0x519df7, _0x33bab7);
      },
      lKUlf: function (_0x2a18f5, _0x2a90df) {
        return _0x2a18f5(_0x2a90df);
      },
      ePOwm: _0x95df00(371),
      ZUOSU: function (_0x2b960e, _0x4e5bdd) {
        return _0x2b960e === _0x4e5bdd;
      },
      RCaAx: _0x95df00(204),
      yWOYH: _0x95df00(283),
      xIcWj: function (_0xb791c6, _0x174d26, _0xdb3942, _0x22064d, _0x5996ad, _0x4737b4, _0x446eae, _0x11a6d0) {
        return _0xb791c6(_0x174d26, _0xdb3942, _0x22064d, _0x5996ad, _0x4737b4, _0x446eae, _0x11a6d0);
      },
      mpYFS: function (_0x2f66b8, _0x58ed59) {
        return _0x2f66b8(_0x58ed59);
      },
      YgZml: function (_0x1ec00f, _0x18a03f, _0x4ff32f) {
        return _0x1ec00f(_0x18a03f, _0x4ff32f);
      },
      GIooO: function (_0x3fb14e, _0x1f1d3e) {
        return _0x3fb14e === _0x1f1d3e;
      },
      IVtgw: function (_0x47c96e, _0x74cbf3, _0x2e2b5b, _0x5ba419, _0x62f656) {
        return _0x47c96e(_0x74cbf3, _0x2e2b5b, _0x5ba419, _0x62f656);
      },
      NXrbI: _0x95df00(171),
      ofWoS: _0x95df00(157),
      hPxKZ: function (_0x254429, _0x414621) {
        return _0x254429 < _0x414621;
      },
      slDCY: function (_0x39535d, _0x51c992) {
        return _0x39535d + _0x51c992;
      },
      SeYVM: function (_0x53c928, _0x3c5063) {
        return _0x53c928 >= _0x3c5063;
      }
    },
    _0x2c1c8c = _0x52424a || (_0x331b78 ? {
      ..._0x331b78,
      lore: [..._0x331b78.lore],
      commands: [..._0x331b78[_0x95df00(395)]]
    } : {
      slot: _0x1b5a69,
      display_name: "",
      texture: _0x95df00(210),
      glint: ![],
      durability: 0,
      lore: [],
      commands: []
    }),
    _0x350de9 = Math.min(DECO_LORE_MAX, _0x2c1c8c[_0x95df00(405)].length),
    _0xe873d4 = Math[_0x95df00(429)](DECO_CMD_MAX, _0x2c1c8c[_0x95df00(395)][_0x95df00(253)]),
    _0x8ca51b = new ModalFormData2()[_0x95df00(384)]({
      translate: _0x331b78 ? _0x95df00(152) : "shopkeeper.deco.create.title"
    })[_0x95df00(391)]({
      translate: _0x95df00(214)
    }, "", {
      defaultValue: _0x2c1c8c[_0x95df00(193)]
    })[_0x95df00(391)]({
      translate: _0x95df00(396)
    }, "", {
      defaultValue: _0x2c1c8c[_0x95df00(150)]
    })[_0x95df00(366)]({
      translate: _0x95df00(358)
    }, {
      defaultValue: !!_0x2c1c8c[_0x95df00(386)]
    })[_0x95df00(262)]({
      translate: "shopkeeper.deco.durability.label"
    }, 0, 100, {
      defaultValue: Number(_0x2c1c8c[_0x95df00(187)]) || 0
    });
  for (let _0x3d25db = 0; _0x3d25db < _0x350de9; _0x3d25db++) _0x8ca51b[_0x95df00(391)]({
    translate: _0x5d198f.NXrbI,
    with: [String(_0x3d25db + 1)]
  }, "", {
    defaultValue: _0x2c1c8c[_0x95df00(405)][_0x3d25db] ?? ""
  });
  _0x8ca51b[_0x95df00(366)]({
    translate: "shopkeeper.deco.lore.add"
  }, {
    defaultValue: ![]
  });
  if (_0x350de9 >= 1) _0x8ca51b[_0x95df00(366)]({
    translate: _0x5d198f[_0x95df00(241)]
  }, {
    defaultValue: ![]
  });
  for (let _0x594e75 = 0; _0x5d198f[_0x95df00(397)](_0x594e75, _0xe873d4); _0x594e75++) _0x8ca51b[_0x95df00(391)]({
    translate: _0x95df00(201),
    with: [String(_0x594e75 + 1)]
  }, "", {
    defaultValue: _0x2c1c8c[_0x95df00(395)][_0x594e75] ?? ""
  });
  _0x8ca51b.toggle({
    translate: _0x95df00(381)
  }, {
    defaultValue: ![]
  });
  if (_0xe873d4 >= 1) _0x8ca51b[_0x95df00(366)]({
    translate: _0x95df00(308)
  }, {
    defaultValue: ![]
  });
  const _0x260599 = _0x5d198f[_0x95df00(278)](4 + _0x350de9 + 1 + (_0x350de9 >= 1 ? 1 : 0), _0xe873d4) + 1 + (_0x5d198f.SeYVM(_0xe873d4, 1) ? 1 : 0);
  _0x8ca51b[_0x95df00(354)]({
    translate: "shopkeeper.decolayout.slot"
  }, Array[_0x95df00(389)]({
    length: 45
  }, (_0x4f366b, _0x5e32cc) => String(_0x5e32cc + 1)), {
    defaultValueIndex: _0x2c1c8c[_0x95df00(326)]
  }), showPolicyForm(_0x8ca51b, _0x8c051c, _0x3631ea => {
    const _0x590a32 = _0x95df00;
    if (_0x3631ea[_0x590a32(404)]) return decoLayoutEntriesUi(_0x8c051c, _0x449429, _0x229940, _0x3f6bf6);
    if (!_0x8c051c[_0x590a32(267)]("admin")) return notice(_0x8c051c, "shopkeeper.policy.admin.required");
    const _0x526ff3 = _0x5d198f.jGhBO(parseDecoFormValues, _0x350de9, _0xe873d4, _0x3631ea.formValues),
      _0x4f3ada = _0x5d198f[_0x590a32(291)](Number, _0x3631ea.formValues?.[_0x260599] ?? _0x2c1c8c[_0x590a32(326)]),
      _0xea61d6 = {
        display_name: _0x526ff3.name,
        texture: _0x526ff3[_0x590a32(150)],
        glint: _0x526ff3[_0x590a32(386)],
        durability: _0x526ff3[_0x590a32(187)],
        slot: _0x4f3ada,
        lore: _0x526ff3[_0x590a32(405)],
        commands: _0x526ff3[_0x590a32(170)]
      };
    if (_0x526ff3[_0x590a32(317)] === _0x590a32(371)) _0xea61d6[_0x590a32(405)][_0x590a32(188)]("");
    if (_0x526ff3[_0x590a32(317)] === _0x590a32(343)) _0xea61d6[_0x590a32(395)][_0x590a32(188)]("");
    if (_0x526ff3[_0x590a32(317)] === _0x5d198f[_0x590a32(332)] || _0x526ff3.action === _0x590a32(343)) return decoLayoutEntryForm(_0x8c051c, _0x449429, _0x229940, _0x1b5a69, _0x3f6bf6, _0x331b78, _0xea61d6);
    if (_0x526ff3[_0x590a32(317)] === "lore-remove") _0xea61d6[_0x590a32(405)][_0x590a32(315)]();
    if (_0x526ff3[_0x590a32(317)] === _0x590a32(399)) _0xea61d6[_0x590a32(395)].pop();
    if (_0x5d198f.ZUOSU(_0x526ff3[_0x590a32(317)], _0x5d198f[_0x590a32(233)]) || _0x526ff3[_0x590a32(317)] === _0x590a32(399)) return decoLayoutEntryForm(_0x8c051c, _0x449429, _0x229940, _0x1b5a69, _0x3f6bf6, _0x331b78, _0xea61d6);
    const _0x56ef5a = _0x449429[_0x590a32(299)](_0x590a32(260), _0x229940);
    if (!_0x56ef5a) return _0x3f6bf6();
    const _0x3ba3d8 = _0x331b78?.["entryId"] || newId();
    if (_0x56ef5a[_0x590a32(307)][_0x590a32(287)][_0x590a32(297)](_0x10191c => _0x10191c[_0x590a32(416)] !== _0x3ba3d8 && _0x10191c[_0x590a32(326)] === _0x4f3ada)) return notice(_0x8c051c, _0x5d198f[_0x590a32(393)]), _0x5d198f[_0x590a32(417)](decoLayoutEntryForm, _0x8c051c, _0x449429, _0x229940, _0x1b5a69, _0x3f6bf6, _0x331b78, _0xea61d6);
    const _0x3dbf3d = {
        entryId: _0x3ba3d8,
        slot: _0x4f3ada,
        display_name: String(_0xea61d6[_0x590a32(193)]).trim(),
        texture: _0x5d198f[_0x590a32(310)](String, _0xea61d6.texture).trim() || _0x590a32(210),
        glint: !!_0xea61d6.glint,
        durability: Math[_0x590a32(302)](0, Math.min(100, Math.floor(_0xea61d6[_0x590a32(187)]))),
        lore: _0xea61d6[_0x590a32(405)][_0x590a32(224)](_0x48dce0 => _0x48dce0.trim()).filter(Boolean),
        commands: _0xea61d6[_0x590a32(395)][_0x590a32(224)](_0x271223 => _0x271223[_0x590a32(340)]()).filter(Boolean)
      },
      _0x337c3f = [..._0x56ef5a[_0x590a32(307)].decorations[_0x590a32(392)](_0x3dc7c4 => _0x3dc7c4.entryId !== _0x3ba3d8), _0x3dbf3d].sort((_0x55cf45, _0x23cd8d) => _0x55cf45[_0x590a32(326)] - _0x23cd8d[_0x590a32(326)]);
    try {
      _0x449429[_0x590a32(411)](_0x590a32(260), _0x229940, _0x56ef5a[_0x590a32(382)], {
        decorations: _0x337c3f
      }, Date.now(), _0x56ef5a.revision), decoLayoutEntriesUi(_0x8c051c, _0x449429, _0x229940, _0x3f6bf6);
    } catch (_0x37fb87) {
      _0x5d198f.YgZml(notice, _0x8c051c, policyErrorKey(_0x37fb87));
      if (_0x5d198f[_0x590a32(173)](_0x37fb87?.["message"], "Policy revision changed")) return _0x5d198f.IVtgw(decoLayoutEntriesUi, _0x8c051c, _0x449429, _0x229940, _0x3f6bf6);
      decoLayoutEntryForm(_0x8c051c, _0x449429, _0x229940, _0x1b5a69, _0x3f6bf6, _0x331b78, _0xea61d6);
    }
  });
}
function groupListUi(_0x506b1b, _0x24cabb, _0x5812cf, _0x34194c) {
  const _0x43b161 = _0x12afc9,
    _0xd53a8e = {
      qKlpZ: function (_0x3b160b, _0x51fbef) {
        return _0x3b160b === _0x51fbef;
      },
      WckJu: function (_0x6eb8a1, _0x30c9b5) {
        return _0x6eb8a1 + _0x30c9b5;
      },
      yPxkJ: _0x43b161(431)
    },
    _0x3d9351 = _0x24cabb.get(_0x43b161(175), _0x5812cf),
    _0x42f6cc = _0x3d9351?.[_0x43b161(307)][_0x43b161(379)] || [],
    _0x549273 = new ActionFormData3()[_0x43b161(384)]({
      translate: _0x43b161(361)
    });
  for (const _0x4e891f of _0x42f6cc) _0x549273[_0x43b161(244)]({
    text: _0x4e891f.id + " \xB7 " + _0x4e891f[_0x43b161(179)] + ":" + _0x4e891f[_0x43b161(346)]
  });
  _0x549273[_0x43b161(244)]({
    translate: _0x43b161(194)
  }), _0x549273[_0x43b161(244)]({
    translate: _0xd53a8e[_0x43b161(182)]
  }), showPolicyForm(_0x549273, _0x506b1b, _0x5e6a4d => {
    const _0x185054 = _0x43b161;
    if (_0x5e6a4d[_0x185054(404)] || _0xd53a8e[_0x185054(369)](_0x5e6a4d[_0x185054(251)], _0xd53a8e[_0x185054(146)](_0x42f6cc[_0x185054(253)], 1))) return _0x34194c();
    groupEditUi(_0x506b1b, _0x24cabb, _0x5812cf, _0x5e6a4d[_0x185054(251)] < _0x42f6cc.length ? _0x5e6a4d.selection : -1, _0x34194c);
  });
}
function groupEditUi(_0x5307c1, _0x1200fa, _0x1bcb61, _0x1a1e9e, _0x3effff) {
  const _0xc7dfab = _0x12afc9,
    _0x19b1b8 = {
      rqPGM: "admin",
      QAsrv: function (_0x4f7646, _0x4720bf, _0x53620b) {
        return _0x4f7646(_0x4720bf, _0x53620b);
      },
      IRaFc: _0xc7dfab(387),
      lHibF: _0xc7dfab(359),
      rQytz: "tag",
      xMtjS: function (_0x46326a, _0x539af3) {
        return _0x46326a < _0x539af3;
      },
      nrqJv: _0xc7dfab(175),
      EEJBq: "shopkeeper.policy.group.source.tag",
      ZrIBC: function (_0x1a01dc, _0x5adac9) {
        return _0x1a01dc === _0x5adac9;
      },
      VTXbs: _0xc7dfab(203),
      sgdlq: _0xc7dfab(398),
      uYvPj: function (_0x297208, _0x32b971) {
        return _0x297208(_0x32b971);
      }
    },
    _0x47977a = _0x1200fa[_0xc7dfab(299)](_0xc7dfab(175), _0x1bcb61),
    _0x2c1e0e = _0x47977a.data[_0xc7dfab(379)][_0x1a1e9e] || {
      id: "",
      source: _0x19b1b8[_0xc7dfab(276)],
      value: "",
      priority: 0,
      deny: ![],
      discount: 0,
      min: 0,
      max: 0
    },
    _0x261d3a = new ModalFormData2()[_0xc7dfab(384)]({
      translate: "shopkeeper.policy.groups"
    })[_0xc7dfab(391)]({
      translate: _0xc7dfab(158)
    }, "", {
      defaultValue: _0x2c1e0e.id
    })[_0xc7dfab(354)]({
      translate: _0xc7dfab(202)
    }, [{
      translate: _0x19b1b8[_0xc7dfab(148)]
    }, {
      translate: _0xc7dfab(372)
    }], {
      defaultValueIndex: _0x19b1b8.ZrIBC(_0x2c1e0e[_0xc7dfab(179)], _0x19b1b8[_0xc7dfab(413)]) ? 1 : 0
    }).textField({
      translate: _0x19b1b8[_0xc7dfab(172)]
    }, "", {
      defaultValue: _0x2c1e0e.value
    })[_0xc7dfab(391)]({
      translate: "shopkeeper.policy.event.priority"
    }, "0", {
      defaultValue: String(_0x2c1e0e[_0xc7dfab(237)])
    })[_0xc7dfab(391)]({
      translate: _0xc7dfab(331)
    }, "0", {
      defaultValue: String(_0x2c1e0e[_0xc7dfab(285)])
    }).toggle({
      translate: _0x19b1b8[_0xc7dfab(427)]
    }, {
      defaultValue: _0x2c1e0e.deny
    }).textField({
      translate: _0xc7dfab(402)
    }, "0", {
      defaultValue: String(_0x2c1e0e[_0xc7dfab(429)])
    })[_0xc7dfab(391)]({
      translate: _0xc7dfab(324)
    }, "0", {
      defaultValue: _0x19b1b8[_0xc7dfab(258)](String, _0x2c1e0e[_0xc7dfab(302)])
    })[_0xc7dfab(366)]({
      translate: "shopkeeper.policy.group.delete"
    }, {
      defaultValue: ![]
    });
  showPolicyForm(_0x261d3a, _0x5307c1, _0x38816d => {
    const _0x523ff3 = _0xc7dfab;
    if (_0x38816d[_0x523ff3(404)]) return groupListUi(_0x5307c1, _0x1200fa, _0x1bcb61, _0x3effff);
    if (!_0x5307c1[_0x523ff3(267)](_0x19b1b8.rqPGM)) return _0x19b1b8.QAsrv(notice, _0x5307c1, _0x19b1b8[_0x523ff3(257)]);
    const _0x2f6792 = _0x38816d[_0x523ff3(301)],
      _0x11b4c5 = JSON.parse(JSON[_0x523ff3(293)](_0x47977a[_0x523ff3(307)]));
    if (_0x1a1e9e >= 0 && _0x2f6792[8]) _0x11b4c5[_0x523ff3(379)][_0x523ff3(365)](_0x1a1e9e, 1);else {
      const _0x25008f = {
        id: String(_0x2f6792[0])[_0x523ff3(340)](),
        source: _0x2f6792[1] === 1 ? _0x19b1b8[_0x523ff3(413)] : _0x19b1b8[_0x523ff3(276)],
        value: String(_0x2f6792[2]).trim(),
        priority: Number(_0x2f6792[3]),
        discount: Number(_0x2f6792[4]),
        deny: _0x2f6792[5] === !![],
        min: Number(_0x2f6792[6]),
        max: Number(_0x2f6792[7])
      };
      if (_0x19b1b8[_0x523ff3(403)](_0x1a1e9e, 0)) _0x11b4c5.groups[_0x523ff3(188)](_0x25008f);else _0x11b4c5.groups[_0x1a1e9e] = _0x25008f;
    }
    try {
      _0x1200fa[_0x523ff3(411)](_0x19b1b8[_0x523ff3(190)], _0x1bcb61, _0x47977a[_0x523ff3(382)], _0x11b4c5, Date[_0x523ff3(149)](), _0x47977a.revision), notice(_0x5307c1, _0x523ff3(336)), groupListUi(_0x5307c1, _0x1200fa, _0x1bcb61, _0x3effff);
    } catch (_0xed5ca2) {
      notice(_0x5307c1, policyErrorKey(_0xed5ca2)), groupListUi(_0x5307c1, _0x1200fa, _0x1bcb61, _0x3effff);
    }
  });
}
import * as _0x144cf1 from "@minecraft/server";
import { ActionFormData as ActionFormData4, ModalFormData as ModalFormData3 } from "@minecraft/server-ui";
var policyStore = createPolicyStore(_0x144cf1.world);
function _isUserCancelled(_0x39c80f) {
  const _0x2e83a4 = _0x20c7bb,
    _0x3d19a6 = {
      UShEi: function (_0x44c8c4, _0x9a17e6) {
        return _0x44c8c4(_0x9a17e6);
      }
    },
    _0x550317 = _0x3d19a6[_0x2e83a4(808)](String, _0x39c80f?.[_0x2e83a4(543)] || "")[_0x2e83a4(983)]();
  return _0x39c80f?.[_0x2e83a4(598)] === _0x2e83a4(953) || _0x550317[_0x2e83a4(1275)](_0x2e83a4(965)) || _0x550317[_0x2e83a4(1275)]("canceled form");
}
function _isFormConflict(_0x12ef63) {
  const _0x442741 = _0x20c7bb,
    _0x859de6 = String(_0x12ef63?.[_0x442741(543)] || "")[_0x442741(983)]();
  return _0x859de6.includes(_0x442741(938)) || _0x859de6[_0x442741(1275)](_0x442741(968));
}
function _guardForm(_0x14de26, _0x46ebed) {
  const _0xcfc185 = _0x20c7bb,
    _0x4eb371 = {
      IErPM: function (_0x4aabc0, _0x3a0ad6) {
        return _0x4aabc0 + _0x3a0ad6;
      }
    };
  if (!_0x14de26 || typeof _0x14de26[_0xcfc185(500)] !== _0xcfc185(712)) return _0x14de26;
  return _0x14de26[_0xcfc185(500)](_0x6b84f3 => {
    const _0x4dce53 = _0xcfc185;
    if (_isUserCancelled(_0x6b84f3)) return;
    if (_isFormConflict(_0x6b84f3)) {
      log.d("ui", _0x46ebed + _0x4dce53(888));
      return;
    }
    log.err("ui", _0x6b84f3, {
      action: _0x4eb371[_0x4dce53(407)](_0x46ebed, _0x4dce53(1338))
    });
  }), _0x14de26;
}
_0x144cf1.world.beforeEvents.entityHurt.subscribe(_0x1feb98 => {
  const _0x3faa96 = _0x20c7bb,
    _0x169b78 = {
      ropMu: _0x3faa96(712)
    },
    _0x291925 = _0x1feb98[_0x3faa96(353)];
  if (!_0x291925) return;
  const _0x32aa6a = _0x291925[_0x3faa96(764)],
    _0x5095c9 = typeof _0x291925.hasTag === _0x169b78[_0x3faa96(560)] ? _0x291925[_0x3faa96(518)]("shopstorage") : ![];
  (_0x32aa6a === "shopkeeper:storage_entity" || _0x5095c9) && (_0x1feb98.cancel = !![]);
}), _0x144cf1.world.afterEvents.worldLoad.subscribe(() => {
  const _0x25faeb = _0x20c7bb,
    _0x554f12 = {
      gBRQj: "folderSet",
      aDFBG: function (_0x57ef25, _0x83931a) {
        return _0x57ef25 > _0x83931a;
      },
      qXIwV: function (_0x3fd8ce, _0x4d6d3b) {
        return _0x3fd8ce(_0x4d6d3b);
      },
      bbcsf: _0x25faeb(1012),
      qfmGy: _0x25faeb(712),
      IGksR: _0x25faeb(347),
      QGDww: function (_0x51fae0, _0x7aae3c) {
        return _0x51fae0 !== _0x7aae3c;
      },
      kJCVG: _0x25faeb(672)
    };
  _0x144cf1.system[_0x25faeb(568)](() => {
    const _0x1e7318 = _0x25faeb,
      _0x497b6d = {
        yxFcT: function (_0x450bea, _0x279718) {
          const _0x45b958 = _0x12bf;
          return _0x554f12[_0x45b958(630)](_0x450bea, _0x279718);
        }
      };
    log.i(_0x554f12[_0x1e7318(785)], "worldLoad \u2192 boot", {
      enabled: isLogEnabled()
    });
    try {
      if (typeof storage_default[_0x1e7318(969)] === _0x554f12.qfmGy) storage_default[_0x1e7318(969)]();
    } catch (_0x669baa) {
      log.err(_0x554f12[_0x1e7318(785)], _0x669baa, {
        action: "loadAllToRam"
      });
    }
    try {
      if (_0x1e7318(914) !== _0x1e7318(1195)) migrateBundleContentsOnce();else {
        let _0x227c09 = null;
        for (const _0xe9767d of _0x497b6d.yxFcT(_0x55cd24, _0x264be3)) {
          try {
            const _0x48da3f = _0x45f95c(_0x4cb4ef[_0x1e7318(667)](_0x1e7318(879), _0xe9767d)?.[_0x1e7318(811)])?.[_0x1e7318(499)];
            if (_0x48da3f && (!_0x227c09 || _0x48da3f < _0x227c09)) _0x227c09 = _0x48da3f;
          } catch (_0x1f4a05) {}
        }
        if (_0x227c09) _0x1dbc99(_0x7233a9, _0x1e7318(1255), [new _0x577a3d(_0x227c09)[_0x1e7318(405)]().replace("T", " ")[_0x1e7318(443)](0, 16)]);else _0x3f33ca(_0x5b8c46, _0x1e7318(930));
        return ![];
      }
    } catch (_0x3d81ad) {
      log.err(_0x554f12[_0x1e7318(349)], _0x3d81ad, {
        action: _0x1e7318(1086)
      });
    }
    try {
      migrateLocalizationKeyOnce();
    } catch (_0x586259) {
      log[_0x1e7318(618)](_0x1e7318(347), _0x586259, {
        action: _0x1e7318(1110)
      });
    }
    try {
      migrateTradePolicies();
    } catch (_0x165ee5) {
      if (_0x554f12[_0x1e7318(551)](_0x554f12[_0x1e7318(1140)], "GHfxS")) {
        const _0x13324 = _0x37da7b(_0xb75488),
          _0x1ea336 = _0x57d24f(_0x13324),
          _0x1f11f6 = !!(_0x13324 && _0x13324[_0x1e7318(1322)] === _0x554f12[_0x1e7318(361)]);
        if (_0x1ea336 && _0x13324.children && _0x554f12.aDFBG(_0x13324[_0x1e7318(641)][_0x1e7318(459)], 0)) {
          const _0x585a64 = _0x13324[_0x1e7318(641)][0];
          _0x2932e8(_0x170d3d, _0x889ac6, _0x585a64, "");
        } else {
          if (_0x1f11f6) _0x18f825(_0x1f5201, _0x5df1af, "", 0);else !_0x1ea336 && _0x299fc8(_0xeb3264, _0x342b09, "");
        }
        return;
      } else log[_0x1e7318(618)](_0x554f12.IGksR, _0x165ee5, {
        action: _0x1e7318(972)
      });
    }
  }, 20);
});
var MIGRATION_FLAG_BUNDLE = "mig:bundleContents:v2";
function migrateBundleContentsOnce() {
  const _0x7931de = _0x20c7bb,
    _0x372765 = {
      fYlak: _0x7931de(712),
      kdkRd: _0x7931de(347)
    };
  try {
    if (_0x144cf1.world.getDynamicProperty(MIGRATION_FLAG_BUNDLE)) return;
  } catch (_0x1acafb) {
    return;
  }
  let _0x2c9c4d = 0;
  try {
    if ("Hjigs" === _0x7931de(596)) {
      const _0x5d0f57 = typeof _0x144cf1[_0x7931de(1104)][_0x7931de(725)] === _0x372765.fYlak ? _0x144cf1.world[_0x7931de(725)]() : [];
      for (const _0x2d48b5 of _0x5d0f57) {
        if (typeof _0x2d48b5 !== "string" || !_0x2d48b5[_0x7931de(1022)](_0x7931de(704))) continue;
        const _0x4156ad = _0x2d48b5[_0x7931de(443)](_0x7931de(704)[_0x7931de(459)]),
          _0x2218aa = storage_default[_0x7931de(1350)](_0x4156ad);
        if (!_0x2218aa) continue;
        for (const _0x257102 of Object[_0x7931de(1332)](_0x2218aa)) {
          const _0x25eb4b = _0x2218aa[_0x257102];
          if (!_0x25eb4b || typeof _0x25eb4b.typeId !== "string" || !_0x25eb4b[_0x7931de(764)][_0x7931de(1275)](_0x7931de(758))) continue;
          if (Array.isArray(_0x25eb4b[_0x7931de(1206)])) continue;
          const _0xd56888 = Number(_0x257102);
          try {
            const _0x17ad98 = storage_default[_0x7931de(667)](null, _0x4156ad, _0xd56888);
            _0x17ad98 && _0x17ad98.typeId && _0x17ad98[_0x7931de(764)].includes("bundle") ? (storage_default[_0x7931de(963)](null, _0x4156ad, _0xd56888, _0x17ad98[_0x7931de(1251)]()), _0x2c9c4d++) : _0x25eb4b.contents = [];
          } catch (_0x418207) {
            _0x25eb4b.contents = [];
          }
        }
      }
    } else return _0x32c296[_0x7931de(942)];
  } catch (_0x109f78) {
    log[_0x7931de(618)](_0x372765.kdkRd, _0x109f78, {
      action: _0x7931de(1331)
    });
  }
  try {
    _0x144cf1[_0x7931de(1104)][_0x7931de(378)](MIGRATION_FLAG_BUNDLE, !![]);
  } catch (_0x1302f9) {}
  _0x2c9c4d > 0 && log[_0x7931de(347)](_0x7931de(501), {
    updated: _0x2c9c4d
  });
}
var MIGRATION_FLAG_LK = "mig:localizationKey:v1";
function migrateLocalizationKeyOnce() {
  const _0x4a3a6d = _0x20c7bb,
    _0x53070e = {
      fhHJi: _0x4a3a6d(406),
      Mpjag: _0x4a3a6d(704),
      UJSrX: function (_0x4926af, _0x67c363) {
        return _0x4926af(_0x67c363);
      },
      wBoyq: _0x4a3a6d(347)
    };
  try {
    if (_0x144cf1[_0x4a3a6d(1104)][_0x4a3a6d(799)](MIGRATION_FLAG_LK)) return;
  } catch (_0xfd7c82) {
    return;
  }
  let _0x1507dd = 0;
  try {
    const _0x1ad951 = typeof _0x144cf1[_0x4a3a6d(1104)][_0x4a3a6d(725)] === _0x4a3a6d(712) ? _0x144cf1[_0x4a3a6d(1104)].getDynamicPropertyIds() : [];
    for (const _0x56ba7c of _0x1ad951) {
      if (typeof _0x56ba7c !== _0x53070e[_0x4a3a6d(1030)] || !_0x56ba7c[_0x4a3a6d(1022)](_0x4a3a6d(704))) continue;
      const _0x279f17 = _0x56ba7c[_0x4a3a6d(443)](_0x53070e.Mpjag.length),
        _0x3a9480 = storage_default.getDisplayData(_0x279f17);
      if (!_0x3a9480) continue;
      for (const _0x33b9ed of Object[_0x4a3a6d(1332)](_0x3a9480)) {
        const _0x3f7b4f = _0x3a9480[_0x33b9ed];
        if (!_0x3f7b4f || typeof _0x3f7b4f[_0x4a3a6d(764)] !== "string") continue;
        if (typeof _0x3f7b4f[_0x4a3a6d(1279)] === "string" && _0x3f7b4f.localizationKey.length > 0) continue;
        const _0x260007 = _0x53070e.UJSrX(Number, _0x33b9ed);
        try {
          const _0x3493a4 = storage_default[_0x4a3a6d(667)](null, _0x279f17, _0x260007);
          if (_0x3493a4) {
            const _0x440e74 = plainLocalizationKey(_0x3493a4);
            _0x440e74 && (storage_default[_0x4a3a6d(963)](null, _0x279f17, _0x260007, _0x3493a4[_0x4a3a6d(1251)]()), _0x1507dd++);
          }
        } catch (_0xa7260a) {}
      }
    }
  } catch (_0x3d103d) {
    log.err(_0x53070e[_0x4a3a6d(1219)], _0x3d103d, {
      action: "migrateLocalizationKeyOnce scan"
    });
  }
  try {
    _0x144cf1[_0x4a3a6d(1104)][_0x4a3a6d(378)](MIGRATION_FLAG_LK, !![]);
  } catch (_0x35ce9e) {}
  _0x1507dd > 0 && log.mig(_0x4a3a6d(1078), {
    backfilled: _0x1507dd
  });
}
function getNode(_0x1585bb, _0x140cec) {
  const _0x1a23a1 = _0x20c7bb;
  if (!_0x140cec || _0x140cec.length === 0) return _0x1585bb;
  const _0x47ce61 = _0x140cec[_0x1a23a1(397)]("/");
  let _0xda5767 = _0x1585bb;
  for (let _0x2dcb60 = 0; _0x2dcb60 < _0x47ce61.length; _0x2dcb60++) {
    if (!_0xda5767[_0x1a23a1(641)]) return null;
    _0xda5767 = _0xda5767[_0x1a23a1(641)].find(_0x48ee72 => _0x48ee72[_0x1a23a1(451)] === _0x47ce61[_0x2dcb60]);
    if (!_0xda5767) return null;
  }
  return _0xda5767;
}
function sendTitle(_0x3dd4da, _0x2f5e1c, _0x5c8bc1 = []) {
  const _0x39951c = _0x20c7bb;
  _0x3dd4da[_0x39951c(710)]({
    rawtext: [{
      translate: _0x39951c(702)
    }, {
      translate: _0x2f5e1c,
      with: _0x5c8bc1
    }]
  });
}
var _tradeRam = new Map();
var _dataVersion = 0;
function bumpDataVersion() {
  _dataVersion++;
}
function getDataVersion() {
  return _dataVersion;
}
var _dpIdsCache = null,
  _dpIdsCacheTs = 0,
  _dpIdsCacheVersion = -1;
function getCachedDpIds() {
  const _0x33b11d = _0x20c7bb,
    _0x4c8261 = {
      kGJoI: function (_0x2e4d8f, _0x25f63a) {
        return _0x2e4d8f === _0x25f63a;
      },
      HQAiy: function (_0x48df6c, _0x4b8552) {
        return _0x48df6c < _0x4b8552;
      }
    },
    _0x5a4f85 = Date[_0x33b11d(1369)]();
  if (_dpIdsCache && _0x4c8261[_0x33b11d(472)](_dpIdsCacheVersion, _dataVersion) && _0x4c8261.HQAiy(_0x5a4f85 - _dpIdsCacheTs, 2e3)) return _dpIdsCache;
  return _dpIdsCache = typeof _0x144cf1.world.getDynamicPropertyIds === _0x33b11d(712) ? _0x144cf1[_0x33b11d(1104)][_0x33b11d(725)]() : [], _dpIdsCacheTs = _0x5a4f85, _dpIdsCacheVersion = _dataVersion, _dpIdsCache;
}
function invalidateDpIdsCache() {
  _dpIdsCache = null, _dpIdsCacheVersion = -1;
}
function invalidateShopCache(_0x364502, _0x350b28 = {}) {
  const _0x12ace4 = _0x20c7bb,
    {
      discardPending = ![]
    } = _0x350b28;
  if (!discardPending) try {
    if (typeof storage_default[_0x12ace4(875)] === _0x12ace4(712)) storage_default[_0x12ace4(875)]();
  } catch (_0x4d99a3) {}
  if (_0x364502) {
    _tradeRam[_0x12ace4(981)](_0x364502);
    try {
      if (typeof storage_default[_0x12ace4(425)] === _0x12ace4(712)) storage_default[_0x12ace4(425)](_0x364502);
    } catch (_0x37c056) {}
  }
  invalidateDpIdsCache(), bumpDataVersion();
}
function loadTradeRoot(_0x15ead5) {
  const _0x4b72b2 = _0x20c7bb,
    _0x1be31f = {
      qnzRd: "trade"
    },
    _0x34de2f = _tradeRam[_0x4b72b2(667)](_0x15ead5);
  if (_0x34de2f !== void 0) return log.d(_0x1be31f[_0x4b72b2(396)], _0x4b72b2(878), {
    name: _0x15ead5
  }), _0x34de2f;
  try {
    const _0x14097a = _0x4b72b2(893) + _0x15ead5,
      _0x362265 = _0x144cf1[_0x4b72b2(1104)].getDynamicProperty(_0x14097a),
      _0x49d9af = _0x362265 ? JSON[_0x4b72b2(1223)](_0x362265) : null;
    return _tradeRam[_0x4b72b2(963)](_0x15ead5, _0x49d9af), log[_0x4b72b2(1103)](_0x4b72b2(995), {
      name: _0x15ead5,
      found: !!_0x362265,
      bytes: _0x362265 ? _0x362265[_0x4b72b2(459)] : 0,
      children: _0x49d9af && Array[_0x4b72b2(1080)](_0x49d9af[_0x4b72b2(641)]) ? _0x49d9af[_0x4b72b2(641)].length : 0
    }), _0x49d9af;
  } catch (_0x22fb4d) {
    return log[_0x4b72b2(618)](_0x4b72b2(1103), _0x22fb4d, {
      action: "loadTradeRoot",
      name: _0x15ead5
    }), null;
  }
}
function saveTradeRoot(_0x5ef614, _0x5d3cf1) {
  const _0x47cdca = _0x20c7bb,
    _0x33cf0e = {
      bGFqd: function (_0x454d50, _0x3481d1) {
        return _0x454d50 + _0x3481d1;
      },
      ihpSE: _0x47cdca(792)
    };
  try {
    const _0x5ea335 = _0x33cf0e.bGFqd(_0x47cdca(893), _0x5ef614),
      _0xe5249d = JSON.stringify(_0x5d3cf1);
    return _0x144cf1[_0x47cdca(1104)][_0x47cdca(378)](_0x5ea335, _0xe5249d), _tradeRam.set(_0x5ef614, _0x5d3cf1), log.disk(_0x33cf0e[_0x47cdca(1132)], {
      name: _0x5ef614,
      bytes: _0xe5249d[_0x47cdca(459)],
      children: _0x5d3cf1 && Array[_0x47cdca(1080)](_0x5d3cf1[_0x47cdca(641)]) ? _0x5d3cf1.children[_0x47cdca(459)] : 0
    }), bumpDataVersion(), !![];
  } catch (_0x407fb8) {
    return log[_0x47cdca(618)](_0x47cdca(1103), _0x407fb8, {
      action: _0x47cdca(1179),
      name: _0x5ef614
    }), ![];
  }
}
function legacyOfferPolicy(_0x4eea9e) {
  const _0x2e5fbe = _0x20c7bb,
    _0x40a10f = {
      lOGHl: function (_0x2a07e2, _0x3366b3) {
        return _0x2a07e2(_0x3366b3);
      }
    };
  return {
    ...DEFAULT_OFFER_POLICY,
    successRate: Number(_0x4eea9e[_0x2e5fbe(991)] ?? DEFAULT_OFFER_POLICY[_0x2e5fbe(991)]),
    stockMax: _0x40a10f[_0x2e5fbe(1161)](Number, _0x4eea9e[_0x2e5fbe(1288)] ?? 0),
    restockMinutes: Number(_0x4eea9e[_0x2e5fbe(740)] ?? 1440),
    questTarget: Number(_0x4eea9e[_0x2e5fbe(720)] ?? 0),
    questMode: _0x4eea9e[_0x2e5fbe(403)] || _0x2e5fbe(899),
    questRewardStacks: Number(_0x4eea9e[_0x2e5fbe(1372)] ?? 1),
    requiredLevel: Number(_0x4eea9e.requiredLevel ?? 1),
    season: _0x2e5fbe(434),
    calendarId: _0x4eea9e[_0x2e5fbe(1039)] && _0x4eea9e[_0x2e5fbe(1039)] !== _0x2e5fbe(434) ? _0x4eea9e[_0x2e5fbe(1039)] : void 0,
    dailyOrderEnabled: _0x4eea9e[_0x2e5fbe(1035)] === !![],
    dailyOrderTarget: Number(_0x4eea9e.dailyOrderTarget ?? 1)
  };
}
function effectiveShopPolicy(_0x4d7a9a) {
  const _0x81e04e = _0x20c7bb,
    _0x3dc953 = {
      yJbew: _0x81e04e(1103)
    };
  if (!_0x4d7a9a?.[_0x81e04e(765)]) return DEFAULT_SHOP_POLICY;
  try {
    return policyStore[_0x81e04e(667)](_0x81e04e(821), _0x4d7a9a[_0x81e04e(765)])?.[_0x81e04e(811)] || null;
  } catch (_0x4cc304) {
    return log[_0x81e04e(618)](_0x3dc953[_0x81e04e(960)], _0x4cc304, {
      action: _0x81e04e(1144),
      id: _0x4d7a9a.shopPolicyId
    }), null;
  }
}
function effectiveOfferPolicy(_0x260e16) {
  const _0x3721b5 = _0x20c7bb,
    _0x60a3fd = {
      sbOmA: "effectiveOfferPolicy"
    };
  if (!_0x260e16?.["offerPolicyId"]) return legacyOfferPolicy(_0x260e16 || {});
  try {
    return policyStore[_0x3721b5(667)](_0x3721b5(781), _0x260e16[_0x3721b5(1304)])?.[_0x3721b5(811)] || null;
  } catch (_0x21ee96) {
    return log[_0x3721b5(618)](_0x3721b5(1103), _0x21ee96, {
      action: _0x60a3fd[_0x3721b5(916)],
      id: _0x260e16[_0x3721b5(1304)]
    }), null;
  }
}
function policyFingerprint(_0x2a7208) {
  const _0x26b6b1 = _0x20c7bb,
    _0xfb4591 = JSON[_0x26b6b1(1324)](_0x2a7208);
  let _0x17fe39 = 2166136261;
  for (let _0x514947 = 0; _0x514947 < _0xfb4591[_0x26b6b1(459)]; _0x514947++) _0x17fe39 = Math.imul(_0x17fe39 ^ _0xfb4591[_0x26b6b1(355)](_0x514947), 16777619) >>> 0;
  return _0x17fe39.toString(36);
}
function newTradeId() {
  const _0x153fc1 = _0x20c7bb;
  return "t_" + Date.now().toString(36) + "_" + Math[_0x153fc1(536)](Math[_0x153fc1(572)]() * 4294967296)[_0x153fc1(915)](36);
}
function migrateTradePolicies() {
  const _0x27a59c = _0x20c7bb,
    _0x1697bd = {
      kwjtR: function (_0x4aaee7, _0x410e7a) {
        return _0x4aaee7 !== _0x410e7a;
      },
      jBtoe: function (_0x20a8e1, _0x390b28) {
        return _0x20a8e1(_0x390b28);
      },
      BQDJl: "default",
      uFUgq: function (_0x248106, _0x356bb7) {
        return _0x248106 === _0x356bb7;
      },
      oKsxl: _0x27a59c(781),
      wfVTu: function (_0x57cea6, _0x182967) {
        return _0x57cea6 === _0x182967;
      },
      VwFbV: _0x27a59c(1358),
      TSpBH: _0x27a59c(783),
      hytiA: "06-01T00:00",
      vNBZq: "09-01T00:00",
      Rykyd: _0x27a59c(879),
      VHAgd: _0x27a59c(460)
    },
    _0xd9b9e9 = policyStore[_0x27a59c(667)](_0x27a59c(821), _0x1697bd[_0x27a59c(836)]);
  if (!_0xd9b9e9) policyStore[_0x27a59c(1345)](_0x27a59c(821), _0x27a59c(1319), "Default shop", DEFAULT_SHOP_POLICY);else _0xd9b9e9.revision === 1 && _0xd9b9e9[_0x27a59c(811)][_0x27a59c(1262)] === 25 && _0xd9b9e9.data.maxSurcharge === 100 && _0xd9b9e9[_0x27a59c(811)][_0x27a59c(389)] === 10 && _0xd9b9e9[_0x27a59c(811)][_0x27a59c(1068)] === !![] && _0x1697bd[_0x27a59c(1318)](_0xd9b9e9[_0x27a59c(811)][_0x27a59c(1035)], !![]) && _0x1697bd[_0x27a59c(1318)](JSON.stringify(_0xd9b9e9[_0x27a59c(811)][_0x27a59c(1016)]), JSON[_0x27a59c(1324)]([{
    purchases: 0,
    discount: 0
  }, {
    purchases: 5,
    discount: 5
  }, {
    purchases: 20,
    discount: 10
  }, {
    purchases: 50,
    discount: 15
  }])) && policyStore[_0x27a59c(1345)](_0x27a59c(821), _0x27a59c(1319), _0xd9b9e9[_0x27a59c(598)], DEFAULT_SHOP_POLICY, Date[_0x27a59c(1369)](), _0xd9b9e9[_0x27a59c(1343)]);
  const _0x3bc921 = policyStore[_0x27a59c(667)](_0x1697bd.oKsxl, "default");
  if (!_0x3bc921) policyStore[_0x27a59c(1345)](_0x1697bd[_0x27a59c(691)], "default", _0x27a59c(1014), DEFAULT_OFFER_POLICY);else {
    if (_0x3bc921[_0x27a59c(1343)] === 1 && _0x3bc921[_0x27a59c(811)][_0x27a59c(1041)] === !![] && _0x1697bd[_0x27a59c(376)](_0x3bc921.data.successRate, 100) && _0x3bc921[_0x27a59c(811)][_0x27a59c(1288)] === 0 && _0x3bc921[_0x27a59c(811)][_0x27a59c(720)] === 0) {
      const _0x3c8342 = {
        ...DEFAULT_OFFER_POLICY,
        dailySpecialEligible: ![]
      };
      policyStore[_0x27a59c(1345)]("offer", _0x27a59c(1319), _0x3bc921[_0x27a59c(598)], _0x3c8342, Date[_0x27a59c(1369)](), _0x3bc921.revision);
    }
  }
  const _0x4f24d2 = [[_0x1697bd[_0x27a59c(850)], _0x1697bd[_0x27a59c(689)], _0x27a59c(809)], ["summer", _0x1697bd.hytiA, _0x1697bd.vNBZq], [_0x27a59c(870), _0x1697bd[_0x27a59c(1028)], _0x27a59c(738)], ["winter", _0x27a59c(738), _0x27a59c(783)]];
  for (const [_0xce751e, _0x293a9a, _0x4cf360] of _0x4f24d2) {
    if (!policyStore[_0x27a59c(667)](_0x1697bd[_0x27a59c(713)], _0xce751e)) policyStore[_0x27a59c(1345)]("event", _0xce751e, _0xce751e, {
      repeat: _0x1697bd[_0x27a59c(581)],
      start: _0x293a9a,
      end: _0x4cf360,
      priority: 0,
      discount: 0
    });
  }
  for (const _0x438c9c of getAllShops()) {
    let _0x28d3fb = function (_0x35630d) {
      const _0x250122 = _0x27a59c;
      for (const _0x57e375 of _0x35630d.children || []) {
        if (_0x57e375[_0x250122(1116)] === "item") {
          !_0x57e375[_0x250122(474)] && (_0x57e375.tradeId = newTradeId(), _0xe095b7 = !![]);
          if (!_0x57e375[_0x250122(1304)]) {
            const _0x8623f1 = legacyOfferPolicy(_0x57e375),
              _0xb62ff4 = JSON.stringify(_0x8623f1) === JSON[_0x250122(1324)](DEFAULT_OFFER_POLICY) ? _0x250122(1319) : _0x250122(1213) + policyFingerprint(_0x8623f1),
              _0x5d1c65 = policyStore.get(_0x250122(781), _0xb62ff4);
            if (!_0x5d1c65) policyStore[_0x250122(1345)](_0x250122(781), _0xb62ff4, _0x250122(593) + _0xb62ff4, _0x8623f1);else {
              if (_0x1697bd[_0x250122(435)](JSON.stringify(_0x5d1c65[_0x250122(811)]), JSON.stringify(_0x8623f1))) throw new Error(_0x250122(1247) + _0xb62ff4);
            }
            _0x57e375.offerPolicyId = _0xb62ff4, _0xe095b7 = !![];
          }
        } else {
          if (_0x57e375.children) _0x1697bd[_0x250122(957)](_0x28d3fb, _0x57e375);
        }
      }
    };
    const _0x162e7e = loadTradeRoot(_0x438c9c[_0x27a59c(598)]);
    if (!_0x162e7e) continue;
    const _0x3b824c = JSON[_0x27a59c(1223)](JSON.stringify(_0x162e7e));
    let _0xe095b7 = ![];
    !_0x3b824c[_0x27a59c(731)] && (_0x3b824c.shopId = "s_" + _0x438c9c[_0x27a59c(598)], _0xe095b7 = !![]);
    !_0x3b824c.shopPolicyId && (_0x3b824c[_0x27a59c(765)] = _0x27a59c(1319), _0xe095b7 = !![]);
    _0x1697bd[_0x27a59c(957)](_0x28d3fb, _0x3b824c);
    if (_0xe095b7 && !saveTradeRoot(_0x438c9c[_0x27a59c(598)], _0x3b824c)) throw new Error(_0x27a59c(721) + _0x438c9c[_0x27a59c(598)]);
  }
}
function isPlayerValid(_0x1cf347) {
  const _0x2b6012 = _0x20c7bb,
    _0x572a7a = {
      jeYVp: function (_0x368f69, _0x288fce) {
        return _0x368f69 === _0x288fce;
      }
    };
  return !!_0x1cf347 && !!_0x1cf347.typeId && _0x572a7a[_0x2b6012(753)](_0x1cf347[_0x2b6012(764)], "minecraft:player");
}
function saveTradeNode(_0x359e68, _0x11cbfb, _0x36d992) {
  const _0x1e0150 = _0x20c7bb,
    _0x218538 = {
      CAINF: function (_0x3d4e04, _0x313167, _0x50e070) {
        return _0x3d4e04(_0x313167, _0x50e070);
      },
      QDLDU: function (_0x255993, _0xa45095, _0x188161) {
        return _0x255993(_0xa45095, _0x188161);
      }
    },
    _0x2f3083 = loadTradeRoot(_0x359e68);
  if (!_0x2f3083) return ![];
  const _0x566b5e = _0x218538.CAINF(getNode, _0x2f3083, _0x11cbfb);
  if (!_0x566b5e) return ![];
  return _0x36d992(_0x566b5e), _0x218538[_0x1e0150(1172)](saveTradeRoot, _0x359e68, _0x2f3083);
}
function isItemShopRoot(_0x3bbdc7) {
  const _0x3e326c = _0x20c7bb,
    _0x934680 = {
      cUBAK: function (_0x50d3ad, _0x4b077e) {
        return _0x50d3ad === _0x4b077e;
      },
      AqCsX: "folderSet"
    };
  if (!_0x3bbdc7) return ![];
  if (_0x934680[_0x3e326c(1188)](_0x3bbdc7.shop_type, _0x3e326c(370))) return !![];
  if (_0x3bbdc7.shop_type === _0x3e326c(1300)) return ![];
  if (_0x3bbdc7[_0x3e326c(1322)] === _0x934680.AqCsX) return ![];
  const _0xf06b8b = _0x3bbdc7[_0x3e326c(641)] || [];
  return _0xf06b8b[_0x3e326c(459)] === 1 && _0xf06b8b[0] && _0xf06b8b[0][_0x3e326c(1116)] === _0x3e326c(370);
}
function getParentLink(_0x143aa0) {
  const _0x446beb = _0x20c7bb;
  if (!_0x143aa0) return "";
  const _0x29018f = _0x143aa0.split("/");
  return _0x29018f[_0x446beb(941)](), _0x29018f.join("/");
}
function isSameItemDetailed(_0x1f5ea7, _0x1e3ae2) {
  const _0x2dfe64 = _0x20c7bb,
    _0x13c3e0 = normalizeItem(_0x1f5ea7),
    _0x1e9179 = normalizeItem(_0x1e3ae2);
  if (!_0x13c3e0 || !_0x1e9179) return ![];
  return JSON[_0x2dfe64(1324)](_0x13c3e0) === JSON[_0x2dfe64(1324)](_0x1e9179);
}
function itemMatches(_0xb5ed3b, _0x17c026) {
  const _0x3ad906 = _0x20c7bb,
    _0x3b779d = {
      BjDAM: function (_0x2f5292, _0xf0951b) {
        return _0x2f5292 !== _0xf0951b;
      },
      KFtKH: function (_0x208c09, _0xbab0c1) {
        return _0x208c09(_0xbab0c1);
      },
      hTjoW: function (_0x3be21f, _0x5d206b) {
        return _0x3be21f !== _0x5d206b;
      },
      HSlUC: function (_0x175d3c, _0x432485) {
        return _0x175d3c === _0x432485;
      },
      ULfbP: "function",
      CKeGw: _0x3ad906(419)
    };
  if (!_0xb5ed3b || !_0x17c026) return ![];
  let _0x5e7f8e = null,
    _0x2e0930 = null;
  try {
    _0x5e7f8e = _0xb5ed3b[_0x3ad906(764)] ?? null;
  } catch (_0x251137) {
    return ![];
  }
  try {
    _0x2e0930 = _0x17c026[_0x3ad906(764)] ?? null;
  } catch (_0x2fe01) {
    return ![];
  }
  if (_0x5e7f8e && _0x2e0930 && _0x5e7f8e !== _0x2e0930) return ![];
  const _0x244d18 = isLiveStack(_0xb5ed3b),
    _0x49b6db = isLiveStack(_0x17c026);
  if (_0x244d18 !== _0x49b6db) return ![];
  if (_0x244d18 && _0x49b6db) try {
    const _0x4d9a27 = itemDynamicProperties(_0xb5ed3b),
      _0x380f5e = itemDynamicProperties(_0x17c026);
    if (_0x4d9a27 === null || _0x380f5e === null || _0x3b779d.hTjoW(JSON[_0x3ad906(1324)](_0x4d9a27), JSON[_0x3ad906(1324)](_0x380f5e))) return ![];
    if (_0x3b779d.HSlUC(typeof _0xb5ed3b.equals, _0x3b779d.ULfbP)) {
      if (_0x3ad906(974) === _0x3b779d[_0x3ad906(1237)]) {
        const _0xa47890 = _0xa93faa + "@" + _0x2b2f1d,
          _0x52fe20 = _0x48b5c0[_0x3ad906(667)](_0xa47890);
        if (_0x3b779d[_0x3ad906(1258)](_0x52fe20, _0x52fd08)) return _0x52fe20;
        const _0x5e2439 = _0x3b779d[_0x3ad906(796)](_0x502d56, _0x566338),
          _0x107e61 = _0x5e2439[_0x3b779d.KFtKH(_0xb325f3, _0x1fc27e)],
          _0xc50be9 = _0x107e61 ? _0x50196f(_0x107e61) : null;
        return _0x5729f0.set(_0xa47890, _0xc50be9), _0xc50be9;
      } else return _0xb5ed3b[_0x3ad906(585)](_0x17c026) === !![];
    }
    return compareStackComponents(_0xb5ed3b, _0x17c026);
  } catch (_0x5eac90) {}
  try {
    return isSameItemDetailed(_0xb5ed3b, _0x17c026);
  } catch (_0x3f86b7) {
    return ![];
  }
}
function itemDynamicProperties(_0x2365b5) {
  const _0x76f973 = _0x20c7bb,
    _0xfb83f5 = {
      tOeoQ: function (_0x1bd77e, _0x591d91) {
        return _0x1bd77e !== _0x591d91;
      }
    };
  try {
    if (_0xfb83f5[_0x76f973(660)](typeof _0x2365b5[_0x76f973(725)], _0x76f973(712)) || typeof _0x2365b5.getDynamicProperty !== "function") return null;
    return _0x2365b5[_0x76f973(725)]()[_0x76f973(1007)]()[_0x76f973(1312)](_0x2b0388 => [_0x2b0388, _0x2365b5[_0x76f973(799)](_0x2b0388)]);
  } catch (_0xf6d239) {
    return null;
  }
}
function isLiveStack(_0x418a33) {
  const _0x35176b = _0x20c7bb,
    _0x40b0f5 = {
      pVDXF: _0x35176b(406),
      tLpTX: "function"
    };
  if (!_0x418a33) return ![];
  try {
    return typeof _0x418a33[_0x35176b(764)] === _0x40b0f5[_0x35176b(1074)] && typeof _0x418a33.clone === _0x40b0f5[_0x35176b(1119)];
  } catch (_0x48a9d4) {
    return ![];
  }
}
function itemKeyOf(_0x4322a9) {
  const _0xc65dae = _0x20c7bb,
    _0x3f19ff = {
      nIVLs: function (_0x3c6011, _0x42f1f9) {
        return _0x3c6011(_0x42f1f9);
      }
    };
  if (!_0x4322a9) return _0xc65dae(621);
  if (isLiveStack(_0x4322a9)) try {
    const _0x143c6c = normalizeItem(_0x4322a9);
    delete _0x143c6c[_0xc65dae(989)];
    let _0xbd9f2f = null;
    try {
      if (typeof _0x4322a9[_0xc65dae(719)] === _0xc65dae(712)) _0xbd9f2f = _0x4322a9[_0xc65dae(719)]();
    } catch (_0x5e532f) {}
    const _0x5564eb = {
      nbt: _0xbd9f2f ?? void 0,
      dynamicProperties: itemDynamicProperties(_0x4322a9),
      enchantable: safeComponentData(safeComponent(_0x4322a9, _0xc65dae(509))),
      dyeable: safeComponentData(safeComponent(_0x4322a9, "minecraft:dyeable")),
      potion: safeComponentData(safeComponent(_0x4322a9, _0xc65dae(1055)))
    };
    if (_0xbd9f2f != null) return JSON.stringify({
      t: _0x143c6c[_0xc65dae(764)],
      n: _0x143c6c[_0xc65dae(942)],
      nbt: _0xbd9f2f,
      dynamicProperties: _0x5564eb[_0xc65dae(1147)]
    });
    return JSON[_0xc65dae(1324)]({
      ..._0x143c6c,
      ..._0x5564eb
    });
  } catch (_0x8b2536) {}
  const _0x791901 = _0x3f19ff[_0xc65dae(871)](normalizeItem, _0x4322a9);
  if (_0x791901) delete _0x791901[_0xc65dae(989)];
  return JSON.stringify(_0x791901);
}
function compareStackComponents(_0x13b6b3, _0x41eeed) {
  const _0x2b2f56 = _0x20c7bb,
    _0xe6003e = {
      gRtLR: _0x2b2f56(712),
      xvNJP: function (_0x523cf6, _0x20c4b9) {
        return _0x523cf6 != _0x20c4b9;
      },
      ptObn: _0x2b2f56(1249),
      SDQKF: _0x2b2f56(470),
      EUAYw: _0x2b2f56(1055)
    };
  try {
    const _0x4a57b0 = typeof _0x13b6b3.getRawNbt === _0xe6003e[_0x2b2f56(880)] ? _0x13b6b3[_0x2b2f56(719)]() : null,
      _0x455c63 = typeof _0x41eeed[_0x2b2f56(719)] === _0x2b2f56(712) ? _0x41eeed[_0x2b2f56(719)]() : null;
    if (_0x4a57b0 != null || _0xe6003e[_0x2b2f56(828)](_0x455c63, null)) return _0x4a57b0 === _0x455c63;
  } catch (_0x167358) {}
  const _0x3bbc27 = ["minecraft:enchantable", _0xe6003e[_0x2b2f56(619)], _0xe6003e[_0x2b2f56(853)], _0x2b2f56(822), _0xe6003e[_0x2b2f56(1228)], _0x2b2f56(469)];
  for (const _0x56b4b8 of _0x3bbc27) {
    const _0x1a8866 = safeComponent(_0x13b6b3, _0x56b4b8),
      _0x527a2b = safeComponent(_0x41eeed, _0x56b4b8),
      _0x339552 = safeComponentData(_0x1a8866),
      _0x38d0e5 = safeComponentData(_0x527a2b);
    if (JSON[_0x2b2f56(1324)](_0x339552) !== JSON[_0x2b2f56(1324)](_0x38d0e5)) return ![];
  }
  return isSameItemDetailed(_0x13b6b3, _0x41eeed);
}
function safeComponent(_0x24f149, _0x4a764e) {
  const _0x14ee53 = _0x20c7bb;
  try {
    return _0x24f149[_0x14ee53(1098)] ? _0x24f149.getComponent(_0x4a764e) : null;
  } catch (_0x20264e) {
    return null;
  }
}
function safeComponentData(_0x2c8cff) {
  const _0x1581b2 = _0x20c7bb,
    _0x285d8f = {
      JOwyD: _0x1581b2(712)
    };
  if (!_0x2c8cff) return null;
  try {
    const _0x6626b5 = _0x1581b2(367)[_0x1581b2(397)]("|");
    let _0x36f870 = 0;
    while (!![]) {
      switch (_0x6626b5[_0x36f870++]) {
        case "0":
          if (typeof _0x2c8cff[_0x1581b2(1341)] !== _0x1581b2(1367)) return {
            color: _0x2c8cff.color
          };
          continue;
        case "1":
          if (typeof _0x2c8cff[_0x1581b2(1336)] === "number") return {
            damage: _0x2c8cff[_0x1581b2(1336)]
          };
          continue;
        case "2":
          if (typeof _0x2c8cff[_0x1581b2(482)] === "function") return (_0x2c8cff[_0x1581b2(482)]() || [])[_0x1581b2(1312)](_0x5c5762 => ({
            id: _0x5c5762[_0x1581b2(1116)]?.["id"] ?? _0x5c5762.id,
            level: _0x5c5762[_0x1581b2(706)]
          }));
          continue;
        case "3":
          if (typeof _0x2c8cff.getPotionType === _0x285d8f.JOwyD) return _0x2c8cff.getPotionType();
          continue;
        case "4":
          return {
            present: !![]
          };
      }
      break;
    }
  } catch (_0x5c6bd1) {
    return null;
  }
}
function resolveLiveItem(_0x44986f, _0x37a43d, _0x33cd2c) {
  const _0x24c1ca = _0x20c7bb;
  try {
    if (storage_default && typeof storage_default[_0x24c1ca(359)] === _0x24c1ca(712)) {
      const _0x50f473 = storage_default[_0x24c1ca(359)](_0x44986f, _0x37a43d, _0x33cd2c);
      if (_0x50f473) return _0x50f473;
    }
  } catch (_0x8c4e6d) {}
  return storage_default.get(_0x44986f, _0x37a43d, _0x33cd2c);
}
function normalizeItem(_0x30f743) {
  const _0x185e5e = _0x20c7bb,
    _0x5e1201 = {
      dklGQ: function (_0x892fe6, _0x2240c6) {
        return _0x892fe6 > _0x2240c6;
      },
      xfsFl: function (_0xa0f286, _0x49c3c1) {
        return _0xa0f286 != _0x49c3c1;
      }
    };
  if (!_0x30f743) return null;
  const _0x4bc47f = _0x30f743.getLore ? _0x30f743[_0x185e5e(430)]() ?? [] : _0x30f743[_0x185e5e(1023)] ?? [],
    _0x2d93e9 = _0x4bc47f[_0x185e5e(1099)](_0x80cc0f => typeof _0x80cc0f === _0x185e5e(406));
  let _0x2b40a1 = [];
  const _0x36c9b3 = _0x30f743.getComponent ? _0x30f743.getComponent(_0x185e5e(509)) : null;
  if (_0x36c9b3) {
    const _0x277291 = _0x36c9b3.getEnchantments() || [];
    _0x2b40a1 = _0x277291[_0x185e5e(1312)](_0xba1ee0 => ({
      id: _0xba1ee0[_0x185e5e(1116)].id,
      level: _0xba1ee0[_0x185e5e(706)]
    }));
  } else _0x30f743.enchantments && (_0x2b40a1 = _0x30f743[_0x185e5e(883)]);
  _0x2b40a1.sort((_0xac0086, _0xb113f4) => {
    const _0x2ebdad = _0x185e5e,
      _0x493f23 = (_0xac0086.id || "")[_0x2ebdad(915)]()[_0x2ebdad(983)](),
      _0x5070db = (_0xb113f4.id || "")[_0x2ebdad(915)]()[_0x2ebdad(983)]();
    if (_0x5e1201[_0x2ebdad(649)](_0x493f23, _0x5070db)) return 1;
    if (_0x493f23 < _0x5070db) return -1;
    return (_0xac0086[_0x2ebdad(706)] || 0) - (_0xb113f4.level || 0);
  });
  let _0x32b875 = 0;
  const _0x108444 = _0x30f743[_0x185e5e(1098)] ? _0x30f743.getComponent("minecraft:durability") : null;
  if (_0x108444) _0x32b875 = _0x108444.damage || 0;else _0x5e1201.xfsFl(_0x30f743[_0x185e5e(1336)], null) && (_0x32b875 = _0x30f743[_0x185e5e(1336)]);
  return {
    typeId: _0x30f743.typeId,
    nameTag: _0x30f743[_0x185e5e(942)] ?? null,
    lore: _0x2d93e9,
    enchantments: _0x2b40a1,
    damage: _0x32b875
  };
}
function getDisplayDurability(_0x2b75be) {
  const _0x222a39 = _0x20c7bb,
    _0x18dce0 = {
      ffhEe: _0x222a39(1249),
      IEmmz: function (_0x345e9a, _0x57d19b) {
        return _0x345e9a / _0x57d19b;
      },
      JrZtG: function (_0x1aaadf, _0x2a531d) {
        return _0x1aaadf * _0x2a531d;
      },
      sdtxQ: function (_0x4ac97b, _0x337a76) {
        return _0x4ac97b != _0x337a76;
      }
    };
  if (typeof _0x2b75be[_0x222a39(1098)] === "function") {
    const _0x4eaa30 = _0x2b75be[_0x222a39(1098)](_0x18dce0.ffhEe);
    if (_0x4eaa30) {
      const _0x4efc02 = _0x4eaa30[_0x222a39(1336)],
        _0x248902 = _0x4eaa30[_0x222a39(866)];
      if (_0x248902 === 0) return 0;
      const _0x186d62 = _0x18dce0[_0x222a39(1382)](_0x4efc02, _0x248902),
        _0x4fd08c = Math.floor(_0x18dce0[_0x222a39(1102)](_0x186d62, 99));
      if (_0x4fd08c < 0) return 0;
      if (_0x4fd08c > 99) return 99;
      return _0x4fd08c;
    }
  }
  if (_0x18dce0.sdtxQ(_0x2b75be.damage, null) && _0x2b75be.maxDamage != null && _0x2b75be[_0x222a39(423)] > 0) {
    const _0x2b33f2 = (_0x2b75be[_0x222a39(1336)] || 0) / _0x2b75be[_0x222a39(423)],
      _0x511e42 = Math.floor(_0x2b33f2 * 99);
    return Math[_0x222a39(955)](0, Math[_0x222a39(1208)](99, _0x511e42));
  }
  return 0;
}
function hasGlint(_0x5b0592) {
  const _0x3b68d3 = _0x20c7bb,
    _0x1a40cb = {
      swbgO: _0x3b68d3(712)
    };
  if (typeof _0x5b0592[_0x3b68d3(1098)] === _0x1a40cb.swbgO) {
    const _0x21f463 = _0x5b0592[_0x3b68d3(1098)]("minecraft:enchantable");
    if (_0x21f463) {
      const _0xbca047 = _0x21f463.getEnchantments();
      return _0xbca047.length > 0;
    }
  }
  return _0x5b0592[_0x3b68d3(883)] && _0x5b0592.enchantments[_0x3b68d3(459)] > 0 || ![];
}
var ENCHANT_MAP = {
  power: "enchantment.arrowDamage",
  flame: "enchantment.arrowFire",
  infinity: "enchantment.arrowInfinite",
  punch: "enchantment.arrowKnockback",
  multishot: "enchantment.crossbowMultishot",
  piercing: "enchantment.crossbowPiercing",
  quick_charge: "enchantment.crossbowQuickCharge",
  curse_of_binding: "enchantment.curse.binding",
  curse_of_vanishing: "enchantment.curse.vanishing",
  sharpness: "enchantment.damage.all",
  bane_of_arthropods: "enchantment.damage.arthropods",
  smite: "enchantment.damage.undead",
  efficiency: "enchantment.digging",
  unbreaking: "enchantment.durability",
  fire_aspect: "enchantment.fire",
  lure: "enchantment.fishingSpeed",
  frost_walker: "enchantment.frostwalker",
  breach: "enchantment.heavy_weapon.breach",
  density: "enchantment.heavy_weapon.density",
  wind_burst: "enchantment.heavy_weapon.windburst",
  knockback: "enchantment.knockback",
  looting: "enchantment.lootBonus",
  fortune: "enchantment.lootBonusDigger",
  luck_of_the_sea: "enchantment.lootBonusFishing",
  mending: "enchantment.mending",
  respiration: "enchantment.oxygen",
  protection: "enchantment.protect.all",
  blast_protection: "enchantment.protect.explosion",
  feather_falling: "enchantment.protect.fall",
  fire_protection: "enchantment.protect.fire",
  projectile_protection: "enchantment.protect.projectile",
  soul_speed: "enchantment.soul_speed",
  swift_sneak: "enchantment.swift_sneak",
  thorns: "enchantment.thorns",
  silk_touch: "enchantment.untouching",
  depth_strider: "enchantment.waterWalker",
  aqua_affinity: "enchantment.waterWorker",
  channeling: "enchantment.tridentChanneling",
  loyalty: "enchantment.tridentLoyalty",
  riptide: "enchantment.tridentRiptide",
  impaling: "enchantment.tridentImpaling",
  "1": "enchantment.level.1",
  "2": "enchantment.level.2",
  "3": "enchantment.level.3",
  "4": "enchantment.level.4",
  "5": "enchantment.level.5",
  "6": "enchantment.level.6",
  "7": "enchantment.level.7",
  "8": "enchantment.level.8",
  "9": "enchantment.level.9",
  "10": "enchantment.level.10"
};
function getDisplayLore(_0x23c370, _0x387843, _0x3e24f8) {
  const _0x434a75 = _0x20c7bb,
    _0x473eee = {
      blwIy: function (_0x47ba1f, _0x5e9e8e, _0x19453f) {
        return _0x47ba1f(_0x5e9e8e, _0x19453f);
      },
      EkgWW: function (_0x26e186, _0x33cd25) {
        return _0x26e186 < _0x33cd25;
      },
      INYVB: function (_0x29eebf, _0x2ee974) {
        return _0x29eebf > _0x2ee974;
      },
      Pxfij: _0x434a75(607),
      WVmSr: function (_0x31d302, _0x98462) {
        return _0x31d302(_0x98462);
      },
      aeMNw: _0x434a75(1156),
      KOOOO: function (_0x183a00, _0x1bea7a) {
        return _0x183a00 > _0x1bea7a;
      }
    },
    _0x54e0c7 = _0x23c370[_0x434a75(430)]() ?? [],
    _0x4a2787 = getEnchantmentInfo(_0x23c370),
    _0x2311cf = [];
  if (_0x4a2787.hasEnchants) {
    if (_0x434a75(1040) !== _0x434a75(411)) for (let _0x3c8432 = 0; _0x473eee[_0x434a75(675)](_0x3c8432, _0x4a2787[_0x434a75(682)][_0x434a75(459)]); _0x3c8432++) {
      const _0x4d0980 = _0x4a2787[_0x434a75(682)][_0x3c8432];
      for (let _0x5efccc = 0; _0x5efccc < _0x4d0980[_0x434a75(819)].length; _0x5efccc++) {
        _0x2311cf[_0x434a75(943)](_0x4d0980[_0x434a75(819)][_0x5efccc]);
      }
      _0x3c8432 < _0x4a2787.enchantList.length - 1 && _0x2311cf[_0x434a75(943)]({
        text: "\n"
      });
    } else {
      _0x473eee[_0x434a75(1112)](_0x48f61b, _0x31a458, _0x114bb9);
      return;
    }
  }
  if (_0x473eee[_0x434a75(1207)](_0x54e0c7[_0x434a75(459)], 0)) {
    _0x4a2787[_0x434a75(714)] && _0x2311cf[_0x434a75(943)]({
      text: "\n"
    });
    for (let _0x3c6d70 = 0; _0x3c6d70 < _0x54e0c7[_0x434a75(459)]; _0x3c6d70++) {
      _0x2311cf[_0x434a75(943)]({
        text: _0x54e0c7[_0x3c6d70]
      }), _0x3c6d70 < _0x54e0c7[_0x434a75(459)] - 1 && _0x2311cf[_0x434a75(943)]({
        text: "\n"
      });
    }
  }
  if (_0x23c370 && _0x23c370.typeId[_0x434a75(1275)](_0x473eee[_0x434a75(837)])) {
    const _0x3e91a2 = loadShulkerCache(_0x387843, _0x3e24f8);
    if (_0x3e91a2) {
      if (_0x2311cf.length > 0) _0x2311cf.push({
        text: "\n"
      });
      if (_0x3e91a2[_0x434a75(1323)]) _0x2311cf[_0x434a75(943)]({
        translate: _0x434a75(464)
      });else {
        if (_0x3e91a2.items && _0x3e91a2[_0x434a75(1163)][_0x434a75(459)] > 0) for (let _0x1ab4a4 = 0; _0x473eee[_0x434a75(675)](_0x1ab4a4, _0x3e91a2[_0x434a75(1163)][_0x434a75(459)]); _0x1ab4a4++) {
          const _0x7a9e9c = _0x3e91a2[_0x434a75(1163)][_0x1ab4a4],
            _0x31a045 = getItemNameRawtext(_0x7a9e9c);
          _0x2311cf.push({
            text: "\xA7i"
          }, ..._0x31a045, {
            text: " x" + _0x7a9e9c.amount
          });
          if (_0x7a9e9c.enchantments && _0x7a9e9c[_0x434a75(883)][_0x434a75(459)] > 0) for (const _0x528a6a of _0x7a9e9c.enchantments) {
            const _0x350b12 = ENCHANT_MAP[_0x528a6a.id] || _0x528a6a.id,
              _0xd59758 = ENCHANT_MAP[_0x473eee[_0x434a75(1158)](String, _0x528a6a[_0x434a75(706)])] || String(_0x528a6a[_0x434a75(706)]);
            _0x2311cf.push({
              text: _0x434a75(1156)
            }, {
              translate: _0x350b12
            }, {
              text: " "
            }, ENCHANT_MAP[_0x473eee[_0x434a75(1158)](String, _0x528a6a.level)] ? {
              translate: _0xd59758
            } : {
              text: _0xd59758
            });
          }
          if (_0x7a9e9c[_0x434a75(1023)] && _0x7a9e9c[_0x434a75(1023)][_0x434a75(459)] > 0) for (const _0x4b22d4 of _0x7a9e9c.lore) {
            _0x2311cf.push({
              text: _0x434a75(954) + _0x4b22d4
            });
          }
          _0x1ab4a4 < _0x3e91a2[_0x434a75(1163)][_0x434a75(459)] - 1 && _0x2311cf[_0x434a75(943)]({
            text: "\n"
          });
        } else _0x2311cf[_0x434a75(943)]({
          translate: _0x434a75(553)
        });
      }
    }
  }
  if (_0x23c370 && _0x23c370[_0x434a75(764)][_0x434a75(1275)](_0x434a75(758))) {
    const _0x5237f9 = _0x23c370[_0x434a75(1098)](_0x434a75(1044)),
      _0x562c23 = [];
    if (_0x5237f9 && _0x5237f9.container) {
      const _0x395865 = _0x5237f9.container;
      for (let _0xf99141 = 0; _0xf99141 < _0x395865.size; _0xf99141++) {
        const _0x46edef = _0x395865.getItem(_0xf99141);
        if (_0x46edef) _0x562c23[_0x434a75(943)](_0x46edef);
      }
    }
    if (_0x562c23[_0x434a75(459)] > 0) {
      if (_0x2311cf[_0x434a75(459)] > 0) _0x2311cf.push({
        text: "\n"
      });
      for (let _0x3494cc = 0; _0x3494cc < _0x562c23.length; _0x3494cc++) {
        const _0xedeec8 = _0x562c23[_0x3494cc];
        if (!_0xedeec8) continue;
        const _0x8e2538 = getItemNameRawtext(_0xedeec8);
        _0x2311cf[_0x434a75(943)]({
          text: "\xA7i"
        }, ..._0x8e2538, {
          text: " x" + _0xedeec8[_0x434a75(989)]
        });
        const _0x334696 = _0xedeec8[_0x434a75(1098)] && _0xedeec8.getComponent("minecraft:enchantable");
        if (_0x334696) {
          const _0xed184d = _0x334696.getEnchantments();
          if (_0xed184d && _0x473eee[_0x434a75(1207)](_0xed184d.length, 0)) for (const _0x2e5fac of _0xed184d) {
            const _0x2adffa = ENCHANT_MAP[_0x2e5fac[_0x434a75(1116)].id] || _0x2e5fac[_0x434a75(1116)].id,
              _0x3f8540 = ENCHANT_MAP[String(_0x2e5fac[_0x434a75(706)])] || String(_0x2e5fac.level);
            _0x2311cf[_0x434a75(943)]({
              text: _0x473eee.aeMNw
            }, {
              translate: _0x2adffa
            }, {
              text: " "
            }, ENCHANT_MAP[String(_0x2e5fac[_0x434a75(706)])] ? {
              translate: _0x3f8540
            } : {
              text: _0x3f8540
            });
          }
        }
        const _0x31ba9e = _0xedeec8[_0x434a75(430)] && _0xedeec8[_0x434a75(430)]();
        if (_0x31ba9e && _0x31ba9e[_0x434a75(459)] > 0) for (const _0x708cb7 of _0x31ba9e) {
          _0x2311cf.push({
            text: _0x434a75(954) + _0x708cb7
          });
        }
        _0x3494cc < _0x562c23.length - 1 && _0x2311cf.push({
          text: "\n"
        });
      }
    } else {
      if (_0x473eee.KOOOO(_0x2311cf[_0x434a75(459)], 0)) _0x2311cf[_0x434a75(943)]({
        text: "\n"
      });
      _0x2311cf[_0x434a75(943)]({
        translate: "shopkeeper.bundle.empty"
      });
    }
  }
  return {
    rawtext: _0x2311cf
  };
}
function getEnchantmentInfo(_0x373dba) {
  const _0x4c84d6 = _0x20c7bb,
    _0x49acb8 = {
      HhELh: function (_0x38efec, _0x34628d) {
        return _0x38efec(_0x34628d);
      }
    };
  if (!_0x373dba) return {
    hasEnchants: ![],
    enchantList: []
  };
  const _0x3131f1 = _0x373dba[_0x4c84d6(1098)](_0x4c84d6(509));
  if (!_0x3131f1) return {
    hasEnchants: ![],
    enchantList: []
  };
  const _0x1b9c8e = _0x3131f1.getEnchantments();
  if (!_0x1b9c8e || _0x1b9c8e.length === 0) return {
    hasEnchants: ![],
    enchantList: []
  };
  const _0x492687 = [];
  for (let _0xfa7b42 = 0; _0xfa7b42 < _0x1b9c8e[_0x4c84d6(459)]; _0xfa7b42++) {
    const _0x3d131b = _0x1b9c8e[_0xfa7b42],
      _0x497b4c = _0x3d131b.type.id,
      _0x3ac1fe = _0x3d131b[_0x4c84d6(706)] || 1,
      _0x806331 = ENCHANT_MAP[_0x497b4c] || _0x497b4c;
    let _0x38ad57;
    const _0x1f3166 = _0x49acb8.HhELh(String, _0x3ac1fe);
    ENCHANT_MAP[_0x1f3166] ? _0x38ad57 = {
      translate: ENCHANT_MAP[_0x1f3166]
    } : _0x38ad57 = {
      text: String(_0x3ac1fe)
    }, _0x492687.push({
      rawtext: [{
        text: "\xA79"
      }, {
        translate: _0x806331
      }, {
        text: " "
      }, _0x38ad57]
    });
  }
  return {
    hasEnchants: _0x492687[_0x4c84d6(459)] > 0,
    enchantList: _0x492687
  };
}
function sendItemTitle(_0x2f3d60, _0x4b26dd, _0x150517) {
  const _0x289fa5 = _0x20c7bb,
    _0x5ed037 = getItemNameRawtext(_0x150517);
  _0x2f3d60[_0x289fa5(710)]({
    rawtext: [{
      translate: _0x289fa5(702)
    }, {
      translate: _0x4b26dd,
      with: [""]
    }, ..._0x5ed037]
  });
}
function getItemDisplayName2(_0x5addcc) {
  const _0x9263fe = _0x20c7bb,
    _0x2c26b5 = {
      pyxaF: _0x9263fe(890),
      FurGF: _0x9263fe(1295)
    };
  if (!_0x5addcc) return _0x9263fe(1295);
  try {
    if (typeof _0x5addcc.nameTag === _0x9263fe(406) && _0x5addcc[_0x9263fe(942)][_0x9263fe(605)]() !== "") return _0x5addcc[_0x9263fe(942)];
  } catch (_0x1ce6f5) {}
  const _0x136ad6 = (() => {
    const _0x2387d3 = _0x9263fe,
      _0x20a4a5 = {
        xkEcS: _0x2387d3(575)
      };
    try {
      return plainLocalizationKey(_0x5addcc);
    } catch (_0xfde2a5) {
      if (_0x2c26b5[_0x2387d3(932)] !== _0x2387d3(890)) _0x4f5769[_0x365b9f] = {
        texture: _0x20a4a5[_0x2387d3(549)],
        itemName: "",
        stackAmount: 1
      };else return null;
    }
  })();
  if (_0x136ad6) return {
    rawtext: [{
      translate: _0x136ad6
    }]
  };
  try {
    return _0x5addcc[_0x9263fe(764)] || _0x2c26b5.FurGF;
  } catch (_0x178096) {
    return _0x9263fe(1295);
  }
}
var PROGRESS_KEY = "shopkeeper:progress:",
  DAILY_ORDER_PROGRESS_KEY = "shopkeeper:daily-orders:";
function utcDateKey(_0x55e9e2 = new Date()) {
  const _0x5321ae = _0x20c7bb;
  return _0x55e9e2[_0x5321ae(405)]().slice(0, 10);
}
function dailyOrderProgress(_0x119129, _0x3ae13f, _0x1b5671 = new Date()) {
  const _0x71dfd = _0x20c7bb,
    _0x470fbf = {
      kTyxh: function (_0x15fa02, _0x1c5384) {
        return _0x15fa02 === _0x1c5384;
      }
    },
    _0x5c3c6d = utcDateKey(_0x1b5671);
  try {
    const _0x545242 = JSON[_0x71dfd(1223)](_0x119129[_0x71dfd(799)](DAILY_ORDER_PROGRESS_KEY + _0x3ae13f) || "{}");
    if (_0x545242 && _0x470fbf[_0x71dfd(648)](_0x545242.date, _0x5c3c6d) && typeof _0x545242[_0x71dfd(1096)] === _0x71dfd(406)) return {
      date: _0x5c3c6d,
      orderId: _0x545242[_0x71dfd(1096)],
      progress: Math[_0x71dfd(955)](0, Math[_0x71dfd(536)](Number(_0x545242[_0x71dfd(1189)]) || 0)),
      completed: _0x545242.completed === !![]
    };
  } catch (_0x3cbff8) {
    log[_0x71dfd(618)](_0x71dfd(1012), _0x3cbff8, {
      action: _0x71dfd(1363),
      shopName: _0x3ae13f
    });
  }
  return {
    date: _0x5c3c6d,
    orderId: "",
    progress: 0,
    completed: ![]
  };
}
function currentOrderProgress(_0x4e6320, _0x1e90fd, _0x236e7b) {
  const _0x1cd9ff = _0x20c7bb,
    _0x110c4b = {
      qbZSB: function (_0x178d6a, _0x30d6c8, _0x3924d6, _0x451e91) {
        return _0x178d6a(_0x30d6c8, _0x3924d6, _0x451e91);
      }
    },
    _0x3b9817 = dailyOrderProgress(_0x4e6320, _0x1e90fd);
  if (_0x236e7b && _0x3b9817[_0x1cd9ff(948)] !== _0x236e7b.date) return {
    date: _0x236e7b[_0x1cd9ff(948)],
    orderId: "",
    progress: 0,
    completed: ![]
  };
  return _0x236e7b && _0x3b9817[_0x1cd9ff(1096)] === _0x236e7b[_0x1cd9ff(1037)] && _0x236e7b.id !== _0x236e7b.path && (_0x3b9817.orderId = _0x236e7b.id, _0x110c4b[_0x1cd9ff(510)](saveDailyOrderProgress, _0x4e6320, _0x1e90fd, _0x3b9817)), _0x3b9817;
}
function saveDailyOrderProgress(_0x35519b, _0x1387fa, _0x3c0819) {
  const _0x1e1650 = _0x20c7bb,
    _0x2cdafb = {
      QKmNU: "inventory",
      rdOQP: _0x1e1650(578),
      TbpCV: "saveDailyOrderProgress"
    };
  try {
    if (_0x1e1650(1362) !== _0x1e1650(1085)) return _0x35519b[_0x1e1650(378)](DAILY_ORDER_PROGRESS_KEY + _0x1387fa, JSON.stringify(_0x3c0819)), !![];else {
      const {
        player: _0x1aca12,
        block: _0x5b7f84,
        itemStack: _0x4d426d
      } = _0x3adbc6;
      if (!_0x1aca12?.[_0x1e1650(518)](_0x1e1650(860)) || _0x4d426d?.["typeId"] !== "shopkeeper:tool") return;
      _0x34ad4a[_0x1e1650(963)](_0x1aca12, _0xe72aed[_0x1e1650(1348)][_0x1e1650(532)]);
      const _0x1fe8db = _0x5a27f5[_0x1e1650(667)](_0x1aca12);
      if (!_0x586c44(_0x5b7f84) || !_0x1fe8db) return;
      _0x1feb7b[_0x1e1650(975)] = !![];
      if (_0x1fe8db[_0x1e1650(584)] !== _0x1e1650(431)) return _0x5278db(_0x1aca12, _0x2cdafb[_0x1e1650(709)]);
      _0x2ab38e[_0x1e1650(1348)][_0x1e1650(568)](() => {
        const _0x51a11a = _0x1e1650;
        try {
          if (_0x25b2c8.get(_0x1aca12)?.[_0x51a11a(584)] !== _0x51a11a(431)) return;
          const _0x3b17b1 = _0x5b7f84[_0x51a11a(1098)](_0x2cdafb.QKmNU)?.["container"],
            _0x5f24f8 = _0x5232b0[_0x51a11a(1092)]({
              length: 10
            }, (_0x9a0e68, _0x43f38c) => _0x3b17b1?.[_0x51a11a(940)](_0x43f38c)?.[_0x51a11a(1251)]() ?? null);
          if (!_0x5f24f8[0]) return _0x2b654f(_0x1aca12, _0x51a11a(1090));
          _0x1f5552.set(_0x1aca12, {
            phase: _0x51a11a(420),
            items: _0x5f24f8
          }), _0x1c6638(_0x1aca12, "shopkeeper.tool.import.ready");
        } catch (_0x964e04) {
          _0x23378c.err("ui", _0x964e04, {
            action: "toolImport.readContainer",
            player: _0x1aca12.name
          });
        }
      }, 1);
    }
  } catch (_0x50f338) {
    return log.err(_0x1e1650(1012), _0x50f338, {
      action: _0x2cdafb[_0x1e1650(400)],
      shopName: _0x1387fa
    }), ![];
  }
}
function itemIdentityMatches(_0x1ad4f4, _0x5d51c5) {
  const _0x5ca318 = _0x20c7bb,
    _0x6cddf5 = {
      NFZur: function (_0x1dc130, _0x57f769, _0x32cda2) {
        return _0x1dc130(_0x57f769, _0x32cda2);
      },
      FyWoK: _0x5ca318(795)
    };
  if (!_0x1ad4f4 || !_0x5d51c5) return ![];
  try {
    const _0x557eb9 = _0x1ad4f4[_0x5ca318(1251)](),
      _0x2352a4 = _0x5d51c5[_0x5ca318(1251)]();
    return _0x557eb9[_0x5ca318(989)] = 1, _0x2352a4[_0x5ca318(989)] = 1, _0x6cddf5[_0x5ca318(744)](itemMatches, _0x557eb9, _0x2352a4);
  } catch (_0x3d9b05) {
    if (_0x6cddf5[_0x5ca318(951)] === "ScByf") {
      const _0x11af21 = _0x220836(_0x429821);
      if (typeof _0x11af21 === _0x5ca318(406)) return [{
        text: _0x11af21
      }];
      if (_0x11af21?.[_0x5ca318(819)] && _0x2263c6[_0x5ca318(1080)](_0x11af21.rawtext)) return _0x11af21[_0x5ca318(819)];
      if (_0x11af21?.["translate"]) return [_0x11af21];
      return [{
        text: _0x5ca318(1295)
      }];
    } else return itemMatches(_0x1ad4f4, _0x5d51c5);
  }
}
function removeMatchingAmount(_0x359b22, _0x2d63d2, _0x4ab06f) {
  const _0x2850b4 = _0x20c7bb;
  let _0x135217 = _0x4ab06f;
  for (let _0x4607af = 0; _0x4607af < _0x359b22[_0x2850b4(664)] && _0x135217 > 0; _0x4607af++) {
    const _0x2d3a7e = _0x359b22[_0x2850b4(940)](_0x4607af);
    if (!itemIdentityMatches(_0x2d3a7e, _0x2d63d2)) continue;
    const _0x229595 = Math.min(_0x2d3a7e[_0x2850b4(989)], _0x135217);
    if (_0x229595 >= _0x2d3a7e[_0x2850b4(989)]) _0x359b22.setItem(_0x4607af, void 0);else _0x2d3a7e.amount -= _0x229595, _0x359b22.setItem(_0x4607af, _0x2d3a7e);
    _0x135217 -= _0x229595;
  }
  return _0x135217 === 0;
}
function playerShopProgress(_0x41cfcf, _0x297901) {
  const _0x4ceed3 = _0x20c7bb,
    _0x971a76 = {
      uSbnu: "object"
    };
  try {
    const _0x25175a = JSON[_0x4ceed3(1223)](_0x41cfcf[_0x4ceed3(799)](PROGRESS_KEY + _0x297901) || "{}");
    if (!_0x25175a || typeof _0x25175a !== _0x971a76[_0x4ceed3(529)] || Array[_0x4ceed3(1080)](_0x25175a)) throw new Error(_0x4ceed3(1334));
    if (!_0x25175a[_0x4ceed3(634)] || typeof _0x25175a[_0x4ceed3(634)] !== _0x971a76.uSbnu) _0x25175a[_0x4ceed3(634)] = {};
    return _0x25175a;
  } catch (_0x144d9b) {
    return log[_0x4ceed3(618)]("flow", _0x144d9b, {
      action: "playerShopProgress",
      shopName: _0x297901
    }), {
      purchases: 0,
      quests: {}
    };
  }
}
var ingredientAmounts = new WeakMap();
function ingredientAmount(_0x1abe87) {
  const _0x17ffcf = _0x20c7bb;
  return _0x1abe87 ? ingredientAmounts.get(_0x1abe87) ?? _0x1abe87[_0x17ffcf(989)] ?? 1 : 0;
}
function discountedIngredients(_0x496e05, _0x3f61c3) {
  const _0x4f2cc6 = _0x20c7bb,
    _0x1b18a9 = {
      WoLAQ: function (_0x51e924, _0x32cd84) {
        return _0x51e924 === _0x32cd84;
      },
      llpCX: function (_0x51eb17, _0x2b65c8, _0x4d4ebd) {
        return _0x51eb17(_0x2b65c8, _0x4d4ebd);
      }
    };
  if (!_0x3f61c3) return _0x496e05;
  return _0x496e05[_0x4f2cc6(1312)](_0x5576fa => {
    const _0x556f5a = _0x4f2cc6;
    if (!_0x5576fa) return _0x5576fa;
    const _0x32d3b3 = _0x1b18a9[_0x556f5a(705)](typeof _0x5576fa[_0x556f5a(1251)], _0x556f5a(712)) ? _0x5576fa.clone() : {
        ..._0x5576fa
      },
      _0x25f4d0 = _0x1b18a9.llpCX(discountedAmount, _0x5576fa[_0x556f5a(989)], _0x3f61c3);
    let _0x5f07f6 = 64;
    try {
      if (Number[_0x556f5a(1070)](_0x32d3b3[_0x556f5a(1170)]) && _0x32d3b3[_0x556f5a(1170)] > 0) _0x5f07f6 = _0x32d3b3[_0x556f5a(1170)];
    } catch (_0x1e58df) {}
    if (_0x25f4d0 <= _0x5f07f6) _0x32d3b3[_0x556f5a(989)] = _0x25f4d0;
    return ingredientAmounts[_0x556f5a(963)](_0x32d3b3, _0x25f4d0), _0x32d3b3;
  });
}
function questStatus(_0x4a3492, _0x39ec87, _0x302698) {
  const _0x539e7c = _0x20c7bb,
    _0x1cd310 = {
      qISZK: function (_0x51d890, _0x1a26ca) {
        return _0x51d890 > _0x1a26ca;
      },
      zuNDy: function (_0x28ec6d, _0x2307e0) {
        return _0x28ec6d === _0x2307e0;
      },
      SxNlO: _0x539e7c(408),
      yforY: function (_0x4aa15a, _0x229bc6) {
        return _0x4aa15a === _0x229bc6;
      }
    },
    _0x2d8612 = _0x39ec87[_0x539e7c(474)] || _0x39ec87[_0x539e7c(451)],
    _0x3f8dbe = _0x302698[_0x539e7c(403)] || _0x539e7c(899),
    _0x405d6e = _0x4a3492[_0x539e7c(634)][_0x2d8612] ?? _0x4a3492[_0x539e7c(634)][_0x39ec87[_0x539e7c(451)]] ?? 0,
    _0x41fec5 = Number[_0x539e7c(1070)](_0x405d6e?.[_0x539e7c(453)]) && _0x1cd310[_0x539e7c(1117)](_0x405d6e[_0x539e7c(453)], 0) ? _0x405d6e.target : _0x302698[_0x539e7c(720)];
  if (_0x1cd310[_0x539e7c(715)](_0x3f8dbe, _0x539e7c(899))) return {
    progress: Math[_0x539e7c(955)](0, Number(typeof _0x405d6e === _0x1cd310[_0x539e7c(788)] ? _0x405d6e[_0x539e7c(1189)] : _0x405d6e) || 0),
    completed: ![],
    target: _0x41fec5
  };
  if (!_0x405d6e || typeof _0x405d6e !== _0x1cd310[_0x539e7c(788)]) return {
    progress: 0,
    completed: ![],
    target: _0x302698[_0x539e7c(720)]
  };
  if (_0x1cd310[_0x539e7c(582)](_0x3f8dbe, _0x539e7c(971)) && _0x405d6e.date !== utcDateKey()) return {
    progress: 0,
    completed: ![],
    target: _0x302698.questTarget
  };
  return {
    progress: Math[_0x539e7c(955)](0, Number(_0x405d6e.progress) || 0),
    completed: _0x405d6e.completed === !![],
    target: _0x41fec5
  };
}
function recordSuccessfulTrades(_0xe2abee, _0x31395b, _0x493078, _0x147fcc, _0x1f4c34, _0x1c7c57) {
  const _0x152d3a = _0x20c7bb,
    _0x2befae = {
      LZbsK: function (_0x59bb74, _0xcd7c8a, _0x56d203) {
        return _0x59bb74(_0xcd7c8a, _0x56d203);
      },
      gUowb: "flow",
      BJzrY: _0x152d3a(1256),
      fIqhH: function (_0x3701fe, _0x281aa2) {
        return _0x3701fe * _0x281aa2;
      },
      OXjuj: function (_0x761dd, _0x1e5c54, _0x1d1acf) {
        return _0x761dd(_0x1e5c54, _0x1d1acf);
      }
    },
    _0x750175 = _0x2befae[_0x152d3a(901)](playerShopProgress, _0xe2abee, _0x31395b);
  _0x750175[_0x152d3a(1187)] = Math.max(0, Number(_0x750175[_0x152d3a(1187)]) || 0) + _0x1f4c34;
  const _0x6aee19 = effectiveOfferPolicy(_0x493078);
  if (!_0x6aee19) return;
  const _0x14575b = Number(_0x6aee19[_0x152d3a(720)]) > 0,
    _0x2922af = _0x493078.tradeId || _0x493078[_0x152d3a(451)],
    _0x284aa6 = _0x6aee19.questMode || "repeat",
    _0x5ca7ae = questStatus(_0x750175, _0x493078, _0x6aee19),
    _0x3db5e0 = _0x5ca7ae.target,
    _0x4c0b1d = !_0x14575b || _0x5ca7ae.completed ? {
      progress: _0x5ca7ae.progress,
      rewards: 0
    } : advanceQuest(_0x5ca7ae[_0x152d3a(1189)], _0x3db5e0, _0x1f4c34);
  if (_0x14575b) {
    if (_0x284aa6 === _0x152d3a(899)) _0x750175[_0x152d3a(634)][_0x2922af] = {
      progress: _0x4c0b1d[_0x152d3a(1148)] ? Math.min(_0x4c0b1d[_0x152d3a(1189)], _0x6aee19.questTarget - 1) : _0x4c0b1d[_0x152d3a(1189)],
      target: _0x4c0b1d[_0x152d3a(1148)] ? _0x6aee19[_0x152d3a(720)] : _0x3db5e0
    };else _0x750175[_0x152d3a(634)][_0x2922af] = {
      progress: Math[_0x152d3a(1208)](_0x3db5e0, _0x5ca7ae[_0x152d3a(1189)] + _0x1f4c34),
      target: _0x3db5e0,
      completed: _0x4c0b1d.rewards > 0 || _0x5ca7ae.completed,
      ...(_0x284aa6 === _0x152d3a(971) ? {
        date: utcDateKey()
      } : {})
    };
  }
  try {
    _0xe2abee[_0x152d3a(378)](PROGRESS_KEY + _0x31395b, JSON[_0x152d3a(1324)](_0x750175));
  } catch (_0x309a94) {
    log.err(_0x2befae.gUowb, _0x309a94, {
      action: _0x2befae.BJzrY,
      shopName: _0x31395b
    });
    return;
  }
  const _0x164900 = _0x284aa6 === _0x152d3a(899) ? _0x4c0b1d[_0x152d3a(1148)] : Math.min(1, _0x4c0b1d[_0x152d3a(1148)]);
  if (_0x164900 > 0) {
    const _0x26d986 = _0x2befae.fIqhH((_0x147fcc[_0x152d3a(989)] || 1) * _0x164900, _0x6aee19[_0x152d3a(1372)] || 1),
      {
        added: _0x22c5db,
        leftovers: _0x3cfb42
      } = addItemCountSafe(_0x1c7c57, _0x147fcc, _0x26d986),
      _0x30a0a4 = _0x22c5db + _0x2befae[_0x152d3a(979)](spawnLeftovers, _0xe2abee, _0x3cfb42);
    if (_0x30a0a4 < _0x26d986) reportUndeliveredReward(_0xe2abee, _0x152d3a(547), _0x26d986 - _0x30a0a4);else sendTitle(_0xe2abee, _0x152d3a(527), [String(_0x164900)]);
  }
}
function activeTrade(_0x4b66a7, _0x33aef2, _0x67d3ed) {
  const _0x636728 = _0x20c7bb,
    _0x196208 = {
      nXZIY: function (_0x2a08bc, _0x5cf92e) {
        return _0x2a08bc(_0x5cf92e);
      },
      UpIaR: function (_0x4dc1b8, _0x559bbe) {
        return _0x4dc1b8 !== _0x559bbe;
      }
    },
    _0x584663 = loadTradeRoot(_0x4b66a7),
    _0x3b3a6b = (getNode(_0x584663, _0x67d3ed)?.[_0x636728(641)] || [])[_0x636728(1071)](_0x35bfbe => _0x35bfbe?.["namespace"] === _0x33aef2[_0x636728(451)]);
  if (!_0x3b3a6b) return null;
  const _0x2d1512 = _0x196208.nXZIY(effectiveOfferPolicy, _0x3b3a6b);
  if (!_0x2d1512 || !effectiveShopPolicy(_0x584663)) return null;
  const _0x24e553 = _0x3b3a6b.stockRemaining,
    _0x31f5a2 = _0x3b3a6b[_0x636728(645)],
    _0x4af20 = availableStock(_0x3b3a6b, Date.now(), _0x2d1512);
  if ((_0x3b3a6b[_0x636728(773)] !== _0x24e553 || _0x196208[_0x636728(1138)](_0x3b3a6b.restockAt, _0x31f5a2)) && !saveTradeRoot(_0x4b66a7, _0x584663)) return _0x3b3a6b.stockRemaining = _0x24e553, _0x3b3a6b.restockAt = _0x31f5a2, null;
  return {
    root: _0x584663,
    node: _0x3b3a6b,
    stock: _0x4af20,
    policy: _0x2d1512
  };
}
function stockDisplay(_0x390ed2, _0x4d0b70, _0x3c199d) {
  const _0x169179 = _0x20c7bb,
    _0x78bd73 = {
      EKmYq: function (_0x1f7b9d, _0x2f3a7d) {
        return _0x1f7b9d(_0x2f3a7d);
      },
      bfEfe: function (_0x44f870, _0x53f44b, _0x285d66, _0xe32bf5) {
        return _0x44f870(_0x53f44b, _0x285d66, _0xe32bf5);
      },
      Dfqsc: _0x169179(1268)
    },
    _0x1a7ce2 = _0x78bd73[_0x169179(898)](effectiveOfferPolicy, _0x3c199d);
  if (!_0x1a7ce2) return {
    rawtext: []
  };
  const _0x1d1020 = _0x3c199d[_0x169179(773)],
    _0x22da33 = _0x3c199d[_0x169179(645)],
    _0x557ec1 = Date[_0x169179(1369)](),
    _0x163ad4 = availableStock(_0x3c199d, _0x557ec1, _0x1a7ce2);
  if ((_0x3c199d[_0x169179(773)] !== _0x1d1020 || _0x3c199d[_0x169179(645)] !== _0x22da33) && !saveTradeRoot(_0x390ed2, _0x4d0b70)) return _0x3c199d[_0x169179(773)] = _0x1d1020, _0x3c199d[_0x169179(645)] = _0x22da33, {
    rawtext: [{
      translate: _0x169179(816)
    }]
  };
  if (!Number[_0x169179(970)](_0x163ad4)) return {
    rawtext: [{
      translate: "shopkeeper.stock.unlimited"
    }]
  };
  const _0x5c663d = [{
      translate: "shopkeeper.stock.count",
      with: [String(_0x163ad4), String(_0x1a7ce2[_0x169179(1288)])]
    }],
    _0x5cfe39 = _0x78bd73[_0x169179(776)](restockTime, _0x3c199d, _0x557ec1, _0x1a7ce2);
  if (_0x5cfe39 !== null) _0x5c663d[_0x169179(943)]({
    text: "\n"
  }, {
    translate: _0x78bd73[_0x169179(925)],
    with: [_0x78bd73.EKmYq(String, Math.ceil((_0x5cfe39 - _0x557ec1) / 6e4)), new Date(_0x5cfe39)[_0x169179(405)]()[_0x169179(586)]("T", " ").slice(0, 16)]
  });
  return {
    rawtext: _0x5c663d
  };
}
function showOutOfStock(_0x22ac62, _0x205687) {
  const _0x569e92 = _0x20c7bb,
    _0x40838f = {
      nYAtf: function (_0x3237a5, _0x4a95fb, _0x388e2d, _0xa46972) {
        return _0x3237a5(_0x4a95fb, _0x388e2d, _0xa46972);
      },
      cQzPn: function (_0x1be611, _0x2e2073) {
        return _0x1be611 === _0x2e2073;
      },
      coDBT: function (_0x1c2e99, _0x338593, _0x4baee0) {
        return _0x1c2e99(_0x338593, _0x4baee0);
      },
      nHkFZ: _0x569e92(1105),
      qPHJA: function (_0x194a52, _0x5381ec) {
        return _0x194a52(_0x5381ec);
      },
      ERdtO: function (_0x147774, _0x40ae19) {
        return _0x147774 / _0x40ae19;
      },
      qTJLG: function (_0xe62056, _0x1926c6) {
        return _0xe62056 - _0x1926c6;
      }
    },
    _0x2dce7d = _0x40838f.nYAtf(restockTime, _0x205687[_0x569e92(688)], Date[_0x569e92(1369)](), _0x205687[_0x569e92(1265)]);
  if (_0x40838f.cQzPn(_0x2dce7d, null)) return _0x40838f.coDBT(sendTitle, _0x22ac62, "shopkeeper.stock.empty");
  sendTitle(_0x22ac62, _0x40838f.nHkFZ, [_0x40838f[_0x569e92(1027)](String, Math.ceil(_0x40838f[_0x569e92(384)](_0x40838f[_0x569e92(571)](_0x2dce7d, Date.now()), 6e4))), new Date(_0x2dce7d)[_0x569e92(405)]()[_0x569e92(586)]("T", " ")[_0x569e92(443)](0, 16)]);
}
function matchingGroup(_0x48ed82, _0x1f5a0e) {
  const _0x170e3a = _0x20c7bb,
    _0x16f6ee = {
      DvYaf: function (_0x436ae4, _0x212b5a) {
        return _0x436ae4 <= _0x212b5a;
      },
      ylUWS: function (_0x23c216, _0x4a430a) {
        return _0x23c216 < _0x4a430a;
      }
    };
  if (!_0x48ed82 || !_0x1f5a0e?.["groups"]?.[_0x170e3a(459)]) return null;
  let _0x3848ff = null;
  for (const _0x595d3a of _0x1f5a0e[_0x170e3a(541)]) {
    let _0x18d792 = ![];
    try {
      if (_0x595d3a[_0x170e3a(1177)] === "tag") _0x18d792 = _0x48ed82.hasTag(_0x595d3a.value);else {
        const _0x20389f = _0x144cf1.world[_0x170e3a(770)][_0x170e3a(662)](_0x595d3a[_0x170e3a(657)])?.[_0x170e3a(476)](_0x48ed82);
        _0x18d792 = Number[_0x170e3a(1070)](_0x20389f) && _0x20389f >= _0x595d3a.min && _0x16f6ee[_0x170e3a(360)](_0x20389f, _0x595d3a[_0x170e3a(955)]);
      }
    } catch (_0x3fc908) {}
    if (!_0x18d792) continue;
    if (_0x595d3a[_0x170e3a(644)]) return _0x595d3a;
    if (!_0x3848ff || _0x595d3a[_0x170e3a(1306)] > _0x3848ff.priority || _0x595d3a[_0x170e3a(1306)] === _0x3848ff[_0x170e3a(1306)] && _0x16f6ee[_0x170e3a(711)](_0x595d3a.id, _0x3848ff.id)) _0x3848ff = _0x595d3a;
  }
  return _0x3848ff;
}
function linkedEventIds(_0x1be512) {
  const _0x34983b = _0x20c7bb;
  return Array.isArray(_0x1be512?.[_0x34983b(1346)]) ? _0x1be512[_0x34983b(1346)] : _0x1be512?.[_0x34983b(1036)] ? [_0x1be512[_0x34983b(1036)]] : [];
}
function activeOfferEvent(_0x4f82eb, _0x47b0f2 = Date.now()) {
  const _0x109c94 = _0x20c7bb,
    _0x274ce7 = {
      pGhMJ: function (_0x3753c6, _0x10ee3c, _0x2589d3) {
        return _0x3753c6(_0x10ee3c, _0x2589d3);
      },
      SqiqM: function (_0x46083b, _0x4a3e8a) {
        return _0x46083b > _0x4a3e8a;
      }
    };
  let _0x59a9cb = null;
  for (const _0x161cde of linkedEventIds(_0x4f82eb)) {
    try {
      const _0x278d8f = policyStore[_0x109c94(667)]("event", _0x161cde, _0x47b0f2)?.["data"];
      if (!_0x278d8f || !_0x274ce7.pGhMJ(eventWindow, _0x278d8f, _0x47b0f2)?.["active"]) continue;
      (!_0x59a9cb || _0x274ce7.SqiqM(_0x278d8f[_0x109c94(1306)], _0x59a9cb[_0x109c94(879)].priority) || _0x278d8f[_0x109c94(1306)] === _0x59a9cb[_0x109c94(879)][_0x109c94(1306)] && _0x161cde < _0x59a9cb.id) && (_0x59a9cb = {
        id: _0x161cde,
        event: _0x278d8f
      });
    } catch (_0x412742) {}
  }
  return _0x59a9cb?.[_0x109c94(879)] || null;
}
function effectiveReduction(_0x21895f, _0x2dd35e, _0x58ec62, _0x376d62, _0x28f862, _0x500696) {
  const _0x23e7b9 = _0x20c7bb,
    _0x4cff39 = {
      toHUe: function (_0x1c4d7b, _0x6ee0fb) {
        return _0x1c4d7b(_0x6ee0fb);
      },
      PodEk: function (_0x227e02, _0x2a244f) {
        return _0x227e02 === _0x2a244f;
      },
      LcXmG: function (_0xf1334f, _0x39b583, _0xe9b46a) {
        return _0xf1334f(_0x39b583, _0xe9b46a);
      }
    },
    _0x534b98 = effectiveShopPolicy(_0x58ec62),
    _0x3bfb4a = _0x4cff39[_0x23e7b9(793)](effectiveOfferPolicy, _0x376d62);
  if (!_0x534b98 || !_0x3bfb4a) return 0;
  const _0x3af8b8 = playerShopProgress(_0x21895f, _0x2dd35e),
    _0x3d1686 = _0x534b98.dailySpecialEnabled && (_0x4cff39[_0x23e7b9(1079)](_0x500696, void 0) ? _0x4cff39[_0x23e7b9(520)](getDailySpecialNamespace, _0x2dd35e, _0x58ec62) : _0x500696) === _0x28f862,
    _0x219b60 = shopLevel(_0x3af8b8.purchases, _0x534b98)[_0x23e7b9(801)] + (matchingGroup(_0x21895f, _0x534b98)?.[_0x23e7b9(801)] || 0) + (activeOfferEvent(_0x3bfb4a)?.[_0x23e7b9(801)] || 0) + (_0x3d1686 ? _0x534b98[_0x23e7b9(389)] : 0);
  return Math[_0x23e7b9(955)](-_0x534b98.maxSurcharge, Math.min(_0x534b98.maxDiscount, _0x219b60));
}
function isTradeOpen(_0x449e35, _0x1d2158, _0x58cc0, _0x157ff2 = Date.now()) {
  const _0x424523 = _0x20c7bb,
    _0x401cdb = {
      qhgAm: function (_0x177443, _0x234764, _0x190023) {
        return _0x177443(_0x234764, _0x190023);
      }
    },
    _0x3e3bb3 = effectiveShopPolicy(_0x449e35),
    _0x2562b9 = effectiveOfferPolicy(_0x1d2158);
  if (!_0x3e3bb3 || !_0x2562b9 || !isSeasonOpen(_0x2562b9, new Date(_0x157ff2))) return ![];
  if (shopLevel(_0x449e35[_0x424523(1129)], _0x3e3bb3).level < _0x2562b9[_0x424523(595)]) return ![];
  if (linkedEventIds(_0x2562b9)[_0x424523(459)] && !_0x401cdb.qhgAm(activeOfferEvent, _0x2562b9, _0x157ff2)) return ![];
  return !matchingGroup(_0x58cc0, _0x3e3bb3)?.["deny"];
}
function fixedDailyChoice(_0x1dfe7e, _0x601fc1, _0x1e537b) {
  const _0x3302da = _0x20c7bb,
    _0x5abb0b = {
      MifNB: function (_0x1a1247, _0x1d8cab) {
        return _0x1a1247 === _0x1d8cab;
      },
      RwFqz: _0x3302da(566)
    },
    _0x212571 = Date.now(),
    _0xa32879 = utcDateKey(new Date(_0x212571)),
    _0x34396c = _0x3302da(429) + _0x601fc1 + ":" + _0x1dfe7e;
  try {
    const _0x38629c = JSON[_0x3302da(1223)](_0x144cf1[_0x3302da(1104)][_0x3302da(799)](_0x34396c) || _0x3302da(621));
    if (_0x5abb0b[_0x3302da(780)](_0x38629c?.[_0x3302da(948)], _0xa32879)) {
      if (_0x38629c.id !== null || _0x1e537b[_0x3302da(459)] === 0) {
        const _0x3866b0 = _0x1e537b[_0x3302da(1071)](_0xa3e27e => _0xa3e27e.id === _0x38629c.id);
        if (!_0x3866b0 || _0x38629c[_0x3302da(1271)] && (_0x38629c[_0x3302da(1271)] !== itemKeyOf(_0x3866b0[_0x3302da(639)]) || _0x38629c[_0x3302da(506)] !== itemKeyOf(_0x3866b0[_0x3302da(608)]))) return null;
        return _0x38629c.target ? {
          ..._0x3866b0,
          target: _0x38629c[_0x3302da(453)],
          date: _0xa32879
        } : {
          ..._0x3866b0,
          date: _0xa32879
        };
      }
    }
    if (_0x1e537b[_0x3302da(459)] === 0) return null;
    const _0x2df704 = dailyOrderCandidate(_0x1dfe7e + ":" + _0x601fc1, _0x1e537b, new Date(_0x212571));
    if (!_0x2df704) return null;
    const _0xbd1f38 = JSON[_0x3302da(1324)]({
      date: _0xa32879,
      id: _0x2df704?.["id"] || null,
      target: _0x2df704?.["target"] || null,
      ingredientKey: _0x2df704?.["ingredient"] ? itemKeyOf(_0x2df704.ingredient) : null,
      rewardKey: _0x2df704?.["reward"] ? itemKeyOf(_0x2df704.reward) : null
    });
    _0x144cf1[_0x3302da(1104)][_0x3302da(378)](_0x34396c, _0xbd1f38);
    if (_0x144cf1[_0x3302da(1104)][_0x3302da(799)](_0x34396c) !== _0xbd1f38) return null;
    return _0x2df704 ? {
      ..._0x2df704,
      date: _0xa32879
    } : null;
  } catch (_0x152b4c) {
    return log[_0x3302da(618)](_0x3302da(1103), _0x152b4c, {
      action: _0x5abb0b[_0x3302da(1289)],
      shopName: _0x1dfe7e,
      kind: _0x601fc1
    }), null;
  }
}
function getDailySpecialNamespace(_0x233c5d, _0x595df4) {
  const _0x29fd61 = _0x20c7bb,
    _0x235e4b = {
      aPoAe: function (_0x1c9fe4, _0x394015) {
        return _0x1c9fe4 === _0x394015;
      }
    };
  if (!effectiveShopPolicy(_0x595df4)?.[_0x29fd61(1068)]) return null;
  const _0x43b832 = [],
    _0x30e284 = String(_0x233c5d)[_0x29fd61(983)]();
  function _0xc8e70e(_0x497761, _0x34386e = "") {
    const _0x1036f5 = _0x29fd61;
    for (const _0x3a0851 of _0x497761?.[_0x1036f5(641)] || []) {
      const _0x1f5683 = _0x34386e ? _0x34386e + "/" + _0x3a0851[_0x1036f5(451)] : _0x3a0851[_0x1036f5(451)];
      if (_0x235e4b.aPoAe(_0x3a0851[_0x1036f5(1116)], _0x1036f5(370)) && effectiveOfferPolicy(_0x3a0851)?.[_0x1036f5(1041)] && isTradeOpen(_0x595df4, _0x3a0851)) _0x43b832[_0x1036f5(943)](_0x30e284 + ":" + _0x1f5683);else {
        if (_0x3a0851[_0x1036f5(641)]) _0xc8e70e(_0x3a0851, _0x1f5683);
      }
    }
  }
  _0xc8e70e(_0x595df4);
  const _0x11d8c1 = fixedDailyChoice(_0x233c5d, _0x29fd61(905), _0x43b832[_0x29fd61(1312)](_0x4d80aa => ({
    id: _0x4d80aa
  })));
  return _0x11d8c1 ? _0x11d8c1.id[_0x29fd61(443)](_0x30e284[_0x29fd61(459)] + 1) : null;
}
function getDailyOrder(_0x3a5b4b, _0x1fbfcb, _0x441957) {
  const _0x48f00f = _0x20c7bb,
    _0x5725fa = {
      INGPy: function (_0x45998, _0x3be819) {
        return _0x45998(_0x3be819);
      },
      mNOpd: function (_0x217cf0, _0x4dd449, _0x466ae6) {
        return _0x217cf0(_0x4dd449, _0x466ae6);
      },
      QtJut: function (_0x4a0112, _0x232acb) {
        return _0x4a0112(_0x232acb);
      }
    };
  if (!_0x5725fa[_0x48f00f(478)](effectiveShopPolicy, _0x1fbfcb)?.[_0x48f00f(1035)]) return null;
  const _0x4c1d3b = [];
  function _0x50376f(_0x227994, _0x3c4d83 = "") {
    const _0x3a06c8 = _0x48f00f;
    for (const _0x44c8cc of _0x227994?.[_0x3a06c8(641)] || []) {
      const _0x481e3e = _0x3c4d83 ? _0x3c4d83 + "/" + _0x44c8cc[_0x3a06c8(451)] : _0x44c8cc.namespace;
      if (_0x44c8cc[_0x3a06c8(1116)] === _0x3a06c8(370)) {
        const _0x3b1e5c = effectiveOfferPolicy(_0x44c8cc),
          _0x3754b5 = Number(_0x44c8cc[_0x3a06c8(677)]),
          _0x5a9370 = _0x5725fa.INGPy(Number, _0x3b1e5c?.[_0x3a06c8(1173)]);
        if (_0x3b1e5c?.[_0x3a06c8(1035)] !== !![] || !Number.isInteger(_0x3754b5) || _0x3754b5 < 1 || _0x3754b5 > 9 || !Number[_0x3a06c8(1070)](_0x5a9370) || _0x5a9370 < 1 || !isTradeOpen(_0x1fbfcb, _0x44c8cc)) continue;
        const _0x5b54a2 = _0x44c8cc[_0x3a06c8(654)] ?? _0x3a5b4b,
          _0x196f1b = _0x44c8cc[_0x3a06c8(491)] || 0;
        let _0xb9af28 = null,
          _0x3e1a95 = null;
        try {
          _0xb9af28 = storage_default[_0x3a06c8(359)](_0x441957, _0x5b54a2, _0x196f1b);
        } catch (_0x3e8a28) {}
        try {
          _0x3e1a95 = storage_default.getLive(_0x441957, _0x5b54a2, _0x196f1b + _0x3754b5);
        } catch (_0x5dfe13) {}
        if (!_0xb9af28 || !_0x3e1a95) continue;
        _0x4c1d3b[_0x3a06c8(943)]({
          id: _0x44c8cc.tradeId || _0x481e3e,
          path: _0x481e3e,
          node: _0x44c8cc,
          storageName: _0x5b54a2,
          offset: _0x196f1b,
          reward: _0xb9af28,
          ingredient: _0x3e1a95,
          target: _0x5a9370
        });
      } else Array[_0x3a06c8(1080)](_0x44c8cc[_0x3a06c8(641)]) && _0x5725fa.mNOpd(_0x50376f, _0x44c8cc, _0x481e3e);
    }
  }
  _0x5725fa[_0x48f00f(1093)](_0x50376f, _0x1fbfcb);
  const _0x23640d = fixedDailyChoice(_0x3a5b4b, "order", _0x4c1d3b);
  return _0x23640d && isTradeOpen(_0x1fbfcb, _0x23640d.node, _0x441957) ? _0x23640d : null;
}
function openDailyOrderBoard(_0x32e430, _0x1fcb25) {
  const _0x45eda9 = _0x20c7bb,
    _0x5c241e = {
      WkIko: function (_0x321ef1, _0xc7268b, _0x5b635b, _0x1b90dd) {
        return _0x321ef1(_0xc7268b, _0x5b635b, _0x1b90dd);
      },
      CVQQt: function (_0x394ae4, _0x14472e) {
        return _0x394ae4 - _0x14472e;
      },
      vPJXN: "shopkeeper.daily.order.progress",
      CPISQ: function (_0x4ebdc1, _0x9758da) {
        return _0x4ebdc1(_0x9758da);
      },
      FclZx: _0x45eda9(1378)
    },
    _0x42860b = loadTradeRoot(_0x1fcb25);
  if (!_0x42860b) return;
  const _0x2a0eec = _0x5c241e[_0x45eda9(950)](getDailyOrder, _0x1fcb25, _0x42860b, _0x32e430),
    _0x589cbf = currentOrderProgress(_0x32e430, _0x1fcb25, _0x2a0eec),
    _0x123421 = new ActionFormData4()[_0x45eda9(1352)]({
      translate: "shopkeeper.daily.order.title"
    });
  if (!_0x2a0eec) {
    _0x123421.body({
      rawtext: [{
        translate: _0x45eda9(1198)
      }]
    }), _0x123421[_0x45eda9(730)]({
      translate: _0x45eda9(1269)
    }), _guardForm(_0x123421[_0x45eda9(402)](_0x32e430), _0x45eda9(784));
    return;
  }
  const _0x51b3a7 = Math[_0x45eda9(955)](0, _0x5c241e.CVQQt(_0x2a0eec.target, _0x589cbf.orderId === _0x2a0eec.id ? _0x589cbf.progress : 0)),
    _0x21e741 = [{
      translate: _0x45eda9(1084)
    }, {
      text: " "
    }, ...getItemNameRawtext(_0x2a0eec[_0x45eda9(639)]), {
      text: "\n"
    }, {
      translate: _0x5c241e[_0x45eda9(1137)],
      with: [_0x5c241e[_0x45eda9(1327)](String, _0x589cbf[_0x45eda9(1096)] === _0x2a0eec.id ? _0x589cbf[_0x45eda9(1189)] : 0), String(_0x2a0eec[_0x45eda9(453)])]
    }, {
      text: "\n"
    }, {
      translate: _0x5c241e[_0x45eda9(590)],
      with: [String(_0x51b3a7)]
    }, {
      text: "\n"
    }, {
      translate: "shopkeeper.daily.order.reward.label"
    }, {
      text: " "
    }, ...getItemNameRawtext(_0x2a0eec[_0x45eda9(608)])];
  if (_0x589cbf[_0x45eda9(521)]) _0x21e741[_0x45eda9(943)]({
    text: "\n"
  }, {
    translate: _0x45eda9(825)
  });
  _0x123421.body({
    rawtext: _0x21e741
  }), _0x123421[_0x45eda9(730)]({
    translate: _0x589cbf[_0x45eda9(521)] ? _0x45eda9(825) : _0x45eda9(1217)
  }), _guardForm(_0x123421.show(_0x32e430).then(_0x475643 => {
    const _0x3903df = _0x45eda9;
    if (!isPlayerValid(_0x32e430) || _0x475643[_0x3903df(505)] || _0x475643.selection !== 0 || _0x589cbf[_0x3903df(521)]) return;
    promptDailyOrderDelivery(_0x32e430, _0x1fcb25, _0x2a0eec.id, _0x2a0eec[_0x3903df(948)]);
  }), _0x45eda9(902));
}
function promptDailyOrderDelivery(_0xd69307, _0x471005, _0x23bd81, _0x2fddc1) {
  const _0x1524ad = _0x20c7bb,
    _0x5484ee = {
      MGygI: function (_0x40a6f5, _0x580f92) {
        return _0x40a6f5(_0x580f92);
      },
      ekuSD: function (_0x3e2e95, _0x5438f6) {
        return _0x3e2e95 !== _0x5438f6;
      },
      ngwnq: function (_0xe59b6e, _0x62f2a2, _0x35e8e4, _0x369f08) {
        return _0xe59b6e(_0x62f2a2, _0x35e8e4, _0x369f08);
      },
      YcQbp: function (_0x1ffb76, _0x35dff6) {
        return _0x1ffb76 !== _0x35dff6;
      },
      cSQKQ: function (_0x1cf4ca, _0x292064) {
        return _0x1cf4ca !== _0x292064;
      },
      ORSwH: function (_0x28e4ce) {
        return _0x28e4ce();
      },
      WvTRC: function (_0x4e9158, _0x204662) {
        return _0x4e9158 === _0x204662;
      },
      MJUbX: _0x1524ad(727),
      EBGKu: "shopkeeper.inventory.no.space",
      CNIjo: function (_0x35f82e, _0x520c68, _0x33b73a, _0x24a6c3) {
        return _0x35f82e(_0x520c68, _0x33b73a, _0x24a6c3);
      },
      JmGLD: function (_0x54c1d0, _0x44be1f) {
        return _0x54c1d0 === _0x44be1f;
      },
      gCmlQ: function (_0x379bab, _0x530cef, _0xe439f4, _0x3acdda) {
        return _0x379bab(_0x530cef, _0xe439f4, _0x3acdda);
      },
      LRSCU: function (_0x12b8eb, _0x412daf) {
        return _0x12b8eb < _0x412daf;
      },
      pksiB: function (_0x455f9d, _0x3240b2) {
        return _0x455f9d - _0x3240b2;
      },
      sUydv: function (_0x474071, _0x51d38d) {
        return _0x474071(_0x51d38d);
      },
      bjWkj: function (_0x5a9a14, _0x583497, _0x9cd368) {
        return _0x5a9a14(_0x583497, _0x9cd368);
      },
      ySQwc: _0x1524ad(825),
      EWdiY: function (_0x338692, _0x31eb59, _0x59a503) {
        return _0x338692(_0x31eb59, _0x59a503);
      }
    },
    _0x39da39 = loadTradeRoot(_0x471005),
    _0x229248 = _0x39da39 && getDailyOrder(_0x471005, _0x39da39, _0xd69307);
  if (!_0x229248 || _0x229248.id !== _0x23bd81 || _0x229248[_0x1524ad(948)] !== _0x2fddc1) return _0x5484ee[_0x1524ad(1272)](openDailyOrderBoard, _0xd69307, _0x471005);
  const _0x13cf1c = currentOrderProgress(_0xd69307, _0x471005, _0x229248);
  if (_0x13cf1c.completed) {
    sendTitle(_0xd69307, _0x5484ee.ySQwc);
    return;
  }
  const _0x2307e9 = new ModalFormData3().title({
    translate: "shopkeeper.daily.order.title"
  })[_0x1524ad(471)]({
    translate: "shopkeeper.daily.order.amount.prompt"
  }, "1", {
    defaultValue: "1"
  });
  _0x5484ee[_0x1524ad(531)](_guardForm, _0x2307e9.show(_0xd69307)[_0x1524ad(479)](_0x36db60 => {
    const _0x390047 = _0x1524ad;
    if (!isPlayerValid(_0xd69307) || _0x36db60.canceled) return;
    const _0x5b1e0b = _0x5484ee[_0x390047(1329)](Number, _0x36db60[_0x390047(362)]?.[0]);
    if (!Number[_0x390047(1070)](_0x5b1e0b) || _0x5b1e0b < 1) {
      if (_0x5484ee[_0x390047(1166)](_0x390047(904), _0x390047(904))) return "?";else {
        sendTitle(_0xd69307, "shopkeeper.daily.order.amount.invalid");
        return;
      }
    }
    const _0x2d0c92 = loadTradeRoot(_0x471005),
      _0xf9d743 = _0x2d0c92 && getDailyOrder(_0x471005, _0x2d0c92, _0xd69307),
      _0x3e7036 = _0x5484ee[_0x390047(554)](currentOrderProgress, _0xd69307, _0x471005, _0xf9d743);
    if (!_0xf9d743 || _0x5484ee[_0x390047(1220)](_0xf9d743.id, _0x23bd81) || _0x5484ee.cSQKQ(_0xf9d743.date, _0x2fddc1) || _0x3e7036[_0x390047(521)]) {
      sendTitle(_0xd69307, _0x3e7036[_0x390047(521)] ? _0x390047(825) : _0x390047(1198));
      return;
    }
    if (_0x5484ee[_0x390047(734)](utcDateKey) !== _0x2fddc1) return openDailyOrderBoard(_0xd69307, _0x471005);
    const _0x4c6735 = Math[_0x390047(955)](0, _0xf9d743[_0x390047(453)] - (_0x3e7036.orderId === _0xf9d743.id ? _0x3e7036.progress : 0)),
      _0x1e0739 = Math[_0x390047(1208)](_0x5b1e0b, _0x4c6735),
      _0x11a572 = _0xd69307[_0x390047(1098)](_0x390047(1044))[_0x390047(1344)];
    let _0x552a59 = 0;
    for (let _0x430f7a = 0; _0x430f7a < _0x11a572[_0x390047(664)]; _0x430f7a++) {
      const _0x5bdd6c = _0x11a572[_0x390047(940)](_0x430f7a);
      if (itemIdentityMatches(_0x5bdd6c, _0xf9d743[_0x390047(639)])) _0x552a59 += _0x5bdd6c[_0x390047(989)];
    }
    if (_0x552a59 < _0x1e0739) {
      if (_0x5484ee[_0x390047(454)](_0x5484ee[_0x390047(448)], _0x390047(959))) {
        const _0xa1eeea = _0x47429d.children[0];
        _0x1a3320(_0x891670, _0x32bd38, _0xa1eeea, "");
      } else {
        sendTitle(_0xd69307, _0x390047(638));
        return;
      }
    }
    if (_0x1e0739 === _0x4c6735 && getMaxCraftableByInventory(_0xf9d743[_0x390047(608)], _0x11a572) < 1) {
      sendTitle(_0xd69307, _0x5484ee[_0x390047(627)]);
      return;
    }
    if (!_0x5484ee.CNIjo(removeMatchingAmount, _0x11a572, _0xf9d743[_0x390047(639)], _0x1e0739)) {
      sendTitle(_0xd69307, _0x390047(638));
      return;
    }
    const _0x16d1d3 = {
      date: _0x2fddc1,
      orderId: _0xf9d743.id,
      progress: (_0x5484ee[_0x390047(1181)](_0x3e7036[_0x390047(1096)], _0xf9d743.id) ? _0x3e7036[_0x390047(1189)] : 0) + _0x1e0739,
      completed: ![]
    };
    _0x16d1d3[_0x390047(1189)] >= _0xf9d743[_0x390047(453)] && (_0x16d1d3[_0x390047(1189)] = _0xf9d743[_0x390047(453)], _0x16d1d3[_0x390047(521)] = !![]);
    if (!_0x5484ee.gCmlQ(saveDailyOrderProgress, _0xd69307, _0x471005, _0x16d1d3)) {
      const {
        leftovers: _0x8ed94a
      } = addItemCountSafe(_0x11a572, _0xf9d743[_0x390047(639)], _0x1e0739);
      spawnLeftovers(_0xd69307, _0x8ed94a);
      return;
    }
    if (_0x16d1d3.completed) {
      const _0x11a6f1 = _0xf9d743[_0x390047(608)][_0x390047(989)] || 1,
        {
          added: _0x2e2bec,
          leftovers: _0x7d4f1c
        } = _0x5484ee[_0x390047(554)](addItemCountSafe, _0x11a572, _0xf9d743[_0x390047(608)], _0x11a6f1),
        _0x230c9e = _0x2e2bec + spawnLeftovers(_0xd69307, _0x7d4f1c);
      if (_0x5484ee[_0x390047(1182)](_0x230c9e, _0x11a6f1)) reportUndeliveredReward(_0xd69307, _0x390047(1e3), _0x5484ee[_0x390047(386)](_0x11a6f1, _0x230c9e));else _0xd69307[_0x390047(710)]({
        rawtext: [{
          translate: _0x390047(702)
        }, {
          translate: "shopkeeper.daily.order.delivery.completed"
        }, ...getItemNameRawtext(_0xf9d743.reward)]
      });
    } else _0x5484ee.CNIjo(sendTitle, _0xd69307, _0x390047(673), [_0x5484ee[_0x390047(1018)](String, _0x1e0739), String(_0x16d1d3[_0x390047(1189)]), _0x5484ee.sUydv(String, _0xf9d743[_0x390047(453)])]);
    openDailyOrderBoard(_0xd69307, _0x471005);
  }), "dailyOrderDelivery");
}
function checkTradeAccess(_0x139400, _0x1b2aa7) {
  const _0xafd3d0 = _0x20c7bb,
    _0x99ed56 = {
      TIqic: function (_0x4038c7, _0x58f08c, _0x4f19b9) {
        return _0x4038c7(_0x58f08c, _0x4f19b9);
      },
      HlaKz: "shopkeeper.season.closed",
      GEeOr: function (_0x32a37c, _0x3ee481) {
        return _0x32a37c === _0x3ee481;
      },
      FOLzu: function (_0x4647df, _0x4ca16f) {
        return _0x4647df(_0x4ca16f);
      },
      zNzdE: function (_0x57b3f8, _0x3b2a03) {
        return _0x57b3f8(_0x3b2a03);
      },
      kfIvc: "shopkeeper.event.opens",
      FjaFu: function (_0xfb1b69, _0x2984eb, _0x2fd196) {
        return _0xfb1b69(_0x2984eb, _0x2fd196);
      },
      TJTzU: _0xafd3d0(930),
      BaRNS: function (_0x35d72a, _0x3518bc, _0x4d7532) {
        return _0x35d72a(_0x3518bc, _0x4d7532);
      }
    },
    _0x4e158e = effectiveShopPolicy(_0x1b2aa7[_0xafd3d0(502)]),
    _0x59b1f0 = effectiveOfferPolicy(_0x1b2aa7[_0xafd3d0(688)]);
  if (!_0x4e158e || !_0x59b1f0) return sendTitle(_0x139400, _0xafd3d0(737)), ![];
  if (!isSeasonOpen(_0x59b1f0)) return _0x99ed56[_0xafd3d0(395)](sendTitle, _0x139400, _0x99ed56[_0xafd3d0(935)]), ![];
  if (shopLevel(_0x1b2aa7[_0xafd3d0(502)][_0xafd3d0(1129)], _0x4e158e)[_0xafd3d0(706)] < _0x59b1f0[_0xafd3d0(595)]) {
    if (_0x99ed56[_0xafd3d0(967)]("ubVkH", _0xafd3d0(530))) {
      const _0x288191 = _0x939014[_0xafd3d0(1177)];
      if (!_0x288191?.["hasTag"](_0xafd3d0(860)) || _0x323031[_0xafd3d0(839)]?.["typeId"] !== "shopkeeper:tool") return;
      const _0xf8466b = _0x36b7c3[_0xafd3d0(1348)].currentTick;
      _0x2b392b[_0xafd3d0(1348)][_0xafd3d0(568)](() => {
        const _0x579261 = _0xafd3d0;
        if (_0x548295[_0x579261(667)](_0x288191) === _0xf8466b || _0x4cff5b[_0x579261(667)](_0x288191) === _0xf8466b) return;
        _0xea1d65(_0x288191);
      }, 1);
    } else return sendTitle(_0x139400, _0xafd3d0(865), [String(_0x59b1f0.requiredLevel)]), ![];
  }
  if (linkedEventIds(_0x59b1f0).length && !activeOfferEvent(_0x59b1f0)) {
    let _0x364629 = null;
    for (const _0x18253a of _0x99ed56[_0xafd3d0(909)](linkedEventIds, _0x59b1f0)) {
      try {
        const _0x29b557 = _0x99ed56[_0xafd3d0(818)](eventWindow, policyStore.get(_0xafd3d0(879), _0x18253a)?.[_0xafd3d0(811)])?.[_0xafd3d0(499)];
        if (_0x29b557 && (!_0x364629 || _0x29b557 < _0x364629)) _0x364629 = _0x29b557;
      } catch (_0x58bfdb) {}
    }
    if (_0x364629) sendTitle(_0x139400, _0x99ed56.kfIvc, [new Date(_0x364629)[_0xafd3d0(405)]().replace("T", " ").slice(0, 16)]);else _0x99ed56[_0xafd3d0(1205)](sendTitle, _0x139400, _0x99ed56.TJTzU);
    return ![];
  }
  if (matchingGroup(_0x139400, _0x4e158e)?.[_0xafd3d0(644)]) return _0x99ed56.BaRNS(sendTitle, _0x139400, _0xafd3d0(737)), ![];
  return !![];
}
function commitSale(_0x28cc98, _0x584bba, _0x441c5f) {
  const _0x49525f = _0x20c7bb,
    _0x1ffe2c = _0x584bba[_0x49525f(688)][_0x49525f(773)],
    _0x5e3732 = _0x584bba[_0x49525f(502)].totalSales;
  if (Number[_0x49525f(970)](_0x584bba.stock)) _0x584bba.node[_0x49525f(773)] = Math[_0x49525f(955)](0, _0x584bba[_0x49525f(1307)] - _0x441c5f);
  _0x584bba.root[_0x49525f(1129)] = Math.max(0, Number(_0x584bba[_0x49525f(502)].totalSales) || 0) + _0x441c5f;
  if (saveTradeRoot(_0x28cc98, _0x584bba[_0x49525f(502)])) return !![];
  return _0x584bba.node[_0x49525f(773)] = _0x1ffe2c, _0x584bba[_0x49525f(502)].totalSales = _0x5e3732, ![];
}
function getItemNameRawtext(_0x4b318a) {
  const _0x30c97e = _0x20c7bb,
    _0x2a12ed = {
      tZoom: function (_0x568b06, _0xb398be) {
        return _0x568b06(_0xb398be);
      }
    },
    _0x571439 = _0x2a12ed[_0x30c97e(390)](getItemDisplayName2, _0x4b318a);
  if (typeof _0x571439 === _0x30c97e(406)) return [{
    text: _0x571439
  }];
  if (_0x571439?.["rawtext"] && Array[_0x30c97e(1080)](_0x571439[_0x30c97e(819)])) return _0x571439[_0x30c97e(819)];
  if (_0x571439?.[_0x30c97e(440)]) return [_0x571439];
  return [{
    text: "Unknown"
  }];
}
function rawMessageToText2(_0x23e062) {
  const _0x4cb425 = _0x20c7bb,
    _0x132df7 = {
      coQeu: function (_0x447123, _0x98d5a8) {
        return _0x447123 === _0x98d5a8;
      },
      Zckrd: function (_0x23f935, _0x116ec2) {
        return _0x23f935(_0x116ec2);
      }
    };
  if (_0x132df7[_0x4cb425(1357)](typeof _0x23e062, _0x4cb425(406))) return _0x23e062;
  if (!_0x23e062?.[_0x4cb425(819)] || !Array.isArray(_0x23e062[_0x4cb425(819)])) return _0x132df7[_0x4cb425(358)](String, _0x23e062 ?? "");
  return _0x23e062.rawtext[_0x4cb425(1312)](_0x280b6e => _0x280b6e?.["text"] ?? _0x280b6e?.[_0x4cb425(440)] ?? "")[_0x4cb425(707)]("")[_0x4cb425(605)]();
}
function selectItemUi(_0x446b13, _0x429825, _0x4204c7) {
  const _0x5b2e1f = _0x20c7bb,
    _0x3a0445 = {
      qBCVE: function (_0x1847d2, _0x1e6e6a, _0x91356, _0x1c4540, _0x4792a8) {
        return _0x1847d2(_0x1e6e6a, _0x91356, _0x1c4540, _0x4792a8);
      },
      mgrmi: function (_0x5d7688, _0x1ab6a9) {
        return _0x5d7688 === _0x1ab6a9;
      },
      NdKTB: function (_0x12f7eb, _0x3247f5) {
        return _0x12f7eb(_0x3247f5);
      },
      wUDeP: function (_0x5b2c3e, _0x41b69f, _0x476abc, _0x392f9c, _0x5b1cb6) {
        return _0x5b2c3e(_0x41b69f, _0x476abc, _0x392f9c, _0x5b1cb6);
      },
      iCGIb: _0x5b2e1f(592),
      nphON: _0x5b2e1f(700),
      rtrKS: function (_0x481d0f, _0xf677b2, _0x48361f, _0x33d53b) {
        return _0x481d0f(_0xf677b2, _0x48361f, _0x33d53b);
      }
    };
  log[_0x5b2e1f(653)](_0x3a0445.nphON, {
    player: _0x446b13.name,
    shopId: _0x429825,
    link: _0x4204c7
  }), _0x3a0445[_0x5b2e1f(1013)](selectItemFromInventory, _0x446b13, null, _0x42c997 => {
    const _0x2c8737 = _0x5b2e1f;
    if (_0x3a0445.mgrmi(_0x42c997, null)) {
      const _0x33fdfe = loadTradeRoot(_0x429825),
        _0x2b09eb = _0x3a0445[_0x2c8737(1075)](isItemShopRoot, _0x33fdfe),
        _0x522fc6 = !!(_0x33fdfe && _0x33fdfe.shop_type === _0x2c8737(1373));
      if (_0x2b09eb && _0x33fdfe[_0x2c8737(641)] && _0x33fdfe[_0x2c8737(641)].length > 0) {
        const _0x4966ac = _0x33fdfe[_0x2c8737(641)][0];
        _0x3a0445[_0x2c8737(1252)](enhancedTradeUi, _0x446b13, _0x429825, _0x4966ac, "");
      } else {
        if (_0x522fc6) folderSetUi(_0x446b13, _0x429825, "", 0);else !_0x2b09eb && folderUi(_0x446b13, _0x429825, "");
      }
      return;
    }
    const _0x1fc8c1 = _0x446b13[_0x2c8737(1098)](_0x2c8737(1044))[_0x2c8737(1344)],
      _0x22c66a = _0x1fc8c1[_0x2c8737(940)](_0x42c997);
    if (!_0x22c66a) {
      sendTitle(_0x446b13, _0x3a0445[_0x2c8737(637)]);
      return;
    }
    const _0x864939 = _0x2c8737(893) + _0x429825,
      _0x2fb3c6 = loadTradeRoot(_0x429825);
    if (!_0x2fb3c6) return;
    let _0x545d0f;
    if (_0x2fb3c6[_0x2c8737(1322)] === _0x2c8737(370) && _0x2fb3c6[_0x2c8737(641)] && _0x2fb3c6.children[_0x2c8737(459)] > 0) {
      const _0x3c71c2 = _0x2c8737(1047)[_0x2c8737(397)]("|");
      let _0x44c9a0 = 0;
      while (!![]) {
        switch (_0x3c71c2[_0x44c9a0++]) {
          case "0":
            _0x545d0f[_0x2c8737(654)] = _0x429825;
            continue;
          case "1":
            _0x545d0f = _0x2fb3c6[_0x2c8737(641)][0];
            continue;
          case "2":
            _0x545d0f[_0x2c8737(451)] = _0x429825;
            continue;
          case "3":
            if (_0x545d0f[_0x2c8737(491)] === void 0) _0x545d0f[_0x2c8737(491)] = 0;
            continue;
          case "4":
            _0x545d0f[_0x2c8737(562)] = getItemDisplayName2(_0x22c66a);
            continue;
          case "5":
            _0x545d0f.type = _0x2c8737(370);
            continue;
        }
        break;
      }
    } else {
      _0x545d0f = {
        type: _0x2c8737(370),
        namespace: _0x429825,
        display_name: getItemDisplayName2(_0x22c66a),
        storage: _0x429825,
        storageOffset: 0
      };
      if (!_0x2fb3c6[_0x2c8737(641)]) _0x2fb3c6[_0x2c8737(641)] = [];
      _0x2fb3c6.children.push(_0x545d0f);
    }
    if (_0x545d0f[_0x2c8737(491)] === void 0) _0x545d0f[_0x2c8737(491)] = 0;
    if (!_0x545d0f[_0x2c8737(474)]) _0x545d0f.tradeId = newTradeId();
    if (!_0x545d0f[_0x2c8737(1304)]) _0x545d0f[_0x2c8737(1304)] = _0x2c8737(1319);
    saveTradeRoot(_0x429825, _0x2fb3c6), storage_default.set(_0x446b13, _0x429825, _0x545d0f[_0x2c8737(491)] + 0, _0x22c66a[_0x2c8737(1251)]()), sendTitle(_0x446b13, _0x2c8737(1145)), _0x144cf1.system[_0x2c8737(986)](() => {
      const _0x351745 = _0x2c8737;
      _0x3a0445[_0x351745(588)](enhancedTradeUi, _0x446b13, _0x429825, _0x545d0f, "");
    });
  });
}
var toolEntityUseTick = new WeakMap(),
  toolBlockUseTick = new WeakMap(),
  pendingTradeImports = new WeakMap();
function isContainerBlock(_0x2cd7d0) {
  const _0x529b9c = _0x20c7bb,
    _0x4e3c63 = {
      yBHgs: function (_0x516951, _0x59046a) {
        return _0x516951 === _0x59046a;
      },
      GiVUX: _0x529b9c(569),
      aSgEl: _0x529b9c(442)
    },
    _0xc54723 = _0x2cd7d0?.[_0x529b9c(764)] || "";
  return _0x4e3c63.yBHgs(_0xc54723, _0x4e3c63.GiVUX) || _0xc54723 === _0x529b9c(1057) || _0xc54723 === "minecraft:barrel" || _0xc54723[_0x529b9c(1261)](_0x4e3c63[_0x529b9c(1212)]);
}
_0x144cf1.world.beforeEvents.playerInteractWithBlock.subscribe(_0x1977c1 => {
  const _0x55429c = _0x20c7bb,
    _0x3a1dd1 = {
      bpbek: "admin",
      MzRWt: "shopkeeper:tool",
      UoLqF: function (_0xb54fe7, _0x3b28dc) {
        return _0xb54fe7(_0x3b28dc);
      }
    },
    {
      player: _0x3fd54a,
      block: _0x1eef60,
      itemStack: _0xc782e0
    } = _0x1977c1;
  if (!_0x3fd54a?.[_0x55429c(518)](_0x3a1dd1[_0x55429c(984)]) || _0xc782e0?.["typeId"] !== _0x3a1dd1.MzRWt) return;
  toolBlockUseTick[_0x55429c(963)](_0x3fd54a, _0x144cf1[_0x55429c(1348)][_0x55429c(532)]);
  const _0x32c968 = pendingTradeImports[_0x55429c(667)](_0x3fd54a);
  if (!_0x3a1dd1[_0x55429c(1196)](isContainerBlock, _0x1eef60) || !_0x32c968) return;
  _0x1977c1[_0x55429c(975)] = !![];
  if (_0x32c968[_0x55429c(584)] !== _0x55429c(431)) return sendTitle(_0x3fd54a, _0x55429c(578));
  _0x144cf1[_0x55429c(1348)][_0x55429c(568)](() => {
    const _0x18f2ba = _0x55429c;
    try {
      if (pendingTradeImports.get(_0x3fd54a)?.[_0x18f2ba(584)] !== _0x18f2ba(431)) return;
      const _0x178bcb = _0x1eef60[_0x18f2ba(1098)](_0x18f2ba(1230))?.[_0x18f2ba(1344)],
        _0x35bf79 = Array[_0x18f2ba(1092)]({
          length: 10
        }, (_0xba6bb7, _0x3c0a7f) => _0x178bcb?.[_0x18f2ba(940)](_0x3c0a7f)?.[_0x18f2ba(1251)]() ?? null);
      if (!_0x35bf79[0]) return sendTitle(_0x3fd54a, _0x18f2ba(1090));
      pendingTradeImports[_0x18f2ba(963)](_0x3fd54a, {
        phase: "awaitingShop",
        items: _0x35bf79
      }), sendTitle(_0x3fd54a, _0x18f2ba(578));
    } catch (_0x3c778b) {
      log[_0x18f2ba(618)]("ui", _0x3c778b, {
        action: _0x18f2ba(665),
        player: _0x3fd54a[_0x18f2ba(598)]
      });
    }
  }, 1);
});
function storeImportedTrade(_0x1c6288, _0x2544d3, _0x47e6d7, _0x437b95, _0x105584) {
  const _0x5ac330 = _0x20c7bb,
    _0x1ebb2e = {
      qpddN: function (_0x23cdd2, _0x885c8b) {
        return _0x23cdd2(_0x885c8b);
      },
      IURSy: _0x5ac330(1103),
      XCCDJ: _0x5ac330(1319),
      uIodB: function (_0x266d3a, _0x2c1a07, _0xdd591e) {
        return _0x266d3a(_0x2c1a07, _0xdd591e);
      }
    };
  if (!_0x1c6288.hasTag(_0x5ac330(860)) || !_0x437b95?.[0]) return;
  const _0x543fbd = _0x1ebb2e.qpddN(loadTradeRoot, _0x2544d3),
    _0x56c4f6 = _0x543fbd && getNode(_0x543fbd, _0x47e6d7);
  if (!_0x56c4f6) return;
  const _0x11df13 = getFreeOffset(_0x543fbd);
  if (_0x11df13 + 9 > STORAGE_MAX_SLOT) return sendTitle(_0x1c6288, _0x5ac330(907));
  let _0x270312;
  if (_0x105584 !== void 0) {
    if (!_0x56c4f6[_0x5ac330(641)]) _0x56c4f6[_0x5ac330(641)] = [];
    if (_0x56c4f6[_0x5ac330(641)].some(_0x1af94d => _0x1af94d[_0x5ac330(735)] === _0x105584)) return;
    _0x270312 = {
      type: _0x5ac330(370),
      slot: _0x105584,
      namespace: nextChildNamespace(_0x56c4f6.children, _0x1ebb2e[_0x5ac330(1019)]),
      tradeId: newTradeId(),
      offerPolicyId: _0x1ebb2e.XCCDJ,
      display_name: getItemDisplayName2(_0x437b95[0]),
      storage: _0x2544d3,
      storageOffset: _0x11df13
    }, _0x56c4f6[_0x5ac330(641)].push(_0x270312);
  } else _0x270312 = {
    type: "item",
    namespace: _0x1ebb2e.uIodB(nextChildNamespace, _0x56c4f6.children, _0x1ebb2e[_0x5ac330(1019)]),
    tradeId: newTradeId(),
    offerPolicyId: _0x5ac330(1319),
    display_name: getItemDisplayName2(_0x437b95[0]),
    storage: _0x2544d3,
    storageOffset: _0x11df13
  }, _0x56c4f6[_0x5ac330(641)] = _0x56c4f6[_0x5ac330(641)] || [], _0x56c4f6[_0x5ac330(641)].push(_0x270312);
  if (!saveTradeRoot(_0x2544d3, _0x543fbd)) return;
  const _0x1e4d25 = _0x270312[_0x5ac330(654)] ?? _0x2544d3;
  for (let _0x45a9f9 = 0; _0x45a9f9 < 10; _0x45a9f9++) storage_default[_0x5ac330(963)](_0x1c6288, _0x1e4d25, _0x11df13 + _0x45a9f9, _0x437b95[_0x45a9f9]?.["clone"]());
  sendTitle(_0x1c6288, "shopkeeper.trade.item.created");
}
function importFolderUi(_0x410f57, _0x2b3ba1, _0x391aec, _0x1ed97c, _0x92d38d = 0, _0x5b457d = null) {
  const _0x36e291 = _0x20c7bb,
    _0x1d9f5a = {
      bYipn: _0x36e291(447),
      OyKMA: _0x36e291(1291),
      UceXI: _0x36e291(348),
      qAWbE: _0x36e291(457),
      ODpWF: _0x36e291(1168),
      oiyfi: _0x36e291(742),
      SvNSF: function (_0x43d96e, _0xde4246) {
        return _0x43d96e + _0xde4246;
      },
      YjCNc: _0x36e291(893),
      ogAAZ: "Fnvnz",
      MzmhF: function (_0x3a4911, _0x4f6b4f) {
        return _0x3a4911 === _0x4f6b4f;
      },
      eQipT: function (_0x466151, _0x1d5552, _0x39f8e2, _0x2e35a4, _0x118e9e, _0x150efb, _0x306f70) {
        return _0x466151(_0x1d5552, _0x39f8e2, _0x2e35a4, _0x118e9e, _0x150efb, _0x306f70);
      },
      xCUPm: function (_0x5c7287, _0x2a4a8b) {
        return _0x5c7287 > _0x2a4a8b;
      },
      UZNHh: function (_0x3f855e, _0x240d3c) {
        return _0x3f855e < _0x240d3c;
      },
      Xocfs: function (_0x45ce56, _0x141e92) {
        return _0x45ce56 / _0x141e92;
      },
      pGETO: function (_0x2c8a53, _0x470f2d) {
        return _0x2c8a53 + _0x470f2d;
      },
      KlFEf: _0x36e291(1373),
      agvfw: function (_0x2a6d86, _0x8eba6e, _0x597c19, _0x136654, _0x3cb5d4, _0x5b316a) {
        return _0x2a6d86(_0x8eba6e, _0x597c19, _0x136654, _0x3cb5d4, _0x5b316a);
      },
      PvLwS: function (_0x1ce875, _0x39851a) {
        return _0x1ce875(_0x39851a);
      },
      zDLDC: function (_0x174c6d, _0x2e2f2e) {
        return _0x174c6d % _0x2e2f2e;
      },
      LSvgm: function (_0x4b0d68, _0x4f0f8f) {
        return _0x4b0d68 - _0x4f0f8f;
      },
      kDKPu: function (_0xc090c1, _0x5173c5) {
        return _0xc090c1 * _0x5173c5;
      },
      caeEE: function (_0x56fcfc, _0x301a10) {
        return _0x56fcfc + _0x301a10;
      },
      oxLEN: "category",
      NOYZD: function (_0x448952, _0x49ec9a, _0x4f4b26) {
        return _0x448952(_0x49ec9a, _0x4f4b26);
      },
      Cmijm: function (_0x1785aa, _0xf14e7, _0x526910, _0x4f3d0b, _0x8ec316, _0xc75da2, _0x2675a5) {
        return _0x1785aa(_0xf14e7, _0x526910, _0x4f3d0b, _0x8ec316, _0xc75da2, _0x2675a5);
      },
      pYala: function (_0x2047cd, _0x14aba7) {
        return _0x2047cd - _0x14aba7;
      },
      ZoAxz: _0x36e291(380),
      kcwJU: _0x36e291(487),
      NnZSo: _0x36e291(368)
    },
    _0x4e560a = loadTradeRoot(_0x2b3ba1),
    _0x4274af = _0x4e560a && getNode(_0x4e560a, _0x391aec);
  if (!_0x4274af) return;
  const _0x2ff316 = _0x4274af[_0x36e291(641)] || [],
    _0x3a6e84 = Math.max(0, Math.ceil(_0x2ff316[_0x36e291(459)] / 28) - 1);
  _0x92d38d = Math[_0x36e291(955)](0, Math.min(_0x92d38d, _0x3a6e84));
  const _0x4dfbfc = new ChestFormData("54")[_0x36e291(1352)](_0x3a6e84 ? (_0x4274af[_0x36e291(562)] ?? _0x2b3ba1) + _0x36e291(445) + (_0x92d38d + 1) + "/" + (_0x3a6e84 + 1) + ")" : _0x4274af.display_name ?? _0x2b3ba1);
  _0x1d9f5a.PvLwS(applyFolderPattern, _0x4dfbfc);
  const _0x5db279 = _0x410f57.getComponent(_0x36e291(1044))?.[_0x36e291(1344)],
    _0x29f3ca = new Map();
  if (_0x5db279) for (let _0x117e94 = 0; _0x117e94 < _0x5db279[_0x36e291(664)]; _0x117e94++) {
    const _0x9a92ef = _0x5db279[_0x36e291(940)](_0x117e94);
    if (_0x9a92ef) {
      if (_0x36e291(1270) !== _0x36e291(1270)) _0x519a30(_0x4863f8, _0x161a5e);else {
        const _0x2d2651 = JSON[_0x36e291(1324)](normalizeItem(_0x9a92ef));
        _0x29f3ca[_0x36e291(963)](_0x2d2651, (_0x29f3ca.get(_0x2d2651) || 0) + _0x9a92ef[_0x36e291(989)]);
      }
    }
  }
  for (let _0x4cea14 = _0x92d38d * 28; _0x4cea14 < Math[_0x36e291(1208)](_0x2ff316[_0x36e291(459)], (_0x92d38d + 1) * 28); _0x4cea14++) {
    const _0x3e90ce = _0x2ff316[_0x4cea14],
      _0x21d13d = Math[_0x36e291(536)]((_0x4cea14 - _0x92d38d * 28) / 7) + 1,
      _0xd93028 = _0x1d9f5a[_0x36e291(685)](_0x1d9f5a.LSvgm(_0x4cea14, _0x1d9f5a[_0x36e291(772)](_0x92d38d, 28)), 7) + 1,
      _0x4bea72 = _0x1d9f5a.caeEE(_0x21d13d * 9, _0xd93028);
    if (_0x3e90ce[_0x36e291(1116)] === _0x1d9f5a.oxLEN || _0x3e90ce[_0x36e291(1116)] === _0x1d9f5a[_0x36e291(1048)]) _0x4dfbfc[_0x36e291(730)](_0x4bea72, _0x3e90ce.display_name ?? _0x3e90ce[_0x36e291(451)], _0x3e90ce.sub_name || "", _0x3e90ce.texture || (_0x1d9f5a[_0x36e291(1021)](_0x3e90ce.type, _0x36e291(1373)) ? _0x36e291(577) : "minecraft:chest"), 1, 0, _0x3e90ce[_0x36e291(1157)] ?? ![]);else {
      if (_0x3e90ce[_0x36e291(1116)] === _0x36e291(370)) {
        const _0x12332d = _0x3e90ce[_0x36e291(654)] ?? _0x2b3ba1,
          _0x41397b = _0x3e90ce[_0x36e291(491)] || 0,
          _0x32f969 = storage_default[_0x36e291(1350)](_0x12332d) || {},
          _0x228ef3 = _wrapDisplay(_0x32f969[String(_0x41397b)]);
        if (_0x228ef3) {
          const _0x107e1d = getDisplayLore(_0x228ef3, _0x12332d, _0x41397b);
          _0x107e1d[_0x36e291(819)][_0x36e291(943)]({
            text: "\n"
          }, ...stockDisplay(_0x2b3ba1, _0x4e560a, _0x3e90ce)[_0x36e291(819)]);
          const _0x40c0e9 = new Map(_0x29f3ca),
            _0x5a6540 = _0x391aec ? _0x391aec + "/" + _0x3e90ce[_0x36e291(451)] : _0x3e90ce.namespace,
            _0x59739c = _0x1d9f5a[_0x36e291(564)](getDailySpecialNamespace, _0x2b3ba1, _0x4e560a),
            _0x3efc1a = _0x1d9f5a[_0x36e291(422)](effectiveReduction, _0x410f57, _0x2b3ba1, _0x4e560a, _0x3e90ce, _0x5a6540, _0x59739c);
          for (let _0x41974a = 1; _0x41974a <= 9; _0x41974a++) {
            const _0x1c7e67 = _wrapDisplay(_0x32f969[String(_0x41397b + _0x41974a)]);
            if (!_0x1c7e67) continue;
            const _0x1c1894 = JSON[_0x36e291(1324)](normalizeItem(_0x1c7e67)),
              _0x299e19 = _0x1d9f5a[_0x36e291(564)](discountedAmount, _0x1c7e67[_0x36e291(989)] ?? 1, _0x3efc1a),
              _0x31cf7d = _0x40c0e9[_0x36e291(667)](_0x1c1894) || 0,
              _0x48b3c6 = Math[_0x36e291(955)](0, _0x1d9f5a[_0x36e291(1310)](_0x299e19, _0x31cf7d));
            _0x40c0e9[_0x36e291(963)](_0x1c1894, Math.max(0, _0x1d9f5a.pYala(_0x31cf7d, _0x299e19))), _0x107e1d.rawtext[_0x36e291(943)](...getStatusRaw({
              ..._0x1c7e67,
              amount: _0x299e19
            }, _0x48b3c6)[_0x36e291(819)]);
          }
          _0x4dfbfc.button(_0x4bea72, _0x1d9f5a[_0x36e291(832)](getItemDisplayName2, _0x228ef3), _0x107e1d, _0x228ef3[_0x36e291(764)], _0x228ef3.amount ?? 1, _0x1d9f5a[_0x36e291(832)](getDisplayDurability, _0x228ef3), hasGlint(_0x228ef3));
        }
      }
    }
  }
  if (_0x5b457d) _0x4dfbfc[_0x36e291(730)](47, {
    translate: _0x36e291(1269)
  }, {
    rawtext: [{
      translate: _0x36e291(742)
    }]
  }, _0x1d9f5a.ODpWF, 1);
  _0x4dfbfc[_0x36e291(730)](49, "\u2713", {
    translate: _0x36e291(962)
  }, _0x1d9f5a[_0x36e291(782)], 1), _0x4dfbfc[_0x36e291(730)](51, {
    translate: _0x36e291(1380)
  }, {
    translate: _0x36e291(1380)
  }, _0x36e291(457), 1);
  if (_0x92d38d > 0) _0x4dfbfc[_0x36e291(730)](45, {
    translate: _0x36e291(1227)
  }, {
    rawtext: [{
      translate: _0x1d9f5a.kcwJU
    }]
  }, _0x36e291(1168), 1);
  if (_0x92d38d < _0x3a6e84) _0x4dfbfc[_0x36e291(730)](53, {
    translate: _0x36e291(741)
  }, {
    rawtext: [{
      translate: _0x1d9f5a[_0x36e291(558)]
    }]
  }, _0x36e291(786), 1);
  _0x1d9f5a[_0x36e291(564)](_guardForm, _0x4dfbfc[_0x36e291(402)](_0x410f57).then(_0x3b0afe => {
    const _0x28d360 = _0x36e291;
    if (_0x1d9f5a[_0x28d360(486)] === _0x28d360(528)) {
      if (_0x3b0afe.canceled) return;
      if (_0x1d9f5a.MzmhF(_0x3b0afe[_0x28d360(526)], 51)) return;
      if (_0x3b0afe[_0x28d360(526)] === 49) {
        if (_0x1d9f5a[_0x28d360(1021)]("bmbGL", _0x28d360(690))) return storeImportedTrade(_0x410f57, _0x2b3ba1, _0x391aec, _0x1ed97c), _0x1d9f5a[_0x28d360(1194)](importFolderUi, _0x410f57, _0x2b3ba1, _0x391aec, _0x1ed97c, _0x92d38d, _0x5b457d);else _0x3db123.p = {
          texture: _0x1d9f5a[_0x28d360(498)],
          itemName: {
            translate: _0x1d9f5a.OyKMA
          },
          itemDesc: {
            rawtext: [{
              translate: _0x28d360(945)
            }]
          },
          stackAmount: 1
        }, _0x516d29.e = {
          texture: _0x28d360(1364),
          itemName: {
            translate: _0x1d9f5a[_0x28d360(775)]
          },
          itemDesc: {
            rawtext: [{
              translate: _0x28d360(458)
            }]
          },
          stackAmount: 1
        }, _0x1ff731.m = {
          texture: _0x1d9f5a[_0x28d360(382)],
          itemName: {
            translate: _0x28d360(1298)
          },
          itemDesc: {
            rawtext: [{
              translate: _0x28d360(545)
            }]
          },
          stackAmount: 1
        }, _0x556c17["."] = {
          texture: _0x1d9f5a[_0x28d360(351)],
          itemName: {
            translate: _0x28d360(1269)
          },
          itemDesc: {
            rawtext: [{
              translate: _0x1d9f5a.oiyfi
            }]
          },
          stackAmount: 1
        };
      }
      if (_0x3b0afe.selection === 47 && _0x5b457d) return _0x5b457d();
      if (_0x3b0afe[_0x28d360(526)] === 45 && _0x1d9f5a[_0x28d360(993)](_0x92d38d, 0)) return importFolderUi(_0x410f57, _0x2b3ba1, _0x391aec, _0x1ed97c, _0x92d38d - 1, _0x5b457d);
      if (_0x1d9f5a[_0x28d360(1021)](_0x3b0afe[_0x28d360(526)], 53) && _0x1d9f5a[_0x28d360(1339)](_0x92d38d, _0x3a6e84)) return importFolderUi(_0x410f57, _0x2b3ba1, _0x391aec, _0x1ed97c, _0x92d38d + 1, _0x5b457d);
      const _0x438107 = Math.floor(_0x1d9f5a.Xocfs(_0x3b0afe[_0x28d360(526)], 9)),
        _0x374f21 = _0x3b0afe[_0x28d360(526)] % 9;
      if (_0x438107 < 1 || _0x1d9f5a[_0x28d360(993)](_0x438107, 4) || _0x374f21 < 1 || _0x374f21 > 7) return;
      const _0x4a42a8 = _0x2ff316[_0x1d9f5a[_0x28d360(745)](_0x92d38d * 28, (_0x438107 - 1) * 7) + _0x374f21 - 1];
      if (!_0x4a42a8 || _0x4a42a8[_0x28d360(1116)] !== _0x28d360(1151) && _0x4a42a8[_0x28d360(1116)] !== _0x1d9f5a.KlFEf) return;
      const _0x4f6f14 = _0x391aec ? _0x391aec + "/" + _0x4a42a8[_0x28d360(451)] : _0x4a42a8[_0x28d360(451)],
        _0x568c13 = () => importFolderUi(_0x410f57, _0x2b3ba1, _0x391aec, _0x1ed97c, _0x92d38d, _0x5b457d);
      if (_0x4a42a8.type === _0x1d9f5a[_0x28d360(1048)]) return folderSetUi(_0x410f57, _0x2b3ba1, _0x4f6f14, 0, _0x1d9f5a[_0x28d360(861)](makeImportContext, _0x410f57, _0x2b3ba1, _0x4f6f14, _0x1ed97c, _0x568c13));
      importFolderUi(_0x410f57, _0x2b3ba1, _0x4f6f14, _0x1ed97c, 0, _0x568c13);
    } else try {
      const _0x5adf3e = CvMRss[_0x28d360(929)](CvMRss.YjCNc, _0x316bf2),
        _0x4521be = _0x3f0a2c.stringify(_0x51dd6e);
      return _0x27f5d9[_0x28d360(1104)][_0x28d360(378)](_0x5adf3e, _0x4521be), _0x18bbc7.set(_0x157bf3, _0x2090a8), _0x55eb6e[_0x28d360(751)](_0x28d360(792), {
        name: _0xb274,
        bytes: _0x4521be[_0x28d360(459)],
        children: _0x1e4f96 && _0xbb3228[_0x28d360(1080)](_0x4d0baa.children) ? _0x57c04d.children[_0x28d360(459)] : 0
      }), _0xa6cb97(), !![];
    } catch (_0x17126c) {
      return _0x287a1d.err(_0x28d360(1103), _0x17126c, {
        action: _0x28d360(1179),
        name: _0x1f5acd
      }), ![];
    }
  }), _0x36e291(524));
}
function makeImportContext(_0x182ea, _0x37e965, _0xdc2014, _0x2474eb, _0x2a64ba) {
  const _0x5dfc65 = {
    RcWgJ: function (_0x2189c9, _0x46a54e, _0x3420e6, _0xf7d833, _0x4435d5, _0x1e1466) {
      return _0x2189c9(_0x46a54e, _0x3420e6, _0xf7d833, _0x4435d5, _0x1e1466);
    },
    uwqtZ: function (_0x1a81d3, _0x657b25, _0x58ccaa, _0x4e81c9, _0x3659cd, _0x5a0359) {
      return _0x1a81d3(_0x657b25, _0x58ccaa, _0x4e81c9, _0x3659cd, _0x5a0359);
    },
    cGYMq: function (_0x324968, _0x5a5436) {
      return _0x324968 / _0x5a5436;
    }
  };
  return {
    back: _0x2a64ba,
    "openFolder"(_0x331043) {
      const _0x43b430 = () => folderSetUi(_0x182ea, _0x37e965, _0xdc2014, 0, makeImportContext(_0x182ea, _0x37e965, _0xdc2014, _0x2474eb, _0x2a64ba));
      importFolderUi(_0x182ea, _0x37e965, _0x331043, _0x2474eb, 0, _0x43b430);
    },
    "openSet"(_0x44514c, _0x37c946) {
      const _0x2be481 = _0x12bf;
      if (_0x2be481(767) !== "YpikH") return _0xe84399 && _0x5c7bb3[_0x2be481(764)];else {
        const _0x586b69 = () => folderSetUi(_0x182ea, _0x37e965, _0xdc2014, _0x37c946, makeImportContext(_0x182ea, _0x37e965, _0xdc2014, _0x2474eb, _0x2a64ba));
        _0x5dfc65[_0x2be481(889)](folderSetUi, _0x182ea, _0x37e965, _0x44514c, 0, makeImportContext(_0x182ea, _0x37e965, _0x44514c, _0x2474eb, _0x586b69));
      }
    },
    "addSet"(_0x117805, _0x3f857a) {
      const _0x26ddf5 = _0x12bf;
      _0x5dfc65[_0x26ddf5(889)](storeImportedTrade, _0x182ea, _0x37e965, _0x117805, _0x2474eb, _0x3f857a), _0x5dfc65[_0x26ddf5(729)](folderSetUi, _0x182ea, _0x37e965, _0x117805, Math[_0x26ddf5(536)](_0x5dfc65[_0x26ddf5(1191)](_0x3f857a, 45)), makeImportContext(_0x182ea, _0x37e965, _0x117805, _0x2474eb, _0x2a64ba));
    }
  };
}
function beginTradeImport(_0x4e952c, _0x377062) {
  const _0xd74f2 = _0x20c7bb,
    _0x3e4ebc = {
      cqRuq: function (_0x3bd94e, _0x4f3c5c) {
        return _0x3bd94e(_0x4f3c5c);
      },
      pBnsv: function (_0x9c1005, _0x4e46ab, _0x21e05c, _0x177bea, _0x7ad5bb) {
        return _0x9c1005(_0x4e46ab, _0x21e05c, _0x177bea, _0x7ad5bb);
      },
      loOGE: function (_0x19e3a5, _0x1c5361) {
        return _0x19e3a5 !== _0x1c5361;
      },
      yKxOP: _0xd74f2(420),
      jyVjF: function (_0x5ee104, _0x278273) {
        return _0x5ee104(_0x278273);
      }
    },
    _0x1aedb3 = pendingTradeImports[_0xd74f2(667)](_0x4e952c);
  if (_0x3e4ebc[_0xd74f2(587)](_0x1aedb3?.[_0xd74f2(584)], _0x3e4ebc.yKxOP)) return ![];
  pendingTradeImports.delete(_0x4e952c);
  const {
      items: _0x8c60cc
    } = _0x1aedb3,
    _0x21fd43 = _0x3e4ebc[_0xd74f2(1356)](loadTradeRoot, _0x377062);
  if (!_0x21fd43) return !![];
  if (isItemShopRoot(_0x21fd43)) {
    const _0xe1a49e = new ActionFormData4()[_0xd74f2(1352)]({
      translate: "shopkeeper.create.item"
    })[_0xd74f2(463)]({
      rawtext: getItemNameRawtext(_0x8c60cc[0])
    })[_0xd74f2(730)]({
      translate: "shopkeeper.tool.import.apply"
    }).button({
      translate: _0xd74f2(1380)
    });
    _guardForm(_0xe1a49e.show(_0x4e952c)[_0xd74f2(479)](_0x402bac => {
      const _0xeb7ce6 = _0xd74f2;
      if (_0x402bac[_0xeb7ce6(526)] !== 0) return;
      const _0x4cda2b = getNode(_0x21fd43, ""),
        _0x165de6 = (_0x4cda2b.children || [])[_0xeb7ce6(1071)](_0x3d2a51 => _0x3d2a51[_0xeb7ce6(1116)] === _0xeb7ce6(370));
      if (_0x165de6) {
        const _0x9fb409 = _0x165de6[_0xeb7ce6(491)] || 0;
        for (let _0x196030 = 0; _0x196030 < 10; _0x196030++) storage_default.set(_0x4e952c, _0x165de6.storage ?? _0x377062, _0x9fb409 + _0x196030, _0x8c60cc[_0x196030]?.[_0xeb7ce6(1251)]());
        _0x165de6.display_name = _0x3e4ebc[_0xeb7ce6(1127)](getItemDisplayName2, _0x8c60cc[0]);
        if (saveTradeRoot(_0x377062, _0x21fd43)) sendTitle(_0x4e952c, _0xeb7ce6(1335));
      } else _0x3e4ebc[_0xeb7ce6(1361)](storeImportedTrade, _0x4e952c, _0x377062, "", _0x8c60cc);
    }), _0xd74f2(465));
  } else {
    if (_0x21fd43[_0xd74f2(1322)] === "folderSet") folderSetUi(_0x4e952c, _0x377062, "", 0, makeImportContext(_0x4e952c, _0x377062, "", _0x8c60cc, null));else _0x3e4ebc.pBnsv(importFolderUi, _0x4e952c, _0x377062, "", _0x8c60cc);
  }
  return !![];
}
function toolMenuUi(_0x401c38) {
  const _0xc525c4 = _0x20c7bb,
    _0x7241c3 = {
      OqYQV: "minecraft:inventory",
      XGpAg: function (_0x75e09, _0x58917e) {
        return _0x75e09 === _0x58917e;
      },
      xHoSr: function (_0x5bda0f, _0x244a46) {
        return _0x5bda0f !== _0x244a46;
      },
      forAf: "nsjsp",
      BOEne: "shopkeeper.tool.menu.add_chest"
    };
  if (!isPlayerValid(_0x401c38) || !_0x401c38[_0xc525c4(518)]("admin")) return;
  const _0x10389a = pendingTradeImports[_0xc525c4(667)](_0x401c38),
    _0x2b167f = new ActionFormData4()[_0xc525c4(1352)]({
      translate: _0xc525c4(392)
    })[_0xc525c4(730)]({
      translate: _0xc525c4(542)
    })[_0xc525c4(730)]({
      translate: _0xc525c4(1072)
    })[_0xc525c4(730)](_0x10389a ? {
      rawtext: [{
        translate: _0xc525c4(868)
      }, {
        text: "\n"
      }, {
        translate: _0xc525c4(1064)
      }]
    } : {
      translate: _0x7241c3[_0xc525c4(834)]
    });
  _guardForm(_0x2b167f[_0xc525c4(402)](_0x401c38)[_0xc525c4(479)](_0x2ada19 => {
    const _0xec86e = _0xc525c4,
      _0x1c7888 = {
        vxQUE: function (_0x1dd27e, _0x8ca169) {
          return _0x1dd27e + _0x8ca169;
        }
      };
    if (_0x2ada19.canceled) return;
    if (_0x2ada19[_0xec86e(526)] === 0) {
      try {
        const _0x13ac35 = _0x401c38[_0xec86e(1098)](_0x7241c3[_0xec86e(873)])?.["container"];
        if (!_0x13ac35) return;
        const {
          leftovers: _0x5d3a42
        } = addItemCountSafe(_0x13ac35, new _0x144cf1.ItemStack(_0xec86e(1003), 1), 1);
        spawnLeftovers(_0x401c38, _0x5d3a42);
      } catch (_0x5d5c4c) {
        log.err("ui", _0x5d5c4c, {
          action: _0xec86e(806),
          player: _0x401c38[_0xec86e(598)]
        });
      }
      return;
    }
    if (_0x2ada19[_0xec86e(526)] === 1) return shopManagerUi(_0x401c38, 0, "", () => toolMenuUi(_0x401c38));
    _0x7241c3[_0xec86e(1139)](_0x2ada19[_0xec86e(526)], 2) && (pendingTradeImports.has(_0x401c38) ? _0x7241c3[_0xec86e(1026)](_0x7241c3[_0xec86e(1009)], _0xec86e(823)) ? _0x2d92a1 = _0x292d90[_0xec86e(359)](_0x177b9f, _0x58347d, _0x1c7888[_0xec86e(992)](_0x376e71, _0x35082f)) : (pendingTradeImports[_0xec86e(981)](_0x401c38), sendTitle(_0x401c38, "shopkeeper.tool.import.cancelled")) : (pendingTradeImports[_0xec86e(963)](_0x401c38, {
      phase: _0xec86e(431)
    }), sendTitle(_0x401c38, _0xec86e(511))));
  }), "toolMenu");
}
_0x144cf1.world.beforeEvents.itemUse.subscribe(_0x3ac4dc => {
  const _0x43b32e = _0x20c7bb,
    _0x2d9d4b = {
      bcdNI: function (_0x4f0ac3, _0x1509b8) {
        return _0x4f0ac3 !== _0x1509b8;
      },
      fWICY: _0x43b32e(433)
    },
    _0x5c275a = _0x3ac4dc[_0x43b32e(1177)];
  if (!_0x5c275a?.["hasTag"](_0x43b32e(860)) || _0x2d9d4b[_0x43b32e(1259)](_0x3ac4dc[_0x43b32e(839)]?.[_0x43b32e(764)], _0x2d9d4b[_0x43b32e(1276)])) return;
  const _0x47ac35 = _0x144cf1[_0x43b32e(1348)][_0x43b32e(532)];
  _0x144cf1[_0x43b32e(1348)][_0x43b32e(568)](() => {
    const _0x57ea85 = _0x43b32e;
    if (toolEntityUseTick[_0x57ea85(667)](_0x5c275a) === _0x47ac35 || toolBlockUseTick[_0x57ea85(667)](_0x5c275a) === _0x47ac35) return;
    toolMenuUi(_0x5c275a);
  }, 1);
}), _0x144cf1.world.beforeEvents.playerInteractWithEntity.subscribe(_0x4ebdd0 => {
  const _0x13a2e4 = _0x20c7bb,
    _0x22e710 = {
      vJkqO: function (_0xbf058a, _0xed6077, _0x42c9b5) {
        return _0xbf058a(_0xed6077, _0x42c9b5);
      },
      ZBUej: function (_0x2b444f, _0x5078f9) {
        return _0x2b444f(_0x5078f9);
      },
      uFxOe: _0x13a2e4(860),
      qEiwz: _0x13a2e4(1167),
      rkXCx: function (_0x3684b4, _0x4e489c) {
        return _0x3684b4 === _0x4e489c;
      },
      VKWcr: _0x13a2e4(535),
      knsnS: _0x13a2e4(433),
      URnTj: "shopkeeper:",
      atpdz: function (_0x176f06, _0x27dc04) {
        return _0x176f06(_0x27dc04);
      },
      Reixw: "shopkeeper.shop.invalid.orphan"
    },
    _0x13084c = _0x4ebdd0[_0x13a2e4(580)],
    _0xfeaee0 = _0x4ebdd0[_0x13a2e4(453)],
    _0x2a1ff7 = _0x4ebdd0[_0x13a2e4(839)];
  if (_0xfeaee0.typeId === "minecraft:npc" && _0x2a1ff7?.[_0x13a2e4(764)] === _0x22e710[_0x13a2e4(597)]) toolEntityUseTick[_0x13a2e4(963)](_0x13084c, _0x144cf1.system[_0x13a2e4(532)]);
  if (_0xfeaee0.typeId !== "minecraft:npc") return;
  const _0x4b1bfa = _0xfeaee0[_0x13a2e4(846)]()[_0x13a2e4(1071)](_0x26913f => _0x26913f[_0x13a2e4(1022)]("shopkeeper:"));
  if (_0x4b1bfa) {
    let _0x5453a0 = _0x4b1bfa[_0x13a2e4(586)](_0x22e710.URnTj, "");
    _0x5453a0[_0x13a2e4(1275)](":") && (_0x5453a0 = _0x5453a0[_0x13a2e4(397)](":")[0]);
    if (_0x13084c[_0x13a2e4(518)]("admin") && _0x22e710.rkXCx(pendingTradeImports.get(_0x13084c)?.["phase"], _0x13a2e4(420))) {
      if (false) {
        const _0x52455c = _0xd8d8d3[_0x13a2e4(940)](_0x585833);
        _0x22e710.vJkqO(_0x128b37, _0x52455c, _0x1b090c[_0x13a2e4(370)]) && (_0x1d15f2 += _0x52455c[_0x13a2e4(989)]);
      } else {
        _0x4ebdd0.cancel = !![], _0x144cf1[_0x13a2e4(1348)][_0x13a2e4(986)](() => beginTradeImport(_0x13084c, _0x5453a0));
        return;
      }
    }
    if (_0x13084c[_0x13a2e4(518)](_0x22e710[_0x13a2e4(1238)]) && _0x13084c.isSneaking) return;
    const _0x27b32e = _0x22e710.atpdz(loadTradeRoot, _0x5453a0);
    if (!_0x27b32e) {
      try {
        typeof _0xfeaee0[_0x13a2e4(550)] === _0x13a2e4(712) && _0xfeaee0.removeTag(_0x4b1bfa);
      } catch (_0x686c29) {}
      _0x13084c[_0x13a2e4(710)]({
        rawtext: [{
          translate: _0x22e710[_0x13a2e4(1193)]
        }]
      }), _0x4ebdd0[_0x13a2e4(975)] = !![];
      return;
    }
    _0x4ebdd0[_0x13a2e4(975)] = !![], _0x144cf1.system[_0x13a2e4(986)](() => {
      const _0x1a66dc = _0x13a2e4,
        _0x49e278 = _0x27b32e.children || [],
        _0x3332f2 = _0x22e710.ZBUej(isItemShopRoot, _0x27b32e);
      if (_0x3332f2) {
        if (_0x49e278.length === 1 && _0x49e278[0].type === "item") enhancedTradeUi(_0x13084c, _0x5453a0, _0x49e278[0], "");else _0x13084c[_0x1a66dc(518)](_0x22e710.uFxOe) ? _0x22e710[_0x1a66dc(805)](selectItemUi, _0x13084c, _0x5453a0) : sendTitle(_0x13084c, "shopkeeper.sellitem.missing");
      } else _0x27b32e.shop_type === "folderSet" ? folderSetUi(_0x13084c, _0x5453a0, "", 0) : folderUi(_0x13084c, _0x5453a0, "");
    });
    return;
  }
  if (!_0x13084c[_0x13a2e4(518)](_0x22e710[_0x13a2e4(1238)]) || !_0x2a1ff7 || _0x2a1ff7[_0x13a2e4(764)] !== _0x22e710[_0x13a2e4(597)]) return;
  _0x4ebdd0[_0x13a2e4(975)] = !![], _0x144cf1[_0x13a2e4(1348)][_0x13a2e4(986)](() => {
    const _0x419fc3 = _0x13a2e4,
      _0x545050 = {
        fRQIv: _0x22e710[_0x419fc3(1199)],
        ZzfeV: "folderSet",
        mPelc: function (_0x45a842, _0x352fe7) {
          const _0x4ea53a = _0x419fc3;
          return _0x22e710[_0x4ea53a(661)](_0x45a842, _0x352fe7);
        },
        JlqRX: _0x419fc3(1319),
        fTKrd: _0x419fc3(897),
        sxhiP: function (_0x2c66c8, _0x21d453) {
          return _0x2c66c8 === _0x21d453;
        },
        Nfxol: function (_0x2d47e7, _0x280fa2, _0x446a9f) {
          return _0x2d47e7(_0x280fa2, _0x446a9f);
        }
      };
    _guardForm(new ModalFormData3()[_0x419fc3(1352)]({
      translate: "shopkeeper.setup.title"
    })[_0x419fc3(674)]({
      translate: _0x419fc3(1257)
    }, [{
      translate: _0x419fc3(1176)
    }, {
      translate: _0x22e710[_0x419fc3(398)]
    }, {
      translate: _0x419fc3(1235)
    }])[_0x419fc3(471)]({
      translate: _0x419fc3(636)
    }, "", {
      defaultValue: ""
    })[_0x419fc3(402)](_0x13084c).then(_0x30ed6a => {
      const _0x207723 = _0x419fc3;
      if (_0x30ed6a[_0x207723(505)]) return;
      const _0x31ac4a = _0x30ed6a[_0x207723(362)][0],
        _0x858f1f = _0x30ed6a[_0x207723(362)][1]?.["trim"]();
      if (!_0x858f1f || !/^[a-zA-Z0-9_]+$/[_0x207723(544)](_0x858f1f)) {
        sendTitle(_0x13084c, _0x545050.fRQIv);
        return;
      }
      const _0x2535d9 = loadTradeRoot(_0x858f1f),
        _0x3a6d6c = _0x2535d9 ? _0x2535d9[_0x207723(1322)] === "item" ? _0x207723(370) : _0x2535d9[_0x207723(1322)] === _0x207723(1373) ? _0x545050.ZzfeV : _0x207723(1300) : _0x31ac4a === 0 ? _0x207723(370) : _0x545050[_0x207723(876)](_0x31ac4a, 2) ? _0x207723(1373) : _0x207723(1300),
        _0x53c504 = _0x3a6d6c,
        _0x960095 = _0x207723(489) + _0x858f1f + ":" + _0x53c504;
      _0xfeaee0[_0x207723(1082)](_0x960095);
      if (!_0x2535d9) {
        const _0x49bbc4 = {
          namespace: "root",
          shopId: "s_" + _0x858f1f,
          shopPolicyId: _0x545050.JlqRX,
          display_name: _0x545050.fTKrd,
          children: [],
          shop_type: _0x31ac4a === 0 ? _0x207723(370) : _0x545050[_0x207723(669)](_0x31ac4a, 2) ? "folderSet" : _0x207723(1300)
        };
        saveTradeRoot(_0x858f1f, _0x49bbc4);
      }
      if (!_0x2535d9) {
        if (_0x31ac4a === 0) _0x545050[_0x207723(1001)](selectItemUi, _0x13084c, _0x858f1f);else {
          if (_0x31ac4a === 1) sendTitle(_0x13084c, "shopkeeper.folder.shop.created", [_0x858f1f]);else _0x31ac4a === 2 && (sendTitle(_0x13084c, _0x207723(656), [_0x858f1f]), _0x144cf1[_0x207723(1348)][_0x207723(986)](() => folderSetUi(_0x13084c, _0x858f1f, "", 0)));
        }
      } else _0x13084c[_0x207723(710)]({
        rawtext: [{
          translate: "shopkeeper.npc.assigned",
          with: [_0x858f1f, _0x53c504]
        }]
      });
    }), _0x419fc3(804));
  });
});
function createCategory(_0x3bae23, _0x24b9fc, _0x3ad281, _0x5e90d3 = "category") {
  const _0x46d917 = _0x20c7bb,
    _0x307142 = {
      QAtDQ: function (_0x99bcf5, _0x4f8263, _0x4cdb1a, _0x440baf) {
        return _0x99bcf5(_0x4f8263, _0x4cdb1a, _0x440baf);
      },
      KYkwh: function (_0x1ad63d, _0x5344ac, _0x5eae12) {
        return _0x1ad63d(_0x5344ac, _0x5eae12);
      },
      nnPSU: "cat",
      jUSRi: _0x46d917(1151),
      xUcXU: function (_0x30b71e, _0x1562d1) {
        return _0x30b71e + _0x1562d1;
      },
      LqKkQ: _0x46d917(1214),
      hLbJJ: "Th\u01B0 m\u1EE5c m\u1EDBi",
      COfYj: _0x46d917(569),
      yYKPr: _0x46d917(628)
    },
    _0x51f77f = _0x5e90d3 === _0x46d917(1373),
    _0x59d2dc = _0x51f77f ? "Th\u01B0 m\u1EE5c Set m\u1EDBi" : _0x307142[_0x46d917(1165)],
    _0x20b534 = _0x51f77f ? _0x46d917(577) : _0x307142[_0x46d917(622)];
  _guardForm(new ModalFormData3()[_0x46d917(1352)]({
    translate: _0x307142[_0x46d917(1042)]
  })[_0x46d917(471)]({
    translate: _0x46d917(624)
  }, "", {
    defaultValue: _0x59d2dc
  })[_0x46d917(471)]({
    translate: _0x46d917(495)
  }, "", {
    defaultValue: ""
  })[_0x46d917(471)]({
    translate: _0x46d917(428)
  }, "", {
    defaultValue: _0x20b534
  })[_0x46d917(466)]({
    translate: _0x46d917(838)
  }, {
    defaultValue: ![]
  })[_0x46d917(402)](_0x3bae23)[_0x46d917(479)](_0x32eb1b => {
    const _0x186e0e = _0x46d917;
    if (_0x32eb1b[_0x186e0e(505)]) return _0x307142.QAtDQ(folderUi, _0x3bae23, _0x24b9fc, _0x3ad281);
    const _0x152905 = _0x32eb1b[_0x186e0e(362)][0] || _0x59d2dc,
      _0x2e3cee = _0x32eb1b[_0x186e0e(362)][1] || "",
      _0x53ba3f = _0x32eb1b.formValues[2] || _0x20b534,
      _0x3cd8a5 = !!_0x32eb1b[_0x186e0e(362)][3],
      _0x259c16 = loadTradeRoot(_0x24b9fc);
    if (!_0x259c16) return;
    const _0x120610 = getNode(_0x259c16, _0x3ad281);
    if (!_0x120610) return;
    if (!_0x120610[_0x186e0e(641)]) _0x120610.children = [];
    const _0x1fa792 = _0x307142.KYkwh(nextChildNamespace, _0x120610[_0x186e0e(641)], _0x51f77f ? _0x186e0e(852) : _0x307142[_0x186e0e(717)]);
    _0x120610[_0x186e0e(641)][_0x186e0e(943)]({
      namespace: _0x1fa792,
      type: _0x51f77f ? _0x186e0e(1373) : _0x307142.jUSRi,
      display_name: _0x152905,
      sub_name: _0x2e3cee,
      texture: _0x53ba3f,
      glint: _0x3cd8a5,
      children: []
    });
    const _0x55a634 = _0x3ad281 && _0x3ad281[_0x186e0e(459)] > 0 ? _0x307142[_0x186e0e(912)](_0x3ad281 + "/", _0x1fa792) : _0x1fa792;
    saveTradeRoot(_0x24b9fc, _0x259c16), sendTitle(_0x3bae23, _0x307142.LqKkQ), _0x51f77f ? _0x144cf1.system.run(() => folderSetUi(_0x3bae23, _0x24b9fc, _0x55a634, 0)) : _0x144cf1[_0x186e0e(1348)][_0x186e0e(986)](() => folderUi(_0x3bae23, _0x24b9fc, _0x55a634));
  }), _0x46d917(356));
}
function getFreeOffset(_0x58632c) {
  const _0x2fd2ea = _0x20c7bb;
  if (!_0x58632c || !_0x58632c[_0x2fd2ea(641)]) return 0;
  const _0x4b2380 = new Set();
  function _0x4ab80b(_0x33592b) {
    const _0x2e4fee = _0x2fd2ea;
    if (_0x33592b[_0x2e4fee(491)] !== void 0) _0x4b2380[_0x2e4fee(857)](_0x33592b[_0x2e4fee(491)]);
    if (_0x33592b[_0x2e4fee(641)]) _0x33592b[_0x2e4fee(641)][_0x2e4fee(601)](_0x4ab80b);
  }
  _0x4ab80b(_0x58632c);
  let _0x3a2e8d = 0;
  while (_0x4b2380[_0x2fd2ea(576)](_0x3a2e8d)) _0x3a2e8d += 10;
  return _0x3a2e8d;
}
function createNewTradeItem(_0x1e65ba, _0x5115b0, _0x42c0fe) {
  const _0x47d1e3 = _0x20c7bb,
    _0x18704d = {
      ALqQV: function (_0x331d73, _0x4fac89, _0x2a63d0, _0x183ed9) {
        return _0x331d73(_0x4fac89, _0x2a63d0, _0x183ed9);
      },
      GZELI: function (_0x1888bf, _0x3eb090) {
        return _0x1888bf === _0x3eb090;
      },
      qkJif: "minecraft:inventory",
      IUALY: function (_0x57516d, _0x21e5c5, _0x512093) {
        return _0x57516d(_0x21e5c5, _0x512093);
      },
      bLgBz: function (_0x2c5f4a) {
        return _0x2c5f4a();
      },
      bWUkk: function (_0x4895f4, _0x5b7966, _0x2d012f) {
        return _0x4895f4(_0x5b7966, _0x2d012f);
      },
      uWdfz: function (_0x2a2824, _0x2e46c9) {
        return _0x2a2824 + _0x2e46c9;
      }
    },
    _0x1ee3f7 = loadTradeRoot(_0x5115b0);
  if (!_0x1ee3f7) return;
  const _0x2c2484 = _0x18704d[_0x47d1e3(936)](getNode, _0x1ee3f7, _0x42c0fe);
  if (!_0x2c2484) return;
  const _0x1b7a55 = _0x18704d[_0x47d1e3(354)](_0x47d1e3(736) + Date[_0x47d1e3(1369)](), "_") + Math[_0x47d1e3(536)](Math[_0x47d1e3(572)]() * 1e4);
  selectItemFromInventory(_0x1e65ba, null, _0x985e27 => {
    const _0x4df1ad = _0x47d1e3;
    if (_0x985e27 === null || _0x18704d[_0x4df1ad(424)](_0x985e27, void 0)) {
      folderUi(_0x1e65ba, _0x5115b0, _0x42c0fe);
      return;
    }
    const _0x3ff4d0 = _0x1e65ba.getComponent(_0x18704d[_0x4df1ad(1281)])[_0x4df1ad(1344)],
      _0x4f39e6 = _0x3ff4d0[_0x4df1ad(940)](_0x985e27);
    if (!_0x4f39e6) {
      sendTitle(_0x1e65ba, _0x4df1ad(1033));
      return;
    }
    const _0xf73956 = loadTradeRoot(_0x5115b0) || _0x1ee3f7,
      _0x5d0642 = getNode(_0xf73956, _0x42c0fe) || _0x2c2484,
      _0x3650d5 = getFreeOffset(_0xf73956);
    if (_0x3650d5 + 9 > STORAGE_MAX_SLOT) {
      _0x18704d[_0x4df1ad(813)](sendTitle, _0x1e65ba, _0x4df1ad(907));
      return;
    }
    _0x5d0642[_0x4df1ad(641)] = _0x5d0642.children || [], _0x5d0642.children[_0x4df1ad(943)]({
      type: "item",
      namespace: _0x1b7a55,
      tradeId: _0x18704d[_0x4df1ad(1091)](newTradeId),
      offerPolicyId: _0x4df1ad(1319),
      display_name: getItemDisplayName2(_0x4f39e6),
      storage: _0x5115b0,
      storageOffset: _0x3650d5
    }), _0x18704d[_0x4df1ad(936)](saveTradeRoot, _0x5115b0, _0xf73956), storage_default[_0x4df1ad(963)](_0x1e65ba, _0x5115b0, _0x3650d5 + 0, _0x4f39e6[_0x4df1ad(1251)]()), sendTitle(_0x1e65ba, _0x4df1ad(1114)), _0x144cf1[_0x4df1ad(1348)][_0x4df1ad(986)](() => {
      const _0x13e7a9 = _0x4df1ad;
      _0x18704d[_0x13e7a9(1062)](folderUi, _0x1e65ba, _0x5115b0, _0x42c0fe);
    });
  });
}
function deleteNodeUI(_0x855f56, _0x2d9370, _0x558f87) {
  const _0x53904b = _0x20c7bb,
    _0x5dc500 = {
      qoeKk: function (_0x2480ea, _0x3f62d1) {
        return _0x2480ea === _0x3f62d1;
      },
      nZmya: function (_0x535f03, _0x29c975) {
        return _0x535f03 + _0x29c975;
      },
      IhhdU: function (_0x3883d0, _0x4e2c12) {
        return _0x3883d0(_0x4e2c12);
      },
      VGpKI: _0x53904b(525),
      HXWHl: function (_0x12842b, _0x414ea2) {
        return _0x12842b(_0x414ea2);
      },
      WNise: function (_0x2ceb8c) {
        return _0x2ceb8c();
      },
      MynIm: function (_0xfba62f, _0x582e16, _0x332ebd) {
        return _0xfba62f(_0x582e16, _0x332ebd);
      },
      ioTOc: function (_0x326abd, _0x3e6157) {
        return _0x326abd % _0x3e6157;
      },
      mVVze: function (_0x485b86, _0x56f60b) {
        return _0x485b86 === _0x56f60b;
      },
      IAYjF: "folderSet",
      dFYiI: _0x53904b(577),
      IdlBB: "string",
      MJQxF: function (_0x194e99, _0x446999) {
        return _0x194e99 > _0x446999;
      },
      niotE: _0x53904b(484),
      EAHjG: function (_0x538c28, _0xca7efc) {
        return _0x538c28 !== _0xca7efc;
      },
      Cezic: "GnLRm",
      ugzAp: _0x53904b(1210),
      JqRjq: function (_0xdbad17, _0x111dc5) {
        return _0xdbad17(_0x111dc5);
      },
      ceaPy: _0x53904b(1269)
    },
    _0x25f4f8 = _0x5dc500[_0x53904b(357)](loadTradeRoot, _0x2d9370);
  if (!_0x25f4f8) return;
  const _0x3deeec = getNode(_0x25f4f8, _0x558f87);
  if (!_0x3deeec || !_0x3deeec[_0x53904b(641)] || _0x3deeec[_0x53904b(641)].length === 0) {
    sendTitle(_0x855f56, "shopkeeper.delete.noitems");
    return;
  }
  function _0x3fb906(_0x1199a0) {
    const _0x25b05f = _0x53904b;
    if (_0x5dc500[_0x25b05f(387)](typeof _0x1199a0, "string")) return _0x1199a0;
    if (_0x1199a0 && _0x1199a0[_0x25b05f(819)] && Array[_0x25b05f(1080)](_0x1199a0[_0x25b05f(819)])) {
      let _0x252cf5 = "";
      for (const _0xa3ddb4 of _0x1199a0[_0x25b05f(819)]) {
        if (typeof _0xa3ddb4[_0x25b05f(701)] === "string") _0x252cf5 += _0xa3ddb4[_0x25b05f(701)];else {
          if (typeof _0xa3ddb4[_0x25b05f(440)] === _0x25b05f(406)) _0x252cf5 += _0xa3ddb4[_0x25b05f(440)];
        }
      }
      return _0x252cf5[_0x25b05f(605)]();
    }
    return String(_0x1199a0);
  }
  const _0x4d34c8 = new ChestFormData("54").title({
    translate: "shopkeeper.delete.title"
  });
  _0x5dc500[_0x53904b(931)](applyFolderPattern, _0x4d34c8);
  const _0x414c2e = _0x3deeec[_0x53904b(641)];
  for (let _0x1a7cd8 = 0; _0x1a7cd8 < _0x414c2e.length && _0x1a7cd8 < 28; _0x1a7cd8++) {
    const _0x1b68b7 = Math.floor(_0x1a7cd8 / 7) + 1,
      _0x55e0b4 = _0x5dc500[_0x53904b(1333)](_0x1a7cd8, 7) + 1,
      _0x1c2b41 = _0x1b68b7 * 9 + _0x55e0b4,
      _0x27879d = _0x414c2e[_0x1a7cd8];
    if (_0x27879d[_0x53904b(1116)] === "category" || _0x27879d[_0x53904b(1116)] === "folderSet") {
      const _0x253adc = _0x5dc500[_0x53904b(507)](_0x27879d.type, _0x5dc500[_0x53904b(1359)]) ? _0x5dc500[_0x53904b(1245)] : "minecraft:chest";
      let _0x1a48f6 = [];
      typeof _0x27879d[_0x53904b(1381)] === _0x5dc500.IdlBB && _0x5dc500[_0x53904b(877)](_0x27879d[_0x53904b(1381)][_0x53904b(459)], 0) && (_0x1a48f6 = _0x27879d[_0x53904b(1381)][_0x53904b(397)]("\n").map(_0x37f5fc => _0x37f5fc[_0x53904b(605)]()).filter(_0x436720 => _0x436720.length > 0));
      const _0x37a5b7 = {
        rawtext: []
      };
      for (const _0x43c80a of _0x1a48f6) {
        _0x37a5b7[_0x53904b(819)][_0x53904b(943)]({
          text: _0x43c80a
        }), _0x37a5b7[_0x53904b(819)].push({
          text: "\n"
        });
      }
      _0x37a5b7[_0x53904b(819)][_0x53904b(943)]({
        translate: "shopkeeper.delete.click"
      }), _0x4d34c8[_0x53904b(730)](_0x1c2b41, _0x27879d[_0x53904b(562)] ?? _0x27879d[_0x53904b(451)], _0x37a5b7, _0x27879d[_0x53904b(481)] ?? _0x253adc, 1, 0, _0x27879d[_0x53904b(1157)] ?? ![]);
    } else {
      if (_0x5dc500[_0x53904b(507)](_0x27879d[_0x53904b(1116)], _0x53904b(370))) {
        const _0x1db4d9 = _0x27879d.storage ?? _0x2d9370,
          _0x1794df = _0x27879d.storageOffset || 0,
          _0x57f47b = storage_default[_0x53904b(667)](_0x855f56, _0x1db4d9, _0x1794df + 0);
        if (!_0x57f47b) {
          _0x4d34c8.button(_0x1c2b41, {
            translate: _0x5dc500[_0x53904b(1054)]
          }, {
            rawtext: [{
              translate: "shopkeeper.item.notfound"
            }, {
              text: "\n"
            }, {
              translate: _0x53904b(1210)
            }]
          }, "minecraft:barrier", 1, 0, ![]);
          continue;
        }
        const _0x5d1728 = getDisplayLore(_0x57f47b, _0x1db4d9, 0),
          _0x15dbb9 = {
            rawtext: [..._0x5d1728[_0x53904b(819)]]
          };
        _0x5dc500.MJQxF(_0x15dbb9[_0x53904b(819)][_0x53904b(459)], 0) && (_0x5dc500.EAHjG(_0x5dc500.Cezic, _0x53904b(684)) ? _0x493958[_0x53904b(1348)].run(() => _0x4f80be(_0x30730a, _0x57f340, _0x15c192, 0)) : _0x15dbb9[_0x53904b(819)].push({
          text: "\n"
        })), _0x15dbb9[_0x53904b(819)].push({
          translate: _0x5dc500.ugzAp
        }), _0x4d34c8.button(_0x1c2b41, _0x5dc500[_0x53904b(1152)](getItemDisplayName2, _0x57f47b), _0x15dbb9, _0x57f47b.typeId, _0x57f47b[_0x53904b(989)] ?? 1, getDisplayDurability(_0x57f47b), hasGlint(_0x57f47b));
      }
    }
  }
  _0x4d34c8.button(47, {
    translate: _0x5dc500[_0x53904b(606)]
  }, {
    rawtext: [{
      translate: _0x53904b(742)
    }]
  }, "textures/ui/arrow_left", 1), _0x144cf1[_0x53904b(1348)][_0x53904b(986)](() => {
    const _0x5d5caa = _0x53904b;
    _0x5dc500[_0x5d5caa(778)](_guardForm, _0x4d34c8[_0x5d5caa(402)](_0x855f56)[_0x5d5caa(479)](_0x47473c => {
      const _0x16fca8 = _0x5d5caa;
      if (!isPlayerValid(_0x855f56)) return;
      if (_0x47473c.canceled) {
        _0x144cf1.system[_0x16fca8(986)](() => folderUi(_0x855f56, _0x2d9370, _0x558f87));
        return;
      }
      const _0x58c273 = _0x47473c.selection;
      if (_0x58c273 === 47) {
        _0x144cf1[_0x16fca8(1348)][_0x16fca8(986)](() => folderUi(_0x855f56, _0x2d9370, _0x558f87));
        return;
      }
      const _0x4514ab = Math[_0x16fca8(536)](_0x58c273 / 9),
        _0x4832ec = _0x58c273 % 9;
      if (_0x4514ab === 0 || _0x4514ab === 5 || _0x4832ec === 0 || _0x4832ec === 8) return;
      const _0x446c3d = _0x5dc500.nZmya((_0x4514ab - 1) * 7, _0x4832ec - 1);
      if (_0x446c3d < 0 || _0x446c3d >= _0x414c2e[_0x16fca8(459)]) return;
      const _0x27c583 = _0x414c2e[_0x446c3d];
      if (!_0x27c583) return;
      const _0x324dae = _0x5dc500.IhhdU(collectSubtreeStorageRefs, _0x27c583),
        _0x2c54e4 = () => {
          const _0x3d5191 = _0x16fca8;
          _0x414c2e[_0x3d5191(949)](_0x446c3d, 1), saveTradeRoot(_0x2d9370, _0x25f4f8), sendTitle(_0x855f56, "shopkeeper.deleted", [_0x3fb906(_0x27c583[_0x3d5191(562)] ?? _0x27c583[_0x3d5191(451)])]), _0x3deeec.children && _0x3deeec[_0x3d5191(641)].length > 0 ? _0x144cf1[_0x3d5191(1348)][_0x3d5191(986)](() => deleteNodeUI(_0x855f56, _0x2d9370, _0x558f87)) : _0x144cf1[_0x3d5191(1348)][_0x3d5191(986)](() => folderUi(_0x855f56, _0x2d9370, _0x558f87));
        };
      if (_0x324dae[_0x16fca8(459)] > 0) {
        deleteChoiceForm(_0x855f56, {
          refs: _0x324dae,
          bodyKey: _0x5dc500[_0x16fca8(456)],
          bodyParams: [_0x3fb906(_0x27c583[_0x16fca8(562)] ?? _0x27c583[_0x16fca8(451)]), _0x5dc500[_0x16fca8(357)](String, _0x324dae.length)],
          onConfirmed: _0x2c54e4,
          onCancel: () => _0x144cf1[_0x16fca8(1348)][_0x16fca8(986)](() => deleteNodeUI(_0x855f56, _0x2d9370, _0x558f87))
        });
        return;
      }
      _0x5dc500[_0x16fca8(939)](_0x2c54e4);
    }), _0x5d5caa(391));
  });
}
function applyFolderPattern(_0x123796) {
  const _0x2cba33 = _0x20c7bb,
    _0x12cb8f = {
      skDmx: _0x2cba33(1224),
      oTpUt: _0x2cba33(575),
      qcCjt: "shopkeeper.slot.hint"
    };
  _0x123796[_0x2cba33(556)](["#########", _0x2cba33(1384), _0x2cba33(1384), "#_______#", "#_______#", _0x12cb8f.skDmx], {
    "#": {
      texture: _0x2cba33(800),
      itemName: "",
      stackAmount: 1
    }
  }, {
    _: {
      texture: _0x12cb8f.oTpUt,
      itemName: {
        translate: _0x2cba33(1033)
      },
      itemDesc: {
        rawtext: [{
          translate: _0x12cb8f[_0x2cba33(920)]
        }]
      },
      stackAmount: 1
    }
  });
}
var TRADE_SUCCESS_RATE = 100;
function getStatusRaw(_0x91f7f0, _0x5b0ae2, _0x466ae1 = _0x91f7f0?.["amount"] ?? 1) {
  const _0x27d0cb = _0x20c7bb,
    _0x39af65 = {
      YpCqu: _0x27d0cb(406)
    },
    _0x248868 = getItemDisplayName2(_0x91f7f0),
    _0x2d58ec = _0x5b0ae2 === 0,
    _0x5b3f7c = {
      rawtext: []
    };
  _0x5b3f7c.rawtext[_0x27d0cb(943)]({
    text: "\n"
  }, {
    translate: _0x27d0cb(1192)
  }, {
    text: "\xA7e"
  }, {
    text: "x" + _0x466ae1
  }, {
    text: "\xA7r "
  });
  if (typeof _0x248868 === _0x39af65[_0x27d0cb(375)]) _0x5b3f7c[_0x27d0cb(819)][_0x27d0cb(943)]({
    text: _0x248868
  });else _0x248868?.[_0x27d0cb(819)] ? _0x5b3f7c[_0x27d0cb(819)].push(..._0x248868[_0x27d0cb(819)]) : _0x5b3f7c.rawtext[_0x27d0cb(943)]({
    text: _0x91f7f0?.[_0x27d0cb(764)] ?? ""
  });
  return _0x5b3f7c[_0x27d0cb(819)][_0x27d0cb(943)]({
    text: _0x27d0cb(1076)
  }, {
    translate: _0x2d58ec ? _0x27d0cb(383) : "shopkeeper.craft.notenough"
  }), _0x5b3f7c;
}
function _wrapDisplay(_0x1ef046) {
  const _0x37eb81 = _0x20c7bb,
    _0x24f1df = {
      sefzy: function (_0x13e5f, _0x3b6308) {
        return _0x13e5f(_0x3b6308);
      },
      hQRNt: function (_0x152879, _0x3fbe9d) {
        return _0x152879 === _0x3fbe9d;
      },
      meAKo: function (_0x1c93dd, _0x7aaa19) {
        return _0x1c93dd === _0x7aaa19;
      },
      dRYUF: _0x37eb81(1044)
    };
  if (!_0x1ef046 || typeof _0x1ef046[_0x37eb81(430)] === _0x37eb81(712)) return _0x1ef046;
  return {
    typeId: _0x1ef046.typeId || _0x37eb81(1229),
    amount: _0x1ef046.amount ?? 1,
    nameTag: _0x1ef046[_0x37eb81(942)] ?? null,
    localizationKey: _0x1ef046.localizationKey ?? null,
    damage: _0x1ef046[_0x37eb81(1336)] ?? 0,
    maxDamage: _0x1ef046[_0x37eb81(423)] ?? (_0x1ef046[_0x37eb81(1336)] ? 999 : 0),
    enchantments: _0x1ef046[_0x37eb81(883)] || [],
    lore: _0x1ef046.lore || [],
    contents: _0x1ef046[_0x37eb81(1206)] || [],
    getLore: function () {
      const _0x23e8f4 = _0x37eb81;
      return this[_0x23e8f4(1023)];
    },
    setLore: function (_0x47616) {
      this.lore = _0x47616;
    },
    getComponent: function (_0x22da5b) {
      const _0x8cada2 = _0x37eb81;
      if (_0x22da5b === _0x8cada2(509)) return this[_0x8cada2(883)].length > 0 ? {
        getEnchantments: () => this.enchantments[_0x8cada2(1312)](_0x147800 => ({
          type: {
            id: _0x147800.id
          },
          level: _0x147800.level
        }))
      } : null;
      if (_0x24f1df[_0x8cada2(686)](_0x22da5b, _0x8cada2(1249))) return this[_0x8cada2(423)] > 0 ? {
        damage: this[_0x8cada2(1336)] || 0,
        maxDurability: this[_0x8cada2(423)]
      } : null;
      if (_0x24f1df[_0x8cada2(377)](_0x22da5b, _0x24f1df[_0x8cada2(663)])) {
        const _0xe1a1d = this[_0x8cada2(1206)] || [];
        return {
          container: {
            size: _0xe1a1d[_0x8cada2(459)],
            getItem: _0x35915a => {
              const _0x1a4996 = _0xe1a1d[_0x35915a];
              return _0x1a4996 ? _0x24f1df.sefzy(_wrapDisplay, _0x1a4996) : void 0;
            }
          }
        };
      }
      return null;
    }
  };
}
function countDisplayChildren(_0x2f1965) {
  const _0x3cb091 = _0x20c7bb,
    _0x1e637d = {
      AELfw: _0x3cb091(370),
      cMRvQ: "category"
    };
  let _0x331e1f = 0;
  for (const _0x40e6b4 of _0x2f1965 || []) {
    if (!_0x40e6b4) continue;
    if (_0x40e6b4[_0x3cb091(1116)] === _0x3cb091(1321)) continue;
    if (_0x40e6b4[_0x3cb091(1116)] === _0x1e637d[_0x3cb091(1313)] || _0x40e6b4.type === _0x1e637d[_0x3cb091(1101)] || _0x40e6b4[_0x3cb091(1116)] === _0x3cb091(1373)) _0x331e1f++;
  }
  return _0x331e1f;
}
function returnRefsToPlayer(_0x4b14c6, _0xe1bd5d) {
  const _0x4510a7 = _0x20c7bb;
  if (!_0xe1bd5d || _0xe1bd5d[_0x4510a7(459)] === 0) return;
  let _0x379b24 = null;
  try {
    _0x379b24 = _0x4b14c6[_0x4510a7(1098)]("minecraft:inventory")?.[_0x4510a7(1344)];
  } catch (_0x200fce) {}
  if (!_0x379b24) return;
  const _0x4a2dc8 = new Map();
  for (const _0x5186c4 of _0xe1bd5d) {
    if (!_0x5186c4 || typeof _0x5186c4[_0x4510a7(654)] !== "string") continue;
    if (!_0x4a2dc8.has(_0x5186c4[_0x4510a7(654)])) _0x4a2dc8[_0x4510a7(963)](_0x5186c4[_0x4510a7(654)], []);
    _0x4a2dc8.get(_0x5186c4[_0x4510a7(654)]).push(_0x5186c4.offset);
  }
  for (const [_0x1bad48, _0x3afa7a] of _0x4a2dc8) {
    let _0x5451a7 = [];
    try {
      _0x5451a7 = storage_default[_0x4510a7(680)](_0x4b14c6, _0x1bad48) || [];
    } catch (_0x2625e0) {
      _0x5451a7 = [];
    }
    for (const _0x27043a of _0x3afa7a) {
      for (let _0xefb964 = 0; _0xefb964 < 10; _0xefb964++) {
        const _0x5131ef = _0x5451a7[_0x27043a + _0xefb964];
        if (!_0x5131ef) continue;
        try {
          const {
            added: _0x1b6d8a,
            leftovers: _0x58e270
          } = addItemCountSafe(_0x379b24, _0x5131ef, _0x5131ef[_0x4510a7(989)] ?? 1);
          for (const _0x22a086 of _0x58e270) {
            try {
              _0x4b14c6[_0x4510a7(1374)][_0x4510a7(911)](_0x22a086, _0x4b14c6.location);
            } catch (_0x2b5e67) {}
          }
        } catch (_0x204579) {
          log[_0x4510a7(618)](_0x4510a7(1012), _0x204579, {
            action: _0x4510a7(485),
            storageName: _0x1bad48,
            offset: _0x27043a
          });
        }
      }
    }
  }
}
function clearStorageRefs(_0x1e77e0, _0x301635) {
  const _0x5e7d5e = _0x20c7bb;
  if (!_0x301635 || _0x301635.length === 0) return;
  for (const _0x4873f3 of _0x301635) {
    if (!_0x4873f3 || typeof _0x4873f3[_0x5e7d5e(654)] !== "string") continue;
    for (let _0x4cb751 = 0; _0x4cb751 < 10; _0x4cb751++) {
      try {
        storage_default.set(_0x1e77e0, _0x4873f3[_0x5e7d5e(654)], _0x4873f3.offset + _0x4cb751, void 0);
      } catch (_0x3ba321) {}
    }
  }
}
function deleteChoiceForm(_0x1196af, _0x3e98f2) {
  const _0x17a799 = _0x20c7bb,
    _0x10dd91 = {
      NbaZe: function (_0xb39520, _0x1a549f) {
        return _0xb39520(_0x1a549f);
      },
      eKTvT: _0x17a799(1294),
      QXtzT: "textures/ui/arrow_left"
    },
    _0x7cf230 = _0x3e98f2.refs || [],
    _0x53e00a = _0x7cf230[_0x17a799(459)] > 0,
    _0x13d644 = (_0x3e98f2[_0x17a799(884)] || []).map(rawMessageToText2),
    _0x5800da = new ActionFormData4().title({
      translate: _0x17a799(565)
    })[_0x17a799(463)]({
      rawtext: [{
        translate: _0x3e98f2[_0x17a799(629)],
        with: _0x13d644
      }]
    });
  _0x5800da[_0x17a799(730)]({
    translate: _0x17a799(1233)
  }, _0x10dd91[_0x17a799(910)]), _0x53e00a && _0x5800da[_0x17a799(730)]({
    translate: _0x17a799(620)
  }, "textures/ui/icon_recipe_item"), _0x5800da[_0x17a799(730)]({
    translate: _0x17a799(1269)
  }, _0x10dd91[_0x17a799(616)]), _0x144cf1.system[_0x17a799(986)](() => {
    const _0x3e3a8c = _0x17a799;
    _guardForm(_0x5800da.show(_0x1196af)[_0x3e3a8c(479)](_0x1f3eef => {
      const _0x23b8a0 = _0x3e3a8c;
      if (!_0x10dd91[_0x23b8a0(952)](isPlayerValid, _0x1196af)) return;
      if (_0x1f3eef.canceled || _0x1f3eef[_0x23b8a0(526)] === void 0) {
        if (_0x3e98f2[_0x23b8a0(441)]) _0x3e98f2.onCancel();
        return;
      }
      if (_0x1f3eef[_0x23b8a0(526)] === 0) {
        if (_0x3e98f2[_0x23b8a0(1153)]) _0x3e98f2[_0x23b8a0(1153)]();
        return;
      }
      if (_0x53e00a && _0x1f3eef[_0x23b8a0(526)] === 1) {
        if (_0x3e98f2[_0x23b8a0(1005)]) _0x3e98f2[_0x23b8a0(1005)]();else {
          if (_0x3e98f2[_0x23b8a0(1153)]) _0x3e98f2.onConfirmed();
        }
        return;
      }
      if (_0x3e98f2.onCancel) _0x3e98f2.onCancel();
    }), "deleteChoiceForm");
  });
}
function chooseFolderKindUi(_0x50c06b, _0x466f30, _0x17db54) {
  const _0x312e9d = _0x20c7bb,
    _0x2d9b4a = {
      CNIBU: function (_0x1dd819, _0x3876bb, _0x4251eb, _0x177421) {
        return _0x1dd819(_0x3876bb, _0x4251eb, _0x177421);
      },
      OujkT: function (_0x2667a3, _0x303e8d, _0x4b4168, _0x4a4447, _0x34aa36) {
        return _0x2667a3(_0x303e8d, _0x4b4168, _0x4a4447, _0x34aa36);
      },
      gKAXW: function (_0x41887d, _0x557df3, _0x3cd9e6, _0x3bb4fb) {
        return _0x41887d(_0x557df3, _0x3cd9e6, _0x3bb4fb);
      },
      vZgme: "shopkeeper.folderset.opt.folderSet"
    },
    _0xf6d75f = new ActionFormData4()[_0x312e9d(1352)]({
      translate: "shopkeeper.folderset.choosekind.title"
    }).body({
      translate: _0x312e9d(840)
    });
  _0xf6d75f[_0x312e9d(730)]({
    translate: _0x312e9d(604)
  }, _0x312e9d(1254)), _0xf6d75f.button({
    translate: _0x2d9b4a[_0x312e9d(1303)]
  }, _0x312e9d(998)), _0xf6d75f[_0x312e9d(730)]({
    translate: _0x312e9d(1269)
  }, _0x312e9d(1168)), _0x144cf1[_0x312e9d(1348)][_0x312e9d(986)](() => {
    const _0x4f0c77 = _0x312e9d,
      _0x12ce1e = {
        CaLMd: function (_0x1ee211, _0x3e850a) {
          return _0x1ee211(_0x3e850a);
        },
        ufVjv: function (_0x1b703a, _0x26eb78) {
          return _0x1b703a < _0x26eb78;
        },
        kSXca: function (_0x180f90, _0x33e13a) {
          return _0x180f90 - _0x33e13a;
        }
      };
    _guardForm(_0xf6d75f.show(_0x50c06b)[_0x4f0c77(479)](_0x149fcb => {
      const _0x3de462 = _0x4f0c77;
      if (!isPlayerValid(_0x50c06b)) return;
      if (_0x149fcb[_0x3de462(505)] || _0x149fcb.selection === void 0) {
        if (_0x3de462(1126) === _0x3de462(987)) {
          const _0x509f4e = _0x2730fa.enchantments[_0x4df51d],
            _0x589886 = _0x47b5fd[_0x509f4e.id] || _0x509f4e.id,
            _0x32fc18 = _0xecc264[_0x2f487c(_0x509f4e[_0x3de462(706)])] || _0x12ce1e[_0x3de462(352)](_0x42a32f, _0x509f4e[_0x3de462(706)]);
          _0x5515f1[_0x3de462(943)]({
            text: "\xA79"
          }, {
            translate: _0x589886
          }, {
            text: " "
          }), _0x3f5e04[_0x1de269(_0x509f4e[_0x3de462(706)])] ? _0x301b8a[_0x3de462(943)]({
            translate: _0x32fc18
          }) : _0x4ed88d.push({
            text: _0x32fc18
          }), _0x12ce1e[_0x3de462(1221)](_0x2b8f02, _0x12ce1e.kSXca(_0x1af378[_0x3de462(883)][_0x3de462(459)], 1)) && _0x4e1708[_0x3de462(943)]({
            text: "\n"
          });
        } else {
          _0x2d9b4a[_0x3de462(548)](folderUi, _0x50c06b, _0x466f30, _0x17db54);
          return;
        }
      }
      if (_0x149fcb[_0x3de462(526)] === 0) _0x2d9b4a.OujkT(createCategory, _0x50c06b, _0x466f30, _0x17db54, _0x3de462(1151));else {
        if (_0x149fcb[_0x3de462(526)] === 1) createCategory(_0x50c06b, _0x466f30, _0x17db54, _0x3de462(1373));else _0x2d9b4a[_0x3de462(666)](folderUi, _0x50c06b, _0x466f30, _0x17db54);
      }
    }), "chooseFolderKindUi");
  });
}
setFolderSetContext({
  loadTradeRoot: loadTradeRoot,
  saveTradeRoot: saveTradeRoot,
  getNode: getNode,
  getParentLink: getParentLink,
  folderUi: folderUi,
  enhancedTradeUi: enhancedTradeUi,
  selectItemFromInventory: selectItemFromInventory,
  getFreeOffset: getFreeOffset,
  getItemDisplayName: getItemDisplayName2,
  getDisplayLore: getDisplayLore,
  getDisplayDurability: getDisplayDurability,
  hasGlint: hasGlint,
  getStatusRaw: getStatusRaw,
  isTradeOpen: isTradeOpen,
  stockDisplay: stockDisplay,
  effectiveReduction: effectiveReduction,
  discountedAmount: discountedAmount,
  wrapDisplay: _wrapDisplay,
  itemKey: _0x1ed2c6 => {
    const _0x5158f5 = _0x20c7bb;
    if (!_0x1ed2c6) return null;
    try {
      return JSON[_0x5158f5(1324)](normalizeItem(_0x1ed2c6));
    } catch (_0x39f9bc) {
      return null;
    }
  },
  returnRefsToPlayer: returnRefsToPlayer,
  clearStorageRefs: clearStorageRefs,
  deleteChoiceForm: deleteChoiceForm,
  getDailySpecialNamespace: getDailySpecialNamespace,
  openDailyOrderBoard: openDailyOrderBoard,
  getDecoLayout: _0x484c59 => policyStore.get("deco", _0x484c59),
  decoLayoutPageUi: (_0x404a84, _0x4a38f1, _0x46b93d, _0x9a3733, _0xcbf64) => decoLayoutPageUi(_0x404a84, policyStore, _0x4a38f1, _0x46b93d, _0x9a3733, _0xcbf64)
});
function folderUi(_0x1a9dda, _0x523c91, _0x397a52) {
  const _0x2cfdd5 = _0x20c7bb,
    _0x5b622d = {
      jiMSm: function (_0x3c3c27, _0x159d4f) {
        return _0x3c3c27(_0x159d4f);
      },
      lHvnf: function (_0x38154c, _0x5098ff) {
        return _0x38154c / _0x5098ff;
      },
      xJyoX: function (_0x419fdf, _0xb08d2a) {
        return _0x419fdf > _0xb08d2a;
      },
      RXudK: function (_0x11785d, _0x3deb50, _0x244c38, _0x30db67, _0x3d419e) {
        return _0x11785d(_0x3deb50, _0x244c38, _0x30db67, _0x3d419e);
      },
      sEhZd: function (_0x659c7f, _0x5c5990, _0x4d174d) {
        return _0x659c7f(_0x5c5990, _0x4d174d);
      },
      DfOeN: function (_0x3a9b44, _0x5ba916) {
        return _0x3a9b44 === _0x5ba916;
      },
      ewZRI: "folderUi: no trade root",
      ocXfv: _0x2cfdd5(978),
      mwRaD: function (_0x850f4f, _0xb9fab3) {
        return _0x850f4f(_0xb9fab3);
      },
      NTNvP: function (_0x35d255, _0x287749) {
        return _0x35d255 === _0x287749;
      },
      Rglyh: function (_0x14e563, _0x58862e) {
        return _0x14e563 + _0x58862e;
      },
      aUEkU: function (_0x30f391, _0x72fc4) {
        return _0x30f391 * _0x72fc4;
      },
      VfYkA: _0x2cfdd5(1151),
      TkBdB: _0x2cfdd5(1373),
      dXQDw: _0x2cfdd5(406),
      aIECe: function (_0x46002a, _0x1de21a) {
        return _0x46002a > _0x1de21a;
      },
      rACiR: function (_0x375ff9, _0x40862b) {
        return _0x375ff9 < _0x40862b;
      },
      cKEoo: function (_0x570473, _0x49ac76) {
        return _0x570473 - _0x49ac76;
      },
      zeyfI: _0x2cfdd5(1100),
      YpLZZ: _0x2cfdd5(537),
      gIMMM: function (_0x521d6f, _0x5bb423) {
        return _0x521d6f + _0x5bb423;
      },
      nrZJJ: function (_0x5cd947, _0x24c56f, _0x575f72, _0x418529) {
        return _0x5cd947(_0x24c56f, _0x575f72, _0x418529);
      },
      Leebm: function (_0x1e6ee8, _0x12c672) {
        return _0x1e6ee8 > _0x12c672;
      },
      gdCVn: _0x2cfdd5(860),
      OYYNU: _0x2cfdd5(569)
    };
  _0x397a52 = _0x5b622d[_0x2cfdd5(1025)](typeof _0x397a52, _0x2cfdd5(406)) ? _0x397a52 : "", log[_0x2cfdd5(653)](_0x2cfdd5(444), {
    player: _0x1a9dda.name,
    name: _0x523c91,
    link: _0x397a52
  });
  const _0x2adba0 = loadTradeRoot(_0x523c91);
  if (!_0x2adba0) {
    log.w("ui", _0x5b622d[_0x2cfdd5(1143)], {
      name: _0x523c91
    });
    return;
  }
  const _0x3c9616 = getNode(_0x2adba0, _0x397a52);
  if (!_0x3c9616) {
    log.w("ui", _0x5b622d[_0x2cfdd5(973)], {
      name: _0x523c91,
      link: _0x397a52
    });
    return;
  }
  log.d("ui", _0x2cfdd5(589), {
    type: _0x3c9616[_0x2cfdd5(1116)],
    children: (_0x3c9616[_0x2cfdd5(641)] || []).length
  });
  if (_0x3c9616[_0x2cfdd5(1116)] === _0x2cfdd5(370)) {
    const _0x4c3711 = _0x5b622d.mwRaD(getParentLink, _0x397a52);
    enhancedTradeUi(_0x1a9dda, _0x523c91, _0x3c9616, _0x4c3711);
    return;
  }
  if (_0x5b622d[_0x2cfdd5(1203)](_0x397a52, "") && isItemShopRoot(_0x2adba0)) {
    const _0x3166e5 = (_0x2adba0[_0x2cfdd5(641)] || [])[0];
    if (_0x3166e5 && _0x3166e5.type === _0x2cfdd5(370)) {
      enhancedTradeUi(_0x1a9dda, _0x523c91, _0x3166e5, "");
      return;
    } else {
      if (_0x1a9dda.hasTag("admin")) {
        _0x5b622d.sEhZd(selectItemUi, _0x1a9dda, _0x523c91);
        return;
      }
    }
  }
  let _0x3a1e88 = _0x3c9616[_0x2cfdd5(562)] ?? _0x523c91;
  const _0x28ea76 = new ChestFormData("54")[_0x2cfdd5(1352)](_0x3a1e88);
  applyFolderPattern(_0x28ea76);
  const _0x613dc6 = _0x3c9616.children || [],
    _0x3d7f59 = _0x5b622d[_0x2cfdd5(374)](getDailySpecialNamespace, _0x523c91, _0x2adba0),
    _0x426b28 = new Map(),
    _0x3af77f = _0xeacd0d => {
      const _0x2ef5ed = _0x2cfdd5;
      if (!_0x426b28[_0x2ef5ed(576)](_0xeacd0d)) _0x426b28[_0x2ef5ed(963)](_0xeacd0d, storage_default[_0x2ef5ed(1350)](_0xeacd0d));
      return _0x426b28[_0x2ef5ed(667)](_0xeacd0d);
    },
    _0x4079a9 = new Map(),
    _0x1f68db = (_0x3906da, _0x65252a) => {
      const _0x3bb13d = _0x2cfdd5,
        _0x265d46 = _0x3906da + "@" + _0x65252a,
        _0x5ba9be = _0x4079a9.get(_0x265d46);
      if (_0x5ba9be !== void 0) return _0x5ba9be;
      const _0x488183 = _0x3af77f(_0x3906da),
        _0x5f10fa = _0x488183[String(_0x65252a)],
        _0x516927 = _0x5f10fa ? _wrapDisplay(_0x5f10fa) : null;
      return _0x4079a9[_0x3bb13d(963)](_0x265d46, _0x516927), _0x516927;
    },
    _0x39fe70 = _0x1a9dda[_0x2cfdd5(1098)](_0x2cfdd5(1044))[_0x2cfdd5(1344)],
    _0x5a5a1e = new Map(),
    _0x487509 = new Map(),
    _0x545f65 = _0x147a93 => {
      const _0x16f66e = _0x2cfdd5;
      if (!_0x147a93) return null;
      const _0x5768eb = normalizeItem(_0x147a93);
      return JSON[_0x16f66e(1324)](_0x5768eb);
    };
  for (let _0x47a17b = 0; _0x47a17b < (_0x39fe70.size ?? 36); _0x47a17b++) {
    const _0x54e6ae = _0x39fe70[_0x2cfdd5(940)](_0x47a17b);
    if (!_0x54e6ae) continue;
    const _0x1aa1a8 = _0x545f65(_0x54e6ae);
    _0x5a5a1e[_0x2cfdd5(963)](_0x1aa1a8, (_0x5a5a1e.get(_0x1aa1a8) || 0) + (_0x54e6ae[_0x2cfdd5(989)] ?? 0));
  }
  for (let _0x1ccc6f = 0; _0x1ccc6f < _0x613dc6[_0x2cfdd5(459)] && _0x1ccc6f < 28; _0x1ccc6f++) {
    const _0x28536d = Math.floor(_0x1ccc6f / 7) + 1,
      _0x501914 = _0x1ccc6f % 7 + 1,
      _0x4618e6 = _0x5b622d[_0x2cfdd5(946)](_0x5b622d[_0x2cfdd5(1360)](_0x28536d, 9), _0x501914),
      _0x3f7dd5 = _0x613dc6[_0x1ccc6f];
    if (_0x3f7dd5[_0x2cfdd5(1116)] === _0x5b622d[_0x2cfdd5(856)] || _0x5b622d[_0x2cfdd5(1025)](_0x3f7dd5.type, _0x5b622d[_0x2cfdd5(739)])) {
      const _0x424c40 = _0x3f7dd5[_0x2cfdd5(1116)] === "folderSet" ? "minecraft:ender_chest" : "minecraft:chest";
      let _0x4e141c = [];
      typeof _0x3f7dd5[_0x2cfdd5(1381)] === _0x5b622d[_0x2cfdd5(1234)] && _0x5b622d[_0x2cfdd5(803)](_0x3f7dd5.sub_name[_0x2cfdd5(459)], 0) && (_0x4e141c = _0x3f7dd5[_0x2cfdd5(1381)][_0x2cfdd5(397)]("\n")[_0x2cfdd5(1312)](_0x218e11 => _0x218e11[_0x2cfdd5(605)]())[_0x2cfdd5(1099)](_0x91eba4 => _0x91eba4[_0x2cfdd5(459)] > 0));
      if (_0x1a9dda[_0x2cfdd5(518)]("admin")) {
        const _0x16fd15 = _0x5b622d[_0x2cfdd5(803)](_0x397a52.length, 0) ? _0x397a52 + "/" + _0x3f7dd5[_0x2cfdd5(451)] : _0x3f7dd5[_0x2cfdd5(451)],
          _0x3a5a6f = _0x2cfdd5(1149) + _0x523c91 + " " + _0x16fd15,
          _0x4e7e0d = {
            rawtext: []
          };
        for (let _0x2eb3f7 = 0; _0x2eb3f7 < _0x4e141c[_0x2cfdd5(459)]; _0x2eb3f7++) {
          _0x4e7e0d[_0x2cfdd5(819)][_0x2cfdd5(943)]({
            text: _0x4e141c[_0x2eb3f7]
          });
          if (_0x5b622d[_0x2cfdd5(921)](_0x2eb3f7, _0x4e141c.length - 1)) _0x4e7e0d[_0x2cfdd5(819)][_0x2cfdd5(943)]({
            text: "\n"
          });
        }
        if (_0x4e141c[_0x2cfdd5(459)] > 0) _0x4e7e0d[_0x2cfdd5(819)][_0x2cfdd5(943)]({
          text: "\n"
        });
        _0x4e7e0d.rawtext[_0x2cfdd5(943)]({
          text: "\xA77"
        }, {
          text: _0x3a5a6f
        }), _0x28ea76[_0x2cfdd5(730)](_0x4618e6, _0x3f7dd5[_0x2cfdd5(562)] ?? _0x3f7dd5.namespace, _0x4e7e0d, _0x3f7dd5[_0x2cfdd5(481)] ?? _0x424c40, 1, 0, _0x3f7dd5[_0x2cfdd5(1157)] ?? ![]);
      } else {
        const _0x5bee41 = {
          rawtext: []
        };
        for (let _0x22b980 = 0; _0x22b980 < _0x4e141c[_0x2cfdd5(459)]; _0x22b980++) {
          _0x5bee41[_0x2cfdd5(819)][_0x2cfdd5(943)]({
            text: _0x4e141c[_0x22b980]
          });
          if (_0x22b980 < _0x5b622d.cKEoo(_0x4e141c[_0x2cfdd5(459)], 1)) _0x5bee41[_0x2cfdd5(819)][_0x2cfdd5(943)]({
            text: "\n"
          });
        }
        _0x28ea76[_0x2cfdd5(730)](_0x4618e6, _0x3f7dd5[_0x2cfdd5(562)] ?? _0x3f7dd5.namespace, _0x5bee41, _0x3f7dd5.texture ?? _0x424c40, 1, 0, _0x3f7dd5[_0x2cfdd5(1157)] ?? ![]);
      }
      continue;
    }
    if (_0x3f7dd5[_0x2cfdd5(1116)] === _0x2cfdd5(370)) {
      if (_0x2cfdd5(1125) === _0x5b622d[_0x2cfdd5(1164)]) return {
        date: _0x32e156,
        orderId: _0x45dcf6.orderId,
        progress: _0xa178c3[_0x2cfdd5(955)](0, _0x5f4294.floor(wgoLkk[_0x2cfdd5(494)](_0x3679ea, _0x38dd0c.progress) || 0)),
        completed: _0x1f0949.completed === !![]
      };else {
        if (!_0x1a9dda[_0x2cfdd5(518)](_0x2cfdd5(860)) && !isTradeOpen(_0x2adba0, _0x3f7dd5, _0x1a9dda)) continue;
        const _0x1e67c4 = _0x3f7dd5[_0x2cfdd5(654)] ?? _0x523c91,
          _0x31217e = _0x3f7dd5.storageOffset || 0,
          _0x10a314 = _0x5b622d.sEhZd(_0x1f68db, _0x1e67c4, _0x31217e + 0);
        if (!_0x10a314) {
          if (_0x1a9dda[_0x2cfdd5(518)](_0x2cfdd5(860))) {
            _0x28ea76.button(_0x4618e6, {
              translate: _0x2cfdd5(1366)
            }, {
              rawtext: [{
                translate: _0x2cfdd5(1090)
              }, {
                text: "\n"
              }, {
                translate: _0x5b622d[_0x2cfdd5(1024)]
              }]
            }, "minecraft:barrier", 1);
            continue;
          }
          continue;
        }
        const _0x14361a = [];
        for (let _0x53cdcb = 1; _0x53cdcb <= 9; _0x53cdcb++) {
          _0x14361a.push(_0x1f68db(_0x1e67c4, _0x5b622d.gIMMM(_0x31217e, _0x53cdcb)));
        }
        const _0x513c49 = getDisplayLore(_0x10a314, _0x1e67c4, _0x31217e + 0);
        _0x513c49.rawtext.push({
          text: "\n"
        }, ..._0x5b622d.nrZJJ(stockDisplay, _0x523c91, _0x2adba0, _0x3f7dd5)[_0x2cfdd5(819)]);
        const _0x44cadd = _0x397a52 ? _0x397a52 + "/" + _0x3f7dd5[_0x2cfdd5(451)] : _0x3f7dd5[_0x2cfdd5(451)];
        if (_0x44cadd === _0x3d7f59) _0x513c49[_0x2cfdd5(819)].push({
          text: "\n"
        }, {
          translate: _0x2cfdd5(743)
        });
        const _0x80c00a = effectiveReduction(_0x1a9dda, _0x523c91, _0x2adba0, _0x3f7dd5, _0x44cadd, _0x3d7f59),
          _0x61ce91 = new Map(_0x5a5a1e);
        for (let _0x5b572b = 0; _0x5b572b < 9; _0x5b572b++) {
          const _0x1ce272 = _0x14361a[_0x5b572b];
          if (!_0x1ce272) continue;
          const _0x371c0a = _0x545f65(_0x1ce272),
            _0x27fee5 = discountedAmount(_0x1ce272.amount ?? 1, _0x80c00a),
            _0xfc9a32 = _0x61ce91.get(_0x371c0a) || 0,
            _0x37156c = Math[_0x2cfdd5(955)](0, _0x27fee5 - _0xfc9a32);
          _0x61ce91[_0x2cfdd5(963)](_0x371c0a, Math.max(0, _0xfc9a32 - _0x27fee5));
          const _0x48e108 = _0x5b622d[_0x2cfdd5(374)](getStatusRaw, {
            ..._0x1ce272,
            amount: _0x27fee5
          }, _0x37156c);
          _0x513c49[_0x2cfdd5(819)][_0x2cfdd5(943)](..._0x48e108[_0x2cfdd5(819)]);
        }
        if (_0x1a9dda[_0x2cfdd5(518)]("admin")) {
          if (_0x2cfdd5(1109) !== _0x2cfdd5(1178)) {
            const _0x23e3e4 = _0x397a52[_0x2cfdd5(459)] > 0 ? _0x397a52 + "/" + _0x3f7dd5[_0x2cfdd5(451)] : _0x3f7dd5.namespace,
              _0x29fa85 = _0x2cfdd5(1149) + _0x523c91 + " " + _0x23e3e4;
            _0x513c49.rawtext[_0x2cfdd5(943)]({
              text: "\n"
            }, {
              text: "\xA77"
            }, {
              text: _0x29fa85
            });
          } else _0x1a4034[_0x2cfdd5(1104)].setDynamicProperty(_0x1cfcb4, !![]);
        }
        _0x28ea76.button(_0x4618e6, getItemDisplayName2(_0x10a314), _0x513c49, _0x10a314[_0x2cfdd5(764)], _0x10a314[_0x2cfdd5(989)] ?? 1, getDisplayDurability(_0x10a314), hasGlint(_0x10a314));
      }
    }
  }
  _0x5b622d[_0x2cfdd5(1111)](_0x397a52[_0x2cfdd5(459)], 0) && _0x28ea76[_0x2cfdd5(730)](47, {
    translate: "shopkeeper.back"
  }, {
    rawtext: [{
      translate: "shopkeeper.back.hint"
    }]
  }, "textures/ui/arrow_left", 1);
  if (_0x1a9dda[_0x2cfdd5(518)](_0x5b622d[_0x2cfdd5(842)])) {
    if (_0x2cfdd5(1065) !== _0x2cfdd5(462)) _0x28ea76.button(48, {
      translate: _0x2cfdd5(468)
    }, {
      rawtext: [{
        translate: _0x2cfdd5(1232)
      }]
    }, "textures/ui/color_plus", 1), _0x28ea76.button(49, {
      translate: _0x2cfdd5(643)
    }, {
      rawtext: [{
        translate: _0x2cfdd5(1330)
      }]
    }, _0x5b622d[_0x2cfdd5(1077)], 1, 0, !![]), _0x28ea76[_0x2cfdd5(730)](50, {
      translate: _0x2cfdd5(563)
    }, {
      rawtext: [{
        translate: _0x2cfdd5(1204)
      }]
    }, _0x2cfdd5(1294), 1), _0x28ea76[_0x2cfdd5(730)](51, {
      translate: _0x2cfdd5(678)
    }, {
      rawtext: [{
        translate: _0x2cfdd5(490)
      }]
    }, _0x2cfdd5(1379), 1);else {
      const _0x315925 = _0x389263[_0x2cfdd5(369)](_0x2a515f.clone());
      _0x315925 && _0x55c0f4[_0x2cfdd5(1374)][_0x2cfdd5(911)](_0x315925, _0x5c86fc.location);
    }
  }
  _0x28ea76[_0x2cfdd5(730)](52, {
    translate: _0x2cfdd5(810)
  }, {
    rawtext: [{
      translate: "shopkeeper.daily.order.title"
    }]
  }, _0x2cfdd5(569), 1, 0, !![]), _0x144cf1.system[_0x2cfdd5(986)](() => {
    const _0x4037c3 = _0x2cfdd5,
      _0x2424e4 = {
        mtPJq: function (_0x4f33ed, _0x226c1d) {
          return _0x4f33ed > _0x226c1d;
        },
        IizWA: function (_0x37787b, _0x34729a, _0x3b0604, _0xe84ff0) {
          return _0x37787b(_0x34729a, _0x3b0604, _0xe84ff0);
        },
        FgOAQ: function (_0x4ad188, _0x1ce29d) {
          return _0x5b622d.lHvnf(_0x4ad188, _0x1ce29d);
        },
        bmTTf: function (_0x25c250, _0x5468e9) {
          return _0x25c250 % _0x5468e9;
        },
        QebuY: function (_0x1a4bdb, _0x534769) {
          const _0x12cceb = _0x12bf;
          return _0x5b622d[_0x12cceb(698)](_0x1a4bdb, _0x534769);
        },
        OIzTc: function (_0x4500ec, _0x624982) {
          return _0x4500ec - _0x624982;
        },
        LUYVa: function (_0x5ec990, _0x24b802) {
          return _0x5ec990 + _0x24b802;
        },
        RBReX: function (_0x543db2, _0x308a0d) {
          return _0x543db2 + _0x308a0d;
        },
        biGXr: function (_0x1c6ac6, _0x1810e9) {
          return _0x1c6ac6 === _0x1810e9;
        },
        mWOON: function (_0x51aad6, _0x45ff9, _0x10d94d, _0x42e193, _0x1fcd8d) {
          const _0x9ae668 = _0x12bf;
          return _0x5b622d[_0x9ae668(1209)](_0x51aad6, _0x45ff9, _0x10d94d, _0x42e193, _0x1fcd8d);
        }
      };
    _0x5b622d[_0x4037c3(374)](_guardForm, _0x28ea76[_0x4037c3(402)](_0x1a9dda)[_0x4037c3(479)](_0x388abf => {
      const _0x5a990 = _0x4037c3;
      if (!isPlayerValid(_0x1a9dda)) return;
      if (_0x388abf.canceled) return;
      const _0x4146f8 = _0x388abf[_0x5a990(526)];
      if (_0x4146f8 === 52) {
        openDailyOrderBoard(_0x1a9dda, _0x523c91);
        return;
      }
      if (_0x4146f8 === 47 && _0x2424e4[_0x5a990(394)](_0x397a52[_0x5a990(459)], 0)) {
        const _0x4a17b0 = _0x397a52[_0x5a990(397)]("/");
        _0x4a17b0[_0x5a990(941)]();
        const _0x523329 = _0x4a17b0[_0x5a990(707)]("/");
        folderUi(_0x1a9dda, _0x523c91, _0x523329);
        return;
      }
      if (_0x1a9dda.hasTag(_0x5a990(860))) {
        if (_0x4146f8 === 48) {
          chooseFolderKindUi(_0x1a9dda, _0x523c91, _0x397a52);
          return;
        }
        if (_0x4146f8 === 49) {
          _0x2424e4[_0x5a990(1305)](createNewTradeItem, _0x1a9dda, _0x523c91, _0x397a52);
          return;
        }
        if (_0x4146f8 === 50) {
          deleteNodeUI(_0x1a9dda, _0x523c91, _0x397a52);
          return;
        }
        if (_0x4146f8 === 51) {
          editFolderProperties(_0x1a9dda, _0x523c91, _0x397a52);
          return;
        }
      }
      const _0x1857f5 = Math[_0x5a990(536)](_0x2424e4.FgOAQ(_0x4146f8, 9)),
        _0xdeec3b = _0x2424e4[_0x5a990(1032)](_0x4146f8, 9);
      if (_0x1857f5 < 1 || _0x1857f5 > 4 || _0xdeec3b < 1 || _0x2424e4.QebuY(_0xdeec3b, 7)) return;
      const _0x490661 = (_0x1857f5 - 1) * 7 + _0x2424e4[_0x5a990(449)](_0xdeec3b, 1),
        _0x15214b = _0x613dc6[_0x490661];
      if (!_0x15214b) return;
      if (_0x15214b.type === _0x5a990(1151)) {
        const _0x54da3c = _0x397a52[_0x5a990(459)] > 0 ? _0x2424e4[_0x5a990(659)](_0x397a52, "/") + _0x15214b[_0x5a990(451)] : _0x15214b.namespace;
        _0x2424e4[_0x5a990(1305)](folderUi, _0x1a9dda, _0x523c91, _0x54da3c);
        return;
      }
      if (_0x15214b.type === "folderSet") {
        const _0x423126 = _0x397a52[_0x5a990(459)] > 0 ? _0x2424e4.LUYVa(_0x2424e4.RBReX(_0x397a52, "/"), _0x15214b[_0x5a990(451)]) : _0x15214b[_0x5a990(451)];
        folderSetUi(_0x1a9dda, _0x523c91, _0x423126, 0);
        return;
      }
      if (_0x2424e4[_0x5a990(1383)](_0x15214b[_0x5a990(1116)], _0x5a990(370))) {
        _0x2424e4[_0x5a990(421)](enhancedTradeUi, _0x1a9dda, _0x523c91, _0x15214b, _0x397a52);
        return;
      }
    }), "folderUi");
  });
}
function removeSellItemAsAdmin(_0x12ebfc, _0x1f743a, _0x1e1b10, _0x1001e8, _0x18f028, _0xcafe6) {
  const _0x20d199 = _0x20c7bb,
    _0x1ccc75 = {
      driHn: function (_0x46bac2, _0x5d9d60) {
        return _0x46bac2 === _0x5d9d60;
      },
      DvNZu: "folderSet",
      UAfrB: function (_0xd35dec, _0x41c3e7, _0x293820, _0x5d112a, _0xe43d07) {
        return _0xd35dec(_0x41c3e7, _0x293820, _0x5d112a, _0xe43d07);
      }
    };
  if (!_0x12ebfc.hasTag(_0x20d199(860))) return;
  const _0x511aae = _0x1e1b10[_0x20d199(491)] || 0,
    _0x2526a6 = _0x12ebfc[_0x20d199(1098)]("minecraft:inventory")[_0x20d199(1344)],
    _0x46fade = _0x2526a6[_0x20d199(369)](_0x18f028[_0x20d199(1251)]());
  _0x46fade && _0x12ebfc[_0x20d199(1374)][_0x20d199(911)](_0x46fade, _0x12ebfc[_0x20d199(539)]);
  const _0x1bfae8 = storage_default[_0x20d199(680)](_0x12ebfc, _0xcafe6);
  for (let _0x18ee26 = 1; _0x18ee26 <= 9; _0x18ee26++) {
    const _0x167d8e = _0x1bfae8[_0x511aae + _0x18ee26];
    if (_0x167d8e) {
      const _0x33643a = _0x2526a6.addItem(_0x167d8e[_0x20d199(1251)]());
      _0x33643a && _0x12ebfc[_0x20d199(1374)][_0x20d199(911)](_0x33643a, _0x12ebfc[_0x20d199(539)]);
    }
  }
  const _0x397147 = loadTradeRoot(_0x1f743a);
  if (_0x397147) {
    const _0x580dd5 = getNode(_0x397147, _0x1001e8);
    if (_0x580dd5 && _0x580dd5[_0x20d199(641)]) {
      const _0x5c7610 = _0x580dd5.children[_0x20d199(671)](_0x51c611 => _0x51c611 && _0x51c611.namespace === _0x1e1b10[_0x20d199(451)]);
      _0x5c7610 !== -1 && (_0x580dd5[_0x20d199(641)][_0x20d199(949)](_0x5c7610, 1), saveTradeRoot(_0x1f743a, _0x397147));
    }
  }
  for (let _0x1852cc = 0; _0x1852cc < 10; _0x1852cc++) {
    storage_default[_0x20d199(963)](_0x12ebfc, _0xcafe6, _0x511aae + _0x1852cc, void 0);
  }
  sendItemTitle(_0x12ebfc, _0x20d199(1308), _0x18f028);
  const _0x1a2f7c = loadTradeRoot(_0x1f743a),
    _0x4b8496 = isItemShopRoot(_0x1a2f7c);
  if (!_0x4b8496) {
    if (_0x1ccc75.driHn(_0x1001e8, "") && _0x1a2f7c && _0x1a2f7c.shop_type === _0x1ccc75[_0x20d199(977)]) {
      const _0x49922a = _0x1ccc75[_0x20d199(646)](typeof _0x1e1b10[_0x20d199(735)], _0x20d199(829)) ? _0x1e1b10[_0x20d199(735)] : 0;
      _0x1ccc75[_0x20d199(1186)](folderSetUi, _0x12ebfc, _0x1f743a, "", fsetSlotToPage(_0x49922a));
    } else fsetOpenParent(_0x12ebfc, _0x1f743a, _0x1001e8);
  }
}
function enhancedTradeUi(_0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f) {
  const _0x5a081 = _0x20c7bb,
    _0x4bc69c = {
      DaokC: function (_0x1209fb, _0x253961, _0x21d06f, _0x38552f, _0x27641d) {
        return _0x1209fb(_0x253961, _0x21d06f, _0x38552f, _0x27641d);
      },
      EKKRU: function (_0xa983db, _0x1f98ef) {
        return _0xa983db(_0x1f98ef);
      },
      pvPeV: function (_0x31b2f4, _0x4d5e7e) {
        return _0x31b2f4 === _0x4d5e7e;
      },
      ZzAIP: _0x5a081(1169),
      FppZD: function (_0x1e981f, _0x528a33) {
        return _0x1e981f + _0x528a33;
      },
      gWzVs: "shopkeeper.admin.remove.sellitem",
      WzONx: _0x5a081(829),
      MLQou: "shopkeeper.folderset.delete.choice.item.body",
      JjxCU: function (_0x234c73, _0x1819a4, _0x5ac36a, _0xbf5301, _0x4d19ff, _0x11dcf3, _0x1aed50, _0x221ca4, _0x54fda8, _0x4b24cc, _0x2744d6) {
        return _0x234c73(_0x1819a4, _0x5ac36a, _0xbf5301, _0x4d19ff, _0x11dcf3, _0x1aed50, _0x221ca4, _0x54fda8, _0x4b24cc, _0x2744d6);
      },
      kURlK: function (_0x25e958, _0x36ab92) {
        return _0x25e958 === _0x36ab92;
      },
      nJRZX: _0x5a081(860),
      CSxzG: function (_0x201237, _0x2b94b6) {
        return _0x201237(_0x2b94b6);
      },
      GLHXD: function (_0x887b96, _0x52e9ce) {
        return _0x887b96 - _0x52e9ce;
      },
      duAkA: "enhancedTradeUi",
      ZiUdK: function (_0x4bf59e, _0x21bbe6, _0x498daf, _0x4d3e3b) {
        return _0x4bf59e(_0x21bbe6, _0x498daf, _0x4d3e3b);
      },
      oYZpW: function (_0x48dc9f, _0x2884e9, _0x2d1922) {
        return _0x48dc9f(_0x2884e9, _0x2d1922);
      },
      rraVX: _0x5a081(1044),
      EdFAV: function (_0x3c54c0, _0x520e2d) {
        return _0x3c54c0(_0x520e2d);
      },
      fBGVt: _0x5a081(1130),
      OKHhR: function (_0x4eef1f, _0x49eb4c) {
        return _0x4eef1f(_0x49eb4c);
      },
      vzTrU: function (_0x25cad5, _0x5d2b26) {
        return _0x25cad5 === _0x5d2b26;
      },
      BsHuU: _0x5a081(383),
      zAfax: "shopkeeper.craft.notenough",
      yRVOG: "shopkeeper.empty",
      TeQyN: _0x5a081(1197),
      Uctri: _0x5a081(1089),
      LTpmW: _0x5a081(1211),
      PEqYf: _0x5a081(1115),
      bkxgr: "shopkeeper.settings",
      FHdmO: _0x5a081(1168),
      nCYwL: "shopkeeper.back",
      gdfuK: _0x5a081(810),
      DtdkC: function (_0x543860, _0x15ef9d) {
        return _0x543860 > _0x15ef9d;
      },
      xCHHv: function (_0x3a758b, _0x1090a6) {
        return _0x3a758b < _0x1090a6;
      },
      CKjuQ: function (_0x281a38, _0x345164) {
        return _0x281a38(_0x345164);
      },
      KfxPy: function (_0x3cb7dc, _0x2e10ea) {
        return _0x3cb7dc(_0x2e10ea);
      },
      EoGoO: function (_0x20d81b, _0x38126a) {
        return _0x20d81b != _0x38126a;
      },
      mxLgx: function (_0xb85ac2, _0x5a84f0) {
        return _0xb85ac2 > _0x5a84f0;
      },
      wwGAR: _0x5a081(800),
      VBjSn: _0x5a081(769),
      vDqTQ: function (_0x11d7df, _0x3ec38e) {
        return _0x11d7df !== _0x3ec38e;
      },
      EHJDy: function (_0x2343c8, _0x34ffb4) {
        return _0x2343c8(_0x34ffb4);
      },
      jniIw: "minecraft:enchantable",
      mtnYm: function (_0x291754, _0x1ce39c) {
        return _0x291754(_0x1ce39c);
      },
      YkTxb: function (_0x4940ca, _0x446629) {
        return _0x4940ca < _0x446629;
      },
      Jdhxr: _0x5a081(1249)
    },
    _0x41800d = _0x2c4571.storage ?? _0x8eb777,
    _0x368255 = _0x2c4571.storageOffset || 0;
  log.open(_0x4bc69c[_0x5a081(599)], {
    player: _0x4f3891[_0x5a081(598)],
    rootName: _0x8eb777,
    storageName: _0x41800d,
    offset: _0x368255,
    link: _0xd05c5f
  });
  const _0x4f1598 = storage_default[_0x5a081(680)](_0x4f3891, _0x41800d);
  log[_0x5a081(835)](_0x5a081(614), {
    storageName: _0x41800d,
    slots: _0x4f1598 ? _0x4f1598[_0x5a081(459)] : 0
  });
  if (!_0x4f1598 || !_0x4f1598[_0x368255 + 0]) {
    if (_0x4f3891[_0x5a081(518)]("admin")) {
      _0x4bc69c[_0x5a081(760)](selectItemFromInventory, _0x4f3891, null, _0x288eb6 => {
        const _0x38184d = _0x5a081;
        if (_0x288eb6 === null) return;
        const _0x48619a = _0x4f3891[_0x38184d(1098)]("minecraft:inventory")[_0x38184d(1344)],
          _0x3f53b4 = _0x48619a[_0x38184d(940)](_0x288eb6);
        if (!_0x3f53b4) {
          sendTitle(_0x4f3891, "shopkeeper.item.invalid");
          return;
        }
        storage_default[_0x38184d(963)](_0x4f3891, _0x41800d, _0x368255 + 0, _0x3f53b4.clone());
        const _0x240fd2 = loadTradeRoot(_0x8eb777);
        if (_0x240fd2) {
          const _0x308086 = getNode(_0x240fd2, _0xd05c5f),
            _0x40ce8f = _0x308086 && _0x308086[_0x38184d(641)] ? _0x308086.children[_0x38184d(1071)](_0x5dd206 => _0x5dd206 && _0x5dd206[_0x38184d(451)] === _0x2c4571[_0x38184d(451)]) : null;
          _0x40ce8f && (_0x40ce8f[_0x38184d(562)] = _0x4bc69c[_0x38184d(523)](getItemDisplayName2, _0x3f53b4)), saveTradeRoot(_0x8eb777, _0x240fd2);
        }
        _0x2c4571[_0x38184d(562)] = getItemDisplayName2(_0x3f53b4), _0x144cf1.system[_0x38184d(986)](() => {
          const _0x955acb = _0x38184d;
          _0x4bc69c[_0x955acb(1282)](enhancedTradeUi, _0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f);
        });
      });
      return;
    } else {
      sendTitle(_0x4f3891, _0x5a081(1366));
      return;
    }
  }
  const _0x2238b7 = _0x4f1598[_0x4bc69c[_0x5a081(473)](_0x368255, 0)],
    _0x16e98f = _0x4bc69c[_0x5a081(760)](activeTrade, _0x8eb777, _0x2c4571, _0xd05c5f);
  if (!_0x16e98f) return;
  if (!_0x4f3891.hasTag(_0x5a081(860)) && !checkTradeAccess(_0x4f3891, _0x16e98f)) return;
  const _0x925de2 = _0x4bc69c[_0x5a081(1368)](playerShopProgress, _0x4f3891, _0x8eb777),
    _0x2e0bad = effectiveShopPolicy(_0x16e98f[_0x5a081(502)]),
    {
      level: _0x3baea0
    } = shopLevel(_0x925de2[_0x5a081(1187)], _0x2e0bad),
    _0x153d16 = _0xd05c5f ? _0xd05c5f + "/" + _0x16e98f[_0x5a081(688)][_0x5a081(451)] : _0x16e98f[_0x5a081(688)][_0x5a081(451)],
    _0x566746 = _0x2e0bad[_0x5a081(1068)] && getDailySpecialNamespace(_0x8eb777, _0x16e98f.root) === _0x153d16,
    _0x2635e9 = effectiveReduction(_0x4f3891, _0x8eb777, _0x16e98f[_0x5a081(502)], _0x16e98f[_0x5a081(688)], _0x153d16),
    _0x4aea7f = [];
  for (let _0x305414 = 1; _0x305414 <= 9; _0x305414++) {
    let _0x1c39a4 = null;
    try {
      typeof storage_default[_0x5a081(359)] === _0x5a081(712) && (_0x1c39a4 = storage_default[_0x5a081(359)](_0x4f3891, _0x41800d, _0x368255 + _0x305414));
    } catch (_0x1309ee) {}
    if (!_0x1c39a4) _0x1c39a4 = _0x4f1598[_0x368255 + _0x305414] ?? null;
    _0x4aea7f.push(_0x1c39a4);
  }
  const _0x308af4 = discountedIngredients(_0x4aea7f, _0x2635e9),
    _0x10c7cd = _0x4f3891.getComponent(_0x4bc69c[_0x5a081(1150)]).container,
    _0x204a93 = Number(_0x16e98f[_0x5a081(1265)].successRate ?? TRADE_SUCCESS_RATE);
  function _0x3b3936(_0x236f83) {
    const _0x49d6d9 = _0x5a081;
    if (_0x4bc69c.ZzAIP !== _0x49d6d9(493)) return itemKeyOf(_0x236f83);else {
      if (LTVVJg[_0x49d6d9(363)](_0x594e11, 0)) _0x492707(_0x4a138d, _0x464c68);else {
        if (_0x2afaf6 === 1) _0xf3ea5e(_0x4e930f, "shopkeeper.folder.shop.created", [_0x540e84]);else LTVVJg[_0x49d6d9(363)](_0x2320f2, 2) && (_0x5650ca(_0x378b68, _0x49d6d9(656), [_0x3dd953]), _0x7d0e8c[_0x49d6d9(1348)][_0x49d6d9(986)](() => _0x10cf55(_0x329bc3, _0x2eaffc, "", 0)));
      }
    }
  }
  const _0x4c3d48 = {};
  for (let _0xc00083 = 0; _0xc00083 < (_0x10c7cd[_0x5a081(664)] ?? 36); _0xc00083++) {
    const _0x161546 = _0x10c7cd.getItem(_0xc00083);
    if (!_0x161546) continue;
    const _0x17dbe0 = _0x4bc69c[_0x5a081(854)](_0x3b3936, _0x161546);
    _0x4c3d48[_0x17dbe0] = (_0x4c3d48[_0x17dbe0] || 0) + (_0x161546.amount ?? 0);
  }
  const _0x3838e6 = {
      x: {
        texture: _0x5a081(800),
        itemName: "",
        stackAmount: 1
      },
      i: {
        texture: _0x2238b7[_0x5a081(764)],
        itemName: _0x4bc69c.EdFAV(getItemDisplayName2, _0x2238b7),
        itemDesc: (() => {
          const _0x14f55b = _0x5a081,
            _0x4b6128 = getDisplayLore(_0x2238b7, _0x41800d, _0x4bc69c[_0x14f55b(473)](_0x368255, 0));
          if (_0x4f3891[_0x14f55b(518)]("admin")) {
            const _0xb31606 = _0x4b6128[_0x14f55b(819)] ? {
              rawtext: [..._0x4b6128.rawtext]
            } : {
              rawtext: []
            };
            return _0xb31606[_0x14f55b(819)].push({
              text: "\n"
            }, {
              translate: _0x4bc69c[_0x14f55b(439)]
            }), _0xb31606;
          }
          return _0x4b6128;
        })(),
        stackAmount: _0x2238b7[_0x5a081(989)] ?? 1,
        durability: getDisplayDurability(_0x2238b7),
        enchanted: hasGlint(_0x2238b7)
      },
      z: {
        texture: "minecraft:crafting_table",
        itemName: {
          translate: _0x5a081(761)
        },
        itemDesc: {
          rawtext: [{
            translate: _0x4bc69c[_0x5a081(467)],
            with: [_0x4bc69c.OKHhR(String, _0x204a93)]
          }]
        },
        stackAmount: 1,
        enchanted: !![]
      },
      y: {
        texture: _0x5a081(603),
        itemName: {
          translate: "shopkeeper.craft.multiple"
        },
        itemDesc: {
          rawtext: [{
            translate: _0x5a081(1277),
            with: [String(_0x204a93)]
          }]
        },
        stackAmount: 64
      },
      r: {
        texture: "textures/blocks/glass_brown",
        itemName: "",
        stackAmount: 1
      },
      q: {
        texture: "textures/items/chain",
        itemName: "",
        stackAmount: 1
      },
      _: {
        texture: _0x5a081(859),
        itemName: "",
        stackAmount: 1
      }
    },
    _0xddc3ae = [{
      text: "\n"
    }, {
      translate: _0x5a081(1342),
      with: [String(shopLevel(_0x16e98f[_0x5a081(502)][_0x5a081(1129)], _0x2e0bad).level), String(_0x3baea0), String(_0x2635e9)]
    }, {
      text: "\n"
    }, ..._0x4bc69c.ZiUdK(stockDisplay, _0x8eb777, _0x16e98f[_0x5a081(502)], _0x16e98f[_0x5a081(688)])[_0x5a081(819)]];
  if (_0x566746) _0xddc3ae[_0x5a081(943)]({
    text: "\n"
  }, {
    translate: "shopkeeper.daily.special.label"
  });
  if (_0x16e98f[_0x5a081(1265)][_0x5a081(720)] > 0) {
    if (_0x4bc69c[_0x5a081(496)](_0x5a081(412), "enPFq")) {
      if (typeof _0x53858a[_0x5a081(875)] === "function") _0x7f8801.flushNow();
    } else _0xddc3ae.push({
      text: "\n"
    }, {
      translate: "shopkeeper.quest.info",
      with: [String(questStatus(_0x925de2, _0x16e98f[_0x5a081(688)], _0x16e98f[_0x5a081(1265)])[_0x5a081(1189)]), String(questStatus(_0x925de2, _0x16e98f[_0x5a081(688)], _0x16e98f[_0x5a081(1265)]).target)]
    });
  }
  _0x16e98f[_0x5a081(1265)][_0x5a081(1039)] && _0x16e98f.policy[_0x5a081(1039)] !== _0x5a081(434) && _0xddc3ae[_0x5a081(943)]({
    text: "\n"
  }, {
    translate: "shopkeeper.season." + _0x16e98f[_0x5a081(1265)].season
  });
  _0x3838e6.i.itemDesc.rawtext.push(..._0xddc3ae);
  const _0x3cc67e = [],
    _0x242ff3 = ["a", "b", "c", "d", "f", "g", "h", "j", "k"];
  for (let _0x1cd5fa = 0; _0x1cd5fa < 9; _0x1cd5fa++) {
    const _0x45d274 = _0x308af4[_0x1cd5fa],
      _0x300142 = _0x242ff3[_0x1cd5fa];
    if (_0x45d274) {
      const _0x2b4f68 = _0x3b3936(_0x45d274),
        _0x103d07 = ingredientAmount(_0x45d274),
        _0x103f8c = _0x4c3d48[_0x2b4f68] || 0,
        _0x1c6400 = Math[_0x5a081(955)](0, _0x103d07 - _0x103f8c);
      _0x4c3d48[_0x2b4f68] = Math[_0x5a081(955)](0, _0x103f8c - _0x103d07);
      const _0x462f77 = getEnchantmentInfo(_0x45d274);
      let _0x3f752f = getDisplayLore(_0x45d274, _0x41800d, _0x368255 + _0x1cd5fa + 1);
      _0x3f752f[_0x5a081(819)].push({
        text: _0x5a081(538)
      }), _0x3f752f.rawtext[_0x5a081(943)]({
        text: "\n"
      }, {
        translate: _0x5a081(1190)
      }, {
        text: "\xA7l\xA76" + _0x103d07
      }), _0x3f752f[_0x5a081(819)].push({
        text: _0x5a081(538)
      });
      _0x4f3891[_0x5a081(518)](_0x5a081(860)) && _0x3f752f[_0x5a081(819)].push({
        text: "\n\n"
      }, {
        translate: _0x5a081(919)
      });
      const _0x34a7e9 = _0x1c6400 === 0;
      _0x3f752f.rawtext[_0x5a081(943)]({
        text: "\n"
      }, {
        translate: _0x34a7e9 ? _0x4bc69c.BsHuU : _0x4bc69c[_0x5a081(647)]
      });
      const _0x185414 = getStatusRaw(_0x45d274, _0x1c6400, _0x103d07);
      _0x3cc67e[_0x5a081(943)](..._0x185414[_0x5a081(819)]), _0x3838e6[_0x300142] = {
        texture: _0x45d274[_0x5a081(764)],
        itemName: getItemDisplayName2(_0x45d274),
        itemDesc: _0x3f752f,
        stackAmount: Math.min(_0x103d07, 64),
        durability: getDisplayDurability(_0x45d274),
        enchanted: _0x462f77.hasEnchants
      };
    } else _0x4f3891[_0x5a081(518)]("admin") ? _0x3838e6[_0x300142] = {
      texture: _0x5a081(575),
      itemName: "",
      stackAmount: 1
    } : _0x3838e6[_0x300142] = {
      texture: _0x5a081(800),
      itemName: {
        translate: _0x4bc69c[_0x5a081(373)]
      },
      itemDesc: {
        rawtext: [{
          translate: _0x4bc69c.TeQyN
        }]
      },
      stackAmount: 1
    };
  }
  const _0x376ab = [_0x4bc69c[_0x5a081(896)], _0x4bc69c[_0x5a081(365)], _0x5a081(1089), "qqqqqqqqq", _0x4bc69c.PEqYf, _0x5a081(749)];
  _0x4f3891[_0x5a081(518)]("admin") ? (_0x3838e6.p = {
    texture: _0x5a081(447),
    itemName: {
      translate: _0x4bc69c[_0x5a081(1242)]
    },
    itemDesc: {
      rawtext: [{
        translate: _0x5a081(945)
      }]
    },
    stackAmount: 1
  }, _0x3838e6.e = {
    texture: _0x5a081(1364),
    itemName: {
      translate: _0x5a081(348)
    },
    itemDesc: {
      rawtext: [{
        translate: _0x5a081(458)
      }]
    },
    stackAmount: 1
  }, _0x3838e6.m = {
    texture: "textures/ui/cancel",
    itemName: {
      translate: "shopkeeper.ingredient.remove"
    },
    itemDesc: {
      rawtext: [{
        translate: _0x5a081(545)
      }]
    },
    stackAmount: 1
  }, _0x3838e6["."] = {
    texture: _0x4bc69c[_0x5a081(1290)],
    itemName: {
      translate: _0x4bc69c[_0x5a081(600)]
    },
    itemDesc: {
      rawtext: [{
        translate: _0x5a081(742)
      }]
    },
    stackAmount: 1
  }) : (_0x376ab[5] = "rrrx1xrro", _0x3838e6["1"] = {
    texture: _0x5a081(1168),
    itemName: {
      translate: _0x5a081(1269)
    },
    itemDesc: {
      rawtext: [{
        translate: "shopkeeper.back.hint"
      }]
    },
    stackAmount: 1
  });
  _0x3838e6.o = {
    texture: _0x5a081(569),
    itemName: {
      translate: _0x4bc69c[_0x5a081(1083)]
    },
    itemDesc: {
      rawtext: [{
        translate: "shopkeeper.daily.order.title"
      }]
    },
    stackAmount: 1,
    enchanted: !![]
  };
  if (_0x4bc69c.DtdkC(_0x3cc67e[_0x5a081(459)], 0)) for (const _0x5bbb6f of ["z", "y"]) {
    if (!_0x3838e6[_0x5bbb6f]) continue;
    const _0x2889fa = _0x3838e6[_0x5bbb6f][_0x5a081(687)] || {
        rawtext: []
      },
      _0x4956ff = {
        rawtext: []
      };
    if (_0x2889fa[_0x5a081(819)]) _0x4956ff[_0x5a081(819)][_0x5a081(943)](..._0x2889fa[_0x5a081(819)]);else {
      if (_0x4bc69c[_0x5a081(496)](typeof _0x2889fa, "string")) _0x4956ff[_0x5a081(819)].push({
        text: _0x2889fa
      });
    }
    _0x4956ff[_0x5a081(819)][_0x5a081(943)]({
      text: "\n"
    }), _0x4956ff[_0x5a081(819)][_0x5a081(943)](..._0x3cc67e), _0x3838e6[_0x5bbb6f][_0x5a081(687)] = _0x4956ff;
  }
  let _0x3ed2e2 = _0x5a081(966);
  if (_0x2238b7 && _0x2238b7[_0x5a081(764)].includes(_0x5a081(607)) && _0x41800d !== void 0) {
    _0x3ed2e2 = "81";
    const _0x3be103 = loadShulkerCache(_0x41800d, _0x368255 + 0),
      _0x3cb7a4 = _0x5a081(791);
    let _0x857aaa = "",
      _0x171673 = "",
      _0x13e528 = "";
    for (let _0x233244 = 0; _0x233244 < 27; _0x233244++) {
      const _0x3bc5e3 = _0x3cb7a4[_0x233244];
      if (_0x4bc69c.xCHHv(_0x233244, 9)) _0x857aaa += _0x3bc5e3;else {
        if (_0x233244 < 18) _0x171673 += _0x3bc5e3;else _0x13e528 += _0x3bc5e3;
      }
      if (_0x3be103 && _0x3be103.items && _0x3be103.items[_0x233244]) {
        const _0x538a68 = _0x3be103.items[_0x233244],
          _0x93bf61 = getItemDisplayName2(_0x538a68),
          _0x1143bd = [];
        if (_0x538a68.enchantments && _0x538a68[_0x5a081(883)].length > 0) for (let _0x57aefb = 0; _0x57aefb < _0x538a68[_0x5a081(883)][_0x5a081(459)]; _0x57aefb++) {
          const _0x5a23fd = _0x538a68.enchantments[_0x57aefb],
            _0x57940b = ENCHANT_MAP[_0x5a23fd.id] || _0x5a23fd.id,
            _0x68950f = ENCHANT_MAP[_0x4bc69c[_0x5a081(594)](String, _0x5a23fd.level)] || String(_0x5a23fd.level);
          _0x1143bd[_0x5a081(943)]({
            text: "\xA79"
          }, {
            translate: _0x57940b
          }, {
            text: " "
          }), ENCHANT_MAP[String(_0x5a23fd.level)] ? _0x1143bd[_0x5a081(943)]({
            translate: _0x68950f
          }) : _0x1143bd[_0x5a081(943)]({
            text: _0x68950f
          }), _0x57aefb < _0x538a68[_0x5a081(883)][_0x5a081(459)] - 1 && _0x1143bd[_0x5a081(943)]({
            text: "\n"
          });
        }
        if (_0x538a68[_0x5a081(1023)] && _0x538a68.lore[_0x5a081(459)] > 0) {
          _0x538a68[_0x5a081(883)] && _0x538a68[_0x5a081(883)][_0x5a081(459)] > 0 && _0x1143bd.push({
            text: "\n"
          });
          for (let _0x589aeb = 0; _0x589aeb < _0x538a68[_0x5a081(1023)].length; _0x589aeb++) {
            _0x1143bd[_0x5a081(943)]({
              text: "\xA77" + _0x538a68[_0x5a081(1023)][_0x589aeb]
            }), _0x589aeb < _0x538a68.lore[_0x5a081(459)] - 1 && _0x1143bd.push({
              text: "\n"
            });
          }
        }
        if (_0x538a68[_0x5a081(1206)] && _0x4bc69c.DtdkC(_0x538a68[_0x5a081(1206)][_0x5a081(459)], 0)) {
          if (_0x1143bd.length > 0) _0x1143bd[_0x5a081(943)]({
            text: "\n"
          });
          for (let _0x56bf02 = 0; _0x56bf02 < _0x538a68[_0x5a081(1206)][_0x5a081(459)]; _0x56bf02++) {
            const _0x2a54b3 = _0x538a68[_0x5a081(1206)][_0x56bf02],
              _0x49ae58 = [];
            _0x49ae58.push({
              text: "\xA7i"
            }), _0x49ae58[_0x5a081(943)](..._0x4bc69c[_0x5a081(851)](getItemNameRawtext, _0x2a54b3));
            if (_0x2a54b3[_0x5a081(989)] && _0x2a54b3.amount > 1) _0x49ae58[_0x5a081(943)]({
              text: " x" + _0x2a54b3[_0x5a081(989)]
            });
            _0x1143bd[_0x5a081(943)](..._0x49ae58);
            if (_0x56bf02 < _0x538a68.contents[_0x5a081(459)] - 1) _0x1143bd.push({
              text: ", "
            });
          }
        }
        _0x3838e6[_0x3bc5e3] = {
          texture: _0x538a68[_0x5a081(764)],
          itemName: _0x93bf61,
          stackAmount: _0x538a68[_0x5a081(989)] || 1,
          durability: _0x4bc69c[_0x5a081(886)](_0x538a68[_0x5a081(1336)], null) ? _0x538a68[_0x5a081(1336)] : void 0
        }, _0x1143bd[_0x5a081(459)] > 0 && (_0x3838e6[_0x3bc5e3][_0x5a081(687)] = {
          rawtext: _0x1143bd
        }), _0x538a68.enchantments && _0x4bc69c.mxLgx(_0x538a68[_0x5a081(883)][_0x5a081(459)], 0) && (_0x3838e6[_0x3bc5e3].enchanted = !![]);
      } else _0x3838e6[_0x3bc5e3] = {
        texture: _0x4bc69c[_0x5a081(980)],
        itemName: {
          translate: _0x4bc69c.yRVOG
        },
        stackAmount: 1
      };
    }
    _0x376ab.push(_0x857aaa, _0x171673, _0x13e528);
  } else {
    if (_0x2238b7 && _0x2238b7.typeId.includes(_0x5a081(758)) && _0x41800d !== void 0) {
      const _0x2d0b2a = _0x2238b7.getComponent(_0x5a081(1044)),
        _0x35e7c6 = [];
      if (_0x2d0b2a && _0x2d0b2a[_0x5a081(1344)]) for (let _0x8b17df = 0; _0x8b17df < _0x2d0b2a[_0x5a081(1344)][_0x5a081(664)]; _0x8b17df++) {
        const _0x1dd089 = _0x2d0b2a.container.getItem(_0x8b17df);
        if (_0x1dd089) _0x35e7c6.push(_0x1dd089);
      }
      if (_0x4bc69c[_0x5a081(797)](_0x35e7c6[_0x5a081(459)], 0)) {
        _0x3ed2e2 = "81";
        const _0x57ed33 = _0x4bc69c[_0x5a081(1201)];
        let _0x48eb14 = "",
          _0x1698c1 = "",
          _0x1bff90 = "";
        const _0x3e0577 = Math[_0x5a081(1208)](27, _0x35e7c6[_0x5a081(459)]);
        for (let _0x519e82 = 0; _0x519e82 < 27; _0x519e82++) {
          const _0x36a5e8 = _0x57ed33[_0x519e82];
          if (_0x519e82 < 9) _0x48eb14 += _0x36a5e8;else {
            if (_0x519e82 < 18) _0x1698c1 += _0x36a5e8;else _0x1bff90 += _0x36a5e8;
          }
          if (_0x519e82 < _0x3e0577 && _0x35e7c6[_0x519e82]) {
            const _0x2af382 = _0x35e7c6[_0x519e82];
            let _0x424bd6 = _0x2af382[_0x5a081(764)];
            if (_0x2af382.nameTag && _0x4bc69c[_0x5a081(964)](_0x2af382[_0x5a081(942)].trim(), "")) _0x424bd6 = _0x2af382.nameTag;else {
              const _0x3120f9 = _0x4bc69c[_0x5a081(567)](plainLocalizationKey, _0x2af382);
              if (_0x3120f9) _0x424bd6 = {
                translate: _0x3120f9
              };
            }
            const _0x9bcbd4 = [],
              _0x2a04b9 = _0x2af382[_0x5a081(1098)] && _0x2af382.getComponent(_0x4bc69c.jniIw);
            if (_0x2a04b9) {
              const _0x74f8de = _0x2a04b9.getEnchantments();
              if (_0x74f8de && _0x74f8de.length > 0) for (let _0x4c8fcd = 0; _0x4c8fcd < _0x74f8de[_0x5a081(459)]; _0x4c8fcd++) {
                const _0x438341 = _0x74f8de[_0x4c8fcd],
                  _0x5c75e5 = ENCHANT_MAP[_0x438341.type.id] || _0x438341[_0x5a081(1116)].id,
                  _0x3fcfc8 = ENCHANT_MAP[String(_0x438341[_0x5a081(706)])] || _0x4bc69c.mtnYm(String, _0x438341[_0x5a081(706)]);
                _0x9bcbd4.push({
                  text: "\xA79"
                }, {
                  translate: _0x5c75e5
                }, {
                  text: " "
                }), ENCHANT_MAP[String(_0x438341[_0x5a081(706)])] ? _0x9bcbd4[_0x5a081(943)]({
                  translate: _0x3fcfc8
                }) : _0x9bcbd4.push({
                  text: _0x3fcfc8
                }), _0x4c8fcd < _0x74f8de.length - 1 && _0x9bcbd4[_0x5a081(943)]({
                  text: "\n"
                });
              }
            }
            const _0x379c1f = _0x2af382.getLore && _0x2af382[_0x5a081(430)]();
            if (_0x379c1f && _0x379c1f[_0x5a081(459)] > 0) {
              _0x9bcbd4[_0x5a081(459)] > 0 && _0x9bcbd4[_0x5a081(943)]({
                text: "\n"
              });
              for (let _0xb5fc0b = 0; _0xb5fc0b < _0x379c1f[_0x5a081(459)]; _0xb5fc0b++) {
                _0x9bcbd4[_0x5a081(943)]({
                  text: "\xA77" + _0x379c1f[_0xb5fc0b]
                }), _0x4bc69c[_0x5a081(990)](_0xb5fc0b, _0x379c1f.length - 1) && _0x9bcbd4.push({
                  text: "\n"
                });
              }
            }
            _0x3838e6[_0x36a5e8] = {
              texture: _0x2af382[_0x5a081(764)],
              itemName: _0x424bd6,
              stackAmount: _0x2af382.amount || 1
            };
            const _0x580c64 = _0x2af382[_0x5a081(1098)] && _0x2af382[_0x5a081(1098)](_0x4bc69c[_0x5a081(1029)]);
            _0x580c64 && (_0x3838e6[_0x36a5e8].durability = _0x580c64[_0x5a081(1336)]), _0x9bcbd4[_0x5a081(459)] > 0 && (_0x3838e6[_0x36a5e8].itemDesc = {
              rawtext: _0x9bcbd4
            }), _0x2a04b9 && _0x2a04b9.getEnchantments && _0x2a04b9[_0x5a081(482)]().length > 0 && (_0x3838e6[_0x36a5e8].enchanted = !![]);
          } else _0x3838e6[_0x36a5e8] = {
            texture: _0x5a081(800),
            itemName: {
              translate: _0x5a081(1351)
            },
            stackAmount: 1
          };
        }
        _0x376ab.push(_0x48eb14, _0x1698c1, _0x1bff90);
      }
    }
  }
  _guardForm(new ChestFormData(_0x3ed2e2)[_0x5a081(1352)](getItemDisplayName2(_0x2238b7)).pattern(_0x376ab, _0x3838e6).show(_0x4f3891)[_0x5a081(479)](_0x24ec1d => {
    const _0x103940 = _0x5a081,
      _0x13dbcb = {
        okJOx: function (_0x556bd3, _0x6618a, _0x43bd02, _0x29b8dd, _0x35c69d) {
          return _0x556bd3(_0x6618a, _0x43bd02, _0x29b8dd, _0x35c69d);
        },
        EPCHa: function (_0x2fb4c9, _0x1d16ae) {
          return _0x2fb4c9 + _0x1d16ae;
        }
      };
    if (_0x24ec1d.canceled) return;
    const _0x4717eb = _0x24ec1d[_0x103940(526)];
    if (_0x4717eb === 53) {
      openDailyOrderBoard(_0x4f3891, _0x8eb777);
      return;
    }
    if (_0x4717eb === 13 && _0x4f3891[_0x103940(518)]("admin")) {
      const _0x3070e3 = [],
        _0x10b5f3 = _0x2c4571.storageOffset || 0;
      for (let _0x4e45 = 0; _0x4e45 < 10; _0x4e45++) _0x3070e3.push({
        storage: _0x41800d,
        offset: _0x10b5f3 + _0x4e45
      });
      deleteChoiceForm(_0x4f3891, {
        refs: _0x3070e3,
        bodyKey: _0x4bc69c.MLQou,
        bodyParams: [rawMessageToText2(getItemDisplayName2(_0x2238b7))],
        onConfirmed: () => {
          const _0x242fdc = _0x103940,
            _0x5bc128 = loadTradeRoot(_0x8eb777),
            _0x1a1e1a = _0x5bc128 ? getNode(_0x5bc128, _0xd05c5f) : null,
            _0x815b92 = _0x1a1e1a && _0x1a1e1a[_0x242fdc(641)] ? _0x1a1e1a[_0x242fdc(641)][_0x242fdc(1071)](_0x2d881f => _0x2d881f && _0x2d881f.namespace === _0x2c4571[_0x242fdc(451)]) : null;
          _0x2c4571[_0x242fdc(994)] = _0x815b92 && typeof _0x815b92[_0x242fdc(735)] === _0x4bc69c[_0x242fdc(703)] ? _0x815b92.slot : void 0, removeSellItemAsAdmin(_0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f, _0x2238b7, _0x41800d);
        },
        onCancel: () => _0x144cf1[_0x103940(1348)].run(() => enhancedTradeUi(_0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f))
      });
      return;
    }
    if (_0x4717eb === 10) {
      if (_0x4bc69c[_0x103940(363)](_0x103940(1236), "rXbxW")) {
        craftOnce(_0x4f3891, _0x41800d, _0x2238b7, _0x308af4, _0x10c7cd, _0x8eb777, _0x2c4571, _0xd05c5f, _0x204a93, JSON[_0x103940(1324)](_0x16e98f[_0x103940(1265)]));
        return;
      } else {
        _0x4d9b4f(_0x3dd3ae, _0x5a628e, _0x4b1960, "");
        return;
      }
    }
    if (_0x4717eb === 16) {
      _0x4bc69c[_0x103940(626)](craftMultiple, _0x4f3891, _0x41800d, _0x2238b7, _0x308af4, _0x10c7cd, _0x8eb777, _0x2c4571, _0xd05c5f, _0x204a93, JSON[_0x103940(1324)](_0x16e98f[_0x103940(1265)]));
      return;
    }
    if (_0x4717eb === 47) {
      const _0x300a68 = loadTradeRoot(_0x8eb777),
        _0x474a11 = isItemShopRoot(_0x300a68);
      if (!_0x474a11) {
        if (_0xd05c5f === "" && _0x300a68 && _0x4bc69c[_0x103940(363)](_0x300a68.shop_type, _0x103940(1373))) {
          const _0x373c98 = _0x4bc69c.kURlK(typeof _0x2c4571[_0x103940(735)], _0x103940(829)) ? _0x2c4571[_0x103940(735)] : 0;
          folderSetUi(_0x4f3891, _0x8eb777, "", fsetSlotToPage(_0x373c98));
        } else fsetOpenParent(_0x4f3891, _0x8eb777, _0xd05c5f);
      }
      return;
    }
    if (_0x4f3891[_0x103940(518)](_0x4bc69c[_0x103940(798)])) {
      if (_0x4717eb === 48) {
        setting(_0x4f3891, _0x2c4571, _0x8eb777, _0xd05c5f);
        return;
      }
      if (_0x4717eb === 49) {
        changeSellItem(_0x4f3891, _0x41800d, _0x10c7cd, _0x8eb777, _0x2c4571, _0xd05c5f);
        return;
      }
      if (_0x4717eb === 50) {
        removeIngredient(_0x4f3891, _0x41800d, _0x2238b7, _0x10c7cd, _0x8eb777, _0x2c4571, _0xd05c5f);
        return;
      }
    }
    if (!_0x4f3891[_0x103940(518)](_0x103940(860))) {
      if (_0x4717eb === 49) {
        const _0x478de3 = loadTradeRoot(_0x8eb777),
          _0x507aa9 = isItemShopRoot(_0x478de3);
        if (!_0x507aa9) {
          if (_0xd05c5f === "" && _0x478de3 && _0x478de3[_0x103940(1322)] === _0x103940(1373)) {
            const _0x304d79 = typeof _0x2c4571[_0x103940(735)] === _0x103940(829) ? _0x2c4571.slot : 0;
            folderSetUi(_0x4f3891, _0x8eb777, "", _0x4bc69c[_0x103940(854)](fsetSlotToPage, _0x304d79));
          } else fsetOpenParent(_0x4f3891, _0x8eb777, _0xd05c5f);
        }
        return;
      }
    }
    if (_0x4f3891[_0x103940(518)](_0x103940(860))) {
      if (_0x4717eb >= 36 && _0x4717eb <= 44) {
        const _0x20e92b = _0x4bc69c.GLHXD(_0x4717eb, 36) + 1;
        selectItemFromInventory(_0x4f3891, _0x308af4[_0x20e92b - 1], _0x104233 => {
          const _0x1aa606 = _0x103940;
          if (_0x104233 === null) {
            _0x13dbcb.okJOx(enhancedTradeUi, _0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f);
            return;
          }
          const _0x519a1e = _0x10c7cd.getItem(_0x104233);
          if (!_0x519a1e) {
            enhancedTradeUi(_0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f);
            return;
          }
          storage_default.set(_0x4f3891, _0x41800d, _0x13dbcb[_0x1aa606(887)](_0x368255, _0x20e92b), _0x519a1e), enhancedTradeUi(_0x4f3891, _0x8eb777, _0x2c4571, _0xd05c5f);
        });
        return;
      }
    }
  }), "enhancedTradeUi");
}
function setting(_0x5cd0b2, _0x4b29cc, _0x3db1ed, _0x4d2e7f) {
  const _0x5a4306 = _0x20c7bb,
    _0x1e62a6 = {
      OFPOt: _0x5a4306(860),
      LsqJy: function (_0x1ead9a, _0x154825) {
        return _0x1ead9a !== _0x154825;
      },
      rIKDB: function (_0x233d6a) {
        return _0x233d6a();
      },
      kPnHg: function (_0x58be6d, _0xe6d73d) {
        return _0x58be6d === _0xe6d73d;
      },
      JZInd: function (_0x4b5f0e, _0x287958, _0x46e431, _0x127fba, _0xae26f2) {
        return _0x4b5f0e(_0x287958, _0x46e431, _0x127fba, _0xae26f2);
      },
      KsVfS: function (_0x539932, _0x50cc9f, _0x4cbfb9, _0x4fa990, _0x28661e, _0x13a592) {
        return _0x539932(_0x50cc9f, _0x4cbfb9, _0x4fa990, _0x28661e, _0x13a592);
      },
      jxkPw: function (_0x530349, _0x101f80) {
        return _0x530349(_0x101f80);
      },
      nsQiB: function (_0x4359a6, _0x299106, _0x33832b) {
        return _0x4359a6(_0x299106, _0x33832b);
      },
      wRrYu: function (_0x2891e7, _0xf8eaa, _0x2ebfeb) {
        return _0x2891e7(_0xf8eaa, _0x2ebfeb);
      },
      UuHnZ: _0x5a4306(918),
      pAkfk: function (_0x4143e0, _0x425497, _0x55b2bb) {
        return _0x4143e0(_0x425497, _0x55b2bb);
      }
    };
  if (!_0x5cd0b2.hasTag("admin")) return;
  const _0x5dedaa = () => enhancedTradeUi(_0x5cd0b2, _0x3db1ed, _0x4b29cc, _0x4d2e7f),
    _0x2b86dd = loadTradeRoot(_0x3db1ed),
    _0x5a0f43 = (_0x1e62a6.wRrYu(getNode, _0x2b86dd, _0x4d2e7f)?.[_0x5a4306(641)] || [])[_0x5a4306(1071)](_0x4c2792 => _0x4c2792?.[_0x5a4306(451)] === _0x4b29cc[_0x5a4306(451)]);
  if (!_0x5a0f43) return _0x5dedaa();
  const _0x98d1fb = new ActionFormData4()[_0x5a4306(1352)]({
    translate: _0x1e62a6[_0x5a4306(515)]
  })[_0x5a4306(463)]({
    rawtext: [{
      translate: _0x5a4306(385)
    }, {
      text: " " + (_0x5a0f43.offerPolicyId || _0x5a4306(1319))
    }, {
      text: "\n"
    }, {
      translate: _0x5a4306(591)
    }]
  });
  _0x98d1fb.button({
    translate: _0x5a4306(934)
  }), _0x98d1fb[_0x5a4306(730)]({
    translate: _0x5a4306(455)
  }), _0x98d1fb[_0x5a4306(730)]({
    translate: _0x5a4306(1202)
  }), _0x98d1fb[_0x5a4306(730)]({
    translate: "shopkeeper.policy.edit.current"
  }), _0x98d1fb[_0x5a4306(730)]({
    translate: _0x5a4306(602)
  }), _0x98d1fb[_0x5a4306(730)]({
    translate: _0x5a4306(427)
  }), _0x98d1fb.button({
    translate: "shopkeeper.back"
  }), _0x1e62a6[_0x5a4306(855)](_guardForm, _0x98d1fb[_0x5a4306(402)](_0x5cd0b2).then(_0xb081bf => {
    const _0x3c95e3 = _0x5a4306,
      _0x3bf92a = {
        iOlJN: function (_0x4e79e2, _0x1d41a4) {
          return _0x4e79e2(_0x1d41a4);
        },
        avGOy: function (_0x4c5c90, _0x2d1b13, _0x351dd8) {
          return _0x4c5c90(_0x2d1b13, _0x351dd8);
        }
      };
    if (!_0x5cd0b2[_0x3c95e3(518)](_0x1e62a6[_0x3c95e3(613)])) return;
    if (_0xb081bf[_0x3c95e3(505)] || _0xb081bf.selection === 6) return _0x1e62a6[_0x3c95e3(681)](_0x5dedaa);
    if (_0xb081bf[_0x3c95e3(526)] === 1) return policyLibraryUi(_0x5cd0b2, policyStore, _0x5dedaa);
    if (_0x1e62a6.kPnHg(_0xb081bf[_0x3c95e3(526)], 2)) return _0x1e62a6[_0x3c95e3(1051)](editAssignedSuccessRateUi, _0x5cd0b2, policyStore, _0x5a0f43[_0x3c95e3(1304)] || _0x3c95e3(1319), _0x5dedaa);
    if (_0x1e62a6[_0x3c95e3(413)](_0xb081bf[_0x3c95e3(526)], 3)) return _0x1e62a6[_0x3c95e3(1317)](editAssignedPolicyUi, _0x5cd0b2, policyStore, "offer", _0x5a0f43.offerPolicyId || "default", _0x5dedaa);
    if (_0xb081bf[_0x3c95e3(526)] === 0) return policySelectUi(_0x5cd0b2, policyStore, "offer", _0x5a0f43[_0x3c95e3(1304)] || _0x3c95e3(1319), _0x483ae3 => {
      const _0x4723cc = _0x3c95e3,
        _0x38bdfe = _0x3bf92a[_0x4723cc(381)](loadTradeRoot, _0x3db1ed);
      if (!_0x38bdfe) return _0x5dedaa();
      const _0xcaab01 = JSON[_0x4723cc(1223)](JSON[_0x4723cc(1324)](_0x38bdfe)),
        _0x5805bb = (getNode(_0xcaab01, _0x4d2e7f)?.[_0x4723cc(641)] || [])[_0x4723cc(1071)](_0x117c54 => _0x117c54?.[_0x4723cc(451)] === _0x4b29cc[_0x4723cc(451)]);
      if (!_0x5805bb || !policyStore[_0x4723cc(667)]("offer", _0x483ae3)) return _0x5dedaa();
      _0x5805bb.offerPolicyId = _0x483ae3;
      if (!saveTradeRoot(_0x3db1ed, _0xcaab01)) sendTitle(_0x5cd0b2, _0x4723cc(816));
      _0x5dedaa();
    }, _0x5dedaa);
    if (_0xb081bf[_0x3c95e3(526)] === 5) {
      const _0x19fe6e = effectiveOfferPolicy(_0x5a0f43),
        _0xbf9e65 = new ActionFormData4()[_0x3c95e3(1352)]({
          translate: _0x3c95e3(427)
        })[_0x3c95e3(463)]({
          translate: _0x3c95e3(1253),
          with: [_0x1e62a6[_0x3c95e3(1285)](String, _0x19fe6e?.[_0x3c95e3(1288)] || 0)]
        })[_0x3c95e3(730)]({
          translate: "shopkeeper.policy.apply.now"
        }).button({
          translate: "shopkeeper.back"
        });
      return _guardForm(_0xbf9e65[_0x3c95e3(402)](_0x5cd0b2)[_0x3c95e3(479)](_0x5c3d3b => {
        const _0x4d2caa = _0x3c95e3;
        if (!_0x5cd0b2.hasTag(_0x1e62a6[_0x4d2caa(613)])) return;
        if (_0x1e62a6.LsqJy(_0x5c3d3b[_0x4d2caa(526)], 0) || !_0x19fe6e) return _0x5dedaa();
        const _0x348e79 = loadTradeRoot(_0x3db1ed);
        if (!_0x348e79) return _0x5dedaa();
        const _0x558ed0 = JSON.parse(JSON[_0x4d2caa(1324)](_0x348e79)),
          _0x461944 = (getNode(_0x558ed0, _0x4d2e7f)?.[_0x4d2caa(641)] || []).find(_0x1902fd => _0x1902fd?.[_0x4d2caa(451)] === _0x4b29cc.namespace);
        if (_0x461944) {
          _0x461944[_0x4d2caa(773)] = _0x19fe6e[_0x4d2caa(1288)], _0x461944.restockAt = Date.now() + _0x19fe6e[_0x4d2caa(740)] * 6e4;
          if (!saveTradeRoot(_0x3db1ed, _0x558ed0)) sendTitle(_0x5cd0b2, _0x4d2caa(816));
        }
        _0x5dedaa();
      }).catch(_0x151457 => log[_0x3c95e3(618)]("ui", _0x151457, {
        action: "policy.refill",
        rootName: _0x3db1ed
      })), _0x3c95e3(1226));
    }
    const _0x2ed2d2 = _0x5a0f43[_0x3c95e3(654)] ?? _0x3db1ed,
      _0x215618 = _0x5a0f43[_0x3c95e3(491)] || 0,
      _0x20b124 = storage_default[_0x3c95e3(680)](_0x5cd0b2, _0x2ed2d2) || [],
      _0x57c302 = [];
    for (let _0x2b1ddb = 1; _0x2b1ddb <= 9; _0x2b1ddb++) if (_0x20b124[_0x215618 + _0x2b1ddb]) _0x57c302[_0x3c95e3(943)]({
      slot: _0x2b1ddb,
      item: _0x20b124[_0x215618 + _0x2b1ddb]
    });
    if (!_0x57c302[_0x3c95e3(459)]) return _0x1e62a6[_0x3c95e3(366)](sendTitle, _0x5cd0b2, _0x3c95e3(1283)), _0x5dedaa();
    _guardForm(new ModalFormData3().title({
      translate: _0x3c95e3(602)
    })[_0x3c95e3(674)]({
      translate: "shopkeeper.daily.order.admin.ingredient"
    }, _0x57c302[_0x3c95e3(1312)](_0x302933 => ({
      rawtext: [{
        text: "#" + _0x302933.slot + " "
      }, ...getItemNameRawtext(_0x302933.item)]
    })), {
      defaultValueIndex: Math[_0x3c95e3(955)](0, _0x57c302[_0x3c95e3(671)](_0x3563a1 => _0x3563a1[_0x3c95e3(735)] === _0x5a0f43[_0x3c95e3(677)]))
    })[_0x3c95e3(402)](_0x5cd0b2)[_0x3c95e3(479)](_0x52b4fc => {
      const _0x219ed4 = _0x3c95e3;
      if (!_0x5cd0b2.hasTag(_0x219ed4(860))) return;
      if (_0x52b4fc.canceled) return _0x5dedaa();
      const _0x370c5f = loadTradeRoot(_0x3db1ed),
        _0x35fe65 = (_0x3bf92a[_0x219ed4(364)](getNode, _0x370c5f, _0x4d2e7f)?.[_0x219ed4(641)] || []).find(_0x57d648 => _0x57d648?.[_0x219ed4(451)] === _0x4b29cc.namespace);
      if (_0x35fe65 && _0x57c302[_0x52b4fc.formValues[0]]) {
        _0x35fe65.dailyOrderIngredientSlot = _0x57c302[_0x52b4fc[_0x219ed4(362)][0]][_0x219ed4(735)];
        if (!_0x3bf92a[_0x219ed4(364)](saveTradeRoot, _0x3db1ed, _0x370c5f)) sendTitle(_0x5cd0b2, "shopkeeper.policy.save.failed");
      }
      _0x5dedaa();
    })[_0x3c95e3(500)](_0x6efecc => log[_0x3c95e3(618)]("ui", _0x6efecc, {
      action: "policy.order.ingredient",
      rootName: _0x3db1ed
    })), _0x3c95e3(1162));
  })[_0x5a4306(500)](_0x2c77da => log[_0x5a4306(618)]("ui", _0x2c77da, {
    action: "policy.setting",
    rootName: _0x3db1ed
  })), _0x5a4306(1006));
}
function addItemCountSafe(_0x4ff40b, _0x291e80, _0x1501ca) {
  const _0x2c9ce0 = _0x20c7bb,
    _0x1d5a67 = {
      zrDsX: _0x2c9ce0(508),
      OMbSI: function (_0x207ade, _0x29d3a9) {
        return _0x207ade > _0x29d3a9;
      },
      BoRCD: _0x2c9ce0(1012),
      GtbiS: function (_0xb53281, _0x32102f) {
        return _0xb53281(_0x32102f);
      }
    };
  let _0x208c24 = 0,
    _0x440d84 = Math[_0x2c9ce0(536)](_0x1501ca);
  const _0x2b7fcf = [];
  let _0x1d9d95 = 64;
  try {
    const _0x16682a = _0x291e80[_0x2c9ce0(1170)];
    if (typeof _0x16682a === _0x2c9ce0(829) && _0x16682a >= 1) _0x1d9d95 = Math[_0x2c9ce0(536)](_0x16682a);
  } catch (_0x4997ed) {}
  const _0x17ff78 = _0x591079 => {
    const _0x4df89e = _0x2c9ce0;
    let _0x6ea2a7 = Math.floor(_0x591079);
    while (_0x6ea2a7 > 0) {
      const _0x55732e = Math[_0x4df89e(1208)](_0x6ea2a7, _0x1d9d95);
      try {
        const _0xacba20 = _0x291e80[_0x4df89e(1251)]();
        _0xacba20[_0x4df89e(989)] = _0x55732e, _0x2b7fcf[_0x4df89e(943)](_0xacba20);
      } catch (_0x827aa0) {
        log[_0x4df89e(618)](_0x4df89e(1012), _0x827aa0, {
          action: _0x1d5a67[_0x4df89e(514)],
          item: safeTypeId(_0x291e80),
          chunk: _0x55732e
        });
        break;
      }
      _0x6ea2a7 -= _0x55732e;
    }
  };
  while (_0x1d5a67[_0x2c9ce0(1218)](_0x440d84, 0)) {
    const _0x489354 = Math[_0x2c9ce0(1208)](_0x440d84, _0x1d9d95);
    let _0x119301;
    try {
      _0x119301 = _0x291e80.clone(), _0x119301[_0x2c9ce0(989)] = _0x489354;
    } catch (_0x90b6ce) {
      log.err(_0x1d5a67.BoRCD, _0x90b6ce, {
        action: _0x2c9ce0(504),
        item: _0x1d5a67.GtbiS(safeTypeId, _0x291e80),
        chunk: _0x489354
      }), _0x1d5a67[_0x2c9ce0(903)](_0x17ff78, _0x440d84), _0x440d84 = 0;
      break;
    }
    let _0x1fcd56 = null;
    try {
      _0x1fcd56 = _0x4ff40b[_0x2c9ce0(369)](_0x119301);
    } catch (_0x450141) {
      log.err("flow", _0x450141, {
        action: "addItemCountSafe.addItem",
        item: safeTypeId(_0x291e80),
        chunk: _0x489354
      }), _0x17ff78(_0x440d84), _0x440d84 = 0;
      break;
    }
    _0x440d84 -= _0x489354;
    if (_0x1fcd56 && _0x1fcd56[_0x2c9ce0(989)] > 0) {
      _0x208c24 += _0x489354 - _0x1fcd56.amount, _0x17ff78(_0x1fcd56[_0x2c9ce0(989)]), _0x17ff78(_0x440d84), _0x440d84 = 0;
      break;
    }
    _0x208c24 += _0x489354;
  }
  return {
    added: _0x208c24,
    leftovers: _0x2b7fcf
  };
}
function spawnLeftovers(_0x24b812, _0xdcc67b) {
  const _0x201b00 = _0x20c7bb;
  if (!Array.isArray(_0xdcc67b)) return 0;
  let _0x312286 = 0;
  for (const _0x15a54d of _0xdcc67b) {
    if (!_0x15a54d || !(_0x15a54d[_0x201b00(989)] > 0)) continue;
    try {
      _0x24b812[_0x201b00(1374)].spawnItem(_0x15a54d, _0x24b812[_0x201b00(539)]), _0x312286 += _0x15a54d.amount;
    } catch (_0x1c599f) {
      log[_0x201b00(618)](_0x201b00(1012), _0x1c599f, {
        action: "spawnLeftovers",
        item: safeTypeId(_0x15a54d)
      });
    }
  }
  return _0x312286;
}
function reportUndeliveredReward(_0x8df242, _0x136d07, _0x54bcc2) {
  const _0x3e2744 = _0x20c7bb;
  log[_0x3e2744(618)](_0x3e2744(1012), new Error(_0x3e2744(633)), {
    action: _0x136d07,
    player: _0x8df242[_0x3e2744(598)],
    amount: _0x54bcc2
  }), _0x8df242[_0x3e2744(710)]({
    rawtext: [{
      translate: _0x3e2744(702)
    }, {
      translate: _0x3e2744(1050)
    }]
  });
}
function safeTypeId(_0x4d878a) {
  const _0x17555f = _0x20c7bb;
  try {
    return _0x4d878a && _0x4d878a[_0x17555f(764)];
  } catch (_0x49f2b0) {
    return "?";
  }
}
function freshPurchaseTerms(_0x386348, _0x2d9267, _0x55f984, _0x5167dc) {
  const _0x6c5ee7 = _0x20c7bb,
    _0xdd48ea = {
      rAAEn: function (_0xd396d4, _0x2b1dbd, _0x5643d5, _0x4823b8) {
        return _0xd396d4(_0x2b1dbd, _0x5643d5, _0x4823b8);
      },
      rsQUR: function (_0x51be9e, _0x56300f) {
        return _0x51be9e <= _0x56300f;
      }
    },
    _0x4449f3 = activeTrade(_0x2d9267, _0x55f984, _0x5167dc);
  if (!_0x4449f3 || !_0xdd48ea[_0x6c5ee7(1377)](isTradeOpen, _0x4449f3[_0x6c5ee7(502)], _0x4449f3[_0x6c5ee7(688)], _0x386348)) return null;
  const _0x167d4e = _0x4449f3.node[_0x6c5ee7(654)] ?? _0x2d9267,
    _0x3b64a4 = _0x4449f3.node[_0x6c5ee7(491)] || 0,
    _0x586670 = storage_default.getAll(_0x386348, _0x167d4e) || [];
  let _0x33da0e = null;
  try {
    _0x33da0e = storage_default[_0x6c5ee7(359)](_0x386348, _0x167d4e, _0x3b64a4);
  } catch (_0x1dc89a) {}
  if (!_0x33da0e) _0x33da0e = _0x586670[_0x3b64a4];
  if (!_0x33da0e) return null;
  const _0x208040 = _0x5167dc ? _0x5167dc + "/" + _0x4449f3[_0x6c5ee7(688)][_0x6c5ee7(451)] : _0x4449f3[_0x6c5ee7(688)][_0x6c5ee7(451)],
    _0x3e53c8 = effectiveReduction(_0x386348, _0x2d9267, _0x4449f3[_0x6c5ee7(502)], _0x4449f3[_0x6c5ee7(688)], _0x208040),
    _0xba1b62 = [];
  for (let _0x5f0791 = 1; _0xdd48ea[_0x6c5ee7(534)](_0x5f0791, 9); _0x5f0791++) {
    let _0x47d46a = null;
    try {
      _0x47d46a = storage_default.getLive(_0x386348, _0x167d4e, _0x3b64a4 + _0x5f0791);
    } catch (_0x423647) {}
    _0xba1b62.push(_0x47d46a || _0x586670[_0x3b64a4 + _0x5f0791] || null);
  }
  return {
    trade: _0x4449f3,
    sellItem: _0x33da0e,
    ingredients: discountedIngredients(_0xba1b62, _0x3e53c8),
    rate: _0x4449f3[_0x6c5ee7(1265)][_0x6c5ee7(991)]
  };
}
function samePurchaseTerms(_0xff76a3, _0x276b2c, _0x3a2178) {
  const _0x181ad = _0x20c7bb,
    _0x38f099 = {
      tJMEw: function (_0x3a4790, _0x47d54b) {
        return _0x3a4790 !== _0x47d54b;
      }
    };
  if (!_0x3a2178 || _0x38f099[_0x181ad(615)](itemKeyOf(_0xff76a3), itemKeyOf(_0x3a2178[_0x181ad(533)])) || _0xff76a3[_0x181ad(989)] !== _0x3a2178[_0x181ad(533)][_0x181ad(989)]) return ![];
  return _0x276b2c[_0x181ad(708)]((_0x3ce10d, _0x33897a) => itemKeyOf(_0x3ce10d) === itemKeyOf(_0x3a2178[_0x181ad(1175)][_0x33897a]) && ingredientAmount(_0x3ce10d) === ingredientAmount(_0x3a2178.ingredients[_0x33897a]));
}
function refundIngredients(_0x18260f, _0x55c375, _0x5701b3, _0x21da46) {
  const _0x38bbe4 = _0x20c7bb,
    _0x2208c4 = {
      MoeQG: function (_0x27370e, _0x51c40d, _0xc26491) {
        return _0x27370e(_0x51c40d, _0xc26491);
      }
    };
  for (const _0x3b635e of _0x5701b3) {
    if (_0x38bbe4(1185) === "RwpJo") {
      if (!_0x3b635e) continue;
      const {
        leftovers: _0x464a43
      } = addItemCountSafe(_0x55c375, _0x3b635e, ingredientAmount(_0x3b635e) * _0x21da46);
      _0x2208c4.MoeQG(spawnLeftovers, _0x18260f, _0x464a43);
    } else {
      const _0x3c1cdf = {
        rawtext: []
      };
      for (let _0x21e1cb = 0; _0x21e1cb < _0x4bde69.length; _0x21e1cb++) {
        _0x3c1cdf.rawtext.push({
          text: _0xe52a19[_0x21e1cb]
        });
        if (_0x21e1cb < _0x50d4d2[_0x38bbe4(459)] - 1) _0x3c1cdf.rawtext.push({
          text: "\n"
        });
      }
      _0x449864.button(_0xb96de5, _0x36fc4f[_0x38bbe4(562)] ?? _0x5cb3fe[_0x38bbe4(451)], _0x3c1cdf, _0x3f042b[_0x38bbe4(481)] ?? _0x5813d1, 1, 0, _0x32e03f.glint ?? ![]);
    }
  }
}
function craftOnce(_0x1d5ac1, _0x1a13a5, _0x495c73, _0x5b461b, _0x263910, _0x495597, _0x33a2ed, _0x1de146, _0xe344d1, _0x578dd0) {
  const _0x37f249 = _0x20c7bb,
    _0x4f5b0f = {
      VllBM: function (_0x567723, _0x209e25) {
        return _0x567723 !== _0x209e25;
      },
      SJDcD: function (_0x4a6c04, _0x142b4b, _0x324127) {
        return _0x4a6c04(_0x142b4b, _0x324127);
      },
      cxvVW: "shopkeeper.inventory.no.space",
      TKasV: function (_0x52d99f, _0x1e7376) {
        return _0x52d99f === _0x1e7376;
      },
      GatNu: function (_0x5709b3, _0x94ed16, _0x4ea315, _0x1937cd) {
        return _0x5709b3(_0x94ed16, _0x4ea315, _0x1937cd);
      },
      xYXZI: function (_0x1e1255, _0x4437b9, _0x46cda7) {
        return _0x1e1255(_0x4437b9, _0x46cda7);
      }
    },
    _0x440817 = freshPurchaseTerms(_0x1d5ac1, _0x495597, _0x33a2ed, _0x1de146);
  if (!_0x440817) {
    sendTitle(_0x1d5ac1, _0x37f249(737));
    return;
  }
  if (!samePurchaseTerms(_0x495c73, _0x5b461b, _0x440817) || _0x4f5b0f[_0x37f249(417)](_0xe344d1, void 0) && _0x4f5b0f[_0x37f249(417)](_0x440817[_0x37f249(833)], _0xe344d1) || _0x578dd0 !== void 0 && JSON[_0x37f249(1324)](_0x440817[_0x37f249(1103)].policy) !== _0x578dd0) {
    sendTitle(_0x1d5ac1, _0x37f249(655)), enhancedTradeUi(_0x1d5ac1, _0x495597, _0x33a2ed, _0x1de146);
    return;
  }
  const _0x1b40d8 = _0x440817[_0x37f249(1103)];
  if (_0x1b40d8[_0x37f249(1307)] <= 0) {
    _0x4f5b0f[_0x37f249(926)](showOutOfStock, _0x1d5ac1, _0x1b40d8);
    return;
  }
  const _0x224d07 = _0x440817[_0x37f249(833)];
  if (!hasEnoughIngredients(_0x263910, _0x5b461b)) {
    sendTitle(_0x1d5ac1, _0x37f249(947));
    return;
  }
  if (getMaxCraftableByInventory(_0x495c73, _0x263910) < 1) {
    sendTitle(_0x1d5ac1, _0x4f5b0f[_0x37f249(1246)]);
    return;
  }
  removeIngredients(_0x263910, _0x5b461b);
  const _0x190214 = Math[_0x37f249(572)]() * 100,
    _0x2116f3 = _0x190214 < _0x224d07;
  if (_0x2116f3) {
    if (_0x4f5b0f[_0x37f249(372)]("iXpWm", _0x37f249(404))) {
      if (!commitSale(_0x495597, _0x1b40d8, 1)) {
        refundIngredients(_0x1d5ac1, _0x263910, _0x5b461b, 1), sendTitle(_0x1d5ac1, _0x37f249(816));
        return;
      }
      const _0x1894e5 = _0x495c73[_0x37f249(989)] || 1,
        {
          added: _0x2060b7,
          leftovers: _0x7f5110
        } = addItemCountSafe(_0x263910, _0x495c73, _0x1894e5),
        _0x2e3e0d = _0x2060b7 + spawnLeftovers(_0x1d5ac1, _0x7f5110);
      _0x2e3e0d > 0 && recordSuccessfulTrades(_0x1d5ac1, _0x495597, _0x1b40d8[_0x37f249(688)], _0x495c73, 1, _0x263910);
      if (_0x2e3e0d < _0x1894e5) _0x4f5b0f[_0x37f249(1293)](reportUndeliveredReward, _0x1d5ac1, _0x37f249(1020), _0x1894e5 - _0x2e3e0d);
      if (_0x2e3e0d <= 0) _0x4f5b0f.xYXZI(sendTitle, _0x1d5ac1, _0x37f249(826));else {
        if (_0x2e3e0d < _0x1894e5) _0x4f5b0f[_0x37f249(926)](sendTitle, _0x1d5ac1, _0x37f249(826));else _0x7f5110.length > 0 ? sendTitle(_0x1d5ac1, _0x37f249(826)) : _0x4f5b0f[_0x37f249(926)](sendTitle, _0x1d5ac1, _0x37f249(692));
      }
      _0x1d5ac1.playSound("random.levelup", {
        volume: .5
      });
    } else _0x1674aa[_0x37f249(765)] = _0x37f249(1319), _0x41430a = !![];
  } else sendTitle(_0x1d5ac1, _0x37f249(1365)), _0x1d5ac1[_0x37f249(777)]("random.break", {
    volume: .5
  });
  enhancedTradeUi(_0x1d5ac1, _0x495597, _0x33a2ed, _0x1de146);
}
function craftMultiple(_0x3f041d, _0x4c4d56, _0x584db4, _0x5d2d62, _0x5c7aa4, _0x4ceacf, _0x369fae, _0x5f49e3, _0x15ba7f, _0x16d040) {
  const _0x4eee24 = _0x20c7bb,
    _0x1dc05a = {
      oVIVn: function (_0x4d5c9b, _0x212090) {
        return _0x4d5c9b === _0x212090;
      },
      zZZdK: function (_0x222d2e, _0x4510e7) {
        return _0x222d2e(_0x4510e7);
      },
      xbQFJ: function (_0x414fad, _0x523cd5) {
        return _0x414fad <= _0x523cd5;
      },
      lnNPl: _0x4eee24(924),
      RIieE: function (_0x326a73, _0x2a147a) {
        return _0x326a73 !== _0x2a147a;
      },
      wnhWI: function (_0x115a14, _0x291607) {
        return _0x115a14 <= _0x291607;
      },
      bfOvu: function (_0x27cd49, _0x772394, _0x321f29) {
        return _0x27cd49(_0x772394, _0x321f29);
      },
      ERJtJ: function (_0x98f08a, _0x2ccf65) {
        return _0x98f08a < _0x2ccf65;
      },
      vmHfw: function (_0x20787a, _0x1b5221) {
        return _0x20787a >= _0x1b5221;
      },
      CVNCl: function (_0x97402d, _0x3d991d, _0x45306e) {
        return _0x97402d(_0x3d991d, _0x45306e);
      },
      kxpOv: function (_0x39cde2, _0x172dbe) {
        return _0x39cde2 === _0x172dbe;
      },
      UCyer: "shopkeeper.craft.missing.ingredients",
      TKzEB: _0x4eee24(826),
      FPmSi: _0x4eee24(1216),
      iyBlU: _0x4eee24(1263),
      fluEc: "random.break",
      sLsXB: function (_0xf17220, _0xc0fa82, _0x73c222, _0x5d6856, _0x12a57d) {
        return _0xf17220(_0xc0fa82, _0x73c222, _0x5d6856, _0x12a57d);
      },
      zoXsq: function (_0x252133, _0x17d9ba, _0x1e7e16, _0x419300) {
        return _0x252133(_0x17d9ba, _0x1e7e16, _0x419300);
      },
      yczUz: function (_0x7579d1, _0x14746a) {
        return _0x7579d1 !== _0x14746a;
      },
      hxZgZ: function (_0x6c37ec, _0x4266eb) {
        return _0x6c37ec < _0x4266eb;
      },
      CncME: function (_0x2ed535, _0x5e8d25) {
        return _0x2ed535 === _0x5e8d25;
      },
      FEvam: function (_0x2bc039, _0x15d72d) {
        return _0x2bc039 + _0x15d72d;
      },
      OeWAk: function (_0x2142c2, _0x4a64e1) {
        return _0x2142c2 - _0x4a64e1;
      },
      VOIUT: function (_0x47cd09, _0x5afed1) {
        return _0x47cd09 <= _0x5afed1;
      },
      vhgxC: "shopkeeper.inventory.no.space"
    },
    _0x160dd9 = freshPurchaseTerms(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
  if (!_0x160dd9) {
    sendTitle(_0x3f041d, _0x4eee24(737));
    return;
  }
  if (!_0x1dc05a.zoXsq(samePurchaseTerms, _0x584db4, _0x5d2d62, _0x160dd9) || _0x1dc05a[_0x4eee24(812)](_0x15ba7f, void 0) && _0x1dc05a.yczUz(_0x160dd9[_0x4eee24(833)], _0x15ba7f) || _0x16d040 !== void 0 && _0x1dc05a[_0x4eee24(768)](JSON[_0x4eee24(1324)](_0x160dd9[_0x4eee24(1103)].policy), _0x16d040)) {
    _0x1dc05a[_0x4eee24(1008)](sendTitle, _0x3f041d, "shopkeeper.policy.changed"), enhancedTradeUi(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
    return;
  }
  const _0x1316e8 = _0x160dd9[_0x4eee24(1103)],
    _0xa3906a = JSON.stringify(_0x1316e8[_0x4eee24(1265)]);
  if (_0x1316e8[_0x4eee24(1307)] <= 0) {
    showOutOfStock(_0x3f041d, _0x1316e8);
    return;
  }
  const _0x889c64 = _0x160dd9[_0x4eee24(833)];
  let _0x28b11e = Infinity;
  const _0x455bf1 = [];
  for (const _0x2204d0 of _0x5d2d62) {
    if (!_0x2204d0) continue;
    const _0x366a47 = _0x455bf1[_0x4eee24(1071)](_0x31021b => itemMatches(_0x31021b[_0x4eee24(370)], _0x2204d0));
    if (_0x366a47) _0x366a47[_0x4eee24(989)] += ingredientAmount(_0x2204d0);else _0x455bf1.push({
      item: _0x2204d0,
      amount: ingredientAmount(_0x2204d0)
    });
  }
  for (const _0x380867 of _0x455bf1) {
    let _0x3d850a = 0;
    for (let _0x5ae16a = 0; _0x5ae16a < _0x5c7aa4[_0x4eee24(664)]; _0x5ae16a++) {
      const _0x43d55e = _0x5c7aa4[_0x4eee24(940)](_0x5ae16a);
      itemMatches(_0x43d55e, _0x380867[_0x4eee24(370)]) && (_0x3d850a += _0x43d55e.amount);
    }
    const _0x276d53 = Math.floor(_0x3d850a / _0x380867[_0x4eee24(989)]);
    if (_0x1dc05a.hxZgZ(_0x276d53, _0x28b11e)) _0x28b11e = _0x276d53;
  }
  if (_0x28b11e <= 0) {
    sendTitle(_0x3f041d, _0x4eee24(947));
    return;
  }
  const _0x176503 = getMaxCraftableByInventory(_0x584db4, _0x5c7aa4);
  let _0x3af2db = Math.min(_0x28b11e, _0x176503, 64);
  if (_0x1316e8[_0x4eee24(1265)].questTarget > 0) {
    const _0x210adf = _0x1dc05a[_0x4eee24(1052)](questStatus, playerShopProgress(_0x3f041d, _0x4ceacf), _0x369fae, _0x1316e8[_0x4eee24(1265)]);
    for (let _0x196e76 = 1; _0x196e76 <= _0x3af2db; _0x196e76++) {
      const _0x4ee7ee = _0x210adf[_0x4eee24(521)] ? 0 : _0x1dc05a[_0x4eee24(732)](_0x1316e8[_0x4eee24(1265)][_0x4eee24(403)] || "repeat", "repeat") ? advanceQuest(_0x210adf[_0x4eee24(1189)], _0x210adf.target, _0x196e76)[_0x4eee24(1148)] : _0x1dc05a[_0x4eee24(379)](_0x210adf[_0x4eee24(1189)], _0x196e76) >= _0x210adf[_0x4eee24(453)] ? 1 : 0;
      if (_0x4ee7ee * _0x1316e8[_0x4eee24(1265)][_0x4eee24(1372)] * (_0x584db4[_0x4eee24(989)] || 1) > 4096) {
        _0x3af2db = _0x1dc05a.OeWAk(_0x196e76, 1);
        break;
      }
    }
  }
  const _0x1bf62d = Math[_0x4eee24(1208)](_0x28b11e, _0x176503, 64, _0x3af2db);
  if (_0x1dc05a[_0x4eee24(399)](_0x1bf62d, 0)) {
    sendTitle(_0x3f041d, _0x1dc05a[_0x4eee24(1353)]);
    return;
  }
  _guardForm(new ModalFormData3()[_0x4eee24(1352)]({
    translate: "shopkeeper.craft.multiple.title"
  }).textField({
    translate: "shopkeeper.craft.amount.input.label",
    with: [String(_0x1bf62d)]
  }, "", {
    defaultValue: "1"
  })[_0x4eee24(402)](_0x3f041d)[_0x4eee24(479)](_0x588126 => {
    const _0x3aeeb3 = _0x4eee24,
      _0x20b94c = {
        DArhh: function (_0x1ceb66, _0x1d2835) {
          return _0x1ceb66 === _0x1d2835;
        },
        JUDOr: function (_0x534843, _0x3a3cce) {
          return _0x534843 != _0x3a3cce;
        },
        OkpLG: function (_0x195057, _0x8809ac) {
          const _0x179025 = _0x12bf;
          return _0x1dc05a[_0x179025(559)](_0x195057, _0x8809ac);
        }
      };
    if (!isPlayerValid(_0x3f041d)) return;
    if (_0x588126[_0x3aeeb3(505)]) {
      enhancedTradeUi(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
      return;
    }
    const _0x337a73 = _0x1dc05a.zZZdK(Number, _0x588126[_0x3aeeb3(362)][0]);
    if (!Number[_0x3aeeb3(1070)](_0x337a73) || _0x1dc05a[_0x3aeeb3(617)](_0x337a73, 0) || _0x337a73 > _0x1bf62d) {
      sendTitle(_0x3f041d, _0x1dc05a[_0x3aeeb3(891)], [String(_0x1bf62d)]), enhancedTradeUi(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
      return;
    }
    const _0x58b4af = freshPurchaseTerms(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
    if (!_0x58b4af) {
      sendTitle(_0x3f041d, "shopkeeper.policy.blocked");
      return;
    }
    if (!samePurchaseTerms(_0x584db4, _0x5d2d62, _0x58b4af) || _0x1dc05a[_0x3aeeb3(768)](_0x58b4af.rate, _0x889c64) || JSON[_0x3aeeb3(1324)](_0x58b4af.trade[_0x3aeeb3(1265)]) !== _0xa3906a) {
      sendTitle(_0x3f041d, "shopkeeper.policy.changed"), enhancedTradeUi(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
      return;
    }
    const _0xaa39c8 = _0x58b4af[_0x3aeeb3(1103)];
    if (_0x1dc05a[_0x3aeeb3(723)](_0xaa39c8[_0x3aeeb3(1307)], 0)) {
      _0x1dc05a[_0x3aeeb3(1017)](showOutOfStock, _0x3f041d, _0xaa39c8);
      return;
    }
    let _0xcd0ca8 = 0,
      _0x72eb32 = 0;
    for (let _0x5baa8c = 0; _0x1dc05a[_0x3aeeb3(1315)](_0x5baa8c, _0x337a73); _0x5baa8c++) {
      if (_0x1dc05a[_0x3aeeb3(1314)](_0xcd0ca8, _0xaa39c8[_0x3aeeb3(1307)])) break;
      if (!_0x1dc05a[_0x3aeeb3(1008)](hasEnoughIngredients, _0x5c7aa4, _0x5d2d62)) break;
      removeIngredients(_0x5c7aa4, _0x5d2d62), _0x72eb32++;
      if (Math[_0x3aeeb3(572)]() * 100 < _0x889c64) {
        if (_0x3aeeb3(831) === _0x3aeeb3(831)) _0xcd0ca8++;else {
          const _0x473b10 = typeof _0x20cda5[_0x3aeeb3(719)] === _0x3aeeb3(712) ? _0x2bc0b4[_0x3aeeb3(719)]() : null,
            _0x9696f6 = PGNlIp.DArhh(typeof _0x5f578.getRawNbt, _0x3aeeb3(712)) ? _0x3da16e[_0x3aeeb3(719)]() : null;
          if (_0x473b10 != null || PGNlIp[_0x3aeeb3(748)](_0x9696f6, null)) return PGNlIp[_0x3aeeb3(956)](_0x473b10, _0x9696f6);
        }
      }
    }
    if (_0x72eb32 === 0) {
      if (_0x1dc05a[_0x3aeeb3(1059)](_0x3aeeb3(450), _0x3aeeb3(450))) {
        sendTitle(_0x3f041d, _0x1dc05a.UCyer), enhancedTradeUi(_0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
        return;
      } else _0x572133[_0x3aeeb3(550)](_0x4e385a);
    }
    if (_0xcd0ca8 > 0) {
      if (!commitSale(_0x4ceacf, _0xaa39c8, _0xcd0ca8)) {
        refundIngredients(_0x3f041d, _0x5c7aa4, _0x5d2d62, _0xcd0ca8), sendTitle(_0x3f041d, _0x3aeeb3(816));
        return;
      }
      const _0x20905a = _0x584db4[_0x3aeeb3(989)] * _0xcd0ca8,
        {
          added: _0x25ab0d,
          leftovers: _0x5ef242
        } = addItemCountSafe(_0x5c7aa4, _0x584db4, _0x20905a),
        _0x5b5020 = _0x25ab0d + spawnLeftovers(_0x3f041d, _0x5ef242);
      _0x5b5020 > 0 && recordSuccessfulTrades(_0x3f041d, _0x4ceacf, _0xaa39c8[_0x3aeeb3(688)], _0x584db4, _0xcd0ca8, _0x5c7aa4);
      if (_0x5b5020 < _0x20905a) reportUndeliveredReward(_0x3f041d, _0x3aeeb3(1010), _0x20905a - _0x5b5020);
      if (_0x1dc05a[_0x3aeeb3(723)](_0x5b5020, 0)) sendTitle(_0x3f041d, _0x1dc05a[_0x3aeeb3(1337)]);else _0x5b5020 < _0x20905a ? sendTitle(_0x3f041d, _0x3aeeb3(826)) : _0x3aeeb3(1216) === _0x1dc05a.FPmSi ? (sendTitle(_0x3f041d, _0x3aeeb3(1280), [String(_0xcd0ca8)]), _0x3f041d[_0x3aeeb3(777)]("random.levelup", {
        volume: .5
      })) : _0x2730e7(_0x33aeb2, _0x57a402, "");
    } else sendTitle(_0x3f041d, _0x1dc05a[_0x3aeeb3(824)]), _0x3f041d.playSound(_0x1dc05a.fluEc, {
      volume: .5
    });
    _0x1dc05a[_0x3aeeb3(1094)](enhancedTradeUi, _0x3f041d, _0x4ceacf, _0x369fae, _0x5f49e3);
  }), "craftMultiple");
}
function getMaxCraftableByInventory(_0x44b009, _0xa579d7) {
  const _0x1aca08 = _0x20c7bb,
    _0x167e85 = {
      cwtJE: function (_0x83c6d7, _0x73fd16) {
        return _0x83c6d7 - _0x73fd16;
      }
    },
    _0x37e0c8 = _0x44b009[_0x1aca08(1170)] || 64,
    _0x42e1aa = _0x44b009.amount || 1;
  if (_0x42e1aa <= 0) return 0;
  let _0x55d035 = 0,
    _0x4c06f5 = 0;
  for (let _0x3f92af = 0; _0x3f92af < _0xa579d7[_0x1aca08(664)]; _0x3f92af++) {
    const _0x1d7b91 = _0xa579d7[_0x1aca08(940)](_0x3f92af);
    if (!_0x1d7b91) _0x55d035++;else itemMatches(_0x1d7b91, _0x44b009) && _0x1d7b91[_0x1aca08(989)] < _0x37e0c8 && (_0x4c06f5 += _0x167e85[_0x1aca08(694)](_0x37e0c8, _0x1d7b91[_0x1aca08(989)]));
  }
  if (_0x37e0c8 <= 1) return Math[_0x1aca08(536)](_0x55d035 / _0x42e1aa);
  let _0x3392d7 = 0;
  while (!![]) {
    const _0x4dddfe = (_0x3392d7 + 1) * _0x42e1aa;
    let _0x387022 = _0x4dddfe;
    const _0x3f0bdc = Math[_0x1aca08(1208)](_0x4c06f5, _0x387022);
    _0x387022 -= _0x3f0bdc;
    const _0x566d1f = Math[_0x1aca08(1081)](_0x387022 / _0x37e0c8) || 0;
    if (_0x566d1f <= _0x55d035) _0x3392d7++;else break;
    if (_0x3392d7 > 1e5) break;
  }
  return _0x3392d7;
}
function hasEnoughIngredients(_0x77f4c0, _0x58315a) {
  const _0x2bc26c = _0x20c7bb,
    _0x58fc93 = {
      bUWZX: function (_0x42b294, _0x37514e) {
        return _0x42b294(_0x37514e);
      },
      dDpLc: function (_0x238f13, _0x3bea21) {
        return _0x238f13 < _0x3bea21;
      }
    },
    _0xe77b8f = [];
  for (let _0x2ac34f of _0x58315a) {
    if (!_0x2ac34f) continue;
    let _0x5777f6 = ![];
    for (let _0x101325 of _0xe77b8f) {
      if (itemMatches(_0x101325[_0x2bc26c(370)], _0x2ac34f)) {
        _0x101325[_0x2bc26c(989)] += _0x58fc93[_0x2bc26c(1325)](ingredientAmount, _0x2ac34f), _0x5777f6 = !![];
        break;
      }
    }
    !_0x5777f6 && _0xe77b8f.push({
      item: _0x2ac34f,
      amount: _0x58fc93[_0x2bc26c(1325)](ingredientAmount, _0x2ac34f)
    });
  }
  for (let _0x7ab8b9 of _0xe77b8f) {
    let _0x1f44b5 = 0;
    for (let _0x5d8619 = 0; _0x58fc93[_0x2bc26c(610)](_0x5d8619, _0x77f4c0[_0x2bc26c(664)]); _0x5d8619++) {
      const _0x3a7575 = _0x77f4c0[_0x2bc26c(940)](_0x5d8619);
      itemMatches(_0x3a7575, _0x7ab8b9[_0x2bc26c(370)]) && (_0x1f44b5 += _0x3a7575[_0x2bc26c(989)]);
    }
    if (_0x58fc93[_0x2bc26c(610)](_0x1f44b5, _0x7ab8b9[_0x2bc26c(989)])) return ![];
  }
  return !![];
}
function removeIngredients(_0x24ad0d, _0x4efdd1) {
  const _0x5672b4 = _0x20c7bb,
    _0x47e8d6 = {
      qlKLB: function (_0x453ac4, _0x434f80) {
        return _0x453ac4 < _0x434f80;
      }
    };
  for (let _0x53cc99 of _0x4efdd1) {
    if (!_0x53cc99) continue;
    let _0x9c201f = ingredientAmount(_0x53cc99);
    for (let _0xb7c6b = 0; _0x47e8d6.qlKLB(_0xb7c6b, _0x24ad0d[_0x5672b4(664)]) && _0x9c201f > 0; _0xb7c6b++) {
      const _0x1c7bd4 = _0x24ad0d.getItem(_0xb7c6b);
      if (!itemMatches(_0x1c7bd4, _0x53cc99)) continue;
      _0x1c7bd4[_0x5672b4(989)] <= _0x9c201f ? (_0x9c201f -= _0x1c7bd4[_0x5672b4(989)], _0x24ad0d[_0x5672b4(917)](_0xb7c6b, void 0)) : (_0x1c7bd4[_0x5672b4(989)] -= _0x9c201f, _0x24ad0d[_0x5672b4(917)](_0xb7c6b, _0x1c7bd4), _0x9c201f = 0);
    }
  }
}
function removeIngredient(_0x10c0e6, _0x5a0474, _0x5717a4, _0x138685, _0x50111a, _0x11c1b8, _0x4c62cb) {
  const _0x2c9fd0 = _0x20c7bb,
    _0x5e4892 = {
      pfwbM: function (_0x3cb2a2, _0x26f891, _0xedb3f8, _0x359419, _0x42be56) {
        return _0x3cb2a2(_0x26f891, _0xedb3f8, _0x359419, _0x42be56);
      },
      IvSAN: function (_0x41e51c, _0x1b0681) {
        return _0x41e51c >= _0x1b0681;
      },
      FCFcK: function (_0x1d14bf, _0x4635a0) {
        return _0x1d14bf < _0x4635a0;
      },
      Ubhdx: function (_0x17b245, _0x463de6) {
        return _0x17b245 + _0x463de6;
      },
      nfVwe: "textures/blocks/glass_black",
      UiZmz: function (_0x5f49c1, _0x407116, _0x2be543, _0xb81a53) {
        return _0x5f49c1(_0x407116, _0x2be543, _0xb81a53);
      },
      ISyTn: function (_0x1037e5, _0x3a5a54) {
        return _0x1037e5(_0x3a5a54);
      },
      kKVNs: _0x2c9fd0(742)
    },
    _0x2676f4 = _0x11c1b8[_0x2c9fd0(491)] || 0,
    _0x13509b = storage_default[_0x2c9fd0(680)](_0x10c0e6, _0x5a0474),
    _0x3f9ea6 = [];
  for (let _0x41987 = 1; _0x41987 <= 9; _0x41987++) if (_0x13509b[_0x2676f4 + _0x41987]) _0x3f9ea6.push({
    slot: _0x41987,
    item: _0x13509b[_0x2676f4 + _0x41987]
  });
  if (_0x3f9ea6[_0x2c9fd0(459)] === 0) {
    sendTitle(_0x10c0e6, _0x2c9fd0(1355));
    return;
  }
  const _0x44c09d = new ChestFormData("54").title({
    translate: _0x2c9fd0(480)
  });
  for (let _0x4cfe22 = 0; _0x5e4892.FCFcK(_0x4cfe22, 54); _0x4cfe22++) _0x44c09d[_0x2c9fd0(730)](_0x4cfe22, "", [], _0x5e4892[_0x2c9fd0(1095)], 1);
  for (let _0x185082 = 0; _0x185082 < _0x3f9ea6[_0x2c9fd0(459)]; _0x185082++) {
    const {
        slot: _0x2653fe,
        item: _0x50d427
      } = _0x3f9ea6[_0x185082],
      _0x119d4b = _0x5e4892[_0x2c9fd0(1241)](getDisplayLore, _0x50d427, _0x5a0474, _0x2676f4 + _0x2653fe),
      _0x432479 = {
        rawtext: [...(_0x119d4b.rawtext || []), {
          text: "\n"
        }, {
          translate: "shopkeeper.delete.click"
        }]
      };
    _0x44c09d.button(_0x185082, _0x5e4892[_0x2c9fd0(1375)](getItemDisplayName2, _0x50d427), _0x432479, _0x50d427.typeId, _0x50d427.amount);
  }
  _0x44c09d.button(49, {
    translate: _0x2c9fd0(1269)
  }, {
    rawtext: [{
      translate: _0x5e4892[_0x2c9fd0(858)]
    }]
  }, "textures/ui/arrow_left", 1), _guardForm(_0x44c09d[_0x2c9fd0(402)](_0x10c0e6).then(_0x39582d => {
    const _0x37f248 = _0x2c9fd0;
    if (_0x37f248(988) !== _0x37f248(988)) _0x46f29b.system.beforeEvents[_0x37f248(794)][_0x37f248(1060)](() => _0x53aa06("shutdown"));else {
      if (_0x39582d.selection === 49) {
        _0x5e4892[_0x37f248(874)](enhancedTradeUi, _0x10c0e6, _0x50111a, _0x11c1b8, _0x4c62cb);
        return;
      }
      const _0x1efedd = _0x39582d[_0x37f248(526)];
      if (_0x5e4892[_0x37f248(757)](_0x1efedd, 0) && _0x5e4892[_0x37f248(961)](_0x1efedd, _0x3f9ea6[_0x37f248(459)])) {
        const _0xdeae30 = _0x3f9ea6[_0x1efedd][_0x37f248(735)];
        storage_default[_0x37f248(963)](_0x10c0e6, _0x5a0474, _0x5e4892.Ubhdx(_0x2676f4, _0xdeae30), void 0), sendTitle(_0x10c0e6, "shopkeeper.ingredient.deleted"), enhancedTradeUi(_0x10c0e6, _0x50111a, _0x11c1b8, _0x4c62cb);
      }
    }
  }), _0x2c9fd0(746));
}
function changeSellItem(_0x20b676, _0x288300, _0x2e5899, _0xb49ea, _0x36bf7a, _0x326617) {
  const _0x3099ca = _0x20c7bb,
    _0x213ab1 = _0x36bf7a[_0x3099ca(491)] || 0;
  selectItemFromInventory(_0x20b676, null, _0x29b1d1 => {
    const _0x234004 = _0x3099ca;
    if (_0x29b1d1 === null || _0x29b1d1 === void 0) {
      enhancedTradeUi(_0x20b676, _0xb49ea, _0x36bf7a, _0x326617);
      return;
    }
    const _0x1f36ee = _0x2e5899.getItem(_0x29b1d1);
    if (!_0x1f36ee) {
      sendTitle(_0x20b676, _0x234004(1033)), enhancedTradeUi(_0x20b676, _0xb49ea, _0x36bf7a, _0x326617);
      return;
    }
    storage_default[_0x234004(963)](_0x20b676, _0x288300, _0x213ab1 + 0, _0x1f36ee[_0x234004(1251)]()), sendTitle(_0x20b676, _0x234004(1335)), enhancedTradeUi(_0x20b676, _0xb49ea, _0x36bf7a, _0x326617);
  });
}
_0x144cf1.system.beforeEvents.startup.subscribe(_0x1b0a7e => {
  const _0x16b11e = _0x20c7bb,
    _0x54beb8 = {
      RNAjG: "default",
      fsvYf: function (_0x191025, _0x39405c, _0x94f205) {
        return _0x191025(_0x39405c, _0x94f205);
      },
      yljnv: function (_0x4ba433, _0x3584c8) {
        return _0x4ba433 === _0x3584c8;
      },
      zGPwQ: function (_0x50df56, _0x2af362) {
        return _0x50df56 instanceof _0x2af362;
      },
      CKqRE: "e:migrate_entities",
      qbsXG: _0x16b11e(996)
    };
  _0x1b0a7e[_0x16b11e(1215)].registerCommand({
    name: _0x16b11e(623),
    description: "Ecraft",
    permissionLevel: _0x144cf1[_0x16b11e(1131)][_0x16b11e(1240)]
  }, _0x28d251 => {
    const _0x128599 = _0x16b11e,
      _0x10a361 = {
        fQBhc: "s_ecraft",
        wSBss: _0x54beb8[_0x128599(350)],
        mFwdJ: function (_0x26a7d9, _0x58ccc3, _0x1e2838) {
          const _0x445a40 = _0x128599;
          return _0x54beb8[_0x445a40(1034)](_0x26a7d9, _0x58ccc3, _0x1e2838);
        }
      },
      _0x11d40f = _0x28d251.sourceEntity;
    _0x11d40f instanceof _0x144cf1.Player && _0x144cf1[_0x128599(1348)].run(() => {
      const _0x5af0d3 = _0x128599;
      if (!loadTradeRoot(_0x5af0d3(1309))) {
        const _0x4d7d20 = {
          namespace: _0x5af0d3(502),
          shopId: _0x10a361[_0x5af0d3(1134)],
          shopPolicyId: _0x10a361[_0x5af0d3(1200)],
          display_name: _0x5af0d3(1299),
          children: []
        };
        _0x10a361[_0x5af0d3(1225)](saveTradeRoot, _0x5af0d3(1309), _0x4d7d20);
      }
      folderUi(_0x11d40f, "ecraft", "");
    });
  }), _0x1b0a7e.customCommandRegistry[_0x16b11e(1159)]({
    name: _0x16b11e(894),
    description: _0x16b11e(1239),
    permissionLevel: _0x144cf1[_0x16b11e(1131)].Any
  }, _0xba1851 => {
    const _0x2e7dd3 = _0x16b11e;
    if (_0x54beb8[_0x2e7dd3(867)](_0x2e7dd3(1011), _0x2e7dd3(1180))) _0x38e9b3[_0x2e7dd3(963)](null, _0xbb8173, _0x476171, _0x4975f4.clone()), _0x276cc6++;else {
      const _0x1d856d = _0xba1851[_0x2e7dd3(754)];
      _0x1d856d instanceof _0x144cf1.Player && _0x144cf1[_0x2e7dd3(1348)][_0x2e7dd3(986)](() => {
        shopManagerUi(_0x1d856d);
      });
    }
  }), _0x1b0a7e[_0x16b11e(1215)].registerCommand({
    name: _0x54beb8.CKqRE,
    description: _0x54beb8.qbsXG,
    permissionLevel: _0x144cf1[_0x16b11e(1131)].Admin
  }, _0x4f17dc => {
    const _0x2c21a6 = _0x16b11e,
      _0x2cefc8 = _0x4f17dc[_0x2c21a6(754)];
    _0x54beb8.zGPwQ(_0x2cefc8, _0x144cf1[_0x2c21a6(718)]) && _0x144cf1[_0x2c21a6(1348)].run(() => migrateEntitiesCommand(_0x2cefc8));
  });
});
function migrateEntitiesCommand(_0x1a1d12) {
  const _0x1dbb42 = _0x20c7bb,
    _0x35b633 = {
      DihRi: function (_0x3dc115, _0x18faff) {
        return _0x3dc115(_0x18faff);
      }
    };
  _0x1a1d12[_0x1dbb42(710)]({
    rawtext: [{
      translate: _0x1dbb42(1142)
    }]
  });
  let _0xac80d2 = 0;
  const _0x46cda6 = getAllShops();
  for (const _0x14f1ce of _0x46cda6) {
    let _0x4c7547 = function (_0x3e4b0f) {
      const _0x3ca36a = _0x1dbb42;
      if (_0x3e4b0f[_0x3ca36a(1116)] === "item" && _0x3e4b0f.storage && _0x3e4b0f[_0x3ca36a(654)][_0x3ca36a(1022)](_0x3ca36a(736))) {
        const _0x559cef = _0x3e4b0f.storage,
          _0x3c8a59 = _0x35b633[_0x3ca36a(652)](getFreeOffset, _0x109775),
          _0x159498 = storage_default[_0x3ca36a(680)](_0x1a1d12, _0x559cef);
        let _0x267c33 = ![];
        for (let _0x2f71e2 = 0; _0x2f71e2 < 10; _0x2f71e2++) {
          const _0x8a8eeb = _0x159498[_0x2f71e2];
          _0x8a8eeb && (storage_default.set(_0x1a1d12, _0x1b0824, _0x3c8a59 + _0x2f71e2, _0x8a8eeb[_0x3ca36a(1251)]()), _0x267c33 = !![]);
        }
        _0x267c33 && _0xac80d2++;
        _0x3e4b0f[_0x3ca36a(654)] = _0x1b0824, _0x3e4b0f[_0x3ca36a(491)] = _0x3c8a59, _0x1675ae = !![];
        for (let _0x1aa002 = 0; _0x1aa002 < 10; _0x1aa002++) {
          storage_default.set(_0x1a1d12, _0x559cef, _0x1aa002, void 0);
        }
        storage_default[_0x3ca36a(895)](_0x559cef, _0x1a1d12);
      }
      if (_0x3e4b0f[_0x3ca36a(641)]) _0x3e4b0f.children[_0x3ca36a(601)](_0x4c7547);
    };
    const _0x1b0824 = _0x14f1ce.name,
      _0x109775 = _0x14f1ce[_0x1dbb42(502)];
    let _0x1675ae = ![];
    (_0x109775[_0x1dbb42(641)] || [])[_0x1dbb42(601)](_0x4c7547), _0x1675ae && saveTradeRoot(_0x1b0824, _0x109775);
  }
  _0x1a1d12[_0x1dbb42(710)]({
    rawtext: [{
      translate: _0x1dbb42(1031),
      with: [String(_0xac80d2)]
    }]
  });
}
var _allShopsCache = null,
  _allShopsCacheVersion = -1;
function getAllShops() {
  const _0x54b117 = _0x20c7bb,
    _0x3ed2b6 = {
      kVlGj: "string"
    };
  if (_allShopsCache && _allShopsCacheVersion === _dataVersion) return _allShopsCache;
  const _0x24ad56 = getCachedDpIds(),
    _0x49af9d = [];
  for (const _0x5582b0 of _0x24ad56) {
    if (typeof _0x5582b0 !== _0x3ed2b6[_0x54b117(650)] || !_0x5582b0[_0x54b117(1022)](_0x54b117(893))) continue;
    const _0x24f9af = _0x5582b0[_0x54b117(699)](6);
    if (!_0x24f9af || _0x24f9af === _0x54b117(1309)) continue;
    const _0x524155 = loadTradeRoot(_0x24f9af);
    if (!_0x524155) continue;
    const _0x31525a = _0x524155[_0x54b117(641)] || [];
    let _0x11ea72 = _0x524155[_0x54b117(1322)] || _0x54b117(1300);
    !_0x524155[_0x54b117(1322)] && _0x31525a.length === 1 && _0x31525a[0] && _0x31525a[0].type === _0x54b117(370) && (_0x11ea72 = _0x54b117(370)), _0x49af9d[_0x54b117(943)]({
      name: _0x24f9af,
      displayName: _0x524155[_0x54b117(562)] || _0x24f9af,
      shopType: _0x11ea72,
      childCount: countDisplayChildren(_0x31525a),
      root: _0x524155
    });
  }
  return _0x49af9d[_0x54b117(1007)]((_0x42a35a, _0x29c09e) => (_0x42a35a[_0x54b117(716)] || "")[_0x54b117(583)](_0x29c09e[_0x54b117(716)] || "")), _allShopsCache = _0x49af9d, _allShopsCacheVersion = _dataVersion, _0x49af9d;
}
function deleteShop(_0x3270d4, _0x2a2faf, _0x3fc67a = () => shopManagerUi(_0x3270d4)) {
  const _0x147fa1 = _0x20c7bb,
    _0x30091f = {
      xCLcy: function (_0x1fb7c4, _0x3d686, _0x951836) {
        return _0x1fb7c4(_0x3d686, _0x951836);
      },
      uqlCf: "trade:",
      KmamH: function (_0x3869e0, _0x4a7a92) {
        return _0x3869e0 + _0x4a7a92;
      }
    };
  if (!_0x3270d4[_0x147fa1(518)](_0x147fa1(860))) return;
  const _0x436fa5 = loadTradeRoot(_0x2a2faf);
  if (!_0x436fa5) {
    _0x30091f[_0x147fa1(771)](sendTitle, _0x3270d4, _0x147fa1(484));
    return;
  }
  const _0x5ad6a8 = new Set();
  _0x5ad6a8.add(_0x2a2faf);
  function _0x50a1b3(_0x304d3e) {
    const _0x3b1cdd = _0x147fa1;
    if (!_0x304d3e) return;
    if (_0x304d3e[_0x3b1cdd(654)]) _0x5ad6a8[_0x3b1cdd(857)](_0x304d3e.storage);
    if (_0x304d3e[_0x3b1cdd(1116)] === _0x3b1cdd(370) && !_0x304d3e[_0x3b1cdd(654)]) {
      _0x5ad6a8.add(_0x2a2faf);
      if (_0x304d3e[_0x3b1cdd(451)]) _0x5ad6a8[_0x3b1cdd(857)](_0x304d3e[_0x3b1cdd(451)]);
    }
    Array[_0x3b1cdd(1080)](_0x304d3e.children) && _0x304d3e[_0x3b1cdd(641)][_0x3b1cdd(601)](_0x50a1b3);
  }
  (_0x436fa5[_0x147fa1(641)] || [])[_0x147fa1(601)](_0x50a1b3), _0x144cf1.world.setDynamicProperty(_0x30091f[_0x147fa1(843)] + _0x2a2faf, void 0), invalidateShopCache(_0x2a2faf, {
    discardPending: !![]
  }), sendTitle(_0x3270d4, _0x147fa1(1308), [_0x2a2faf]), _0x5ad6a8[_0x147fa1(601)](_0x2d3edc => storage_default[_0x147fa1(895)](_0x2d3edc, _0x3270d4));
  try {
    const _0x4682c7 = ["overworld", "nether", _0x147fa1(814)],
      _0x4d6803 = "shopkeeper:" + _0x2a2faf;
    for (const _0x1a882e of _0x4682c7) {
      const _0x22e84d = _0x144cf1.world.getDimension(_0x1a882e),
        _0x1d9663 = _0x22e84d[_0x147fa1(1058)]({
          type: _0x147fa1(1113)
        });
      for (const _0x51fd18 of _0x1d9663) {
        try {
          if (!_0x51fd18 || typeof _0x51fd18[_0x147fa1(846)] !== _0x147fa1(712)) continue;
          const _0x43da16 = _0x51fd18[_0x147fa1(846)]();
          for (const _0x16585f of _0x43da16) {
            (_0x16585f === _0x4d6803 || _0x16585f[_0x147fa1(1022)](_0x30091f[_0x147fa1(1296)](_0x4d6803, ":"))) && _0x51fd18[_0x147fa1(550)](_0x16585f);
          }
        } catch (_0x8a9f05) {}
      }
    }
  } catch (_0x9fba9a) {}
  _0x3270d4[_0x147fa1(710)]({
    rawtext: [{
      translate: _0x147fa1(1340),
      with: [_0x2a2faf]
    }]
  }), _0x144cf1.system.run(_0x3fc67a);
}
function showShopActions(_0x573353, _0x7d8ce2, _0x43b343 = () => shopManagerUi(_0x573353)) {
  const _0x3f8d58 = _0x20c7bb,
    _0x4a1979 = {
      KZYQC: function (_0x3dc2cd, _0x176fee) {
        return _0x3dc2cd(_0x176fee);
      },
      dLPEx: _0x3f8d58(1319),
      UOMdx: _0x3f8d58(415)
    };
  log[_0x3f8d58(653)](_0x3f8d58(1301), {
    player: _0x573353[_0x3f8d58(598)],
    shop: _0x7d8ce2 && _0x7d8ce2[_0x3f8d58(598)],
    type: _0x7d8ce2 && _0x7d8ce2[_0x3f8d58(414)]
  });
  const _0x1ce1e3 = !!_0x573353[_0x3f8d58(518)] && _0x573353.hasTag(_0x3f8d58(860)),
    _0x427f43 = new ActionFormData4()[_0x3f8d58(1352)]({
      text: "\xA7l" + _0x7d8ce2[_0x3f8d58(716)]
    }).body({
      translate: _0x3f8d58(1128),
      with: [_0x7d8ce2.name, _0x7d8ce2[_0x3f8d58(414)], String(_0x7d8ce2[_0x3f8d58(885)])]
    });
  _0x427f43[_0x3f8d58(730)]({
    translate: _0x3f8d58(503)
  }), _0x427f43[_0x3f8d58(730)]({
    translate: "shopkeeper.manager.storage"
  }), _0x1ce1e3 && (_0x427f43[_0x3f8d58(730)]({
    translate: "shopkeeper.manager.delete"
  }), _0x427f43.button({
    translate: _0x3f8d58(561)
  }), _0x427f43[_0x3f8d58(730)]({
    translate: _0x4a1979[_0x3f8d58(612)]
  })), _0x427f43[_0x3f8d58(730)]({
    translate: _0x3f8d58(985)
  }), _0x144cf1[_0x3f8d58(1348)][_0x3f8d58(986)](() => {
    const _0x43c9da = _0x3f8d58,
      _0x3eca6f = {
        bfylO: function (_0xab7afb, _0x1625fe) {
          return _0xab7afb === _0x1625fe;
        },
        WFSin: _0x43c9da(1015),
        nIRPQ: function (_0x297935, _0x253753) {
          const _0x3f4811 = _0x43c9da;
          return _0x4a1979[_0x3f4811(1088)](_0x297935, _0x253753);
        },
        yfWby: "shopkeeper.policy.save.failed",
        iMBEW: function (_0x73e210, _0x445ff1, _0x5a45ec, _0x2adf9d, _0x2c01d8, _0x8b1229) {
          return _0x73e210(_0x445ff1, _0x5a45ec, _0x2adf9d, _0x2c01d8, _0x8b1229);
        },
        loPaq: function (_0x5c5287, _0x990dc4, _0x5ea7b0, _0x219f49, _0x48eb76, _0x5871fc, _0x11e3be) {
          return _0x5c5287(_0x990dc4, _0x5ea7b0, _0x219f49, _0x48eb76, _0x5871fc, _0x11e3be);
        },
        smDZS: _0x43c9da(781),
        OQrza: _0x4a1979[_0x43c9da(1136)]
      };
    _guardForm(_0x427f43[_0x43c9da(402)](_0x573353)[_0x43c9da(479)](_0x2df49e => {
      const _0x4725d0 = _0x43c9da,
        _0x5a6e02 = {
          SQRXE: function (_0x5bf0c2, _0x524e99, _0x3c7cad, _0x4764d4, _0x287799) {
            return _0x5bf0c2(_0x524e99, _0x3c7cad, _0x4764d4, _0x287799);
          },
          gNFRK: _0x3eca6f[_0x4725d0(1222)],
          HXmxt: function (_0x32386f, _0x36026a) {
            const _0x4e280a = _0x4725d0;
            return _0x3eca6f[_0x4e280a(790)](_0x32386f, _0x36026a);
          },
          BsNuN: _0x3eca6f[_0x4725d0(683)],
          oGDwH: function (_0x1c8699, _0x2e58f7) {
            return _0x1c8699(_0x2e58f7);
          }
        };
      if (_0x2df49e.canceled || _0x3eca6f.bfylO(_0x2df49e[_0x4725d0(526)], void 0)) {
        _0x144cf1[_0x4725d0(1348)][_0x4725d0(986)](_0x43b343);
        return;
      }
      const _0x42bbf7 = _0x2df49e[_0x4725d0(526)];
      if (_0x42bbf7 === 0) _0x144cf1[_0x4725d0(1348)][_0x4725d0(986)](() => {
        const _0x207fe2 = _0x4725d0,
          _0x5ddf2 = loadTradeRoot(_0x7d8ce2[_0x207fe2(598)]);
        if (isItemShopRoot(_0x5ddf2)) {
          const _0x3fbb78 = (_0x5ddf2[_0x207fe2(641)] || [])[0];
          if (_0x3fbb78) _0x5a6e02.SQRXE(enhancedTradeUi, _0x573353, _0x7d8ce2.name, _0x3fbb78, "");else folderUi(_0x573353, _0x7d8ce2.name, "");
        } else _0x5ddf2 && _0x5ddf2[_0x207fe2(1322)] === _0x207fe2(1373) ? folderSetUi(_0x573353, _0x7d8ce2[_0x207fe2(598)], "", 0) : folderUi(_0x573353, _0x7d8ce2.name, "");
      });else {
        if (_0x42bbf7 === 1) _0x3eca6f[_0x4725d0(475)](openStoragePage, _0x573353, _0x7d8ce2.name, 0, "", _0x43b343);else {
          if (_0x42bbf7 === 2 && _0x1ce1e3) {
            const _0xf8a3a8 = new ActionFormData4().title({
              translate: "shopkeeper.manager.delete.confirm.title"
            })[_0x4725d0(463)]({
              translate: _0x4725d0(1326),
              with: [_0x7d8ce2[_0x4725d0(716)], _0x7d8ce2[_0x4725d0(598)]]
            });
            _0xf8a3a8.button({
              translate: _0x4725d0(611)
            }), _0xf8a3a8[_0x4725d0(730)]({
              translate: "shopkeeper.cancel"
            }), _0x144cf1.system[_0x4725d0(986)](() => {
              const _0x30d2dc = _0x4725d0,
                _0x2e0a23 = {
                  tgcND: function (_0x292557, _0x1a6f5f) {
                    return _0x292557 === _0x1a6f5f;
                  }
                };
              _guardForm(_0xf8a3a8.show(_0x573353)[_0x30d2dc(479)](_0x391a97 => {
                const _0x3d5453 = _0x30d2dc;
                _0x2e0a23[_0x3d5453(488)](_0x391a97.selection, 0) ? deleteShop(_0x573353, _0x7d8ce2[_0x3d5453(598)], _0x43b343) : _0x144cf1[_0x3d5453(1348)][_0x3d5453(986)](_0x43b343);
              }), _0x5a6e02.gNFRK);
            });
          } else {
            if (_0x42bbf7 === 3 && _0x1ce1e3) {
              const _0x47e4c6 = loadTradeRoot(_0x7d8ce2[_0x4725d0(598)]);
              _0x3eca6f[_0x4725d0(642)](policySelectUi, _0x573353, policyStore, "shop", _0x47e4c6?.[_0x4725d0(765)] || _0x4725d0(1319), _0x396d84 => {
                const _0x1c5a61 = _0x4725d0,
                  _0x4443b5 = _0x5a6e02.HXmxt(loadTradeRoot, _0x7d8ce2[_0x1c5a61(598)]);
                if (!_0x4443b5) return;
                const _0x19daf4 = JSON[_0x1c5a61(1223)](JSON.stringify(_0x4443b5));
                _0x19daf4[_0x1c5a61(765)] = _0x396d84;
                if (!saveTradeRoot(_0x7d8ce2[_0x1c5a61(598)], _0x19daf4)) sendTitle(_0x573353, _0x5a6e02[_0x1c5a61(1274)]);
                showShopActions(_0x573353, _0x7d8ce2, _0x43b343);
              }, () => showShopActions(_0x573353, _0x7d8ce2, _0x43b343));
            } else {
              if (_0x42bbf7 === 4 && _0x1ce1e3) {
                let _0x33a97b = function (_0xa8373a) {
                  const _0x59bb43 = _0x4725d0;
                  for (const _0x5df9c4 of _0xa8373a.children || []) {
                    if (_0x3eca6f[_0x59bb43(668)](_0x5df9c4[_0x59bb43(1116)], _0x59bb43(370))) _0x415aea++;else _0x33a97b(_0x5df9c4);
                  }
                };
                const _0x1469a0 = loadTradeRoot(_0x7d8ce2[_0x4725d0(598)]);
                let _0x415aea = 0;
                if (_0x1469a0) _0x3eca6f[_0x4725d0(790)](_0x33a97b, _0x1469a0);
                policySelectUi(_0x573353, policyStore, _0x3eca6f[_0x4725d0(574)], _0x3eca6f[_0x4725d0(944)], _0x5a088e => {
                  const _0x941cec = _0x4725d0,
                    _0x2e229e = {
                      vZAEj: "admin",
                      ZkyUI: function (_0x11cfe1, _0x1468b5, _0x4178e0) {
                        return _0x11cfe1(_0x1468b5, _0x4178e0);
                      }
                    },
                    _0x514bfa = new ActionFormData4().title({
                      translate: _0x941cec(415)
                    }).body({
                      translate: _0x941cec(483),
                      with: [_0x5a6e02.oGDwH(String, _0x415aea), _0x5a088e]
                    })[_0x941cec(730)]({
                      translate: _0x941cec(849)
                    })[_0x941cec(730)]({
                      translate: _0x941cec(1269)
                    });
                  _guardForm(_0x514bfa.show(_0x573353)[_0x941cec(479)](_0x510bc7 => {
                    const _0x15d9a0 = _0x941cec,
                      _0x377c7b = {
                        lyPwO: function (_0x3d439b, _0x40d17f) {
                          return _0x3d439b === _0x40d17f;
                        }
                      };
                    if (!_0x573353[_0x15d9a0(518)](_0x2e229e[_0x15d9a0(747)])) return;
                    if (_0x510bc7.selection !== 0) return showShopActions(_0x573353, _0x7d8ce2, _0x43b343);
                    const _0x38fb79 = loadTradeRoot(_0x7d8ce2.name);
                    if (!_0x38fb79) return;
                    const _0x2fd568 = JSON[_0x15d9a0(1223)](JSON.stringify(_0x38fb79));
                    function _0x468270(_0x1dcdcb) {
                      const _0x20cde2 = _0x15d9a0;
                      for (const _0x9e401c of _0x1dcdcb[_0x20cde2(641)] || []) {
                        if (_0x377c7b[_0x20cde2(1043)](_0x9e401c[_0x20cde2(1116)], "item")) _0x9e401c[_0x20cde2(1304)] = _0x5a088e;else _0x468270(_0x9e401c);
                      }
                    }
                    _0x468270(_0x2fd568);
                    if (!saveTradeRoot(_0x7d8ce2[_0x15d9a0(598)], _0x2fd568)) _0x2e229e.ZkyUI(sendTitle, _0x573353, _0x15d9a0(816));
                    showShopActions(_0x573353, _0x7d8ce2, _0x43b343);
                  }), _0x941cec(546));
                }, () => showShopActions(_0x573353, _0x7d8ce2, _0x43b343));
              } else _0x144cf1.system[_0x4725d0(986)](_0x43b343);
            }
          }
        }
      }
    }), _0x43c9da(1124));
  });
}
function shopManagerUi(_0x216cdb, _0x36e691 = 0, _0x40754e = "", _0x22911c = () => toolMenuUi(_0x216cdb)) {
  const _0x4583f9 = _0x20c7bb,
    _0x135802 = {
      NZZID: function (_0x81e2be, _0x2e2963) {
        return _0x81e2be(_0x2e2963);
      },
      XmWVj: function (_0x37fdaf, _0x43fca6) {
        return _0x37fdaf === _0x43fca6;
      },
      hVOfQ: function (_0x35073d) {
        return _0x35073d();
      },
      enUZS: _0x4583f9(1371),
      SMxCc: function (_0x33081f, _0x47739f) {
        return _0x33081f < _0x47739f;
      },
      YvrxY: _0x4583f9(860),
      dbxeu: function (_0x4c8868) {
        return _0x4c8868();
      },
      ctLUK: function (_0x5a43ef, _0x116735) {
        return _0x5a43ef + _0x116735;
      },
      iWbEa: function (_0x3c224, _0x364022) {
        return _0x3c224 * _0x364022;
      },
      yycFW: function (_0x423eac, _0x489822) {
        return _0x423eac - _0x489822;
      },
      Mbywn: function (_0x1638d4, _0x38039a) {
        return _0x1638d4 * _0x38039a;
      },
      MlSXJ: function (_0x3003e4, _0x2999c9, _0x3dcb0e, _0x3de3c8) {
        return _0x3003e4(_0x2999c9, _0x3dcb0e, _0x3de3c8);
      },
      vvOXN: function (_0x51255f, _0x14b055) {
        return _0x51255f < _0x14b055;
      },
      labRI: function (_0x3099a9, _0x99cf1) {
        return _0x3099a9 / _0x99cf1;
      },
      EQfST: function (_0x3a25ef, _0x2d18f7) {
        return _0x3a25ef * _0x2d18f7;
      },
      BijVV: _0x4583f9(418),
      JDzUf: "shopkeeper.manager.type.folder",
      TJRad: "minecraft:emerald",
      KFSzl: _0x4583f9(1373),
      PtSfg: _0x4583f9(569),
      jZvII: function (_0x46afa0, _0x3b7f29) {
        return _0x46afa0 || _0x3b7f29;
      },
      PfbeU: "minecraft:compass",
      FQKKY: _0x4583f9(927),
      hpPOB: function (_0x36ef7c, _0xe6c21a) {
        return _0x36ef7c + _0xe6c21a;
      },
      qhZGk: _0x4583f9(455),
      fVWOj: "minecraft:book"
    },
    _0x4e97b2 = _0x135802.dbxeu(getAllShops)[_0x4583f9(1099)](_0x77f683 => (_0x77f683[_0x4583f9(598)] + " " + _0x77f683[_0x4583f9(716)])[_0x4583f9(983)]().includes(_0x40754e[_0x4583f9(983)]()));
  _0x36e691 = Math.max(0, Math[_0x4583f9(1208)](_0x36e691, Math[_0x4583f9(955)](0, Math[_0x4583f9(1081)](_0x4e97b2[_0x4583f9(459)] / 28) - 1))), log[_0x4583f9(653)]("shopManagerUi", {
    player: _0x216cdb[_0x4583f9(598)],
    shops: _0x4e97b2.length
  });
  const _0x17e4a0 = new ChestFormData("54")[_0x4583f9(1352)]({
    translate: _0x4583f9(830)
  });
  applyFolderPattern(_0x17e4a0);
  if (_0x4e97b2[_0x4583f9(459)] === 0) _0x17e4a0.button(22, {
    translate: _0x4583f9(1328)
  }, {
    translate: "shopkeeper.manager.empty.hint"
  }, _0x4583f9(733), 1);else for (let _0xe4bf44 = 0; _0x135802.vvOXN(_0xe4bf44, 28) && _0x36e691 * 28 + _0xe4bf44 < _0x4e97b2[_0x4583f9(459)]; _0xe4bf44++) {
    const _0x47a448 = _0x4e97b2[_0x36e691 * 28 + _0xe4bf44],
      _0x2b6d73 = Math[_0x4583f9(536)](_0x135802[_0x4583f9(1061)](_0xe4bf44, 7)) + 1,
      _0x9f9e43 = _0x135802.ctLUK(_0xe4bf44 % 7, 1),
      _0x48a269 = _0x135802.EQfST(_0x2b6d73, 9) + _0x9f9e43,
      _0x1ebb06 = _0x47a448[_0x4583f9(414)] === "item" ? _0x4583f9(446) : _0x47a448.shopType === _0x4583f9(1373) ? _0x135802[_0x4583f9(922)] : _0x135802[_0x4583f9(1316)],
      _0x1628e0 = {
        rawtext: [{
          translate: _0x4583f9(1347),
          with: [_0x47a448[_0x4583f9(598)], _0x47a448.shopType, String(_0x47a448.childCount)]
        }, {
          text: "\n"
        }, {
          translate: _0x216cdb[_0x4583f9(518)](_0x4583f9(860)) ? "shopkeeper.manager.entry.admin.hint" : _0x4583f9(570)
        }]
      },
      _0x35ed1f = _0x47a448.shopType === _0x4583f9(370) ? _0x135802[_0x4583f9(937)] : _0x47a448[_0x4583f9(414)] === _0x135802[_0x4583f9(432)] ? "minecraft:ender_chest" : _0x135802[_0x4583f9(976)];
    _0x17e4a0[_0x4583f9(730)](_0x48a269, {
      rawtext: [{
        translate: _0x1ebb06
      }, {
        text: _0x4583f9(759) + _0x47a448[_0x4583f9(716)]
      }]
    }, _0x1628e0, _0x35ed1f, 1, 0, ![]);
  }
  _0x17e4a0[_0x4583f9(730)](47, {
    translate: _0x4583f9(1269)
  }, {
    rawtext: [{
      translate: _0x4583f9(742)
    }]
  }, _0x4583f9(1168), 1), _0x17e4a0[_0x4583f9(730)](48, {
    translate: _0x4583f9(1371)
  }, {
    text: _0x135802[_0x4583f9(1053)](_0x40754e, " ")
  }, _0x135802[_0x4583f9(1264)], 1);
  if (_0x36e691 > 0) _0x17e4a0[_0x4583f9(730)](50, {
    translate: "shopkeeper.policy.prev"
  }, {
    text: String(_0x36e691)
  }, _0x4583f9(436), 1);
  if ((_0x36e691 + 1) * 28 < _0x4e97b2[_0x4583f9(459)]) _0x17e4a0[_0x4583f9(730)](52, {
    translate: _0x135802[_0x4583f9(958)]
  }, {
    text: String(_0x135802[_0x4583f9(632)](_0x36e691, 2))
  }, "minecraft:arrow", 1);
  _0x216cdb[_0x4583f9(518)](_0x4583f9(860)) && (_0x17e4a0[_0x4583f9(730)](49, {
    translate: _0x135802.qhZGk
  }, {
    rawtext: [{
      translate: _0x4583f9(1141)
    }]
  }, _0x135802[_0x4583f9(827)], 1), _0x17e4a0[_0x4583f9(730)](51, {
    translate: "shopkeeper.manager.storage.cleanup"
  }, {
    translate: _0x4583f9(1284)
  }, _0x4583f9(817), 1)), _0x144cf1[_0x4583f9(1348)][_0x4583f9(986)](() => {
    const _0x551faa = _0x4583f9;
    _guardForm(_0x17e4a0[_0x551faa(402)](_0x216cdb)[_0x551faa(479)](_0x28f9ed => {
      const _0x4f5789 = _0x551faa,
        _0x5ba5e4 = {
          QRBdL: function (_0xe0a1b4, _0x99325a) {
            return _0xe0a1b4 === _0x99325a;
          }
        };
      if (!_0x135802.NZZID(isPlayerValid, _0x216cdb)) return;
      if (_0x28f9ed[_0x4f5789(505)]) return;
      const _0x58cac8 = _0x28f9ed.selection;
      if (_0x135802[_0x4f5789(696)](_0x58cac8, 47)) return _0x135802[_0x4f5789(1067)](_0x22911c);
      if (_0x58cac8 === 48) {
        const _0x2e0f58 = () => shopManagerUi(_0x216cdb, _0x36e691, _0x40754e, _0x22911c);
        _guardForm(new ModalFormData3()[_0x4f5789(1352)]({
          translate: _0x135802[_0x4f5789(695)]
        })[_0x4f5789(471)]({
          translate: "shopkeeper.policy.search"
        }, "", {
          defaultValue: _0x40754e
        }).show(_0x216cdb).then(_0x54aa6d => _0x54aa6d[_0x4f5789(505)] ? shopManagerUi(_0x216cdb, _0x36e691, _0x40754e, _0x22911c) : shopManagerUi(_0x216cdb, 0, String(_0x54aa6d[_0x4f5789(362)][0] || ""), _0x2e0f58)), "shopManagerSearch");
        return;
      }
      if (_0x58cac8 === 49 && _0x216cdb[_0x4f5789(518)](_0x4f5789(860))) return policyLibraryUi(_0x216cdb, policyStore, () => shopManagerUi(_0x216cdb, _0x36e691, _0x40754e, _0x22911c));
      if (_0x58cac8 === 50 && _0x36e691 > 0) return shopManagerUi(_0x216cdb, _0x36e691 - 1, _0x40754e, _0x22911c);
      if (_0x58cac8 === 52 && _0x135802.SMxCc((_0x36e691 + 1) * 28, _0x4e97b2[_0x4f5789(459)])) return shopManagerUi(_0x216cdb, _0x36e691 + 1, _0x40754e, _0x22911c);
      if (_0x58cac8 === 51 && _0x216cdb[_0x4f5789(518)](_0x135802.YvrxY)) {
        const _0x1a1aab = Array.from(_0x135802[_0x4f5789(1123)](getAllActiveStorageNames)),
          _0x5d3a9f = storage_default[_0x4f5789(848)](_0x1a1aab);
        _0x216cdb[_0x4f5789(710)]({
          rawtext: [{
            translate: _0x4f5789(787),
            with: [String(_0x5d3a9f)]
          }]
        });
        return;
      }
      let _0x23c965 = -1;
      const _0x188bb3 = Math.floor(_0x58cac8 / 9),
        _0x596a95 = _0x58cac8 % 9;
      if (_0x188bb3 >= 1 && _0x188bb3 <= 4 && _0x596a95 >= 1 && _0x596a95 <= 7) {
        if ("ZGLJg" !== _0x4f5789(1122)) {
          const _0x268ec4 = _0x135802[_0x4f5789(1243)](_0x135802[_0x4f5789(820)](_0x188bb3 - 1, 7), _0x135802[_0x4f5789(1063)](_0x596a95, 1));
          if (_0x268ec4 >= 0 && _0x135802[_0x4f5789(1243)](_0x135802[_0x4f5789(882)](_0x36e691, 28), _0x268ec4) < _0x4e97b2.length) _0x23c965 = _0x135802[_0x4f5789(882)](_0x36e691, 28) + _0x268ec4;
        } else {
          const _0x1aeb73 = _0x5ba5e4[_0x4f5789(1049)](typeof _0x1e0032[_0x4f5789(635)], _0x4f5789(712)) ? _0xc82fd3[_0x4f5789(635)]() : !![];
          if (!_0x1aeb73) return;
        }
      }
      if (_0x23c965 === -1) return;
      const _0x5ec9aa = _0x4e97b2[_0x23c965];
      _0x135802[_0x4f5789(609)](showShopActions, _0x216cdb, _0x5ec9aa, () => shopManagerUi(_0x216cdb, _0x36e691, _0x40754e, _0x22911c));
    }), "shopManagerUi");
  });
}
function openStoragePage(_0x2aa1e6, _0x4f95f2, _0x154840, _0x4b9400, _0x15aa48 = () => shopManagerUi(_0x2aa1e6)) {
  const _0x36b142 = _0x20c7bb,
    _0x2d8ac1 = {
      yNxcp: function (_0x14dff4, _0x20d0e3, _0x5ed840, _0x3e8487, _0x1a0b67, _0x120ecb) {
        return _0x14dff4(_0x20d0e3, _0x5ed840, _0x3e8487, _0x1a0b67, _0x120ecb);
      },
      umcYf: function (_0x2a64a7, _0x562ada) {
        return _0x2a64a7 === _0x562ada;
      },
      NZqYV: function (_0x60910d, _0x560a63, _0x594b26, _0x5d099a, _0x1368da, _0x13fa64) {
        return _0x60910d(_0x560a63, _0x594b26, _0x5d099a, _0x1368da, _0x13fa64);
      },
      xqttN: _0x36b142(1231),
      GflOx: function (_0x56fca8, _0x4d365a) {
        return _0x56fca8 ?? _0x4d365a;
      },
      ZTItJ: function (_0x56c430, _0x200ef6) {
        return _0x56c430 * _0x200ef6;
      },
      BEHmG: _0x36b142(1044),
      JgFKe: function (_0x1e859b, _0x347028, _0x34ec2a) {
        return _0x1e859b(_0x347028, _0x34ec2a);
      },
      dAXzu: "item",
      AogQb: function (_0x256dfb, _0x572e44) {
        return _0x256dfb / _0x572e44;
      },
      PssxB: function (_0x2abe93, _0x1c5bea) {
        return _0x2abe93 > _0x1c5bea;
      },
      yopbc: "shopkeeper.storage.title",
      RWDQi: function (_0x1c6bd, _0x807fe8) {
        return _0x1c6bd + _0x807fe8;
      },
      InhGZ: _0x36b142(393),
      bMuzP: function (_0x42144c, _0x25fe7c) {
        return _0x42144c * _0x25fe7c;
      },
      HULwp: function (_0x33b939, _0x35f0a2) {
        return _0x33b939(_0x35f0a2);
      },
      yQuno: function (_0x5681fa, _0x2b4f0a) {
        return _0x5681fa(_0x2b4f0a);
      }
    };
  log[_0x36b142(653)](_0x36b142(1171), {
    player: _0x2aa1e6.name,
    storageName: _0x4f95f2,
    page: _0x154840,
    searchKey: _0x4b9400
  });
  const _0x246660 = storage_default[_0x36b142(680)](_0x2aa1e6, _0x4f95f2),
    _0x37427d = [];
  for (let _0x98bd3a = 1; _0x98bd3a <= 4; _0x98bd3a++) {
    for (let _0x29316a = 1; _0x29316a <= 7; _0x29316a++) {
      _0x37427d[_0x36b142(943)](_0x98bd3a * 9 + _0x29316a);
    }
  }
  const _0x3928fe = _0x37427d.length;
  let _0x1c4a46 = [];
  for (let _0x121e33 = 0; _0x121e33 < _0x246660.length; _0x121e33++) {
    const _0x3569d2 = _0x246660[_0x121e33];
    if (!_0x3569d2) continue;
    if (!_0x4b9400 || _0x4b9400 === "") {
      _0x1c4a46[_0x36b142(943)]({
        item: _0x3569d2,
        slot: _0x121e33
      });
      continue;
    }
    const _0x4aa670 = (_0x3569d2[_0x36b142(942)] ?? "").toLowerCase(),
      _0x92da50 = (_0x3569d2.typeId ?? "")[_0x36b142(983)](),
      _0x2f05ab = _0x4b9400[_0x36b142(983)]();
    let _0x4f6938 = "";
    try {
      _0x4f6938 = (plainLocalizationKey(_0x3569d2) ?? "")[_0x36b142(983)]();
    } catch (_0x432b81) {}
    (_0x4aa670.includes(_0x2f05ab) || _0x92da50[_0x36b142(1275)](_0x2f05ab) || _0x4f6938 !== "" && _0x4f6938[_0x36b142(1275)](_0x2f05ab)) && _0x1c4a46.push({
      item: _0x3569d2,
      slot: _0x121e33
    });
  }
  const _0x197253 = Math[_0x36b142(955)](0, Math.floor(_0x2d8ac1[_0x36b142(872)](_0x1c4a46[_0x36b142(459)] - 1, _0x3928fe)));
  if (_0x154840 < 0) _0x154840 = 0;
  if (_0x2d8ac1[_0x36b142(1349)](_0x154840, _0x197253)) _0x154840 = _0x197253;
  const _0x7f9113 = new ChestFormData("54")[_0x36b142(1352)]({
    translate: _0x2d8ac1.yopbc,
    with: [String(_0x2d8ac1.RWDQi(_0x154840, 1))]
  });
  _0x7f9113[_0x36b142(556)]([_0x36b142(1154), _0x36b142(393), _0x36b142(393), _0x2d8ac1[_0x36b142(670)], _0x36b142(393), _0x36b142(1002)], {
    x: {
      texture: _0x36b142(800),
      itemName: "",
      stackAmount: 1
    },
    t: {
      texture: _0x36b142(436),
      itemName: {
        translate: _0x36b142(1278)
      },
      stackAmount: 1
    },
    s: {
      texture: _0x36b142(436),
      itemName: {
        translate: _0x36b142(1004)
      },
      stackAmount: 1,
      enchanted: !![]
    },
    ".": {
      texture: "minecraft:compass",
      itemName: {
        translate: _0x36b142(1250)
      },
      itemDesc: _0x4b9400 ? {
        rawtext: [{
          translate: _0x36b142(807),
          with: [_0x4b9400]
        }]
      } : {
        rawtext: [{
          translate: _0x36b142(1106)
        }]
      },
      stackAmount: 1
    }
  }), _0x7f9113.button(47, {
    translate: "shopkeeper.back"
  }, {
    rawtext: [{
      translate: _0x36b142(742)
    }]
  }, _0x36b142(1168), 1);
  for (let _0x2db0c6 = 0; _0x2db0c6 < _0x3928fe; _0x2db0c6++) {
    const _0x970fa1 = _0x1c4a46[_0x2d8ac1.bMuzP(_0x154840, _0x3928fe) + _0x2db0c6];
    if (!_0x970fa1) continue;
    const _0x4a1343 = _0x37427d[_0x2db0c6],
      _0x42f942 = _0x970fa1[_0x36b142(370)],
      _0x1e1a41 = _0x2d8ac1.HULwp(getEnchantmentInfo, _0x42f942);
    let _0x451c87 = getDisplayLore(_0x42f942, _0x4f95f2, _0x970fa1[_0x36b142(735)]);
    _0x7f9113[_0x36b142(730)](_0x4a1343, _0x2d8ac1[_0x36b142(1108)](getItemDisplayName2, _0x42f942), _0x451c87, _0x42f942[_0x36b142(764)], _0x42f942[_0x36b142(989)] ?? 1, getDisplayDurability(_0x42f942), _0x1e1a41[_0x36b142(714)]);
  }
  _0x144cf1[_0x36b142(1348)][_0x36b142(986)](() => {
    const _0x547021 = _0x36b142;
    _guardForm(_0x7f9113[_0x547021(402)](_0x2aa1e6)[_0x547021(479)](_0x2b3cc3 => {
      const _0x33caee = _0x547021,
        _0x391724 = {
          VdGNB: function (_0x357a22, _0x32f7a5, _0x159ce0, _0x3f9718, _0x3aa9c6, _0x1c1d45) {
            return _0x2d8ac1.yNxcp(_0x357a22, _0x32f7a5, _0x159ce0, _0x3f9718, _0x3aa9c6, _0x1c1d45);
          }
        };
      if (_0x2b3cc3.canceled) return;
      if (_0x2d8ac1[_0x33caee(437)](_0x2b3cc3[_0x33caee(526)], void 0)) return;
      const _0x8f3f38 = _0x2b3cc3.selection;
      if (_0x2d8ac1[_0x33caee(437)](_0x8f3f38, 47)) return _0x15aa48();
      if (_0x8f3f38 === 48) {
        openStoragePage(_0x2aa1e6, _0x4f95f2, _0x154840 - 1, _0x4b9400, _0x15aa48);
        return;
      }
      if (_0x2d8ac1[_0x33caee(437)](_0x8f3f38, 50)) {
        _0x2d8ac1.NZqYV(openStoragePage, _0x2aa1e6, _0x4f95f2, _0x154840 + 1, _0x4b9400, _0x15aa48);
        return;
      }
      if (_0x8f3f38 === 49) {
        const _0x207ebd = new ModalFormData3()[_0x33caee(1352)]({
          translate: _0x33caee(522)
        })[_0x33caee(471)]({
          translate: _0x2d8ac1[_0x33caee(513)]
        }, "", {
          defaultValue: _0x2d8ac1.GflOx(_0x4b9400, "")
        });
        _0x144cf1.system[_0x33caee(986)](() => {
          const _0x51cfb2 = _0x33caee,
            _0x1d2c1b = {
              kOhUJ: function (_0x56bb6d, _0x5230a5) {
                return _0x56bb6d === _0x5230a5;
              },
              wZqso: function (_0x3dcfbc, _0x5afad5, _0x1f3c5d, _0x536991, _0x10a466, _0x4b9517) {
                return _0x391724.VdGNB(_0x3dcfbc, _0x5afad5, _0x1f3c5d, _0x536991, _0x10a466, _0x4b9517);
              }
            };
          if (_0x51cfb2(552) !== "ZJGlT") {
            const _0x3aaa80 = _0x401a59.maxAmount;
            if (WeshMa[_0x51cfb2(416)](typeof _0x3aaa80, _0x51cfb2(829)) && _0x3aaa80 >= 1) _0x2e3c0e = _0x57921a[_0x51cfb2(536)](_0x3aaa80);
          } else _guardForm(_0x207ebd.show(_0x2aa1e6).then(_0x56f538 => {
            const _0x31b7fc = _0x51cfb2;
            if (_0x56f538[_0x31b7fc(505)]) return _0x1d2c1b[_0x31b7fc(881)](openStoragePage, _0x2aa1e6, _0x4f95f2, _0x154840, _0x4b9400, _0x15aa48);
            const _0x19cc13 = _0x56f538[_0x31b7fc(362)][0] ?? "";
            openStoragePage(_0x2aa1e6, _0x4f95f2, 0, _0x19cc13, () => openStoragePage(_0x2aa1e6, _0x4f95f2, _0x154840, _0x4b9400, _0x15aa48));
          }), _0x51cfb2(847));
        });
        return;
      }
      const _0x4b4fe7 = _0x37427d[_0x33caee(913)](_0x8f3f38);
      if (_0x4b4fe7 === -1) return;
      const _0x14ebee = _0x1c4a46[_0x2d8ac1[_0x33caee(555)](_0x154840, _0x3928fe) + _0x4b4fe7];
      if (!_0x14ebee) return;
      const _0x443980 = storage_default[_0x33caee(667)](_0x2aa1e6, _0x4f95f2, _0x14ebee[_0x33caee(735)]);
      if (!_0x443980) return;
      const _0x33c013 = _0x2aa1e6.getComponent(_0x2d8ac1[_0x33caee(779)])[_0x33caee(1344)],
        _0x562512 = _0x33c013[_0x33caee(369)](_0x443980[_0x33caee(1251)]());
      if (_0x562512) {
        _0x2d8ac1[_0x33caee(573)](sendTitle, _0x2aa1e6, _0x33caee(497));
        return;
      }
      storage_default[_0x33caee(963)](_0x2aa1e6, _0x4f95f2, _0x14ebee[_0x33caee(735)], void 0);
      const _0xfc1961 = loadTradeRoot(_0x4f95f2),
        _0x3bd07c = _0xfc1961 && _0xfc1961[_0x33caee(1322)] === _0x2d8ac1[_0x33caee(815)];
      if (_0x3bd07c) {
        const _0x32d1f4 = (_0xfc1961[_0x33caee(641)] || []).find(_0x37fe07 => _0x37fe07[_0x33caee(654)] === _0x4f95f2 || _0x37fe07[_0x33caee(451)] === _0x4f95f2);
        if (_0x32d1f4) {
          enhancedTradeUi(_0x2aa1e6, _0x4f95f2, _0x32d1f4, "");
          return;
        }
      }
      openStoragePage(_0x2aa1e6, _0x4f95f2, _0x154840, _0x4b9400, _0x15aa48);
    }), _0x547021(1171));
  });
}
function selectItemFromInventory(_0x1dee32, _0x654bef, _0x59027d) {
  const _0x4b8b5c = _0x20c7bb,
    _0x340bb1 = {
      VcdkI: _0x4b8b5c(1376),
      RYjNp: "shopkeeper.inventory.select.title",
      vEmsR: _0x4b8b5c(1302),
      DurtW: _0x4b8b5c(1269),
      aKYBZ: function (_0x329642, _0xfca2cf) {
        return _0x329642 / _0xfca2cf;
      },
      ltmUz: function (_0x592f2, _0x50b30a) {
        return _0x592f2 + _0x50b30a;
      },
      qPPIT: function (_0x439cd3, _0xa691a8) {
        return _0x439cd3 * _0xa691a8;
      }
    },
    _0x3aa0c4 = new ChestFormData("54")[_0x4b8b5c(1352)]({
      translate: _0x340bb1[_0x4b8b5c(844)]
    }),
    _0x23a59c = _0x654bef ? getDisplayLore(_0x654bef, void 0, void 0).rawtext : [];
  _0x3aa0c4[_0x4b8b5c(556)]([_0x4b8b5c(1135), _0x340bb1.vEmsR, _0x4b8b5c(1302), "+++++++++", _0x340bb1[_0x4b8b5c(401)], _0x4b8b5c(1107)], {
    "#": {
      texture: "textures/blocks/glass_gray",
      itemName: "",
      stackAmount: 1
    },
    _: {
      texture: _0x654bef?.[_0x4b8b5c(764)] ?? _0x4b8b5c(733),
      itemName: _0x654bef ? getItemDisplayName2(_0x654bef) : {
        translate: "shopkeeper.preview"
      },
      itemDesc: _0x23a59c,
      stackAmount: _0x654bef?.[_0x4b8b5c(989)] ?? 0,
      durability: _0x654bef ? getDisplayDurability(_0x654bef) : 0,
      enchanted: _0x654bef ? hasGlint(_0x654bef) : ![]
    },
    b: {
      texture: _0x4b8b5c(436),
      itemName: {
        translate: _0x340bb1[_0x4b8b5c(1244)]
      },
      stackAmount: 1
    }
  });
  const _0x33af46 = _0x1dee32[_0x4b8b5c(1098)](_0x4b8b5c(1044))[_0x4b8b5c(1344)];
  for (let _0x2a4ed9 = 0; _0x2a4ed9 < _0x33af46[_0x4b8b5c(664)]; _0x2a4ed9++) {
    const _0x354de2 = _0x33af46.getItem(_0x2a4ed9);
    if (!_0x354de2) continue;
    const _0x124f01 = Math[_0x4b8b5c(536)](_0x340bb1[_0x4b8b5c(1073)](_0x2a4ed9, 9)) + 1,
      _0x24a6ab = _0x2a4ed9 % 9,
      _0x1764be = _0x340bb1[_0x4b8b5c(492)](_0x340bb1[_0x4b8b5c(1273)](_0x124f01, 9), _0x24a6ab);
    if (_0x1764be >= 9 && _0x1764be <= 44) {
      const _0x2a68e3 = getDisplayLore(_0x354de2, void 0, void 0);
      _0x3aa0c4[_0x4b8b5c(730)](_0x1764be, getItemDisplayName2(_0x354de2), _0x2a68e3, _0x354de2[_0x4b8b5c(764)], _0x354de2.amount ?? 0, getDisplayDurability(_0x354de2), hasGlint(_0x354de2));
    }
  }
  _0x144cf1.system[_0x4b8b5c(986)](() => {
    const _0x428cd1 = _0x4b8b5c,
      _0xe31046 = {
        HrTEn: function (_0x189991, _0x32bc1f) {
          return _0x189991(_0x32bc1f);
        }
      };
    _guardForm(_0x3aa0c4[_0x428cd1(402)](_0x1dee32)[_0x428cd1(479)](_0x33859c => {
      const _0x5a2f4a = _0x428cd1;
      if (_0x33859c[_0x5a2f4a(505)]) return;
      if (_0x33859c[_0x5a2f4a(526)] === 49) {
        _0xe31046[_0x5a2f4a(982)](_0x59027d, null);
        return;
      }
      if (_0x33859c.selection >= 9 && _0x33859c[_0x5a2f4a(526)] <= 44) {
        const _0x418260 = _0x33859c[_0x5a2f4a(526)] - 9;
        _0x59027d(_0x418260);
      }
    }), _0x340bb1[_0x428cd1(762)]);
  });
}
function editFolderProperties(_0x1542fa, _0x5e7a67, _0x16ab8d) {
  const _0x13b6d1 = _0x20c7bb,
    _0x444f18 = {
      WUeHY: function (_0xb8a0be, _0x4351e2, _0x42e2cc, _0x118e3b) {
        return _0xb8a0be(_0x4351e2, _0x42e2cc, _0x118e3b);
      }
    },
    _0x4a32ae = loadTradeRoot(_0x5e7a67);
  if (!_0x4a32ae) return;
  const _0xabe5ce = getNode(_0x4a32ae, _0x16ab8d);
  if (!_0xabe5ce) return;
  const _0x2ab126 = _0xabe5ce[_0x13b6d1(562)] ?? "",
    _0xe30478 = _0xabe5ce[_0x13b6d1(1381)] ?? "",
    _0x34dfe2 = _0xabe5ce[_0x13b6d1(481)] ?? _0x13b6d1(569),
    _0x367327 = _0xabe5ce[_0x13b6d1(1157)] ?? ![];
  _guardForm(new ModalFormData3()[_0x13b6d1(1352)]({
    translate: _0x13b6d1(1046)
  })[_0x13b6d1(471)]({
    translate: _0x13b6d1(388)
  }, "", {
    defaultValue: _0x2ab126
  })[_0x13b6d1(471)]({
    translate: _0x13b6d1(477)
  }, "", {
    defaultValue: _0xe30478
  })[_0x13b6d1(471)]({
    translate: "shopkeeper.folder.properties.texture.label"
  }, "", {
    defaultValue: _0x34dfe2
  }).toggle({
    translate: _0x13b6d1(1133)
  }, {
    defaultValue: _0x367327
  })[_0x13b6d1(402)](_0x1542fa).then(_0x184a0d => {
    const _0x44e3b3 = _0x13b6d1;
    if (_0x184a0d[_0x44e3b3(505)]) return;
    const _0x1503fc = _0x184a0d[_0x44e3b3(362)]?.[0] ?? "",
      _0x380f93 = _0x184a0d[_0x44e3b3(362)]?.[1] ?? "",
      _0x1d63f1 = _0x184a0d.formValues?.[2] ?? "minecraft:chest",
      _0xd180a6 = !!_0x184a0d[_0x44e3b3(362)]?.[3];
    _0xabe5ce[_0x44e3b3(562)] = _0x1503fc.trim(), _0xabe5ce[_0x44e3b3(1381)] = _0x380f93.trim(), _0xabe5ce.texture = _0x1d63f1.trim(), _0xabe5ce[_0x44e3b3(1157)] = _0xd180a6, saveTradeRoot(_0x5e7a67, _0x4a32ae), sendTitle(_0x1542fa, "shopkeeper.folder.properties.updated"), _0x444f18[_0x44e3b3(631)](folderUi, _0x1542fa, _0x5e7a67, _0x16ab8d);
  }), _0x13b6d1(766));
}
_0x144cf1.system.afterEvents.scriptEventReceive.subscribe(_0x2bd0b4 => {
  const _0xc4907c = _0x20c7bb,
    _0x1830ab = {
      HEzKO: function (_0x440648, _0x59a905) {
        return _0x440648(_0x59a905);
      },
      tHlib: function (_0x1d670a, _0x24a19f, _0x1e0252) {
        return _0x1d670a(_0x24a19f, _0x1e0252);
      },
      mIjOP: _0xc4907c(1373)
    };
  if (!_0x2bd0b4.id.startsWith("namespace:")) return;
  const _0x5161b4 = _0x2bd0b4[_0xc4907c(754)];
  if (!_0x5161b4 || _0x5161b4[_0xc4907c(764)] !== _0xc4907c(676)) return;
  const _0x144fcb = _0x2bd0b4.id[_0xc4907c(586)](_0xc4907c(756), ""),
    _0x3c6327 = _0x2bd0b4.message ?? "";
  _0x144cf1[_0xc4907c(1348)].run(() => {
    const _0x12466c = _0xc4907c,
      _0x56b3a5 = _0x1830ab[_0x12466c(512)](loadTradeRoot, _0x144fcb);
    if (!_0x56b3a5) return;
    const _0x3eb36c = _0x1830ab.tHlib(getNode, _0x56b3a5, _0x3c6327);
    if (_0x3eb36c && _0x3eb36c[_0x12466c(1116)] === "item") {
      const _0x331b6f = getParentLink(_0x3c6327);
      enhancedTradeUi(_0x5161b4, _0x144fcb, _0x3eb36c, _0x331b6f);
      return;
    }
    if (_0x3eb36c && _0x3eb36c.type === _0x12466c(1373)) {
      folderSetUi(_0x5161b4, _0x144fcb, _0x3c6327, 0);
      return;
    }
    if (_0x56b3a5[_0x12466c(1322)] === _0x1830ab.mIjOP) {
      const _0x1e753a = _0x3c6327[_0x12466c(1275)]("/") ? _0x3c6327.split("/").pop() : _0x3c6327;
      if (_0x1e753a && /^\d+$/[_0x12466c(544)](_0x1e753a)) {
        folderSetUi(_0x5161b4, _0x144fcb, getParentLink(_0x3c6327), fsetSlotToPage(Number(_0x1e753a)));
        return;
      }
      folderSetUi(_0x5161b4, _0x144fcb, _0x3c6327, 0);
      return;
    }
    if (_0x1830ab.HEzKO(isItemShopRoot, _0x56b3a5) && (_0x3c6327 === "" || !_0x3c6327)) {
      const _0xea2df2 = (_0x56b3a5[_0x12466c(641)] || [])[0];
      enhancedTradeUi(_0x5161b4, _0x144fcb, _0xea2df2, "");
    } else folderUi(_0x5161b4, _0x144fcb, _0x3c6327);
  });
});
var _activeStorageCache = null,
  _activeStorageCacheVersion = -1;
function getAllActiveStorageNames() {
  const _0x40470d = _0x20c7bb,
    _0xbc0ca9 = {
      oIrAE: function (_0x576b73, _0x172ef8) {
        return _0x576b73 === _0x172ef8;
      }
    };
  if (_activeStorageCache && _activeStorageCacheVersion === _dataVersion) return _activeStorageCache;
  const _0x265d45 = getCachedDpIds(),
    _0x3cf22f = new Set();
  for (const _0x110578 of _0x265d45) {
    let _0x2e9b5e = function (_0x5f16f6) {
      const _0x41369e = _0x40470d;
      if (!_0x5f16f6) return;
      if (_0x5f16f6.storage) _0x3cf22f.add(_0x5f16f6[_0x41369e(654)]);
      if (_0xbc0ca9.oIrAE(_0x5f16f6[_0x41369e(1116)], _0x41369e(370)) && !_0x5f16f6[_0x41369e(654)]) {
        _0x3cf22f[_0x41369e(857)](_0xd47a6);
        if (_0x5f16f6[_0x41369e(451)]) _0x3cf22f.add(_0x5f16f6[_0x41369e(451)]);
      }
      Array[_0x41369e(1080)](_0x5f16f6.children) && _0x5f16f6[_0x41369e(641)][_0x41369e(601)](_0x2e9b5e);
    };
    if (typeof _0x110578 !== "string" || !_0x110578.startsWith(_0x40470d(893))) continue;
    const _0xd47a6 = _0x110578.substring(6),
      _0x569886 = loadTradeRoot(_0xd47a6);
    if (!_0x569886) continue;
    _0x3cf22f.add(_0xd47a6);
    (_0x569886[_0x40470d(641)] || [])[_0x40470d(601)](_0x2e9b5e);
  }
  return _activeStorageCache = _0x3cf22f, _activeStorageCacheVersion = _dataVersion, _0x3cf22f;
}
function cleanupOrphanedStorageEntities(_0x2b07b9 = ![]) {
  const _0x2bff01 = _0x20c7bb,
    _0x2933b4 = {
      LZxGF: function (_0x3bf491, _0x1977d4) {
        return _0x3bf491 === _0x1977d4;
      },
      DtRIR: function (_0x166607) {
        return _0x166607();
      },
      nBBkZ: function (_0x342299, _0x4c6f7a) {
        return _0x342299 > _0x4c6f7a;
      },
      LxOXF: _0x2bff01(848)
    };
  if (!_0x2b07b9) {
    const _0x4811eb = _0x2933b4[_0x2bff01(640)](typeof storage_default.consumeStorageDirty, _0x2bff01(712)) ? storage_default[_0x2bff01(635)]() : !![];
    if (!_0x4811eb) return;
  }
  const _0x7ec911 = _0x2933b4[_0x2bff01(1174)](getAllActiveStorageNames),
    _0x3bbb0e = Array[_0x2bff01(1092)](_0x7ec911),
    _0x42a89b = storage_default.cleanupAndMerge(_0x3bbb0e);
  _0x2933b4[_0x2bff01(1320)](_0x42a89b, 0) && log.gc(_0x2933b4[_0x2bff01(802)], {
    removed: _0x42a89b
  });
}
function sweepShulkerCache() {
  const _0x3ddb19 = _0x20c7bb,
    _0x95be4b = {
      rhrpo: function (_0x1193ab, _0x5b9723) {
        return _0x1193ab !== _0x5b9723;
      }
    };
  try {
    if (_0x95be4b.rhrpo("FdhyI", _0x3ddb19(1248))) {
      if (typeof sweepExpiredShulkerCache === _0x3ddb19(712)) {
        const _0x5ba07b = sweepExpiredShulkerCache();
        if (_0x5ba07b > 0) log.gc(_0x3ddb19(928), {
          cleaned: _0x5ba07b
        });
      }
    } else {
      _0x3158e5(_0x899d3e, _0x1d0e61, _0x4e742f, _0x59f398, _0x23fba0, _0x5bbf96, _0x39ba12, _0x2bea7c, _0x5932b9, _0x50bdb8[_0x3ddb19(1324)](_0x1e9af7.policy));
      return;
    }
  } catch (_0x49d29c) {
    log.err("gc", _0x49d29c, {
      action: _0x3ddb19(789)
    });
  }
}
_0x144cf1.system.runInterval(() => cleanupOrphanedStorageEntities(![]), 1200), _0x144cf1.system.runInterval(sweepShulkerCache, 36e3), _0x144cf1.system.runTimeout(() => cleanupOrphanedStorageEntities(!![]), 100);
function flushAndStopFlusher(_0x1558ef) {
  const _0x1024fa = _0x20c7bb,
    _0x1555d0 = {
      yDnJq: "stopFlusher",
      Lxcar: _0x1024fa(438)
    };
  try {
    if (storage_default && typeof storage_default[_0x1024fa(875)] === _0x1024fa(712)) storage_default[_0x1024fa(875)]();
  } catch (_0x3c5176) {
    log.err("disk", _0x3c5176, {
      action: _0x1024fa(438),
      tag: _0x1558ef
    });
  } finally {
    try {
      if (storage_default && typeof storage_default[_0x1024fa(1311)] === _0x1024fa(712)) storage_default[_0x1024fa(1311)]();
    } catch (_0x1208a5) {
      log[_0x1024fa(618)](_0x1024fa(751), _0x1208a5, {
        action: _0x1555d0.yDnJq,
        tag: _0x1558ef
      });
    }
    log[_0x1024fa(751)](_0x1555d0[_0x1024fa(1069)], {
      tag: _0x1558ef
    });
  }
}
try {
  _0x144cf1.world.afterEvents.playerLeave.subscribe(() => {
    const _0x10d8f2 = _0x20c7bb;
    if (_0x144cf1[_0x10d8f2(1104)][_0x10d8f2(1184)]()[_0x10d8f2(459)] === 0) flushAndStopFlusher(_0x10d8f2(625));
  });
} catch (_0x5db84a) {
  log.err("disk", _0x5db84a, {
    action: "playerLeave.flush.subscribe"
  });
}
try {
  _0x144cf1.system.beforeEvents.shutdown.subscribe(() => flushAndStopFlusher("shutdown"));
} catch (_0x175326) {
  log.err("disk", _0x175326, {
    action: "shutdown.flush.subscribe"
  });
}