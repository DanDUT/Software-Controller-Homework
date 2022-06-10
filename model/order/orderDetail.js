import {
  mockIp,
  mockReqId
} from '../../utils/mock';

const orderResps = [{
    data: {
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
      remark: '无',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1600350829288',
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
            specValue: '尊享礼盒装'
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
        buttonVOs: [{
          primary: false
        }],
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
        primary: true,
        type: 1,
        name: '付款'
      }],
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '0',
      autoCancelTime: '1823652629288',
      orderStatusName: '待付款',
      orderSatusRemark: '需支付￥0.20',
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 89,
    success: true,
  },
  {
    data: {
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
      discountAmount: '34800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '麻烦给个配饰',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,

      createTime: '1587140043976',

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
              specValue: '5KG',
            },
            {
              specTitle: '类型',
              specValue: '中果',
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
              specValue: '2.5kg'
            },
            {
              specTitle: '类型',
              specValue: '大'
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
              specValue: '5kg',
            },
            {
              specTitle: '类型',
              specValue: '小果',
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
        receiverCity: '广州市',
        receiverCountry: '海珠区',
        receiverArea: '',
        receiverAddress: '新港中路397号',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: '张三',
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
        currency: 'CNY',
        payType: 0,
        payWay: null,
        payWayName: null,
        interactId: '4923587',
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: '1600162877000',
        paySuccessTime: '1600162877538',
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
      trajectoryVos: [{
          title: '已下单',
          icon: 'https://cdn-we-retail.ym.tencent.com/web/trajectoryIcons/ordered.svg',
          code: '200002',
          nodes: [{
            status: '订单已经支付成功，支付方式为：微信支付',
            timestamp: '1600162877506',
            remark: null,
          }, ],
          isShow: true,
        },
        {
          title: '',
          icon: null,
          code: '200001',
          nodes: [{
            status: '订单已提交',
            timestamp: '1600162856204',
            remark: null,
          }, ],
          isShow: true,
        },
      ],

      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '待发货',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 79,
    success: true,
  },
  {
    data: {
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
      discountAmount: '36800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '我是买一送一的，记得送',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1587130572345',
      orderItemVOs: [{
          id: '132222629825259776',
          orderNo: null,
          spuId: '5',
          skuId: '135691625',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '大连美早樱桃',
          goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/09fa513d269759eeb97ffa3eb2fb43166d22df1c?x-bce-process=image/resize,m_lfit,w_220,limit_1/format,f_auto',
          originPrice: '15900',
          actualPrice: '8900',
          specifications: [{
              specTitle: '重量',
              specValue: '5kg',
            },
            {
              specTitle: '类型',
              specValue: '小果',
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
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
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
              specTitle: '颜色',
              specValue: '米色荷叶边',
            },
            {
              specTitle: '尺码',
              specValue: 'S',
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
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
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
          goodsPictureUrl: 'https://bkimg.cdn.bcebos.com/pic/9e3df8dcd100baa1dea1d5124d10b912c9fc2e8d?x-bce-process=image/resize,m_lfit,w_235,h_235,limit_1/format,f_auto',
          originPrice: '16900',
          actualPrice: '9900',
          specifications: [{
              specTitle: '重量',
              specValue: '5KG',
            },
            {
              specTitle: '类型',
              specValue: '大果',
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
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '111112',
        logisticsStatus: null,
        logisticsCompanyCode: 'yunda',
        logisticsCompanyName: '韵达快递',

        receiverAddressId: '8',
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
        receiverIdentity: '700000011070005',
        receiverPhone: '17612345678',
        receiverName: '平均线',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: '1599795293089',
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '458600',
        currency: 'CNY',
        payType: 0,
        payWay: null,
        payWayName: null,
        interactId: '66869',
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: '1594869391000',
        paySuccessTime: '1594869391287',
      },
      buttonVOs: [{
        primary: true,
        type: 3,
        name: '确认收货',
      }, ],
      labelVOs: null,
      trajectoryVos: [{
          title: '已发货',
          icon: 'deliver',
          code: '200003',
          nodes: [{
            status: '商家已发货，物流承运商：韵达快递',
            timestamp: '1599795293089',
            remark: null,
          }, ],
          isShow: true,
        },
        {
          title: '已下单',
          icon: 'https://cdn-we-retail.ym.tencent.com/web/trajectoryIcons/ordered.svg',
          code: '200002',
          nodes: [{
            status: '订单已经支付成功，支付方式为：微信支付',
            timestamp: '1594869391220',
            remark: null,
          }, ],
          isShow: true,
        },
        {
          title: '',
          icon: null,
          code: '200001',
          nodes: [{
            status: '订单已提交',
            timestamp: '1594869381185',
            remark: null,
          }, ],
          isShow: true,
        },
      ],

      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '待收货',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 1,
      invoiceDesc: '已开发票',
      invoiceUrl: null,
      invoiceVO: {
        buyerName: '公司名称XXXX', //个人或公司名称
        buyerTaxNo: 'R5647U7', //税号
        buyerPhone: '13534343434', //手机
        email: '123@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 2, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        isInvoice: '已开票',
        money: 10000,
      },
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 74,
    success: true,
  },
  {
    data: {
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
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '超时未支付',
      rightsType: 0,
      createTime: '1587049485895',
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
            specTitle: '颜色',
            specValue: '米色荷叶边'
          },
          {
            specTitle: '尺码',
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
      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '已取消(未支付)',
      orderSatusRemark: '超时未支付',
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 70,
    success: true,
  },
  {
    data: {
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
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '超时未支付',
      rightsType: 0,
      createTime: '1587027566726',
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
            specTitle: '颜色',
            specValue: '奶黄色'
          },
          {
            specTitle: '类型',
            specValue: '三件套'
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
      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '已取消(未支付)',
      orderSatusRemark: '超时未支付',
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 81,
    success: true,
  },
  {
    data: {
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
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 10,
      createTime: '1587008200587',
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
            specTitle: '颜色',
            specValue: '橙色'
          },
          {
            specTitle: '尺码',
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
        buttonVOs: null,
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
        sendTime: '1587008529453',
        arrivalTime: '1587008623995',
      },
      paymentVO: {
        payStatus: 2,
        amount: '508200',
        currency: 'CNY',
        payType: 0,
        payWay: 0,
        payWayName: '微信支付',
        interactId: '121212',
        traceNo: '121212',
        channelTrxNo: '121212',
        period: null,
        payTime: '2020-03-23 00:00:00',
        paySuccessTime: '2020-04-16 11:36:41',
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
      couponAmount: '0',
      autoCancelTime: null,
      orderStatusName: '交易完成',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 91,
    success: true,
  },
  {
    data: {
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
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1587007083839',
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
            specTitle: '颜色',
            specValue: '米色荷叶边'
          },
          {
            specTitle: '尺码',
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
        sendTime: '1587008539953',
        arrivalTime: '1588291200508',
      },
      paymentVO: {
        payStatus: 2,
        amount: '4000',
        currency: 'RNB',
        payType: 0,
        payWay: 0,
        payWayName: '微信支付',
        interactId: '121212',
        traceNo: '121212',
        channelTrxNo: '121212',
        period: null,
        payTime: '2020-03-23 00:00:00',
        paySuccessTime: '2020-04-16 11:18:09',
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
      invoiceVO: null,
      couponAmount: '0',
      autoCancelTime: null,
      orderStatusName: '交易完成',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 95,
    success: true,
  },
];

export function genOrderDetail(params) {
  const {
    parameter
  } = params;
  const resp = orderResps.find((r) => r.data.orderNo === parameter);
  return resp;
}

export function genBusinessTime() {
  const resp = {
    data: {
      businessTime: ['周一,周二,周三,周四,周五:00:20:00-08:00:00'],
      telphone: '18565372257',
      saasId: '88888888',
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 3,
    success: true,
  };
  return resp;
}