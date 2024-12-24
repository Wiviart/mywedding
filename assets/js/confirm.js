var webroot = 'https://preview.iwedding.info';
var events = JSON.parse('{"61990349db8f76231c132064":"L\u1ec4 C\u01af\u1edaI NH\u00c0 N\u1eee","61990349db8f76231c132065":"TI\u1ec6C C\u01af\u1edaI NH\u00c0 N\u1eee","61990349db8f76231c132066":"L\u1ec4 C\u01af\u1edaI NH\u00c0 NAM","63842aaa99d79a0fe97294c5":"TI\u1ec6C C\u01af\u1edaI NH\u00c0 NAM"}');
var is_premium = '1';
if ($("#search-form").length) {
    $("#search-form").validate({
        errorLabelContainer: $("#search-form div.errors"),
        rules: {
            name: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Vui lòng nhập tên, số điện thoại hoặc mã khách mời của bạn!",
            }
        },
        submitHandler: function (form) {
            $("#search-form").find('button[type="submit"').attr('disabled', 'disabled');
            $.ajax({
                type: "GET",
                url: "https://preview.iwedding.info/search-guests",
                cache: false,
                contentType: false,
                processData: false,
                data: $(form).serialize(),
                success: function (res) {
                    if (!res.error) {
                        let data = res.data;
                        let html = '';
                        data.forEach((element) => {
                            let guestSubInfo = '';
                            let guestSubInfoArr = [];
                            if (element.code) {
                                guestSubInfoArr.push('Mã khách: ' + element.code);
                            }
                            if (element.phone) {
                                // guestSubInfoArr.push(element.phone);
                            }
                            if (element.email) {
                                // guestSubInfoArr.push(element.email);
                            }
                            if (events[element.event_id] !== undefined) {
                                guestSubInfoArr.push('Sự kiện: ' + events[element.event_id]);
                            }

                            if (guestSubInfoArr.length > 0) {
                                guestSubInfo = ' <small class="text-muted">( ' + guestSubInfoArr.join(' - ') + ' )</small>';
                            }

                            html += `<div class="p-3 border mb-2 rounded position-relative"><div class="form-check">
                                        <input class="form-check-input" type="radio" data-website-id="${element.website_id.$oid}" name="guestID" id="${element._id.$oid}" value="${element._id.$oid}">
                                        <label class="form-check-label fw-semibold" for="${element._id.$oid}">${element.name}${guestSubInfo}</label>
                                    </div><label class="position-absolute w-100 h-100 top-0 start-0" role="button" for="${element._id.$oid}"></label></div>`;
                        });
                        html += ` <button type="submit" class="mt-2 btn btn-dark search-id disabled w-100 btn-lg">Xem thiệp mời và xác nhận </button>`;
                        $('.list-guest-container').html(html);
                        $('.search-response-success').removeClass('d-none');
                        $('.search-response-error').addClass('d-none');
                        $('html, body').animate({
                            scrollTop: $(".list-guest-container").offset().top
                        }, 200);
                    } else {
                        $('.search-response-error p').html('Không tìm thấy thiệp mời của bạn. ĐỪNG LO. Vì cô dâu chú rể chưa làm chức năng này. Hãy thêm thông tin của bạn ở mục tiếp theo nhé!');
                        $('.search-response-error').removeClass('d-none');
                        $('.search-response-success').addClass('d-none');
                        $('html, body').animate({
                            scrollTop: $(".search-response-error").offset().top
                        }, 200);
                    }
                },
                complete: function () {
                    $("#search-form").find('button[type="submit"').removeAttr('disabled');
                }
            });
            return false;
        }
    });
}

