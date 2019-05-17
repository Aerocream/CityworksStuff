// ==UserScript==
// @name         New CityWorks User Script
// @namespace    http://www.aerocream.com/tm/CityWorksAdmin.user.js
// @updateURL    http://www.aerocream.com/tm/CityWorksAdmin.user.js
// @version      1.7
// @description  Automate User Account Creation in CityWorks
// @author       DustinDeBres@colliergov.net
// @match        http://bcceamcwksprd/*/Designer/Employee.aspx
// @match        http://bcceamcwksqas/*/Designer/Employee.aspx
// @match        http://bcceamcwksdev/*/Designer/Employee.aspx
// @match        https://cityworksdev.colliercountyfl.gov/*/Designer/Employee.aspx
// @match        https://cityworksqas.colliercountyfl.gov/*/Designer/Employee.aspx
// @match        https://cityworks.colliercountyfl.gov/*/Designer/Employee.aspx
// @grant        none


// ==/UserScript==
$(document).ready(function(){
	// Project
    $('#tab_Permissions').prepend('<div class="text-center"><input type="button" class="btn btn-info btn-xs" value=" View Only" id="ViewOnly">&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-info btn-xs" value=" Basic" id="Basic">&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-info btn-xs" value=" Supervisor" id="Super">&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-info btn-xs" value=" Plant Basic" id="BasicPlant">&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-info btn-xs" value=" Plant Supervisor" id="SuperPlant">&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-info btn-xs" value="Remove Cityworks Access" id="Remove"></div>');
	// Create Hide Inactive
	$('#DesignerEmployeerow193').prepend('<label id="label_HideInactive" class="control-label col-md-6" for="chkHideInactive">Hide Inactive</label><input name="ctl00$Content$chkHideInactive" type="checkbox" id="chkHideInactive">');
	$('#chkHideInactive').click(function(){
		if($("#chkHideInactive").prop('checked') === true){$('.inactive').hide();}
		if($("#chkHideInactive").prop('checked') === false){$('.inactive').show();}
    });
	$('#chkShowAll').click(function(){
		if($("#chkHideInactive").prop('checked') === true){$('.inactive').hide();}
		if($("#chkHideInactive").prop('checked') === false){$('.inactive').show();}
    });
	$('#DesignerEmployeehtml186').click(function(){
		if($("#chkHideInactive").prop('checked') === true){$('.inactive').hide();}
		if($("#chkHideInactive").prop('checked') === false){$('.inactive').show();}
	});
	// Set Organization to show Value First
	$("#cboOrganization").children('option').each(function(){$(this).prepend($(this).val() + " - ");});
    // Buttons
    $('#ViewOnly').click(function(){
        //Equipment Change Out
        if($("#chkEquipmentChangeOutCanChange").prop('checked') === false){$('#chkEquipmentChangeOutCanChange').prop('checked', true).triggerHandler('click');}
        // Inspection
        if($('#chkInspectionCanCreate').prop('checked') === false){$('#chkInspectionCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanSubmitTo').prop('checked') === false){$('#chkInspectionCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanClose').prop('checked') === false){$('#chkInspectionCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanEditAfterClose').prop('checked') === false){$('#chkInspectionCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanCancel').prop('checked') === false){$('#chkInspectionCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanInspect').prop('checked') === false){$('#chkInspectionCanInspect').prop('checked', true).triggerHandler('click');}
        // Project
        if($('#chkProjectCanInitiate').prop('checked') === false){$('#chkProjectCanInitiate').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanApprovedBy').prop('checked') === false){$('#chkProjectCanApprovedBy').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanAssignedTo').prop('checked') === false){$('#chkProjectCanAssignedTo').prop('checked', true).triggerHandler('click');}
        // Search
        if($('#chkSearchCanViewContractCost').prop('checked') === false){$('#chkSearchCanViewContractCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewSrLaborCost').prop('checked') === false){$('#chkSearchCanViewSrLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoLaborCost').prop('checked') === false){$('#chkSearchCanViewWoLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoEquipmentCost').prop('checked') === false){$('#chkSearchCanViewWoEquipmentCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoMaterialCost').prop('checked') === false){$('#chkSearchCanViewWoMaterialCost').prop('checked', true).triggerHandler('click');}
        // Service Request
        if($('#chkRequestCanCreate').prop('checked') === false){$('#chkRequestCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanSubmitTo').prop('checked') === false){$('#chkRequestCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanClose').prop('checked') === false){$('#chkRequestCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanEditAfterClose').prop('checked') === false){$('#chkRequestCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanCancel').prop('checked') === false){$('#chkRequestCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanDispatchTo').prop('checked') === false){$('#chkRequestCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Service Request Template
        if($('#chkProblemLeafCanSubmitTo').prop('checked') === false){$('#chkProblemLeafCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkProblemLeafCanDispatchTo').prop('checked') === false){$('#chkProblemLeafCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Storeroom
        if($('#chkStoreroomTransferCanRequest').prop('checked') === false){$('#chkStoreroomTransferCanRequest').prop('checked', true).triggerHandler('click');}
        // Task
        if($('#chkTaskCanAssignTo').prop('checked') === false){$('#chkTaskCanAssignTo').prop('checked', false).triggerHandler('click');}
        // Work Order
        if($('#chkWorkOrderCanCreate').prop('checked') === false){$('#chkWorkOrderCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSubmitTo').prop('checked') === false){$('#chkWorkOrderCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanClose').prop('checked') === false){$('#chkWorkOrderCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanEditAfterClose').prop('checked') === false){$('#chkWorkOrderCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanCancel').prop('checked') === false){$('#chkWorkOrderCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanRequest').prop('checked') === false){$('#chkWorkOrderCanRequest').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanComplete').prop('checked') === false){$('#chkWorkOrderCanComplete').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSupervise').prop('checked') === false){$('#chkWorkOrderCanSupervise').prop('checked', true).triggerHandler('click');}
		// License
		if($('#chkWMEDITPLUS').prop('checked') === false){$('#chkWMEDITPLUS').prop('checked', true).triggerHandler('click');}
		if($('#chkSTOREROOM').prop('checked') === false){$('#chkSTOREROOM').prop('checked', false).triggerHandler('click');}
		if($('#chkMOBILEIOS').prop('checked') === false){$('#chkMOBILEIOS').prop('checked', false).triggerHandler('click');}
		// Is Active
		if($('#chkIsActive').prop('checked') === false){$('#chkIsActive').prop('checked', true).triggerHandler('click');}
    });
$('#Basic').click(function(){
        //Equipment Change Out
        if($("#chkEquipmentChangeOutCanChange").prop('checked') === false){$('#chkEquipmentChangeOutCanChange').prop('checked', true).triggerHandler('click');}
        // Inspection
        if($('#chkInspectionCanCreate').prop('checked') === false){$('#chkInspectionCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanSubmitTo').prop('checked') === false){$('#chkInspectionCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanClose').prop('checked') === false){$('#chkInspectionCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanEditAfterClose').prop('checked') === false){$('#chkInspectionCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanCancel').prop('checked') === false){$('#chkInspectionCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanInspect').prop('checked') === false){$('#chkInspectionCanInspect').prop('checked', true).triggerHandler('click');}
        // Project
        if($('#chkProjectCanInitiate').prop('checked') === false){$('#chkProjectCanInitiate').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanApprovedBy').prop('checked') === false){$('#chkProjectCanApprovedBy').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanAssignedTo').prop('checked') === false){$('#chkProjectCanAssignedTo').prop('checked', true).triggerHandler('click');}
        // Search
        if($('#chkSearchCanViewContractCost').prop('checked') === false){$('#chkSearchCanViewContractCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewSrLaborCost').prop('checked') === false){$('#chkSearchCanViewSrLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoLaborCost').prop('checked') === false){$('#chkSearchCanViewWoLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoEquipmentCost').prop('checked') === false){$('#chkSearchCanViewWoEquipmentCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoMaterialCost').prop('checked') === false){$('#chkSearchCanViewWoMaterialCost').prop('checked', true).triggerHandler('click');}
        // Service Request
        if($('#chkRequestCanCreate').prop('checked') === false){$('#chkRequestCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanSubmitTo').prop('checked') === false){$('#chkRequestCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanClose').prop('checked') === false){$('#chkRequestCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanEditAfterClose').prop('checked') === false){$('#chkRequestCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanCancel').prop('checked') === false){$('#chkRequestCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanDispatchTo').prop('checked') === false){$('#chkRequestCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Service Request Template
        if($('#chkProblemLeafCanSubmitTo').prop('checked') === false){$('#chkProblemLeafCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkProblemLeafCanDispatchTo').prop('checked') === false){$('#chkProblemLeafCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Storeroom
        if($('#chkStoreroomTransferCanRequest').prop('checked') === false){$('#chkStoreroomTransferCanRequest').prop('checked', true).triggerHandler('click');}
        // Task
        if($('#chkTaskCanAssignTo').prop('checked') === false){$('#chkTaskCanAssignTo').prop('checked', false).triggerHandler('click');}
        // Work Order
        if($('#chkWorkOrderCanCreate').prop('checked') === false){$('#chkWorkOrderCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSubmitTo').prop('checked') === false){$('#chkWorkOrderCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanClose').prop('checked') === false){$('#chkWorkOrderCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanEditAfterClose').prop('checked') === false){$('#chkWorkOrderCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanCancel').prop('checked') === false){$('#chkWorkOrderCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanRequest').prop('checked') === false){$('#chkWorkOrderCanRequest').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanComplete').prop('checked') === false){$('#chkWorkOrderCanComplete').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSupervise').prop('checked') === false){$('#chkWorkOrderCanSupervise').prop('checked', true).triggerHandler('click');}
		// License
		if($('#chkWMEDITPLUS').prop('checked') === false){$('#chkWMEDITPLUS').prop('checked', true).triggerHandler('click');}
		if($('#chkSTOREROOM').prop('checked') === false){$('#chkSTOREROOM').prop('checked', true).triggerHandler('click');}
		if($('#chkMOBILEIOS').prop('checked') === false){$('#chkMOBILEIOS').prop('checked', true).triggerHandler('click');}
		// Is Active
		if($('#chkIsActive').prop('checked') === false){$('#chkIsActive').prop('checked', true).triggerHandler('click');}
    });

    $('#Super').click(function(){
        //Equipment Change Out
        if($("#chkEquipmentChangeOutCanChange").prop('checked') === false){$('#chkEquipmentChangeOutCanChange').prop('checked', true).triggerHandler('click');}
        // Inspection
        if($('#chkInspectionCanCreate').prop('checked') === false){$('#chkInspectionCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanSubmitTo').prop('checked') === false){$('#chkInspectionCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanClose').prop('checked') === false){$('#chkInspectionCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanEditAfterClose').prop('checked') === false){$('#chkInspectionCanEditAfterClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanCancel').prop('checked') === false){$('#chkInspectionCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanInspect').prop('checked') === false){$('#chkInspectionCanInspect').prop('checked', true).triggerHandler('click');}
        // Project
        if($('#chkProjectCanInitiate').prop('checked') === false){$('#chkProjectCanInitiate').prop('checked', true).triggerHandler('click');}
        if($('#chkProjectCanApprovedBy').prop('checked') === false){$('#chkProjectCanApprovedBy').prop('checked', true).triggerHandler('click');}
        if($('#chkProjectCanAssignedTo').prop('checked') === false){$('#chkProjectCanAssignedTo').prop('checked', true).triggerHandler('click');}
        // Search
        if($('#chkSearchCanViewContractCost').prop('checked') === false){$('#chkSearchCanViewContractCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewSrLaborCost').prop('checked') === false){$('#chkSearchCanViewSrLaborCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoLaborCost').prop('checked') === false){$('#chkSearchCanViewWoLaborCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoEquipmentCost').prop('checked') === false){$('#chkSearchCanViewWoEquipmentCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoMaterialCost').prop('checked') === false){$('#chkSearchCanViewWoMaterialCost').prop('checked', true).triggerHandler('click');}
        // Service Request
        if($('#chkRequestCanCreate').prop('checked') === false){$('#chkRequestCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanSubmitTo').prop('checked') === false){$('#chkRequestCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanClose').prop('checked') === false){$('#chkRequestCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanEditAfterClose').prop('checked') === false){$('#chkRequestCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanCancel').prop('checked') === false){$('#chkRequestCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkRequestCanDispatchTo').prop('checked') === false){$('#chkRequestCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Service Request Template
        if($('#chkProblemLeafCanSubmitTo').prop('checked') === false){$('#chkProblemLeafCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkProblemLeafCanDispatchTo').prop('checked') === false){$('#chkProblemLeafCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Storeroom
        if($('#chkStoreroomTransferCanRequest').prop('checked') === false){$('#chkStoreroomTransferCanRequest').prop('checked', true).triggerHandler('click');}
        // Task
        if($('#chkTaskCanAssignTo').prop('checked') === false){$('#chkTaskCanAssignTo').prop('checked', true).triggerHandler('click');}
        // Work Order
        if($('#chkWorkOrderCanCreate').prop('checked') === false){$('#chkWorkOrderCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSubmitTo').prop('checked') === false){$('#chkWorkOrderCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanClose').prop('checked') === false){$('#chkWorkOrderCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanEditAfterClose').prop('checked') === false){$('#chkWorkOrderCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanCancel').prop('checked') === false){$('#chkWorkOrderCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanRequest').prop('checked') === false){$('#chkWorkOrderCanRequest').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanComplete').prop('checked') === false){$('#chkWorkOrderCanComplete').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSupervise').prop('checked') === false){$('#chkWorkOrderCanSupervise').prop('checked', true).triggerHandler('click');}
		// License
		if($('#chkWMEDITPLUS').prop('checked') === false){$('#chkWMEDITPLUS').prop('checked', true).triggerHandler('click');}
		if($('#chkSTOREROOM').prop('checked') === false){$('#chkSTOREROOM').prop('checked', true).triggerHandler('click');}
		if($('#chkMOBILEIOS').prop('checked') === false){$('#chkMOBILEIOS').prop('checked', true).triggerHandler('click');}
		// Is Active
		if($('#chkIsActive').prop('checked') === false){$('#chkIsActive').prop('checked', true).triggerHandler('click');}
    });

	$('#BasicPlant').click(function(){
        //Equipment Change Out
        if($("#chkEquipmentChangeOutCanChange").prop('checked') === false){$('#chkEquipmentChangeOutCanChange').prop('checked', true).triggerHandler('click');}
        // Inspection
        if($('#chkInspectionCanCreate').prop('checked') === false){$('#chkInspectionCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanSubmitTo').prop('checked') === false){$('#chkInspectionCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanClose').prop('checked') === false){$('#chkInspectionCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanEditAfterClose').prop('checked') === false){$('#chkInspectionCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanCancel').prop('checked') === false){$('#chkInspectionCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanInspect').prop('checked') === false){$('#chkInspectionCanInspect').prop('checked', true).triggerHandler('click');}
        // Project
        if($('#chkProjectCanInitiate').prop('checked') === false){$('#chkProjectCanInitiate').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanApprovedBy').prop('checked') === false){$('#chkProjectCanApprovedBy').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanAssignedTo').prop('checked') === false){$('#chkProjectCanAssignedTo').prop('checked', true).triggerHandler('click');}
        // Search
        if($('#chkSearchCanViewContractCost').prop('checked') === false){$('#chkSearchCanViewContractCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewSrLaborCost').prop('checked') === false){$('#chkSearchCanViewSrLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoLaborCost').prop('checked') === false){$('#chkSearchCanViewWoLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoEquipmentCost').prop('checked') === false){$('#chkSearchCanViewWoEquipmentCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoMaterialCost').prop('checked') === false){$('#chkSearchCanViewWoMaterialCost').prop('checked', true).triggerHandler('click');}
        // Service Request
        if($('#chkRequestCanCreate').prop('checked') === false){$('#chkRequestCanCreate').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanSubmitTo').prop('checked') === false){$('#chkRequestCanSubmitTo').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanClose').prop('checked') === false){$('#chkRequestCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanEditAfterClose').prop('checked') === false){$('#chkRequestCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanCancel').prop('checked') === false){$('#chkRequestCanCancel').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanDispatchTo').prop('checked') === false){$('#chkRequestCanDispatchTo').prop('checked', false).triggerHandler('click');}
        // Service Request Template
        if($('#chkProblemLeafCanSubmitTo').prop('checked') === false){$('#chkProblemLeafCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkProblemLeafCanDispatchTo').prop('checked') === false){$('#chkProblemLeafCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Storeroom
        if($('#chkStoreroomTransferCanRequest').prop('checked') === false){$('#chkStoreroomTransferCanRequest').prop('checked', true).triggerHandler('click');}
        // Task
        if($('#chkTaskCanAssignTo').prop('checked') === false){$('#chkTaskCanAssignTo').prop('checked', false).triggerHandler('click');}
        // Work Order
        if($('#chkWorkOrderCanCreate').prop('checked') === false){$('#chkWorkOrderCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSubmitTo').prop('checked') === false){$('#chkWorkOrderCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanClose').prop('checked') === false){$('#chkWorkOrderCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanEditAfterClose').prop('checked') === false){$('#chkWorkOrderCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanCancel').prop('checked') === false){$('#chkWorkOrderCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanRequest').prop('checked') === false){$('#chkWorkOrderCanRequest').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanComplete').prop('checked') === false){$('#chkWorkOrderCanComplete').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSupervise').prop('checked') === false){$('#chkWorkOrderCanSupervise').prop('checked', true).triggerHandler('click');}
		// License
		if($('#chkWMEDITPLUS').prop('checked') === false){$('#chkWMEDITPLUS').prop('checked', true).triggerHandler('click');}
		if($('#chkSTOREROOM').prop('checked') === false){$('#chkSTOREROOM').prop('checked', true).triggerHandler('click');}
		if($('#chkMOBILEIOS').prop('checked') === false){$('#chkMOBILEIOS').prop('checked', true).triggerHandler('click');}
		// Is Active
		if($('#chkIsActive').prop('checked') === false){$('#chkIsActive').prop('checked', true).triggerHandler('click');}
    });

    $('#SuperPlant').click(function(){
        //Equipment Change Out
        if($("#chkEquipmentChangeOutCanChange").prop('checked') === false){$('#chkEquipmentChangeOutCanChange').prop('checked', true).triggerHandler('click');}
        // Inspection
        if($('#chkInspectionCanCreate').prop('checked') === false){$('#chkInspectionCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanSubmitTo').prop('checked') === false){$('#chkInspectionCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanClose').prop('checked') === false){$('#chkInspectionCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanEditAfterClose').prop('checked') === false){$('#chkInspectionCanEditAfterClose').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanCancel').prop('checked') === false){$('#chkInspectionCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkInspectionCanInspect').prop('checked') === false){$('#chkInspectionCanInspect').prop('checked', true).triggerHandler('click');}
        // Project
        if($('#chkProjectCanInitiate').prop('checked') === false){$('#chkProjectCanInitiate').prop('checked', true).triggerHandler('click');}
        if($('#chkProjectCanApprovedBy').prop('checked') === false){$('#chkProjectCanApprovedBy').prop('checked', true).triggerHandler('click');}
        if($('#chkProjectCanAssignedTo').prop('checked') === false){$('#chkProjectCanAssignedTo').prop('checked', true).triggerHandler('click');}
        // Search
        if($('#chkSearchCanViewContractCost').prop('checked') === false){$('#chkSearchCanViewContractCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewSrLaborCost').prop('checked') === false){$('#chkSearchCanViewSrLaborCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoLaborCost').prop('checked') === false){$('#chkSearchCanViewWoLaborCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoEquipmentCost').prop('checked') === false){$('#chkSearchCanViewWoEquipmentCost').prop('checked', true).triggerHandler('click');}
        if($('#chkSearchCanViewWoMaterialCost').prop('checked') === false){$('#chkSearchCanViewWoMaterialCost').prop('checked', true).triggerHandler('click');}
        // Service Request
        if($('#chkRequestCanCreate').prop('checked') === false){$('#chkRequestCanCreate').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanSubmitTo').prop('checked') === false){$('#chkRequestCanSubmitTo').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanClose').prop('checked') === false){$('#chkRequestCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanEditAfterClose').prop('checked') === false){$('#chkRequestCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanCancel').prop('checked') === false){$('#chkRequestCanCancel').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanDispatchTo').prop('checked') === false){$('#chkRequestCanDispatchTo').prop('checked', false).triggerHandler('click');}
        // Service Request Template
        if($('#chkProblemLeafCanSubmitTo').prop('checked') === false){$('#chkProblemLeafCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkProblemLeafCanDispatchTo').prop('checked') === false){$('#chkProblemLeafCanDispatchTo').prop('checked', true).triggerHandler('click');}
        // Storeroom
        if($('#chkStoreroomTransferCanRequest').prop('checked') === false){$('#chkStoreroomTransferCanRequest').prop('checked', true).triggerHandler('click');}
        // Task
        if($('#chkTaskCanAssignTo').prop('checked') === false){$('#chkTaskCanAssignTo').prop('checked', true).triggerHandler('click');}
        // Work Order
        if($('#chkWorkOrderCanCreate').prop('checked') === false){$('#chkWorkOrderCanCreate').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSubmitTo').prop('checked') === false){$('#chkWorkOrderCanSubmitTo').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanClose').prop('checked') === false){$('#chkWorkOrderCanClose').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanEditAfterClose').prop('checked') === false){$('#chkWorkOrderCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanCancel').prop('checked') === false){$('#chkWorkOrderCanCancel').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanRequest').prop('checked') === false){$('#chkWorkOrderCanRequest').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanComplete').prop('checked') === false){$('#chkWorkOrderCanComplete').prop('checked', true).triggerHandler('click');}
        if($('#chkWorkOrderCanSupervise').prop('checked') === false){$('#chkWorkOrderCanSupervise').prop('checked', true).triggerHandler('click');}
		// License
		if($('#chkWMEDITPLUS').prop('checked') === false){$('#chkWMEDITPLUS').prop('checked', true).triggerHandler('click');}
		if($('#chkSTOREROOM').prop('checked') === false){$('#chkSTOREROOM').prop('checked', true).triggerHandler('click');}
		if($('#chkMOBILEIOS').prop('checked') === false){$('#chkMOBILEIOS').prop('checked', true).triggerHandler('click');}
		// Is Active
		if($('#chkIsActive').prop('checked') === false){$('#chkIsActive').prop('checked', true).triggerHandler('click');}
    });

    $('#Remove').click(function(){
        //Equipment Change Out
        if($("#chkEquipmentChangeOutCanChange").prop('checked') === true){$('#chkEquipmentChangeOutCanChange').prop('checked', false).triggerHandler('click');}
        // Inspection
        if($('#chkInspectionCanCreate').prop('checked') === true){$('#chkInspectionCanCreate').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanSubmitTo').prop('checked') === true){$('#chkInspectionCanSubmitTo').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanClose').prop('checked') === true){$('#chkInspectionCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanEditAfterClose').prop('checked') === true){$('#chkInspectionCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanCancel').prop('checked') === true){$('#chkInspectionCanCancel').prop('checked', false).triggerHandler('click');}
        if($('#chkInspectionCanInspect').prop('checked') === true){$('#chkInspectionCanInspect').prop('checked', false).triggerHandler('click');}
        // Project
        if($('#chkProjectCanInitiate').prop('checked') === true){$('#chkProjectCanInitiate').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanApprovedBy').prop('checked') === true){$('#chkProjectCanApprovedBy').prop('checked', false).triggerHandler('click');}
        if($('#chkProjectCanAssignedTo').prop('checked') === true){$('#chkProjectCanAssignedTo').prop('checked', false).triggerHandler('click');}
        // Search
        if($('#chkSearchCanViewContractCost').prop('checked') === true){$('#chkSearchCanViewContractCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewSrLaborCost').prop('checked') === true){$('#chkSearchCanViewSrLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoLaborCost').prop('checked') === true){$('#chkSearchCanViewWoLaborCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoEquipmentCost').prop('checked') === true){$('#chkSearchCanViewWoEquipmentCost').prop('checked', false).triggerHandler('click');}
        if($('#chkSearchCanViewWoMaterialCost').prop('checked') === true){$('#chkSearchCanViewWoMaterialCost').prop('checked', false).triggerHandler('click');}
        // Service Request
        if($('#chkRequestCanCreate').prop('checked') === true){$('#chkRequestCanCreate').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanSubmitTo').prop('checked') === true){$('#chkRequestCanSubmitTo').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanClose').prop('checked') === true){$('#chkRequestCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanEditAfterClose').prop('checked') === true){$('#chkRequestCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanCancel').prop('checked') === true){$('#chkRequestCanCancel').prop('checked', false).triggerHandler('click');}
        if($('#chkRequestCanDispatchTo').prop('checked') === true){$('#chkRequestCanDispatchTo').prop('checked', false).triggerHandler('click');}
        // Service Request Template
        if($('#chkProblemLeafCanSubmitTo').prop('checked') === true){$('#chkProblemLeafCanSubmitTo').prop('checked', false).triggerHandler('click');}
        if($('#chkProblemLeafCanDispatchTo').prop('checked') === true){$('#chkProblemLeafCanDispatchTo').prop('checked', false).triggerHandler('click');}
        // Storeroom
        if($('#chkStoreroomTransferCanRequest').prop('checked') === true){$('#chkStoreroomTransferCanRequest').prop('checked', false).triggerHandler('click');}
        // Task
        if($('#chkTaskCanAssignTo').prop('checked') === true){$('#chkTaskCanAssignTo').prop('checked', false).triggerHandler('click');}
        // Work Order
        if($('#chkWorkOrderCanCreate').prop('checked') === true){$('#chkWorkOrderCanCreate').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanSubmitTo').prop('checked') === true){$('#chkWorkOrderCanSubmitTo').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanClose').prop('checked') === true){$('#chkWorkOrderCanClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanEditAfterClose').prop('checked') === true){$('#chkWorkOrderCanEditAfterClose').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanCancel').prop('checked') === true){$('#chkWorkOrderCanCancel').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanRequest').prop('checked') === true){$('#chkWorkOrderCanRequest').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanComplete').prop('checked') === true){$('#chkWorkOrderCanComplete').prop('checked', false).triggerHandler('click');}
        if($('#chkWorkOrderCanSupervise').prop('checked') === true){$('#chkWorkOrderCanSupervise').prop('checked', false).triggerHandler('click');}
		// License
		 if($('#chkWMEDITPLUS').prop('checked') === true){$('#chkWMEDITPLUS').prop('checked', false).triggerHandler('click');}
		 if($('#chkSTOREROOM').prop('checked') === true){$('#chkSTOREROOM').prop('checked', false).triggerHandler('click');}
		 if($('#chkMOBILEIOS').prop('checked') === true){$('#chkMOBILEIOS').prop('checked', false).triggerHandler('click');}
		// Is Active
		 if($('#chkIsActive').prop('checked') === true){$('#chkIsActive').prop('checked', false).triggerHandler('click');}
		});
});