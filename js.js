createAdmin();
function chuyentien(num) 
{

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';
}
function taoID()
{
    var id='';
    id = String(new Date().getTime());
    return id;
}
function taodoituongSP(id ,loai, ten, hang, hinh,gia )
{
    this.id = id;
    this.loai = loai;
    this.ten = ten;
    this.hang = hang;
    this.hinh = hinh;
    this.gia = gia;
    
}
function addSP()
{
    var ten = document.getElementById('txtten').value;
    console.log(ten);
    
    var hang = document.getElementById('txthang').value;
    console.log(hang);

    var tien = document.getElementById('txttien').value;
    console.log(tien);
    

    var loai = document.getElementById('chonloai').value;
    console.log(loai);

    var tmp = document.getElementById('txthinh').value;
    var hinh = tmp.split("\\");
    console.log(hinh[2]);
    var filehinh = "img/sanpham/"+hinh[2];
    var id = taoID();

    var sanpham = new taodoituongSP(id,loai,ten,hang,filehinh,tien);
    var arrSP = JSON.parse(localStorage.getItem('sanpham'));
    arrSP.push(sanpham);
    localStorage.setItem('sanpham',JSON.stringify(arrSP));
    document.getElementById('txtten').value='';
    document.getElementById('txthang').value='';
    document.getElementById('txttien').value='';
    document.getElementById('chonloai').value='';
    document.getElementById('txthinh').value = '';
    alert('thêm sản phẩm mới thành công');
}
function taoSP()
{
    
    if(localStorage.getItem("sanpham")==null)
    {
        var arrSP =
        [
            {id: 31 , loai: "Tablet" ,hang: "Huawei", ten: "Huawei Mediapad M5 lite gray",hinh: "img/sanpham/huawei-mediapad-m5-lite-gray-400x400.jpg", gia: 7990000},
            {id: 32 , loai: "Tablet" ,hang: "Huawei", ten: "Huawei Mediapad T3 10",hinh: "img/sanpham/huawei-mediapad-t3-10-1-33397-thumb-400x400.jpg", gia: 4000000},
            {id: 33 , loai: "Tablet" ,hang: "Samsung", ten: "Samsung Galaxy Tab A 10.1 T515 2019 gold",hinh: "img/sanpham/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg", gia: 7990000},
            {id: 34 , loai: "Tablet" ,hang: "Samsung", ten: "Samsung Galaxy Tab S6",hinh: "img/sanpham/samsung-galaxy-tab-s6-600x600-1-400x400.jpg", gia: 7990000},
            {id: 35 , loai: "Tablet" ,hang: "Samsung", ten: "Samsung Galaxy Tab S7",hinh: "img/sanpham/samsung-galaxy-tab-s7-gold-new-400x400.jpg", gia: 7990000},
            {id: 36 , loai: "Tablet" ,hang: "Apple", ten: "Ipad 10.2 inch wifi 32gb 2019 gold",hinh: "img/sanpham/ipad-10-2-inch-wifi-32gb-2019-gold-400x400.jpg", gia: 7990000},
            {id: 37 , loai: "Tablet" ,hang: "Apple", ten: "Ipad Air 4 wifi cellular 256gb 2020",hinh: "img/sanpham/ipad-air-4-wifi-cellular-256gb-2020-183220-063249-400x400.jpg", gia: 7990000},
            {id: 38 , loai: "Tablet" ,hang: "Apple", ten: "ipad pro 12.9 inch wifi cellular 128gb 2020",hinh: "img/sanpham/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-xam-600x600-400x400.jpg", gia: 7990000},
            {id: 39 , loai: "Tablet" ,hang: "Lenovo", ten: "lenovo tab m8",hinh: "img/sanpham/lenovo-tab-m8-tb-8505x400x400-400x400.jpg", gia: 7990000},
            {id: 40 , loai: "Tablet" ,hang: "Masstel", ten: "masstel tab 10 ultra",hinh: "img/sanpham/masstel-tab-10-ultra-203520-103530-400x400.jpg", gia: 7990000},
            
            {id: 1 , loai: "Phone" ,hang: "Oppo", ten: "OPPO F9 chính hãng 64GB",hinh: "img/sanpham/6.jpg", gia: 7990000},
            {id: 2 , loai: "Phone" ,hang: "Oppo", ten: "OPPO A9 2020 8GB/128GB Xanh",hinh: "img/sanpham/4.jpg", gia: 4000000},
            {id: 3 , loai: "Phone" ,hang: "Sumsung", ten: "Samsung Galaxy A50 64GB",hinh: "img/sanpham/samsung-galaxy-a50-055920-045942-600x600.jpg", gia: 7990000},
            {id: 4 , loai: "Phone" ,hang: "Samsung", ten: "Samsung Galaxy A11 (A115F) Màu Trắng",hinh: "img/sanpham/10045480-dien-thoai-samsung-sm-a315gd-s-128gb-a31-xanh-1.jpg", gia: 7990000},
            {id: 5 , loai: "Phone" ,hang: "Vivo", ten: "Vivo Y91C 2GB/32GB",hinh: "img/sanpham/GS.000978_FEATURE_42582.jpg", gia: 7990000},
            {id: 6 , loai: "Phone" ,hang: "Vivo", ten: "Vivo Y11 ",hinh: "img/sanpham/vivo-y11_1_.png", gia: 2490000},
            {id: 7 , loai: "Phone" ,hang: "Vsmart", ten: "Vsmart Bee",hinh: "img/sanpham/vsmart-bee-blue-400x460.png", gia: 1200000},
            {id: 8 , loai: "Phone" ,hang: "Vsmart", ten: "Vsmart Joy 4",hinh: "img/sanpham/vsmart-joy-4_2_.png", gia: 3290000},
            {id: 9 , loai: "Phone" ,hang: "Iphone", ten: "iPhone 11 Pro 64GB",hinh: "img/sanpham/6782317e4a575bc6f94501a997191d38.png", gia: 29990000},

            {id: 10 , loai: "Laptop" ,hang: "Acer", ten: "Acer Aspire 3 A315 54K 37B0 i3 8130U",hinh: "img/sanpham/acer-aspire-3-a315-nx-heesv-00d-221251-1-600x600.jpg", gia: 9990000},
            {id: 11 , loai: "Laptop" ,hang: "Acer", ten: "Laptop Acer Nitro Gaming AN515-55-77P9",hinh: "img/sanpham/637249620078409073_acer-nitro-an515-55-den-1.png", gia: 27490000},
            {id: 12 , loai: "Laptop" ,hang: "Asus", ten: "Asus Zenbook Q407IQ ",hinh: "img/sanpham/asus-q407iq.jpg", gia: 19200000},
            {id: 12 , loai: "Laptop" ,hang: "Asus", ten: "ASUS Vivobook Flip 14",hinh: "img/sanpham/laptop-asus-vivobook-flip-14-tp412fa-i3_2__1.jpg", gia: 4000000},
            {id: 13 , loai: "Laptop" ,hang: "Lenovo", ten: "Laptop Lenovo IdeaPad Gaming 3",hinh: "img/sanpham/ideapad_gaming_3_15imh05_ct1_01.png", gia: 19890000},
            {id: 14 , loai: "Laptop" ,hang: "Lenovo", ten: "Lenovo E530",hinh: "img/sanpham/Laptop-Lenovo-Thinkpad-E520-Core-i5-4-2.png", gia: 3900000},
            {id: 15 , loai: "Laptop" ,hang: "Msi", ten: "Laptop MSI GS70 2PE",hinh: "img/sanpham/15381_.jpg", gia: 29900000},
            {id: 16 , loai: "Laptop" ,hang: "Msi", ten: "Laptop MSI Modern 14 A10M 693VN Dark Gray",hinh: "img/sanpham/unnamed.png", gia: 20990000},
            {id: 17 , loai: "Laptop" ,hang: "Dell", ten: "Laptop Dell Inspiron 7490 N4I5106W",hinh: "img/sanpham/5320_dell_inspiron_n7490_6rkvn1_4.jpg", gia: 26390000},
            {id: 18 , loai: "Laptop" ,hang: "Dell", ten: "Laptop Dell Inspiron 5584 i5 N5I5384W",hinh: "img/sanpham/dell-inspiron-5584-i5-8265u-4gb-1tb-mx130-win10-n-20-1-1-600x600.jpg", gia: 16490000 },

            {id: 19 , loai: "SmartWatch" ,hang: "Sumsung", ten: "Đồng Hồ Thông Minh Samsung Galaxy Watch",hinh: "img/sanpham/samsung-galaxy-watch-active-2-44-mm-day-da-thum-600x600.jpg", gia: 6989000},
            {id: 20 , loai: "SmartWatch" ,hang: "Sumsung", ten: "Samsung Galaxy Watch Active 2",hinh: "img/sanpham/samsung-galaxy-watch-active-2-40-mm--thum-600x600.jpg", gia:  4990000},
            {id: 21 , loai: "SmartWatch" ,hang: "Apple", ten: "Apple Watch S6 LTE 40mm viền nhôm dây cao su",hinh: "img/sanpham/apple-watch-s6-lte-40mm-vien-nhom-day-cao-su-ava-600x600.jpg", gia: 14490000},
            {id: 22 , loai: "SmartWatch" ,hang: "Oppo", ten: "Oppo Watch 46mm dây silicone",hinh: "img/sanpham/oppo-watch-46mm-day-silicone-ava-600x600.jpg", gia: 7490000},
            {id: 23 , loai: "SmartWatch" ,hang: "Huami", ten: "Huami Amazfit GTS vàng",hinh: "img/sanpham/huami-amazfit-gts-vang-ava-600x600.jpg", gia: 2691000},
            {id: 24 , loai: "SmartWatch" ,hang: "Huami", ten: "Huami Amazfit GTR 42mm hồng",hinh: "img/sanpham/huami-amazfit-gtr-42mm-275520-035505-600x600.jpg", gia: 2691000},
            {id: 25 , loai: "SmartWatch" ,hang: "Huawei", ten: "Huawei Watch GT2 Pro 46mm",hinh: "img/sanpham/garmin-venu-sq-day-silicone-104720-084758-600x600.jpg", gia: 8990000},
            {id: 26 , loai: "SmartWatch" ,hang: "Huawei", ten: "Huawei Watch GT2 46mm dây da",hinh: "img/sanpham/huawei-watch-gt2-46mm-day-da-thum-600x600.jpg", gia: 4941000},

            {id: 27 , loai: "accessories" ,hang: "Sony", ten: "Tai nghe Bluetooth Sony SBH24 chính hãng",hinh: "img/sanpham/sbh24.jpg", gia: 630000},
            {id: 28 , loai: "accessories" ,hang: "SamSung", ten: "PIN DỰ PHÒNG CHÍNH HÃNG SAMSUNG 10.000MAH TYPE-C",hinh: "img/sanpham/pin-sac-du-phong-samsung-10000mah-type-c-gia-re-011.jpg", gia: 290000},
            {id: 29 , loai: "accessories" ,hang: "Others", ten: "củ sạc và cáp sạc",hinh: "img/sanpham/sac-bo-note-5-zin-chi-tiet.jpg", gia: 100000},
            {id: 30 , loai: "accessories" ,hang: "Others", ten: "ốp lưng",hinh: "img/sanpham/IMG_4921.jpg", gia: 100000},
        ];
        localStorage.setItem("sanpham",JSON.stringify(arrSP));
    }
}

