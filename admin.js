
function htmenuSP()
{   
    
    var a = document.getElementById('menuSP');
    if(a.style.display == "block") 
    {
        a.style.display = "none";
        console.log("!");
        a.style.marginTop = "-100px";
        document.getElementById('sanpham').style.marginBottom = "0px";
    }
    else
    {
        a.style.display = "block";
        a.style.marginTop = "0px";
        document.getElementById('sanpham').style.marginBottom = "20px";
        document.getElementById('sanpham').style.marginTop = "0px";
    } 
}
function checkadmin(){
    if(localStorage.getItem('userlogin')){
        var user = JSON.parse(localStorage.getItem('userlogin'));
        if(user.username=='admin')
        {
          //  renderlistacc();
          document.getElementById('tenadmin').innerHTML=user.fullname;
             
        }
    }
}
function renderlistacc()
{
    let arrtaikhoan=localStorage.getItem('arrtaikhoan') ? JSON.parse(localStorage.getItem('arrtaikhoan')) :[] ;
     if (arrtaikhoan.length === 0 ) return false;
    let tablecontent = `<tr style="background: linear-gradient(180deg,#f79429,#f7712e); color : white ;  ">
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
           <a href='#' onclick='editUser(${accid})'><i class="far fa-edit"></i></a> | <a href='#' onclick='xoaacc(${accid})'><i class="far fa-trash-alt"></i></a>
       </td>
       </tr>`;
        })
   document.getElementById('dsacc').innerHTML=tablecontent;
   
}
function xoaacc(id)
{
    let arrtaikhoan=localStorage.getItem('arrtaikhoan') ? JSON.parse(localStorage.getItem('arrtaikhoan')) :[] ;
    //confirm('Bạn có muốn xóa tài khoản này?');
     //arrtaikhoan.splice(id,1);
     for(var i=0;i<arrtaikhoan.length;i++){
		if(i==id)
			if(confirm('Bạn có muốn xóa tài khoản này?'))
				arrtaikhoan.splice(i, 1);
	}
     localStorage.setItem('arrtaikhoan',JSON.stringify(arrtaikhoan));
     renderlistacc();
}
// Sửa acc
function editUser(id)
{
    document.getElementById('nenAcc').style.display = "block";
	var arrtaikhoan = JSON.parse(localStorage.getItem('arrtaikhoan'));
	for(var i=0;i<arrtaikhoan.length;i++){
		if(i==id) {
			document.getElementById("ten").value = arrtaikhoan[i].fullname;
			document.getElementById("tentk").value = arrtaikhoan[i].username;
            document.getElementById("sdt").value = arrtaikhoan[i].phone;
            document.getElementById("mk").value = arrtaikhoan[i].pass;
			document.getElementById("dc").value = arrtaikhoan[i].address;
            document.getElementById("quyen").value = arrtaikhoan[i].quyen;
            document.getElementById("tt").value = arrtaikhoan[i].tinhtrang;
			localStorage.setItem('editId',id);
			break;
		}
	}
}