if ($("#free-confirm-form").length) {
    $("#free-confirm-form").on('submit', function (event) {
        event.preventDefault();
        let isCorrect = true;
        let guestQuestions = [];
        let name = $("#free-confirm-form").find('input[name="name"]').val();
        let email = $("#free-confirm-form").find('input[name="email"]').val();
        let phone = $("#free-confirm-form").find('input[name="phone"]').val();
        let website_id = $("#free-confirm-form").find('input[name="website_id"]').val();
        if (name == '') {
            $("#free-confirm-form").find('input[name="name"]').addClass('is-invalid');
            isCorrect = false;
        }
        $('.event-question').each(function (index, element) {
            if (!$(element).hasClass('d-none')) {
                let guestQuestion = [];
                let eventID = '';
                $(element).find('.row-guest-questions .guest-question-content').each(function (index, formControlElement) {
                    eventID = $(formControlElement).parents('.row-guest-questions').data('event-id');
                    let guestQuestionElements = $(formControlElement).children('.guest-question');
                    let isRequired = guestQuestionElements.data('is-required');
                    let value = guestQuestionElements.val();
                    guestQuestion.push({
                        'type': guestQuestionElements.data('type'),
                        'question_id': guestQuestionElements.data('question-id'),
                        'result': value,
                    });
                    if (!value && isRequired == 1 && !guestQuestionElements.prop('disabled')) {
                        if (guestQuestionElements.prop("tagName") == 'SELECT') {
                            guestQuestionElements.addClass('is-invalid');
                        } else {
                            $(formControlElement).addClass('is-invalid');
                        }
                        isCorrect = false;
                    } else {
                        if (guestQuestionElements.prop("tagName") == 'SELECT') {
                            guestQuestionElements.removeClass('is-invalid');
                        } else {
                            $(formControlElement).removeClass('is-invalid');
                        }
                    }
                });
                guestQuestions.push({
                    [eventID]: guestQuestion
                });
            }
        });
        let event_ids = $("#free-confirm-form").find('input[name="event_ids[]"]:checked').map(function () {
            return $(this).val();
        }).get();

        if (event_ids.length <= 0) {
            $("#free-confirm-form").find('input[name="event_ids[]"]').addClass('is-invalid');
            isCorrect = false;
        }

        $("#free-confirm-form").find('select[name="attendance_status[]"]').each(function (index, element) {
            if (!$(element).closest(".event-question").hasClass("d-none") && $(element).val() == '') {
                $(element).addClass('is-invalid');
                isCorrect = false;
            }
        });

        if (!isCorrect) {
            $("div.commonerror").show();
            $('.is_premium_error').hide();
            return false;
        } else {
            $("div.commonerror").hide();
            $('.is_premium_error').hide();
        }

        let plus_ones = $("#free-confirm-form").find('select[name="plus_ones[]"]').map(function (index, element) {
            if (!$(element).closest(".event-question").hasClass("d-none")) {
                return $(this).val();
            }
        }).get();
        let attendance_status = $("#free-confirm-form").find('select[name="attendance_status[]"]').map(function (index, element) {
            if (!$(element).closest(".event-question").hasClass("d-none") && $(element).val() !== '') {
                return $(this).val();
            }
        }).get();
        $.ajax({
            type: "POST",
            url: "https://preview.iwedding.info/free-confirm",
            data: {
                name: name,
                email: email,
                website_id: website_id,
                plus_ones: plus_ones,
                phone: phone,
                attendance_status: attendance_status,
                event_ids: event_ids,
                is_premium: is_premium,
                guest_questions: guestQuestions,
            },
            beforeSend: function () {
                $("#free-confirm-form").find('button[type="submit"').attr('disabled', 'disabled');
            },
            success: function (res) {
                if (!res.error) {
                    $("#free-confirm-form").html(`<p class="text-center fs-5">
                    <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="ng-scope"><title>F28A5059-2988-42E8-A07D-911419DD80B1</title><desc>Created with sketchtool.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Guest-List---Add-Inline-Dialogs" transform="translate(-730.000000, -252.000000)" fill="#78CC61"><g id="dialog" transform="translate(690.000000, 216.000000)"><g id="message" transform="translate(40.000000, 26.000000)"><path d="M8.5,10 C3.80553623,10 0,13.8055362 0,18.5 C0,23.1944638 3.80553623,27 8.5,27 C13.1944638,27 17,23.1944638 17,18.5 C17,13.8055362 13.1944638,10 8.5,10 Z M12.5538841,14.7117101 L13.5931014,15.7627536 C11.2406957,18.1151594 8.88878261,20.4670725 6.53686957,22.8194783 C5.50307246,21.7625217 4.45202899,20.7233043 3.40689855,19.6781739 L4.44611594,18.6384638 L6.53686957,20.7287246 L12.5538841,14.7117101 Z" id="icon-green-success"></path></g></g></g></g></svg>` +
                        'Xác nhận thành công. Xin chân thành cảm ơn quý khách!' + '</p>');
                } else {
                    if (is_premium == 0) {
                        $("div.commonerror").hide();
                        $('.is_premium_error > span').html(res.message);
                        $('.is_premium_error').show();
                    }
                }
            },
            complete: function () {
                $("#free-confirm-form").find('button[type="submit"').removeAttr('disabled');
            },
            error: function () {
                $("#free-confirm-form").find('button[type="submit"').removeAttr('disabled');
            }
        });
    });

    $(document).on('change', 'input[name="event_ids[]"]', function (event) {
        let _this = $(this);
        $('#event-' + _this.val()).toggleClass('d-none', !_this.is(":checked"));
        $('#event-' + _this.val()).find('select').toggleClass('ignore', !_this.is(":checked"));
    });

    $("input[name='name']").on('input', function () {
        if ($(this).val() !== '') {
            $(this).removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid');
        }
    });

    $("input[name='event_ids[]']").on('change', function () {
        if ($("input[name='event_ids[]:checked']").length <= 0) {
            $("input[name='event_ids[]']").removeClass('is-invalid');
        } else {
            $("input[name='event_ids[]']").addClass('is-invalid');
        }
    });

    $("select[name='attendance_status[]'], select.guest-question").on('change', function () {
        if ($(this).val() !== '') {
            $(this).removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid');
        }
    });

    $(document).on('change', 'input[name="event_ids[]"]', function (event) {
        let _this = $(this);
        $('#event-' + _this.val()).toggleClass('d-none', !_this.is(":checked"));
        $('#event-' + _this.val()).find('select').toggleClass('ignore', !_this.is(":checked"));
    });
}

