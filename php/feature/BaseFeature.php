<?php
declare(strict_types=1);

// Stytch SDK base feature

class StytchBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(StytchContext $ctx, array $options): void {}
    public function PostConstruct(StytchContext $ctx): void {}
    public function PostConstructEntity(StytchContext $ctx): void {}
    public function SetData(StytchContext $ctx): void {}
    public function GetData(StytchContext $ctx): void {}
    public function GetMatch(StytchContext $ctx): void {}
    public function SetMatch(StytchContext $ctx): void {}
    public function PrePoint(StytchContext $ctx): void {}
    public function PreSpec(StytchContext $ctx): void {}
    public function PreRequest(StytchContext $ctx): void {}
    public function PreResponse(StytchContext $ctx): void {}
    public function PreResult(StytchContext $ctx): void {}
    public function PreDone(StytchContext $ctx): void {}
    public function PreUnexpected(StytchContext $ctx): void {}
}
