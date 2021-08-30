 const contactores = [
    
    // {
       
    //     codigo:'MOL0034',
    //     opcion1:1,
    //     referencia:'DILM17(10)',
    //     voltaje:'24VAC', 
    //     opcion2:2,
    //     codigoAlter2:'MOL0035', 
    //     referenciaAlter2:'DILM17(10)',
    //     voltajeAlter2:'110VAC', 
    //     codBobina2:'MOL0150',
    //     refeBobina2:'XSP24',
    //  },
        
    //   {
        
    //     codigo:'MOL0035',
    //     opcion1:1,
    //     referencia:'DILM17(10)',
    //     voltaje:'110VAC', 
    //     opcion2:2,
    //     codigo:'MOL0034', 
    //     referenciaAlter:'DILM17(10)',
    //     voltajeAlter:'24VAC', 
    //     codBobina:'MOL0151',
    //     refeBobina:'XSP110'
        
    // },

 
 
//****************************** */   LOVATO  //**************************************** */

 
//******************************* */ ABRE  BF0910 **************************************************************
 
 {
     codigo:'LOV0001', 
     referencia:'BF0910', 
     voltaje:'24VAC', 
     bobina: 'LOV0601', 
     refeBobina:'BFX91AX-24VAC', 
     alternativa1:'*LOV0002 *LOV0003 *LOV0004', 
     referencia1:'BF0910A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},
{
     codigo:'LOV0002', 
     referencia:'BF0910', 
     voltaje:'110VAC', 
     bobina: 'LOV0602', 
     refeBobina:'BFX91AX-110VAC', 
     alternativa1:'*LOV0001 *LOV0003 *LOV0004', 
     referencia1:'BF0910A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
     codigo:'LOV0003', 
     referencia:'BF0910', 
     voltaje:'220VAC', 
     bobina: 'LOV0603', 
     refeBobina:'BFX91AX-220VAC', 
     alternativa1:'*LOV0001 *LOV0003 *LOV0004', 
     referencia1:'BF0910A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
     codigo:'LOV0004', 
     referencia:'BF0910A', 
     voltaje:'440VAC', 
     bobina: 'LOV0604', 
     refeBobina:'BFX91AX-440VAC', 
     alternativa1:'*LOV0001 *LOV0002 *LOV0003', 
     referencia1:'BF0910A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

//******************************* */ CIERRA BF0910 **************************************************************



//******************************* */ ABRE BF1210 **************************************************************

{
     codigo:'LOV0009', 
     referencia:'BF1210A', 
     voltaje:'24VAC', 
     bobina: 'LOV0601', 
     refeBobina:'BFX91AX-24VAC', 
     alternativa1:'*LOV0010 *LOV0011 *LOV0012', 
     referencia1:'BF1210A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},
{
     codigo:'LOV0010', 
     referencia:'BF1210A', 
     voltaje:'110VAC', 
     bobina: 'LOV0602', 
     refeBobina:'BFX91AX-110VAC', 
     alternativa1:'*LOV0009 *LOV0011 *LOV0012', 
     referencia1:'BF1210A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
     
},

{
    codigo:'LOV0011', 
     referencia:'BF1210A', 
     voltaje:'220VAC', 
     bobina: 'LOV0603', 
     refeBobina:'BFX91AX-220VAC', 
     alternativa1:'*LOV0009 *LOV0010 *LOV0012', 
     referencia1:'BF1210A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
    codigo:'LOV0012', 
     referencia:'BF1210A', 
     voltaje:'440VAC', 
     bobina: 'LOV0604', 
     refeBobina:'BFX91AX-440VAC', 
     alternativa1:'*LOV0009 *LOV0010 *LOV0011', 
     referencia1:'BF1210A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

//******************************* */ CIERRA BF1210 **************************************************************
 
 //******************************* */ ABRE BF1810 **************************************************************


{
     codigo:'LOV0557', 
     referencia:'BF1810A', 
     voltaje:'24VAC', 
     bobina: 'LOV0601', 
     refeBobina:'BFX91AX-24VAC', 
     alternativa1:'*LOV0558 *LOV0559 *LOV0060', 
     referencia1:'BF1810A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},
{
     codigo:'LOV0558', 
     referencia:'BF1810A', 
     voltaje:'110VAC', 
     bobina: 'LOV0602', 
     refeBobina:'BFX91AX-110VAC', 
     alternativa1:'*LOV0557 *LOV0559 *LOV0060', 
     referencia1:'BF1810A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
     codigo:'LOV0559', 
     referencia:'BF1810A', 
     voltaje:'2200VAC', 
     bobina: 'LOV0603', 
     refeBobina:'BFX91AX-220VAC', 
     alternativa1:'*LOV0557 *LOV0558 *LOV0560', 
     referencia1:'BF1810A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
    codigo:'LOV0560', 
     referencia:'BF1810A', 
     voltaje:'440VAC', 
     bobina: 'LOV0604', 
     refeBobina:'BFX91AX-440VAC', 
     alternativa1:'*LOV0557 *LOV0558 *LOV0559', 
     referencia1:'BF1810A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

//******************************* */ CIERRA BF1810 **************************************************************

//******************************* */ ABRE BF2510 **************************************************************

{
     codigo:'LOV0565', 
     referencia:'BF2510A', 
     voltaje:'24VAC', 
     bobina: 'LOV0601', 
     refeBobina:'BFX91AX-24VAC', 
     alternativa1:'*LOV0566 *LOV0567 *LOV0068', 
     referencia1:'BF2510A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},
{
     codigo:'LOV0566', 
     referencia:'BF2510A', 
     voltaje:'110VAC', 
     bobina: 'LOV0602', 
     refeBobina:'BFX91AX-110VAC', 
     alternativa1:'*LOV0565 *LOV0567 *LOV0568', 
     referencia1:'BF2510A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
     codigo:'LOV0567', 
     referencia:'BF2510A', 
     voltaje:'2200VAC', 
     bobina: 'LOV0603', 
     refeBobina:'BFX91AX-220VAC', 
     alternativa1:'*LOV0565 *LOV0566 *LOV0568', 
     referencia1:'BF2510A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},

{
     codigo:'LOV0568', 
     referencia:'BF2510A', 
     voltaje:'440VAC', 
     bobina: 'LOV0604', 
     refeBobina:'BFX91AX-440VAC', 
     alternativa1:'*LOV0557 *LOV0558 *LOV0559', 
     referencia1:'BF2510A',
     alternativa2:'LOV0001 al LOV0568', 
     referencia2:'*BF0910A *BF1210A *BF1810A *BF2510A',
     
},
//******************************* */ CIERRA BF2510 **************************************************************

//******************************* */ ABRE BF3200 ****************************************************************

{
     codigo:'LOV0033', 
     referencia:'BF3200A', 
     voltaje:'24VAC', 
     bobina: 'LOV0605', 
     refeBobina:'BFX92AX-24VAC', 
     alternativa1:'*LOV0034 *LOV0035 *LOV0036', 
     referencia1:'BF3200A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',
     
},
{
     codigo:'LOV0034', 
     referencia:'BF3200A', 
     voltaje:'110VAC', 
     bobina: 'LOV0606', 
     refeBobina:'BFX92AX-110VAC', 
     alternativa1:'*LOV0033 *LOV0035 *LOV0036', 
     referencia1:'BF3200A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A', 
},

{
     codigo:'LOV0035', 
     referencia:'BF3200A', 
     voltaje:'2200VAC', 
     bobina: 'LOV0607', 
     refeBobina:'BFX92AX-220VAC', 
     alternativa1:'*LOV0033 *LOV0034 *LOV0036', 
     referencia1:'BF3200A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',   
},

{
     codigo:'LOV0036', 
     referencia:'BF3200A', 
     voltaje:'4400VAC', 
     bobina: 'LOV0608', 
     refeBobina:'BFX92AX-440VAC', 
     alternativa1:'*LOV0033 *LOV0034 *LOV0035', 
     referencia1:'BF3200A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',
     
     
},
//******************************* */ CIERRA BF3200 **************************************************************

//******************************* */ ABRE BF3800 ****************************************************************

{
     codigo:'LOV0569', 
     referencia:'BF3800A', 
     voltaje:'24VAC', 
     bobina: 'LOV0605', 
     refeBobina:'BFX92AX-24VAC', 
     alternativa1:'*LOV0570 *LOV0571 *LOV0572', 
     referencia1:'BF3800A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',
     
},
{
     codigo:'LOV0570', 
     referencia:'BF3800A', 
     voltaje:'110VAC', 
     bobina: 'LOV0606', 
     refeBobina:'BFX92AX-110VAC', 
     alternativa1:'*LOV0569 *LOV0571 *LOV0572', 
     referencia1:'BF3800A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',
    
},

{
     codigo:'LOV0571', 
     referencia:'BF3800A', 
     voltaje:'220VAC', 
     bobina: 'LOV0607', 
     refeBobina:'BFX92AX-220VAC', 
     alternativa1:'*LOV0569 *LOV0570 *LOV0572', 
     referencia1:'BF3800A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',
},

{
     codigo:'LOV0572', 
     referencia:'BF3800A', 
     voltaje:'4400VAC', 
     bobina: 'LOV0608', 
     refeBobina:'BFX92AX-440VAC', 
     alternativa1:'*LOV0569 *LOV0570 *LOV0572', 
     referencia1:'BF3800A',
     alternativa2:'LOV0033 al LOV0036 LOV0569 al LOV0572', 
     referencia2:'*BF3200A *BF3800A',
     
},
//******************************* */ CIERRA BF3800 **************************************************************


//******************************* */ ABRE BF5000 ****************************************************************

{
     codigo:'LOV0977', 
     referencia:'BF5000A', 
     voltaje:'24VAC', 
     bobina: 'LOV0992', 
     refeBobina:'BFX93AX-24VAC', 
     alternativa1:'*LOV0978 *LOV0979 *LOV0980', 
     referencia1:'BF5000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},
{
     codigo:'LOV0978', 
     referencia:'BF5000A', 
     voltaje:'110VAC', 
     bobina: 'LOV0993', 
     refeBobina:'BFX93AX-110VAC', 
     alternativa1:'*LOV0977 *LOV0979 *LOV0980', 
     referencia1:'BF5000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},

{
     codigo:'LOV0979', 
     referencia:'BF5000A', 
     voltaje:'220VAC', 
     bobina: 'LOV0994', 
     refeBobina:'BFX93AX-220VAC', 
     alternativa1:'*LOV0977 *LOV0978 *LOV0980', 
     referencia1:'BF5000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
},

{
     codigo:'LOV0980', 
     referencia:'BF5000A', 
     voltaje:'440VAC', 
     bobina: 'LOV0995', 
     refeBobina:'BFX93AX-440VAC', 
     alternativa1:'*LOV0977 *LOV0978 *LOV0979', 
     referencia1:'BF5000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},
//******************************* */ CIERRA BF50000 **************************************************************

//******************************* */ ABRE BF6500 ****************************************************************

{
     codigo:'LOV0981', 
     referencia:'BF6500A', 
     voltaje:'24VAC', 
     bobina: 'LOV0992', 
     refeBobina:'BFX93AX-24VAC', 
     alternativa1:'*LOV0982 *LOV0983 *LOV0984', 
     referencia1:'BF6500A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},
{
     codigo:'LOV0982', 
     referencia:'BF6500A', 
     voltaje:'110VAC', 
     bobina: 'LOV0993', 
     refeBobina:'BFX93AX-110VAC', 
     alternativa1:'*LOV0981 *LOV0983 *LOV0984', 
     referencia1:'BF6500A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},

{
     codigo:'LOV0983', 
     referencia:'BF6500A', 
     voltaje:'220VAC', 
     bobina: 'LOV0994', 
     refeBobina:'BFX93AX-220VAC', 
     alternativa1:'*LOV0981 *LOV0982 *LOV0984', 
     referencia1:'BF6500A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
},

{
     codigo:'LOV0984', 
     referencia:'BF6500A', 
     voltaje:'440VAC', 
     bobina: 'LOV0995', 
     refeBobina:'BFX93AX-440VAC', 
     alternativa1:'*LOV0981 *LOV0982 *LOV0983', 
     referencia1:'BF6500A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},
//******************************* */ CIERRA BF6500 **************************************************************

//******************************* */ ABRE BF8000 ****************************************************************

{
     codigo:'LOV0985', 
     referencia:'BF8000A', 
     voltaje:'24VAC', 
     bobina: 'LOV0992', 
     refeBobina:'BFX93AX-24VAC', 
     alternativa1:'*LOV0986 *LOV0987 *LOV0988', 
     referencia1:'BF8000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},
{
     codigo:'LOV0986', 
     referencia:'BF8000A', 
     voltaje:'110VAC', 
     bobina: 'LOV0993', 
     refeBobina:'BFX93AX-110VAC', 
     alternativa1:'*LOV0985 *LOV0987 *LOV0988', 
     referencia1:'BF8000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},

{
     codigo:'LOV0987', 
     referencia:'BF8000A', 
     voltaje:'220VAC', 
     bobina: 'LOV0994', 
     refeBobina:'BFX93AX-220VAC', 
     alternativa1:'*LOV0985 *LOV0986 *LOV0988', 
     referencia1:'BF8000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
},

{
     codigo:'LOV0988', 
     referencia:'BF8000A', 
     voltaje:'440VAC', 
     bobina: 'LOV0995', 
     refeBobina:'BFX93AX-440VAC', 
     alternativa1:'*LOV0985 *LOV0986 *LOV0987', 
     referencia1:'BF8000A',
     alternativa2:'LOV0977  al LOV0988', 
     referencia2:'*BF5000A *BF6500A *BF8000A',
     
},
//******************************* */ CIERRA BF8000 **************************************************************

//******************************* */ ABRE BF9500 ****************************************************************

{
     codigo:'LOV1213', 
     referencia:'BF9500A', 
     voltaje:'24VAC', 
     bobina: '-------------', 
     refeBobina:'BFX94AX-24VAC', 
     alternativa1:'*LOV1214 *LOV1215 *LOV1216', 
     referencia1:'BF9500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},
{
     codigo:'LOV1214', 
     referencia:'BF9500A', 
     voltaje:'110VAC', 
     bobina: 'LOV1233', 
     refeBobina:'BFX94AX-110VAC', 
     alternativa1:'*LOV1213 *LOV1215 *LOV1216', 
     referencia1:'BF9500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},

{
     codigo:'LOV1215', 
     referencia:'BF9500A', 
     voltaje:'220VAC', 
     bobina: 'LOV1234', 
     refeBobina:'BFX94AX-220VAC', 
     alternativa1:'*LOV1213 *LOV1214 *LOV1216', 
     referencia1:'BF9500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
},

{
     codigo:'LOV1216', 
     referencia:'BF8000A', 
     voltaje:'440VAC', 
     bobina: 'LOV1235', 
     refeBobina:'BFX94AX-440VAC', 
     alternativa1:'*LOV1214 *LOV01215 *LOV1217', 
     referencia1:'BF9500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},
//******************************* */ CIERRA BF95000 **************************************************************

//******************************* */ ABRE BF11500 ****************************************************************

{
     codigo:'LOV1217', 
     referencia:'BF11500A', 
     voltaje:'24VAC', 
     bobina: '-------------', 
     refeBobina:'BFX94AX-24VAC', 
     alternativa1:'*LOV1218 *LOV1219 *LOV1220', 
     referencia1:'BF11500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},
{
     codigo:'LOV1218', 
     referencia:'BF11500A', 
     voltaje:'110VAC', 
     bobina: 'LOV1233', 
     refeBobina:'BFX94AX-110VAC', 
     alternativa1:'*LOV1217 *LOV1219 *LOV1220', 
     referencia1:'BF11500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},

{
     codigo:'LOV1219', 
     referencia:'BF11500A', 
     voltaje:'220VAC', 
     bobina: 'LOV1234', 
     refeBobina:'BFX94AX-220VAC', 
     alternativa1:'*LOV1217 *LOV1218 *LOV1220', 
     referencia1:'BF11500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
},

{
     codigo:'LOV1220', 
     referencia:'BF11500A', 
     voltaje:'440VAC', 
     bobina: 'LOV1235', 
     refeBobina:'BFX94AX-440VAC', 
     alternativa1:'*LOV1217 *LOV1218 *LOV1219', 
     referencia1:'BF11500A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},
//******************************* */ CIERRA BF11500 **************************************************************

//******************************* */ ABRE BF15000 ****************************************************************

{
     codigo:'LOV1221', 
     referencia:'BF15000A', 
     voltaje:'24VAC', 
     bobina: '-------------', 
     refeBobina:'BFX94AX-24VAC', 
     alternativa1:'*LOV1222 *LOV1223 *LOV1224', 
     referencia1:'BF15000A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},
{
     codigo:'LOV1222', 
     referencia:'BF15000A', 
     voltaje:'110VAC', 
     bobina: 'LOV1233', 
     refeBobina:'BFX94AX-110VAC', 
     alternativa1:'*LOV1221 *LOV1223 *LOV1224', 
     referencia1:'BF15000A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},

{
     codigo:'LOV1223', 
     referencia:'BF15000A', 
     voltaje:'220VAC', 
     bobina: 'LOV1234', 
     refeBobina:'BFX94AX-220VAC', 
     alternativa1:'*LOV1221 *LOV1222 *LOV1224', 
     referencia1:'BF15000A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
},

{
     codigo:'LOV1224', 
     referencia:'BF15000A', 
     voltaje:'440VAC', 
     bobina: 'LOV1235', 
     refeBobina:'BFX94AX-440VAC', 
     alternativa1:'*LOV1221 *LOV01222 *LOV1223', 
     referencia1:'BF15000A',
     alternativa2:'LOV1213  al LOV1224', 
     referencia2:'*BF9500A *BF11500A *BF15000A',
     
},
//******************************* */ CIERRA BF15000 **************************************************************

]
