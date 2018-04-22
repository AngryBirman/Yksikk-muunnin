window.onload = function () {

    var vue = new Vue({
        el: "#converter",
        data: {
            type: ""
        },
        methods: {
            setType: function (type) {
                this.type = type;
            }
        }
    });

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
                    Pound: {
                        'Kilogram': 0.0283495, 'Ton': 0.0000283495, 'Gram': 28.3495, 'Milligram': 28349.5, 'Microgram': 28349500,
                        'ImperialTon': 0.000027902, 'USTon': 0.00003125, 'Stone': 0.00446429, 'Pound': 0.0625, 'Ounce': 1
                    },
                    Ounce: {},

                }
            }
        },
        methods: {
            result: function () {
                for (var type in this.weightRatios) {
                    if (this.weightRatios.hasOwnProperty(type)) {
                        if (type === this.from) {
                            for (ratio in this.weightRatios[type]) {
                                if (this.weightRatios[type].hasOwnProperty(ratio)) {
                                    if (ratio === this.to) {
                                        return this.amount * this.weightRatios[type][ratio];
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
            <input v-model.number="amount" type="number">
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <p>{{result()}}</p>
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
        methods: {
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
            <input v-model.number="amount" type="number">
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <p>{{result()}}</p>
        </div>`
    
    });

    Vue.component('currencyconverter', {
        data: function () {
            return {
                types: {
                    usdollar: 'US Dollar',
                    euro: 'Euro',
                    britishpound: 'British Pound',
                    indianrupee: 'Indian Rupee',
                    australiandollar: 'Australian Dollar',
                    canadiandollar: 'Canadian Dollar',
                },
                amount: "",
                from: "",
                to: "",
                currencyRatios: {
                    USDollar: {
                        'US Dollar': 1, 'Euro': 0.81366, 'British Pound': 0.71385, 'Indian Rupee': 66.1140, 'Australian Dollar': 1.30303,
                        'Canadian Dollar': 1.27590
                    },
                    Euro: {
                        'US Dollar': 1.22841, 'Euro': 1, 'British Pound': 0.87707, 'Indian Rupee': 81.2151, 'Australian Dollar': 1.60101,
                        'Canadian Dollar': 1.56733
                    },
                    BritishPound: {
                        'US Dollar': 1.39996, 'Euro': 1.13886, 'British Pound': 1, 'Indian Rupee': 92.5570, 'Australian Dollar': 1.82419,
                        'Canadian Dollar': 1.78621
                    },
                    IndianRupee: {
                        'US Dollar': 0.01507, 'Euro': 0.01226, 'British Pound': 0.01076, 'Indian Rupee': 1, 'Australian Dollar': 0.01963,
                        'Canadian Dollar': 0.01923
                    },
                    AustralianDollar: {
                        'US Dollar': 0.76664, 'Euro': 0.62383, 'British Pound': 0.54726, 'Indian Rupee': 50.6856, 'Australian Dollar': 1,
                        'Canadian Dollar': 0.97816
                    },
                    CanadianDollar: {
                        'US Dollar': 0.78284, 'Euro': 0.63697, 'British Pound': 0.55883, 'Indian Rupee': 51.7567, 'Australian Dollar': 1.02007,
                        'Canadian Dollar': 1
                    },
                }
            }
        },
        methods: {
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
            <input v-model.number="amount" type="number">
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <p>{{result()}}</p>
        </div>`

    });

    Vue.component('volumeconverter', {
        data: function () {
            return {
                types: {
                    liter: 'Liter',
                    milliliter: 'Milliliter',
                    cubicmeter: 'Cubic Meter',
                    cubickilometer: 'Cubic Kilometer',
                    cubiccentimeter: 'Cubic Centimeter',
                    cubicmillimeter: 'Cubic Millimeter',
                    cubicinch: 'Cubic Inch',
                    cubicfoot: 'Cubic Foot',
                    cubicyard: 'Cubic Yard',
                    cubicmile: 'Cubic Mile'
                },
                amount: "",
                from: "",
                to: "",
                volumeRatios: {
                    Liter: {
                        'Liter': 1, 'Milliliter': 1000, 'Cubic Meter': 0.001, 'Cubic Kilometer': 0.000000000001, 'Cubic Centimeter': 1000,
                        'Cubic Millimeter': 1000000, 'Cubic Inch': 61.023744095, 'Cubic Foot': 0.0353146667, 'Cubic Yard': 0.0013079506, 'Cubic Mile': 0.0000000000002399127585
                    },
                    Milliliter: {
                        'Liter': 0.001, 'Milliliter': 1, 'Cubic Meter': 0.000001, 'Cubic Kilometer': 0.000000000000001, 'Cubic Centimeter': 1,
                        'Cubic Millimeter': 1000, 'Cubic Inch': 0.0610237441, 'Cubic Foot': 0.0000353147, 'Cubic Yard': 0.000001308, 'Cubic Mile': 0.0000000000000002399127585
                    },
                    Cubicmeter: {
                        'Liter': 1000, 'Milliliter': 1000000, 'Cubic Meter': 1, 'Cubic Kilometer': 0.000000001, 'Cubic Centimeter': 1000000,
                        'Cubic Millimeter': 1000000000, 'Cubic Inch': 61023.744095, 'Cubic Foot': 35.314666721, 'Cubic Yard': 1.3079506193, 'Cubic Mile': 0.0000000002399127585
                    },
                    Cubickilometer: {
                        'Liter': 1000000000000, 'Milliliter': 1000000000000000, 'Cubic Meter': 1000000000, 'Cubic Kilometer': 1, 'Cubic Centimeter': 1000000000000000,
                        'Cubic Millimeter': 1000000000000000000, 'Cubic Inch': 61023744094732, 'Cubic Foot': 35314666721, 'Cubic Yard': 1307950619.3, 'Cubic Mile': 0.2399127586
                    },
                    Cubiccentimeter: {
                        'Liter': 0.001, 'Milliliter': 1, 'Cubic Meter': 0.000001, 'Cubic Kilometer': 0.000000000000001, 'Cubic Centimeter': 1,
                        'Cubic Millimeter': 1000, 'Cubic Inch': 0.0610237441, 'Cubic Foot': 0.0000353147, 'Cubic Yard': 0.000001308, 'Cubic Mile': 0.0000000000000002399127585
                    },
                    Cubicmillimeter: {
                        'Liter': 0.000001, 'Milliliter': 0.001, 'Cubic Meter': 0.000000001, 'Cubic Kilometer': 0.000000000000000001, 'Cubic Centimeter': 0.001,
                        'Cubic Millimeter': 1, 'Cubic Inch': 0.0000610237, 'Cubic Foot': 0.00000003531466672, 'Cubic Yard': 0.000000001307950619, 'Cubic Mile': 0.0000000000000000002399127585
                    },
                    Cubicinch: {
                        'Liter': 0.016387064, 'Milliliter': 16.387064, 'Cubic Meter': 0.0000163871, 'Cubic Kilometer': 0.000000000000016387064, 'Cubic Centimeter': 16.387064,
                        'Cubic Millimeter': 16387.064, 'Cubic Inch': 1, 'Cubic Foot': 0.0005787037, 'Cubic Yard': 0.0000214335, 'Cubic Mile': 0.000000000000003931465729
                    },
                    Cubicfoot: {
                        'Liter': 28.316846592, 'Milliliter': 28316.846592, 'Cubic Meter': 0.0283168466, 'Cubic Kilometer': 0.00000000002831684659, 'Cubic Centimeter': 28316.846592,
                        'Cubic Millimeter': 28316846.592, 'Cubic Inch': 1728, 'Cubic Foot': 1, 'Cubic Yard': 0.037037037, 'Cubic Mile': 0.00000000000679357278
                    },
                    Cubicyard: {
                        'Liter': 764.55485798, 'Milliliter': 764554.85798, 'Cubic Meter': 0.764554858, 'Cubic Kilometer': 0.0000000007645548579, 'Cubic Centimeter': 764554.85798,
                        'Cubic Millimeter': 764554857.98, 'Cubic Inch': 46656, 'Cubic Foot': 27, 'Cubic Yard': 1, 'Cubic Mile': 0.000000000183426465
                    },
                    Cubicmile: {
                        'Liter': 4168181825441, 'Milliliter': 4168181825440540, 'Cubic Meter': 4168181825.4, 'Cubic Kilometer': 4.1681818254, 'Cubic Centimeter': 4168181825440540,
                        'Cubic Millimeter': 4168181825440539600, 'Cubic Inch': 254358061055996, 'Cubic Foot': 147197952000, 'Cubic Yard': 5451776000, 'Cubic Mile': 1
                    },
                }
            }
        },
        methods: {
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
            <input v-model.number="amount" type="number">
            <select v-model="from">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <select v-model="to">
            <option v-for='value in types' v-bind:value=value>{{value}}</option>
            </select>
            <p>{{result()}}</p>
        </div>`
    
    });

}
