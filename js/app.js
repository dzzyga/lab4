(function () {
    'use strict';

    angular.module('Lab4', [])
        .controller('BuyController', BuyController)
        .controller('BoughtController', BoughtController)
        .service('Service', Service);

    BuyController.$inject = ['Service'];

    function BuyController(Service) 
    {
        var mustBuy = this;
        mustBuy.listToBuy = Service.getListToBuy();
        mustBuy.sell = function (index) {
            Service.sell(index);
        }
    }

    BoughtController.$inject = ['Service'];

    function BoughtController(Service) 
    {
        var bought = this;
        bought.ListBought = Service.getListBought();
    }

    function Service() 
    {
        var service = this;
        var listToBuy = [
            {
                name: "Пачок чіпсів",
                quantity: 33
            },
            {
                name: "Кока-кол",
                quantity: 222
            },
            {
                name: "Горілки",
                quantity: 2
            },
            {
                name: "Хлібів",
                quantity: 6
            },
            {
                name: "Солі",
                quantity: 2
            },
            {
                name: "Пива",
                quantity: 11
            },
            {
                name: "Кетчупи",
                quantity: 2
            },
            {
                name: "Майонези",
                quantity: 3
            },
        ];

        var ListBought = [];

        service.getListToBuy = function () {
            return listToBuy;
        };

        service.getListBought = function () {
            return ListBought;
        };
        service.sell = function (index) {
            ListBought.push(listToBuy[index]);
            listToBuy.splice(index, 1);
        };
    }
})();
