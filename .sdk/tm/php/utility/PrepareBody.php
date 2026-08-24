<?php
declare(strict_types=1);

// Stytch SDK utility: prepare_body

class StytchPrepareBody
{
    public static function call(StytchContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