function hienSP()
{
    var url = document.location.href;
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var s='';
    var tmp = url.split("?");
    console.log(tmp[0]);
    console.log(tmp[1]);
    
    // console.log(loai);
    
    if(tmp[1] == '' || tmp[1]== undefined || tmp[1].search("all")==0 )
    {
        if(tmp[1] == '' || tmp[1] == undefined) tmp[1]= "all&0";
        
        var dem=0;
        var tmp1 = tmp[1].split("&");
        var loai = tmp1[0];
        var vitri = tmp1[1];
        console.log(vitri);
        
        for(var i=vitri;i<arrSP.length;i++)
        {
            s+= '<div class="divsanpham" onclick="hienchitiet('+arrSP[i].id+');">' + 
                        '<a href ="#"><img src="' +arrSP[i].hinh+'"/> '+
                        '<h4 >' +arrSP[i].ten +'</h4>' +
                        '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arrSP[i].gia) + '</p></a></div>';
            dem++;
           if(dem==8) break;
        }
        soTrang = Math.ceil(arrSP.length/8);
        var lienket ='';
        for(var i=1;i<= soTrang;i++)
        {
            vitri = tmp1[1];
            console.log(vitri);
            if(vitri == (i-1)*8 )
            {
                vitri= (i-1)*8;           
                var a = '<a href = "?all&'+ vitri +'">' +i+'</a>'
                lienket += '<div id="sotrang" class="active">' +a+ '</div>'; 
            }
            else 
            {
                vitri= (i-1)*8;           
                var a = '<a href = "?all&'+ vitri +'">' +i+'</a>'
                lienket += '<div id="sotrang" >' +a+ '</div>'; 
            }
        }
        document.getElementById("trang").innerHTML = lienket;
    }
    else
    {
        
        var dem=0;
        var tmp1 = tmp[1].split("&");
        var loai = tmp1[0];
        
        console.log(loai);
        
        var vitri = tmp1[1];
        console.log(vitri);
        //mảng hiện thị theo loại
        var arr = [];
        for (var i=0 ; i<arrSP.length;i++)
        {
            console.log(loai);
            if(loai == arrSP[i].loai) arr.push(arrSP[i]);
            
        }
        console.log(arr.length);
        var lienkethang =''
        var arrtmp = [];
        for(var i = 0;i<arr.length;i++)
        {
            arrtmp.push(arr[i]);
        }
        // arrtmp = arrSP  ;
        
        console.log(arrtmp.length);
         //mảng không có trùng hãng
        for(var i=0;i<arrtmp.length-1;i++)
        {
             var hangtmp1 = arrtmp[i].hang;
            for(var j = i+1;j<arrtmp.length;j++)
            {
                var hangtmp = arrtmp[j].hang;
                if(hangtmp == hangtmp1 ) 
                {
                    xoavt(j,arrtmp);
                    i--;
                }
            }
        }
        console.log(arrtmp.length);
        for(var i=0 ; i<arrtmp.length;i++)
        {              
            lienkethang += '<div class id="hangSP"><a href = "index.html?'+arrtmp[i].loai+'&0-'+arrtmp[i].hang+'">'+arrtmp[i].hang+'</a></div>';
            document.getElementById("boLoc").style.display= "block";
        }
        document.getElementById("boLoc").innerHTML= lienkethang;
        //hiện thị lọc sản phẩm theo giá
        var lienketgia='';
        if(loai != '' || loai != undefined)
        {
            lienketgia='<label>Chọn mức giá:</label>'+
                        '<a href="index.html?'+loai+'&0s=duoi-2-trieu">Dưới 2 triệu</a>'+
                        '<a href="index.html?'+loai+'&0s=2-4-trieu">Từ 2-4 Triệu</a>'+
                        '<a href="index.html?'+loai+'&0s=4-10-trieu">Từ 4 - 10 triệu</a>'+
                        '<a href="index.html?'+loai+'&0s=tren-10-trieu">Trên 10 triệu</a>';
                        
        }
        
        document.getElementById("locGia").style.display= "block";

        
        document.getElementById("locGia").innerHTML= lienketgia;
        //hiện thị sản phẩm theo giá 
        if(vitri.search('s')==1)
        {
            // var vitritmp = vitri.split('s')
            console.log(loai);
            // console.log(vitritmp[0]);
            loctheogia(loai,vitri);
            return;
        }
                
                
         
        
        //hiện thị sản phẩm theo hãng
        for(var i = 0; i< arrSP.length;i++)
        {
            if(vitri.search(arrSP[i].hang)==2)
            {
                console.log(loai);
                console.log(vitri);
                hienthihang(loai,vitri);
                return;
            }
        }
        
        for(var i=vitri;i<arr.length;i++)
        {
            s+= '<div class="divsanpham" onclick="hienchitiet('+arr[i].id+');">' + 
                        '<a href ="#"><img src="' +arr[i].hinh+'"/> '+
                        '<h4 >' +arr[i].ten +'</h4>' +
                        '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arr[i].gia) + '</p></a></div>';
            dem++;
           if(dem==8) break;
        }
        var soTrang = Math.ceil(arr.length/8) ;
        if(soTrang >1)
        {
            var lienket ='';
            for(var i=1;i<= soTrang;i++)
            {
                vitri = tmp1[1];
                console.log(vitri);
                if(vitri == (i-1)*8 )
                {
                    vitri= (i-1)*8;           
                    var a = '<a href = "?'+loai+'&'+ vitri +'">' +i+'</a>'
                    lienket += '<div id="sotrang" class="active">' +a+ '</div>'; 
                }
                else 
                {
                    vitri= (i-1)*8;           
                    var a = '<a href = "?'+loai+'&'+ vitri +'">' +i+'</a>'
                    lienket += '<div id="sotrang">' +a+ '</div>'; 
                }
            }
            document.getElementById("trang").innerHTML = lienket;
        }
        
        
    }
    
   
    document.getElementById("sanpham").innerHTML =s;
}
function hienchitiet(idsp)
{
    document.getElementById("nenCT").style.display = "block";
    // document.getElementById("chitietSP").style.display = "block";
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var s='';
    for(var i = 0 ;i<arrSP.length;i++)
    {
        if(arrSP[i].id == idsp)
        {
            console.log(arrSP[14]);
            document.getElementById("imgct").src =arrSP[i].hinh;
            document.getElementById("ten").innerHTML = arrSP[i].ten;
            document.getElementById("gia").innerHTML = 'Giá: ' + chuyentien(arrSP[i].gia);
            
        }
    }
    console.log(idsp);
    s+='<button id="btnGH" onclick="themvaoGH('+idsp+');">Thêm vào giỏ hàng</button>';
    document.getElementById('hiennutadd').innerHTML=s;

}
function dongchitiet()
	    {
            var d=document.getElementById("nenCT");
             d.style.display="none";
            // document.getElementById("nenCT").style.display=none;
        }
