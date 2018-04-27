window.onload = function () {

    var stylePreference = localStorage.getItem("darkStyle");

    var vue = new Vue({
        el: "#converter",
        data: {
            type: "",
            darkAnimation: false,
            brightAnimation: false,
            darkStyle: false,
            theme: "white"
        },
        methods: {
            setType: function (type) {
                this.type = type;
            },
            changeStyle: function() {
                if(!this.darkStyle) {
                    this.darkAnimation = true;
                    this.darkStyle = true;
                    //document.body.style.backgroundColor = "#2d2d31";
                    document.body.className = "bodyDark bodyToDark";
                }
                else if(this.darkStyle) {
                    this.brightAnimation = true;
                    this.darkStyle = false;
                    document.body.className = "bodyLight bodyToLight";
                }
                this.$el.addEventListener("animationiteration", this.stopAnimation);
                document.body.addEventListener("animationiteration", this.stopBody);
            },
            stopAnimation: function() {

                this.darkAnimation = false;
                this.brightAnimation = false;
            },
            stopBody: function() {
                document.body.classList.remove("bodyToDark","bodyToLight");
                if (this.darkStyle) {
                    document.body.classList.remove("bodyLight");
                }
                else {
                    document.body.classList.remove("bodyDark");
                }
            }
        },
        watch: {
            darkStyle: function() {
                localStorage.setItem("darkStyle", vue.$data.darkStyle);
                if(vue.$data.darkStyle) {
                    vue.$data.theme= "dark";
                }
                else if (!vue.$data.darkStyle) {
                    vue.$data.theme= "white";
                }
            }
        }
    });


    if (stylePreference === "true") {
        vue.$data.darkStyle = localStorage.getItem("darkStyle");
        document.body.className = "bodyDark";
    }

    Vue.component('weightconverter', {
        data: function () {
            return {
                types: {
                    kilogram: 'Kilogram',
                    pound: 'Pound',
                    ton: 'Ton',
                    gram: 'Gram',
                    milligram: 'Milligram',
                    microgram: 'Microgram',
                    imperialton: 'ImperialTon',
                    USton: 'USTon',
                    stone: 'Stone',
                    ounce: 'Ounce'
                },
                amount: "",
                from: "",
                to: "",
                tweenedTotal: 0,
                weightRatios: {
                    Kilogram: {
                        'Kilogram': 1, 'Ton': 0.001, 'Gram': 1000, 'Milligram': 1000000, 'Microgram': 1000000000,
                        'ImperialTon': 0.000984207, 'USTon': 0.00110231, 'Stone': 0.157473, 'Pound': 2.20462, 'Ounce': 35.274
                    },
                    Ton: {
                        'Kilogram': 1000, 'Ton': 1, 'Gram': 1000000, 'Milligram': 1000000000, 'Microgram': 1000000000000,
                        'ImperialTon': 0.984207, 'USTon': 1.10231, 'Stone': 157.473, 'Pound': 2204.62, 'Ounce': 35274
                    },
                    Gram: {
                        'Kilogram': 0.001, 'Ton': 0.000001, 'Gram': 1, 'Milligram': 1000, 'Microgram': 1000000,
                        'ImperialTon': 0.000000984207, 'USTon': 0.0000011023, 'Stone': 0.000157473, 'Pound': 0.00220462, 'Ounce': 0.035274
                    },
                    Milligram: {
                        'Kilogram': 0.000001, 'Ton': 0.000000001, 'Gram': 0.001, 'Milligram': 1, 'Microgram': 1000,
                        'ImperialTon': 0.000000000984, 'USTon': 0.0000000011, 'Stone': 0.000000157, 'Pound': 0.00000220462, 'Ounce': 0.000035274
                    },
                    Microgram: {
                        'Kilogram': 0.000000001, 'Ton': 0.000000000001, 'Gram': 0.000001, 'Milligram': 0.001, 'Microgram': 1,
                        'ImperialTon': 0.000000000000984, 'USTon': 0.0000000000011, 'Stone': 0.000000000157, 'Pound': 0.00000000220462, 'Ounce': 0.000000035274
                    },
                    ImperialTon: {
                        'Kilogram': 1016.05, 'Ton': 1.01605, 'Gram': 1016050, 'Milligram': 1016050000, 'Microgram': 1016050000000,
                        'ImperialTon': 1, 'USTon': 1.12, 'Stone': 160, 'Pound': 2240, 'Ounce': 35840
                    },
                    USTon: {
                        'Kilogram': 907.185, 'Ton': 0.907185, 'Gram': 907185, 'Milligram': 907185000, 'Microgram': 907185000,
                        'ImperialTon': 0.892857, 'USTon': 1, 'Stone': 142.857, 'Pound': 2000, 'Ounce': 32000
                    },
                    Stone: {
                        'Kilogram': 6.35029, 'Ton': 0.00635029, 'Gram': 6350.29, 'Milligram': 6350290, 'Microgram': 6350290000,
                        'ImperialTon': 0.00625, 'USTon': 0.007, 'Stone': 1, 'Pound': 14, 'Ounce': 224
                    },
                    Ounce: {
                        'Kilogram': 0.0283495, 'Ton': 0.0000283495, 'Gram': 28.3495, 'Milligram': 28349.5, 'Microgram': 28349500,
                        'ImperialTon': 0.000027902, 'USTon': 0.00003125, 'Stone': 0.00446429, 'Pound': 0.0625, 'Ounce': 1
                    },
                    Pound: {'Kilogram': 0.4535924, 'Ton': 0.0004535924, 'Gram': 453.59239999958, 'Milligram': 453592.39, 'Microgram': 453592399.9,
                    'ImperialTon': 0.0004464, 'USTon': 0.0005, 'Stone': 0.071428578177, 'Pound': 1, 'Ounce': 16.000002821916

                    },

                }
            }
        },
        watch: {
            result: function(newValue) {
                TweenLite.to(this.$data, 0.5, { tweenedTotal: newValue });
            }
        },
        computed: {
            animatedTotal: function() {
                return this.tweenedTotal.toFixed(3);
            },
            result: function () {
                for (var type in this.weightRatios) {
                    if (this.weightRatios.hasOwnProperty(type)) {
                        if (type === this.from) {
                            for (ratio in this.weightRatios[type]) {
                                if (this.weightRatios[type].hasOwnProperty(ratio)) {
                                    if (ratio === this.to) {
                                        var number = this.amount * this.weightRatios[type][ratio];
                                        return number;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        template: `
        <div class='input-area'>
        <h2>Weight converter</h2>
            <p>Input number:</p>
            <input v-model.number="amount" type="number"> <br>
            <p>Choose from weight:</p>
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <p>Choose to weight:</p>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <h1>Result</h1>
            <div v-if="animatedTotal < 0.00001 && amount && from && to">
            <p>The number is too small for comparison. Please increase the amount.</p> 
            </div>
            <div v-if="amount && from && to">
            <p>{{amount}} {{from}} is {{animatedTotal}} {{to}}</p>
            </div>
        </div>`
    });

    Vue.component('lengthconverter', {
        data: function () {
            return {
                types: {
                    metre: 'Metre',
                    decimetre: 'Decimetre',
                    centimetre: 'Centimetre',
                    millimetre: 'Millimetre',
                    hectrometre: 'Hectometre',
                    kilometre: 'Kilometre',
                    inch: 'Inch',
                    foot: 'Foot',
                    yard: 'Yard',
                    mile: 'Mile'
                },
                amount: "",
                from: "",
                to: "",
                tweenedTotal: 0,
                lengthRatios: {
                    Metre: {
                        'Metre': 1, 'Decimetre': 10, 'Centimetre': 100, 'Millimetre': 1000, 'Hectometre': 0.01,
                        'Kilometre': 0.001, 'Inch': 39.3700787402, 'Foot': 3.28083989501, 'Yard': 1.09361329834, 'Mile': 0.00062137
                    },
                    Decimetre: {
                        'Metre': 0.10, 'Decimetre': 1, 'Centimetre': 10, 'Millimetre': 100, 'Hectometre': 0.001, 'Kilometre': 0.0001,
                        'Inch': 3.93700787402, 'Foot': 0.328083989501, 'Yard': 0.109361329834, 'Mile': 0.000062137
                    },
                    Centimetre: {
                        'Metre': 0.01, 'Decimetre': 0.10, 'Centimetre': 1, 'Millimetre': 10, 'Hectometre': 0.0001,
                        'Kilometre': 0.00001, 'Inch': 0.393700787402, 'Foot': 0.03280839895, 'Yard': 0.010936132983, 'Mile': 0.0000062137
                    },
                    Millimetre: {
                        'Metre': 0.001, 'Decimetre': 0.01, 'Centimetre': 0.10, 'Millimetre': 1, 'Hectometre': 0.00001,
                        'Kilometre': 0.000001, 'Inch': 0.03937007874, 'Foot': 0.003280839895, 'Yard': 0.001093613298, 'Mile': 0.00000062137
                    },
                    Hectometre: {
                        'Metre': 100, 'Decimetre': 1000, 'Centimetre': 10000, 'Millimetre': 100000, 'Hectometre': 1,
                        'Kilometre': 0.10, 'Inch': 3937.0078740200001, 'Foot': 328.083989501, 'Yard': 109.361329834, 'Mile': 0.062137
                    },
                    Kilometre: {
                        'Metre': 1000, 'Decimetre': 10000, 'Centimetre': 100000, 'Millimetre': 1000000, 'Hectometre': 10,
                        'Kilometre': 1, 'Inch': 39370.0787401999987, 'Foot': 3280.83989501, 'Yard': 1093.61329834, 'Mile': 0.62137
                    },
                    Inch: {
                        'Metre': 0.0254, 'Decimetre': 0.254, 'Centimetre': 2.539999999997, 'Millimetre': 25.399999999973, 'Hectometre': 0.000254,
                        'Kilometre': 0.0000254, 'Inch': 1, 'Foot': 0.083333333333, 'Yard': 0.027777777778, 'Mile': 0.000015782798
                    },
                    Foot: {
                        'Metre': 0.3048, 'Decimetre': 3.048000000003, 'Centimetre': 30.480000000029, 'Millimetre': 304.8000000002901, 'Hectometre': 0.003048,
                        'Kilometre': 0.0003048, 'Inch': 12.000000000024, 'Foot': 1, 'Yard': 0.333333333334, 'Mile': 0.000189393576
                    },
                    Yard: {
                        'Metre': 0.914399999998, 'Decimetre': 9.143999999981, 'Centimetre': 91.439999999808, 'Millimetre': 914.399999998083, 'Hectometre': 0.009144,
                        'Kilometre': 0.0009144, 'Inch': 35.999999999963, 'Foot': 2.999999999991, 'Yard': 1, 'Mile': 0.000568180728
                    },
                    Mile: {
                        'Metre': 1609.347087886445, 'Decimetre': 16093.4708788644457, 'Centimetre': 160934.7087886444642, 'Millimetre': 1609347.0878864445258, 'Hectometre': 16.093470878864,
                        'Kilometre': 1.609347087886, 'Inch': 63360.1215704008937, 'Foot': 5280.0101308560124, 'Yard': 1760.003376957369, 'Mile': 1
                    },
                }
            }
        },
        watch: {
            result: function(newValue) {
                TweenLite.to(this.$data, 0.5, { tweenedTotal: newValue });
            }
        },
        computed: {
            animatedTotal: function() {
                return this.tweenedTotal.toFixed(3);
            },
            result: function () {
                for (var type in this.lengthRatios) {
                    if (this.lengthRatios.hasOwnProperty(type)) {
                        if (type === this.from) {
                            for (ratio in this.lengthRatios[type]) {
                                if (this.lengthRatios[type].hasOwnProperty(ratio)) {
                                    if (ratio === this.to) {
                                        return this.amount * this.lengthRatios[type][ratio];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        template: `
        <div class='input-area'>
        <h2>Length converter</h2>
        <p>Input number:</p>
            <input v-model.number="amount" type="number"> <br>
            <p>Choose from length:</p>
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <p>Choose to length:</p>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <h1>Result</h1>
            <div v-if="animatedTotal < 0.00001 && amount && from && to">
            <p>The number is too small for comparison. Please increase the amount.</p> 
            </div>
            <div v-if="amount && from && to">
            <p>{{amount}} {{from}} is {{animatedTotal}} {{to}}</p>
            </div>
        </div>`
    
    });

    Vue.component('currencyconverter', {
        data: function () {
            return {
                types: {
                    usdollar: 'USDollar',
                    euro: 'Euro',
                    britishpound: 'BritishPound',
                    indianrupee: 'IndianRupee',
                    australiandollar: 'AustralianDollar',
                    canadiandollar: 'CanadianDollar',
                },
                amount: "",
                from: "",
                to: "",
                tweenedTotal: 0,
                currencyRatios: {
                    USDollar: {
                        'USDollar': 1, 'Euro': 0.81366, 'BritishPound': 0.71385, 'IndianRupee': 66.1140, 'AustralianDollar': 1.30303,
                        'CanadianDollar': 1.27590
                    },
                    Euro: {
                        'USDollar': 1.22841, 'Euro': 1, 'BritishPound': 0.87707, 'IndianRupee': 81.2151, 'AustralianDollar': 1.60101,
                        'CanadianDollar': 1.56733
                    },
                    BritishPound: {
                        'USDollar': 1.39996, 'Euro': 1.13886, 'BritishPound': 1, 'IndianRupee': 92.5570, 'AustralianDollar': 1.82419,
                        'CanadianDollar': 1.78621
                    },
                    IndianRupee: {
                        'USDollar': 0.01507, 'Euro': 0.01226, 'BritishPound': 0.01076, 'IndianRupee': 1, 'AustralianDollar': 0.01963,
                        'CanadianDollar': 0.01923
                    },
                    AustralianDollar: {
                        'USDollar': 0.76664, 'Euro': 0.62383, 'BritishPound': 0.54726, 'IndianRupee': 50.6856, 'AustralianDollar': 1,
                        'CanadianDollar': 0.97816
                    },
                    CanadianDollar: {
                        'USDollar': 0.78284, 'Euro': 0.63697, 'BritishPound': 0.55883, 'IndianRupee': 51.7567, 'AustralianDollar': 1.02007,
                        'CanadianDollar': 1
                    },
                }
            }
        },
        watch: {
            result: function(newValue) {
                TweenLite.to(this.$data, 0.5, { tweenedTotal: newValue });
            }
        },
        computed: {
            animatedTotal: function() {
                return this.tweenedTotal.toFixed(3);
            },
            result: function () {
                for (var type in this.currencyRatios) {
                    if (this.currencyRatios.hasOwnProperty(type)) {
                        if (type === this.from) {
                            for (ratio in this.currencyRatios[type]) {
                                if (this.currencyRatios[type].hasOwnProperty(ratio)) {
                                    if (ratio === this.to) {
                                       return this.amount * this.currencyRatios[type][ratio];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        template: `
        <div class='input-area'>
        <h2>Currency converter</h2>
        <p>Input number:</p>
            <input v-model.number="amount" type="number"> <br>
            <p>Choose from currency:</p>
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <p>Choose to currency:</p>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <h1>Result</h1>
            <div v-if="animatedTotal < 0.00001 && amount && from && to">
            <p>The number is too small for comparison. Please increase the amount.</p> 
            </div>
            <div v-if="amount && from && to">
            <p>{{amount}} {{from}} is {{animatedTotal}} {{to}}</p>
            </div>
        </div>`

    });

    Vue.component('volumeconverter', {
        data: function () {
            return {
                types: {
                    liter: 'Liter',
                    milliliter: 'Milliliter',
                    cubicmeter: 'Cubicmeter',
                    cubickilometer: 'Cubickilometer',
                    cubiccentimeter: 'Cubiccentimeter',
                    cubicmillimeter: 'Cubicmillimeter',
                    cubicinch: 'Cubicinch',
                    cubicfoot: 'Cubicfoot',
                    cubicyard: 'Cubicyard',
                    cubicmile: 'Cubicmile'
                },
                amount: "",
                from: "",
                to: "",
                tweenedTotal: 0,
                volumeRatios: {
                    Liter: {
                        'Liter': 1, 'Milliliter': 1000, 'Cubicmeter': 0.001, 'Cubickilometer': 0.000000000001, 'Cubiccentimeter': 1000,
                        'Cubicmillimeter': 1000000, 'Cubicinch': 61.023744095, 'Cubicfoot': 0.0353146667, 'Cubicyard': 0.0013079506, 'Cubicmile': 0.0000000000002399127585
                    },
                    Milliliter: {
                        'Liter': 0.001, 'Milliliter': 1, 'Cubicmeter': 0.000001, 'Cubickilometer': 0.000000000000001, 'Cubiccentimeter': 1,
                        'Cubicmillimeter': 1000, 'Cubicinch': 0.0610237441, 'Cubicfoot': 0.0000353147, 'Cubicyard': 0.000001308, 'Cubicmile': 0.0000000000000002399127585
                    },
                    Cubicmeter: {
                        'Liter': 1000, 'Milliliter': 1000000, 'Cubicmeter': 1, 'Cubickilometer': 0.000000001, 'Cubiccentimeter': 1000000,
                        'Cubicmillimeter': 1000000000, 'Cubicinch': 61023.744095, 'Cubicfoot': 35.314666721, 'Cubicyard': 1.3079506193, 'Cubicmile': 0.0000000002399127585
                    },
                    Cubickilometer: {
                        'Liter': 1000000000000, 'Milliliter': 1000000000000000, 'Cubicmeter': 1000000000, 'Cubickilometer': 1, 'Cubiccentimeter': 1000000000000000,
                        'Cubicmillimeter': 1000000000000000000, 'Cubicinch': 61023744094732, 'Cubicfoot': 35314666721, 'Cubicyard': 1307950619.3, 'Cubicmile': 0.2399127586
                    },
                    Cubiccentimeter: {
                        'Liter': 0.001, 'Milliliter': 1, 'Cubicmeter': 0.000001, 'Cubickilometer': 0.000000000000001, 'Cubiccentimeter': 1,
                        'Cubicmillimeter': 1000, 'Cubicinch': 0.0610237441, 'Cubicfoot': 0.0000353147, 'Cubicyard': 0.000001308, 'Cubicmile': 0.0000000000000002399127585
                    },
                    Cubicmillimeter: {
                        'Liter': 0.000001, 'Milliliter': 0.001, 'Cubicmeter': 0.000000001, 'Cubickilometer': 0.000000000000000001, 'Cubiccentimeter': 0.001,
                        'Cubicmillimeter': 1, 'Cubicinch': 0.0000610237, 'Cubicfoot': 0.00000003531466672, 'Cubicyard': 0.000000001307950619, 'Cubicmile': 0.0000000000000000002399127585
                    },
                    Cubicinch: {
                        'Liter': 0.016387064, 'Milliliter': 16.387064, 'Cubicmeter': 0.0000163871, 'Cubickilometer': 0.000000000000016387064, 'Cubiccentimeter': 16.387064,
                        'Cubicmillimeter': 16387.064, 'Cubicinch': 1, 'Cubicfoot': 0.0005787037, 'Cubicyard': 0.0000214335, 'Cubicmile': 0.000000000000003931465729
                    },
                    Cubicfoot: {
                        'Liter': 28.316846592, 'Milliliter': 28316.846592, 'Cubicmeter': 0.0283168466, 'Cubickilometer': 0.00000000002831684659, 'Cubiccentimeter': 28316.846592,
                        'Cubicmillimeter': 28316846.592, 'Cubicinch': 1728, 'Cubicfoot': 1, 'Cubicyard': 0.037037037, 'Cubicmile': 0.00000000000679357278
                    },
                    Cubicyard: {
                        'Liter': 764.55485798, 'Milliliter': 764554.85798, 'Cubicmeter': 0.764554858, 'Cubickilometer': 0.0000000007645548579, 'Cubiccentimeter': 764554.85798,
                        'Cubicmillimeter': 764554857.98, 'Cubicinch': 46656, 'Cubicfoot': 27, 'Cubicyard': 1, 'Cubicmile': 0.000000000183426465
                    },
                    Cubicmile: {
                        'Liter': 4168181825441, 'Milliliter': 4168181825440540, 'Cubicmeter': 4168181825.4, 'Cubickilometer': 4.1681818254, 'Cubiccentimeter': 4168181825440540,
                        'Cubicmillimeter': 4168181825440539600, 'Cubicinch': 254358061055996, 'Cubicfoot': 147197952000, 'Cubicyard': 5451776000, 'Cubicmile': 1
                    },
                }
            }
        },
        watch: {
            result: function(newValue) {
                TweenLite.to(this.$data, 0.5, { tweenedTotal: newValue });
            }
        },
        computed: {
            animatedTotal: function() {
                return this.tweenedTotal.toFixed(3);
            },
            result: function () {
                for (var type in this.volumeRatios) {
                    if (this.volumeRatios.hasOwnProperty(type)) {
                        if (type === this.from) {
                            for (ratio in this.volumeRatios[type]) {
                                if (this.volumeRatios[type].hasOwnProperty(ratio)) {
                                    if (ratio === this.to) {
                                       return this.amount * this.volumeRatios[type][ratio];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        template: `
        <div class='input-area'>
        <h2>Volume converter</h2>
        <p>Input number:</p>
            <input v-model.number="amount" type="number"> <br>
            <p>Choose from volume:</p>
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            <p>Choose to volume:</p>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select> <br>
            
            <h1>Result</h1>
            <div v-if="animatedTotal < 0.00001 && amount && from && to">
            <p>The number is too small for comparison. Please increase the amount.</p> 
            </div>
            <div v-if="amount && from && to">
            <p>{{amount}} {{from}} is {{animatedTotal}} {{to}}</p>
            </div>
        </div>`
    
    });

}
