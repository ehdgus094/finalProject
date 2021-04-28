$(document)
		.ready(

				function() {

					$('form')
							.submit(
									function() {
										if ($("#main_category option:selected")
												.val() == "----") {
											alert("메인카테고리를 설정해주세요")
											return false;
										}
										if ($("#sub_category option:selected")
												.val() == "----") {
											alert("서브카테고리를 설정해주세요")
											return false;
										}
										if ($("#mart_subject").val() == "") {
											alert("제목을 입력해주세요")
											$("mart_subject").val().focus();
											return false;
										}

										var cnt = $("#form-delivery  input:checkbox:checked").length;
										if (cnt < 1) {
											alert("배송방법을 선택해주세요")

											return false;
										}
										if ($.trim($("#board_content").val()) == "") {
											alert("내용을 입력해주세요")
											$("#board_content").focus();
											return false;

										}
										
										var cnt2 = $("#item_storage  input:checkbox:checked").length;
										if (cnt2 < 1) {
											alert("보관방법을 선택해주세요")

											return false;
											
										}
										
										 var fileCheck = document.getElementById("#thumb").value;
										    if(!fileCheck){
										        alert("대표사진을 첨부해주세요");
										        return false;
										    }
										    var fileCheck1 = document.getElementById("#upfile1").value;
										    if(!fileCheck1){
										        alert("4개의 파일첨부는 필수 입니다. 1번파일을 확인해주세요");
										        return false;
										    }
										    var fileCheck2 = document.getElementById("#upfile2").value;
										    if(!fileCheck2){
										        alert("4개의 파일첨부는 필수 입니다. 2번파일을 확인해주세요");
										        return false;
										    }
										    var fileCheck3 = document.getElementById("#upfile3").value;
										    if(!fileCheck3){
										        alert("4개의 파일첨부는 필수 입니다. 3번파일을 확인해주세요");
										        return false;
										    }
										    var fileCheck4 = document.getElementById("#upfile4").value;
										    if(!fileCheck4){
										        alert("4개의 파일첨부는 필수 입니다. 4번파일을 확인해주세요");
										        return false;
										    }

									})

					$("#mart_deliverycost").change(function() {

						if (!$.isNumeric($("#mart_deliverycost").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#mart_deliverycost").val('')
							$("#mart_deliverycost").focus();
							return false;
						}

					})

					$("#item_price1").change(function() {

						if (!$.isNumeric($("#item_price1").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#item_price1").val('')
							$("#item_price1").focus();

						}

					})

					$("#item_price2").change(function() {

						if (!$.isNumeric($("#item_price2").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#item_price2").val('')
							$("#item_price2").focus();

						}

					})

					$("#item_price3").change(function() {

						if (!$.isNumeric($("#item_price3").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#item_price3").val('')
							$("#item_price3").focus();

						}

					})

					$("#item_price4").change(function() {

						if (!$.isNumeric($("#item_price4").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#item_price4").val('')
							$("#item_price4").focus();

						}

					})

					$("#item_price5").change(function() {

						if (!$.isNumeric($("#item_price5").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#item_price5").val('')
							$("#item_price5").focus();

						}

					})

					$("#item_price6").change(function() {

						if (!$.isNumeric($("#item_price6").val())) {
							alert("배달 비용은 숫자로 입력해주세요")
							$("#item_price6").val('')
							$("#item_price6").focus();
							return false;
						}

						if ($("#item_name1").val() == "") {
							alert("상품등록 최소1개는 작성하셔야합니다.")
							$("#item_name1").focus();
							return false;

						}
						if ($("#item_price1").val() == "") {
							alert("가격을 작성해주세요")
							$("#item_price1").focus();
							return false;

						}

					})

					$("#mart_name").change(function() {
						var na = $("#mart_name").val();
						alert(na);
						$("#mart_name2").val(na);

					})
					$("#item_add")
							.click(
									function() {
										$(
												"#section_view > div > div.mart_item > table > tbody > tr:nth-child(6)")
												.remove();
										var output = "<tr>"
												+ "<td><input type='text' name='item_name5' id='item_name5'"
												+ "style='width: 200px'></td>"
												+ "<td><input type='text' name='item_price5' id='item_price5'"
												+ "	style='width: 200px'>원</td>"
												+ "</tr>"
												+ "<tr>"
												+ "<td><input type='text' name='item_name6' id='item_name6'"
												+ "style='width: 200px'></td>"
												+ "<td><input type='text' name='item_price6' id='item_price6'"
												+ "	style='width: 200px'>원</td>"
												+ "</tr>";

										$(".mart_item > table > tbody").append(
												output);

									})

					$("#file_add")
							.click(
									function() {
										var output = "<input type='file' id='upfile5' name='uploadfile5' accept='image/*'>"
										output += "<span id='filevalue3' style='display:none;'></span>&nbsp;"
										output += "<input type='file' id='upfile6' name='uploadfile6' accept='image/*'>"
										output += "<span id='filevalue4' style='display:none;'></span><br>"
										output += "사진 업로드는 최대 6개까지 가능합니다."
										$("#picinfo").append(output + "<br>");
										$("#file_add").attr("style",
												"display:none")

									})
					function Postcode() {
						new daum.Postcode(
								{
									oncomplete : function(data) {
										// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

										// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
										// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를
										// 참고하여 분기 한다.
										var fullRoadAddr = data.roadAddress; // 도로명
										// 주소
										// 변수
										var extraRoadAddr = ''; // 참고 항목 변수

										// 법정동명이 있을 경우 추가한다. (법정리는 제외)
										// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
										if (data.bname !== ''
												&& /[동|로|가]$/g.test(data.bname)) {
											extraRoadAddr += data.bname;
										}
										// 건물명이 있고, 공동주택일 경우 추가한다.
										if (data.buildingName !== ''
												&& data.apartment === 'Y') {
											extraRoadAddr += (extraRoadAddr !== '' ? ', '
													+ data.buildingName
													: data.buildingName);
										}
										// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을
										// 만든다.
										if (extraRoadAddr !== '') {
											extraRoadAddr = ' ('
													+ extraRoadAddr + ')';
										}

										// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
										if (fullRoadAddr !== '') {
											fullRoadAddr += extraRoadAddr;
										}

										// 우편번호와 주소 정보를 해당 필드에 넣는다.

										$("#mart_addr").val(fullRoadAddr);
									}
								}).open();
					}
					// 우편 검색 버튼 클릭
					$("#postcode").click(function() {
						// window.open("post.html", "post","width=400,
						// height=500, scrollbars=yes");
						Postcode();
					});

					// 썸내일 사진 변경
					$('#section_view > label > input[type=file]')
							.change(
									function(event) {
										var inputfile = $(this).val().split(
												'\\');
										var filename = inputfile[inputfile.length - 1];
										var pattern = /(gif|jpg|jpeg|png)$/i;
										if (pattern.test(filename)) {
											$('#board_thumbnailname').text(
													filename); // inputfile.length
											// - 1 = 2
											$('#filename').text(filename);

											var reader = new FileReader();
											reader
													.readAsDataURL(event.target.files[0])
											reader.onload = function(event) {
												$("#showImage")
														.html(
																'<img width="500px" height="500px" src="'
																		+ event.target.result
																		+ '">');

											};
										} else {
											inputfile = "";
											filename = "";
											$('#board_thumbnailname').text(
													filename); // inputfile.length
											// - 1 = 2
											$("#showImage")
													.html(
															'<img width="400px" height="400px" src="image/mainadd.jpg">');
											alert('확장자는 gif, jpg, jpeg, png 가능합니다.');
										}
									})

				})

function catechange() {
	var main = $("#main_category option:selected").val();
	alert(main)
	if (main == "구독서비스") {
		var output = "<option>----</option><option>반찬</option><option>유제품</option>";
		$("#sub_category").html(output);
	}
	if (main == "우리동네장보기") {
		$.ajax({

			url : "/myhome/sub/martlist2",
			type : "post",
			cache : false,
			dataType : "json",
			data : {

			},
			success : function(data) {
				var c = data.c;

				if (c > 0) {

					var output = "<option>----</option>";
					for (var i = 0; i < c; i++) {
						output += "<option>" + data.result[i].martname
								+ "</option>"

					}
					$("#sub_category").html(output);

				} else {

				}

			},
			error : function() {
				// 에러 처리
			}
		})

	}

}