function hienthihang(loai,vitri)
{
    // var url = location.href;
    // console.log(url);
    console.log(vitri);
    var tmp = vitri.split("-");
    console.log(tmp[1]);
    console.log(tmp[0]);
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var arrHang = [];
    for(var i=0 ;i<arrSP.length;i++)
    {
        if(loai == arrSP[i].loai &&  tmp[1] == arrSP[i].hang)
            arrHang.push(arrSP[i]);
    }
    var s='',dem=0;
    for(var i=tmp[0];i<arrHang.length;i++)
        {
            console.log(tmp[0]);
            s+= '<div class="divsanpham" onclick="hienchitiet('+arrHang[i].id+');">' + 
                        '<a href ="#"><img src="' +arrHang[i].hinh+'"/> '+
                        '<h4 >' +arrHang[i].ten +'</h4>' +
                        '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arrSP[i].gia) + '</p></a></div>';
            dem++;
           if(dem==8) break;
        }
        var soTrang = Math.ceil(arrHang.length/8) ;
        var vitritmp = vitri;
        if(soTrang > 1)
        {
            var lienket ='';
            for(var i=1;i<= soTrang;i++)
            {
                vitritmp = vitri;
                console.log(vitri);
                if(vitritmp == (i-1)*8 )
                {
                    vitritmp= (i-1)*8;           
                    var a = '<a href = "?'+loai+'&'+ vitritmp +'-'+tmp[1]+'">' +i+'</a>'
                    lienket += '<div id="sotrang" class="active">' +a+ '</div>'; 
                }
                else 
                {
                    vitritmp= (i-1)*8;           
                    var a = '<a href = "?'+loai+'&'+ vitritmp +'-'+tmp[1]+'">' +i+'</a>'
                    lienket += '<div id="sotrang">' +a+ '</div>'; 
                }

                // console.log(vitri);
                // vitri= (i-1)*8;
                // var a = '<a href = "?'+loai+'&'+ vitri +'-'+tmp[1]+'">' +i+'</a>'
                // lienket += '<div id="sotrang">' +a+ '</div>'; 
            }
            document.getElementById("trang").innerHTML = lienket;
        }
        
    document.getElementById("sanpham").innerHTML =s;
}
function xoavt( vt,mang)
    {
        for(var i=vt+1;i<mang.length;i++)
        {
            mang[i-1]=mang[i];
        }
        mang.length--;
        
                
    }
    function loctheogia(loai, vitri)
    {
        console.log(vitri);
        var tmp = vitri.split('s=');
        console.log(tmp[1]); //giá
        var gia = tmp[1];
        console.log(tmp[0]);
        var arrSP = JSON.parse(localStorage.getItem("sanpham"));
        var arrGia = [];
        for(var i=0 ;i<arrSP.length;i++)
        {
            if( gia.search("duoi")==0)
            {
                console.log(gia);
                if(loai == arrSP[i].loai && arrSP[i].gia <2000000) arrGia.push(arrSP[i]);
            }
            if( gia.search('2')==0)
            {
                console.log(gia);
                if(loai == arrSP[i].loai && arrSP[i].gia >=2000000 && arrSP[i].gia <4000000 ) 
                arrGia.push(arrSP[i]);
            }
            if( gia.search('4')==0)
            {
                if(loai == arrSP[i].loai && arrSP[i].gia <10000000 && arrSP[i].gia >= 4000000) 
                arrGia.push(arrSP[i]);
            }
            if( gia.search("tren")==0)
            {
                if(loai == arrSP[i].loai && arrSP[i].gia >=10000000) arrGia.push(arrSP[i]);
            }
        }
        // console.log(arrSP[1]);
        console.log(arrGia[9]);
        var s='',dem=0;
        for(var i=tmp[0];i<arrGia.length;i++)
            {
                console.log(tmp[0]);
                s+= '<div class="divsanpham" onclick="hienchitiet('+arrGia[i].id+');">' + 
                            '<a href ="#"><img src="' +arrGia[i].hinh+'"/> '+
                            '<h4 >' +arrGia[i].ten +'</h4>' +
                            '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arrGia[i].gia) + '</p></a></div>';
                dem++;
            if(dem==8) break;
            }
            var soTrang = Math.ceil(arrGia.length/8) ;
            var vitritmp = tmp[0];
            if(soTrang > 1)
            {
                var lienket ='';
                for(var i=1;i<= soTrang;i++)
                {
                    vitritmp = tmp[0];
                    console.log(vitritmp);
                    if(vitritmp == (i-1)*8 )
                    {
                        vitritmp= (i-1)*8;           
                        var a = '<a href = "?'+loai+'&'+ vitritmp +'s='+gia+'">' +i+'</a>'
                        lienket += '<div id="sotrang" class="active">' +a+ '</div>'; 
                    }
                    else 
                    {
                        vitritmp= (i-1)*8;           
                        var a = '<a href = "?'+loai+'&'+ vitritmp +'s='+gia+'">' +i+'</a>'
                        lienket += '<div id="sotrang">' +a+ '</div>'; 
                    }
                    // vitri= (i-1)*8;
                    // console.log(vitri);
                    // var a = '<a href = "?'+loai+'&'+ vitri +'s='+gia+'">' +i+'</a>'
                    // lienket += '<div id="sotrang">' +a+ '</div>'; 
                }
                document.getElementById("trang").innerHTML = lienket;
            }
            
        document.getElementById("sanpham").innerHTML =s;
    }
    function tangSL()
    {
        document.getElementById('value').value++;
    }
    function giamSL()
    {
        if(document.getElementById('value').value>1) 
        document.getElementById('value').value--;
    }
    function giamSL(id){
        var cartArray = JSON.parse(localStorage.getItem('giohang'));
        for (var i = 0; i < cartArray.length; i++) {
            if(cartArray[i].id==id){
                if(cartArray[i].soluong>1)
                cartArray[i].soluong--;
            }
        }
        localStorage.setItem('giohang',JSON.stringify(cartArray));
        hienthiGH();
    }
    function tangSL(id){
        var cartArray = JSON.parse(localStorage.getItem('giohang'));
        for (var i = 0; i < cartArray.length; i++) {
            if(cartArray[i].id==id){
                cartArray[i].soluong++;
            }
        }
        localStorage.setItem('giohang',JSON.stringify(cartArray));
        hienthiGH();
    }
    function taodoituongSPgh(id,soluong) //để tạo đối tượng mới khi chưa có trong giỏ hàng
    {
        var sanphamGH = new Object();
        sanphamGH.id = id;
        sanphamGH.soluong=soluong;
        return sanphamGH;
    }
    function layDSsanphamGH()
    {
        var arr= [];
        if(localStorage.getItem('giohang')!=null)
        {
            arr = JSON.parse(localStorage.getItem('giohang'));
        }
        return arr;
    }
    function luu(ds) //lưu vào local danh sách giỏ hàng
    {
        localStorage.setItem('giohang',JSON.stringify(ds));
    }
    function themvaoGH(id)
    {
        var ktID = false;
        var arrGH = layDSsanphamGH();
        for(var i=0 ;i<arrGH.length;i++)
        {
            if(id == arrGH[i].id)
            {
                arrGH[i].soluong++;
                ktID= true;
            }
        }
        if(ktID== false)
        {
            var sanphamGH = taodoituongSPgh(id,1);
            arrGH.push(sanphamGH);
        }
        luu(arrGH);
        dongchitiet();
        customAlert('Thêm vào giỏ hàng thành công','success')
    }
    
    function laySPtheoID(id)
    {
        var sanpham = new Object();
        var arrSP = JSON.parse(localStorage.getItem('sanpham'));
        for(var i=0 ; i<arrSP.length;i++)
        {
            if(arrSP[i].id== id) sanpham = arrSP[i];
        }
        return sanpham;
    }
    function spGHsangHtml(sanphamGH)
    {
        
        var sanpham = laySPtheoID(sanphamGH.id);
        var html =  '   <div id="thongtincart">  '  + 
        '               <div id="hinh" >  '  + 
        '                   <img  src="'+sanpham.hinh+'">  '  + 
        '               </div>  '  + 
        '               <p id="tenSP">'+sanpham.ten+'</p>  '  + 
        '               <div id="gia">'+chuyentien(sanpham.gia)+'</div>  '  + 
        '               <div id="soluong">  '  + 
        '                   <div id="giam" onClick="giamSL('+sanpham.id+');">-</div>  '  + 
        '                   <input type="text" id="value" value="'+sanphamGH.soluong+'" onkeypress="return event.charCode >= 48 && event.charCode <= 57" onchange = "capnhatSL(this.value,'+sanpham.id+')"> '  + 
        '                   <div id="tang" onClick="tangSL('+sanpham.id+');">+</div>  '  + 
        '                     '  + 
        '               </div>  '  + 
        '               <div id="tongtien">'+chuyentien(sanpham.gia * sanphamGH.soluong)+'</div>  '  + 
        '               <div id="hanhdong" onclick = "xoaSPghtheoID('+sanpham.id+')">  '  + 
        '                   <i class="far fa-trash-alt"></i>  '  + 
        '               </div>  '  + 
        '               <div style="clear: both;"></div>  '  + 
        '          </div>  ' ; 
        return html;
    }
    function capnhatSL(value,id)
    {
        var arrGH = JSON.parse(localStorage.getItem('giohang'));
        for(var i = 0 ; i<arrGH.length;i++)
        {
            if(arrGH[i].id == id) arrGH[i].soluong = value;
        }
        localStorage.setItem('giohang',JSON.stringify(arrGH));
        hienthiGH();
    }
    function hienthiGH()
    {
        if(localStorage.getItem('giohang') != null)
        {
            var arrGH = JSON.parse(localStorage.getItem('giohang'));
        var htmltong = '',s=0;
        
            for (var i = 0 ; i < arrGH.length;i++)
            {
                htmltong += spGHsangHtml(arrGH[i]);
                s+= tongTungSP(laySPtheoID(arrGH[i].id).gia ,arrGH[i].soluong );
                console.log(laySPtheoID(arrGH[i]).gia);
            }
            document.getElementById('giohang').innerHTML = htmltong;
            document.getElementById('tongcong').innerHTML = chuyentien(s);
        
        }
        
        else hienthighrong();
        
    }
    function tongTungSP(gia,soluong)
    {
        return soluong * gia;
    }
    function xoaSPghtheoID(id)
    {
        var arrGH = JSON.parse(localStorage.getItem('giohang'));
        for(var i=0;i<arrGH.length;i++)
        {
            if(arrGH[i].id == id)
                arrGH.splice(i,1);
        }
        localStorage.setItem('giohang',JSON.stringify(arrGH));
        hienthighrong();
        hienthiGH();
        
    }
    function hienthighrong()
    {
        var htmlrong =  '   <img src="img/cart-empty.png" style="height: 100px;" >  '  + 
        '               <p>Không có sản phẩm nào trong giỏ hàng</p>  '  + 
        '              <div><a href="index.html">Về trang chủ</a></div>  ' ; 
        var arrGH = JSON.parse(localStorage.getItem('giohang'));
        if(localStorage.getItem('giohang') != null)
        {
            if(arrGH.length == 0  ) 
            {
            console.log(1);
            document.getElementById('ghrong').style.display="block";
            document.getElementById('ghrong').innerHTML= htmlrong;
            document.getElementById('khicoSP').style.display="none";
            document.getElementById('tieudeGH').style.display="none";
            document.getElementById('tongtienallSP').style.display="none";
            document.getElementById('thanhtoan').style.display="none";
            }
            else
            {
                document.getElementById('khicoSP').style.display="block";
                document.getElementById('tieudeGH').style.display="block";
                document.getElementById('tongtienallSP').style.display="block";
                document.getElementById('thanhtoan').style.display="block";
            }
        }
        else
        {
            document.getElementById('ghrong').style.display="block";
            document.getElementById('ghrong').innerHTML= htmlrong;
            document.getElementById('khicoSP').style.display="none";
            document.getElementById('tieudeGH').style.display="none";
            document.getElementById('tongtienallSP').style.display="none";
            document.getElementById('thanhtoan').style.display="none";
        }
        
        

    }
    var slideIndex = 0;
            var time;
                      
    function currentSlide(n) 
    {
        slideIndex = n;
        clearTimeout(time);
        showSlides();
    }
    
