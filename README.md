# Virtual Desktops Only on Primary, for Plasma 6

This is a fork of "[Virtual Desktops Only On Primary][origin]" by wsdfhjxc,
adapted for Plasma 6.

This enables virtual desktop functionality only on the primary monitor.

> [!IMPORTANT]
> When manually enabling this, please do it **on your primary monitor**.
> Otherwise this determines the secondary monitor as the primary monitor.

## Installation

### From GUI

0. Download a `.kwinscript` file from the [Releases] page.
1. Open "System Settings".
2. Select "KWin Scripts" sidebar item.
3. Press "Install from File…" button.
4. Select the downloaded `.kwinscript` file.
5. Enable it **on your primary monitor**.

### From the source

```console
git clone https://github.com/eatsu/kwin-script-virtual-desktops-only-on-primary.git
cd kwin-script-virtual-desktops-only-on-primary
kpackagetool6 -t KWin/Script -i package
```

## License

GPLv3

## Acknowledgements

- [wsdfhjxc], the original author of "[Virtual Desktops Only On Primary][origin]"

[wsdfhjxc]: https://github.com/wsdfhjxc
[origin]: https://github.com/wsdfhjxc/kwin-scripts/tree/master/virtual-desktops-only-on-primary
[Releases]: https://github.com/eatsu/kwin-script-virtual-desktops-only-on-primary/releases
