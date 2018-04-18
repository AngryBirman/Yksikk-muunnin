window.onload = function() {

    var vue = new Vue({
        el: "#yksikkomuunnin",
        data: {
            type: ""
        },
        methods: {
            setType: function(type) {
                this.type = type;
            }
        }
    });

    Vue.component('painomuunnin', {
        data: function() {
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
                    Kilogram: { 'Kilogram': 1, 'Ton': 0.001, 'Gram': 1000, 'Milligram': 1000000, 'Microgram': 1000000000, 
                                'ImperialTon': 0.000984207, 'USTon': 0.00110231, 'Stone': 0.157473, 'Pound': 2.20462,'Ounce': 35.274
                    },
                    Ton: { 'Kilogram': 1000, 'Ton': 1, 'Gram': 1000000, 'Milligram': 1000000000, 'Microgram': 1000000000000, 
                    'ImperialTon': 0.984207, 'USTon': 1.10231, 'Stone': 157.473, 'Pound': 2204.62,'Ounce': 35274
                    },
                    Gram: { 'Kilogram': 0.001, 'Ton': 0.000001, 'Gram': 1, 'Milligram': 1000, 'Microgram': 1000000, 
                    'ImperialTon': 0.000000984207, 'USTon': 0.0000011023, 'Stone': 0.000157473, 'Pound': 0.00220462,'Ounce': 0.035274
                    },
                    Milligram: { 'Kilogram': 0.000001, 'Ton': 0.000000001, 'Gram': 0.001, 'Milligram': 1, 'Microgram': 1000, 
                    'ImperialTon': 0.000000000984, 'USTon': 0.0000000011, 'Stone': 0.000000157, 'Pound': 0.00000220462,'Ounce': 0.000035274
                    },
                    Microgram: { 'Kilogram': 0.000000001, 'Ton': 0.000000000001, 'Gram': 0.000001, 'Milligram': 0.001, 'Microgram': 1, 
                    'ImperialTon': 0.000000000000984, 'USTon': 0.0000000000011, 'Stone': 0.000000000157, 'Pound': 0.00000000220462,'Ounce': 0.000000035274
                    },
                    ImperialTon: { 'Kilogram': 1016.05, 'Ton': 1.01605, 'Gram': 1016050, 'Milligram': 1016050000, 'Microgram': 1016050000000, 
                    'ImperialTon': 1, 'USTon': 1.12, 'Stone': 160, 'Pound': 2240,'Ounce': 35840
                    },
                    USTon: {'Kilogram': 907.185, 'Ton': 0.907185, 'Gram': 907185, 'Milligram': 907185000, 'Microgram': 907185000, 
                    'ImperialTon': 0.892857, 'USTon': 1, 'Stone': 142.857, 'Pound': 2000,'Ounce': 32000
                    },
                    Stone: {'Kilogram': 6.35029, 'Ton': 0.00635029, 'Gram': 6350.29, 'Milligram': 6350290, 'Microgram': 6350290000, 
                    'ImperialTon': 0.00625, 'USTon': 0.007, 'Stone': 1, 'Pound': 14,'Ounce': 224
                    },
                    Pound: {'Kilogram': 0.0283495, 'Ton': 0.0000283495, 'Gram': 28.3495, 'Milligram': 28349.5, 'Microgram': 28349500, 
                    'ImperialTon': 0.000027902, 'USTon': 0.00003125, 'Stone': 0.00446429, 'Pound': 0.0625,'Ounce': 1
                    },
                    Ounce: {},

                }
            }
        },
        methods: {
            result: function() {
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
}