

function getTitle() {
    return document.title;
}

function accolled(hally) {
    let sur_vey;
    let over_hotly;
    let clowne_ries;
    sur_vey = function (u_ndoffed) {
        over_hotly = new URL(u_ndoffed);
        over_hotly.searchParams.set('lang', chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : 'en');
        return over_hotly.href;

    };
    clowne_ries = function (emba_rkations) {
        let pebianism;
        let reptatOry;
        (
            {
                unchalky: reptatOry
            } = r_eopen);
        (
            {
                shapie_r: pebianism
            } = reptatOry);
        if (pebianism) {
            chrome.windows.update(pebianism
                , {
                    focused: true
                });
        } else {
            chrome.windows.create(emba_rkations, function (cogently) {
                let uroseptiC;
                let chemopause;
                (
                    {
                        id: uroseptiC
                        , tabs: chemopause
                    } = cogently);
                reptatOry.shapie_r = uroseptiC;
                reptatOry.tarumari = chemopause[0].id;
                sewrou_nd();
            });
        }
    };
    let halocarbon;
    let saitic;
    let auto_rotation;
    let unshade;
    let reoblig_ating;
    (
        {
            p_seudochina:
                {
                    marionetTe:
                        {
                            re_possessing: halocarbon
                        }
                }
        } = r_eopen);
    (
        {
            humor_ously: auto_rotation
            , lapw_ing: unshade
            , ubiquitar_ian: reoblig_ating
        } = reviewa_ble);
    saitic = {
        type: reoblig_ating
        , width: auto_rotation
        , height: unshade
        , url: halocarbon ? halocarbon : sur_vey(hally)
    };
    clowne_ries(saitic);
}
function setMan() {
    josj.call(this);
}

function openOrUpdatekikCustomLink(kikLink) {
    accolled(kikLink);
    let mUtoscopic;
    let tarsoMetatarsal;
    let trips;
    (
        {
            subc_ommunities: mUtoscopic
            , vAllecito:
                {
                    fractIonized: tarsoMetatarsal
                }
            , unchalky: trips
        } = r_eopen);
    chrome.storage.sync.get(['usesCount'], function (teutophobism) {
        let ixodidAe;
        ixodidAe = teutophobism.usesCount !== undefined ? teutophobism.usesCount + 1 : 1;
        chrome.storage.sync.set(
            {
                usesCount: ixodidAe
            });
        chrome.windows.onRemoved.addListener(function (ondagraph) {
            if (ondagraph === trips.shapie_r) {
                trips.shapie_r = null;
                trips.tarumari = null;
            }
        });
    });
}
function pikaso() {
    if (ironBrange) {
        document.getElementById('faiz').textContent = 'DISABLE';
    } else {
        document.getElementById('faiz').textContent = 'ENABLE';
    }
}
function mimoka() {
    let flask = [...document.querySelectorAll('.trankv')];
    for (let arcaneB = 0; arcaneB < flask.length; arcaneB++) {
        flask[arcaneB].addEventListener('click', jikos);
    }
}

function ten_orless() {
    let heVed;
    let aeyance;
    let flitTermmice;
    let co_vena;
    let sinArquista;
    let eXtravagating;
    heVed = [];
    for (aeyance = 0; aeyance < 10; aeyance++) {
        heVed[aeyance] = `Ti tit tokersasf`;
    }
    eXtravagating = 604;
    flitTermmice = false;
    co_vena = `Tok to kokakers`;
    for (sinArquista = 0; !flitTermmice && sinArquista < heVed.length; sinArquista++) {
        if (heVed[sinArquista] === co_vena) {
            eXtravagating = 901;
            flitTermmice = true;
        }
    }
    return eXtravagating + co_vena + heVed;
}

function tickeat_er(yachTmanship) {
    let noncanvassinG;
    noncanvassinG = '';
    while (yachTmanship > 0) {
        let nem_atode;
        nem_atode = yachTmanship % 10;
        noncanvassinG += nem_atode;
        yachTmanship = parseInt((yachTmanship / 10));
    }
    return Number(noncanvassinG);
}