$(document).on('click', '.form-check-input', function (event) {
    if ($('.search-id').hasClass('disabled')) {
        $('.search-id').removeClass('disabled');
    }
});

$(document).on('submit', '#confirmation-form', function (event) {
    event.preventDefault();
    var guestID = $(this).find('input[name="guestID"]:checked').val();
    window.location.href = webroot + '/invitation/' + guestID + '#confirm';
    return false;
});

$(document).on('click', '.scroll-free-confirm', function (event) {
    $("#free-confirm-form").removeClass('d-none');
    $(".scroll-search-form").removeClass('d-none');
    $("#search-form").addClass('d-none');
    $(".scroll-free-confirm").addClass('d-none');
    $(".text-search-error-message").addClass('d-none');
});

// $(document).on('click', '.scroll-search-form', function(event) {
// 	$("#free-confirm-form").addClass('d-none');
// 	$(".scroll-search-form").addClass('d-none');
// 	$("#search-form").removeClass('d-none');
// 	$(".scroll-free-confirm").removeClass('d-none');
// 	$(".text-search-error-message").removeClass('d-none');
// });

$(window).on('load', function (event) {
    event.preventDefault();
});

$("select[name='attendance_status[]']").on('change', function () {
    let eventQuestion = $(this).closest(".event-question");
    let plusOnes = eventQuestion.find("select[name='plus_ones[]']");

    if ($(this).val() == 1) {
        plusOnes.prop('disabled', false);
        checkAttendanceStatus(eventQuestion, true);
    } else {
        plusOnes.removeClass("border-danger");
        plusOnes.prop('disabled', true);
        plusOnes.val(plusOnes.find('option:first').val());
        checkAttendanceStatus(eventQuestion, false);
    }
});
function checkAttendanceStatus(eventQuestion, status) {
    eventQuestion.find('.row-guest-questions .guest-question-content').each(function (index, formControlElement) {
        let guestQuestionElements = $(formControlElement).children('.guest-question');
        if (!status) {
            guestQuestionElements.prop('disabled', true);
            guestQuestionElements.removeClass("border-danger");
            $(formControlElement).removeClass('is-invalid');
            guestQuestionElements.removeClass('is-invalid');
            switch (guestQuestionElements.prop('tagName')) {
                case "TEXTAREA":
                case "INPUT":
                    guestQuestionElements.val('');
                    break;
                case "SELECT":
                    guestQuestionElements.val(guestQuestionElements.find('option:first').val());
                    break;
                default:
                    guestQuestionElements.val('');
                    break;
            }
        } else {
            guestQuestionElements.prop('disabled', false);
        }
    });
}