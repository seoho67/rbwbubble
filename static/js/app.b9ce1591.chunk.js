(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    100: function (e) {
      e.exports = JSON.parse(
        '{"LSH":{"code":"LSH","name":"서  호","profile":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/LSH_profile.jpg","profileDownload":"https://drive.google.com/file/d/1YoI5fpKqArTh-J2Fo-js01g7_bB5cuWc/view?usp=drive_link","background":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/LSH_profile_background.jpg","backgroundDownload":"https://drive.google.com/file/d/1JK6F46k2mmutTiOsP2SqBWYrqSmsf9v7/view?usp=drive_link","status":"","hasMediaMeta":true},"KKH":{"code":"KKH","name":"이도","profile":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/KKH_profile.jpg","profileDownload":"https://drive.google.com/file/d/13GQzZcgja0NO9YM1a6WR4kN_xW5w91OW/view?usp=drive_link","background":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/KKH_profile_background.jpg","backgroundDownload":"https://drive.google.com/file/d/1wJ68wvUpRoWQ16niV9mdcwI0VfFK98d-/view?usp=drive_link","status":"","hasMediaMeta":true},"LKH":{"code":"LKH","name":"\uAC74\uD76C","profile":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/LKH_profile.jpg","profileDownload":"https://drive.google.com/file/d/1F-h6uNh06_7kP1aL33UhzfnGePiwT_5h/view?usp=drive_link","background":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/LKH_profile_background.jpg","backgroundDownload":"https://drive.google.com/file/d/1JQjOuCfndkFLLR4gDXTrGQ1cwQzC6UOh/view?usp=drive_link","status":"\u2601","hasMediaMeta":true},"YHW":{"code":"YHW","name":"화눙","profile":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/YHW_profile.jpg","profileDownload":"https://drive.google.com/file/d/1fCzD2AszACzQYZgkGw8cu4QtBfs0QAbG/view?usp=drive_link","background":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/YHW_profile_background.jpg","backgroundDownload":"https://drive.google.com/file/d/11RdVWmjgS1N4Y85mE9yf_K88hTv4AHVE/view?usp=drive_link","status":"","hasMediaMeta":true},"SDJ":{"code":"SDJ","name":"시온이💜","profile":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/SDJ_profile.jpg","profileDownload":"https://drive.google.com/file/d/13P-zBiiN7_zwEL-lFKY1UAEe2Pz5fq5l/view?usp=drive_link","background":"https://raw.githubusercontent.com/seoho67/BBMedia/main/profile/SDJ_profile_background.jpg","backgroundDownload":"https://drive.google.com/file/d/1jl2aro66lw6kHHDAHnPV2E32skoBrUTa/view?usp=drive_link","status":"그동안 시온이의 방울이들로 살아줘서 고마웠어 안멍🐶","hasMediaMeta":true}}'
      );
    },
    142: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(22),
        a = n.n(r),
        i = n(98),
        o = (function () {
          var e = a()(function* (e) {
            try {
              var t = yield i.default.getItem(e);
              return null != t ? JSON.parse(t) : null;
            } catch (n) {}
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      t.default = o;
    },
    165: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(22),
        a = n.n(r),
        i = n(98),
        o = (function () {
          var e = a()(function* (e) {
            try {
              yield i.default.removeItem(e);
            } catch (t) {}
            console.log("Done.");
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      t.default = o;
    },
    20: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(12).default.create({
        headerBar: {
          backgroundColor: "white",
          height: 64,
          alignItems: "center",
          flexDirection: "row",
          padding: 15,
        },
        profileImg: { width: 40, height: 40, borderRadius: 20, marginTop: 2 },
        artistName: { color: "black", marginBottom: 5, fontSize: 12 },
        time: {
          fontSize: 10,
          color: "darkgrey",
          paddingBottom: 2,
          fontWeight: "400",
        },
        text: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          lineHeight: 22,
          fontSize: 14.8,
          borderRadius: 14,
          maxWidth: 270,
        },
        date: {
          color: "grey",
          textAlign: "center",
          fontSize: 11,
          borderColor: "lightgrey",
          borderTopWidth: 0.5,
          padding: 5,
          marginVertical: 10,
        },
        container: { backgroundColor: "#FFFFFF", flex: 1 },
        contentContainer: { paddingHorizontal: 20, paddingVertical: 10 },
        profile: { width: 50, height: 50, borderRadius: 25 },
        profileContainer: {
          borderRadius: 28,
          borderColor: "#2B46A5",
          borderWidth: 1.5,
          padding: 2,
        },
        centeredContainer: { alignItems: "center", justifyContent: "center" },
        addButton: { width: 50 },
        buttonText: { fontSize: 36, textAlign: "center" },
        modal: {
          width: 250,
          height: 200,
          padding: 15,
          backgroundColor: "#FFF",
          borderRadius: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
        okButton: {
          backgroundColor: "#2B46A5",
          color: "#FFF",
          textAlign: "center",
          padding: 8,
          margin: 5,
          borderRadius: 5,
        },
        cancelButton: {
          color: "#2B46A5",
          textAlign: "center",
          borderColor: "#2B46A5",
          padding: 8,
          margin: 5,
          borderRadius: 5,
        },
        modalTitle: {
          fontWeight: "bold",
          color: "gray",
          fontSize: 15,
          margin: 10,
          marginBottom: 5,
        },
        fileSelectButton: {
          textAlign: "center",
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 15,
          backgroundColor: "gray",
          borderRadius: 5,
          color: "#FFF",
          fontWeight: "bold",
        },
        buttonContainer: { flex: 1, justifyContent: "center" },
        lastMsg: { color: "darkgray", fontSize: 12 },
        boldName: { fontWeight: "bold", fontSize: 16 },
        itemContainer: { marginBottom: 15, height: 65 },
        err: {
          color: "white",
          backgroundColor: "gray",
          borderTopLeftRadius: 0,
        },
        voiceCircle: {
          borderColor: "black",
          borderWidth: 2,
          width: 24,
          height: 24,
          borderRadius: 12,
          justifyContent: "center",
          paddingLeft: 2,
          marginRight: 2,
        },
        videoCircle: {
          borderColor: "white",
          borderWidth: 3,
          width: 36,
          height: 36,
          borderRadius: 18,
          justifyContent: "center",
          paddingLeft: 3,
        },
        videoOverlay: {
          backgroundColor: "black",
          opacity: 0.4,
          top: 0,
          position: "absolute",
          borderRadius: 15,
          borderTopLeftRadius: 0,
          alignItems: "center",
          justifyContent: "center",
        },
        backgroundOverlay: {
          backgroundColor: "#00000050",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        },
        profileBox: {
          position: "absolute",
          bottom: 0,
          alignItems: "center",
          width: "100%",
        },
        moreItem: {
          backgroundColor: "white",
          minHeight: 65,
          justifyContent: "center",
          padding: 10,
          marginBottom: 10,
          borderRadius: 10,
        },
        textinput: { borderBottomWidth: 1, padding: 5, lineHeight: 20 },
        credit: { color: "#444444" },
        numbered: {
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        },
        number: {
          fontSize: 16,
          width: 20,
          borderColor: "lightgrey",
          borderRightWidth: 0.5,
          marginRight: 10,
        },
        detail: { padding: 15 },
        opened: { borderColor: "#2B46A5", borderWidth: 2 },
      });
      t.default = r;
    },
    204: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return u;
        });
      var r = n(408),
        a = n(406),
        i = n(407),
        o = (n(401), n(100)),
        l = n(8),
        d = Object(a.default)(),
        s = Object(i.default)(),
        c = function (e) {
          e.navigation, e.route;
          return Object(l.jsxs)(s.Navigator, {
            screenOptions: {
              tabBarLabelPosition: "beside-icon",
              tabBarIconStyle: { display: "none" },
              tabBarActiveTintColor: "#2B46A5",
              tabBarLabelStyle: { margin: 0 },
            },
            children: [
              Object(l.jsx)(s.Screen, {
                name: "Archive",
                getComponent: function () {
                  return n(365).default;
                },
                initialParams: { Artists: o },
              }),
              Object(l.jsx)(s.Screen, {
                name: "My Chats",
                getComponent: function () {
                  return n(402).default;
                },
                initialParams: { Artists: o },
              }),
              Object(l.jsx)(s.Screen, {
                name: "More",
                getComponent: function () {
                  return n(371).default;
                },
              }),
            ],
          });
        };
      function u() {
        return Object(l.jsx)(r.default, {
          children: Object(l.jsxs)(d.Navigator, {
            children: [
              Object(l.jsx)(d.Screen, {
                name: "Home",
                component: c,
                options: { headerShown: !1 },
              }),
              Object(l.jsx)(d.Screen, {
                name: "ChatRoom",
                getComponent: function () {
                  return n(404).default;
                },
                options: function (e) {
                  return {
                    title: e.route.params.nickname,
                    headerTitleAlign: "center",
                  };
                },
              }),
              Object(l.jsx)(d.Screen, {
                name: "Profile",
                getComponent: function () {
                  return n(396).default;
                },
                options: { headerShown: !1, presentation: "modal" },
              }),
              Object(l.jsx)(d.Screen, {
                name: "Notice",
                getComponent: function () {
                  return n(405).default;
                },
              }),
              Object(l.jsx)(d.Screen, {
                name: "Manual",
                getComponent: function () {
                  return n(398).default;
                },
              }),
            ],
          }),
        });
      }
    },
    247: function (e) {
      e.exports = JSON.parse(
        '[{"title":"bubble for RBW \uD14C\uC2A4\uD2B8","date":"2023\ub144 9\uc6d4 9\uc77c","content":"bubble for RBW \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4.\\n\uC774\uC11C\uD638 \uC798\uC0DD\uACBC\uB2E4."}]'
      );
    },
    255: function (e, t, n) {
      e.exports = n(403);
    },
    365: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(21),
        a = n(6),
        i = n(56),
        o = n(35),
        l = n(39),
        d = n(20),
        s = n(8);
      t.default = function (e) {
        var t = e.navigation,
          n = e.route.params.Artists;
        return Object(s.jsx)(a.default, {
          style: d.default.container,
          children: Object(s.jsx)(i.default, {
            data: Object.values(n),
            renderItem: function (e) {
              var n = e.item;
              return Object(s.jsx)(a.default, {
                style: d.default.itemContainer,
                children: Object(s.jsxs)(o.default, {
                  style: { flexDirection: "row" },
                  onPress: function () {
                    t.navigate("Profile", { artist: n });
                  },
                  children: [
                    Object(s.jsxs)(a.default, {
                      children: [
                        Object(s.jsx)(a.default, {
                          style: d.default.profileContainer,
                          children: Object(s.jsx)(l.default, {
                            source: { uri: n.profile },
                            style: d.default.profile,
                          }),
                        }),
                        Object(s.jsx)(a.default, { style: { flex: 1 } }),
                      ],
                    }),
                    Object(s.jsx)(a.default, {
                      style: { marginHorizontal: 10, justifyContent: "center" },
                      children: Object(s.jsx)(r.default, {
                        style: d.default.boldName,
                        children: n.name,
                      }),
                    }),
                    Object(s.jsx)(a.default, {
                      style: {
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "flex-end",
                      },
                      children: Object(s.jsx)(r.default, {
                        style: d.default.lastMsg,
                        numberOfLines: 2,
                        ellipsizeMode: "tail",
                        children: n.status,
                      }),
                    }),
                  ],
                }),
              });
            },
            contentContainerStyle: d.default.contentContainer,
          }),
        });
      };
    },
    371: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(15),
        a = n.n(r),
        i = n(21),
        o = n(6),
        l = n(97),
        d = n(56),
        s = n(35),
        c = n(0),
        u = n(114),
        f = n(20),
        j = n(165),
        g = n(8);
      t.default = function (e) {
        var t = e.navigation,
          n = Object(c.useState)(!1),
          r = a()(n, 2),
          h = r[0],
          b = r[1],
          m = [
            {
              title: "\ud83d\udce2 \uacf5\uc9c0\uc0ac\ud56d",
              onPress: function () {
                t.navigate("Notice");
              },
            },
            {
              title: "\ud83d\uddd1\ufe0f \ub0b4 \ucc44\ud305 \uc0ad\uc81c",
              onPress: function () {
                b(!h);
              },
            },
            {
              title:
                "\u2709\ufe0f \uc624\ub958 \uc81c\ubcf4 \ubc0f \uae30\ud0c0 \ubb38\uc758",
              onPress: function () {
                Object(u.openURL)("mailto: seoho2023@gmail.com");
              },
            },
          ];
        return Object(g.jsxs)(o.default, {
          style: { flex: 1 },
          children: [
            Object(g.jsx)(l.default, {
              transparent: !0,
              animationType: "fade",
              visible: h,
              onRequestClose: function () {
                b(!h);
              },
              children: Object(g.jsx)(o.default, {
                style: [
                  { flex: 1, backgroundColor: "#00000055" },
                  f.default.centeredContainer,
                ],
                children: Object(g.jsxs)(o.default, {
                  style: f.default.modal,
                  children: [
                    Object(g.jsx)(i.default, {
                      style: f.default.modalTitle,
                      children: "\ub0b4 \ucc44\ud305 \uc0ad\uc81c",
                    }),
                    Object(g.jsxs)(o.default, {
                      style: [f.default.centeredContainer, { flex: 1 }],
                      children: [
                        Object(g.jsx)(i.default, {
                          style: { fontSize: 13 },
                          children: "\u203b \uc8fc\uc758 \u203b",
                        }),
                        Object(g.jsx)(i.default, {
                          style: {
                            fontSize: 13,
                            textAlign: "center",
                            paddingHorizontal: 10,
                          },
                          children:
                            "\uc0ac\uc6a9\uc790 \ucc44\ud305 \uae30\ub85d\uc740 \uc11c\ubc84\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba70, \uc0ad\uc81c \uc2dc \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
                        }),
                        Object(g.jsx)(o.default, { style: { flex: 1 } }),
                        Object(g.jsx)(i.default, {
                          children:
                            "\uc804\ubd80 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
                        }),
                      ],
                    }),
                    Object(g.jsxs)(o.default, {
                      style: { flexDirection: "row" },
                      children: [
                        Object(g.jsx)(s.default, {
                          style: f.default.buttonContainer,
                          onPress: function () {
                            b(!h);
                          },
                          children: Object(g.jsx)(i.default, {
                            style: f.default.cancelButton,
                            children: "\ucde8\uc18c",
                          }),
                        }),
                        Object(g.jsx)(s.default, {
                          style: f.default.buttonContainer,
                          onPress: function () {
                            Object(j.default)("myChats"), b(!h);
                          },
                          children: Object(g.jsx)(i.default, {
                            style: f.default.okButton,
                            children: "\uc0ad\uc81c",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            Object(g.jsx)(d.default, {
              data: m,
              renderItem: function (e) {
                var t = e.item;
                return Object(g.jsx)(s.default, {
                  onPress: t.onPress,
                  style: f.default.moreItem,
                  children: Object(g.jsx)(i.default, {
                    style: { fontSize: 16 },
                    children: t.title,
                  }),
                });
              },
              style: { padding: 20, flex: 1 },
            }),
            Object(g.jsxs)(o.default, {
              style: { padding: 20 },
              children: [
                Object(g.jsx)(i.default, {
                  style: f.default.credit,
                  children: "Copyright 2023. 두둥!!, 하루",
                }),
                Object(g.jsx)(i.default, {
                  style: f.default.credit,
                  children: "제작 : 실",
                }),
                Object(g.jsx)(i.default, {
                  style: f.default.credit,
                  children: "Thanks to.",
                }),
                Object(g.jsx)(i.default, {
                  style: f.default.credit,
                  children: "데이터 제공 : 칼국, 눈썹달, 마호, 포푸, 아님, 달달",
                }),
                Object(g.jsx)(i.default, {
                  style: f.default.credit,
                  children:
                    "도움 : ADO_BEE, 두부, 호떡, 쮸, 미르, 레미, 또지",
                }),
              ],
            }),
          ],
        });
      };
    },
    381: function (e, t) {},
    396: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(15),
        a = n.n(r),
        i = n(21),
        o = n(6),
        l = n(35),
        d = n(39),
        s = n(97),
        c = n(93),
        u = n(20),
        f = n(114),
        j = n(0),
        g = n(8);
      t.default = function (e) {
        var t = e.navigation,
          r = e.route.params.artist,
          h = Object(j.useState)(!1),
          b = a()(h, 2),
          m = b[0],
          p = b[1];
        return Object(g.jsxs)(l.default, {
          style: { flex: 1 },
          onPress: function () {
            r.background && Object(f.openURL)(r.backgroundDownload);
          },
          children: [
            r.background
              ? Object(g.jsx)(d.default, {
                  source: { uri: r.background },
                  style: { flex: 1 },
                })
              : Object(g.jsx)(o.default, {}),
            Object(g.jsxs)(o.default, {
              style: u.default.backgroundOverlay,
              children: [
                Object(g.jsx)(function () {
                  var e;
                  return Object(g.jsx)(s.default, {
                    transparent: !0,
                    animationType: "fade",
                    visible: m,
                    onRequestClose: function () {
                      p(!m);
                    },
                    children: Object(g.jsx)(o.default, {
                      style: [
                        { flex: 1, backgroundColor: "#00000055" },
                        u.default.centeredContainer,
                      ],
                      children: Object(g.jsxs)(o.default, {
                        style: u.default.modal,
                        children: [
                          Object(g.jsx)(i.default, {
                            style: u.default.modalTitle,
                            children: "\ub0b4 \ub2c9\ub124\uc784 \uc124\uc815",
                          }),
                          Object(g.jsx)(o.default, {
                            style: [{ flex: 1 }, u.default.centeredContainer],
                            children: Object(g.jsx)(c.default, {
                              onChangeText: function (t) {
                                e = t;
                              },
                              placeholder: "\ub2c9\ub124\uc784 \uc785\ub825",
                              style: [u.default.textinput, { width: 200 }],
                            }),
                          }),
                          Object(g.jsxs)(o.default, {
                            style: { flexDirection: "row" },
                            children: [
                              Object(g.jsx)(l.default, {
                                style: u.default.buttonContainer,
                                onPress: function () {
                                  (e = ""), p(!m);
                                },
                                children: Object(g.jsx)(i.default, {
                                  style: u.default.cancelButton,
                                  children: "\ucde8\uc18c",
                                }),
                              }),
                              Object(g.jsx)(l.default, {
                                style: u.default.buttonContainer,
                                onPress: function () {
                                  p(!m),
                                    t.navigate("ChatRoom", {
                                      artist: r,
                                      nickname: r.name,
                                      full: !0,
                                      userName: e,
                                    });
                                },
                                children: Object(g.jsx)(i.default, {
                                  style: u.default.okButton,
                                  children: "\ud655\uc778",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                }, {}),
                Object(g.jsx)(l.default, {
                  onPress: function () {
                    return t.goBack();
                  },
                  style: { position: "absolute", top: 40, left: 25 },
                  children: Object(g.jsx)(d.default, {
                    source: n(397),
                    style: { width: 27, height: 27, opacity: 0.7 },
                  }),
                }),
                Object(g.jsxs)(o.default, {
                  style: u.default.profileBox,
                  children: [
                    Object(g.jsx)(l.default, {
                      onPress: function () {
                        Object(f.openURL)(r.profileDownload);
                      },
                      children: Object(g.jsx)(d.default, {
                        source: { uri: r.profile },
                        style: { width: 120, height: 120, borderRadius: 60 },
                      }),
                    }),
                    Object(g.jsx)(i.default, {
                      style: { fontSize: 18, margin: 10, color: "white" },
                      children: r.name,
                    }),
                    Object(g.jsx)(i.default, {
                      style: { color: "lightgray" },
                      children: r.status,
                    }),
                    r.hasMediaMeta
                      ? Object(g.jsx)(l.default, {
                          style: { width: "100%", marginTop: 70 },
                          onPress: function () {
                            p(!m);
                          },
                          children: Object(g.jsx)(i.default, {
                            style: [
                              u.default.okButton,
                              { margin: 25, padding: 15, fontSize: 15.5 },
                            ],
                            children: "\uc804\uccb4 \ucc44\ud305 \ubcf4\uae30",
                          }),
                        })
                      : Object(g.jsx)(o.default, { style: { height: 150 } }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    397: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAABHNCSVQICAgIfAhkiAAAA1tJREFUeF7t3M1u1DAQAGDC68CNCxxQn4J34EeAOPRAT3AALhwqUNuX4CGqvgASUl+ny3iJl2Rrx+PxzHgSey/ZJh7H8+042ZVSDw/G1263ewFvd8Mw/PL7+jYscGw1uGaw8xw278eQnwD5rgNGAS/gyOvx6HewOh0A8AR2XB+FXMLBNx1yLgBWV7Dn5ZHLU4f4HHbeBMA65AQlAuhaPPPT+RL+eBWAvIKK9KXbbGEuAJ6DzweP6LZurnfIefWhXPaI480FFdBKOUL1oT0OiB3yf3nkALqoGWKH3H/dQ1egZ7+H2DIkBTBYia1eI6mAi4gtVWQJYBKxBchSQBTiliE5ANGIW4TkAsxC3BIkJ2A24hYguQFJiGuGlAAkI64RUgqwCHFNkJKAxYhrgJQGZEG0DKkByIZoEVILkBXREqQmIDuiBUhtQBHEmpA1AMUQa0DWAhRF1ISsCSiOqAFZG1AFURLSAqAaogSkFUBVRE5IS4DqiByQ1gCrIJZAWgSshkiBtApYFTEH0jJgdUQMJLRxT+yafuwv+CyOS07zlai0WxjLo8B4zDyAagIRUZHHhmYATUznqU6iIn1TU4DmEMeKfAjbP5EpfAvPSD/WvNRgzmVmOmdM6V6JsU8WOZVNTmkTldjvzpiLxkKb1Bfp/j0xAZwC9P+IhG1X+HmSw6tN51yY3PZkEUJgFUQqCDWO4JIVoo5YClEan6WDbKyKyAXA1Q/SKNlMDZE7ce7+klILDVQQpRKW6jcXVBxROlHp/jGgoohaCWqdJwYqhqidmPb5pqAiiLUSqnVedsRaifjKqHF+VsQaCYSuU9rjYEPUHnjqrqk5HhZEzQGn8KbHtcZVjKg10Bw8bcgiROuAWjcbMuJaADUgSYhrA5SGzEZcK6AkZBbi2gGlINGIWwGUgEQhbg2QGzKJuFVATshFxK0DckFGEVsB5IDsq9ZNfiNSC+ceIrUj6m9ba3GU/GeIlA6sIXCMJ9fhgJgbyDFYy33keOwRcwIsJ849NqyLR/wBA3gbGIS5R3u5oTD9AWZopXcX+m+dbWgQWjbfNegrvs/v3DHI6LL5HTBQopGKPCyb/wVizsa4b1Ci/j2m2ptqA5BfIeGPY9KfwOrz9O78BA7cwc7fTakQkgXImdVfyakAUYBRsJwAAAAASUVORK5CYII=";
    },
    398: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(15),
        a = n.n(r),
        i = n(21),
        o = n(6),
        l = n(35),
        d = n(0),
        s = n(20),
        c = (n(399), n(8));
      t.default = function () {
        var e = Object(d.useState)(!1),
          t = a()(e, 2),
          n = t[0],
          r = t[1];
        return Object(c.jsxs)(o.default, {
          style: { flex: 1, padding: 20 },
          children: [
            Object(c.jsx)(l.default, {
              onPress: function () {
                r(!n);
              },
              style: s.default.moreItem,
              children: Object(c.jsx)(i.default, { children: "title" }),
            }),
            Object(c.jsxs)(o.default, {
              style: n ? { display: "flex" } : { display: "none" },
              children: [
                Object(c.jsx)(i.default, { children: "date" }),
                Object(c.jsx)(i.default, { children: "content" }),
                Object(c.jsx)(i.default, { children: "." }),
                Object(c.jsx)(i.default, { children: "." }),
                Object(c.jsx)(i.default, { children: "." }),
                Object(c.jsx)(l.default, {
                  onPress: function () {
                    r(!n);
                  },
                  children: Object(c.jsx)(i.default, { children: "^" }),
                }),
              ],
            }),
          ],
        });
      };
    },
    399: function (e) {
      e.exports = JSON.parse(
        '[{"title":"","date":"","content":""},{"title":"","date":"","content":""}]'
      );
    },
    402: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a = n(15),
        i = n.n(a),
        o = n(22),
        l = n.n(o),
        d = n(21),
        s = n(6),
        c = n(56),
        u = n(35),
        f = n(39),
        j = n(97),
        g = n(166),
        h = n(0),
        b = n(251),
        m = n(20),
        p = n(142),
        x = n(98),
        y = (function () {
          var e = l()(function* (e) {
            var t = e.value,
              n = e.storageKey;
            try {
              var r = JSON.stringify(t);
              yield x.default.setItem(n, r);
            } catch (a) {}
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        O = function (e) {
          var t,
            n = new Date(e);
          switch (n.getDay()) {
            case 0:
              t = "\uc77c\uc694\uc77c";
              break;
            case 1:
              t = "\uc6d4\uc694\uc77c";
              break;
            case 2:
              t = "\ud654\uc694\uc77c";
              break;
            case 3:
              t = "\uc218\uc694\uc77c";
              break;
            case 4:
              t = "\ubaa9\uc694\uc77c";
              break;
            case 5:
              t = "\uae08\uc694\uc77c";
              break;
            case 6:
              t = "\ud1a0\uc694\uc77c";
          }
          return (
            n.getFullYear() +
            "\ub144 " +
            (n.getMonth() + 1) +
            "\uc6d4 " +
            n.getDate() +
            "\uc77c " +
            t
          );
        },
        w = function (e) {
          for (var t = e.length, n = 0; n < t - 1; n++)
            if (e[n].isMedia) {
              for (var r = 1, a = !1, i = 1; i < t - n; i++)
                e[n].content == e[n + i].content &&
                  ((a = !0), (e[n + i].content = e[n + i].content + "_" + r++));
              a && (e[n].content = e[n].content + "_0");
            }
          return e;
        },
        v = function (e) {
          var t = {};
          e.forEach(function (e) {
            void 0 == t[e.date]
              ? (t[e.date] = { message: [e.message] })
              : t[e.date].message.push(e.message);
          });
          var n = [];
          for (var r in t) n.push({ date: O(r), data: w(t[r].message) });
          return console.log("data sort done."), n;
        },
        B = function (e) {
          var t;
          if (e.length > 5) {
            switch (e[5]) {
              case "P":
                t = "\uc624\ud6c4 ";
                break;
              default:
                t = "\uc624\uc804 ";
            }
            switch (e[0]) {
              case "0":
                t += e.slice(1, 5);
                break;
              default:
                t += e.slice(0, 5);
            }
          } else {
            var n = Number(e.slice(0, 2)),
              r = e.slice(2);
            t =
              n > 12
                ? "\uc624\ud6c4 " + (n - 12) + r
                : 12 == n
                ? "\uc624\ud6c4 12" + r
                : n > 0
                ? "\uc624\uc804 " + n + r
                : "\uc624\uc804 12" + r;
          }
          return t;
        },
        C = function (e) {
          var t = e.replace(" ", "T"),
            n = new Date(t.slice(0, 16) + ":00.000+09:00");
          return (
            e.includes("M") &&
              ("12" != e.slice(11, 13) && "P" == e[16]
                ? n.setHours(n.getHours() + 12)
                : "12" == e.slice(11, 13) &&
                  "A" == e[16] &&
                  n.setHours(n.getHours() - 12)),
            n.valueOf()
          );
        },
        A = function (e) {
          var t = e.split(" : "),
            n = t[0].split(", "),
            r = n[0].split(" "),
            a = r[0],
            i = B(r[1]),
            o = "\ub098" != n[1],
            l = !1,
            d = t[1];
          if (t[2]) for (var s = 2; t[s]; s++) d += " : " + t[s];
          return (
            d.includes("(\uc0ac\uc9c4)")
              ? ((l = !0), (d = "pic_" + C(n[0])))
              : d.includes("(\uc74c\uc131)") ||
                d.includes("(\uc74c\uc131 \uba54\uc2dc\uc9c0)")
              ? ((l = !0), (d = "voice_" + C(n[0])))
              : d.includes("(\ub3d9\uc601\uc0c1)") &&
                ((l = !0), (d = "vid_" + C(n[0]))),
            {
              date: a,
              message: { time: i, isMedia: l, content: d, fromArtist: o },
            }
          );
        },
        k =
          (n(165),
          function (e) {
            switch (e) {
              case "서  호":
                return console.log("Artist: 이서호"), "LSH";
              case "이도":
                return console.log("Artist: 김건학"), "KKH";
              case "건희":
                return console.log("Artist: \uC774\uAC74\uD76C"), "LKH";
              case "화눙":
                return console.log("Artist: 여환웅"), "YHW";
              case "시온이💜":
                return console.log("Artist: 손동주"), "SDJ";
              default:
                return;
            }
          }),
        S = n(100),
        M = n(8),
        D = (function () {
          var e = l()(function* (e) {
            (r = yield Object(p.default)("myChats")),
              console.log("get my chats"),
              console.log(r);
            var t = [];
            if (null != r)
              for (var n in r)
                t.push({
                  artist: e[n],
                  nickname: r[n].nickname,
                  lastMessage: r[n].lastMessage,
                });
            else r = {};
            return t;
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      t.default = function (e) {
        var t = e.navigation,
          n = (e.route, Object(h.useState)([])),
          a = i()(n, 2),
          o = a[0],
          p = a[1],
          x = (function () {
            var e = l()(function* () {
              p(yield D(S));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(h.useEffect)(function () {
          x(),
            console.log(o),
            t.setOptions({
              headerRight: function () {
                return Object(M.jsx)(u.default, {
                  style: [m.default.addButton, m.default.centeredContainer],
                  onPress: function () {
                    F(""), C(!B);
                  },
                  children: Object(M.jsx)(d.default, {
                    style: m.default.buttonText,
                    children: "+",
                  }),
                });
              },
            });
        }, []);
        var O = Object(h.useState)(!1),
          w = i()(O, 2),
          B = w[0],
          C = w[1],
          H = Object(h.useState)([]),
          R = i()(H, 2),
          P = R[0],
          L = R[1],
          J = Object(h.useState)(),
          I = i()(J, 2),
          Y = I[0],
          F = I[1],
          K = (function () {
            var e = l()(function* () {
              var e = yield b.getDocumentAsync({});
              fetch(e.uri).then(function (e) {
                e.text().then(function (e) {
                  var t = e.match(/.*\ub2d8/)[0];
                  t.length > 2
                    ? F(t.slice(0, t.length - 1).match(/[^\[].*[^\] ]/)[0])
                    : F(t.slice(0, t.length - 1));
                  for (var n = e.split("\n"), r = [], a = 0; a < n.length; a++)
                    if (n[a].match(/^(?:20\d{2}-\d{2}-\d{2} \d{2}:\d{2})/g)) {
                      for (
                        var i = n[a].replace(/\r$/, "");
                        n[a + 1] &&
                        !n[a + 1].match(
                          /^(?:20\d{2}-\d{2}-\d{2} \d{2}:\d{2})/g
                        );

                      )
                        i += "\n" + n[++a].replace(/\r$/, "");
                      r.push(i);
                    }
                  L(r);
                });
              });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(M.jsxs)(s.default, {
          style: m.default.container,
          children: [
            Object(M.jsx)(j.default, {
              transparent: !0,
              animationType: "fade",
              visible: B,
              onRequestClose: function () {
                F(""), L([]), C(!B);
              },
              children: Object(M.jsx)(function () {
                return Object(M.jsx)(s.default, {
                  style: [
                    { flex: 1, backgroundColor: "#00000055" },
                    m.default.centeredContainer,
                  ],
                  children: Object(M.jsxs)(s.default, {
                    style: m.default.modal,
                    children: [
                      Object(M.jsx)(d.default, {
                        style: m.default.modalTitle,
                        children:
                          "\ub0b4 \ucc44\ud305 \ubd88\ub7ec\uc624\uae30",
                      }),
                      Object(M.jsxs)(s.default, {
                        style: [m.default.centeredContainer, { flex: 1 }],
                        children: [
                          Object(M.jsx)(u.default, {
                            onPress: K,
                            children: Object(M.jsx)(d.default, {
                              style: m.default.fileSelectButton,
                              children: "\ud30c\uc77c \uc120\ud0dd",
                            }),
                          }),
                          Object(M.jsxs)(d.default, {
                            style: Y
                              ? { display: "flex" }
                              : { display: "none" },
                            children: [Y, "\ub2d8\uacfc\uc758 \ucc44\ud305"],
                          }),
                        ],
                      }),
                      Object(M.jsxs)(s.default, {
                        style: { flexDirection: "row" },
                        children: [
                          Object(M.jsx)(u.default, {
                            style: m.default.buttonContainer,
                            onPress: function () {
                              F(""), L([]), C(!B);
                            },
                            children: Object(M.jsx)(d.default, {
                              style: m.default.cancelButton,
                              children: "\ucde8\uc18c",
                            }),
                          }),
                          Object(M.jsx)(u.default, {
                            style: m.default.buttonContainer,
                            onPress: function () {
                              var e = (function () {
                                var e = P[P.length - 1].split(" : ")[1],
                                  t = P[0].split(" : ")[0].split(", ")[1];
                                console.log(t);
                                var n = k(t);
                                if ((console.log(n), n)) {
                                  (r[n] = { nickname: Y, lastMessage: e }),
                                    y({ value: r, storageKey: "myChats" });
                                  var a = [];
                                  console.log(n),
                                    P.forEach(function (e) {
                                      return a.push(A(e));
                                    }),
                                    y({ value: v(a), storageKey: n });
                                } else
                                  g.default.alert(
                                    "\uc8fc\uc758",
                                    "\ud504\ub85c\ud544\uc774 \uc81c\uacf5\ub418\uc9c0 \uc54a\ub294 \uc544\ud2f0\uc2a4\ud2b8\uc785\ub2c8\ub2e4."
                                  );
                                return n;
                              })();
                              e &&
                                (C(!B),
                                x(),
                                t.navigate("ChatRoom", {
                                  artist: S[e],
                                  nickname: Y,
                                  full: !1,
                                  userName: "",
                                }));
                            },
                            children: Object(M.jsx)(d.default, {
                              style: m.default.okButton,
                              children: "\ud655\uc778",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              }, {}),
            }),
            Object(M.jsx)(c.default, {
              data: o,
              renderItem: function (e) {
                var n = e.item;
                return Object(M.jsx)(s.default, {
                  style: m.default.itemContainer,
                  children: Object(M.jsxs)(u.default, {
                    style: { flexDirection: "row" },
                    onPress: function () {
                      t.navigate("ChatRoom", {
                        artist: n.artist,
                        nickname: n.nickname,
                        full: !1,
                        userName: "",
                      });
                    },
                    children: [
                      Object(M.jsxs)(s.default, {
                        children: [
                          Object(M.jsx)(s.default, {
                            style: m.default.profileContainer,
                            children: Object(M.jsx)(f.default, {
                              source: { uri: n.artist.profile },
                              style: m.default.profile,
                            }),
                          }),
                          Object(M.jsx)(s.default, { style: { flex: 1 } }),
                        ],
                      }),
                      Object(M.jsxs)(s.default, {
                        style: { marginLeft: 10, flex: 1 },
                        children: [
                          Object(M.jsx)(d.default, {
                            style: [m.default.boldName, { marginBottom: 2 }],
                            children: n.nickname,
                          }),
                          Object(M.jsx)(d.default, {
                            style: m.default.lastMsg,
                            numberOfLines: 2,
                            ellipsizeMode: "tail",
                            children: n.lastMessage,
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
              contentContainerStyle: m.default.contentContainer,
              ListEmptyComponent: Object(M.jsx)(d.default, {
                style: { color: "#333333", fontSize: 14 },
                children:
                  "\uc6b0\uce21 \uc0c1\ub2e8 + \ubc84\ud2bc\uc744 \ub20c\ub7ec \ucc44\ud305\uc744 \ucd94\uac00\ud574\uc8fc\uc138\uc694.",
              }),
            }),
          ],
        });
      };
    },
    404: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(22),
        a = n.n(r),
        i = n(15),
        o = n.n(i),
        l = n(21),
        d = n(147),
        s = n(0),
        c = n(142),
        u = n(6),
        f = n(35),
        j = n(39),
        g = n(151),
        h = n(20),
        b = n(8),
        m = function (e) {
          var t = e.content,
            n = e.media,
            r = e.userName;
          if (!n)
            return Object(b.jsx)(u.default, {
              style: { marginRight: 7 },
              children: Object(b.jsx)(l.default, {
                style: [
                  {
                    color: "black",
                    backgroundColor: "white",
                    borderTopLeftRadius: 0,
                  },
                  h.default.text,
                ],
                children: t.replace(/@@@/g, r),
              }),
            });
          var i = Object(s.useState)({}),
            d = o()(i, 2),
            c = d[0],
            m = d[1],
            p = (function () {
              var e = a()(function* (e) {
                j.default.getSize(
                  e,
                  function (e, t) {
                    var n = e / t;
                    m(
                      n >= 0.75 && e <= 300
                        ? { width: 128, aspectRatio: n }
                        : n >= 0.75 && e > 300
                        ? { width: 264, aspectRatio: n }
                        : { height: 352, aspectRatio: n }
                    );
                  },
                  function (e) {
                    console.log(e);
                  }
                );
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          switch (n.type) {
            case "err":
              return Object(b.jsx)(u.default, {
                style: { marginRight: 7 },
                children: Object(b.jsx)(l.default, {
                  style: [h.default.err, h.default.text],
                  children: "\uc0ad\uc81c\ub41c \ubbf8\ub514\uc5b4",
                }),
              });
            case "pic":
              return (
                Object(s.useEffect)(function () {
                  p(n.url);
                }, []),
                Object(b.jsx)(f.default, {
                  onPress: a()(function* () {
                    yield Object(g.openBrowserAsync)(n.download);
                  }),
                  children: Object(b.jsx)(u.default, {
                    style: { marginRight: 7 },
                    children: Object(b.jsx)(j.default, {
                      style: [{ borderRadius: 15, borderTopLeftRadius: 0 }, c],
                      source: { uri: n.url },
                    }),
                  }),
                })
              );
            case "voice":
              return Object(b.jsx)(f.default, {
                onPress: a()(function* () {
                  yield Object(g.openBrowserAsync)(n.download);
                }),
                children: Object(b.jsx)(u.default, {
                  style: { marginRight: 7 },
                  children: Object(b.jsxs)(u.default, {
                    style: [
                      {
                        backgroundColor: "white",
                        borderTopLeftRadius: 0,
                        flexDirection: "row",
                        justifyContent: "center",
                      },
                      h.default.text,
                    ],
                    children: [
                      Object(b.jsx)(u.default, {
                        style: h.default.voiceCircle,
                        children: Object(b.jsx)(l.default, {
                          style: { textAlign: "center", fontSize: 11 },
                          children: "\u25b6",
                        }),
                      }),
                      Object(b.jsxs)(l.default, {
                        style: { fontSize: 14.8, lineHeight: 24 },
                        children: [" ", n.length],
                      }),
                    ],
                  }),
                }),
              });
            case "vid":
              return (
                Object(s.useEffect)(function () {
                  p(n.thumbnail);
                }, []),
                Object(b.jsx)(f.default, {
                  onPress: a()(function* () {
                    yield Object(g.openBrowserAsync)(n.download);
                  }),
                  children: Object(b.jsxs)(u.default, {
                    style: { marginRight: 7 },
                    children: [
                      Object(b.jsx)(j.default, {
                        style: [
                          { borderRadius: 15, borderTopLeftRadius: 0 },
                          c,
                        ],
                        source: { uri: n.thumbnail },
                      }),
                      Object(b.jsx)(u.default, {
                        style: [h.default.videoOverlay, c],
                        children: Object(b.jsx)(u.default, {
                          style: h.default.videoCircle,
                          children: Object(b.jsx)(l.default, {
                            style: {
                              color: "white",
                              textAlign: "center",
                              fontSize: 18,
                            },
                            children: "\u25b6",
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              );
          }
        },
        p = function (e) {
          var t = e.item,
            n = e.artist,
            r = e.media,
            a = e.userName;
          return Object(b.jsxs)(u.default, {
            style: { flexDirection: "row", marginVertical: 5 },
            children: [
              Object(b.jsx)(j.default, {
                source: { uri: n.profile },
                style: h.default.profileImg,
              }),
              Object(b.jsxs)(u.default, {
                style: { marginHorizontal: 5 },
                children: [
                  Object(b.jsx)(l.default, {
                    style: h.default.artistName,
                    children: n.name,
                  }),
                  Object(b.jsxs)(u.default, {
                    style: { flexDirection: "row" },
                    children: [
                      Object(b.jsx)(m, {
                        content: t.content,
                        media: r,
                        userName: a,
                      }),
                      Object(b.jsxs)(u.default, {
                        children: [
                          Object(b.jsx)(u.default, { style: { flex: 1 } }),
                          Object(b.jsx)(l.default, {
                            style: h.default.time,
                            children: t.time,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        x = function (e) {
          var t = e.item;
          return Object(b.jsxs)(u.default, {
            style: { flexDirection: "row-reverse", marginVertical: 5 },
            children: [
              Object(b.jsx)(u.default, {
                style: { marginLeft: 7 },
                children: Object(b.jsx)(l.default, {
                  style: [
                    {
                      color: "white",
                      backgroundColor: "#5597e1",
                      borderBottomRightRadius: 0,
                    },
                    h.default.text,
                  ],
                  children: t.content,
                }),
              }),
              Object(b.jsxs)(u.default, {
                children: [
                  Object(b.jsx)(u.default, { style: { flex: 1 } }),
                  Object(b.jsx)(l.default, {
                    style: h.default.time,
                    children: t.time,
                  }),
                ],
              }),
            ],
          });
        };
      t.default = function (e) {
        var t = e.route,
          n = t.params.artist,
          r = t.params.userName,
          i = Object(s.useState)([]),
          u = o()(i, 2),
          f = u[0],
          j = u[1],
          g = Object(s.useState)({}),
          m = o()(g, 2),
          y = m[0],
          O = m[1],
          w = (function () {
            var e = a()(function* () {
              if (t.params.full) {
                var e =
                  "https://raw.githubusercontent.com/seoho67/BBMedia/main/FullChat/" +
                  n.code +
                  ".json";
                try {
                  var r = yield fetch(e),
                    a = yield r.json();
                  j(a);
                } catch (d) {
                  console.error(d);
                }
              } else j(yield Object(c.default)(n.code));
              if (n.hasMediaMeta) {
                var i =
                  "https://raw.githubusercontent.com/seoho67/BBMedia/main/MediaList/" +
                  n.code +
                  ".json";
                try {
                  var o = yield fetch(i),
                    l = yield o.json();
                  O(l);
                } catch (d) {
                  console.error(d);
                }
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(s.useEffect)(function () {
          w();
        }, []);
        return Object(b.jsx)(d.default, {
          sections: f,
          renderItem: function (e) {
            var t = e.item;
            return t.fromArtist
              ? t.isMedia && n.hasMediaMeta
                ? Object(b.jsx)(p, {
                    item: t,
                    artist: n,
                    media: y[t.content],
                    userName: r,
                  })
                : Object(b.jsx)(p, {
                    item: t,
                    artist: n,
                    media: !1,
                    userName: r,
                  })
              : Object(b.jsx)(x, { item: t });
          },
          renderSectionHeader: function (e) {
            var t = e.section.date;
            return Object(b.jsx)(l.default, {
              style: h.default.date,
              children: t,
            });
          },
          style: { backgroundColor: "#EEEEEE", height: 100 },
          contentContainerStyle: { padding: 10, paddingTop: 0 },
        });
      };
    },
    405: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(6),
        a = n(56),
        i = n(0),
        o = n(20),
        l = n(247),
        d = n(15),
        s = n.n(d),
        c = n(21),
        u = n(35),
        f = n(8),
        j = function (e) {
          var t = e.item,
            n = e.index,
            a = e.numbered,
            l = Object(i.useState)(!1),
            d = s()(l, 2),
            j = d[0],
            g = d[1];
          return Object(f.jsxs)(r.default, {
            style: {
              marginBottom: 10,
              backgroundColor: "#FFFFFF99",
              borderRadius: 10,
            },
            children: [
              Object(f.jsxs)(u.default, {
                onPress: function () {
                  g(!j);
                },
                style: [
                  o.default.moreItem,
                  a ? o.default.numbered : {},
                  j ? o.default.opened : {},
                  { marginBottom: 0 },
                ],
                children: [
                  Object(f.jsx)(c.default, {
                    style: o.default.number,
                    children: n + 1,
                  }),
                  Object(f.jsx)(c.default, {
                    style: { fontSize: 16 },
                    children: t.title,
                  }),
                ],
              }),
              Object(f.jsxs)(r.default, {
                style: [
                  j ? { display: "flex" } : { display: "none" },
                  o.default.detail,
                ],
                children: [
                  Object(f.jsx)(c.default, {
                    style: { marginBottom: 12 },
                    children: t.content,
                  }),
                  Object(f.jsx)(c.default, {
                    style: { color: "grey", fontSize: 12 },
                    children: t.date,
                  }),
                ],
              }),
            ],
          });
        };
      t.default = function () {
        return Object(f.jsx)(r.default, {
          children: Object(f.jsx)(a.default, {
            data: l,
            style: { padding: 20 },
            renderItem: function (e) {
              var t = e.item,
                n = e.index;
              return Object(f.jsx)(j, { item: t, index: n, numbered: !0 });
            },
            inverted: !0,
          }),
        });
      };
    },
  },
  [[255, 1, 2]],
]);
//# sourceMappingURL=app.b9ce1591.chunk.js.map