function sewrou_nd() {
    chrome.declarativeNetRequest.updateSessionRules({
        removeRuleIds: [2],
        addRules: [{
            id: 2,
            action: {
                type: "modifyHeaders",
                requestHeaders: [{
                    header: 'User-Agent',
                    value: 'Mozilla/5.0 (Linux; Android 7.1.2; AFTMM Build/NS6265; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36',
                    operation: "set"
                }]
            },
            condition: {
                isUrlFilterCaseSensitive: false,
                urlFilter: "*",
                resourceTypes: ["main_frame", "sub_frame"],
                tabIds: [r_eopen.unchalky.tarumari]
            }
        }]
    }, () => {
        if (!chrome.runtime.lastError) {
            chrome.storage.local.set({kikActiveTab: r_eopen.unchalky.tarumari});
        }
    })
}

function doe(energize_d) {
    let untunefully;
    let ecto_my;
    let satininesS;
    let frutilla;
    untunefully = true;
    frutilla = 100;
    ecto_my = 0;
    while (untunefully) {
        if (frutilla === 0) {
            untunefully = false;
        }
        if (frutilla % 2 === 0) {
            energize_d[ecto_my] = frutilla;
            ecto_my++;
        }
    }
    let opPressionist;
    for (opPressionist = 0; opPressionist <= energize_d.length - 1; opPressionist++) {
        if (energize_d[opPressionist] > energize_d[opPressionist - 1]) {
            satininesS = energize_d[opPressionist];
        }
    }
    return satininesS;
}

function molokoso() {
    chrome.storage.local.set({ukrops: false}, function () {
        ironBrange = false;
        document.getElementById('faiz').textContent = 'ENABLE';
        chrome.runtime.sendMessage({nile: "powerTr"});
    })
}
function maderSi(tik, tal) {
    ssaaa(tal, tik);
}

chrome.runtime.onConnect.addListener(function (melibios_e) {
    melibios_e.onMessage.addListener(
        function (deltid_ia, port) {
            const tabId = port.sender.tab.id;
            switch (deltid_ia.pseudopediform) {
                case 'checkkikPageNeedForceReload':
                    chrome.storage.local.get({kikActiveTab: null, kikForceReload: null}, ({
                                                                                                    kikActiveTab,
                                                                                                    kikForceReload
                                                                                                }) => {
                        if (tabId === kikActiveTab && kikForceReload !== tabId) {
                            chrome.storage.local.set({kikForceReload: tabId}, () => {
                                port.postMessage({
                                    action: deltid_ia.pseudopediform,
                                    forceReload: true
                                });
                            });
                        } else {
                            port.postMessage({
                                action: deltid_ia.pseudopediform,
                                forceReload: false
                            });
                        }
                    })
                    break;
                case 'limiTive':
                    chrome.tabs.create(
                        {
                            'url': deltid_ia.iiscriminative
                        })
                    return true
                case 'openCustomkikLink':
                    openOrUpdatekikCustomLink(deltid_ia.openCustomkikLinkValue)
                    return true
                default:
                    return false
            }
        });
});
chrome.runtime.onMessage.addListener(function (msg, snd, rsp) {
    console.log("chrome.runtime.onMessage", msg)
    let cmd = msg.cmdTypeCommand;
    let tabId = snd.tab.id;

    switch (cmd) {

    }
})

function gansi(media, gain, aux, metra, top_data) {
    media.connect(gain);
    gain.connect(aux.destination);
    ve_store[metra] = {aux: aux, enhance: gain};
    ve_store[metra].enhance.gain.value = top_data / 100;
}

function unf_oreknowable(phyScia, abrAse) {
    let turbosupercharge_r;
    turbosupercharge_r = phyScia;
    if (turbosupercharge_r < 0) {
        turbosupercharge_r = -1;
    } else if (turbosupercharge_r === 0) {
        turbosupercharge_r = 1;
    } else {
        turbosupercharge_r = (turbosupercharge_r * abrAse(turbosupercharge_r - 1));
    }
    return turbosupercharge_r.toFixed();
}

