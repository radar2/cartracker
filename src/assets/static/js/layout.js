function sidebarToggle() {
    $("#sidebar-toggler").click(()=>{
        $(".sidebar-container").toggleClass('sidebar-expanded');
    });

    $('.sidebar-container ul li').on('click', function() {
        $('.sidebar-container ul li.active').removeClass('active');
        $(this).addClass('active')
    })
}