function saveUser(){
	var userLocal = localStorage.getItem("arrtaikhoan");
	var editId = localStorage.getItem("editId");
	var arrtaikhoan = JSON.parse(userLocal);
	var hoten = document.getElementById('ten').value;
	var tendn = document.getElementById('tentk').value;
	var sdt = document.getElementById('sdt').value;
    var pass = document.getElementById('mk').value;
    var dc = document.getElementById('dc').value;
    var quyen = document.getElementById("quyen").value;
    var tinhtrang = document.getElementById("tt").value;
	for(var i=0;i<arrtaikhoan.length;i++){
		if(i==editId){
			arrtaikhoan[i].fullname=hoten;
			arrtaikhoan[i].username=tendn;
			arrtaikhoan[i].phone=sdt;
            arrtaikhoan[i].pass=pass;
            arrtaikhoan[i].address=dc;
            arrtaikhoan[i].quyen = quyen;
            arrtaikhoan[i].tinhtrang=tinhtrang;
			break;
		}
	}
    localStorage.setItem('arrtaikhoan',JSON.stringify(arrtaikhoan));
    var i = 0;
	if(arrtaikhoan[i].quyen = 'admin'){
		if(confirm('Bạn có muốn thay đổi quyền tài khoản này?'))
			userArray.splice(i, 1);
	}
    renderlistacc();

}
// ew
function showSPinAdmin(index)
{
    var arrSP = JSON.parse(localStorage.getItem('sanpham'));
    var s='';
    var dem=0;
    for (var i=index;i<arrSP.length;i++)
    {
        s +=  '   <div id="adminSPhinh" ><img src="'+arrSP[i].hinh+'" style="width: 100%;height: 100%;"></div>  '  + 
        '                   <div id="adminSPten">'+arrSP[i].ten+'</div>  '  + 
        '                   <div id="adminSPloai">'+arrSP[i].loai+'</div>  '  + 
        '                   <div id="adminSPhang">'+arrSP[i].hang+'</div>  '  + 
        '                   <div id="adminSPgia">'+chuyentien(arrSP[i].gia)+'</div>  '  + 
        '                   <div id="adminSPchucnang">  '  + 
        '                       <div style="width: 50%; float: left;text-align: center;line-height: 140px;cursor: pointer;" onclick="htcanhbao('+arrSP[i].id+');">  '  + 
        '                           <i class="far fa-trash-alt"></i>  '  + 
        '                       </div>  '  + 
        '                       <div style="width: 50%; float: left;text-align: center;line-height: 140px;cursor: pointer;" onclick="suaSPtheoID('+arrSP[i].id+')">  '  + 
        '                           <i class="far fa-edit"></i>  '  + 
        '                       </div>  '  + 
        '                  </div>  ' ;
        dem++;
        if (dem==6) break;
    }
    document.getElementById('thongtinSP').innerHTML = s;
    hiensotrangSP(index);
}
function hiensotrangSP(index)
{
    
    var arrSP = JSON.parse(localStorage.getItem('sanpham'));
    console.log(arrSP.length);
    var sotrang = Math.ceil(arrSP.length/6);
    if(sotrang>1)
    {
        var s='';
        var vitri='';
        for(var i=1 ; i<= sotrang ;i++)
        {
            vitri = (i-1)*6;
            if(index == vitri)
            {
                s+= '<div id="sotrang"  class="active" onclick="showSPinAdmin('+vitri+');">'+i+'</div>';
            }
            else
            {
                s+= '<div id="sotrang" onclick="showSPinAdmin('+vitri+');" >'+i+'</div>';
            }

        }
        document.getElementById("phantrang").innerHTML = s;
    }
}
function htmenuthemSP()
{
    document.getElementById('formadd').style.display="block";
}
function adminXoaSPtheoID(id)
    {
        
        console.log(id);
        var arrSP = JSON.parse(localStorage.getItem('sanpham'));
        console.log(arrSP[2]);
        var i;
        for(i=0;i<arrSP.length;i++)
        {
            if(arrSP[i].id == id)
                arrSP.splice(i,1);
        }
        localStorage.setItem('sanpham',JSON.stringify(arrSP));
        document.getElementById('nen').style.display = "none";
        var index=0,tmp = Math.ceil(i/6),tmp1 = i%6 ;
        if(tmp1==0) index = i;
        else index = (tmp -1)*6;
        console.log(index);
        showSPinAdmin(0);
        // hiensotrangSP();
        
    }
function htAdmin()
{
    var url = location.href;
    var tmp = url.split('?');
    console.log(tmp[1]);
    if(tmp[1] == 'addSP')
    {
        document.getElementById('formadd').style.display = "block";
        document.getElementById('dssanpham').style.display = "none";
        document.getElementById('donhang').style.display = "none";
        document.getElementById('thongke').style.display = "none";
    }
    if(tmp[1] == 'dsSP')
    {
        document.getElementById('formadd').style.display = "none";
        document.getElementById('dssanpham').style.display = "block";
        document.getElementById('tieudeSP').style.display = "block";
        document.getElementById('phantrang').style.display = "block";
        document.getElementById('donhang').style.display = "none";
        document.getElementById('thongke').style.display = "none";
        showSPinAdmin(0);
        // hiensotrangSP();
    }
    if(tmp[1] == 'donhang')
    {
        document.getElementById('formadd').style.display = "none";
        document.getElementById('dssanpham').style.display = "none";
        document.getElementById('phantrang').style.display = "none";
        document.getElementById('tieudeDH').style.display = "block";
        document.getElementById('donhang').style.display = "block";
        document.getElementById('thongke').style.display = "none";
        hiendonhang(0);
        // hiensotrangDH()
    }
    if(tmp[1] == 'thongke')
    {
        document.getElementById('formadd').style.display = "none";
        document.getElementById('dssanpham').style.display = "none";
        document.getElementById('phantrang').style.display = "none";
        document.getElementById('tieudeDH').style.display = "none";
        document.getElementById('donhang').style.display = "none";
        document.getElementById('thongke').style.display = "block";
        
    }
}
function trove()
{
    document.getElementById('nen').style.display= "none";
}
function htcanhbao(id)
{
    var s=  '   <div id="nen" class="nen">  '  + 
        '                   <div id = "canhbao">  '  + 
        '                       <div id="tieudexoa">Bạn có muốn xóa 1 sản phẩm?</div>  '  + 
        '                       <div>  '  + 
        '                           <button id="btnkhong" onclick="trove();">Trở lại</button>  '  + 
        '                           <button id="btnco" onclick = "adminXoaSPtheoID('+id+')">Có</button>  '  + 
        '                       </div>  '  + 
        '                   </div>  '  + 
        '              </div>  ' ; 
        document.getElementById('themnen').innerHTML=s;
        document.getElementById('nen').style.display = "block";
        document.getElementById('dssanpham').style.display = "block";
}
function dongsua()
{
    document.getElementById('nensua').style.display= "none";
}