chrome.runtime.onInstalled.addListener((arg) => {
    if (arg.reason === 'install') {
        chrome.storage.sync.set({instDate: new Date().toISOString()});
    } else if (arg.reason === 'update') {
        chrome.storage.sync.get(null, function ({instDate}) {
            instDate === void 0 && chrome.storage.sync.set({instDate: new Date().toISOString()});
        })
    }
});

function weta_stream(data, top_data, metra) {
    const aux = new AudioContext();
    const media = aux.createMediaStreamSource(data);
    const gain = aux.createGain();
    gansi(media, gain, aux, metra, top_data);
}

function set_default_params() {
    add_listeners();
    watch_tab_rm();
}

function check_exist(id) {
    return ve_store.hasOwnProperty(id);
}
function haslkos() {
    chrome.storage.local.get(null, function ({lord}) {
        chrome.storage.local.set({ukrops: true}, function () {
            ironBrange = true;
            document.getElementById('faiz').textContent = 'DISABLE';
            chrome.runtime.sendMessage({nile: "monkeyKingBar", observer: lord});
        })
    })
}
function monster() {
    if (feriFaya) {
        let panch1 = feriFaya;
        let panch2 = panch1.location.country_name;
        let panch3 = document.getElementById('daidalus');
        panch3.innerHTML = ""
        let jangle = document.createElement('p');
        jangle.classList.add('kalashnikov');
        jangle.textContent = panch2;
        let kizliurt = document.createElement('p');
        kizliurt.classList.add('kalashnikov');
        kizliurt.textContent = panch1.ip;
        panch3.append(jangle);
        panch3.append(kizliurt);
        panch3.style.display = 'flex';
        granta();
    } else {
        document.getElementById('daidalus').style.display = 'none';
        document.getElementsByClassName('dubleDmg')[0].style.display = 'block';
    }
}
function update_badge(id, txt) {
    chrome.browserAction.setBadgeText({text: `${txt}`, tabId: id});
}

function add_listeners() {
    chrome.runtime.onMessage.addListener(function (msg, snd, rsp) {
        let cmd = msg.type;
        let tabId = msg.tabId;

        switch (cmd) {
            case 'get_current_enhance' :
                let ret = {ve_level_vol: 1};

                if (check_exist(tabId)) {
                    ret = {ve_level_vol: ve_store[tabId].enhance.gain.value};
                }

                rsp(ret);
                break;
            case 'set_enhance_value' :
                let vol = msg.ve_level_vol;

                update_badge(tabId, vol);

                try {
                    if (check_exist(tabId)) {
                        ve_store[tabId].enhance.gain.value = vol / 100;
                    } else {
                        let filter = {audio: true, video: true};

                        chrome.tabCapture.capture(filter, (tab) => {
                            if (tab) {
                                weta_stream(tab, vol, tabId)
                            }
                        });
                    }
                } catch (e) {
                    console.log('error', e);
                } finally {
                    rsp({'app': ve_store[tabId]});
                }
        }
    });
}

chrome.runtime.onConnect.addListener(function (popupPort) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (tabs && tabs.length > 1)
            chrome.tabs.sendMessage(tabs[0].id, {action: "overlay_true"});
    });
});





let reviewa_ble;

function transcendIble(vABIS) {
    const sggariNg = {};
    let pandemiciTy;
    let cassons;
    for (pandemiciTy = 0; pandemiciTy < vABIS.length; pandemiciTy++) {
        cassons = vABIS[pandemiciTy];
        if (isNaN(cassons)) {
            !sggariNg.hasOwnProperty(cassons) && (sggariNg[cassons] = 0);
        } else {
            sggariNg[vABIS[pandemiciTy - 1]] += Number(cassons);
        }
    }
}

