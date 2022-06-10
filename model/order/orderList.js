import {
  mockIp,
  mockReqId
} from '../../utils/mock';

export function genOrders(params) {
  const resp = {
    data: {
      pageNum: 1,
      pageSize: 10,
      totalCount: 7,
      orders: [{
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '354021731671873099',
          orderId: '354021735982432279',
          orderNo: '354021731671873099',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 5,
          orderSubStatus: null,
          totalAmount: '10010',
          goodsAmount: '10000',
          goodsAmountApp: '10000',
          paymentAmount: '20',
          freightFee: '10',
          packageFee: '0',
          discountAmount: '9990',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1600350829291',
          orderItemVOs: [{
            id: '354021736133427225',
            orderNo: null,
            spuId: '3',
            skuId: '135696670',
            roomId: null,
            goodsMainType: 0,
            goodsViceType: 0,
            goodsName: '大连红灯樱桃',
            specifications: [{
                specTitle: '重量',
                specValue: '5kg'
              },
              {
                specTitle: '类型',
                specValue: '大果'
              },
            ],
            goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/9e3df8dcd100baa1dea1d5124d10b912c9fc2e8d?x-bce-process=image/resize,m_lfit,w_235,h_235,limit_1/format,f_auto',
            originPrice: '0',
            actualPrice: '9999',
            buyQuantity: 1,
            itemTotalAmount: '9999',
            itemDiscountAmount: '9990',
            itemPaymentAmount: '10',
            goodsPaymentPrice: '10',
            tagPrice: null,
            tagText: null,
            outCode: null,
            labelVOs: null,
            buttonVOs: null,
          }, ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '',
            logisticsStatus: null,
            logisticsCompanyCode: '',
            logisticsCompanyName: '',
            receiverAddressId: '14',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '宝安区',
            receiverArea: '',
            receiverAddress: '沙井中心路28号丽沙花都xx栋xx号',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '测试用户',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: null,
            arrivalTime: null,
          },
          paymentVO: {
            payStatus: 1,
            amount: '20',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: [{
              primary: false,
              type: 2,
              name: '取消订单'
            },
            {
              primary: true,
              type: 1,
              name: '付款'
            },
          ],
          labelVOs: null,
          invoiceVO: null,
          couponAmount: null,
          autoCancelTime: '1600352629291',
          orderStatusName: '待付款',
          orderSatusRemark: '需支付￥0.20',
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
        {
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '132381532610540875',
          orderId: '132381537256650240',
          orderNo: '132381532610540875',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 10,
          orderSubStatus: null,
          totalAmount: '76600',
          goodsAmount: '76600',
          goodsAmountApp: '76600',
          paymentAmount: '36800',
          freightFee: '0',
          packageFee: '0',
          discountAmount: '39800',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1587140043980',
          orderItemVOs: [{
              id: '132381537407645696',
              orderNo: null,
              spuId: '0',
              skuId: '135676631',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '大连明珠樱桃',
              goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/38dbb6fd5266d016f2f6713d9f2bd40735fa353c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
              originPrice: '40000',
              actualPrice: '29800',
              specifications: [{
                  specTitle: '重量',
                  specValue: '5kg'
                },
                {
                  specTitle: '类型',
                  specValue: '小果'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '29800',
              itemDiscountAmount: '19813',
              itemPaymentAmount: '9987',
              goodsPaymentPrice: '9987',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
            {
              id: '132381537407645952',
              orderNo: null,
              spuId: '7',
              skuId: '135691633',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '大连湾生蚝',
              goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/9825bc315c6034a8fa166248c213495408237607?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto',
              originPrice: '29900',
              actualPrice: '19900',
              specifications: [{
                  specTitle: '重量',
                  specValue: '5kg'
                },
                {
                  specTitle: '类型',
                  specValue: '大果'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '19900',
              itemDiscountAmount: '13230',
              itemPaymentAmount: '6670',
              goodsPaymentPrice: '6670',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
            {
              id: '132381537407646208',
              orderNo: null,
              spuId: '1',
              skuId: '135691631',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '大连俄八樱桃',
              goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/0824ab18972bd40735fa0b4ca0db89510fb30f24a37d?x-bce-process=image/resize,m_lfit,h_168,limit_1/format,f_auto',
              originPrice: '31900',
              actualPrice: '26900',
              specifications: [{
                  specTitle: '重量',
                  specValue: '白色'
                },
                {
                  specTitle: '类型',
                  specValue: 'S'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '26900',
              itemDiscountAmount: '6757',
              itemPaymentAmount: '20143',
              goodsPaymentPrice: '20143',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
          ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '',
            logisticsStatus: null,
            logisticsCompanyCode: '',
            logisticsCompanyName: '',
            receiverAddressId: '2',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '南山区',
            receiverArea: '',
            receiverAddress: '前海路333号阳光玫瑰园',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '平均线',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: null,
            arrivalTime: null,
          },
          paymentVO: {
            payStatus: 1,
            amount: '36800',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: [{
              primary: false,
              type: 2,
              name: '取消订单',
            },
            {
              primary: true,
              type: 9,
              name: '再次购买',
            },
          ],
          labelVOs: null,
          invoiceVO: null,
          couponAmount: null,
          autoCancelTime: null,
          orderStatusName: '待发货',
          orderSatusRemark: null,
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
        {
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '132222623132329291',
          orderId: '132222629674264064',
          orderNo: '132222623132329291',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 40,
          orderSubStatus: null,
          totalAmount: '500400',
          goodsAmount: '500400',
          goodsAmountApp: '500400',
          paymentAmount: '458600',
          freightFee: '0',
          packageFee: '0',
          discountAmount: '41800',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1587130572349',
          orderItemVOs: [{
              id: '132222629825259776',
              orderNo: null,
              spuId: '5',
              skuId: '135691625',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '迷你便携高颜值蓝牙无线耳机立体声只能触控式操作简约立体声耳机',
              goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
              originPrice: '15900',
              actualPrice: '8900',
              specifications: [{
                  specTitle: '重量',
                  specValue: '黑色'
                },
                {
                  specTitle: '类型',
                  specValue: '简约'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '8900',
              itemDiscountAmount: '2134',
              itemPaymentAmount: '6766',
              goodsPaymentPrice: '6766',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
            {
              id: '132222629825260032',
              orderNo: null,
              spuId: '0',
              skuId: '135676631',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '大连明珠樱桃',
              goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/38dbb6fd5266d016f2f6713d9f2bd40735fa353c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
              originPrice: '40000',
              actualPrice: '29800',
              specifications: [{
                  specTitle: '重量',
                  specValue: '5kg'
                },
                {
                  specTitle: '类型',
                  specValue: 'S'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '29800',
              itemDiscountAmount: '4026',
              itemPaymentAmount: '25774',
              goodsPaymentPrice: '25774',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
            {
              id: '132222629825260288',
              orderNo: null,
              spuId: '3',
              skuId: '135691622',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '大连红灯樱桃',
              goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
              originPrice: '16900',
              actualPrice: '9900',
              specifications: [{
                  specTitle: '重量',
                  specValue: '经典白'
                },
                {
                  specTitle: '5kg',
                  specValue: '经典套装'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '9900',
              itemDiscountAmount: '1337',
              itemPaymentAmount: '8563',
              goodsPaymentPrice: '8563',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
            {
              id: '132222629825260544',
              orderNo: null,
              spuId: '135681628',
              skuId: '135676629',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '带帽午休毯虎年款多功能加厚加大加绒简约多功能午休毯连帽披肩',
              goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
              originPrice: '39900',
              actualPrice: '29900',
              specifications: [{
                  specTitle: '重量',
                  specValue: '浅灰色'
                },
                {
                  specTitle: '类型',
                  specValue: 'S'
                },
              ],
              buyQuantity: 4,
              itemTotalAmount: '119600',
              itemDiscountAmount: '4040',
              itemPaymentAmount: '115560',
              goodsPaymentPrice: '28890',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
            {
              id: '132222629825260800',
              orderNo: null,
              spuId: '2',
              skuId: '135686631',
              roomId: null,
              goodsMainType: 0,
              goodsViceType: 0,
              goodsName: '运动连帽拉链卫衣休闲开衫长袖多色运动细绒面料运动上衣',
              goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
              originPrice: '39900',
              actualPrice: '25900',
              specifications: [{
                  specTitle: '重量',
                  specValue: '军绿色'
                },
                {
                  specTitle: '类型',
                  specValue: 'XS'
                },
              ],
              buyQuantity: 1,
              itemTotalAmount: '25900',
              itemDiscountAmount: '392',
              itemPaymentAmount: '25508',
              goodsPaymentPrice: '25508',
              tagPrice: null,
              tagText: null,
              outCode: null,
              labelVOs: null,
              buttonVOs: null,
            },
          ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '',
            logisticsStatus: null,
            logisticsCompanyCode: '',
            logisticsCompanyName: '',
            receiverAddressId: '2',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '南山区',
            receiverArea: '',
            receiverAddress: '前海路333号阳光玫瑰园',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '平均线',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: null,
            arrivalTime: null,
          },
          paymentVO: {
            payStatus: 1,
            amount: '458600',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: [{
            primary: true,
            type: 3,
            name: '确认收货',
          }, ],
          labelVOs: null,
          invoiceVO: null,
          couponAmount: null,
          autoCancelTime: null,
          orderStatusName: '待收货',
          orderSatusRemark: null,
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
        {
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '130862219672031307',
          orderId: '130862224737571072',
          orderNo: '130862219672031307',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 80,
          orderSubStatus: null,
          totalAmount: '298000',
          goodsAmount: '298000',
          goodsAmountApp: '298000',
          paymentAmount: '263200',
          freightFee: '0',
          packageFee: '0',
          discountAmount: '34800',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1587049485899',
          orderItemVOs: [{
            id: '130862224922120960',
            orderNo: null,
            spuId: '0',
            skuId: '135676631',
            roomId: null,
            goodsMainType: 0,
            goodsViceType: 0,
            goodsName: '大连明珠樱桃',
            goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/38dbb6fd5266d016f2f6713d9f2bd40735fa353c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            originPrice: '40000',
            actualPrice: '29800',
            specifications: [{
                specTitle: '重量',
                specValue: '5kg'
              },
              {
                specTitle: '类型',
                specValue: 'S'
              },
            ],
            buyQuantity: 10,
            itemTotalAmount: '298000',
            itemDiscountAmount: '29800',
            itemPaymentAmount: '268200',
            goodsPaymentPrice: '26820',
            tagPrice: null,
            tagText: null,
            outCode: null,
            labelVOs: null,
            buttonVOs: null,
          }, ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '',
            logisticsStatus: null,
            logisticsCompanyCode: '',
            logisticsCompanyName: '',
            receiverAddressId: '2',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '南山区',
            receiverArea: '',
            receiverAddress: '前海路333号阳光玫瑰园',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '平均线',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: null,
            arrivalTime: null,
          },
          paymentVO: {
            payStatus: 1,
            amount: '263200',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: null,
          labelVOs: null,
          invoiceVO: null,
          couponAmount: null,
          autoCancelTime: null,
          orderStatusName: '已取消',
          orderSatusRemark: null,
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
        {
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '130494472895208267',
          orderId: '130494482155052032',
          orderNo: '130494472895208267',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 80,
          orderSubStatus: null,
          totalAmount: '59700',
          goodsAmount: '59700',
          goodsAmountApp: '59700',
          paymentAmount: '24900',
          freightFee: '0',
          packageFee: '0',
          discountAmount: '34800',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1587027566730',
          orderItemVOs: [{
            id: '130494482322824704',
            orderNo: null,
            spuId: '7',
            skuId: '135691633',
            roomId: null,
            goodsMainType: 0,
            goodsViceType: 0,
            goodsName: '大连湾生蚝',
            goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/9825bc315c6034a8fa166248c213495408237607?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto',
            originPrice: '29900',
            actualPrice: '19900',
            specifications: [{
                specTitle: '重量',
                specValue: '5kg'
              },
              {
                specTitle: '类型',
                specValue: '大'
              },
            ],
            buyQuantity: 3,
            itemTotalAmount: '59700',
            itemDiscountAmount: '29800',
            itemPaymentAmount: '29900',
            goodsPaymentPrice: '9966',
            tagPrice: null,
            tagText: null,
            outCode: null,
            labelVOs: null,
            buttonVOs: null,
          }, ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '',
            logisticsStatus: null,
            logisticsCompanyCode: '',
            logisticsCompanyName: '',
            receiverAddressId: '2',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '南山区',
            receiverArea: '',
            receiverAddress: '前海路333号阳光玫瑰园',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '平均线',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: null,
            arrivalTime: null,
          },
          paymentVO: {
            payStatus: 1,
            amount: '24900',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: null,
          labelVOs: null,
          invoiceVO: null,
          couponAmount: null,
          autoCancelTime: null,
          orderStatusName: '已取消',
          orderSatusRemark: null,
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
        {
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '130169571554503755',
          orderId: '130169572291521792',
          orderNo: '130169571554503755',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 50,
          orderSubStatus: null,
          totalAmount: '538000',
          goodsAmount: '538000',
          goodsAmountApp: '538000',
          paymentAmount: '508200',
          freightFee: '0',
          packageFee: '0',
          discountAmount: '29800',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1587008200590',
          orderItemVOs: [{
            id: '130169572425740032',
            orderNo: null,
            spuId: '1',
            skuId: '135691631',
            roomId: null,
            goodsMainType: 0,
            goodsViceType: 0,
            goodsName: '大连俄八樱桃',
            goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            originPrice: '31900',
            actualPrice: '26900',
            specifications: [{
                specTitle: '重量',
                specValue: '橙色'
              },
              {
                specTitle: '类型',
                specValue: 'M'
              },
            ],
            buyQuantity: 20,
            itemTotalAmount: '538000',
            itemDiscountAmount: '29800',
            itemPaymentAmount: '508200',
            goodsPaymentPrice: '25410',
            tagPrice: null,
            tagText: null,
            outCode: null,
            labelVOs: null,
            buttonVOs: [{
              primary: true,
              type: 4,
              name: '',
            }, ],
          }, ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '123',
            logisticsStatus: null,
            logisticsCompanyCode: 'zhongtong',
            logisticsCompanyName: '中通速递',
            receiverAddressId: '2',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '南山区',
            receiverArea: '',
            receiverAddress: '前海路333号阳光玫瑰园',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '平均线',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: '1587008529453',
            arrivalTime: '1587008623995',
          },
          paymentVO: {
            payStatus: 1,
            amount: '508200',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: [{
              primary: false,
              type: 4,
              name: '申请售后'
            },
            {
              primary: true,
              type: 6,
              name: '评价'
            },
          ],
          labelVOs: null,
          invoiceVO: {
            buyerName: '腾讯计算机有限公司', //个人或公司名称
            buyerTaxNo: '9144 9808 0909 0293 XG', //税号
            buyerPhone: '18600008888', //手机
            email: '73900484@qq.com', //邮箱
            titleType: 2, //发票抬头 1-个人 2-公司
            ontentType: 1, //发票内容 1-明细 2类别
            invoiceType: 5, //是否开票 0-不开 5-电子发票
            money: '1.54',
          },
          couponAmount: null,
          autoCancelTime: null,
          orderStatusName: '交易完成',
          orderSatusRemark: null,
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
        {
          saasId: '88888888',
          storeId: '1000',
          storeName: '云Mall大连旗舰店',
          uid: '88888888205468',
          parentOrderNo: '130150835531421259',
          orderId: '130150836385879808',
          orderNo: '130150835531421259',
          orderType: 0,
          orderSubType: 0,
          orderStatus: 50,
          orderSubStatus: null,
          totalAmount: '29800',
          goodsAmount: '29800',
          goodsAmountApp: '29800',
          paymentAmount: '4000',
          freightFee: '0',
          packageFee: '0',
          discountAmount: '25800',
          channelType: 0,
          channelSource: '',
          channelIdentity: '',
          remark: '',
          cancelType: null,
          cancelReasonType: null,
          cancelReason: null,
          rightsType: null,
          createTime: '1587007083842',
          orderItemVOs: [{
            id: '130150836520098048',
            orderNo: null,
            spuId: '0',
            skuId: '135681631',
            roomId: null,
            goodsMainType: 0,
            goodsViceType: 0,
            goodsName: '大连明珠樱桃',
            goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/38dbb6fd5266d016f2f6713d9f2bd40735fa353c?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            originPrice: '40000',
            actualPrice: '29800',
            specifications: [{
                specTitle: '重量',
                specValue: '5kg'
              },
              {
                specTitle: '类型',
                specValue: 'M'
              },
            ],
            buyQuantity: 1,
            itemTotalAmount: '29800',
            itemDiscountAmount: '25800',
            itemPaymentAmount: '4000',
            goodsPaymentPrice: '4000',
            tagPrice: null,
            tagText: null,
            outCode: null,
            labelVOs: null,
            buttonVOs: null,
          }, ],
          logisticsVO: {
            logisticsType: 1,
            logisticsNo: '123',
            logisticsStatus: null,
            logisticsCompanyCode: 'yuantong',
            logisticsCompanyName: '圆通速递',
            receiverAddressId: '2',
            provinceCode: '440000',
            cityCode: '440300',
            countryCode: '440306',
            receiverProvince: '广东省',
            receiverCity: '大连市',
            receiverCountry: '南山区',
            receiverArea: '',
            receiverAddress: '前海路333号阳光玫瑰园',
            receiverPostCode: '',
            receiverLongitude: '113.829127',
            receiverLatitude: '22.713649',
            receiverIdentity: '88888888205468',
            receiverPhone: '17612345678',
            receiverName: '平均线',
            expectArrivalTime: null,
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            sendTime: '1587008539953',
            arrivalTime: '1588291200508',
          },
          paymentVO: {
            payStatus: 1,
            amount: '4000',
            currency: null,
            payType: null,
            payWay: null,
            payWayName: null,
            interactId: null,
            traceNo: null,
            channelTrxNo: null,
            period: null,
            payTime: null,
            paySuccessTime: null,
          },
          buttonVOs: [{
            primary: true,
            type: 6,
            name: '评价'
          }],
          labelVOs: null,
          invoiceVO: null,
          couponAmount: null,
          autoCancelTime: null,
          orderStatusName: '交易完成',
          orderSatusRemark: null,
          logisticsLogVO: null,
          invoiceStatus: null,
          invoiceDesc: null,
          invoiceUrl: null,
        },
      ],
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 113,
    success: true,
  };
  const {
    pageNum,
    pageSize,
    orderStatus
  } = params.parameter;
  // 实现筛选
  if (orderStatus > -1) {
    resp.data.orders = resp.data.orders.filter(
      (order) => order.orderStatus === orderStatus,
    );
  }
  // 实现分页
  resp.data.pageNum = pageNum;
  resp.data.pageSize = pageSize;
  resp.data.orders = resp.data.orders.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize,
  );
  return resp;
}

export function genOrdersCount() {
  const resp = {
    data: [{
        tabType: 5,
        orderNum: 1
      },
      {
        tabType: 10,
        orderNum: 1
      },
      {
        tabType: 40,
        orderNum: 1
      },
      {
        tabType: 50,
        orderNum: 2
      },
    ],
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 41,
    success: true,
  };
  return resp;
}