function suaSPtheoID(id)
{
    document.getElementById('nensua').style.display= "block";
    var arrSP = JSON.parse(localStorage.getItem('sanpham'));
    // var hinh = document.getElementById('hinhs').value;
    // console.log(hinh);
    // var hinhanh = hinh.split("\\");
    for(var i = 0 ;i< arrSP.length;i++)
    {
        if(arrSP[i].id == id)
        {
            console.log(arrSP[i].ten);
            document.getElementById('ten').value = arrSP[i].ten;
            document.getElementById('hang').value = arrSP[i].hang;
            document.getElementById('tien').value = arrSP[i].gia;
            document.getElementById('chinhloai').value = arrSP[i].loai;
            // document.getElementById('hinh').value = arrSP[i].hinh;
            // hinh = hinhanh[2];
            console.log(arrSP[i].loai);
            localStorage.setItem('editId',id);
            break;
        }   
    }
}
function saveProduct(){
	var arrSP = JSON.parse(localStorage.getItem('sanpham'));
	var editId = localStorage.getItem("editId");
	var ten = document.getElementById("ten").value;
    var hang = document.getElementById("hang").value;
    var loai = document.getElementById("chinhloai").value;
	var gia = document.getElementById("tien").value;
	var anh = document.getElementById("hinhs").value;
    var fileAnh = anh.split("\\");
    var hinh = "img/sanpham/" + fileAnh[2];
    var i;
	for( i=0;i<arrSP.length;i++){
        if(arrSP[i].id == editId)
        {
			arrSP[i].ten = ten;
			arrSP[i].loai = loai;
			arrSP[i].hang = hang;
			arrSP[i].gia = gia; 
			arrSP[i].hinh = hinh;
			break;
		}
	}
	localStorage.setItem('sanpham',JSON.stringify(arrSP));
    localStorage.setItem('editId',0);
    document.getElementById("hinhs").value ='';
    var index=0,tmp = Math.ceil(i/6),tmp1 = i%6 ;
    if(tmp1==0) index = i;
    else index = (tmp -1)*6;
    console.log(index);
	showSPinAdmin(index);
    dongsua();
}
function hiendonhang(index)
{
    var arrbill = JSON.parse(localStorage.getItem('bill'));
    
    console.log(1);
    
    var s = '';
    var dem=0;
    var tinhtrang='';
    for(var i=index;i<arrbill.length;i++)
    {
        if(arrbill[i].status=='Chưa xử lý')
			tinhtrang =  '<div style="color: red;font-size: 19px;">Chưa xử lý</div>';
		else
			tinhtrang =  '<div style="color: green;font-size: 19px;">Đã xử lý</div>';
        s+=  '   <div >  '  + 
        '                       <div id="idDH">'+arrbill[i].id+'</div>  '  + 
        '                       <div id="tenKH">'+arrbill[i].customer.fullname+'</div>  '  + 
        '                       <div id="ngaydat">'+arrbill[i].date+'</div>  '  + 
        '                       <div id="tongtienDH">'+chuyentien(arrbill[i].totalprice)+'</div>  '  + 
        '                       <div id="tinhtrangDH">'+tinhtrang+'</div>  '  + 
        '                       <div id="chitietDH">  '  + 
        '                           <div id="ctdonhang" onclick="hienctDH('+arrbill[i].id+');">xem chi tiết</div>  '  + 
        '                       </div>  '  + 
        '                  </div>  ' ; 
        dem++;
        if(dem==12) break;
    }
    document.getElementById('thongtinDH').innerHTML = s;
    hiensotrangDH(index);

}
function hiensotrangDH(index)
{
    
    var billArray = JSON.parse(localStorage.getItem('bill'));
    
    var sotrang = Math.ceil(billArray.length/12);
    if(sotrang>1)
    {
        var s='';
        var vitri='';
        for(var i=1 ; i<= sotrang ;i++)
        {
            
            vitri = (i-1)*12;
            if(vitri == index)
            {
                s+= '<div id="sotrang" class="active" onclick="hiendonhang('+vitri+');">'+i+'</div>';
            }
            else s+= '<div id="sotrang" onclick="hiendonhang('+vitri+');">'+i+'</div>';

        }
        

        document.getElementById("phantrangDH").innerHTML = s;
    }
}
function hienctDH(id){
	
    var billArray = JSON.parse(localStorage.getItem('bill'));
    var s='';
    for(var i=0;i<billArray.length;i++)
    {
		if(billArray[i].id==id){
			
			s+=  '   <div id="nenDH">  '  + 
            '                   <div id="formCTdh">  '  + 
            '                         '  + 
            '                       <div id="tieudeCTDH" style="position: relative;;margin-top: 15px; border-bottom: 1px solid black;line-height: 50px;">  '  + 
            '                           <h2 style="text-align: center;color: red;margin: 0;">Chi tiết đơn hàng</h2>  '  + 
            '                           <div class="daux"   onclick="dongDH();"><i class="fas fa-times fa-2x "></i></div>  '  + 
            '                       </div>  '  + 
            '                       <div id="infoSP">  '  + 
            '                           <label>Thông tin sản phẩm:</label>  '  + 
            '                           <span>'+billArray[i].info+'</span>  '  + 
            '                       </div>  '  + 
            '                       <div id="hotenKH">  '  + 
            '                           <label>Họ tên khách hàng:</label>  '  + 
            '                           <span>'+billArray[i].customer.fullname+'</span>  '  + 
            '                       </div>  '  + 
            '                       <div id="diachiKH">  '  + 
            '                           <label>Địa chỉ:</label>  '  + 
            '                           <span>'+billArray[i].customer.address+'</span>  '  + 
            '                       </div>  '  + 
            '                       <div id="sdtKH">  '  + 
            '                           <label>Số điện thoại:</label>  '  + 
            '                           <span>'+billArray[i].customer.phone+'</span>  '  + 
            '                       </div>  '  + 
            '                         '  + 
            '                       <div id="ngaymua">  '  + 
            '                           <label>Ngày đặt:</label>  '  + 
            '                           <span>'+billArray[i].date+'</span>  '  + 
            '                       </div>  '  + 
            '                       <div id="tongtienDH">  '  + 
            '                           <label>Tổng tiền:</label>  '  + 
            '                           <span>'+chuyentien(billArray[i].totalprice)+'</span>  '  + 
            '                       </div>  '  + 
            '                       <div id="tinhtrangDH" onchange = "thaydoistatus();">  '  + 
            '                           <label>Tình trạng đơn hàng:</label>  '  + 
            '                           <select id="chontinhtrang" >  '  + 
            '                               <option >Chưa xử lý</option>  '  + 
            '                               <option >Đã xử lý</option>  '  + 
            '                           </select>  '  + 
            '                       </div>  '  + 
            '     '  + 
            '                   </div>  '  + 
            '              </div>  ' ; 
			localStorage.setItem('editId',id);
			break;
		}
    }
    document.getElementById('xemchitietdonhang').innerHTML = s;
    document.getElementById('nenDH').style.display="block";
    // hiendonhang();
    

}
function dongDH()
{
    document.getElementById('nenDH').style.display = "none";
}
function thaydoistatus()
{
	var editId = localStorage.getItem("editId");
	var billArray = JSON.parse(localStorage.getItem('bill'));
    var status=document.getElementById('chontinhtrang').value;
    for(var i=0;i<billArray.length;i++)
    {
        if(billArray[i].id==editId)
        {
			
            billArray[i].status=status;
			break;
         
        }
        
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	localStorage.setItem('editId',0);
    document.getElementById('nenDH').style.display="none";
    hiendonhang(0);
}
function clickthongke()
{
    var thanginput = document.getElementById('chonthang').value;
    var naminput = document.getElementById('chonnam').value;
    var arrbill = JSON.parse(localStorage.getItem('bill'));
    var arrtmp = [];
    for(var i=0 ;i <arrbill.length ; i++)
    {
        var tmp = arrbill[i].date.split('-');
        if(thanginput.search(tmp[1])== 6 && tmp[2] == naminput)
        {
            arrtmp.push(arrbill[i]);
        }
    }
    console.log(arrtmp.length);
    var doanhthu= 0,soluong=0;
    for(var i =0 ;i<arrtmp.length;i++)
    {
        doanhthu += arrtmp[i].totalprice;
        soluong += arrtmp[i].tongsoluong;
    }
    var s =  '   <div>  '  + 
    '                       <div id="thongtin" style="width: 15%;font-weight: normal;">'+thanginput+'</div>  '  + 
    '                       <div id="thongtin" style="width: 15%;font-weight: normal;">'+naminput+'</div>  '  + 
    '                       <div id="thongtin" style="width: 30%;font-weight: normal;">'+soluong+'</div>  '  + 
    '                       <div id="thongtin" style="width: 40%;font-weight: normal;color: red;">'+chuyentien(doanhthu)+'</div>  '  + 
    '                  </div>  ' ; 
    document.getElementById('thongtinthongke').innerHTML = s;
   
    
}
function dongacc()
{
    document.getElementById('nenAcc').style.display = "none";
}