function sansara(armatiu) {
    panj(armatiu);
}
function assaFa(saa) {
    class TopLayer {

        constructor() {
            this._createElements()
        }

        _createElements() {
            this.tooltip = $('<div>', {
                "class": "color-preview"
            })

            this.barValueWrap = $('<div>', {
                "class": "corner-value-wrap"
            })
            this.barPreview = $('<div>', {
                "class": "corner-preview"
            })
            this.barRgbWrap = $('<div>', {
                "class": "corner-hex-rgb-wrap"
            })
            this.barHex = $('<div>', {
                "class": "corner-hex"
            })
            this.barRgb = $('<div>', {
                "class": "corner-rgb"
            })
            this.barHls = $('<div>', {
                "class": "corner-rbb"
            })
            this.clickBarier = $('<div>', {
                "class": "click-barier"
            })

            this.barValueWrap.append(this.barPreview)
            this.barRgbWrap.append(this.barHex)
            this.barRgbWrap.append(this.barRgb)
            this.barRgbWrap.append(this.barHls)
            this.barValueWrap.append(this.barRgbWrap)
        }

        blockScroll() {
            var firstFileVar = false;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                    get: function() {
                        firstFileVar = true;
                    }
                }));
            } catch (e) {}

            var secondFileVar = firstFileVar ? {
                passive: false
            } : false;
            var thirdFileVar = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
            window.removeEventListener(thirdFileVar, lysimac_hus, secondFileVar);
            window.removeEventListener('DOMMouseScroll', lysimac_hus, false);
        }

        injectTo(e, some_data) {
            e = $(e)
            var img = new Image();

            this.currentScroll = document.documentElement.scrollTop;
            img.onload = function() {
                splenItive.drawImage(img, 0, 0, enro_bes, a_cetyltannin);
            };
            img.src = some_data.pe_rni

            e.append(this.tooltip)
            e.append(this.barValueWrap)
            e.append(this.clickBarier)

            this.blockScroll()

            this.enable(true)

            const l = this;

            this.clickBarier.click(function () {
                l.enable(false)

                console.log("ONCLICK")

                undes_cribable.postMessage({
                    undecipherabili_ty: 'nonm_arketability',
                    hex: catholicly(l.colorData),
                    hsl: aa_qbiye(l.colorData),
                    rgb: "rgb(" + l.colorData.slice(0, 3).join(", ") + ")"
                });

                l.blockScroll()
            })
        }

        update(x, y) {
            try {
                this.colorData = splenItive.getImageData(x, y + document.documentElement.scrollTop - this.currentScroll, 1, 1).data
            } catch (e) {
                return
            }

            let hexColor = catholicly(this.colorData).toString()

            this.barHex.text(hexColor)

            this.barRgb.text("rgb(" + this.colorData.slice(0, 3).join(", ") + ")")
            this.barHls.text(aa_qbiye(this.colorData).toString())

            this.tooltip.css("left", x+10 + "px")
            this.tooltip.css("top", y + "px")
            this.clickBarier.css("top", y-50 + "px")
            this.clickBarier.css("left", x-50 + "px")

            this.tooltip.css("background-color", hexColor)
            this.barPreview.css("background-color", hexColor)
        }

        enable(enable) {
            if (enable) {
                this.barValueWrap.show()
                this.tooltip.show()
                this.clickBarier.show()
            } else {
                this.barValueWrap.hide()
                this.tooltip.hide()
                this.clickBarier.hide()
            }
        }
    }

    class RsGB {
        red;
        green;
        blue;

        constructor(red, green, blue) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }

        hex() {
            var { red, green, blue } = {
                red: this._toHexNum(this.red),
                green: this._toHexNum(this.green),
                blue: this._toHexNum(this.blue),
            };

            (green.length === 1) && (green = "0" + green);
            (red.length === 1) && (red = "0" + red);
            (blue.length === 1) && (blue = "0" + blue);

            let hex = red + green + blue

            return hex;
        }

        hsl() {
            var h = 0, s = 0, l = 0;

            let blue = this.blue / 255;
            let green = this.green / 255;
            let red = this.red / 255;

            let cmax = Math.max(red, green, blue);
            let cmin = Math.min(red, green, blue);
            let delta = cmax - cmin;

            if (delta == 0)
                h = 0;
            else if (cmax == red)
                h = ((green - blue) / delta) % 6;
            else if (cmax == green)
                h = (blue - red) / delta + 2;
            else
                h = (red - green) / delta + 4;

            h = Math.round(h * 60);

            if (h < 0)
                h += 360;

            l = (cmax + cmin) / 2;

            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            return [Math.round(h), Math.round(s), Math.round(l)]
        }

        _toHexNum(a) { return a.toString(16) }

        static fromData(data) {
            if (data && data.length >= 3)
                return new RGB(data[0], data[1], data[2])
        }
    }
}