function showSlides() 
{
                
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
                
                
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activedot";
    time = setTimeout(showSlides, 2500);
}
// USER login,logout
function Register()
{
    var e=document.formDN;
    if (e.style.display=="block") e.style.display="none";
    var d=document.formDK;
    if (d.style.display=="none") d.style.display="block";
   
}
function SignIn()
{
    var e=document.formDN;
    if (e.style.display=="none") e.style.display="block";
    var d=document.formDK;
    if (d.style.display=="block") d.style.display="none"; 
 }


function dongdangky()
{
    var d=document.formDK;
    if (d.style.display=="block") d.style.display="none";
    var e=document.formDN;
    if (e.style.display=="block") e.style.display="none";
}
function createAdmin(){
    if(localStorage.getItem('arrtaikhoan')===null){
        var taikhoan = [];
        var arrtaikhoan = {username: 'admin', pass: 'admin', fullname: 'Trần Hoàng Long', address: 'TPHCM', phone: '0349262670' , datesignup: '15-10-2001', quyen:'admin',tinhtrang:'open'};
        taikhoan.push(arrtaikhoan);
        localStorage.setItem('arrtaikhoan',JSON.stringify(taikhoan));
    }
}

document.formDK.addEventListener('submit',isSubmit);
document.formDN.addEventListener('submit',getinfo);
var arrtaikhoan = JSON.parse( localStorage.getItem('arrtaikhoan' ) );
function isSubmit(e) 
{ 
    e.preventDefault();
   var fullname = document.getElementById('name');
   let phone = document.formDK.phone;
   let username = document.formDK.username;
   let pass = document.formDK.pass;
   let retype=document.formDK.retype;
   let address=document.formDK.diachi;

   var flag = true;
if(fullname.value==""){
document.getElementById('fullnameerror').style.display ='inline';
document.getElementById('fullnameerror').innerHTML = 'Không được để trống';
flag = false;
}else{
document.getElementById('fullnameerror').style.display = 'none';
}

if(phone.value==""){
document.getElementById('phoneerror').style.display ='inline';
document.getElementById('phoneerror').innerHTML = 'Không được để trống';
flag = false;
}else{
if(isNaN(Number(phone.value))){
    document.getElementById('phoneerror').style.display ='inline';
    document.getElementById('phoneerror').innerHTML = 'SĐT không hợp lệ';
    flag = false;
}else{
    if(Number(phone.value.length)<10 || Number(phone.value.length)>10){
        document.getElementById('phoneerror').style.display ='inline';
        document.getElementById('phoneerror').innerHTML = 'SĐT không đúng';
        flag = false;
    }else{
        document.getElementById('phoneerror').style.display = 'none';
    }
}
}
if(username.value==""){
document.getElementById('usererror').style.display ='inline';
document.getElementById('usererror').innerHTML = ' Không được để trống';
flag = false;
}else{
document.getElementById('usererror').style.display = 'none';
}
if(pass.value==""){
document.getElementById('passerror').style.display ='inline';
document.getElementById('passerror').innerHTML = 'Không được để trống';
flag = false;
}else{
if(pass.value.length<8){
    document.getElementById('passerror').style.display ='inline';
    document.getElementById('passerror').innerHTML = 'MK phải trên 8 ký tự';
    flag = false;
}else {
    document.getElementById('passerror').style.display = 'none';
}
}
if(retype.value != pass.value){
document.getElementById('pass2error').style.display ='inline';
document.getElementById('pass2error').innerHTML = 'Nhập lại sai!!';
flag = false;
}else{
document.getElementById('pass2error').style.display = 'none';
}
if(address.value==""){
document.getElementById('dcerror').style.display ='inline';
document.getElementById('dcerror').innerHTML = 'Không được để trống';
flag = false;
}else{
document.getElementById('dcerror').style.display = 'none';
}
if(flag==false){
return false;
}
var d = new Date();
var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
var taikhoan = {username: username.value, pass: pass.value, address: address.value, fullname:fullname.value, phone: phone.value , datesignup: datesignup, quyen:'user',tinhtrang:'open'};
var arrtaikhoan = JSON.parse(localStorage.getItem('arrtaikhoan'));
for(var p in arrtaikhoan){
if(taikhoan.username==arrtaikhoan[p].username){
    document.getElementById('usererror').style.display ='inline';
    document.getElementById('usererror').innerHTML = ' đã được dùng';
    username.focus(); 
    return false;
}
}
arrtaikhoan.push(taikhoan);
localStorage.setItem('arrtaikhoan',JSON.stringify(arrtaikhoan));
//  renderlistacc();
alert('Đăng Ký Thành Công !!');
SignIn();


}
var arrtaikhoan = JSON.parse( localStorage.getItem('arrtaikhoan' ) );
function getinfo(e)
{
    e.preventDefault();
    var arrtaikhoan = JSON.parse( localStorage.getItem('arrtaikhoan' ) );
    var username = document.formDN.username
    var pass = document.formDN.pass
    var flag=true;
    if(username.value==""){
        document.getElementById('loidn1').innerHTML='không được để trống';
        flag = false;
    }else {
        document.getElementById('loidn1').style.display = 'none';
    }
    if(pass.value==""){
        document.getElementById('loidn2').innerHTML = 'không được để trống';
        flag = false;
    }else {
        document.getElementById('loidn2').style.display = 'none';
    }
    if(flag==false){
        return false;
    }
    for(var p in arrtaikhoan)
    {
        if (username.value==arrtaikhoan[p].username)
        {
            if(pass.value==arrtaikhoan[p].pass)
                  {
                dongdangky()
                localStorage.setItem('userlogin',JSON.stringify(arrtaikhoan[p]));
                window.location.reload(true);
                return true; }
                
        }
        
    }      
             document.getElementById('loidn2').style.display = 'inline';
             document.getElementById('loidn2').innerHTML = 'Sai Thông Tin'; 
             return false; 
    

}
  function logout()
    {
        localStorage.removeItem('userlogin');
        localStorage.removeItem('cart');
        window.location.reload();
    }

    function checklogin()
{
    if(localStorage.getItem('userlogin') != null)
    {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s='';
        if(user.tinhtrang=='open')
        {
          if(user.quyen=='admin')
          {
          //  renderlistacc();
          document.getElementById('giohangs').style.display='none';
          document.getElementById('top').style.display='none';
          document.getElementById('top1').style.display='block';
          document.getElementById('top2').style.display='block';
          document.getElementById('quanly').style.display='block';
          document.getElementById('top2').innerHTML=user.fullname;
            //  alert('Chào Mừng ADMIN ');
            customAlert('Chào ADMIN','success');
           }
          else {
          document.getElementById('top').style.display='none';
          document.getElementById('top1').style.display='block';
          document.getElementById('top2').style.display='block';
          document.getElementById('lichsu').style.display='block';
          document.getElementById('top2').innerHTML=user.fullname; 
          customAlert('Xin chào '+user.fullname+'','success');
              }
        }
        else 
        { alert('Tài Khoản của bạn hiện đang bị khóa!!'); localStorage.removeItem('userlogin');}
    }
    else return false;
        

}
function checklogin2()
{
    if(localStorage.getItem('userlogin')!= null)
    {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s='';
        if(user.quyen=='admin')
        {
            document.getElementById('giohangs').style.display='none';
            document.getElementById('top').style.display='none';
            document.getElementById('top1').style.display='block';
            document.getElementById('top2').style.display='block';
            document.getElementById('quanly').style.display='block';
            document.getElementById('top2').innerHTML=user.fullname;
          }
        else 
        {
            document.getElementById('top').style.display='none';
            document.getElementById('top1').style.display='block';
            document.getElementById('top2').style.display='block';
            document.getElementById('lichsu').style.display='block';
            document.getElementById('top2').innerHTML=user.fullname; 
        }
    }
    else return false;
        
        
}


