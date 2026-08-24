<?php
declare(strict_types=1);

// Stytch SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class StytchMakeContext
{
    public static function call(array $ctxmap, ?StytchContext $basectx): StytchContext
    {
        return new StytchContext($ctxmap, $basectx);
    }
}