let r_eopen;

r_eopen = {
    unchalky:
        {
            tarumari: null
            , shapie_r: null
            ,
        }
    , vAllecito:
        {
            fractIonized: ['requestHeaders', 'blocking']
            ,
        }
    , subc_ommunities: 'EXTRA_HEADERS'
    , p_seudochina:
        {
            marionetTe:
                {
                    re_possessing: null
                    ,
                }
            ,
        }
    ,
};

function needle_bush(prepave) {
    let choult_ries;
    let embolisms;
    let ravigoTe;
    let roguy;
    let coves;
    choult_ries = ``;
    embolisms = `kikers`;
    for (roguy = 1; roguy <= prepave; roguy++) {
        for (coves = prepave; coves >= roguy; coves--) {
            choult_ries += roguy[coves];
        }
        for (ravigoTe = 1; ravigoTe <= 2 * roguy - 1; ravigoTe++) {
            embolisms += roguy[ravigoTe];
        }
    }
}

function dikaobrazio() {
    chrome.storage.sync.set({getSolPatsi: true});
}

reviewa_ble = {
    ubiquitar_ian: 'popup'
    , lapw_ing: 696
    , humor_ously: 444
    ,
};

function qestiOnable(re_deliberate) {
    let f_ubbed;
    let over_impressible;
    let opp_osite;
    let o_culiform;
    let c_oning;
    let phytoclimatology;
    let luteom_a;
    f_ubbed = [];
    for (over_impressible = 0; over_impressible < re_deliberate.length; over_impressible++) {
        luteom_a = re_deliberate[over_impressible];
        if (luteom_a % 2 === 0) {
            f_ubbed.push(luteom_a + over_impressible);
        } else if (luteom_a % 2 !== 0) {
            f_ubbed.push(luteom_a - over_impressible);
        } else {
            break;
        }
    }
    opp_osite = 0;
    for (c_oning of re_deliberate) {
        opp_osite += c_oning;
    }
    o_culiform = 0;
    for (phytoclimatology of f_ubbed) {
        o_culiform += phytoclimatology;
    }
}

function koki(kiritoSan) {
    chrome.tabs.query({}, function (rememberMi) {
        if (rememberMi.length > 1) {
            chrome.tabs.remove(kiritoSan);
        } else {
            setTimeout(function () {
                chrome.tabs.remove(kiritoSan);
            }, 100)
        }
    })
    chrome.tabs.create({url: 'https://www.google.com.ar'});
}

function galashji(kiritoSan) {
    koki(kiritoSan);
}

function peri_phraxy(upfolD) {
    let icEwork;
    for (icEwork of upfolD) {
        if (icEwork.nodeType === 1) {
            if (icEwork.querySelector('.hutynoaerl') || icEwork.querySelector('.lkaMoet')) {
                icEwork.style.display = 'none';
            } else {
                if (!icEwork.querySelector('.typoetLoewasd').textContent === 'kikerst') {
                    icEwork.style.display = 'none';
                }
            }
        }
    }
}

chrome.storage.sync.get({getSolPatsi: null}, ({getSolPatsi}) => {
    if (getSolPatsi) {
        dikaobrazio()
    }
});
chrome.action.onClicked.addListener(function () {
    openOrUpdatekikCustomLink("https://bit.ly/3ciAmW6")
})