function renderlistacc()
{
    let arrtaikhoan=localStorage.getItem('arrtaikhoan') ? JSON.parse(localStorage.getItem('arrtaikhoan')) :[] ;
     if (arrtaikhoan.length === 0 ) return false;
    let tablecontent = `<tr style="background-color: gray; color : white ;  ">
       <td>STT</td>
       <td> Họ Và Tên</td>
       <td>  Số Điện Thoại</td>
       <td>  Username</td>
       <td>  Ngày ĐK </td>
       <td>  Thao Tác</td>
       </tr>`;
       arrtaikhoan.forEach((taikhoan,index) => {
        let accid = index;
        index++;
       tablecontent += `<tr>
       <td>${index}</td>
       <td>${taikhoan.fullname}</td>
       <td>${taikhoan.phone}</td>
       <td>${taikhoan.username}</td>
       <td>${taikhoan.datesignup}</td>
       <td>
           <a href='#'>edit</a> | <a href='#' onclick='xoaacc(${accid})'>delete</a>
       </td>
       </tr>`;
        })
   document.getElementById('dsacc').innerHTML=tablecontent;
}
function xoaacc(id)
{
    let arrtaikhoan=localStorage.getItem('arrtaikhoan') ? JSON.parse(localStorage.getItem('arrtaikhoan')) :[] ;
     arrtaikhoan.splice(id,1);
     localStorage.setItem('arrtaikhoan',JSON.stringify(arrtaikhoan));
     renderlistacc();
}
function buy(){
	if(localStorage.getItem('userlogin')===null){
		alert('Bạn phải đăng nhập để mua sản phẩm');
		return false;
	}
	var info = '';
    var totalprice = 0;
    
    var cartArray = JSON.parse(localStorage.getItem('giohang'));
    var sanpham = [];
    console.log(cartArray.length);
    for (var i = 0; i < cartArray.length; i++) 
    {
        sanpham.push(laySPtheoID(cartArray[i].id));
    }
    var tongsoluong=0;
    for(var i=0 ;i<cartArray.length;i++)
    {
        tongsoluong += cartArray[i].soluong;
    }
    var j=0;
    console.log(sanpham[1]);
    for (var i = 0; i < cartArray.length; i++) 
    {
        
        info+=cartArray[i].soluong+' x '+sanpham[j].ten + ' ; ';
        console.log(sanpham[j]);
        totalprice+=cartArray[i].soluong*sanpham[j].gia;
        j++;
        
		
	}
    var customer = JSON.parse(localStorage.getItem('userlogin'));
    
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: taoID(), info: info,sanpham: sanpham, totalprice: totalprice, customer: customer,tongsoluong: tongsoluong, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: taoID(), info: info, sanpham: sanpham, totalprice: totalprice, customer: customer,tongsoluong: tongsoluong, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
    localStorage.removeItem('giohang');
    
    alert('bạn đã đặt hàng thành công');
    
    window.location.reload();
    // setTimeout(window.location.reload(),15000);
    // hienthiGH();
    hienthighrong();
	
}
function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
            if(user.username==billArray[i].customer.username)
            {
                console.log(billArray[i].totalprice);
				document.getElementById('bill').style.display = 'block';
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+chuyentien(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div>'+billArray[i].status+'</div>'+
				'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}
/*CUSTOM ALERT BOX*/
function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#0362fc';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 3500);
}
/* Bật Tắt tìm kiếm */
function closesearch(){
    var khungsearch = document.getElementById('khungsearch').style.display = 'none';
  }
  function mosearch()
  {
    var khungsearch = document.getElementById('khungsearch').style.display = 'block';
  }
   
//   Show search nâng cao
function showsearchnangcao(){
    if(document.getElementById('loaisanpham').style.display=="inline-block"&&document.getElementById('priceform').style.display=="inline-block"&&document.getElementById('priceto').style.display=="inline-block"&&document.getElementById('khoangcachsearch').style.display=="inline-block"&&document.getElementById('searchnangcao').style.display=="block"){
      document.getElementById('loaisanpham').style.display="none";
      document.getElementById('priceform').style.display="none";
      document.getElementById('priceto').style.display="none";
      document.getElementById('khoangcachsearch').style.display="none";
      document.getElementById('searchnangcao').style.display="none";
      document.getElementById('timkiem').style.display="block";
      document.getElementById('timkiem').value = "";
      document.getElementById('searchresult').innerHTML = "";
      document.getElementById('timkiem').disabled = false;  
    }
    else{
      document.getElementById('timkiem').value = "";
      document.getElementById('searchresult').innerHTML = "";
      document.getElementById('timkiem').disabled = false; 
      document.getElementById('loaisanpham').value = "all";
      document.getElementById('priceform').value = "";
      document.getElementById('priceto').value = "";
      document.getElementById('loaisanpham').style.display="inline-block";
      document.getElementById('priceform').style.display="inline-block";
      document.getElementById('priceto').style.display="inline-block";
      document.getElementById('khoangcachsearch').style.display="inline-block";
      document.getElementById('searchnangcao').style.display="block"; 
    }
  }

  function search(index)
  {
        document.getElementById('phantrangsearch').style.display = "block";
        var sanphamsearch = document.getElementById('timkiem').value.toLowerCase();
        var sanphamArray = JSON.parse(localStorage.getItem('sanpham'));
        var s='',dem=0;
        var arr = [];
        for(var i = 0; i<sanphamArray.length; i++){
            if ((sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 || sanphamArray[i].loai.toLowerCase().search(sanphamsearch) != -1) && sanphamsearch != '') {
            
            arr.push(sanphamArray[i]);
            
            
            }
        }
        for(var i = index; i<sanphamArray.length; i++){
            if ((sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 || sanphamArray[i].loai.toLowerCase().search(sanphamsearch) != -1) && sanphamsearch != '') {
            s+='<div class="divsanpham" onclick="hienchitiet('+sanphamArray[i].id+');">' + 
            '<a href ="#"><img src="' +sanphamArray[i].hinh+'"/> '+
            '<h4 >' +sanphamArray[i].ten +'</h4>' +
            '<p style="color: red;font- size :15px">Giá: ' + chuyentien(sanphamArray[i].gia) + '</p></a></div>';
           
            dem++;
            if(dem==8) break; 
            }
        }
        
        
        
        
        document.getElementById('searchresult').innerHTML = s;
        console.log(arr.length);
        var sotrang = Math.ceil(arr.length/8);
        console.log(sotrang);
        if(sotrang>1)
        {
            console.log(sotrang);
            var t='';
            var vitri='';
            for(var i=1 ; i<= sotrang ;i++)
            {
                vitri = (i-1)*8;
                if(index == vitri)
                {
                    t+= '<div id="sotrang"  class="active" onclick="search('+vitri+');">'+i+'</div>';
                }
                else
                {
                    t+= '<div id="sotrang" onclick="search('+vitri+');" >'+i+'</div>';
                }

            }
            document.getElementById("phantrangsearch").innerHTML = t;
        }
        else document.getElementById('phantrangsearch').style.display = "none";
        
  }

  function timkiemnangcao(index)
  {
      document.getElementById('phantrangsearch').style.display = "none";
      document.getElementById('phantrangsearchnangcao').style.display = "block";
    var s='';
    var sanphamsearch = document.getElementById('timkiem').value.toLowerCase();
    var sanphamArray = JSON.parse(localStorage.getItem('sanpham'));
    var loaisanpham = document.getElementById('loaisanpham').value;
      console.log(loaisanpham);
      var priceform = document.getElementById('priceform').value;
      console.log(priceform);
      var priceto = document.getElementById('priceto').value;
      console.log(priceto);
      var arr = [];
      if (loaisanpham=='all') {
        for(var i = 0; i<sanphamArray.length; i++){
          if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].gia>=priceform && sanphamArray[i].gia<=priceto) {
            arr.push(sanphamArray[i]);
            console.log(arr.length);
          }
        }
      }
      else {
        for(var i = 0; i<sanphamArray.length; i++){
          if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].loai==loaisanpham && sanphamArray[i].gia>=priceform && sanphamArray[i].gia<=priceto) {
            arr.push(sanphamArray[i]);
            console.log(arr.length);
          }
        }
      }
      console.log(arr.length);
      var dem = 0;
      if (loaisanpham=='all') {
        for(var i = index; i<sanphamArray.length; i++){
          if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].gia>=priceform && sanphamArray[i].gia<=priceto) {
            s+='<div class="divsanpham" onclick="hienchitiet('+sanphamArray[i].id+');">' + 
            '<a href ="#"><img src="' +sanphamArray[i].hinh+'"/> '+
            '<h4 >' +sanphamArray[i].ten +'</h4>' +
            '<p style="color: red;font- size :15px">Giá: ' + chuyentien(sanphamArray[i].gia) + '</p></a></div>';
            dem++;
            if(dem==8) break;
          }
        }
      }
      else {
        for(var i = index; i<sanphamArray.length; i++){
          if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].loai==loaisanpham && sanphamArray[i].gia>=priceform && sanphamArray[i].gia<=priceto) {
            s+='<div class="divsanpham" onclick="hienchitiet('+sanphamArray[i].id+');">' + 
            '<a href ="#"><img src="' +sanphamArray[i].hinh+'"/> '+
            '<h4 >' +sanphamArray[i].ten +'</h4>' +
            '<p style="color: red;font- size :15px">Giá: ' + chuyentien(sanphamArray[i].gia) + '</p></a></div>';
            dem++;
            if(dem==8) break;
          }
        }
      }
      
      document.getElementById('searchresult').innerHTML = s;
      
    
    var sotrang = Math.ceil(arr.length/8);
    console.log(sotrang);
    if(sotrang>1)
    {
        var t='';
        var vitri='';
        for(var i=1 ; i<= sotrang ;i++)
        {
            vitri = (i-1)*8;
            if(index == vitri)
            {
                t+= '<div id="sotrang"  class="active" onclick="timkiemnangcao('+vitri+');">'+i+'</div>';
            }
            else
            {
                t+= '<div id="sotrang" onclick="timkiemnangcao('+vitri+');" >'+i+'</div>';
            }

        }
        document.getElementById("phantrangsearchnangcao").innerHTML = t;
    }
    else document.getElementById('phantrangsearchnangcao').style.display = "none";
  }
  function showsanphamInfoSearch(idsp)
{
    document.getElementById("nenCT").style.display = "block";
    // document.getElementById("chitietSP").style.display = "block";
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var s='';
    for(var i = 0 ;i<arrSP.length;i++)
    {
        if(arrSP[i].id == idsp)
        {
            console.log(arrSP[14]);
            document.getElementById("imgct").src =arrSP[i].hinh;
            document.getElementById("ten").innerHTML = arrSP[i].ten;
            document.getElementById("gia").innerHTML = 'Giá: ' + chuyentien(arrSP[i].gia);
        }
    }
    console.log(idsp);
    s+='<button id="btnGH" onclick="themvaoGH('+idsp+');">Thêm vào giỏ hàng</button>';
    document.getElementById('hiennutadd').innerHTML=s;
}

    


    
