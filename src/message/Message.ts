import i18n from '../locale/index'
import Vue from 'vue'

const vueInstance = new Vue({i18n})

export default {
    COPY_SUCCESS: 'successful_copy',
    SUCCESS: 'success',
    OPERATION_SUCCESS: 'successful_operation',
    UPDATE_SUCCESS: 'update_completed',


    PLEASE_SET_WALLET_PASSWORD_INFO: 'please_set_your_wallet_password',
    PLEASE_ENTER_MNEMONIC_INFO: 'Please_enter_a_mnemonic_to_ensure_that_the_mnemonic_is_correct',
    PLEASE_SWITCH_NETWORK: 'walletCreateNetTypeRemind',
    NO_MNEMONIC_INFO: 'no_mnemonic',

    WALLET_NAME_INPUT_ERROR: 'walletCreateWalletNameRemind',
    PASSWORD_CREATE_ERROR: 'createLockPWRemind',
    INCONSISTENT_PASSWORD_ERROR: 'createLockCheckPWRemind',
    PASSWORD_HIT_SETTING_ERROR: 'createLockPWTxtRemind',
    WRONG_PASSWORD_ERROR: 'password_error',
    MOSAIC_NAME_NULL_ERROR: 'mosaic_name_can_not_be_null',
    QR_GENERATION_ERROR: 'QR_code_generation_failed',
    ADDRESS_FORMAT_ERROR: 'address_format_error',
    AMOUNT_LESS_THAN_0_ERROR: 'amount_can_not_be_less_than_0',
    FEE_LESS_THAN_0_ERROR: 'fee_can_not_be_less_than_0',
    SUPPLY_LESS_THAN_0_ERROR: 'supply_can_not_less_than_0',
    DIVISIBILITY_LESS_THAN_0_ERROR: 'divisibility_can_not_less_than_0',
    DURATION_LESS_THAN_0_ERROR: 'duration_can_not_less_than_0',
    DURATION_MORE_THAN_1_YEARS_ERROR: 'duration_can_not_more_than_1_years',
    DURATION_MORE_THAN_10_YEARS_ERROR: 'duration_can_not_more_than_10_years',
    MNEMONIC_INCONSISTENCY_ERROR: 'Mnemonic_inconsistency',
    PASSWORD_SETTING_INPUT_ERROR: 'walletCreatePasswordRemind',
    MNENOMIC_INPUT_ERROR: 'Mnemonic_input_error',
    OPERATION_FAILED_ERROR: 'operation_failed',
    NODE_NULL_ERROR:'point_null_error',
    INPUT_EMPTY_ERROR:'Any_information_cannot_be_empty',

    CO_SIGNER_NULL_ERROR:'co_signers_amount_less_than_0',
    MIN_APPROVAL_LESS_THAN_0_ERROR:'min_approval_amount_less_than_0',
    MIN_REMOVAL_LESS_THAN_0_ERROR:'min_removal_amount_less_than_0',
    ILLEGAL_PUBLICKEY_ERROR:'illegal_publickey_in_the_co_signed_list',
    ILLEGAL_MIN_APPROVAL_ERROR:'min_approval_amount_illegal',
    ILLEGAL_MIN_REMOVAL_ERROR:'min_removal_amount_illegal'

}
