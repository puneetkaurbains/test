$(document).ready(function(){
	
	$("#radioLabel").click(function(){			
		createQuestion('Radio')
	});

	$("#checkBoxLabel").click(function(){		
		createQuestion('Checkbox')
	});

	function createQuestion(checkBoxOrRadio){
		var newQuestionAdd = "<div class='questionDiv'><span><label><input type='"+checkBoxOrRadio+"' disabled/>"+checkBoxOrRadio+"</label></span><a class='boxclose'></a><br><br>"+
							"<input type='text' class='surveyQuestion' placeholder='Please Enter The Survey Question'></input><br><br>"+
							"<input type='text' class='surveyOptions' style='margin-bottom:10px;' placeholder='Please Enter Options Seperated by Commas(,)'></input></div>";
		
		$(".questionsContainer").append(newQuestionAdd);
	}

	$(".questionsContainer").on('click','.boxclose',function(){
		$(this).parent().remove();
	});

	$("#preview").click(function(){
		$("#composerMode").hide();
		$("#previewMode").show();
		var surveyTitle = $(".surveyTitle input[type='text']").val();
		$("#previewSurveyHeader h3").append(surveyTitle);
		$(".questionsContainer .questionDiv").each(function(){
			var radioOrCheckbox = $(this).find("label").find("input").attr("type");
			var surveyQuestion = $(this).find(".surveyQuestion").val();
			var surveyOptions = $(this).find(".surveyOptions").val();
			var bearkOptions = surveyOptions.split(',');
			
			var createQuestionPreview = "<div class='surveyQuestionPreview'>"+surveyQuestion+"</div>";

			for(i=0;i<bearkOptions.length;i++){
				createQuestionPreview = createQuestionPreview + "<input type='"+radioOrCheckbox+"' name='options' value='"+bearkOptions[i]+"'>"+bearkOptions[i]+"<br>"
			}
			
			$("#previewSurveyQuestions").append(createQuestionPreview);
				
		});
	});

	$(".boxclosePreview").click(function(){
		$("#composerMode").show();
		$("#previewMode").hide();
		$("#previewSurveyHeader h3").empty();
		$("#previewSurveyQuestions").empty();
	});
});